#!/bin/bash

# 定义颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 打印带颜色的信息
print_message() {
    echo -e "${2}${1}${NC}"
}

# 检查命令是否存在
check_command() {
    if ! command -v $1 &> /dev/null; then
        print_message "错误: $1 未安装，请先安装 $1" "$RED"
        exit 1
    fi
}

# 检查环境
print_message "正在检查环境..." "$YELLOW"
check_command "docker"
check_command "docker-compose"
check_command "node"
check_command "npm"

# 检查Node.js版本
NODE_VERSION=$(node -v | cut -d'v' -f2)
if (( $(echo "$NODE_VERSION 18.0" | awk '{print ($1 < $2)}') )); then
    print_message "错误: Node.js版本必须 >= 18.0" "$RED"
    exit 1
fi

# 创建.env文件（如果不存在）
if [ ! -f .env ]; then
    print_message "创建.env文件..." "$YELLOW"
    cat > .env << EOL
NEXT_PUBLIC_API_URL=http://api.example.com
NODE_ENV=production
EOL
fi

# 安装依赖
print_message "安装项目依赖..." "$YELLOW"
npm install

# 构建项目
print_message "构建项目..." "$YELLOW"
npm run build

# 创建Docker镜像
print_message "构建Docker镜像..." "$YELLOW"
cat > Dockerfile << EOL
FROM node:18-alpine

WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装生产环境依赖
RUN npm ci --only=production

# 复制构建文件和其他必要文件
COPY .next ./.next
COPY public ./public
COPY .env ./
COPY next.config.js ./

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
EOL

# 创建docker-compose文件
print_message "创建docker-compose.yml..." "$YELLOW"
cat > docker-compose.yml << EOL
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
EOL

# 构建和启动Docker容器
print_message "启动Docker容器..." "$YELLOW"
docker-compose up -d --build

# 检查部署状态
sleep 5
if curl -s http://localhost:3000 > /dev/null; then
    print_message "✅ 部署成功！应用已在 http://localhost:3000 运行" "$GREEN"
    print_message "可以使用以下命令管理应用：" "$YELLOW"
    echo "  查看日志: docker-compose logs -f"
    echo "  停止应用: docker-compose down"
    echo "  重启应用: docker-compose restart"
else
    print_message "❌ 部署可能存在问题，请检查docker日志" "$RED"
    docker-compose logs
fi 
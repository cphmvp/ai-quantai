#!/bin/bash

# 构建项目
npm run build

# 压缩输出目录
tar -czf dist.tar.gz out/

# 上传到服务器
scp dist.tar.gz root@47.94.148.130:/tmp/

# 在服务器上执行部署
ssh root@47.94.148.130 "cd /tmp && \
    tar -xzf dist.tar.gz && \
    sudo rm -rf /var/www/deepuse.com/* && \
    sudo mv out/* /var/www/deepuse.com/ && \
    sudo chown -R www-data:www-data /var/www/deepuse.com && \
    sudo chmod -R 755 /var/www/deepuse.com && \
    rm -rf out dist.tar.gz"

echo "部署完成！" 
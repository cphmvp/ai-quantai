#!/bin/bash

# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装必要的软件
sudo apt install -y nginx certbot python3-certbot-nginx

# 创建网站目录
sudo mkdir -p /var/www/deepuse.com

# 配置Nginx
sudo cp nginx.conf /etc/nginx/sites-available/deepuse.com
sudo ln -s /etc/nginx/sites-available/deepuse.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 申请SSL证书
sudo certbot --nginx -d www.deepuse.com -d deepuse.com --non-interactive --agree-tos --email contact@deepuse.com

# 重启Nginx
sudo systemctl restart nginx

# 设置自动续期证书
sudo certbot renew --dry-run 
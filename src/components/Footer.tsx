'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-400">
              深度智用是一个专业的量化交易平台，致力于为用户提供高质量的交易策略和分析工具。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">首页</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">产品</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">关于我们</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱：contact@deepuse.com</li>
              <li>电话：+86 123 4567 8900</li>
              <li>地址：上海市浦东新区</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                微信
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                微博
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 深度智用. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
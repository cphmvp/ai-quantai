'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 mt-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-sm text-gray-600">
          <div className="mb-2">
            <Link 
              href="https://beian.miit.gov.cn" 
              target="_blank"
              className="hover:text-gray-900"
            >
              京ICP备2025114151号
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <span>Copyright © {new Date().getFullYear()} DeepUseAI</span>
            <span>·</span>
            <Link href="/" className="hover:text-gray-900">
              www.deepuse.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
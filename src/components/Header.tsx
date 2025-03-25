'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            DeepUseAI
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`text-gray-600 hover:text-gray-900 ${pathname === '/' ? 'font-semibold' : ''}`}>
              首页
            </Link>
            <Link href="/products" className={`text-gray-600 hover:text-gray-900 ${pathname === '/products' ? 'font-semibold' : ''}`}>
              产品
            </Link>
            <Link href="/about" className={`text-gray-600 hover:text-gray-900 ${pathname === '/about' ? 'font-semibold' : ''}`}>
              关于我们
            </Link>
            <Link href="/contact" className={`text-gray-600 hover:text-gray-900 ${pathname === '/contact' ? 'font-semibold' : ''}`}>
              联系我们
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'DeepUseAI Pro',
      description: '专业级AI量化交易一体机，适合机构投资者和专业交易团队',
      features: [
        '高性能计算系统',
        'AI预测引擎',
        '多交易所接入',
        '实时风控系统',
        '7*24小时技术支持'
      ],
      price: '详询客服'
    },
    {
      id: 2,
      name: 'DeepUseAI Lite',
      description: '轻量级AI量化交易解决方案，适合个人投资者和小型团队',
      features: [
        '基础量化策略',
        'AI市场分析',
        '主流交易所支持',
        '基础风控功能',
        '在线技术支持'
      ],
      price: '详询客服'
    }
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的产品</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为不同规模的投资者提供专业的AI量化交易解决方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 mb-6 text-center">
                <h3 className="text-2xl font-bold text-blue-900">{product.name}</h3>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                  立即咨询
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 
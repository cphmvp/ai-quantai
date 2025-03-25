'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'XianqiLuo',
      title: '首席执行官',
      description: '拥有15年量化交易经验，曾任职于多家顶级投资机构'
    },
    {
      name: 'DongEr',
      title: '技术总监',
      description: '人工智能专家，曾领导多个大规模AI项目的开发'
    },
    {
      name: 'FeiChen',
      title: '量化策略总监',
      description: '金融工程博士，专注于高频交易策略研发'
    }
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 公司简介 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深度智用是一家专注于人工智能量化交易的科技公司，致力于为投资者提供专业、可靠的量化交易解决方案
          </p>
        </motion.div>

        {/* 公司历程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">发展历程</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-xl font-bold text-blue-600">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">公司成立</h3>
                <p className="text-gray-600">在上海成立总部，开始AI量化交易系统的研发</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-xl font-bold text-blue-600">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">产品发布</h3>
                <p className="text-gray-600">成功推出首款AI量化交易一体机产品</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-xl font-bold text-blue-600">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">快速发展</h3>
                <p className="text-gray-600">服务客户数量突破100家，管理资产规模超过10亿</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24">
                <span className="text-xl font-bold text-blue-600">2023</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">技术升级</h3>
                <p className="text-gray-600">推出新一代AI预测引擎，交易性能提升300%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 核心团队 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">{member.name[0]}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 英雄区域 */}
      <section className="w-full h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">深度智用</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">融合AI与量化交易的尖端技术，打造全新投资体验</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              了解产品
            </Link>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition shadow-lg hover:shadow-xl">
              预约演示
            </Link>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(240,242,245,0.5)_100%)]"></div>
      </section>

      {/* 产品特性 */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">智能，高效，专业</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">我们的AI量化一体机集成了尖端人工智能与专业量化策略，为您提供全方位的交易解决方案。</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-3xl hover:bg-blue-100 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">AI智能决策</h3>
              <p className="text-gray-600">利用先进的人工智能技术分析市场数据，识别交易机会，做出精准决策。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-3xl hover:bg-green-100 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">量化策略优化</h3>
              <p className="text-gray-600">多维度量化策略自动优化，根据市场环境实时调整，最大化投资回报。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-purple-50 p-8 rounded-3xl hover:bg-purple-100 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">全天候风控</h3>
              <p className="text-gray-600">智能风险管理系统24小时监控，多层防护机制确保资金安全。</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">我们的旗舰产品</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">专为专业投资者和机构设计的高性能AI量化交易一体机</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-12 flex items-center justify-center shadow-lg">
                <div className="text-4xl font-bold text-white">DeepUseAI Pro</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900">DeepUseAI Pro</h3>
              <p className="text-gray-600 mb-6">专业级AI量化交易一体机，集成最新的机器学习算法和高效量化策略，为您提供卓越的交易体验。</p>
              <ul className="space-y-4">
                {[
                  "高性能计算系统，支持复杂策略实时运行",
                  "自主研发的AI预测引擎，市场洞察更精准",
                  "多交易所接入，一站式管理所有资产",
                  "定制化策略开发，满足个性化交易需求",
                  "7*24小时技术支持和专家服务"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                  详细了解
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">客户评价</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">来自专业投资者和机构的真实反馈</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "XianqiLuo",
                title: "私募基金经理",
                content: "DeepUseAI Pro帮助我们基金在过去一年提升了28%的收益率，智能风控系统有效降低了回撤，是值得信赖的量化交易解决方案。"
              },
              {
                name: "DongEr",
                title: "资产管理公司CEO",
                content: "产品的AI预测功能非常强大，对市场转折点的预判准确度令人惊讶。技术支持团队响应迅速，服务一流。"
              },
              {
                name: "FeiChen",
                title: "金融科技研究员",
                content: "作为研究员，我对DeepUseAI的技术架构和算法实现印象深刻。它代表了量化交易与AI融合的未来发展方向。"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-3xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h2>
            <p className="text-xl max-w-3xl mx-auto">了解更多关于我们的AI量化一体机产品和服务</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6">预约演示</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">留言</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  提交预约
                </button>
              </form>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">地址</h4>
                    <p className="text-gray-400">上海市浦东新区张江高科技园区科苑路88号</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">电话</h4>
                    <p className="text-gray-400">400-888-9999</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">邮箱</h4>
                    <p className="text-gray-400">contact@deepuse.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">在线客服</h4>
                    <p className="text-gray-400">工作日 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 
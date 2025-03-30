import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* 英雄区 */}
      <section className="hero">
        <h1>欢迎来到超维智库</h1>
        <p>跨越学术、产业与投资边界，连接前沿思想与实际应用</p>
        <Link to="/register" className="btn">立即注册</Link>
      </section>

      {/* 核心功能展示 */}
      <section className="features">
        <div className="feature">
          <img src="assets/icons/industry.svg" alt="产业合作" />
          <h2>产业合作</h2>
          <p>与行业领袖共享前沿商业模式和创新思维</p>
        </div>
        <div className="feature">
          <img src="assets/icons/academic.svg" alt="学术交流" />
          <h2>学术交流</h2>
          <p>共享高质量学术资源，促进知识量子化</p>
        </div>
        <div className="feature">
          <img src="assets/icons/investment.svg" alt="投资洞察" />
          <h2>投资洞察</h2>
          <p>获取权威投资建议，助力决策与创新</p>
        </div>
      </section>
    </>
  );
};

export default Home;
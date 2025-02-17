<script lang="ts" setup>
useHead({
  title: '郑浩南-web前端开发工程师(4年)',
  meta: [
    { name: 'keywords', content: '郑浩南,web前端,前端工程师,简历,web前端个人简历,前端开发,前端简历,最新简历,前端博客,热前端,设计,FE,github,求职,react,vue,resume' },
    { name: 'description', content: '前端开发工程师郑浩南的个人简历' },
    { name: 'theme-color', content: 'darkred' }
  ]
})
const onPrint = () => {
  print()
}
</script>

<template>
  <main class="resume">
    <h1 class="name" @click="onPrint">郑浩南-web前端开发工程师（4年）</h1>
    <p>
      <span>湖南工业大学-本科 2017 - 2021</span>
      <i class="vi-minus gy"></i>
      <span>生日：1997/07</span>
      <i class="vi-minus gy"></i>
      <a class="link" href="tel:(+86)18373351542">
        <i class="vi-telephone"></i>
        <span>18373351542</span>
      </a>
      <a class="link" href="mailto:work.haonan@gmail.com">
        <i class="vi-mail"></i>
        <span>work.haonan@gmail.com</span>
      </a>
    </p>
    <h2 class="sub-title">个人优势</h2>
    <p>4年前端开发经验，熟练掌握现代前端技术栈、框架及组件库。具有良好的代码风格，快速适应并使用新技术的能力。持续关注新技术，同时致力于前端工程化。</p>
    <ul>
      <li>拥有良好的 ES6、TypeScript、HTML、CSS 基础</li>
      <li>有完整的 Vue 项目经验、熟练使用 Vue 周边工具、UI框架</li>
      <li>熟悉 Node.js、有 NestJS、Fastify、MongoDB 开发经验</li>
      <li>熟悉前端工程化，有 Vite、Rollup 配置经验</li>
      <li>拥有良好的编码习惯</li>
    </ul>
    <h2 class="sub-title">工作经历</h2>
    <h3 class="date-title">
      <div>软通动力</div>
      <div>前端开发工程师（百度）</div>
      <div class="date">2022.09 - 至今</div>
    </h3>
    <p>
      <strong>工作内容</strong>
    </p>
    <ol>
      <li>负责百度结果页阿拉丁卡片（自建样式的搜索结果）的开发</li>
      <li>负责百度搜索结果页运营平台的开发、迭代与维护</li>
      <li>负责阿拉丁后台管理系统（百度搜索结果页阿拉丁卡片的展现逻辑管理）的开发、迭代与维护</li>
      <li>负责搜索结果二级页面的开发</li>
    </ol>
    <h3 class="date-title">
      <div>郑州程序猫信息技术有限公司</div>
      <div>前端开发工程师</div>
      <div class="date">2021.07 - 2022.08</div>
    </h3>
    <p>
      <strong>工作内容</strong>
    </p>
    <ol>
      <li>据公司项目要求，负责 PC端、移动端的前端设计和研发工作</li>
      <li>根据产品需求，分析并给出合理的页面前端结构解决方案</li>
      <li>根据产品及项目的前端页面编码，利用前端相关技术开发相应应用</li>
      <li>和后端程序技术有效配合，完成功能的实现和调试工作</li>
    </ol>
    <h2 class="sub-title">项目经历</h2>
    <h3 class="project-title">搜索运营平台</h3>
    <p>
      技术栈： Vue 3、TypeScript、Ant Design Vue、Vite ( 由 Vue Cli 迁移 )
    </p>
    <p>
      BFF层： NestJS、Fastify、MongoDB
    </p>
    <p>功能：百度搜索结果页内容的配置与管理</p>
    <p>项目业绩：</p>
    <ul>
      <li>构建工具由 Vue Cli 迁移至 Vite，Node 版本由12升级至20，包管理器改为 pnpm，ESLint 升级为 @9 版本，提升整体开发速度，流水线构建时间由 20 分钟降至 2分钟</li>
      <li>封装动态表单组件，根据 JSON 配置快速开发不同的阿拉丁卡片与业务配置表单</li>
      <li>搭建 BFF 层，聚合表单内容，基于 iframe 提供卡片预览功能</li>
      <li>根据百度 gips cdn 开发通用图片裁剪工具，快速修改和压缩本地与在线图片，提升运营工作效率</li>
    </ul>
    <h3 class="project-title">百度结果页二级页面</h3>
    <p>百度搜索结果点击跳转的页面</p>
    <p>例如：</p>
    <ul>
      <li>
        <a class="link" href="https://figure.baidu.com/aladdin-landing/starPower?baikeid=18866899&qid=2211976717743528720">
          <i class="vi-url"></i>
          <span>百度明星影响力</span>
        </a>
      </li>
      <li>
        <a class="link" href="https://figure.baidu.com/aladdin-landing/starPost?baikeid=18866899&name=%E8%82%96%E6%88%98&tabType=all">
          <i class="vi-url"></i>
          <span>百度人物动态</span>
        </a>
      </li>
      <li>
        <a class="link" href="https://figure.baidu.com/aladdin-landing/sendFlower?baikeid=18866899&name=%E8%82%96%E6%88%98&profile=aHR0cHM6Ly9ia2ltZy5jZG4uYmNlYm9zLmNvbS9zbWFydC84ZDU0OTRlZWYwMWYzYTI5MmRmNTU3MTQ1ZjdkYWIzMTVjNjAzNWE4ZDZlYS1ia2ltZy1wcm9jZXNzLHZfMSxyd18xLHJoXzEsbWF4bF84MDAscGFkXzE=&extData=eyJiZ0NvbG9yIjoiI0JFOEMzRCIsImltYWdlIjoiaHR0cHM6Ly9naXBzMy5iYWlkdS5jb20vaXQvdT0yNTcyMTkzODkzLDI0MTU2MDU4NDAmZm09MzAyOCZhcHA9MzAyOCZmPVBORyZmbXQ9YXV0byZxPTc1JnNpemU9ZjEyMDBfMTUzNiIsImlzTWF0dGluZyI6IjEifQ==">
          <i class="vi-url"></i>
          <span>百度送花</span>
        </a>
      </li>
    </ul>
    <p>涉及技术：ECharts、Swiper、San、search-components 等</p>
  </main>
</template>

<style lang="scss" scoped>
.resume {
  width: min(100%, 1060px);
  margin: 0 auto;
  padding: 88px var(--main-padding-left) var(--main-padding-top);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #101010;
  font-family: "苹方-简";
  --main-padding-top: 24px;
  --main-padding-left: 20px;
  --primary-color: #9147ff;
  --bg-color: '#fff';
  --avatar-width: 75px;
  i {
    margin-right: 4px;
  }
  a {
    text-decoration: none;
    & ~ a {
      margin-left: 10px;
    }
  }
  p {
    line-height: 1.5;
  }
  ul li {
    list-style: disc;
  }
  ul, ol {
    margin-block: 6px;
  }
  ol li {
    list-style: decimal;
  }
  .gy {
    margin-right: 0;
    display: inline-block;
    transform: scaleX(80%) translateY(1px) rotate(91deg);
  }
  .link {
    color: #0b89a8;
  }
}
.name {
  margin: 0 0 8px 0;
}
.sub-title {
  position: relative;
  margin: 32px 0 20px;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 85%;
    transform: translateY(-50%) scaleY(50%);
    border-top: 1px solid #d4d4d4;
  }
}
.date-title {
  margin-block: 16px;
  display: flex;
  column-gap: 40px;
  font-size: 19px;
  font-weight: normal;

  .date {
    margin-left: auto;
    font-size: 16px;
  }
}
.project-title {
  margin-block: 12px;
}
@media screen and (max-width: 727px) {
  .resume {
    display: block;
    --main-padding-left: 13px;
  }
  .basic {
    padding-right: 0;
    .avatar {
      width: calc(100% + calc(var(--main-padding-left) * 3));
    }
  }
  .intro {
    margin-top: 2rem;
  }
}
@media print {
  @page {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0;
    margin-top: 0;
  }
  .resume {
    width: 1060px;
    padding: 88px 48px 0;
    box-shadow: none;
    .link {
      color: #101010;
    }
  }
  .name {
    margin: 0 0 20px 0;
  }
}
</style>
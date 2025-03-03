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
  <main class="max-w-5xl mx-auto py-20 px-5 text-base shadow-md mt-4 print:px-12 print:pb-0 print:shadow-none print:w-5xl page:ml-0">
    <h1 class="text-3xl mb-3 font-semibold" @click="onPrint">郑浩南-web前端开发工程师（4年）</h1>
    <p class="text-gray-700">
      <span>湖南工业大学-本科 2017 - 2021</span>
      <span class="text-gray-500 mx-2 scale-y-85 inline-block">|</span>
      <span>生日：1997/07</span>
      <span class="text-gray-500 mx-2 scale-y-85 inline-block">|</span>
      <a class="text-cyan-600 mr-2" href="tel:(+86)18373351542">
        <i class="i-icon-tel"></i>
        <span> 18373351542</span>
      </a>
      <a class="text-cyan-600" href="mailto:work.haonan@gmail.com">
        <i class="i-icon-gmail"></i>
        <span> work.haonan@gmail.com</span>
      </a>
    </p>
    <h2 class="relative mt-8 mb-5 text-2xl font-semibold after:absolute after:w-10/12 after:right-0 after:top-1/2 after:border-t after:border-gray-200">
      个人优势
    </h2>
    <p>4年前端开发经验，熟练掌握现代前端技术栈、框架及组件库。具有良好的代码风格，快速适应并使用新技术的能力。持续关注新技术，同时致力于前端工程化。</p>
    <ul class="my-1.5 list-disc pl-7.5 leading-snug">
      <li>拥有良好的 ES6、TypeScript、HTML、CSS 基础</li>
      <li>有完整的 Vue 项目经验、熟练使用 Vue 周边工具、UI框架</li>
      <li>熟悉 Node.js、有 NestJS、Fastify、MongoDB 开发经验</li>
      <li>熟悉前端工程化，有 Vite、Rollup 配置经验</li>
      <li>拥有良好的编码习惯</li>
    </ul>
    <h2 class="relative mt-8 mb-5 text-2xl font-semibold after:absolute after:w-10/12 after:right-0 after:top-1/2 after:border-t after:border-gray-200">
      工作经历
    </h2>
    <h3 class="my-4 flex gap-x-10 text-[19px]">
      <div>软通动力</div>
      <div>前端开发工程师（百度）</div>
      <div class="ml-auto text-base">2022.09 - 至今</div>
    </h3>
    <p>
      <strong>工作内容</strong>
    </p>
    <ol class="my-1.5 list-decimal pl-7.5 leading-snug">
      <li>负责百度结果页阿拉丁卡片（自建样式的搜索结果）的开发</li>
      <li>负责百度搜索结果页运营平台的开发、迭代与维护</li>
      <li>负责阿拉丁后台管理系统（百度搜索结果页阿拉丁卡片的展现逻辑管理）的开发、迭代与维护</li>
      <li>负责搜索结果二级页面的开发</li>
    </ol>
    <h3 class="my-4 flex gap-x-10 text-[19px]">
      <div>郑州程序猫信息技术有限公司</div>
      <div>前端开发工程师</div>
      <div class="ml-auto text-base">2021.07 - 2022.08</div>
    </h3>
    <p>
      <strong>工作内容</strong>
    </p>
    <ol class="my-1.5 list-decimal pl-7.5 leading-snug">
      <li>据公司项目要求，负责 PC端、移动端的前端设计和研发工作</li>
      <li>根据产品需求，分析并给出合理的页面前端结构解决方案</li>
      <li>根据产品及项目的前端页面编码，利用前端相关技术开发相应应用</li>
      <li>和后端程序技术有效配合，完成功能的实现和调试工作</li>
    </ol>
    <h2 class="relative mt-8 mb-5 text-2xl font-semibold after:absolute after:w-10/12 after:right-0 after:top-1/2 after:border-t after:border-gray-200">
      项目经历
    </h2>
    <h3 class="my-3.5 font-semibold text-lg">搜索运营平台</h3>
    <p>
      技术栈： Vue 3、TypeScript、Ant Design Vue、Vite ( 由 Vue Cli 迁移 )
    </p>
    <p>
      BFF层： NestJS、Fastify、MongoDB
    </p>
    <p>功能：百度搜索结果页内容的配置与管理</p>
    <p>项目业绩：</p>
    <ul class="my-1.5 list-disc pl-7.5 leading-snug">
      <li>构建工具由 Vue Cli 迁移至 Vite，Node 版本由12升级至20，包管理器改为 pnpm，ESLint 升级为 @9 版本，提升整体开发速度，流水线构建时间由 20 分钟降至 2分钟</li>
      <li>封装动态表单组件，根据 JSON 配置快速开发不同的阿拉丁卡片与业务配置表单</li>
      <li>搭建 BFF 层，聚合表单内容，基于 iframe 提供卡片预览功能</li>
      <li>根据百度 gips cdn 开发通用图片裁剪工具，快速修改和压缩本地与在线图片，提升运营工作效率</li>
    </ul>
    <h3 class="my-3.5 font-semibold text-lg">百度结果页二级页面</h3>
    <p>百度搜索结果点击跳转的页面</p>
    <p>例如：</p>
    <ul class="my-1.5 list-disc pl-7.5 leading-snug marker:text-cyan-600">
      <li>
        <a class="text-cyan-600" href="https://figure.baidu.com/aladdin-landing/starPower?baikeid=18866899&qid=2211976717743528720">
          <span>百度明星影响力</span>
        </a>
      </li>
      <li>
        <a class="text-cyan-600" href="https://figure.baidu.com/aladdin-landing/starPost?baikeid=18866899&name=%E8%82%96%E6%88%98&tabType=all">
          <span>百度人物动态</span>
        </a>
      </li>
      <li>
        <a class="text-cyan-600" href="https://figure.baidu.com/aladdin-landing/sendFlower?baikeid=18866899&name=%E8%82%96%E6%88%98&profile=aHR0cHM6Ly9ia2ltZy5jZG4uYmNlYm9zLmNvbS9zbWFydC84ZDU0OTRlZWYwMWYzYTI5MmRmNTU3MTQ1ZjdkYWIzMTVjNjAzNWE4ZDZlYS1ia2ltZy1wcm9jZXNzLHZfMSxyd18xLHJoXzEsbWF4bF84MDAscGFkXzE=&extData=eyJiZ0NvbG9yIjoiI0JFOEMzRCIsImltYWdlIjoiaHR0cHM6Ly9naXBzMy5iYWlkdS5jb20vaXQvdT0yNTcyMTkzODkzLDI0MTU2MDU4NDAmZm09MzAyOCZhcHA9MzAyOCZmPVBORyZmbXQ9YXV0byZxPTc1JnNpemU9ZjEyMDBfMTUzNiIsImlzTWF0dGluZyI6IjEifQ==">
          <span>百度送花</span>
        </a>
      </li>
    </ul>
    <p>涉及技术：ECharts、Swiper、San、search-components 等</p>
  </main>
</template>

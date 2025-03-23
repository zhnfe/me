<script lang="ts" setup>
const info = {
  name: '郑浩南',
  email: 'work.haonan@gmail.com'
}
useHead({
  title: `${info.name}-web前端开发工程师-4年)`,
  meta: [
    { name: 'keywords', content: `${info.name},web前端,前端工程师,简历,web前端个人简历,前端开发,前端简历,最新简历,前端博客,热前端,设计,FE,github,求职,react,vue,resume` },
    { name: 'description', content: `前端开发工程师${info.name}的个人简历` },
    { name: 'theme-color', content: 'darkred' }
  ]
})

const styles = {
  title: 'text-lg leading-[3] my-4 font-bold border-b border-gray-200',
  inlineDivider: 'text-gray-300 mx-2 scale-y-75 inline-block',
  list: 'my-1.5 list-decimal pl-4',
  subTitle: 'my-3 flex font-bold',
  primaryText: 'text-blue-500'
}

const onPrint = () => {
  print()
}
</script>

<template>
  <main class="max-w-5xl mx-auto text-gray-800 leading-[1.7] p-12 text-base shadow-lg print:shadow-none print:w-5xl print:py-0">
    <h1 class="text-3xl mb-4 font-semibold cursor-pointer" @click="onPrint">{{ info.name }}</h1>
    <p>
      <span>web 前端开发工程师</span>
      <span :class="styles.inlineDivider">|</span>
      <span>湖南工业大学</span>
      <span :class="styles.inlineDivider">|</span>
      <span>本科 2017 - 2021</span>
      <span :class="styles.inlineDivider">|</span>
      <a
        :class="styles.primaryText"
        class="mr-2"
        href="tel:(+86)18373351542"
      >
        <i class="i-icon-tel"></i>
        <span>&nbsp;18373351542</span>
      </a>
      <a :class="styles.primaryText" :href="`mailto:${info.email}`">
        <i class="i-icon-gmail"></i>
        <span>&nbsp;{{ info.email }}</span>
      </a>
    </p>
    <h2 :class="styles.title">
      个人优势
    </h2>
    <p>
      <span class="inline-block w-[1px] h-[1px]"></span>
      <span>4 年前端开发经验，熟练掌握现代前端技术栈、框架及组件库。具有良好的代码风格，快速适应并使用新技术的能力。持续关注学习新技术，同时致力于前端工程化。</span>
    </p>
    <h2 :class="styles.title">
      专业技能
    </h2>
    <p><strong class="font-medium">前端核心：</strong><span>精通 JavaScript(ES6+)、TypeScript、HTML5、CSS3，熟悉ECMAScript规范与最新特性</span></p>
    <p><strong class="font-medium">前端框架：</strong><span>深度掌握 Vue 全家桶，具备独立架构设计与项目落地能力</span></p>
    <p><strong class="font-medium">组件库：</strong><span></span>熟练使用 Element、Ant Design Vue、Naive UI 等组件库</p>
    <p><strong class="font-medium">样式工具：</strong><span>熟练使用 Sass/Less 等预处理器，精通 Tailwind CSS、UnoCSS 等原子化 CSS 框架，擅长CSS模块化与组件设计</span></p>
    <p><strong class="font-medium">后端能力：</strong><span>熟悉Node.js生态，具备 NestJS、Fastify 和 MongoDB 实战经验</span></p>
    <p><strong class="font-medium">工程化：</strong><span>精通 Vite、Rollup 生态，有插件开发经验，构建优化专长，擅长模块化设计与代码分割</span></p>
    <p><strong class="font-medium">部署运维：</strong><span>掌握 Nginx/Apache 部署，熟悉 Docker 容器化与 CI/CD 自动化部署流程</span></p>
    <p><strong class="font-medium">版本控制：</strong><span>精通 Git Flow 工作流，擅长分支管理与多人协作冲突解决</span></p>
    <p><strong class="font-medium">网络与优化：</strong><span>深入理解 HTTP 协议，熟悉跨域解决方案，了解浏览器渲染原理与前端性能优化</span></p>
    <p><strong class="font-medium">代码质量：</strong><span>注重代码可维护性，拥有良好编码习惯与架构设计思维</span></p>
    <h2 :class="styles.title">
      工作经历
    </h2>
    <h3 :class="styles.subTitle">
      <div class="font-bold">软通动力</div>
      <div class="font-normal ml-10">前端开发工程师（百度）</div>
      <div class="ml-auto font-normal">2022.09 - 至今</div>
    </h3>
    <p>负责百度搜索产品的前端架构设计与开发：</p>
    <ol :class="styles.list">
      <li>深入参与百度搜索相关产品的前端架构设计与开发，制定项目的技术选型与需求的开发方案</li>
      <li>负责百度搜索结果页阿拉丁卡片开发与优化，提升用户搜索体验</li>
      <li>主导搜索运营平台的开发与迭代，提供稳定高效的内容管理系统</li>
      <li>负责高质量编码设计，承担业务重点技术攻坚，保证高可靠、高性能、高可扩展的业务支撑</li>
    </ol>
    <h3 :class="styles.subTitle">
      <div class="font-bold">郑州程序猫信息技术有限公司</div>
      <div class="font-normal ml-10">前端开发工程师</div>
      <div class="ml-auto font-normal">2021.07 - 2022.08</div>
    </h3>
    <p>工作内容：</p>
    <ol :class="styles.list">
      <li>负责公司 PC 端与移动端前端项目的设计研发与实现</li>
      <li>根据产品需求提供合理的前端架构与技术解决方案</li>
      <li>编写高质量前端代码，确保页面性能与用户体验</li>
      <li>与后端密切协作，完成功能实现与联调测试工作</li>
    </ol>
    <h2 :class="styles.title">
      项目经历
    </h2>
    <h3 :class="styles.subTitle">搜索运营平台</h3>
    <p>项目描述：百度搜索结果页内容的配置与管理。包括阿拉丁卡片、百度热搜榜、百度热点事件、热词审核机制以及热门活动等内容；提供阿拉丁卡片的组卡、召回配置与内容审核机制</p>
    <p>
      技术栈： Vue、Vuex、Vue Router、TypeScript、Ant Design Vue、Vite、Tailwind CSS、ExcelJS、Vue.Draggable、diff
    </p>
    <p>
      BFF层：TypeScript、NestJS、Fastify、MongoDB、sharp
    </p>
    <p>项目业绩：</p>
    <ol :class="styles.list">
      <li>搭建多测试环境，满足不同后端联调与测试需求</li>
      <li>
        优化项目工程化，构建工具由 Vue Cli 迁移至 Vite，Node 版本由12升级至20，包管理器改为 pnpm，ESLint 升级为 @9 版本，
        流水线构建时间由 20 分钟降至 2分钟，提升项目在走查测试阶段的部署速度；
      </li>
      <li>基于 rollup vitual module 与 vite-plugin-components，封装动态并支持自动导入 icon 组件的 vite 插件，提供灵活高效的 icon 使用方案</li>
      <li>创建用于 Ant Design Vue 组件自动导入的 resolver, 实现组件的自动导入、减少首屏加载文件的体积</li>
      <li>封装动态表单组件，通过配置快速开发不同的阿拉丁卡片与业务配置表单</li>
      <li>搭建 BFF 层，聚合表单内容，基于 iframe 提供卡片预览功能；实现菜单级权限控制</li>
      <li>根据百度 gips cdn 开发通用图片裁剪工具，快速修改和压缩本地与在线图片，提升运营工作效率</li>
    </ol>
    <h3 :class="styles.subTitle">阿拉丁卡片落地页</h3>
    <p>项目描述：百度搜索结果页二级页面，提供详细内容展示与用户交互功能。</p>
    <p>技术栈：ECharts、Swiper、San、search-components、cosmic 等</p>
    <p>项目业绩：</p>
    <ol :class="styles.list">
      <li>基于 fetch API 封装请求工具，实现失败重试、超时、TypeScript 类型支持与状态码统一处理</li>
      <li>设计函数式打点工具，提升数据交互与埋点效率</li>
      <li>实现基于 Intersection Observer API 的瀑布流布局与图片懒加载，优化页面性能与用户体验</li>
      <li>开发列表首字母导航组件，提升页面交互体验</li>
    </ol>
    <p>示例：</p>
    <ol :class="styles.list">
      <li>
        <a :class="styles.primaryText" href="https://figure.baidu.com/aladdin-landing/starPower?baikeid=18866899&qid=2211976717743528720">
          <span>百度明星影响力</span>
        </a>
      </li>
      <li>
        <a :class="styles.primaryText" href="https://figure.baidu.com/aladdin-landing/starPost?baikeid=18866899&name=%E8%82%96%E6%88%98&tabType=all">
          <span>百度人物动态</span>
        </a>
      </li>
      <li>
        <a :class="styles.primaryText" href="https://figure.baidu.com/aladdin-landing/sendFlower?baikeid=18866899&name=%E8%82%96%E6%88%98&profile=aHR0cHM6Ly9ia2ltZy5jZG4uYmNlYm9zLmNvbS9zbWFydC84ZDU0OTRlZWYwMWYzYTI5MmRmNTU3MTQ1ZjdkYWIzMTVjNjAzNWE4ZDZlYS1ia2ltZy1wcm9jZXNzLHZfMSxyd18xLHJoXzEsbWF4bF84MDAscGFkXzE=&extData=eyJiZ0NvbG9yIjoiI0JFOEMzRCIsImltYWdlIjoiaHR0cHM6Ly9naXBzMy5iYWlkdS5jb20vaXQvdT0yNTcyMTkzODkzLDI0MTU2MDU4NDAmZm09MzAyOCZhcHA9MzAyOCZmPVBORyZmbXQ9YXV0byZxPTc1JnNpemU9ZjEyMDBfMTUzNiIsImlzTWF0dGluZyI6IjEifQ==">
          <span>百度送花</span>
        </a>
      </li>
    </ol>
  </main>
</template>

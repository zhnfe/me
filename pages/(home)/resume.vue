<script lang="ts" setup>
useHead({
  title: '郑浩南-前端开发工程师(3年)',
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
    <aside class="basic">
      <div class="avatar">
        <div class="pic"></div>
      </div>
      <div class="flex align-center abstract">
        <div>
          <h1 class="name" @click="onPrint">郑浩南</h1>
          <p class="sub-color">前端开发工程师</p>
        </div>
        <div class="contact">
          <a class="" href="mailto:work.haonan@gmail.com">
            <i class="vi-mail"></i>
            <span>work.haonan@gmail.com</span>
          </a>
          <br>
          <a href="tel:(+86)18373351542">
            <i class="vi-telephone"></i>
            <span>18373351542</span>
          </a>
        </div>
      </div>
      <ul class="skills">
        <li></li>
      </ul>
    </aside>
    <article class="intro">
      <h1>介绍</h1>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.resume {
  width: min(100%, 1060px);
  margin: 25px auto 0;
  padding: 0 var(--main-padding-left) var(--main-padding-top);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #101010;
  display: grid;
  grid-template-columns: min(100%, 370px) 1fr;
  --main-padding-top: 24px;
  --main-padding-left: 20px;
  --primary-color: #9147ff;
  --bg-color: '#fff';
  --avatar-width: 75px;
}
@media (prefers-color-scheme: dark) {
  .resume {
    --bg-color: #101010;
    color: #eee;
  }
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

.sub-color {
  color: #333;
  font-size: 14px;
}
.desc-color {
  color: #666;
  font-size: 14px;
}
@mixin width-plus-padding {
  width: calc(100% + calc(var(--main-padding-left) * 2));
  margin-left: calc(var(--main-padding-left) * -1);
}
.basic {
  padding-right: var(--main-padding-left);
}
.avatar {
  @include width-plus-padding;
  height: 150px;
  background: yellow;
  position: relative;
  .pic {
    width: var(--avatar-width);
    height: var(--avatar-width);
    border-radius: var(--avatar-width);
    background: url(~/public/images/avatar.webp) 100%/100%;
    position: absolute;
    bottom: 0;
    left: var(--main-padding-left);
    transform: translateY(50%);
  }
}
.abstract {
  margin-top: calc(var(--avatar-width) / 1.5);
}
.name {
  margin-bottom: .2rem;
  padding: 0;
  font-size: 1.2rem;
}
.contact {
  i {
    margin-right: 4px;
    color: var(--primary-color);
  }
  svg {
    margin-right: 4px;
    fill: var(--primary-color);
    display: inline-block;
    height: 1.1em;
    width: 1.1em;
    vertical-align: text-bottom;
  }
  a {
    text-decoration: none;
  }
  color: var(--primary-color);
  margin-left: auto;
  text-align: right;
}


@media print {
  @page {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0;
  }
  .resume {
    grid-template-columns: 370px 680px;
    padding: 0 20px;
    box-shadow: none;
    .abstract {
      margin-top: 20px;
    }
    .avatar {
      width: 100%;
      height: auto;
      display: grid;
      place-items: center;
      background: none;
      margin: 0;
      .pic {
        position: static;
        width: 150px;
        height: 150px;
        transform: none;
      }
    }
  }
}
</style>
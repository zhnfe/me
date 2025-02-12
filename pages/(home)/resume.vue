<script lang="ts" setup>
useHead({
  title: '郑浩南-前端简历',
  meta: [
    { name: 'keywords', content: '郑浩南,web前端,前端工程师,简历,web前端个人简历,前端开发,前端简历,最新简历,前端博客,热前端,设计,FE,github,求职,react,vue,resume' },
    { name: 'description', content: '前端开发工程师郑浩南的个人简历' },
    { name: 'theme-color', content: 'darkred' }
  ]
})
</script>

<template>
  <main class="resume">
    <aside class="basic">
      <div class="avatar">
        <div class="pic"></div>
      </div>
      <div class="flex align-center" style="margin-top: calc(var(--avatar-width) / 1.5);">
        <div>
          <h1 class="name">郑浩南</h1>
          <p class="sub-color">前端工程师</p>
        </div>
        <div class="contact">
          <a class="" href="mailto:work.haonan@gmail.com">
            <svg
              t="1739354241772"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8541"
              width="200"
              height="200"
            ><path d="M853.333333 170.666667 170.666667 170.666667C123.733333 170.666667 85.333333 209.066667 85.333333 256l0 512c0 46.933333 38.4 85.333333 85.333333 85.333333l682.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L938.666667 256C938.666667 209.066667 900.266667 170.666667 853.333333 170.666667zM853.333333 768l-85.333333 0L768 392.533333 512 554.666667 256 392.533333 256 768 170.666667 768 170.666667 256l51.2 0 290.133333 179.2L802.133333 256 853.333333 256 853.333333 768z" p-id="8542" /></svg>
            <span>work.haonan@gmail.com</span>
          </a>
          <a class="flex align-center" href="tel:(+86)18373351542">
            <svg
              t="1739354155113"
              class="icon"
              viewBox="0 0 1000 900"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7545"
              width="200"
              height="200"
            ><path d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z" p-id="7546" /></svg>
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
  width: min(100%, 1024px);
  margin: 0 auto;
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
  margin-top: calc(var(--main-padding-top) * -1);
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
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: var(--main-padding-left);
    transform: translateY(50%);
  }
}
.name {
  margin-bottom: .2rem;
  padding: 0;
  font-size: 1.2rem;
}
.contact {
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
</style>
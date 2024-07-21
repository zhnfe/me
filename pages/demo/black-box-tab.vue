<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { assignObject } from '@/utils'
import { tabs } from '@/config'

useHead({ title: () => '小黑盒 tab' })

interface DomInfo {
  width: number
  x: number
}

const state = reactive({
  currentIndex: 0,
  canTransition: true,
  translate: {
    clip: 'path("M 10 0 v 40 h 30 v -40")',
    slider: 0,
    sliderWidth: 30,
    content: '0'
  }
})

const navContainerRef = ref<HTMLDivElement>()
const navRef = ref<HTMLDivElement>()
const navItemsRef = ref<HTMLDivElement[]>()
const slider = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()
const navDomsInfo: DomInfo[] = []

function handleTabClick(index: number) {
  const currentTab = navDomsInfo[index]
  navContainerRef.value?.scroll({
    top: 0,
    left: currentTab.x + currentTab.width / 2 - start.width / 2,
    behavior: 'smooth'
  })
  assignObject(state, {
    currentIndex: index,
    translate: {
      slider: currentTab.x - navDomsInfo[0].x,
      sliderWidth: currentTab.width,
      content: `-${index * 100}%`,
      clip: `path('M ${currentTab.x} 0 v 40 h ${currentTab.width} v -40')`
    }
  })
}

const start = {
  /** 视口宽度 */
  width: 0,
  x: 0,
  y: 0,
  time: 0,
  index: 0,
  navWidth: 0
}

const move = {
  x: 0,
  y: 0,
  time: 0,
  canceled: false,
  scrolling: false,
  transforming: false
}
function handleTouchStart(e: TouchEvent) {
  state.canTransition = false
  const touch = e.touches[0]
  assignObject(start, {
    navWidth: navRef.value!.clientWidth,
    width: window.innerWidth,
    x: touch.pageX,
    y: touch.pageY,
    time: Date.now(),
    index: state.currentIndex
  })
  // 初始化 move
  assignObject(move, {
    time: 0,
    x: 0,
    y: 0,
    canceled: false,
    scrolling: false,
    transforming: false
  })
}

function handleTouchMove(e: TouchEvent) {
  if (move.scrolling) {
    return
  }
  const touch = e.touches[0]
  assignObject(move, {
    x: touch.pageX - start.x,
    y: touch.pageY - start.y
  })
  if (Math.abs(move.y) > Math.abs(move.x) && !move.transforming) {
    move.scrolling = true
    return
  }
  move.transforming = true
  // 部分浏览器不阻止默认行为会导致滑动卡顿, 缓慢滑动时尤为明显
  e.preventDefault()
  /** 边界情况, distance 为 contents 应该移动的距离 */
  const distance = move.x - start.index * start.width
  if (distance > 0 || distance < -start.width * (tabs.length - 1)) {
    move.canceled = true
    return
  }
  contentRef.value!.style.transform = `translateX(${distance}px)`
  const currentTab = navDomsInfo[start.index]
  const nextTab = navDomsInfo[move.x > 0 ? start.index -1 : start.index + 1]

  const dx = nextTab.x - currentTab.x
  const dWidth = nextTab.width - currentTab.width
  const stepX = dx / start.width * Math.abs(move.x)
  const stepWidth = dWidth / start.width * Math.abs(move.x)
  // 本次需要滚动的距离
  const scrollDistance = dx + dWidth / 2
  // 本次滚动起点
  const scrollStartX = (currentTab.x + currentTab.width / 2) - start.width / 2
  /** move.x / start.width = x / scrollDistance
   * => x = Math.abs(move.x) / start.width * scrollDistance
   * 方向由 scrollDistance 决定 */
  navContainerRef.value!.scroll(Math.abs(move.x) / start.width * scrollDistance + scrollStartX, 0)

  assignObject(state, {
    translate: {
      slider: (currentTab.x - navDomsInfo[0].x) + stepX,
      sliderWidth: currentTab.width + stepWidth,
      content: `${distance}px`,
      clip: `path('M ${currentTab.x + stepX} 0 v 40 h ${currentTab.width + stepWidth} v -40')`
    }
  })
}
function handleTouchEnd() {
  state.canTransition = true
  if (move.canceled || move.scrolling) {
    return
  }
  move.time = Date.now() - start.time
  const { x, time } = move
  if (Math.abs(x) > 0.6 * start.width || (time < 200 && Math.abs(x) > 50)) {
    if (x > 0) {
      state.currentIndex--
    } else {
      state.currentIndex++
    }
  }
  handleTabClick(state.currentIndex)
}

onMounted(() => {
  navItemsRef.value?.forEach(item => {
    // 保存各个tab的宽度和距左侧的位置
    navDomsInfo.push({
      width: item.clientWidth,
      x: item.offsetLeft
    })
  })
  start.width = window.innerWidth
  start.navWidth = navRef.value?.clientWidth || 0
})
</script>

<template>
  <div class="black-box">
    <header class="header">
      <h2 class="title">
        小黑盒 tab (scroll)
      </h2>
      <div ref="navContainerRef" class="nav-container">
        <nav class="nav">
          <div
            v-for="item, index in tabs"
            :key="item.id"
            ref="navItemsRef"
            class="nav-item"
            @click="handleTabClick(index)"
          >
            {{ item.title }}
          </div>
        </nav>
        <nav
          ref="navRef"
          class="nav"
          :class="state.canTransition ? 'transition' : ''"
          :style="{clipPath: state.translate.clip}"
        >
          <div
            v-for="item, index in tabs"
            :key="item.id"
            class="nav-item"
            @click="handleTabClick(index)"
          >
            {{ item.title }}
          </div>
        </nav>
        <div
          ref="slider"
          class="slider"
          :class="state.canTransition ? 'transition' : ''"
          :style="{
            transform: `translateX(${state.translate.slider}px)`,
            width: `${state.translate.sliderWidth}px`
          }"
        ></div>
      </div>
    </header>
    <main
      ref="contentRef"
      class="content-container"
      :class="state.canTransition ? 'transition' : ''"
      :style="{transform: `translateX(${state.translate.content})`}"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="item in tabs"
        :key="item.id"
        class="contents"
      >
        <h1 class="content-title">
          {{ item.title }}
        </h1>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, doloremque ad a pariatur tempore nisi sapiente ea iusto corrupti ex quasi? Corrupti vel quisquam corporis aut eveniet in earum quaerat.
          Magnam assumenda pariatur aperiam unde ex cupiditate. Quibusdam pariatur autem quidem beatae vel laborum in deserunt fuga distinctio alias. Quasi, quis neque nisi ex eligendi cumque ad saepe illum eos?
          Non dolorem ipsam incidunt. Velit necessitatibus inventore molestiae ad praesentium, ullam molestias consectetur aut voluptatibus alias perferendis veritatis accusantium aspernatur. Voluptates impedit architecto consequatur nostrum aliquid ea quibusdam fuga debitis.
          Voluptas rerum unde praesentium sit optio aperiam corporis aut nesciunt hic, nam dolores dolor incidunt quam et nobis nulla id esse omnis illum. Delectus aut repellendus perferendis expedita harum quo.
          Ratione modi, commodi expedita quos accusantium molestiae quis magni et. Voluptate repudiandae ullam odio unde blanditiis illo dolorum consequuntur laudantium! Tempora, quae? Corrupti tempora debitis consequatur. At nulla magnam quia.
          Possimus, eligendi dicta? Nam eum quas illo odio aliquam distinctio possimus placeat dicta sunt minus doloremque sed quaerat laudantium excepturi cupiditate exercitationem voluptatem enim asperiores molestiae totam eos, mollitia quam.
          Minus commodi quae fugit perspiciatis culpa dolorum natus. Placeat voluptates esse libero dolorum ex facilis sunt aut tempore eius, non minus est inventore excepturi provident officiis eligendi. Modi, nihil consequuntur?
          Praesentium beatae repudiandae, accusamus voluptatem excepturi placeat quasi incidunt, ut explicabo molestias laudantium illum aliquid totam nesciunt quidem assumenda est ea ducimus quaerat corporis ipsa animi facilis at voluptatum. Culpa.
          Iure tempora porro adipisci eveniet sunt corporis! Totam neque numquam sequi hic natus commodi dolore sunt dolorem voluptatibus nostrum. Porro eaque, veniam possimus consectetur blanditiis sint dolore ex quasi quod?
          Dolores minus ea iure expedita molestiae, reiciendis harum illo veritatis asperiores, maxime neque exercitationem eius, voluptatem sed eligendi ipsam facilis quaerat rem quas fugit nihil earum iste? Natus, saepe aperiam?
          Porro doloribus tenetur perferendis ad et, alias perspiciatis fugit, saepe nisi possimus neque! Fuga, ipsam velit corporis harum, ipsa blanditiis iusto, tempore esse culpa laboriosam cupiditate maxime quisquam repellat modi.
          Incidunt quas nesciunt nostrum quis, ipsum explicabo recusandae voluptas nihil sapiente quaerat minima sequi laborum dolores harum amet optio, quos possimus exercitationem veritatis debitis blanditiis. Necessitatibus esse delectus vitae nulla.
          Vero nisi enim suscipit at? Sit voluptate facilis magnam rem, distinctio debitis molestias ea, saepe ducimus ullam, quibusdam explicabo atque maxime? Harum ipsam itaque et odio quae suscipit est officiis.
          Quis mollitia harum illo nam labore placeat nihil nisi porro veniam cumque deleniti dicta sint in maxime, eius dolore ipsa modi, natus quia ad saepe est. Aliquam rerum perspiciatis quasi!
          Perferendis deserunt quis voluptatibus adipisci omnis iste culpa? Aut accusamus culpa voluptates illum eligendi officiis incidunt soluta doloribus dignissimos dolore dolorum enim aliquid, quibusdam doloremque repellat id iusto atque quasi?
          Assumenda molestias amet cum exercitationem earum! Aliquid rem adipisci velit illo voluptas quibusdam a, enim maxime dolor hic ipsa iusto vel. Id laudantium velit cum quasi vero recusandae odit dolore!
          Est nulla vel saepe, ullam reiciendis, possimus ad labore consequatur fugiat vitae, quod in eaque. Voluptates illo ad porro quaerat beatae? Voluptates minus nemo eos tempora nisi cumque quaerat. Placeat?
          Aut quam vel, et fuga veritatis repellendus unde? Provident beatae officia, magnam velit ducimus autem nihil reiciendis cupiditate praesentium suscipit quis officiis eaque tempora eveniet odio. Quod quos a odit?
          Dolorem sit aspernatur, sunt voluptatem voluptates vel? Doloribus deserunt, aliquid voluptatum voluptatibus laborum eum quam a corrupti et ad quisquam officiis assumenda facilis voluptas nulla omnis magnam porro rerum qui!
          Officia molestias a itaque recusandae fugiat hic. Impedit laborum cumque odit repellat deleniti. Sit, rem eveniet voluptatem vel recusandae deserunt ad, unde totam quaerat ab doloremque ut iusto, accusamus modi?
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.transition {
  transition-property: width, transform, clip-path;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(0.43, 0.6, 0.55, 0.91);
}
.black-box {
  --bg-color: #fff;
  --color: #222;
  --color-deactive: #666;
  --tab-slider-bar-color: var(--color);
  --content-bg-color: #e7f0dc;
  --contnet-color: #333;
}

@media (prefers-color-scheme: dark) {
  .black-box {
    --bg-color: #222;
    --color: #eee;
    --color-deactive: #aaa;
    --content-bg-color: #3a3431;
    --contnet-color: #eee;
  }
}

.black-box {
  position: fixed;
  inset: 0;
  z-index: 2;
  background-color: var(--bg-color);
  color: var(--color);
  font-size: 15px;
}

.header {
  .title {
    margin: 0;
    padding: 12px 0 8px;
    font-size: 22px;
    text-align: center;
  }

  .nav-container {
    position: relative;
    overflow-x: scroll;
    scrollbar-width: none;
    .nav {
      display: inline-flex;
      column-gap: 20px;
      white-space: nowrap;
      padding: 10px 10px 12px;
      color: var(--color-deactive);
      .nav-item {
        line-height: 1.2;
        background-clip: text;
        font-weight: 700;
      }
    }
    .nav:last-of-type {
      position: absolute;
      top: 0;
      z-index: 1;
      clip-path: path("M 10 0 L 10 40 L 40 40 L 40 0");
      color: var(--color);
    }
    .slider {
      position: absolute;
      left: 10px;
      bottom: 0;
      height: 2.5px;
      width: 30px;
      background-color: var(--color);
      border-radius: 4px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.content-container {
  display: flex;
  height: calc(100% - 91px);

  .contents {
    overflow-y: scroll;
    flex: 0 0 100%;
    background-color: var(--bg-color);
    color: var(--contnet-color);
    font-family: Inter;

    .content-title {
      margin: 10px 0 0;
      text-align: center;
      font-size: 32px;
    }
    .content {
      word-break: break-all;
      font-size: 20px;
      line-height: 1.5;
      padding: 0 20px;

      &:first-letter {
        font-size: 40px;
        margin-left: 1em;
      }
    }
  }

}
</style>
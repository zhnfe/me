const titles = [
  '全部', '热点', '黑神话: 悟空', 'PC游戏', '无畏契约', '数码硬件',
  'WallPaper Engine', '黑神话: 悟空 性能测试工具', '蔚蓝Celeste', 
  '主机游戏', '艾尔登法环', '盒友杂谈', '彩虹六号: 围攻', '黑暗之魂3',
  '巫师3: 狂猎', '只狼: 影逝二度', '英雄联盟', '荒野大镖客'
]

export const tabs = titles.map(title => {
  return {
    id: Math.random(),
    title
  }
})
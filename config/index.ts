const values = [
  '全部', '热点', 'PC游戏', '无畏契约', '数码硬件', '黑神话: 悟空',
  'WallPaper Engine', '蔚蓝Celeste', '主机游戏','艾尔登法环',
  '盒友杂谈', '黑暗之魂3', '巫师3: 狂猎', '只狼: 影逝二度', '英雄联盟',
  '荒野大镖客'
]

export const tabs = values.map(value => {
  return {
    id: Math.random(),
    value
  }
})
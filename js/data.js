// 仿小米官网 - 共享商品数据
// 说明:所有产品图均用占位图(渐变背景 + 图标)代替,避免盗用真实图片
window.PRODUCTS = [
  {
    id: 'mi14ultra',
    name: '小米14 Ultra',
    category: '手机',
    price: 6499,
    oldPrice: null,
    tag: '徕卡光学 全焦段',
    emoji: '📱',
    desc: '徕卡光学全焦段四摄 · 骁龙 8Gen3 · 2K 超视感屏',
    specs: ['骁龙 8Gen3 移动平台', '5300mAh 大电池', '90W 有线快充', 'IP68 防尘防水']
  },
  {
    id: 'mi14pro',
    name: '小米14 Pro',
    category: '手机',
    price: 4999,
    oldPrice: 5299,
    tag: '热卖',
    emoji: '📱',
    desc: '全等深微曲屏 · 徕卡可变光圈 · 澎湃 OS',
    specs: ['骁龙 8Gen3 移动平台', '4880mAh 大电池', '120W 有线快充', '徕卡可变光圈镜头']
  },
  {
    id: 'redmik70',
    name: 'Redmi K70',
    category: '手机',
    price: 2499,
    oldPrice: null,
    tag: '性价比之王',
    emoji: '📱',
    desc: '第二代骁龙 8 · 2K 直屏 · 120W 秒充',
    specs: ['第二代骁龙 8', '5000mAh 大电池', '120W 有线快充', '2K 高清直屏']
  },
  {
    id: 'pad6spro',
    name: '小米平板6S Pro',
    category: '平板',
    price: 3299,
    oldPrice: null,
    tag: '新品',
    emoji: '📟',
    desc: '12.4 英寸 3K 超清大屏 · 澎湃 OS · 办公娱乐两不误',
    specs: ['12.4 英寸 3K 屏', '骁龙 8Gen2', '10000mAh 电池', '120W 快充']
  },
  {
    id: 'tv-spro65',
    name: '小米电视 S Pro 65',
    category: '电视',
    price: 4299,
    oldPrice: 4999,
    tag: 'Mini LED',
    emoji: '📺',
    desc: 'Mini LED · 144Hz 高刷 · 4K 144Hz 画质引擎',
    specs: ['Mini LED 背光', '4K 分辨率', '144Hz 高刷新率', '澎湃 OS 电视版']
  },
  {
    id: 'laptop-pro14',
    name: '小米笔记本 Pro 14',
    category: '笔记本',
    price: 5999,
    oldPrice: null,
    tag: '轻薄旗舰',
    emoji: '💻',
    desc: 'OLED 3.5K 大师屏 · 全金属机身 · 超长续航',
    specs: ['14 英寸 OLED 屏', '酷睿 Ultra 处理器', '32GB 内存', '70Wh 大电池']
  },
  {
    id: 'router-ax6000',
    name: '小米路由器 AX6000',
    category: '智能硬件',
    price: 599,
    oldPrice: 699,
    tag: 'Wi-Fi 6',
    emoji: '📡',
    desc: 'Wi-Fi 6 增强版 · 6000M 速率 · 全屋覆盖',
    specs: ['Wi-Fi 6 增强版', '6000M 无线速率', '160MHz 频宽', 'Mesh 组网']
  },
  {
    id: 'band9',
    name: '小米手环 9',
    category: '智能硬件',
    price: 249,
    oldPrice: null,
    tag: '轻盈随行',
    emoji: '⌚',
    desc: '全天候健康监测 · 150+ 运动模式 · 21 天续航',
    specs: ['1.62 英寸 AMOLED', '150+ 运动模式', '21 天续航', '5ATM 防水']
  },
  {
    id: 'robot-vacuum',
    name: '米家扫拖机器人',
    category: '智能硬件',
    price: 1999,
    oldPrice: 2299,
    tag: '解放双手',
    emoji: '🤖',
    desc: '扫拖一体 · 激光导航 · 自动集尘',
    specs: ['激光导航', '扫拖一体', '自动集尘', 'App 远程控制']
  },
  {
    id: 'airpurifier5',
    name: '小米空气净化器 5',
    category: '家电',
    price: 899,
    oldPrice: null,
    tag: '除醛净化',
    emoji: '🌬️',
    desc: '高效除醛 · 智能联动 · 静音运行',
    specs: ['CADR 500m³/h', '除醛能力提升', '智能联动', '低噪音设计']
  },
  {
    id: 'fridge-cross',
    name: '米家冰箱 十字对开门',
    category: '家电',
    price: 2999,
    oldPrice: 3499,
    tag: '大容量',
    emoji: '🧊',
    desc: '510L 大容量 · 风冷无霜 · 一级能效',
    specs: ['510L 容量', '风冷无霜', '一级能效', '智能控温']
  },
  {
    id: 'ac-xinpin',
    name: '米家空调 巨省电 Pro',
    category: '家电',
    price: 2199,
    oldPrice: null,
    tag: '巨省电',
    emoji: '❄️',
    desc: '新一级能效 · 快速制冷 · 智能互联',
    specs: ['新一级能效', '快速制冷', '智能互联', '静音运行']
  }
];

// 分类(商城页筛选用)
window.CATEGORIES = ['全部', '手机', '平板', '电视', '笔记本', '智能硬件', '家电'];

// 品牌色,方便统一调用
window.BRAND = {
  primary: '#ff6700',
  dark: '#333333'
};

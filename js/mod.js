let modInfo = {
  name: "2026春节树",
  id: "HappyNewYear2026",
  author: "QqQe308",
  pointsName: "航迹",
  modFiles: ["layers.js", "tree.js"],

  discordName: "B站@QqQe308",
  discordLink: "https://b23.tv/TVygZjo",
  initialStartPoints: new Decimal(0),
  offlineLimit: 1,
};

let VERSION = {
  num: "2026",
  name: "春节树",
};

let changelog = `
<h2>v0.7 Yield 2026/02/20 ~ 2026/02/26<br></h2>
<h3>- 添加第9个层级：产量<br>
- 修复一些bug与显示问题，手机端按钮不再会双击放大<br>
- 游戏结局：1e1021000 航迹<br><br></h3>
<h2>v0.65 Fix-4 2026/02/19<br></h2>
<h3>- 修复几个大bug<br>
- 游戏结局：1e13000 航迹<br><br></h3>
<h2>v0.62 Fix-3 2026/02/19<br></h2>
<h3>- 修复几个小bug<br>
- 游戏结局：1e13000 航迹<br><br></h3>
<h2>v0.6 Warmth 2026/02/17 ~ 2026/02/19<br></h2>
<h3>- 添加第8个层级：温暖<br>
- 修复一些bug与显示问题<br>
- 游戏结局：1e13000 航迹<br><br></h3>
<h2>v0.52 Fix-2 2026/02/17<br></h2>
<h3>- 优化代码，修复一些逻辑问题和显示bug<br>
- 春节快乐！<br>
- 游戏结局：1e750 航迹<br><br></h3>
<h2>v0.51 Fix-1 2026/02/16<br></h2>
<h3>- 上传游戏至网站，修复一些小问题<br>
- 春节快乐！<br>
- 游戏结局：1e750 航迹<br><br></h3>
<h2>v0.5 Beginning 2026/01/11～2026/02/16<br></h2>
<h3>- 开始这份计划，进行基本构思<br>
- 添加前7个层级:希望、反物质、聚变核心、处理器、思念、中子素、熵<br>
- 游戏结局：1e750 航迹<br><br></h3>
`;

let winText = `春节快乐!!!!!!!!!!!<br>后续的更新很快就来！`;

var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"];

function getStartPoints() {
  return new Decimal(modInfo.initialStartPoints);
}

function canGenPoints() {
  let a = hu("h", 25);
  if (hm("p", 1)) a = true;
  if (hm("n", 1)) a = true;
  return a;
}

function getPointGen() {
  if (!canGenPoints()) return new Decimal(0);

  let m = getPointClick().mul(20);
  if (hm("p", 1)) m = m.add(getPointClick().mul(30));
  if (hm("n", 1)) m = m.add(getPointClick().mul(50));
  if (inChallenge("e", 13) && m.gte(1e20)) m = m.div(1e20).pow(0.01).mul(1e20);

  return m;
}

function getPointClick() {
  let m = new Decimal(1);
  if (hu("h", 11)) m = n(2);
  if (hu("h", 12)) m = m.mul(ue("h", 12));
  if (hu("h", 15)) m = m.mul(ue("h", 15));
  if (hu("a", 11)) m = m.mul(buyableEffect("a", 11));
  if (hu("a", 14)) m = m.mul(ue("a", 14));
  if (hu("a", 22)) m = m.mul(ue("a", 22));
  if (hu("a", 63)) m = m.mul(ue("a", 63));
  if (hu("a", 64)) m = m.mul(ue("a", 64));
  if (hu("a", 65)) m = m.mul(ue("a", 65));
  if (hu("a", 25)) m = m.mul(10);
  if (hu("p", 11)) m = m.mul(tmp.p.energyEffect[0]);
  if (hm("p", 2) && player.h.duration.gt(0)) m = m.mul(tmp.h.during);
  if (yb(1)) m = m.mul(ye(1));
  if (yb(21)) m = m.mul(ye(21));
  if (player.n.mult.gte(0)) m = m.mul(player.n.mult);
  if (ce("e", 31).gte(1)) m = m.mul(ce("e", 31));

  if (m.gte(1e6)) m = m.div(1e6).pow(0.5).mul(1e6); //偷偷加个软上限

  let e = n(1);
  if (inChallenge("e", 13)) e = n(0.2);
  if (hu("y", 13)) e = e.add(buyableEffect("y", 11));
  if (yb(20)) e = e.mul(ye(20));

  m = m.pow(e);

  if (m.gte("ee6")) m = m.div("ee6").pow(0.1).mul("ee6");
  if (inChallenge("e", 23)) m = m.log(1.00000000000001);
  if (inChallenge("e", 23) && hm("Y", 1)) m = m.mul(10);
  return m;
}

function addedPlayerData() {
  return {
    devSpeed: new Decimal(1),
    realTime: new Decimal(0),
  };
}

var displayThings = [
  function () {
    let a = "";
    return a;
  },
];

function isEndgame() {
  return player.points.gte("1e1021000");
}

var backgroundStyle = {};

function maxTickLength() {
  return 1e300;
}

function fixOldSave(oldVersion) {}

function n(a) {
  return new Decimal(a);
}

function gba(a, b) {
  return getBuyableAmount(a, b);
}

function gcs(a, b) {
  return getClickableState(a, b);
}

function ue(layer, id) {
  return upgradeEffect(layer, id);
}

function ce(layer, id) {
  return challengeEffect(layer, id);
}

function be(layer, id) {
  return buyableEffect(layer, id);
}

function hu(layer, id) {
  return hasUpgrade(layer, id);
}

function hm(layer, id) {
  return hasMilestone(layer, id);
}

function hc(layer, id) {
  return hasChallenge(layer, id);
}
//一大堆缩写

function createUpgrade(
  title,
  description,
  costValue,
  branches,
  effectFn,
  effectDisplayFn,
) {
  return {
    title,
    description,
    cost: n(costValue),
    branches: branches || [],
    currencyDisplayName: "中子定理",
    currencyInternalName: "theorems",
    currencyLayer: "n",
    unlocked: true,
    canAfford() {
      // 检查中子定理是否足够
      if (player.n.theorems.lt(this.cost)) return false;
      // 检查前置条件：如果 branches 不为空，则至少需要拥有其中一个前置升级
      if (this.branches.length > 0) {
        let hasAny = false;
        for (let b of this.branches) {
          if (hu(this.layer, b)) {
            hasAny = true;
            break;
          }
        }
        if (!hasAny) return false;
      }
      return true;
    },
    effect: effectFn,
    effectDisplay: effectDisplayFn,
  };
}
//用于中子研究，DeepSeek辅助

// 根据已投入能量计算连续等级（实数）
function getLevelFromTotalEnergy(barIndex, totalEnergy) {
  let discount = hu("p", 22) ? tmp.p.energyEffect[6] : n(1);
  let base = tmp.p.energyLevelBase[barIndex];
  let arg = totalEnergy.times(discount).times(base.sub(1)).plus(base);
  return arg.ln().div(base.ln()).sub(1);
}

// 根据目标等级计算所需总能量
function getTotalEnergyFromLevel(barIndex, targetLevel) {
  const discount = hu("p", 22) ? tmp.p.energyEffect[6] : n(1);
  const base = tmp.p.energyLevelBase[barIndex];
  return base.pow(targetLevel.plus(1)).sub(base).div(base.sub(1)).div(discount);
}

//Yield

const boosts = {
  //rarity: 1普通、2稀有、3史诗、4传说
  1: {
    id: 1,
    title: "航迹祝福",
    name: function () {
      return "航迹获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e10);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  2: {
    id: 2,
    title: "希望提升",
    name: function () {
      return "希望粒子获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e10);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  3: {
    id: 3,
    title: "物质加强",
    name: function () {
      return "反物质获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e10);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  4: {
    id: 4,
    title: "温暖增加",
    name: function () {
      return "温暖获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e8);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  5: {
    id: 5,
    title: "思念加成",
    name: function () {
      return "思念获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e20);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  6: {
    id: 6,
    title: "能量凝聚",
    name: function () {
      return "能量获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e5);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  7: {
    id: 7,
    title: "熵增裂隙",
    name: function () {
      return "熵获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e5);
      if (hu("Y", 22)) a = a.pow(ue("Y", 22));
      return a;
    },
  },
  8: {
    id: 8,
    title: "熵增崩塌",
    name: function () {
      return "熵获取指数+" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(0.5);
      return a;
    },
  },
  9: {
    id: 9,
    title: "指数迭代",
    name: function () {
      return "思念获取指数×" + format(this.effect());
    },
    rarity: "史诗",
    effect() {
      let a = n(1.2);
      return a;
    },
  },
  10: {
    id: 10,
    title: "精华浓缩",
    name: function () {
      return "挑战精华获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e5);
      if (hu("Y", 22)) a = a.pow(ue("Y", 22));
      return a;
    },
  },
  11: {
    id: 11,
    title: "简并激活",
    name: function () {
      return "中子素和简并次数获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e3);
      if (hu("Y", 22)) a = a.pow(ue("Y", 22));
      return a;
    },
  },
  12: {
    id: 12,
    title: "极限突破",
    name: function () {
      return "希望共鸣的两层软上限弱化为/" + format(this.effect());
    },
    rarity: "史诗",
    effect() {
      let a = n(2);
      return a;
    },
  },
  13: {
    id: 13,
    title: "虫洞跃迁",
    name: function () {
      return "虫洞获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e10);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  14: {
    id: 14,
    title: "资源融汇",
    name: function () {
      return "在产量效果后，资源倍率×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e10);
      if (hu("Y", 21)) a = a.pow(ue("Y", 21));
      return a;
    },
  },
  15: {
    id: 15,
    title: "增益永恒",
    name: function () {
      return "产量结晶获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(2);
      if (hu("Y", 23)) a = a.pow(ue("Y", 23));
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  16: {
    id: 16,
    title: "结晶加成 I",
    name: function () {
      return "所有结晶获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(2);
      if (hu("Y", 23)) a = a.pow(ue("Y", 23));
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  17: {
    id: 17,
    title: "结晶加成 II",
    name: function () {
      return "所有结晶获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(2);
      if (hu("Y", 23)) a = a.pow(ue("Y", 23));
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  18: {
    id: 18,
    title: "结晶加成 III",
    name: function () {
      return "所有结晶获取量×" + format(this.effect());
    },
    rarity: "史诗",
    effect() {
      let a = n(2);
      if (hu("Y", 23)) a = a.pow(ue("Y", 23));
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  19: {
    id: 19,
    title: "结晶加成 IV",
    name: function () {
      return "所有结晶获取量×" + format(this.effect());
    },
    rarity: "传说",
    effect() {
      let a = n(2);
      if (hu("Y", 23)) a = a.pow(ue("Y", 23));
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  20: {
    id: 20,
    title: "终极提升",
    name: function () {
      return "航迹获取指数×" + format(this.effect());
    },
    rarity: "传说",
    effect() {
      let a = n(1.2);
      return a;
    },
  },
  21: {
    id: 21,
    title: "轮回提升",
    name: function () {
      return "航迹获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e50);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  22: {
    id: 22,
    title: "算力凝固",
    name: function () {
      return "算力获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e50);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  23: {
    id: 23,
    title: "处理延续",
    name: function () {
      return "处理器获取量×" + format(this.effect());
    },
    rarity: "普通",
    effect() {
      let a = n(1e30);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  24: {
    id: 24,
    title: "思念延续",
    name: function () {
      return "思念获取量×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e200);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  25: {
    id: 25,
    title: "极限延伸",
    name: function () {
      return "希望粒子和反物质软上限起始点×" + format(this.effect());
    },
    rarity: "稀有",
    effect() {
      let a = n(1e300);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  26: {
    id: 26,
    title: "增速狂潮",
    name: function () {
      return "全局速率×" + format(this.effect());
    },
    rarity: "史诗",
    effect() {
      let a = n(2);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  27: {
    id: 27,
    title: "膨胀生产",
    name: function () {
      return "电子、质子、中子获取量×" + format(this.effect());
    },
    rarity: "史诗",
    effect() {
      let a = n(1e50);
      if (hu("Y", 24)) a = a.pow(ue("Y", 24));
      return a;
    },
  },
  28: {
    id: 28,
    title: "打破极限",
    name: function () {
      return "能量获取指数×" + format(this.effect());
    },
    rarity: "传说",
    effect() {
      let a = n(1.2);
      return a;
    },
  },
  29: {
    id: 29,
    title: "总览全局",
    name: function () {
      return "全局速率^" + format(this.effect());
    },
    rarity: "传说",
    effect() {
      let a = n(1.5);
      return a;
    },
  },
  30: {
    id: 30,
    title: "最终增益",
    name: function () {
      return "产能结晶的效果×" + format(this.effect());
    },
    rarity: "传说",
    effect() {
      let a = n(1.2);
      return a;
    },
  },
};

// 稀有度权重（用于加权随机）
const rarityWeight = {
  1: 20,
  2: 5,
  3: 2,
  4: 1,
};

// ========== 工具函数 ==========
/**
 * 从已解锁列表中随机抽取 count 个不重复的增益 ID（加权不放回）
 * @param {number} count - 抽取数量，默认 3
 * @returns {number[]} 抽取到的 ID 数组
 */
function generateCandidates(count = 3) {
  let unlocked = player.Y.unlockedBoosts;
  if (!unlocked || unlocked.length === 0) return [];

  // 排除已永久化的增益
  let unlockedNotPermanent = unlocked.filter(
    (id) => !player.Y.permanentBoosts.includes(id),
  );

  // 构建带权重的可用列表
  let available = unlockedNotPermanent.map((id) => ({
    id,
    weight: rarityWeight[boosts[id].rarity] || 1,
  }));

  const candidates = [];
  for (let i = 0; i < Math.min(count, unlockedNotPermanent.length); i++) {
    const totalWeight = available.reduce((sum, item) => sum + item.weight, 0);
    let rand = Math.random() * totalWeight;
    let idx = 0;
    let acc = 0;
    for (let j = 0; j < available.length; j++) {
      acc += available[j].weight;
      if (rand < acc) {
        idx = j;
        break;
      }
    }
    const chosen = available.splice(idx, 1)[0];
    candidates.push(chosen.id);
  }
  return candidates;
}

/**
 * 玩家选择一个增益（调用此函数时需确保 id 在 candidates 中）
 * @param {number} id - 选中的增益 ID
 */
function selectBoost(id) {
  if (player.Y.candidates.includes(id)) {
    player.Y.current = id;
    // 可清空候选，或保留供显示
    // player.Y.candidates = [];
  }
}

function yb(id) {
  //yieldboost
  return player.Y.current === id || player.Y.permanentBoosts.includes(id);
}
function ye(id) {
  //yieldeffect
  return boosts[id].effect();
}

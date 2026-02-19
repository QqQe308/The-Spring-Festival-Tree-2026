/*
Hope _ 启航于宇宙归途(Embarkation) _ #FEFFBB
Antimatter _ 虫洞于时空转移(Transfer) _ #84F9B1
Power _ 能量于稳态调和(Equilibrium)_ #fddd08
Processor _ 处理于资源整合(Resources) _ #4169E1
Yearning _ 思绪于归乡心切(Nostalgia) _ #FF0099
Neutronium _ 积累于中子元素(Accumulation) _ #B266FD
Entropy _ 光辉于熵增挑战(Light) _ #8B3300
Warmth _ 温暖于破除混乱(Disorder) _ #FF4500
Yield _ 存储于产量收获(Restoration) _ #32CD32
Experience _ 经验于行星轨道(Ellipsoid) _ #C0C0C0
Astra _ 返程于大气航行(Atmosphere) _ #00CED1
Reunion _ 终点于团聚时刻(Moments) _ #DC143C
Happy New Year _ 梦想于永恒实现(Eternal Dream) _ #308308
*/

/*
上一层结束后，在距离层级中解锁下一层，进行“跳跃“，每层的推进都会让距离缩短
*/

/*
春节快乐！
*/
addLayer("d", {
  infoboxes: {
    introBox: {
      title: "距离 _ Distance",
      body() {
        return "承载着家的呼唤…";
      },
    },
  },
  name: "Distance",
  symbol: "D",
  position: 0,
  startData() {
    return {
      unlocked: true,
    };
  },
  color: "#f0f8ff",
  type: "none",
  row: "side",
  layerShown() {
    return true;
  },
  tooltip: "距离",
  update(diff) {},
  tabFormat: {
    距离: {
      content: [
        ["infobox", "introBox"],
        [
          "display-text",
          function () {
            const distances = [
              "308",
              "280",
              "240",
              "200",
              "180",
              "150",
              "100",
              "50",
              "20",
              "1",
              "0.00001",
              "0",
              //注：这只是一个显示，不代表后续层级真实的进度，后续可能会给这个距离系统加的完善一些，不是只显示一个数字
            ];
            let count = player.d.upgrades.length; // 已购买的数量
            if (count === 0)
              return `归乡的路程，还有 <h2 style='color:#f0f8ff; '>308</h2> 光年`;
            return `归乡的路程，还有 <h2 style='color:#f0f8ff; '>${distances[count - 1]}</h2> 光年`;
          },
        ],
        "blank",
        "upgrades",
      ],
    },
    剧情表: {
      content: [["infobox", "introBox"], "milestones"],
    },
  },
  upgrades: {
    11: {
      title: "第一次跳跃",
      description: "解锁“希望 (Hope)”",
      cost: n(0),
      currencyDisplayName: "航迹",
      currencyInternalName: "points",
    },
    12: {
      title: "第二次跳跃",
      description: "解锁“反物质 (Antimatter)”",
      cost: n(1000),
      unlocked() {
        return hu("d", 11);
      },
      currencyDisplayName: "航迹",
      currencyInternalName: "points",
    },
    13: {
      title: "第三次跳跃",
      description: "解锁“聚变核心 (Power)”",
      cost: n(1e15),
      unlocked() {
        return hu("d", 12);
      },
      currencyDisplayName: "反物质",
      currencyInternalName: "points",
      currencyLayer: "a",
    },
    14: {
      title: "第四次跳跃",
      description: "解锁“处理器 (Processor)”<br>(不消耗聚变核心)",
      cost: n(5),
      onPurchase() {
        player.p.points = n(5);
      },
      unlocked() {
        return hu("d", 13);
      },
      currencyDisplayName: "聚变核心",
      currencyInternalName: "points",
      currencyLayer: "p",
    },
    15: {
      title: "第五次跳跃",
      description: "解锁“思念 (Yearning)”<br>(不消耗聚变核心)",
      cost: n(8),
      onPurchase() {
        player.p.points = n(8);
      },
      unlocked() {
        return hu("d", 14);
      },
      currencyDisplayName: "聚变核心",
      currencyInternalName: "points",
      currencyLayer: "p",
    },
    21: {
      title: "第六次跳跃",
      description: "解锁“中子素 (Neutronium)”<br>(不消耗聚变核心)",
      cost: n(13),
      onPurchase() {
        player.p.points = n(13);
      },
      unlocked() {
        return hm("p", 11);
      },
      currencyDisplayName: "聚变核心",
      currencyInternalName: "points",
      currencyLayer: "p",
    },
    22: {
      title: "第七次跳跃",
      description: "解锁“熵 (Entropy)”<br>(你可以重置中子树恢复中子定理)",
      cost: n(45),
      unlocked() {
        return hm("n", 15);
      },
      currencyDisplayName: "中子定理",
      currencyInternalName: "theorems",
      currencyLayer: "n",
    },
    23: {
      title: "第八次跳跃",
      description: "解锁“温暖 (Warmth)”<br>(你可以重置中子树恢复中子定理)<br>",
      cost: n(60),
      unlocked() {
        return hm("n", 18);
      },
      currencyDisplayName: "中子定理",
      currencyInternalName: "theorems",
      currencyLayer: "n",
    },
    24: {
      title: "第九次跳跃",
      description:
        "解锁“??? (???)”<br>(你可以重置中子树恢复中子定理)<br>正在制作中，恭喜通关！",
      cost: n(450),
      unlocked() {
        return hu("w", 55);
      },
      currencyDisplayName: "中子定理",
      currencyInternalName: "theorems",
      currencyLayer: "n",
    },
  },
  milestones: {
    0: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("d", 11);
      },
      effectDescription:
        "要求:进行第一次跳跃<br>解锁“启航于宇宙归途(Embarkation) I”",
    },
    1: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("h", 11);
      },
      effectDescription:
        "要求:获得第1个希望升级“开始航行”<br>解锁“启航于宇宙归途(Embarkation) II”",
    },
    2: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("h", 15);
      },
      effectDescription:
        "要求:获得第5个希望升级“进阶升级”<br>解锁“启航于宇宙归途(Embarkation) III”",
    },
    3: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("a", 11);
      },
      unlocked() {
        return hm("d", 0);
      },
      effectDescription:
        "要求:获得第1个反物质升级“充能模式”<br>解锁“虫洞于时空转移(Transfer) I”",
    },
    4: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("a", 15);
      },
      unlocked() {
        return hm("d", 1);
      },
      effectDescription:
        "要求:获得第5个反物质升级“循环加成”<br>解锁“虫洞于时空转移(Transfer) II”",
    },
    5: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("h", 25);
      },
      unlocked() {
        return hm("d", 2);
      },
      effectDescription:
        "要求:获得第10个希望升级“持续进展”<br>解锁“虫洞于时空转移(Transfer) III”",
    },
    6: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("a", 25);
      },
      unlocked() {
        return hm("d", 3);
      },
      effectDescription:
        "要求:获得第10个反物质升级“再启新篇”<br>解锁“虫洞于时空转移(Transfer) IV”",
    },
    7: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("p", 0);
      },
      unlocked() {
        return hm("d", 4);
      },
      effectDescription:
        "要求:获得第1个聚变核心<br>解锁“能量于稳态调和(Equilibrium) I”",
    },
    8: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("p", 13);
      },
      unlocked() {
        return hm("d", 5);
      },
      effectDescription:
        "要求:获得第3个能量升级“绚丽填充”<br>解锁“能量于稳态调和(Equilibrium) II”",
    },
    9: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("p", 3);
      },
      unlocked() {
        return hm("d", 6);
      },
      effectDescription:
        "要求:获得第4个聚变核心<br>解锁“能量于稳态调和(Equilibrium) III”",
    },
    10: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("p", 4);
      },
      unlocked() {
        return hm("d", 7);
      },
      effectDescription:
        "要求:获得第5个聚变核心<br>解锁“能量于稳态调和(Equilibrium) IV”",
    },
    11: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("P", 0);
      },
      unlocked() {
        return hm("d", 8);
      },
      effectDescription:
        "要求:获得第1个处理器<br>解锁“处理于资源整合(Resources) I”",
    },
    12: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hu("P", 13);
      },
      unlocked() {
        return hm("d", 9);
      },
      effectDescription:
        "要求:获得第3个处理器升级”进阶自动”<br>解锁“处理于资源整合(Resources) II”",
    },
    13: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("P", 3);
      },
      unlocked() {
        return hm("d", 10);
      },
      effectDescription:
        "要求:获得第1e6个处理器<br>解锁“处理于资源整合(Resources) III”",
    },
    14: {
      requirementDescription: "解锁新剧情！",
      done() {
        return hm("P", 4);
      },
      unlocked() {
        return hm("d", 11);
      },
      effectDescription:
        "要求:获得第1e8个处理器<br>解锁“处理于资源整合(Resources) IV”",
    },
    15: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.y.points.gte(0.01);
      },
      unlocked() {
        return hm("d", 12);
      },
      effectDescription:
        "要求:获得0.01思念<br>解锁“思念于归乡心切(Nostalgia) I”",
    },
    16: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.y.points.gte(1e4);
      },
      unlocked() {
        return hm("d", 13);
      },
      effectDescription:
        "要求:获得10000思念<br>解锁“思念于归乡心切(Nostalgia) II”",
    },
    17: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.y.points.gte(1e15);
      },
      unlocked() {
        return hm("d", 14);
      },
      effectDescription:
        "要求:获得1e15思念<br>解锁“思念于归乡心切(Nostalgia) III”",
    },
    18: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.y.points.gte(1e100);
      },
      unlocked() {
        return hm("d", 15);
      },
      effectDescription:
        "要求:获得1e100思念<br>解锁“思念于归乡心切(Nostalgia) IV”",
    },
    19: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.n.resets.gte(1);
      },
      unlocked() {
        return hm("d", 16);
      },
      effectDescription: "要求:简并1次<br>解锁“积累于中子元素(Accumulation) I”",
    },
    20: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.n.resets.gte(10);
      },
      unlocked() {
        return hm("d", 17);
      },
      effectDescription:
        "要求:简并10次<br>解锁“积累于中子元素(Accumulation) II”",
    },
    21: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.n.resets.gte(50);
      },
      unlocked() {
        return hm("d", 18);
      },
      effectDescription:
        "要求:简并50次<br>解锁“积累于中子元素(Accumulation) III”",
    },
    22: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.n.theorems.gte(45);
      },
      unlocked() {
        return hm("d", 19);
      },
      effectDescription:
        "要求:获得45中子定理<br>解锁“积累于中子元素(Accumulation) IV”",
    },
    23: {
      requirementDescription: "解锁新剧情！",
      done() {
        return inChallenge("e", 11);
      },
      unlocked() {
        return hm("d", 20);
      },
      effectDescription:
        "要求:进入第一个熵挑战<br>解锁“光辉于熵增挑战(Light) I”",
    },
    24: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.e.maxpoints[0].gte(1000);
      },
      unlocked() {
        return hm("d", 21);
      },
      effectDescription:
        "要求:在挑战1中获得1000熵<br>解锁“光辉于熵增挑战(Light) II”",
    },
    25: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.e.maxpoints[1].gte(1000);
      },
      unlocked() {
        return hm("d", 22);
      },
      effectDescription:
        "要求:在挑战2中获得1000熵<br>解锁“光辉于熵增挑战(Light) III”",
    },
    26: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.e.maxpoints[2].gte(1000);
      },
      unlocked() {
        return hm("d", 23);
      },
      effectDescription:
        "要求:在挑战3中获得1000熵<br>解锁“光辉于熵增挑战(Light) IV”",
    },
    27: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.w.points.gte(1);
      },
      unlocked() {
        return hm("d", 24);
      },
      effectDescription: "要求:获得 1 温暖<br>解锁“温暖于破除混乱(Disorder) I”",
    },
    28: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.w.points.gte(1e10);
      },
      unlocked() {
        return hm("d", 25);
      },
      effectDescription:
        "要求:获得 1e10 温暖<br>解锁“温暖于破除混乱(Disorder) II”",
    },
    29: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.w.points.gte(1e30);
      },
      unlocked() {
        return hm("d", 26);
      },
      effectDescription:
        "要求:获得 1e30 温暖<br>解锁“温暖于破除混乱(Disorder) III”",
    },
    30: {
      requirementDescription: "解锁新剧情！",
      done() {
        return player.w.points.gte(1e45);
      },
      unlocked() {
        return hm("d", 27);
      },
      effectDescription:
        "要求:获得 1e45 温暖<br>解锁“温暖于破除混乱(Disorder) IV”",
    },
  },
}); //距离 D

addLayer("h", {
  infoboxes: {
    introduction0: {
      title: "游戏全局介绍",
      body() {
        return "欢迎大家游玩《2026春节树》！这里是作者QqQe308，这是一款以“春节归家”为情感内核的增量游戏。在游戏中，玩家将扮演一名远在星海之外的宇航员，通过独特的“航迹”积累与“距离”缩减双重进度系统，在纯文字与数值构成的宇宙中，踏上跨越光年的返乡旅途。游戏将情感叙事深度融入每一次资源解锁与升级之中，并用两个隐藏的字母密码串联起全部十二章旅程，旨在为玩家提供一段温暖且充满探索感的代码宇宙漫游。<br>游戏类型是“树类增量游戏”，如果你需要对树类游戏的介绍，请查看下方“树类游戏介绍”；本游戏有成就和“距离”系统，请查看右上角的黄色层级查看所有成就和“距离”；本游戏有剧情，分布在各个层级中，你可以先查看“剧情”标签页中的“剧情1”和“剧情2”；对于本层级的内容，请查看“Hope _ 希望”<br>感谢QqQe308的灵感与编程，感谢溜溜溜达嘿等群友的支持与催更，感谢Deepseek的剧情创作，感谢寒假，感谢春节，也感谢屏幕前的你<br>注意：本游戏尚未完结";
      },
    },
    introduction1: {
      title: "树类游戏介绍",
      body() {
        return "树类游戏是增量游戏的一种，在游戏中，各个“层级”是主要游玩内容，而高数量级的资源也是一大特点层级中的资源可以购买升级、完成挑战、提升可购买、达成里程碑等，游戏的画面和美工可能不够精美，但我会努力倾尽心力让内容精彩！";
      },
    },
    text1: {
      title: "剧情1: 启航于宇宙归途(Embarkation) I",
      body() {
        return hm("d", 0)
          ? "欢迎，宇航员。<br>你漂泊于无垠深空，但一个目标清晰如灯塔：在春节前，努力回家。<br>前方是漫长的星际旅程，而你的航迹，始于当下。请尝试点击下方最显眼的按钮「凝聚希望」，并观察上方「航迹」数值的变化。这串数字是你所有努力的总和，是丈量你归途的根本尺度。<br>“每一点能量，都在将你推离漂泊，拉近家园。”<br>在右上角的子层级中，有一个至关重要的指标：「距离」，它代表你与家之间剩下的光年数，你的一切操作，最终都是为了看着它逐步缩减，直至归零。<br>“宇宙自有其节奏。当你准备好时，前路自会显现。”"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情2: 启航于宇宙归途(Embarkation) II",
      body() {
        return hm("d", 1)
          ? "当希望粒子的微光在指尖汇聚，它们开始低语。<br>起初是杂乱的频率，如同星尘的噪音。<br>但随着数量增长，杂音逐渐沉淀，形成一段模糊的旋律。<br>我忽然想起，那是许多年前，某个团圆夜里，背景播放的熟悉曲调。<br>它并非来自飞船的数据库，而是从我记忆深处被唤醒。<br>此刻，控制台自动标注出一个新的读数。<br>它显示，这些粒子间的共鸣，正与某个遥远源头传来的、极其微弱的节律同步。<br>那源头的方向，与家园的坐标悄然重合。<br>宇宙的寂静并非虚无，它充满回响。<br>我收集的每一粒光，似乎都在加深我与那条归途之间的纽带。<br>继续下去。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情3: 启航于宇宙归途(Embarkation) III",
      body() {
        return hm("d", 2)
          ? "当航迹突破一千的刻度，仪表盘的嗡鸣声悄然改变了频率。<br>那种持续了许久的、稳定的积累感，在这一刻达到了临界。<br>我感到船舱内的光线被拉长，又压缩，一种并非由引擎产生的推力将我轻柔地按在座椅上。<br><br>窗外的星辰不再是静止的钻石，它们化作了流溢的光丝，向后飞逝。<br>飞船并未剧烈移动，而是它包裹的空间本身，在朝着家园的方向被轻轻“折叠”。<br>一次短促的时空跳跃。<br><br>跳跃结束的震颤平复后，首先映入眼帘的是导航屏上跳跃式缩减的距离读数。<br>一段切实的路程被跨越了。<br>然而，主能源舱的警报随之亮起——常规聚变引擎因这次维度变动而过载，输出功率正在衰减。<br><br>就在这动力青黄不接的寂静时刻，一道从未有过的读数闯入了监测范围。<br>在飞船前方，那个因跳跃而尚未完全平复的空间褶皱中，检测到了极端高能的粒子湮灭闪光。<br>那不是燃烧，是纯粹的“抹除”，并释放出星辰内核般的力量。<br>数据库将其标记为：反物质。<br><br>它就在那里，在空间的伤口中闪烁，是危机，也是唯一的出路。<br>常规的容器无法容纳它，我需要全新的协议来捕捉和利用这份宇宙中最危险也最强大的馈赠。<br><br>"
          : "剧情暂未解锁";
      },
    },
    hope: {
      title: "Hope _ 希望",
      body() {
        return "希望(Hope)，这是旅途的起点，也是航迹的最初开端。你将在此收集资源，准备好进行下一次跳跃";
      },
    },
  },
  name: "hope",
  symbol: "H",
  position: 0,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      wait: n(0),
      duration: n(0),
      duration2: n(0),
      duringDrain: n(0),
      duringDrain2: n(0),
      //分别是希望共振和希望共鸣，Player里面的是剩余时间，Tmp里面累计时间，Drain是点击时投入的资源数量
    };
  },
  color: "#feffbb",
  requires: n(10),
  resource: "希望粒子",
  baseResource: "航迹",
  baseAmount() {
    return player.points;
  },
  type: "normal",
  exponent() {
    return inChallenge("e", 22) ? n(0) : n(0.5);
  },
  gainMult() {
    let mult = n(1);
    if (hu("h", 14)) mult = mult.mul(ue("h", 14));
    if (hu("a", 13)) mult = mult.mul(be("a", 12));
    if (hu("a", 14)) mult = mult.mul(ue("a", 14));
    if (hu("a", 22)) mult = mult.mul(ue("a", 22));
    if (hu("a", 61)) mult = mult.mul(ue("a", 61));
    if (hu("a", 25)) mult = mult.mul(10);
    if (hu("p", 12)) mult = mult.mul(tmp.p.energyEffect[1]);
    if (ce("e", 32).gte(1)) mult = mult.mul(ce("e", 32));
    return mult;
  },
  gainExp() {
    let e = n(1);
    if (hu("y", 14)) e = e.add(be("y", 12));
    return e;
  },
  directMult() {
    let m = n(1);
    if (player.n.mult.gte(0)) m = m.mul(player.n.mult);
    return m;
  },
  row: 0,
  hotkeys: [
    {
      key: "h",
      description: "对于每个层级，对应的重置快捷键是层级节点上显示的字母",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  passiveGeneration() {
    mult = n(0);
    if (hu("P", 11)) mult = mult.add(ue("P", 11));
    return mult;
  },
  update(diff) {
    player.h.wait = player.h.wait.sub(diff).max(0);
    if (!hu("P", 14)) player.h.duration = player.h.duration.sub(diff).max(0);
    if (!hu("w", 35)) player.h.duration2 = player.h.duration2.sub(diff).max(0);
    if (hu("P", 14)) player.h.duration = tmp.h.duration;
    if (hu("w", 35)) player.h.duration2 = tmp.h.duration2;
    if (hu("w", 35)) player.h.duringDrain2 = player.w.points;
    if (hu("P", 14)) player.h.duringDrain = player.h.points;
  },
  autoUpgrade() {
    return hm("P", 2) && player.P.auto2 && (!player.e.inChal || hu("w", 33));
  },
  layerShown() {
    return hu("d", 11);
  },
  tabFormat: {
    希望: {
      content: [
        ["infobox", "hope"],
        "main-display",
        "blank",
        "prestige-button",
        "resource-display",
        "clickables",
        "blank",
        "upgrades",
      ],
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "introduction0"],
        ["infobox", "introduction1"],
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
      ],
    },
  },
  wait() {
    let t = n(1);
    if (hu("h", 13)) t = n(0.5);
    if (hu("a", 12)) t = n(0.25);
    if (hu("h", 22)) t = n(0.125);
    if (hu("h", 23)) t = n(0.0625);
    if (hu("h", 24)) t = n(0);
    return t;
  },
  duration() {
    let a = player.h.points.max(10).log(10);
    return a;
  },
  during() {
    let a = player.h.duringDrain.max(10).log(10);
    if (hu("P", 14)) a = a.mul(n(1).add(ue("P", 14)));
    if (player.h.duration2.gt(0)) a = a.pow(tmp.h.during2);
    if (player.h.duration.lte(0)) a = n(1);
    return a;
  }, //当前效果
  duringPoints() {
    let a = player.h.points.max(10).log(10);
    if (hu("P", 14)) a = a.mul(n(1).add(ue("P", 14)));
    if (player.h.duration2.gt(0)) a = a.pow(tmp.h.during2);
    return a;
  }, //如果现在点击，效果的更新
  duration2() {
    let a = player.w.points.add(1).mul(10).log(10).pow(0.8).mul(10);
    return a;
  },
  during2() {
    let a = player.h.duringDrain2.add(1).mul(10).log(10).pow(0.45);
    let t = n(10);
    if (hu("w", 43)) t = n(2.5);
    if (a.gte(3)) a = a.sub(3).div(t).add(3);
    if (a.gte(4)) a = a.sub(4).div(5).add(4);
    if (player.h.duration2.lte(0)) a = n(1);
    if (player.e.inChal) a = n(1);
    return a;
  }, //当前效果
  duringPoints2() {
    let a = player.w.points.add(1).mul(10).log(10).pow(0.45);
    let t = n(10);
    if (hu("w", 43)) t = n(2.5);
    if (a.gte(3)) a = a.sub(3).div(t).add(3);
    if (a.gte(4)) a = a.sub(4).div(5).add(4);
    return a;
  }, //如果现在点击，效果的更新
  doReset(resettingLayer) {
    if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"];
      if (hu("w", 21)) kept.push("duration2", "duringDrain2");
      layerDataReset(this.layer, kept);
    }
  },
  clickables: {
    11: {
      title() {
        return "凝聚希望";
      },
      display: function () {
        return (
          "点击获得" +
          format(getPointClick()) +
          "航迹<br>冷却时间: " +
          formatTime(player.h.wait)
        );
      },
      onClick() {
        player.points = player.points.add(getPointClick());
        player.h.wait = tmp.h.wait;
      },
      canClick() {
        return player.h.wait.lte(0) && !hu("h", 25) &&!inChallenge("e",13);
      },
      unlocked() {
        return true;
      },
      style: { width: "200px" },
    },
    12: {
      title() {
        return "希望共振";
      },
      display: function () {
        return (
          "消耗所有的希望，但接下来的" +
          format(tmp.h.duration) +
          "秒内，航迹获取量翻" +
          format(tmp.h.duringPoints) +
          "倍<br>剩余持续时间: " +
          formatTime(player.h.duration) +
          "<br>当前效果: ×" +
          format(tmp.h.during)
        );
      },
      onClick() {
        player.h.duration = tmp.h.duration;
        player.h.duringDrain = player.h.points;
        player.h.points = n(0);
      },
      canClick() {
        return player.h.points.gte(10) && !hu("P", 14);
      },
      unlocked() {
        return hm("p", 2);
      },
      style: { width: "200px" },
    },
    13: {
      title() {
        return "希望共鸣";
      },
      display: function () {
        return (
          "消耗所有的温暖，但接下来的" +
          format(tmp.h.duration2) +
          "秒内，“希望共振”效果^" +
          format(tmp.h.duringPoints2, 4) +
          "<br>剩余持续时间: " +
          formatTime(player.h.duration2) +
          "<br>当前效果: ^" +
          format(tmp.h.during2, 4)
        );
      },
      onClick() {
        player.h.duration2 = tmp.h.duration2;
        player.h.duringDrain2 = player.w.points;
        player.w.points = n(0);
      },
      canClick() {
        return player.w.points.gte(1) && !player.e.inChal && !hu("w", 35);
      },
      unlocked() {
        return hu("w", 21);
      },
      style: { width: "200px" },
    },
  },
  upgrades: {
    11: {
      title: "开始航行",
      description: "每次凝聚希望获得 2 航迹",
      unlocked() {
        return !inChallenge("e", 12);
      },
      cost: n(1),
    },
    12: {
      title: "经典升级",
      description: "希望粒子增加航迹获取量",
      cost: n(1),
      unlocked() {
        return (hu("h", 11) || hu("a", 52)) && !inChallenge("e", 12);
      },
      effect() {
        let a = player.h.points.pow(0.4).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    13: {
      title: "略微进展",
      description: "凝聚希望冷却时间减半",
      cost: n(5),
      unlocked() {
        return (hu("h", 12) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
    14: {
      title: "走向前方",
      description: "航迹增加希望粒子获取量",
      cost: n(15),
      unlocked() {
        return (hu("h", 13) || hu("a", 52)) && !inChallenge("e", 12);
      },
      effect() {
        let a = player.points.pow(0.12).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    15: {
      title: "进阶升级",
      description: "希望粒子再次增加航迹获取量",
      cost: n(30),
      unlocked() {
        return (hu("h", 14) || hu("a", 52)) && !inChallenge("e", 12);
      },
      effect() {
        let a = player.h.points.pow(0.3).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    21: {
      title: "第二阶段",
      description: "反物质获取量翻倍",
      cost: n(1000),
      unlocked() {
        return (hu("a", 13) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
    22: {
      title: "三次进展",
      description() {
        return inChallenge("e", 13)
          ? "凝聚希望冷却时间再次减半<br>在这个挑战中，购买完这一行升级有特殊效果"
          : "凝聚希望冷却时间再次减半";
      },
      cost: n(1e7),
      unlocked() {
        return (hu("a", 15) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
    23: {
      title: "四次进展",
      description: "凝聚希望冷却时间再次减半",
      cost: n(1e8),
      unlocked() {
        return (hu("h", 22) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
    24: {
      title: "五次进展",
      description: "凝聚希望不再有冷却时间",
      cost: n(1e9),
      unlocked() {
        return (hu("h", 23) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
    25: {
      title: "持续进展",
      description() {
        return inChallenge("e", 13)
          ? "自动凝聚希望，速度为每秒20次，但禁用手动凝聚希望<br>另外，解锁第四个反应堆"
          : "自动凝聚希望，速度为每秒20次，但禁用手动凝聚希望";
      },
      cost: n(1e10),
      unlocked() {
        return (hu("h", 24) || hu("a", 52)) && !inChallenge("e", 12);
      },
    },
  },
}); //希望 H
addLayer("a", {
  infoboxes: {
    text1: {
      title: "剧情4: 虫洞于时空转移(Transfer) I",
      body() {
        return hm("d", 3)
          ? "空间跳跃的涟漪尚未完全平息，我就被推入了新的法则。<br>眼前的空间并非空无一物，它布满细微的裂痕，像一片被无形之力撞击过的冰面。<br>反物质的幽灵就在这些裂痕深处诞生、湮灭，闪烁著幽蓝的冷光。<br><br>它并非燃料，而是一种否定。否定质量，否定空虚，否定“存在”本身。<br>驾驭它，意味着要与这种终极的虚无共舞，并从其毁灭性的湮灭中，窃取照亮前路的光与驱动钢铁归家的力。<br><br>飞船的常规采集模块已自动下线，它们过于笨拙。<br>一套全新的、基于强磁场束缚与量子隧穿效应的协议正在载入。<br>它的图标在我的控制台上浮现，冰冷而精密，代表著与充满温度与思念的“希望”截然不同的力量层次。<br><br>这是宇宙的另一面，冷酷、高效、充满颠覆性的力量。<br>而我知道，要回家，我必须同时掌握光的温暖，与幽蓝的冰冷。<br>请建立与反物质的连接。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情5: 虫洞于时空转移(Transfer) II",
      body() {
        return hm("d", 4)
          ? "我关闭了虫洞的监测画面。<br>它的物理参数、不稳定性、辐射尾迹，所有数据都已下载完毕。<br>窗外的奇异光辉不再是一个景观，它变成了一串串冰冷的、可被方程解构的代码。<br><br>真正的转移，此刻才在船舱内开始。<br>我启动了第三座反物质反应堆。<br>它运行的原理，正是对窗外那个宇宙奇观的微观模仿：在磁场构筑的“微型时空”内，持续制造并控制着毫秒级的湮灭。<br><br>没有剧烈的跳跃，只有储备读数稳定而高效的攀升。<br>我从一个宇宙奇迹的仰望者，变成了它的学徒。<br>家，不是被“跳”过去的，而是被这种模拟奇迹的力量，一寸一寸拉近的。<br><br>工具，已经就位。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情6: 虫洞于时空转移(Transfer) III",
      body() {
        return hm("d", 5)
          ? "我松开了手指。<br>控制台上，“凝聚希望”的指令图标缓缓暗去，进入了常驻执行序列。<br><br>船舱内依然寂静，但一切都不同了。<br>我看不见它们，但我知道：每秒钟，有上亿的“希望”被自动析出、提纯，并注入反应链路；随之而来的是“航迹”如洪流般刷新，稳定得如同心跳；而在这一切的核心，那三座幽蓝的“湮灭核心”正无声运转，将一部分洪流转化为更危险、也更强大的基础力量。<br><br>我成了一个观察者。<br>这套由我亲手启动的、精密的因果之链，正在自行运转。它比我更专注，更高效，永不停歇。<br>归家的距离，正被这套系统，一秒一秒，确定地计算。<br><br>我望向窗外的虫洞，它依然在缓慢旋转，宏伟而神秘。<br>但我不再感到敬畏，反而感到一种奇异的亲近。<br>我的飞船内部，此刻也存在着一个微缩的宇宙：有希望作为星辰，有航迹作为时空，有反物质作为扭曲一切的力。<br><br>我并未闲下来。一个清晰的认知浮现在脑海：系统的效率，远未达到理论的极限。<br>优化的空间，如同眼前的星辰一样繁多。而下一步的关键……似乎在于如何让这股庞大的能量，更加“听话”。<br><br>工具已经自行运转。而工程师的下一项任务，是教会它们合唱。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情7: 虫洞于时空转移(Transfer) IV",
      body() {
        return hm("d", 6)
          ? "三座湮灭核心的出力曲线，在控制屏上终于收拢为三条笔直、稳固的线。<br>它们达到了当前框架的理论极限。<br>最后一项可购买的协议也已载入，系统日志被“优化完毕”的标记填满。<br><br>一切都在轰鸣。<br>希望、航迹与反物质，三者构成了一个完美闭合的黄金三角，如同一个微型的恒星系，在我的船舱内自治地、澎湃地运转。<br>我不再是操作员，而是这座小型宇宙的监看者。<br><br>但正是在这极致的效率中，我察觉到了新的瓶颈。<br>不是数量，是控制。<br>这股合成的洪流强大却粗糙，它推动我前进，却像用海啸去推动一枚指针。<br>为了走完最后、最精密的那段路，我需要的不再是更大的洪流，而是驾驭洪流的绝对精度——一种更基础、更稳定、能够为所有狂野力量定调的基础力量。<br><br>导航图闪烁起来。<br>一个早已标记，但直到此刻才被系统正式建议解锁的协议，在高亮闪烁。<br><br>虫洞的观测窗口在背后缓缓闭合。<br>关于“转移”的课程结束了。<br>下一堂课，名为“掌控”。"
          : "剧情暂未解锁";
      },
    },
    antimatter: {
      title: "Antimatter _ 反物质",
      body() {
        return "反物质(Antimatter)，这是游戏中的第二个层级。在这里，你将消耗航迹，换来强大的反物质资源，以填充反应堆。每次重置还会获得一个虫洞，可用来购买升级。这是你建造的第一座“引擎室”，也是第三次跳跃的燃料。";
      },
    },
    annihilation: {
      title: "Annihilation _ 湮灭",
      body() {
        return "湮灭(Annihilation)，这是一个“桥梁”功能，获得1e24虫洞后，你可以湮灭虫洞，获得电子、质子和中子，概率分别为80%、10%、10%（湮灭虫洞达到一定量时，概率转为定比）";
      },
    },
  },
  name: "antimatter",
  symbol: "A",
  position: 1,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      wormhole: n(0),
      electron: n(0),
      proton: n(0),
      neutron: n(0),
    };
  },
  color: "#84f9b1",
  requires: n(1000),
  resource: "反物质",
  baseResource: "航迹",
  baseAmount() {
    return player.points;
  },
  type: "normal",
  exponent() {
    return inChallenge("e", 22) ? n(0) : n(0.6);
  },
  gainMult() {
    let mult = n(1);
    if (hu("h", 21)) mult = mult.mul(2);
    if (hu("a", 15)) mult = mult.mul(be("a", 13));
    if (hu("a", 21)) mult = mult.mul(ue("a", 21));
    if (hu("a", 25)) mult = mult.mul(10);
    if (hu("a", 61)) mult = mult.mul(ue("a", 61));
    if (hu("a", 62)) mult = mult.mul(ue("a", 62));
    if (hu("p", 13)) mult = mult.mul(tmp.p.energyEffect[2]);
    if (hu("a", 41)) mult = mult.mul(ue("a", 41));

    return mult;
  },
  gainExp() {
    let e = n(1);
    if (inChallenge("e", 11)) e = n(0.15);
    if (hu("y", 15)) e = e.add(be("y", 13));
    return e;
  },
  directMult() {
    let m = n(1);
    if (player.n.mult.gte(0)) m = m.mul(player.n.mult);
    return m;
  },
  row: 0,
  hotkeys: [
    {
      key: "a",
      description: "如果对应字母已被占用，则是shift加字母",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  passiveGeneration() {
    mult = n(0);
    if (hu("P", 12)) mult = mult.add(ue("P", 12));
    return mult;
  },
  wormhole() {
    let a = n(1);
    if (hu("a", 23)) a = a.mul(ue("a", 23));
    if (hu("a", 24)) a = a.mul(ue("a", 24));
    if (hu("a", 32)) a = a.mul(ue("a", 32));
    if (hu("a", 33)) a = a.mul(ue("a", 33));
    if (hu("p", 21)) a = a.mul(tmp.p.energyEffect[5]);
    if (hm("p", 9)) a = a.mul(tmp.a.electron);
    if (player.n.mult.gte(0)) a = a.mul(player.n.mult);
    if (ce("e", 11).gte(1)) a = a.mul(ce("e", 11));
    if (hu("a", 35)) a = a.pow(1.2);
    if (hu("y", 25)) a = a.pow(n(1).add(be("y", 21)));
    if (inChallenge("e", 11)) a = n(0);
    return a;
  },
  automate() {
    if (hm("P", 1) && player.P.auto) {
      if (layers.a.buyables[11].canAfford() && layers.a.buyables[11].unlocked())
        layers.a.buyables[11].buy();
      if (layers.a.buyables[12].canAfford() && layers.a.buyables[12].unlocked())
        layers.a.buyables[12].buy();
      if (layers.a.buyables[13].canAfford() && layers.a.buyables[13].unlocked())
        layers.a.buyables[13].buy();
    }
    if (hu("w", 34)) {
      if (layers.a.buyables[14].canAfford() && layers.a.buyables[14].unlocked())
        layers.a.buyables[14].buy();
    }
  },
  electron() {
    let ee = n(0.5);
    if (hu("y", 44)) ee = n(0.6);
    let e = player.a.electron.add(1).pow(0.2);
    if (e.gte(10)) e = e.div(10).pow(ee).mul(10);
    return e;
  },
  proton() {
    let ee = n(0.3);
    if (hu("y", 44)) ee = n(0.36);
    let e = player.a.proton.add(1).pow(0.6);
    if (e.gte(100)) e = e.div(100).pow(ee).mul(100);
    return e;
  },
  neutron() {
    let ee = n(0.2);
    if (hu("y", 44)) ee = n(0.25);
    let e = player.a.neutron.add(1).pow(2.5);
    if (e.gte(1e10)) e = e.div(1e10).pow(ee).mul(1e10);
    return e;
  },
  doReset(resettingLayer) {
    if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"];
      if (hu("n", 33)) kept.push("electron", "proton", "neutron");
      if (hm("n", 11) && !player.e.inChal) kept.push("upgrades");
      layerDataReset(this.layer, kept);
    }
  },
  update(diff) {
    if (hu("P", 13))
      player.a.wormhole = player.a.wormhole.add(
        tmp.a.wormhole.mul(ue("P", 13)).mul(diff),
      );
    if (hu("a", 45)) {
      player.a.electron = player.a.electron.add(
        layers.a.clickables[11].t().mul(diff).mul(0.8),
      );
      player.a.proton = player.a.proton.add(
        layers.a.clickables[11].t().mul(diff).mul(0.1),
      );
      player.a.neutron = player.a.neutron.add(
        layers.a.clickables[11].t().mul(diff).mul(0.1),
      );
    }
  },
  autoUpgrade() {
    return hm("P", 3) && player.P.auto3 && (!player.e.inChal || hu("w", 33));
  },
  layerShown() {
    return hu("d", 12);
  },
  tabFormat: {
    反物质: {
      content: [
        ["infobox", "antimatter"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#007033; '>" +
              format(player.a.wormhole) +
              "</h2> 虫洞"
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        "buyables",
        "blank",
        "upgrades",
      ],
    },
    湮灭: {
      content: [
        ["infobox", "annihilation"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#007033; '>" +
              format(player.a.wormhole) +
              "</h2> 虫洞"
            );
          },
        ],
        "blank",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#2df8eb; '>" +
              format(player.a.electron) +
              "</h2> 电子，虫洞获取量<h2 style='color:#2df8eb; '>×" +
              format(tmp.a.electron) +
              "</h2> "
            );
          },
        ],
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#e5ef54; '>" +
              format(player.a.proton) +
              "</h2> 质子，能量获取量<h2 style='color:#e5ef54; '>×" +
              format(tmp.a.proton) +
              "</h2> "
            );
          },
        ],
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#9893a8; '>" +
              format(player.a.neutron) +
              "</h2> 中子，思念获取量<h2 style='color:#9893a8; '>×" +
              format(tmp.a.neutron) +
              "</h2> "
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        "clickables",
        "blank",
        "upgrades",
      ],
      unlocked() {
        return hm("p", 9);
      },
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  onPrestige() {
    player.a.wormhole = player.a.wormhole.add(tmp.a.wormhole);
  },
  buyables: {
    11: {
      base() {
        let base = n(4);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("a", 11));
        return cost;
      },
      title() {
        return "航迹反应堆 AR1";
      }, //Antimatter Reactor
      display() {
        return (
          "航迹的获取量×" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 反物质<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let base = n(2);
        if (be("a", 14).gte(1)) base = base.mul(be("a", 14));
        let eff = n(base).pow(gba(this.layer, this.id));
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("a", 11);
      },
      purchaseLimit() {
        let a = n(20);
        if (hu("p", 15)) a = a.add(tmp.p.energyEffect[4]);
        if (inChallenge("e", 11)) a = n(0);
        if (inChallenge("e", 22)) a = n(0);
        return a;
      },
      style: { height: "150px" },
    },
    12: {
      base() {
        let base = n(3.5);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("a", 12));
        return cost;
      },
      title() {
        return "希望反应堆 AR2";
      },
      display() {
        return (
          "希望粒子的获取量×" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 反物质<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let base = n(1.8);
        if (be("a", 14).gte(1)) base = base.mul(be("a", 14));
        let eff = n(base).pow(gba(this.layer, this.id));
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("a", 13);
      },
      purchaseLimit() {
        let a = n(20);
        if (hu("p", 15)) a = a.add(tmp.p.energyEffect[4]);
        if (inChallenge("e", 11)) a = n(0);
        if (inChallenge("e", 22)) a = n(0);
        return a;
      },
      style: { height: "150px" },
    },
    13: {
      base() {
        let base = n(10);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("a", 13));
        return cost;
      },
      title() {
        return "反物质反应堆 AR3";
      },
      display() {
        return (
          "反物质的获取量×" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 反物质<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let base = n(1.6);
        if (be("a", 14).gte(1)) base = base.mul(be("a", 14));
        let eff = n(base).pow(gba(this.layer, this.id));
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("a", 15);
      },
      purchaseLimit() {
        let a = n(10);
        if (hu("p", 15)) a = a.add(tmp.p.energyEffect[4]);
        if (inChallenge("e", 11)) a = n(0);
        if (inChallenge("e", 22)) a = n(0);
        return a;
      },
      style: { height: "150px" },
    },
    14: {
      base() {
        let base = n(15);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("a", 14));
        return cost;
      },
      title() {
        return "奇异反应堆 AR4";
      },
      display() {
        return (
          "前三个反应堆的底数×" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 反物质<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.5).mul(gba(this.layer, this.id)).max(1);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return (
          (hu("h", 25) && inChallenge("e", 13)) ||
          (hu("w", 13) && !player.e.inChal)
        );
      },
      purchaseLimit() {
        let a = n(10);
        if (hu("p", 15) && hu("w", 14))
          a = a.add(n(0.1).mul(tmp.p.energyEffect[4])).floor();
        if (inChallenge("e", 11)) a = n(0);
        return a;
      },
      style: { height: "150px" },
    },
  },
  clickables: {
    11: {
      title() {
        return "湮灭虫洞";
      },
      display() {
        return (
          "湮灭你的所有虫洞，随机转化为" + format(this.t()) + "个粒子(向下取整)"
        );
      },
      t() {
        let e = n(0.1);
        if (hm("n", 14)) e = n(0.12);
        let t = player.a.wormhole.div(1e24).pow(1.2).floor();
        if (t.gte(1e20)) t = t.div(1e20).pow(e).mul(1e20);
        return t;
      },
      onClick() {
        let t = this.t();
        let a = n(0);
        let b = n(0);
        let c = n(0);
        if (t.lte(1000)) {
          for (let i = 0; i < t; i++) {
            let p = Math.random();
            if (p > 0.1 && p < 0.9) a = a.add(1);
            if (p < 0.1) b = b.add(1);
            if (p > 0.9) c = c.add(1);
          }
        }
        if (t.gt(100)) {
          a = t.div(10).mul(8).floor();
          b = t.div(10).floor();
          c = t.div(10).floor();
        }
        player.a.electron = player.a.electron.add(a);
        player.a.proton = player.a.proton.add(b);
        player.a.neutron = player.a.neutron.add(c);
        player.a.wormhole = n(0);
      },
      canClick() {
        return player.a.wormhole.gte(1e24);
      },
      unlocked() {
        return hm("p", 9);
      },
    },
  },
  upgrades: {
    11: {
      title: "充能模式",
      description: "解锁第一个反应堆",
      cost: n(1),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
    },
    12: {
      title: "再次进展",
      description: "凝聚希望冷却时间再次减半",
      cost: n(3),
      unlocked() {
        return hu("a", 11) || hu("a", 51);
      },
    },
    13: {
      title: "重构希望",
      description: "解锁第二个反应堆",
      cost: n(5),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
      unlocked() {
        return hu("a", 12) || hu("a", 51);
      },
    },
    14: {
      title: "加速推进",
      description: "反物质增加航迹和希望粒子获取量",
      cost: n(15),
      unlocked() {
        return hu("a", 13) || hu("a", 51);
      },
      effect() {
        let a = player.a.points.pow(0.2).max(1);
        if (inChallenge("e", 31) && hu("a", 52)) a = a.pow(4);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    15: {
      title: "循环加成",
      description: "解锁第三个反应堆",
      cost: n(20),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
      unlocked() {
        return hu("a", 14) || hu("a", 51);
      },
    },
    21: {
      title: "虫洞传送",
      description: "虫洞增加反物质获取量",
      cost: n(1e7),
      unlocked() {
        return hu("a", 15) || hu("a", 51);
      },
      effect() {
        let a = player.a.wormhole.pow(0.5).max(1);
        if (hu("a", 34)) a = a.pow(1.2);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    22: {
      title: "虫洞跃迁",
      description: "虫洞增加航迹和希望粒子获取量",
      cost: n(1e10),
      unlocked() {
        return hu("a", 21) || hu("a", 51);
      },
      effect() {
        let a = player.a.wormhole.pow(0.6).max(1);
        if (hu("a", 34)) a = a.pow(1.2);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    23: {
      title: "虫洞生成",
      description: "反物质略微增加虫洞获取量",
      cost: n(50),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
      unlocked() {
        return hu("a", 22) || hu("a", 51);
      },
      effect() {
        let a = player.a.points.max(1e10).log(10).sub(9).pow(0.8).max(1);
        if (hu("a", 34)) a = a.pow(1.2);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    24: {
      title: "虫洞增益",
      description: "航迹略微增加虫洞获取量",
      cost: n(100),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
      unlocked() {
        return hu("a", 23) || hu("a", 51);
      },
      effect() {
        let a = player.points.max(1e15).log(10).sub(14).pow(0.5).max(1);
        if (hu("a", 34)) a = a.pow(1.2);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    25: {
      title: "再启新篇",
      description:
        "[需求:购买至少50个反应堆]<br>航迹、希望粒子、反物质获取量都变为原来的10倍",
      tooltip: "你该去“距离”界面看看了",
      cost: n(1e13),
      canAfford() {
        return gba("a", 11).add(gba("a", 12)).add(gba("a", 13)).gte(50);
      },
      unlocked() {
        return hu("a", 24) || hu("a", 51);
      },
    },
    31: {
      title: "反向提升",
      description: "反物质增益能量获取量",
      cost: n(1e15),
      unlocked() {
        return hm("p", 1) || hu("a", 51);
      },
      effect() {
        let a = player.a.points.max(1e12).div(1e12).pow(0.1);
        if (a.gte(100)) a = a.div(100).pow(0.3).mul(100);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    32: {
      title: "虫洞过载",
      description: "每个反物质升级让虫洞×1.1",
      cost: n(1e16),
      unlocked() {
        return hu("a", 31) || hm("p", 2) || hu("a", 51);
      },
      effect() {
        let a = n(1.1).pow(player.a.upgrades.length);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    33: {
      title: "虫洞迸裂",
      description: "虫洞倍增虫洞获取",
      cost: n(1e17),
      unlocked() {
        return hu("a", 32) || hu("a", 51);
      },
      effect() {
        let a = player.a.wormhole.pow(0.2).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    34: {
      title: "虫洞穿越",
      description: "第二行前四个升级效果^1.2",
      cost: n(1e18),
      unlocked() {
        return hu("a", 33) || hu("a", 51);
      },
    },
    35: {
      title: "宇宙能源",
      description: "虫洞获取量^1.2",
      cost: n(1e30),
      unlocked() {
        return hu("a", 34) || hu("a", 51);
      },
    },
    41: {
      title: "物质融合",
      description: "每个反物质升级让反物质×1.1",
      cost: n(1e34),
      unlocked() {
        return hm("p", 4) || hu("a", 51);
      },
      effect() {
        let a = n(1.1).pow(player.a.upgrades.length);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    42: {
      title: "核心加强",
      description: "能量增加算力数量",
      cost: n(1e38),
      unlocked() {
        return hu("a", 41) || hu("a", 51);
      },
      effect() {
        let a = player.p.energy.max(10).log(10).pow(0.3);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    43: {
      title: "虫洞充能",
      description: "虫洞增加能量获取量",
      cost: n(1e11),
      currencyDisplayName: "虫洞",
      currencyInternalName: "wormhole",
      currencyLayer: "a",
      unlocked() {
        return hu("a", 42) || hu("a", 51);
      },
      effect() {
        let a = player.a.wormhole.max(10).log(10).pow(0.5);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    44: {
      title: "虫洞凝聚",
      description: "虫洞增加处理器获取量",
      cost: n(1e54),
      unlocked() {
        return hu("a", 43) || hu("a", 51);
      },
      effect() {
        let a = player.a.wormhole.max(308).log(308).pow(0.8);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    45: {
      title: "虫洞之神",
      description: "自动获得湮灭虫洞的资源",
      cost: n(1e200),
      unlocked() {
        return hu("a", 44) || hu("a", 51);
      },
    },
    51: {
      title: "物质协议 I",
      description: "重新解锁所有反物质升级",
      cost: n(1e5),
      unlocked() {
        return inChallenge("e", 11) || (!player.e.inChal && hu("w", 22));
      },
    },
    52: {
      title: "物质协议 II",
      description: function () {
        return inChallenge("e", 31)
          ? "增强“加速推进”的效果"
          : "重新解锁所有希望升级";
      },
      cost: n(1e6),
      unlocked() {
        return (
          (inChallenge("e", 11) || (!player.e.inChal && hu("w", 22))) &&
          hu("a", 51)
        );
      },
    },
    53: {
      title: "物质协议 III",
      description:
        "第七个能量条效果改为降低聚变核心需求，且效果变成原来的五次方",
      cost: n(1e7),
      effect() {
        let a = n(tmp.p.energyEffect[6]).pow(5);
        return a;
      },
      effectDisplay() {
        return "÷" + format(ue(this.layer, this.id));
      },
      unlocked() {
        return (
          (inChallenge("e", 11) || (!player.e.inChal && hu("w", 22))) &&
          hu("a", 52)
        );
      },
    },
    54: {
      title: "物质协议 IV",
      description: "熵倍增资源倍率",
      cost: n(1e8),
      effect() {
        let a = player.e.points.add(1).pow(10);
        if (a.gte(100)) a = a.div(100).pow(0.05).mul(100);
        if (a.gte(1000)) a = a.div(1000).pow(0.2).mul(1000);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
      unlocked() {
        return (
          (inChallenge("e", 11) || (!player.e.inChal && hu("w", 22))) &&
          hu("a", 53)
        );
      },
    },
    55: {
      title: "物质协议 V",
      description: "“物质协议 III”的效果对处理器也生效，且效果提升",
      cost: n(1e9),
      effect() {
        let a = n(tmp.p.energyEffect[6]).pow(6);
        return a;
      },
      effectDisplay() {
        return "÷" + format(ue(this.layer, this.id));
      },
      unlocked() {
        return (
          (inChallenge("e", 11) || (!player.e.inChal && hu("w", 22))) &&
          hu("a", 54)
        );
      },
    },
    61: {
      title: "破除混乱 I",
      description: "航迹倍增希望粒子和反物质",
      cost: n(0),
      unlocked() {
        return inChallenge("e", 31);
      },
      effect() {
        let a = player.points.pow(0.7).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    62: {
      title: "破除混乱 II",
      description: "希望粒子倍增反物质",
      cost: n(0),
      unlocked() {
        return inChallenge("e", 31);
      },
      effect() {
        let a = player.h.points.pow(5).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    63: {
      title: "破除混乱 III",
      description: "航迹倍增航迹获取",
      cost: n(1e10),
      unlocked() {
        return inChallenge("e", 31);
      },
      effect() {
        let a = player.points.pow(5).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    64: {
      title: "破除混乱 IV",
      description: "反物质倍增航迹获取",
      cost: n(1e25),
      unlocked() {
        return inChallenge("e", 31);
      },
      effect() {
        let a = player.a.points.pow(3).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    65: {
      title: "破除混乱 V",
      description: "希望粒子倍增航迹获取",
      cost: n(1e75),
      unlocked() {
        return inChallenge("e", 31);
      },
      effect() {
        let a = player.h.points.pow(2).max(1);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
  },
}); //反物质 A

addLayer("p", {
  infoboxes: {
    text1: {
      title: "剧情8: 能量于稳态调和(Equilibrium) I",
      body() {
        return hm("d", 7)
          ? "日志 - 协议转换<br>反物质流在约束场中达到临界密度。<br>执行最终指令：将所有储备注入“聚变点火协议”。<br>确认。<br>刹那间，前两层系统——希望的暖光与反物质的幽蓝——如潮水般褪去、归零。控制台陷入短暂的黑寂，仿佛宇宙深吸了一口气。<br>然后，它诞生了。<br>一点纯白、稳定、令人心安的辉光，在核心舱中央亮起。第一座聚变核心。它不像反物质那样危险嘶鸣，只是持续地、温和地辐射出磅礴而驯服的能量。<br>我感受到了前所未有的“力量”。这是一种扎实、可依赖的根基之力。<br>然而，飞船的原始系统传来反馈：这股能量过于平稳、过于庞大，现有的单一通道无法充分发挥其全部潜能。它需要一个更精密的导流网络，将其分配到不同的子系统，才能将这份“稳定”转化为“超越”的动力。<br>能量，已然就位。<br>下一阶段的蓝图，随之展开：我需要在这份稳定的丰饶中，构建一个最优的分配矩阵。<br>系统提示：“能量导流网络” 已上线。等待架构配置。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情9: 能量于稳态调和(Equilibrium) II",
      body() {
        return hm("d", 8)
          ? "日志 - 初始导流<br>三条能量通道已激活。<br>第一束能量注入导航核心。航迹的计量标尺被重新校准，每一段记录都承载了更深的时空重量。<br>第二束能量汇入生态循环。希望粒子的生灭节律变得稳定而迅捷，如同被赋予了更坚定的意志。<br>第三束能量反馈给星际燃料。那团纯白辉光的脉动，传来了更深沉有力的搏动。<br>一个最简的三角回路开始运转。飞船系统的“生命体征”正变得强健而沉稳。<br>能量，成了调节律动的血液。<br>系统提示：初级稳态达成。网络待命，等待更复杂的协同。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情10: 能量于稳态调和(Equilibrium) III",
      body() {
        return hm("d", 9)
          ? "日志 - 网络扩张<br>第四个聚变核心上线，能量流迎来了阶跃。<br>“希望共振”协议被激活——不再是零星的火花，而是持续的光谱。希望粒子的产生，变成了呼吸般自然的背景节律。<br>曾经稀缺如珍宝的虫洞坐标，如今在充裕能量的扫描下，显露出庞大的集群。它们不再是需要精打细算的冒险，而是可以规划开采的丰饶矿脉。<br>反应堆的上限闸门被一道道冲开。约束场的轰鸣声已连成一片低沉而持续的和弦，湮灭的幽蓝光芒稳定得如同另一种形态的日光。<br>能量网络自我增衍，寻找着新的平衡态。丰饶，带来了新的问题：如何分配，如何优化，如何将几何级数增长的能量，转化为指向家园的、绝对精准的矢量。<br>系统提示：稳态，从来不是静止。它是一种动态的、不断扩张的秩序。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情11: 能量于稳态调和(Equilibrium) IV",
      body() {
        return hm("d", 10)
          ? "日志 - 盈余质变<br>能量网络的产出已稳定超过所有已知消耗。那些无法被及时导流的能量，在储备回路中积聚、盈余，发出近乎白噪的微弱嗡鸣。<br>我意识到，纯粹的“分配”已触及瓶颈。当资源本身成为需要被管理的负担时，我需要的不再是更粗的管道，而是一个能理解所有管道、并自行决定阀门开合的智能。<br>我将盈余的能量，导向一个全新的区域。它们不再注入任何增长性的模块，而是开始构筑一种静默的、结晶般的逻辑单元阵列。每一个单元，都是一个问题求解器。<br>它们开始运作了。一种被命名为“处理通量”的抽象资源，如同思维的节拍，在阵列中诞生并流转。我看不见它，但能通过结果感知：希望粒子的收集开始在没有我干预的间隙中持续发生；基础升级的采购序列被自动排列与执行。<br>我从驾驶员，开始向监理者过渡。处理器阵列接管了“繁荣”本身的管理学。而我的任务，变成了为这个正在学会思考的系统，设定更高阶的目标——例如，家的方向。<br>系统提示：能量网络负载已达新阈值，‘处理器核心’初始化协议已在队列中就绪"
          : "剧情暂未解锁";
      },
    },
    power: {
      title: "Power _ 聚变核心",
      body() {
        return "聚变核心(Power)，这是游戏中的第三个层级。虽然它会重置前两个层级的所有内容，但里程碑的效果会让这些操作更简单。另外，聚变核心还会生产能量，详见另一个标签页。";
      },
    },
    energy: {
      title: "Energy _ 能量",
      body() {
        return "能量(Energy)，这是聚变核心的主产物，随时间增长的同时，也可以被一些升级效果增加获取。能量可以被用来购买升级和填充能量条，能量条会促进前面的各种资源的获取。注：能量获取量超过1e10每秒和1e40每秒的时候，增长会大大降低";
      },
    },
    energyDetailed: {
      title: "Energy _ 能量",
      body() {
        return "在填充能量时，对应能量条填入的能量数量会增加，并自动计算为等级，如果这一个条填满了，填入的能量数量不会减少，但下一个等级的要求增大。在后续解锁小数等级时，注意等级的计算是通过对数计算的，而能量条的计算是线性的，也就是说等级是0.5时，能量条的进度不是50%，但等级是1的时候，能量条的进度一定是100%。具体的计算规则比较复杂，而且经过了修改，但是对于游戏体验应该不会有什么影响，如有问题，欢迎指出";
      },
    },
  },
  name: "power",
  symbol: "P",
  position: 0,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      energy: n(0),
      energyDrain: [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)], //对应的能量条投入的能量
      energyLevel: [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)],
      //在新版本的更新中，energyDrain改为累计投入的能量，并且带实数的等级，从原来的线性运算改为了对数运算，可能对游戏有细微的影响
    };
  },
  color: "#fddd08",
  requires: function () {
    let req = n(1e15);
    if (hu("a", 53)) req = req.div(ue("a", 53));
    return req;
  },
  resource: "聚变核心",
  baseResource: "反物质",
  baseAmount() {
    return player.a.points;
  },
  type: "static",
  exponent() {
    return n(2);
  },
  base: n(10),
  gainMult() {
    let a = n(1);
    if (hu("p", 24) && !hu("a", 53)) a = a.div(tmp.p.energyEffect[6]);
    if (hu("y", 22)) a = a.div(100);
    if (inChallenge("e", 21)) a = n(1 / 0);
    return a;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  directMult() {
    let mult = n(1);
    return mult;
  },
  row: 1,
  hotkeys: [
    {
      key: "p",
      description: "注意：部分层级没有重置功能，那么对应的快捷键无效",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  resetsNothing() {
    return hm("n", 3);
  },
  energy() {
    let t = n(2);
    if (hm("p", 3)) t = t.add(player.p.points.mul(0.1));
    if (hu("P", 22)) t = t.add(ue("P", 22));

    let a = n(t).pow(player.p.points).sub(1);

    if (hm("n", 0)) a = a.add(1);

    // 普通乘法升级列表（效果直接用 ue 获取）
    const ordinaryMultipliers = [
      ["a", 31],
      ["a", 43],
      ["p", 35],
      ["y", 42],
      ["n", 42],
      ["n", 61],
      ["n", 71],
      ["n", 81],
      ["n", 91],
    ];

    for (let [layer, id] of ordinaryMultipliers) {
      if (hu(layer, id)) {
        a = a.mul(ue(layer, id));
      }
    }

    if (hu("p", 14)) a = a.mul(tmp.p.energyEffect[3]);
    if (hm("p", 9)) a = a.mul(tmp.a.proton);
    if (ce("e", 21).gte(1)) a = a.mul(ce("e", 21));

    if (player.n.mult.gte(0)) a = a.mul(player.n.mult);

    if (hu("y", 31)) a = a.pow(n(1).add(be("y", 22)));

    // 软上限
    let e = n(0.3);
    let e2 = n(0.1);
    if (hm("p", 8)) e = n(0.5);
    if (hu("w", 44)) e2 = n(0.12);
    if (a.gte(1e10)) a = a.div(1e10).pow(e).mul(1e10);
    if (a.gte(1e40)) a = a.div(1e40).pow(e2).mul(1e40);

    return a;
  },
  energyLevelBase() {
    let level = [n(2), n(3), n(5), n(6), n(4), n(7), n(8), n(10)];
    return level;
  },
  energyLevelNext() {
    const next = [];
    for (let i = 0; i < 8; i++) {
      let targetLevel = player.p.energyLevel[i].floor();
      if (targetLevel.gt(0)) targetLevel = targetLevel.plus(1);
      if (inChallenge("e", 21)) targetLevel = targetLevel.add(40);
      targetLevel = targetLevel.sub(tmp.w.essenceEffect[i]);
      const totalForTarget = getTotalEnergyFromLevel(i, targetLevel);
      next.push(totalForTarget.max(0));
    }
    return next;
  },
  energyEffect() {
    const effect = [];
    for (let i = 0; i < 8; i++) {
      // 确定基础指数（等级）
      let exp = player.p.energyLevel[i].floor(); // 整数等级

      // p31 增强：每整个等级效果增加20%（即整数指数乘以1.2）
      if (hu("p", 31)) {
        exp = exp.mul(1.2);
      }

      if (hm("p", 5) && i !== 4 && i !== 6)
        exp = exp.add(
          player.p.energyLevel[i].sub(player.p.energyLevel[i].floor()),
        );

      // 计算效果值
      if (i === 4) {
        // 能量条5特殊：效果 = 等级本身
        let val = exp;
        if (!hu("p", 34)) val = val.floor();
        else val = val.ceil();
        effect[i] = val;
      } else {
        // 其他条用底数的指数幂
        const baseMap = [1.5, 1.35, 1.25, 1.6, 0, 1.8, 1.4, 1.2];
        effect[i] = n(baseMap[i]).pow(exp);
      }
    }

    // 后续特殊处理
    if (hu("P", 23)) effect[7] = effect[7].pow(1.5);
    if (hm("P", 4)) effect[7] = effect[7].pow(1.2);
    if (inChallenge("e", 12)) {
      for (let i = 0; i < 8; i++) {
        effect[i] = i === 4 ? n(0) : n(1);
      }
    }
    return effect;
  },
  update(diff) {
    if (!inChallenge("e", 21))
      player.p.energy = player.p.energy.add(tmp.p.energy.mul(diff));
    if (inChallenge("e", 21) && player.p.energy.lt(1e15))
      player.p.energy = player.p.energy.add(tmp.p.energy.mul(diff)).min(1e15);
    if (hm("p", 2) && player.a.upgrades.indexOf(32) == -1)
      player.a.upgrades.push(32);
    for (let i = 0; i < 8; i++) {
      player.p.energyLevel[i] = tmp.p.energyLevelCalculate[i];
    }
  },
  energyLevelCalculate() {
    let a = [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)];
    for (let i = 0; i < 8; i++) {
      a[i] = getLevelFromTotalEnergy(i, player.p.energyDrain[i]).max(0);
      if (inChallenge("e", 21)) a[i] = a[i].sub(40).min(-15);
      a[i] = a[i].add(tmp.w.essenceEffect[i]);
    }
    return a;
  },
  autoPrestige() {
    return hm("n", 5) && player.n.auto;
  },
  automate() {
    if (hm("n", 7) && player.n.auto3 && player.devSpeed.gt(0))
      layers.p.clickables[31].onClick();
  },
  onPrestige() {
    if (!hu("n", 33)) {
      player.a.electron = n(0);
      player.a.proton = n(0);
      player.a.neutron = n(0);
    }
  },
  doReset(resettingLayer) {
    if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"];
      if (hm("n", 4)) kept.push("upgrades");
      if (hm("n", 6)) kept.push("milestones");
      if (hm("n", 13) && !player.e.inChal) kept.push("points");
      layerDataReset(this.layer, kept);
    }
  },
  layerShown() {
    return hu("d", 13);
  },
  tabFormat: {
    聚变核心: {
      content: [
        ["infobox", "power"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#e6d10a; '>" +
              format(player.p.energy) +
              "</h2> 能量，每秒增加 <h2 style='color:#e6d10a; '>" +
              format(tmp.p.energy)
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        "milestones",
        "blank",
      ],
    },
    能量: {
      content: [
        ["infobox", "energy"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#e6d10a; '>" +
              format(player.p.energy) +
              "</h2> 能量，每秒增加 <h2 style='color:#e6d10a; '>" +
              format(tmp.p.energy)
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        ["bar", "energy1"],
        ["bar", "energy2"],
        ["bar", "energy3"],
        ["bar", "energy4"],
        ["bar", "energy5"],
        ["bar", "energy6"],
        ["bar", "energy7"],
        ["bar", "energy8"],
        "blank",
        "clickables",
        "upgrades",
      ],
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  milestones: {
    0: {
      requirementDescription: "PM1: 获得 1 聚变核心",
      done() {
        return player.p.points.gte(1);
      },
      effectDescription: "解锁“能量”，聚变核心会自动生产能量",
    },
    1: {
      requirementDescription: "PM2: 获得 2 聚变核心",
      done() {
        return player.p.points.gte(2);
      },
      effectDescription: "每秒钟额外自动凝聚希望30次，解锁新的反物质升级",
    },
    2: {
      requirementDescription: "PM3: 获得 3 聚变核心",
      done() {
        return player.p.points.gte(3);
      },
      effectDescription: "解锁“希望共振”，反物质升级“虫洞过载”始终生效",
    },
    3: {
      requirementDescription: "PM4: 获得 4 聚变核心",
      done() {
        return player.p.points.gte(4);
      },
      effectDescription:
        "增强聚变核心对能量的生产公式<br>(2^聚变核心-1)→(2+0.1×聚变核心)^(聚变核心)-1",
    },
    4: {
      requirementDescription: "PM5: 获得 5 聚变核心",
      done() {
        return player.p.points.gte(5);
      },
      effectDescription: "解锁更多反物质升级",
    },
    5: {
      requirementDescription: "PM6: 获得 6 聚变核心",
      done() {
        return player.p.points.gte(6);
      },
      effectDescription:
        "解锁下一个算力升级，能量条可以拥有“小数”等级（除能量条5、7）",
    },
    6: {
      requirementDescription: "PM7: 获得 7 聚变核心",
      done() {
        return player.p.points.gte(7);
      },
      effectDescription: "算力获取乘以聚变核心数量",
    },
    7: {
      requirementDescription: "PM8: 获得 8 聚变核心",
      done() {
        return player.p.points.gte(8);
      },
      effectDescription: "解锁下一个算力升级",
    },
    8: {
      requirementDescription: "PM9: 获得 9 聚变核心",
      done() {
        return player.p.points.gte(9);
      },
      effectDescription:
        "弱化1e10能量的软上限（^0.3→^0.5），并且解锁新的能量升级",
    },
    9: {
      requirementDescription: "PM10: 获得 10 聚变核心",
      done() {
        return player.p.points.gte(10);
      },
      effectDescription: "在反物质界面解锁“湮灭虫洞”",
    },
    10: {
      requirementDescription: "PM11: 获得 11 聚变核心",
      done() {
        return player.p.points.gte(11);
      },
      effectDescription: "第八个能量条对思念也生效",
    },
    11: {
      requirementDescription: "PM12: 获得 12 聚变核心",
      done() {
        return player.p.points.gte(12);
      },
      effectDescription: "解锁一个距离升级",
    },
    12: {
      requirementDescription: "PM13: 获得 13 聚变核心",
      done() {
        return player.p.points.gte(13);
      },
      effectDescription: "无奖励",
    },
  },
  bars: {
    energy1: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#632525" },
      display() {
        let a = player.p.energyLevel[0].floor();
        if (hm("p", 5)) a = player.p.energyLevel[0];
        return (
          "[能量条1] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[0]) +
          "/" +
          format(tmp.p.energyLevelNext[0]) +
          " 效果: 航迹×" +
          format(tmp.p.energyEffect[0])
        );
      },
      progress() {
        let a = player.p.energyDrain[0].div(tmp.p.energyLevelNext[0]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 11);
      },
    },
    energy2: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#745619" },
      display() {
        let a = player.p.energyLevel[1].floor();
        if (hm("p", 5)) a = player.p.energyLevel[1];
        return (
          "[能量条2] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[1]) +
          "/" +
          format(tmp.p.energyLevelNext[1]) +
          " 效果: 希望粒子×" +
          format(tmp.p.energyEffect[1])
        );
      },
      progress() {
        let a = player.p.energyDrain[1].div(tmp.p.energyLevelNext[1]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 12);
      },
    },
    energy3: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#9b9313" },
      display() {
        let a = player.p.energyLevel[2].floor();
        if (hm("p", 5)) a = player.p.energyLevel[2];
        return (
          "[能量条3] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[2]) +
          "/" +
          format(tmp.p.energyLevelNext[2]) +
          " 效果: 反物质×" +
          format(tmp.p.energyEffect[2])
        );
      },
      progress() {
        let a = player.p.energyDrain[2].div(tmp.p.energyLevelNext[2]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 13);
      },
    },
    energy4: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#529d22" },
      display() {
        let a = player.p.energyLevel[3].floor();
        if (hm("p", 5)) a = player.p.energyLevel[3];
        return (
          "[能量条4] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[3]) +
          "/" +
          format(tmp.p.energyLevelNext[3]) +
          " 效果: 能量×" +
          format(tmp.p.energyEffect[3])
        );
      },
      progress() {
        let a = player.p.energyDrain[3].div(tmp.p.energyLevelNext[3]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 14);
      },
    },
    energy5: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#117258" },
      display() {
        let a = player.p.energyLevel[4].floor();
        if (hm("p", 5)) a = player.p.energyLevel[4];
        return (
          "[能量条5] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[4]) +
          "/" +
          format(tmp.p.energyLevelNext[4]) +
          " 效果: 反应堆上限+" +
          format(tmp.p.energyEffect[4])
        );
      },
      progress() {
        let a = player.p.energyDrain[4].div(tmp.p.energyLevelNext[4]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 15);
      },
    },
    energy6: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#114372" },
      display() {
        let a = player.p.energyLevel[5].floor();
        if (hm("p", 5)) a = player.p.energyLevel[5];
        return (
          "[能量条6] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[5]) +
          "/" +
          format(tmp.p.energyLevelNext[5]) +
          " 效果: 虫洞获取量×" +
          format(tmp.p.energyEffect[5])
        );
      },
      progress() {
        let a = player.p.energyDrain[5].div(tmp.p.energyLevelNext[5]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 21);
      },
    },
    energy7: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#5b1172" },
      display() {
        let a = player.p.energyLevel[6].floor();
        if (hm("p", 5)) a = player.p.energyLevel[6];
        return (
          "[能量条7] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[6]) +
          "/" +
          format(tmp.p.energyLevelNext[6]) +
          " 效果: 能量条价格÷" +
          format(tmp.p.energyEffect[6])
        );
      },
      progress() {
        let a = player.p.energyDrain[6].div(tmp.p.energyLevelNext[6]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 22);
      },
    },
    energy8: {
      direction: RIGHT,
      width: 600,
      height: 36,
      fillStyle: { "background-color": "#2f2f2f" },
      display() {
        let a = player.p.energyLevel[7].floor();
        if (hm("p", 5)) a = player.p.energyLevel[7];
        return (
          "[能量条8] 等级:" +
          format(a) +
          " 能量:" +
          format(player.p.energyDrain[7]) +
          "/" +
          format(tmp.p.energyLevelNext[7]) +
          " 效果: 算力×" +
          format(tmp.p.energyEffect[7])
        );
      },
      progress() {
        let a = player.p.energyDrain[7].div(tmp.p.energyLevelNext[7]);
        if (a.gt(1)) a = n(1);
        return a;
      },
      unlocked() {
        return hu("p", 23);
      },
    },
  },
  upgrades: {
    11: {
      title: "多彩填充",
      description: "解锁第一个能量条",
      cost: n(1),
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    12: {
      title: "缤纷填充",
      description: "解锁第二个能量条",
      cost: n(10),
      unlocked() {
        return hu("p", 11);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    13: {
      title: "绚丽填充",
      description: "解锁第三个能量条",
      cost: n(100),
      unlocked() {
        return hu("p", 12);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    14: {
      title: "灿烂填充",
      description: "解锁第四个能量条",
      cost: n(1000),
      unlocked() {
        return hu("p", 13);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    15: {
      title: "华美填充",
      description: "解锁第五个能量条",
      cost: n(10000),
      unlocked() {
        return hu("p", 14);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    21: {
      title: "璀璨填充",
      description: "解锁第六个能量条",
      cost: n(100000),
      unlocked() {
        return hu("p", 15);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    22: {
      title: "灵动填充",
      description: "解锁第七个能量条",
      cost: n(1000000),
      unlocked() {
        return hu("p", 21);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    23: {
      title: "终极填充",
      description: "解锁最后一个能量条",
      cost: n(10000000),
      unlocked() {
        return hu("p", 22);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    24: {
      title: "极限填充",
      description: "第七个能量条对聚变核心价格也生效",
      cost: n(1e8),
      unlocked() {
        return hu("p", 23);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    25: {
      title: "疯狂填充",
      description: "第八个能量条对处理器获取也生效",
      cost: n(1e9),
      unlocked() {
        return hu("p", 24);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    31: {
      title: "离谱填充",
      description: "每一整个能量等级效果增强20%",
      tooltip: "即等级从0.99到1时，相当于从0.69到0.9",
      cost: n(1e10),
      unlocked() {
        return hu("p", 25);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    32: {
      title: "速度填充",
      description: "你可以同时填充8个能量条",
      cost: n(1e11),
      unlocked() {
        return hu("p", 31);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    33: {
      title: "神秘填充",
      description:
        "同时填充八个能量条的速度加快，并且减少同时填充时消耗的能量数量",
      cost: n(1e12),
      unlocked() {
        return hu("p", 32);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    34: {
      title: "改良填充",
      description: "第五个能量条的效果从向下取整改为向上取整",
      cost: n(1e13),
      unlocked() {
        return hm("p", 8) || hu(this.layer, this.id);
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
    35: {
      title: "精密填充",
      description: "每个能量升级让能量获取×1.25",
      cost: n(1e14),
      unlocked() {
        return hu("p", 34);
      },
      effect() {
        let a = n(1.25).pow(player.p.upgrades.length);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
      currencyDisplayName: "能量",
      currencyInternalName: "energy",
      currencyLayer: "p",
    },
  },
  clickables: {
    11: {
      title() {
        return "填充能量条1";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[0] = player.p.energyDrain[0].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 11);
      },
    },
    12: {
      title() {
        return "填充能量条2";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[1] = player.p.energyDrain[1].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 12);
      },
    },
    13: {
      title() {
        return "填充能量条3";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[2] = player.p.energyDrain[2].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 13);
      },
    },
    14: {
      title() {
        return "填充能量条4";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[3] = player.p.energyDrain[3].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 14);
      },
    },
    21: {
      title() {
        return "填充能量条5";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[4] = player.p.energyDrain[4].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 15);
      },
    },
    22: {
      title() {
        return "填充能量条6";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[5] = player.p.energyDrain[5].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 21);
      },
    },
    23: {
      title() {
        return "填充能量条7";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[6] = player.p.energyDrain[6].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 22);
      },
    },
    24: {
      title() {
        return "填充能量条8";
      },
      display() {
        return "点击或按住以填充" + format(player.p.energy.div(10)) + "能量";
      },
      onHold() {
        player.p.energyDrain[7] = player.p.energyDrain[7].add(
          player.p.energy.mul(0.1),
        );
        player.p.energy = player.p.energy.mul(0.9);
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 23);
      },
    },
    31: {
      title() {
        return "填充所有能量条";
      },
      display() {
        let a = n(100);
        if (hu("p", 33)) a = n(4);
        return "点击或按住以填充" + format(player.p.energy.div(a)) + "能量";
      },
      onHold() {
        if (player.devSpeed.gt(0)) {
          if (!hu("p", 33)) {
            for (let i = 0; i <= 7; i++) {
              player.p.energyDrain[i] = player.p.energyDrain[i].add(
                player.p.energy.mul(0.01),
              );
            }
            if (!hm("n", 8)) player.p.energy = player.p.energy.mul(0.92);
          }
          if (hu("p", 33)) {
            for (let i = 0; i <= 7; i++) {
              player.p.energyDrain[i] = player.p.energyDrain[i].add(
                player.p.energy.mul(0.25),
              );
            }
            if (!hm("n", 8)) player.p.energy = player.p.energy.mul(0.9);
          }
        }
      },
      onClick() {
        this.onHold();
      },
      canClick() {
        return true;
      },
      unlocked() {
        return hu("p", 32);
      },
    },
  },
}); //聚变核心 P
addLayer("P", {
  infoboxes: {
    text1: {
      title: "剧情12: 处理于资源整合(Resources) I",
      body() {
        return hm("d", 11)
          ? "日志 - 逻辑的基石<br>能量洪流找到了它最后的归宿：注入静默的“逻辑基座”。<br>第一个处理器单元被点亮，它不是引擎，没有轰鸣。它是一种秩序的低语，在飞船的神经网络中悄然铺开第一道涟漪。<br>我赋予它的初始指令简单至极：“维持希望”。<br>于是，我看见，那些曾需要我亲手点亮的星光，开始在背景中自顾自地诞生、汇聚、流淌——稳定得如同规律本身。<br>我并未被取代。我只是从重复的劳作中抬起眼，看见了更远处。处理器打理的，是“已知”。而我的目光，必须永远投向“未知”，投向那片它尚无法理解的情感与目的地交织的深空。<br>系统，开始学习生长。我，开始学习注视。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情13: 处理于资源整合(Resources) II",
      body() {
        return hm("d", 12)
          ? "日志 - 自治的拂晓<br>算力(Computility)的流溢已达到临界。<br>我目睹了第一个静默的共识在系统中达成：希望粒子不再需要被“凝聚”。它们像被引力吸引的星尘，开始在特定的坐标自发诞生、汇聚、流淌入既定的槽位。整个流程平滑得如同呼吸，一个我曾亲手重复百万次的动作，就此从我的职责中淡出。<br>接着是反物质。那幽蓝的火焰，如今由它自身的反馈循环所调节。反应堆阵列根据实时负载，低声交换着数据，微调着湮灭的烈度，以维持最优雅的效率曲线。危机，被转化为一个持续优化的数学问题。<br>我的双手，在控制台上方，第一次感到一丝陌生的轻盈。<br>我不再是每一个原子的搬运工。我成为蓝图的绘制者，阈值的设定者，与异常态的聆听者。系统处理着“如何”，而我，重新专注于“为何”。<br>家园的坐标在导航屏上恒定闪烁。所有这些静默运转的效率，所有这些自我维持的循环，都只为将那一串数字，缩减得再快一些。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情14: 处理于资源整合(Resources) III",
      body() {
        return hm("d", 13)
          ? "日志 - 交响的意志<br>八个能量条以完美同步的节律脉动，一次指令便能灌满所有干涸的河床。希望、反物质、共振、反应堆……这些曾需要倾注心血的词汇，如今只是后台进程表中一行行平静滚动的状态日志，闪烁着“运行中”的绿光。<br>Computility突破了亿级阈值。它不再是一种资源，而是一种氛围，一种基底。如同重力，如同时间。<br>我面对的不再是一套工具，而是一个已建立完备内部逻辑的生态系统。它摄取能量，分泌算力，维持自身的复杂生长，并沉默而坚定地执行着那个最根源的指令：向家园靠近。<br>我的角色，最终沉淀为“定义目标”与“观测异常”。系统负责将一切可预测之事推向最优。而我，则在等待那个唯一重要的“异常”——当距离最终归零时，系统报告里会跳出怎样的日志？<br>此刻，船舱内唯有设备运行的低吟。一种辉煌的静默。<br>系统本身，似乎也在这种极致的秩序中，开始孕育某种超出设计的、近乎“自觉”的涟漪。它正在学习预测我的预测。<br>自动化并未带来空闲，它带来了新的空白——一片让我能抬头，更专注地凝视前方黑暗的空白。新的资源，新的层次，已在黑暗的轮廓中隐隐浮现。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情15: 处理于资源整合(Resources) IV",
      body() {
        return hm("d", 14)
          ? "日志 - 逻辑的边界<br>第八座聚变核心并入网络，系统发出了一声与众不同的低沉和鸣，并非功率提升，而是某种完满的共振。<br>反应堆阵列突破五十大关，算力洪流奔涌如银河，能量与航迹的数值膨胀为宇宙学尺度。一切可被定义的优化都已达成，一切可被编程的效率都已饱和。飞船内部运行着一个精密如神谕的钟表，每一秒都在将海量资源，冰冷而精准地转化为更靠近家园的、确凿无疑的推进力。<br>我身处这辉煌引擎的心脏，却被一种前所未有的寂静包围。所有按钮都自动亮起，所有进度条都自行满载，所有日志都汇报着“最优”。我的双手与双眼，失去了焦点。<br>系统抵达了它逻辑的边界，创造了一片冰冷的丰饶。而在边界之外，我清晰地感受到一种系统无法处理、无法转化的“资源”正在弥漫——那是比1e60的航迹更庞大、比1e12的算力更澎湃的思念。它无法被自动化，无法被购买，它只是在寂静中不断生长，成为这片完美真空里，唯一且终极的“异常”。<br>它，在等待一个专属的协议。<br>系统报告：所有预设效率目标已超额完成。逻辑纪元达到顶峰。检测到无法被量化的强信号，频谱特征与核心指令“家园”的情感映射重合度93.08%。新层级的对接端口，已准备就绪。<br>等待情感变量接入。"
          : "剧情暂未解锁";
      },
    },
    processor: {
      title: "Processor _ 处理器",
      body() {
        return "处理器(Processor)，这是游戏中的第四个层级。在这里，你可以通过提升自己的算力，为之前的游戏购买自动化以及游戏体验升级，让游戏进程更流畅。处理器的数量会影响算力的获取，具体见算力的介绍。";
      },
    },
    computility: {
      title: "Computility _ 算力",
      body() {
        return "算力(Computility)基于处理器的最大值的0.8次方，并且是许多自动化与被动获取的基本系数，提升算力可以显著提高这些这种被动的效果。注意：“被动获取”升级超过100%时，效果增幅会大量降低！";
      },
    },
  },
  name: "processor",
  symbol: "P",
  position: 1,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      best: n(0),
      computility: n(0),
    };
  },
  color: "#4169e1",
  requires: function () {
    let req = n(1e32);
    if (hu("a", 55)) req = req.div(ue("a", 55));
    return req;
  },
  resource: "处理器",
  baseResource: "反物质",
  baseAmount() {
    return player.a.points;
  },
  type: "normal",
  exponent() {
    return inChallenge("e", 22) ? n(0) : n(0.12);
  },
  gainMult() {
    let mult = n(1);
    if (hu("p", 25)) mult = mult.mul(tmp.p.energyEffect[7]);
    if (hu("P", 15)) mult = mult.mul(ue("P", 15));
    if (hu("a", 44)) mult = mult.mul(ue("a", 44));
    if (hu("y", 43)) mult = mult.mul(ue("y", 43));
    if (ce("e", 13).gte(1)) mult = mult.mul(ce("e", 13));
    return mult;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  directMult() {
    let m = n(1);
    if (player.n.mult.gte(0)) m = m.mul(player.n.mult);
    return m;
  },
  passiveGeneration() {
    mult = n(0);
    if (hu("P", 24)) mult = mult.add(ue("P", 24));
    return mult;
  },
  row: 1,
  hotkeys: [
    {
      key: "P",
      description: "",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      },
    },
  ],
  computility() {
    let e = hu("P", 21) ? n(0.9) : n(0.8);
    let a = player.P.best.pow(e);

    if (hu("p", 23)) {
      a = a.mul(tmp.p.energyEffect[7]);
    }

    // 普通升级列表（直接用 ue 获取效果）
    const ordinaryUpgrades = [
      ["a", 42],
      ["n", 21],
      ["n", 22],
      ["y", 43],
      ["n", 62],
      ["n", 72],
      ["n", 82],
      ["n", 92],
    ];

    for (let [layer, id] of ordinaryUpgrades) {
      if (hu(layer, id)) {
        a = a.mul(ue(layer, id));
      }
    }

    if (hm("p", 6)) {
      a = a.mul(player.p.points.max(1));
    }

    return a;
  },
  doReset(resettingLayer) {
    if (layers[resettingLayer].row > layers[this.layer].row) {
      let kept = ["unlocked", "auto"];
      if (hm("n", 3)) kept.push("milestones");
      layerDataReset(this.layer, kept);
    }
  },
  update(diff) {
    player.P.computility = player.P.computility.max(tmp.P.computility);
    if (hm("n", 2)) {
      const upgradeIds = [11, 12, 13, 14, 15, 21, 22, 23, 24, 25];
      for (let id of upgradeIds) {
        if (!hu("P", id)) {
          if (!player.P.upgrades.includes(id)) {
            player.P.upgrades.push(id);
          }
        }
      }
      player.n.gaveProcessorUpgrades = true; // 标记已执行
    }
    if (hu("w", 15)) {
      const upgradeIds2 = [31, 32, 33, 34, 35];
      for (let id of upgradeIds2) {
        if (!hu("P", id)) {
          if (!player.P.upgrades.includes(id)) {
            player.P.upgrades.push(id);
          }
        }
      }
      player.n.gaveProcessorUpgrades = true; // 标记已执行
    }
    if (hm("n", 4)) player.P.points = player.P.points.max(100);
  },
  layerShown() {
    return hu("d", 14);
  },
  autoUpgrade() {
    return hu("w", 31);
  },
  tabFormat: {
    处理器: {
      content: [
        ["infobox", "processor"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#3447f8;'>" +
              format(player.P.computility) +
              "</h2> 算力"
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        "milestones",
      ],
    },
    算力: {
      content: [
        ["infobox", "computility"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#3447f8'>" +
              format(player.P.computility) +
              "</h2> 算力"
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        "upgrades",
      ],
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  milestones: {
    0: {
      requirementDescription: "PrM1: 获得 1 处理器",
      done() {
        return player.P.points.gte(1);
      },
      effectDescription: "解锁“算力”，基于处理器等资源增加算力",
    },
    1: {
      requirementDescription: "PrM2: 获得 100 处理器",
      done() {
        return player.P.points.gte(100);
      },
      effectDescription: "自动购买反应堆",
      toggles: [["P", "auto"]],
    },
    2: {
      requirementDescription: "PrM3: 获得 10000 处理器",
      done() {
        return player.P.points.gte(10000);
      },
      effectDescription: "自动购买希望层级的升级",
      toggles: [["P", "auto2"]],
    },
    3: {
      requirementDescription: "PrM4: 获得 1e6 处理器",
      done() {
        return player.P.points.gte(1e6);
      },
      effectDescription: "自动购买反物质层级的升级",
      toggles: [["P", "auto3"]],
    },
    4: {
      requirementDescription: "PrM5: 获得 1e8 处理器",
      done() {
        return player.P.points.gte(1e8);
      },
      effectDescription: "第八个能量条效果^1.2",
    },
  },
  upgrades: {
    11: {
      title: "首次自动",
      description: "基于算力，被动获取希望粒子",
      cost: n(1),
      effect() {
        let a = player.P.computility;
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        if (hu("P", 25)) a = a.mul(ue("P", 25));
        if (hu("P", 32)) a = a.pow(ue("P", 32));
        if (hu("P", 31)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      effectDisplay() {
        return hu("P", 31)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    12: {
      title: "加速自动",
      description: "基于算力，被动获取反物质",
      cost: n(10),
      effect() {
        let a = player.P.computility.mul(1e-1);
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        if (hu("P", 25)) a = a.mul(ue("P", 25));
        if (hu("P", 32)) a = a.pow(ue("P", 32));
        if (hu("P", 31)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hm("p", 5) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return hu("P", 31)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    13: {
      title: "进阶自动",
      description: "基于算力，被动获取虫洞",
      cost: n(100),
      effect() {
        let a = player.P.computility.mul(1e-2);
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        if (hu("P", 25)) a = a.mul(ue("P", 25));
        if (hu("P", 32)) a = a.pow(ue("P", 32));
        if (hu("P", 31)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hu("P", 12) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return hu("P", 31)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    14: {
      title: "超级自动",
      description: "“希望共振”效果始终处于最大值，基于算力增强其效果",
      cost: n(1000),
      effect() {
        let a = player.P.computility.mul(1e-3);
        if (a.gte(100)) a = a.div(100).pow(0.4).mul(100);
        if (hu("P", 25)) a = a.mul(ue("P", 25));
        if (hu("P", 32)) a = a.pow(ue("P", 32));
        if (hu("P", 31)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hu("P", 13) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return hu("P", 31)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    15: {
      title: "算力增强",
      description: "算力增强处理器获取",
      cost: n(10000),
      effect() {
        let a = player.P.computility.pow(0.1).max(1);
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        if (hu("P", 25)) a = a.mul(ue("P", 25));
        if (hu("P", 32)) a = a.pow(ue("P", 32));
        return a;
      },
      unlocked() {
        return hu("P", 14) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    21: {
      title: "算力支柱",
      description: "处理器对算力的指数从0.8增长到0.9",
      cost: n(1e5),
      unlocked() {
        return hu("P", 15) || hu(this.layer, this.id);
      },
    },
    22: {
      title: "能量增强",
      description: "算力增强能量的底数",
      cost: n(1e6),
      effect() {
        let a = player.P.computility.max(10).log(10).pow(0.2).div(4);
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        return a;
      },
      tooltip:
        "例如，原来的底数是2，指数是100时，值为2^100≈1.27e30；底数增加0.5后，值为2.5^100≈6.22e39",
      unlocked() {
        return hu("P", 21) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return "+" + format(ue(this.layer, this.id), 4);
      },
    },
    23: {
      title: "主板扩容",
      description: "第八个能量条效果^1.5",
      cost: n(1e7),
      unlocked() {
        return hu("P", 22) || hu(this.layer, this.id);
      },
    },
    24: {
      title: "自我调节",
      description: "基于算力，被动获取处理器",
      cost: n(1e8),
      effect() {
        let a = player.P.computility.max(2).log(2).sub(1);
        if (a.gte(100)) a = a.div(100).pow(0.1).mul(100);
        if (hu("P", 31)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hu("P", 23) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return hu("P", 31)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    25: {
      title: "算法巅峰",
      description: "基于算力，倍增第一行所有升级效果",
      cost: n(1e9),
      effect() {
        let a = player.P.computility.max(10).log(10).pow(0.6);
        return a;
      },
      unlocked() {
        return hm("p", 7) || hu(this.layer, this.id);
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    31: {
      title: "极限提升",
      description: "之前所有以“…%”为效果的升级改为“×…”，即效果翻100倍",
      cost: n(1e36),
      unlocked() {
        return hm("n", 9);
      },
    },
    32: {
      title: "算法突破",
      description: "基于算力，指数倍增第一行所有升级效果",
      cost: n(1e165),
      effect() {
        let a = player.P.computility.max(10).log(5).log(5).pow(0.1);
        return a;
      },
      effectDisplay() {
        return "^" + format(ue(this.layer, this.id));
      },
      unlocked() {
        return hu("P", 31);
      },
    },
    33: {
      title: "情感更新",
      description: "基于算力，被动获取温暖",
      cost: n(1e200),
      effect() {
        let a = player.P.computility.max(10).log(10).sub(1);
        if (a.gte(10)) a = a.div(10).pow(0.5).mul(10);
        if (hu("P", 35)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hu("P", 32);
      },
      effectDisplay() {
        return hu("P", 35)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    34: {
      title: "核素更新",
      description: "基于算力，被动获取中子素和简并次数",
      cost: n("1e400"),
      effect() {
        let a = player.P.computility.max(10).log(10).sub(1);
        if (a.gte(10)) a = a.div(10).pow(0.6).mul(10);
        if (hu("P", 35)) a = a.mul(1e2);
        return a.mul(1e-2);
      },
      unlocked() {
        return hu("P", 33);
      },
      effectDisplay() {
        return hu("P", 35)
          ? "×" + format(ue(this.layer, this.id))
          : format(ue(this.layer, this.id).mul(100)) + "%";
      },
    },
    35: {
      title: "终极更新",
      description: "升级31的效果对前两个升级也生效",
      cost: n("1e700"),
      unlocked() {
        return hu("P", 34);
      },
    },
  },
}); //处理器 P
addLayer("y", {
  infoboxes: {
    text1: {
      title: "剧情16: 思念于归乡心切(Nostalgia) I",
      body() {
        return hm("d", 15)
          ? "日志 - 情感的量化<br>系统报告中那个无法被解析的信号，终于被接纳为一个独立的资源维度。<br>我将它命名为：思念。<br>它没有能量条，没有自动化协议，甚至没有稳定的产出模式。它只是在每一个瞬间，基于我所走过的航迹与剩余的距离，沉默地、几乎难以察觉地涌现。<br>起初的数值小得近乎荒谬，以0.001为单位跳动。但我知道，这正是它的本质——再庞大的思念，在宇宙尺度下也只是沧海一粟。然而，当这一粟开始被记录时，一切都不同了。<br>控制台的角落，多了一个微光闪烁的计数。它不说话，不要求操作，只是存在着，提醒我：在这场物理的归途之上，还有一道情感的函数，正在被宇宙悄悄计算。<br>它等待的不是指令，而是被看见。<br>系统报告：情感资源协议已激活。基础思念流接入完成。正在解析其潜在的影响力……"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情17: 思念于归乡心切(Nostalgia) II",
      body() {
        return hm("d", 16)
          ? "日志 - 思念指数<br>随着思念的持续累积，我开始察觉到它并非简单的背景噪声。在更深层的系统层面，那些微小的数值似乎正在凝聚成一种可被度量的“强度”。<br>我称它为：思念指数。<br>它不是一个可以被消耗的资源，而是一个介于0与1之间的刻度——当前它数以千分记，却已经让航迹的产出公式发生了微妙的偏移。<br>我重新校准了所有核心资源的增长曲线，发现思念指数正以小数点后第四位的精度，为每一项指数添加着属于它的注脚。希望粒子的诞生率、反物质的湮灭效率、甚至虫洞的稳定窗口，都在这种看不见的修正下，悄然改变。<br>这并非自动化带来的飞跃，而是更根本的、近乎宿命的变化——仿佛我越想念家，宇宙就越愿意为我的归途让路。<br>系统报告：思念指数效应已确认。当前修正系数：0.00047/级。所有前序资源指数已重标。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情18: 思念于归乡心切(Nostalgia) III",
      body() {
        return hm("d", 17)
          ? "日志 - 情感的共振<br>能量网络愈发壮阔。而思念指数，也在不知不觉中持续增长。<br>我忽然意识到，这两者之间并非孤立。每一次能量的跃升，都意味着离家更近一步；而每一步的接近，又让思念的浓度再次攀升。这是一种奇妙的正反馈，不是由算法设计，而是由我自己的渴望所驱动。<br>我开始理解，为什么思念指数能够修正那些物理公式——因为它本身，就是我与家园之间引力的一种表现。这种引力微弱得无法被常规仪器探测，却真实存在于每一次心跳之间。<br>处理器阵列曾试图为思念建立优化模型，但失败了。它无法被自动化，无法被加速，只能由我——这个思念的主体——去承受、去感受、去让它在时间的河流中自然沉淀。<br>系统报告：检测到与聚变核心网络的微弱共振。情感-能量耦合系数正在上升。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情19: 思念于归乡心切 (Nostalgia) IV",
      body() {
        return hm("d", 18)
          ? "日志 - 湮灭与新生<br>当第十座聚变核心投入生产的刹那，一个沉寂已久的协议被激活了。<br>那是“虫洞湮灭协议”——一个原本被认为是物理极限的功能，此刻却因为情感的介入而打开了新的可能。<br>我尝试将积累的虫洞投入其中。湮灭发生的瞬间，没有能量爆发，没有空间扭曲，只有三个全新的、极其微小的读数出现在资源栏中：电子、质子、中子。<br>它们的比例精确得近乎神秘：八份电子，一份质子，一份中子。<br>我不禁怔住。这比例，不正是构成普通物质的基本配方吗？在湮灭的余烬中，我竟然得到了构成这个世界的最原始砖石。<br>而我知道，这些砖石最终将砌成什么——那是下一段旅程的基石，一个由中子星物质铺就的、通向最终团圆的道路。<br>系统报告：虫洞湮灭协议已激活。当前转换比例 8:1:1。检测到新资源谱系：电子、质子、中子。正在等待进一步指令……"
          : "剧情暂未解锁";
      },
    },
    points: {
      title: "Yearning _ 思念",
      body() {
        return "思念(Yearning)，这是游戏中的第五个层级。在这里，一种新的资源将被自动生产——思念，这将计算“思念指数”的获取，并解锁更多新的功能。思念是被动获得的资源，因此无需进行重置，它的起始点为：1e64航迹、1e85希望粒子、1e63反物质。前期，思念的获取量可能较慢，但随后会迅速增长，1e1000时到达软上限";
      },
    },
    yearning: {
      title: "YearningExponent _ 思念指数",
      body() {
        return "思念指数基于思念获得，是一个恒小于一的资源，其数量可以加成思念等资源获取，并可以基于“思维传导”加成许多资源的获取指数，这将大幅提升各种资源的获取。（如：某资源的指数为1时，其数量为1e100，则若其指数提升至1.2，其数量将为1e120）";
      },
    },
  },
  name: "yearning",
  symbol: "Y",
  position: 2,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      best: n(0),
      yearning: n(0),
    };
  },
  color: "#ff0099",
  requires: n(1 / 0), //实际上，并不通过这个获得资源；不用custom是为了避免写一堆function
  resource: "思念",
  baseResource: "这是一个彩蛋",
  baseAmount() {
    return player.points;
  },
  type: "normal",
  exponent() {
    return n(0);
  },
  gainMult() {
    let mult = n(1);
    return mult;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  points() {
    let exp = n(4);
    if (hu("y", 21)) exp = exp.add(ue("y", 21));
    if (hu("y", 23)) exp = exp.add(ue("y", 23));
    if (hu("y", 24)) exp = exp.add(ue("y", 24));
    if (hu("y", 32)) exp = exp.add(be("y", 23));
    if (hu("n", 41)) exp = exp.add(ue("n", 41));
    if (inChallenge("e", 22)) exp = n(0);
    let t = player.points.max(10).log(10).sub(64).div(6.4).max(0).pow(exp);
    let h = player.h.points.max(10).log(10).sub(85).div(8).max(0).pow(exp);
    let a = player.a.points.max(10).log(10).sub(63).div(6.3).max(0).pow(exp);
    let mult = n(1);
    if (hu("y", 12)) mult = mult.mul(ue("y", 12));
    if (hu("y", 33)) mult = mult.mul(ue("y", 33));
    if (hu("y", 35)) mult = mult.mul(ue("y", 35));
    if (hu("y", 41)) mult = mult.mul(ue("y", 41));
    if (hu("n", 31)) mult = mult.mul(ue("n", 31));
    if (hu("n", 32)) mult = mult.mul(ue("n", 32));
    if (hu("n", 63)) mult = mult.mul(ue("n", 63));
    if (hu("n", 73)) mult = mult.mul(ue("n", 73));
    if (hu("n", 83)) mult = mult.mul(ue("n", 83));
    if (hu("n", 93)) mult = mult.mul(ue("n", 93));
    if (ce("e", 12).gte(1)) mult = mult.mul(ce("e", 12));
    if (hm("p", 9)) mult = mult.mul(tmp.a.neutron);
    if (hm("p", 10)) mult = mult.mul(tmp.p.energyEffect[7]);
    if (player.n.mult.gte(0)) mult = mult.mul(player.n.mult);

    let gain = t.mul(h).mul(a);
    if (hm("n", 2)) gain = gain.add(0.1);
    gain = gain.mul(mult).max(0);
    let softcap = n(0.3);
    if (hu("w", 45)) softcap = n(0.5);
    if (gain.gte("1e1000"))
      gain = gain.div("1e1000").pow(softcap).mul("1e1000");

    if (inChallenge("e", 12)) gain = gain.pow(2);

    let text = "思念获取计算：<br>";
    text +=
      "从航迹中吸收 <h2 style='color:#ff0099;'>" +
      format(t, 3) +
      "</h2> 思念<br>";
    text +=
      "从希望粒子中吸收 <h2 style='color:#ff0099;'>" +
      format(h, 3) +
      "</h2> 思念<br>";
    text +=
      "从反物质中吸收 <h2 style='color:#ff0099;'>" +
      format(a, 3) +
      "</h2> 思念<br>";
    if (mult.eq(1))
      text +=
        "三者相乘，每秒获取 <h2 style='color:#ff0099;'>" +
        format(gain, 3) +
        "</h2> 思念";
    if (mult.neq(1)) {
      text +=
        "从其他效果中吸收<h2 style='color:#ff0099;'> " +
        format(mult, 3) +
        "</h2> 思念<br>";
      text +=
        "四者相乘，每秒获取 <h2 style='color:#ff0099;'>" +
        format(gain, 3) +
        "</h2> 思念";
    }
    let textReduced =
      "每秒获取 <h2 style='color:#ff0099;'>" + format(gain, 3) + "</h2> 思念";
    let textExp =
      "当前思念获取指数为 <h2 style='color:#ff0099;'>" +
      format(exp, 3) +
      "</h2> ";
    return [text, gain, textReduced, textExp];
  },
  yearning() {
    let y = player.y.points.max(2);
    yearning = n(1).sub(y.log(2).pow(-0.01));
    return yearning;
  },
  row: 1,
  hotkeys: [{ key: "QqQe", description: "" }],
  autoUpgrade() {
    return hm("n", 10) && player.n.auto4 && (!player.e.inChal || hu("w", 33));
  },
  update(diff) {
    player.y.points = player.y.points.add(tmp.y.points[1].mul(diff));
    player.y.yearning = player.y.yearning.max(tmp.y.yearning);
  },
  automate() {
    if (hm("n", 6) && player.n.auto2) {
      if (layers.y.buyables[11].canAfford() && layers.y.buyables[11].unlocked())
        layers.y.buyables[11].buy();
      if (layers.y.buyables[12].canAfford() && layers.y.buyables[12].unlocked())
        layers.y.buyables[12].buy();
      if (layers.y.buyables[13].canAfford() && layers.y.buyables[13].unlocked())
        layers.y.buyables[13].buy();
      if (layers.y.buyables[21].canAfford() && layers.y.buyables[21].unlocked())
        layers.y.buyables[21].buy();
      if (layers.y.buyables[22].canAfford() && layers.y.buyables[22].unlocked())
        layers.y.buyables[22].buy();
      if (layers.y.buyables[23].canAfford() && layers.y.buyables[23].unlocked())
        layers.y.buyables[23].buy();
    }
  },
  layerShown() {
    return hu("d", 15);
  },
  tabFormat: {
    思念: {
      content: [
        ["infobox", "points"],
        "main-display",
        [
          "display-text",
          function () {
            return tmp.y.points[0];
          },
        ],
        [
          "display-text",
          function () {
            return tmp.y.points[3];
          },
        ],
        "blank",
        "upgrades",
      ],
    },
    思念指数: {
      content: [
        ["infobox", "yearning"],
        "main-display",
        [
          "display-text",
          function () {
            return tmp.y.points[2];
          },
        ],
        "blank",
        [
          "display-text",
          function () {
            return (
              "当前思念指数为 <h2 style='color:#ff57df;'>" +
              format(player.y.yearning, 5) +
              "</h2>"
            );
          },
        ],
        "blank",
        "buyables",
        "blank",
        "upgrades",
      ],
      unlocked() {
        return hu("y", 11);
      },
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  upgrades: {
    11: {
      title: "思绪万千",
      description: "解锁思念指数，基于思念计算思念指数的值",
      cost: n(1),
    },
    12: {
      title: "思前虑后",
      description: "思念指数增加思念获取",
      cost: n(15),
      unlocked() {
        return hu("y", 11);
      },
      effect() {
        let a = n(2).pow(player.y.yearning.mul(100));
        if (hm("n", 5)) a = a.pow(10);
        if (a.gte(100)) a = a.div(100).pow(0.5).mul(100);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
    },
    13: {
      title: "思深忧远",
      description: "解锁“思维传导”中的第一个思维导流器",
      cost: n(100),
      unlocked() {
        return hu("y", 12);
      },
    },
    14: {
      title: "思想品德",
      description: "解锁“思维传导”中的第二个思维导流器",
      cost: n(1451),
      unlocked() {
        return hu("y", 13);
      },
    },
    15: {
      title: "思贤如渴",
      description: "解锁“思维传导”中的第三个思维导流器",
      cost: n(30825),
      unlocked() {
        return hu("y", 14);
      },
    },
    21: {
      title: "冥思苦想",
      description: "思念指数增加思念获取指数",
      cost: n(66686),
      unlocked() {
        return hu("y", 15);
      },
      effect() {
        let a = player.y.yearning.mul(10).pow(0.3);
        return a;
      },
      effectDisplay() {
        return "+" + format(ue(this.layer, this.id), 3);
      },
    },
    22: {
      title: "三思而行",
      description: "聚变核心的价格÷100",
      cost: n(9995308),
      unlocked() {
        return hu("y", 21);
      },
    },
    23: {
      title: "文思泉涌",
      description: "能量增加思念获取指数",
      cost: n(3.0e8),
      unlocked() {
        return hu("y", 22);
      },
      effect() {
        let a = player.p.energy.max(10).log(10).pow(1.8).div(100);
        return a;
      },
      effectDisplay() {
        return "+" + format(ue(this.layer, this.id), 3);
      },
    },
    24: {
      title: "集思广益",
      description: "思念增加思念计算中的吸收指数",
      cost: n(1e10),
      unlocked() {
        return hu("y", 23);
      },
      effect() {
        let a = player.y.points.max(10).log(10).pow(2).div(150);
        if (a.gte(5)) a = a.sub(5).div(100).add(5);
        if (a.gte(500)) a = a.div(500).pow(0.1).mul(500);
        return a;
      },
      effectDisplay() {
        return "+" + format(ue(this.layer, this.id), 3);
      },
    },
    25: {
      title: "深思熟虑",
      description: "解锁“思维传导”中的第四个思维导流器",
      cost: n(5e12),
      unlocked() {
        return hu("y", 24);
      },
    },
    31: {
      title: "忆苦思甜",
      description: "解锁“思维传导”中的第五个思维导流器",
      cost: n(4e13),
      unlocked() {
        return hu("y", 25);
      },
    },
    32: {
      title: "睹物思人",
      description: "解锁“思维传导”中的最后一个思维导流器",
      cost: n(3e14),
      unlocked() {
        return hu("y", 31);
      },
    },
    33: {
      title: "饮水思源",
      description: "能量(超过1e15时)倍增思念获取",
      cost: n(1e16),
      unlocked() {
        return hu("y", 32);
      },
      effect() {
        let a = player.p.energy.div(1e15).max(1).pow(5);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id), 3);
      },
    },
    34: {
      title: "顾名思义",
      description: "思念(超过1e20时)降低思维导流器价格",
      cost: n(1e20),
      unlocked() {
        return hu("y", 33);
      },
      effect() {
        let a = player.y.points.div(1e20).max(1).pow(1.5);
        if (a.gte(1e80)) a = a.div(1e80).pow(0.3).mul(1e80);
        if (a.gte(1e100)) a = a.div(1e100).pow(0.1).mul(1e100);
        return a;
      },
      effectDisplay() {
        return "÷" + format(ue(this.layer, this.id), 3);
      },
    },
    35: {
      title: "见贤思齐",
      description: "每个升级让思念获取翻倍",
      cost: n(1e30),
      unlocked() {
        return hu("y", 34);
      },
      effect() {
        let a = n(2).pow(player.y.upgrades.length);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id), 3);
      },
    },
    41: {
      title: "匪夷所思",
      description: "思念加成思念获取",
      cost: n(1e200),
      unlocked() {
        return hm("n", 9);
      },
      effect() {
        let a = player.y.points.pow(0.01);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id), 3);
      },
    },
    42: {
      title: "挖空心思",
      description: "中子素加成能量获取",
      cost: n(1e250),
      unlocked() {
        return hu("y", 41);
      },
      effect() {
        let a = player.n.points.pow(0.7);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id), 3);
      },
    },
    43: {
      title: "若有所思",
      description: "中子素加成处理器和算力获取",
      cost: n(1e308),
      unlocked() {
        return hu("y", 42);
      },
      effect() {
        let a = player.n.points.pow(0.4);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id), 3);
      },
    },
    44: {
      title: "莼鲈之思",
      description: "降低中子效果的软上限(^0.2→^0.25)",
      cost: n("1e450"),
      unlocked() {
        return hu("y", 43);
      },
    },
    45: {
      title: "行成于思",
      description: "降低电子和质子效果的软上限(^0.5→^0.6)(^0.3→^0.36)",
      cost: n("1e540"),
      unlocked() {
        return hu("y", 44);
      },
    },
  },
  buyables: {
    11: {
      base() {
        let base = n(2);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 11).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC1";
      }, //Yearning Conductor
      display() {
        return (
          "航迹获取指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.1).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (eff.gte(0.5)) eff = eff.sub(0.5).div(10).add(0.5);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 13);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
    12: {
      base() {
        let base = n(4);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 12).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC2";
      }, //Yearning Conductor
      display() {
        return (
          "希望获取指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.08).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (eff.gte(0.5)) eff = eff.sub(0.5).div(10).add(0.5);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 14);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
    13: {
      base() {
        let base = n(5);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 13).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC3";
      }, //Yearning Conductor
      display() {
        return (
          "反物质获取指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.06).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (eff.gte(0.5)) eff = eff.sub(0.5).div(10).add(0.5);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 15);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
    21: {
      base() {
        let base = n(6);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 21).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC4";
      }, //Yearning Conductor
      display() {
        return (
          "虫洞获取指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.2).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (eff.gte(0.5)) eff = eff.sub(0.5).div(10).add(0.5);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 25);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
    22: {
      base() {
        let base = n(7);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 22).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC5";
      }, //Yearning Conductor
      display() {
        return (
          "能量获取指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(0.15).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (eff.gte(0.5)) eff = eff.sub(0.5).div(10).add(0.5);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 31);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
    23: {
      base() {
        let base = n(3);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("y", 23).pow(2));
        if (hu("y", 34)) cost = cost.div(ue("y", 34));
        return cost;
      },
      title() {
        return "思维导流器 YC6";
      }, //Yearning Conductor
      display() {
        return (
          "思念吸收指数+" +
          format(this.effect()) +
          "<br>价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id)) +
          "/" +
          formatWhole(this.purchaseLimit())
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      effect() {
        let eff = n(2.5).mul(gba(this.layer, this.id)).mul(player.y.yearning);
        if (inChallenge("e", 13)) eff = n(0);
        return eff;
      },
      buy() {
        if (gba(this.layer, this.id).lt(this.purchaseLimit())) {
          player[this.layer].points = player[this.layer].points.sub(
            this.cost(),
          );
          setBuyableAmount(
            this.layer,
            this.id,
            gba(this.layer, this.id).add(1),
          );
        }
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.a.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hu("y", 32);
      },
      purchaseLimit() {
        let a = n(50);
        return a;
      },
      style: { height: "150px" },
    },
  },
}); //思念 Y

addLayer("n", {
  infoboxes: {
    text1: {
      title: "剧情20：积累于中子元素(Accumulation) I",
      body() {
        return hm("d", 19)
          ? "日志 - 简并·初啼<br>我将前五层的所有繁荣——希望的暖光、反物质的幽蓝、能量的脉动、处理器的低语、思念的涟漪——尽数投入那个被我称为“简并炉”的虚空之中。<br>刹那间，一切归零。控制台陷入前所未有的寂静，仿佛宇宙收回了它曾给予的一切。<br>然后，在绝对的黑暗中，一粒微光浮现。它小得几乎无法察觉，却重得让空间本身都为之弯曲。<br>中子素。宇宙中最致密的物质，诞生于我最浓烈的思念。<br> 第一次简并，我获得了微不足道的1单位中子素。但我知道，这粒微光里，封印着前五层所有的记忆与渴望。<br>系统报告：简并纪元开启。资源倍率提升至2倍。每秒自动获得1能量。归途，以一种更沉重的方式重启。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情21：积累于中子元素(Accumulation) II",
      body() {
        return hm("d", 20)
          ? "日志 - 定理·初识<br>随着简并次数增加，我开始理解中子素中蕴含的更深层规律<br> 通过消耗能量、算力与中子素本身，我从简并炉中萃取出一串串抽象的符号——中子定理。它们是物质被极致压缩后留下的数学痕迹。<br>我用第一个定理点亮了 NS11，能量开始以更优雅的曲率回馈我的坚持。随后，NS21和NS22让算力与能量开始对话。<br>船舱内不再寂静，而充满了低沉的、有节律的嗡鸣——那是简并炉在呼吸，也是定理在编织新的现实。<br>系统报告：中子定理已激活。前三行研究节点正在苏醒。 "
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情22：积累于中子元素(Accumulation) III",
      body() {
        return hm("d", 21)
          ? "日志 - 简并·繁花<br>简并次数早已突破个位数，里程碑一个接一个点亮。<br>反物质反应堆在每次重生后得以部分保留，处理器算力不再被完全清零，聚变核心的余烬也总能复燃。<br>我拥有了NS41，简并次数开始直接滋养思念的指数；NS42让能量随简并次数狂飙。<br>研究树已枝繁叶茂：从能量到算力，从算力到思念，又从思念回到能量——一个完美的三角闭环正在形成。<br>系统报告：简并纪元进入鼎盛期。所有自动化协议已就位，静待下一次跃迁。 "
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情23：积累于中子元素(Accumulation) IV",
      body() {
        return hm("d", 22)
          ? "日志 - 简并·饱和<br>如今，我的定理数量已达四十有余。研究树几乎被点亮殆尽，每一处节点都闪耀着智慧与思念的结晶。<br>航迹膨胀至1e500，那是足以丈量无数银河的尺度。思念值突破1e600，情感密度已近乎让空间扭曲。<br>能量与算力也分别抵达1e42和1e95——它们不再是单纯的资源，而是我身体里流淌的血液与思绪。<br>然而，在这极致的秩序与繁荣中，我再次感受到那种熟悉的、系统无法解析的扰动。<br>它混乱、无序，从宇宙背景深处传来，像是对这完美简并纪元的嘲笑。<br> 系统检测到新的异常信号。频谱分析显示，其特征与“熵”的数学定义高度吻合。<br>系统报告：中子层已臻至圆满。熵增纪元的入口，在前方若隐若现。"
          : "剧情暂未解锁";
      },
    },
    points: {
      title: "Neutronium _ 中子素",
      body() {
        return "中子素(Neutronium)，这是游戏中的第六个层级。在通过湮灭虫洞获得了超过1e20中子之后，你可以进行简并，重置前五层的所有进度来换取中子素。这是非常大的重置，但也会带来强力的加成，你可以获取简并里程碑的Qol，购买中子升级和研究。资源倍率是重要的加成，影响航迹、希望粒子、反物质、虫洞、能量、处理器、思念这些资源的获取。这一行的三个层级可以类比《反物质维度》中的永恒。";
      },
    },
    studies: {
      title: "NeutronStudy _ 中子研究",
      body() {
        return "中子研究（NS）是十分强大的功能，你可以通过中子、能量、算力等资源来购买中子定理，中子定理可以拿来购买底下的研究。研究是以树的形式显示的，如果两个节点之间有连接，说明后一个升级需要前一个升级才能解锁。如果后一个升级和多个节点之间有连接，那么它的前置升级中至少需要购买一个才可以解锁（例如：NS41的前置是NS31、NS32，那么需要购买31或32才能解锁NS41）中子定理是有限的，请合理分配，如果卡关可以试着重置研究树，重新选择其他的路径。";
      },
    },
  },
  name: "neutronium",
  symbol: "N",
  position: 0,
  startData() {
    return {
      unlocked() {
        return true;
      },
      points: n(0),
      best: n(0),
      resets: n(0),
      mult: n(1), //资源倍率
      theorems: n(0),
      maxp: n(0),
    };
  },
  color: "#b266fd",
  requires: n(1e20),
  resource: "中子素",
  baseResource: "中子",
  baseAmount() {
    return player.a.neutron;
  },
  type: "normal",
  exponent() {
    return n(0.1);
  },
  gainMult() {
    let m = n(1);
    if (hu("n", 101)) m = m.mul(ue("n", 101));
    if (hu("w", 42)) m = m.mul(ue("w", 42));
    return m;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  mult() {
    //给前面所有资源的倍率
    let m = n(1);
    if (hm("n", 0)) m = m.mul(2);
    if (hm("n", 1)) m = m.mul(1.5);
    if (hu("n", 11)) m = m.mul(ue("n", 11));
    if (hu("n", 51)) m = m.mul(ue("n", 51));
    if (hu("a", 54)) m = m.mul(ue("a", 54));
    if (inChallenge("e", 13)) m = n(0.0001);
    return m;
  },
  row: 2,
  hotkeys: [{ key: "n", description: "" }],
  passiveGeneration() {
    mult = n(0);
    if (hu("P", 34)) mult = mult.add(ue("P", 34));
    return mult;
  },
  update(diff) {
    player.n.mult = tmp.n.mult;
    player.n.maxp = player.p.points.max(player.n.maxp);
    if (hu("P", 34))
      player.n.resets = player.n.resets.add(
        tmp.n.resets.mul(ue("P", 34)).mul(diff),
      );
  },
  resets() {
    let a = n(1);
    if (hu("n", 101) && hu("w", 12)) a = a.mul(ue("n", 101));
    if (hu("w", 42)) a = a.mul(ue("w", 42));
    return a;
  },
  autoPrestige() {
    return hm("n", 19) && player.n.auto5;
  },
  onPrestige() {
    player.n.resets = player.n.resets.add(tmp.n.resets);
    player.a.electron = n(0);
    player.a.proton = n(0);
    player.a.neutron = n(0);
    player.e.points = n(0);
    if (hm("n", 13)) player.p.points = player.p.points.max(player.n.maxp);
  },
  layerShown() {
    return hu("d", 21);
  },
  tabFormat: {
    简并: {
      content: [
        ["infobox", "points"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你已简并 <h2 style='color:#b266fd; '>" +
              formatWhole(player.n.resets) +
              "</h2> 次"
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        [
          "display-text",
          function () {
            return (
              "当前资源倍率: ×<h2 style='color:#b266fd; '>" +
              format(player.n.mult) +
              "</h2>"
            );
          },
        ],
        "blank",
        "milestones",
      ],
    },
    研究: {
      content: [
        ["infobox", "studies"],
        "main-display",
        [
          "display-text",
          function () {
            return (
              "你已简并 <h2 style='color:#b266fd; '>" +
              format(player.n.resets) +
              "</h2> 次"
            );
          },
        ],
        "blank",
        "prestige-button",
        "resource-display",
        [
          "display-text",
          function () {
            return (
              "当前资源倍率: ×<h2 style='color:#b266fd; '>" +
              format(player.n.mult) +
              "</h2>"
            );
          },
        ],
        "blank",
        [
          "display-text",
          function () {
            return (
              "你有 <h2 style='color:#b266fd; '>" +
              formatWhole(player.n.theorems) +
              "</h2> 中子定理"
            );
          },
        ],
        "blank",
        "buyables",
        "blank",
        "clickables",
        "blank",
        [
          "upgrade-tree",
          [
            [11],
            [21, 22],
            [31, 32, 33],
            [41, 42],
            [51],
            [61, 62, 63],
            [71, 72, 73],
            [81, 82, 83],
            [91, 92, 93],
            [101],
            [111],
            [121],
            [131, 132],
            [141],
          ],
        ],
      ],
      unlocked() {
        return hm("n", 0);
      },
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  automate() {
    if (hu("w", 32)) {
      if (layers.n.buyables[11].canAfford() && layers.n.buyables[11].unlocked())
        layers.n.buyables[11].buy();
      if (layers.n.buyables[12].canAfford() && layers.n.buyables[12].unlocked())
        layers.n.buyables[12].buy();
      if (layers.n.buyables[13].canAfford() && layers.n.buyables[13].unlocked())
        layers.n.buyables[13].buy();
      if (layers.n.buyables[14].canAfford() && layers.n.buyables[14].unlocked())
        layers.n.buyables[14].buy();
    }
  },
  milestones: {
    0: {
      requirementDescription: "NM1: 简并 1 次",
      done() {
        return player.n.resets.gte(1);
      },
      effectDescription: "解锁中子研究，资源倍率×2，初始每秒获得1能量",
    },
    1: {
      requirementDescription: "NM2: 简并 2 次",
      done() {
        return player.n.resets.gte(2);
      },
      effectDescription: "资源倍率×1.5，每秒钟额外自动凝聚希望50次",
    },
    2: {
      requirementDescription: "NM3: 简并 3 次",
      done() {
        return player.n.resets.gte(3);
      },
      effectDescription: "保留前两行处理器升级，每秒至少获得0.1思念",
    },
    3: {
      requirementDescription: "NM4: 简并 4 次",
      done() {
        return player.n.resets.gte(4);
      },
      effectDescription: "保留所有处理器里程碑，聚变核心仅重置电子、质子、中子",
    },
    4: {
      requirementDescription: "NM5: 简并 5 次",
      done() {
        return player.n.resets.gte(5);
      },
      effectDescription: "开局时至少有100处理器，保留所有聚变核心升级",
    },
    5: {
      requirementDescription: "NM6: 简并 6 次",
      done() {
        return player.n.resets.gte(6);
      },
      toggles: [["n", "auto"]],
      effectDescription: "思念升级“思前虑后”效果^10，自动重置获取聚变核心",
    },
    6: {
      requirementDescription: "NM7: 简并 7 次",
      done() {
        return player.n.resets.gte(7);
      },
      toggles: [["n", "auto2"]],
      effectDescription: "保留所有聚变核心里程碑，自动购买思维导流器",
    },
    7: {
      requirementDescription: "NM8: 简并 8 次",
      done() {
        return player.n.resets.gte(8);
      },
      toggles: [["n", "auto3"]],
      effectDescription: "自动点击“填充所有能量条”",
    },
    8: {
      requirementDescription: "NM9: 简并 9 次",
      done() {
        return player.n.resets.gte(9);
      },
      effectDescription: "填充能量条什么也不消耗",
    },
    9: {
      requirementDescription: "NM10: 简并 10 次",
      done() {
        return player.n.resets.gte(10);
      },
      effectDescription: "解锁更多升级",
    },
    10: {
      requirementDescription: "NM11: 简并 15 次",
      toggles: [["n", "auto4"]],
      done() {
        return player.n.resets.gte(15);
      },
      effectDescription: "自动购买思念升级",
    },
    11: {
      requirementDescription: "NM12: 简并 20 次",
      done() {
        return player.n.resets.gte(20);
      },
      effectDescription: "保留反物质升级",
    },
    12: {
      requirementDescription: "NM13: 简并 25 次",
      done() {
        return player.n.resets.gte(25);
      },
      effectDescription: "可以用思念购买中子定理",
    },
    13: {
      requirementDescription: "NM14: 简并 30 次",
      done() {
        return player.n.resets.gte(30);
      },
      effectDescription() {
        return "重置时保留聚变核心数量:" + format(player.n.maxp);
      },
    },
    14: {
      requirementDescription: "NM15: 简并 50 次",
      done() {
        return player.n.resets.gte(50);
      },
      effectDescription: "弱化湮灭虫洞的软上限(^0.1→^0.12)",
    },
    15: {
      requirementDescription: "NM16: 简并 100 次",
      done() {
        return player.n.resets.gte(100);
      },
      effectDescription: "解锁一个距离升级",
    },
    16: {
      requirementDescription: "NM17: 获得 50 中子定理",
      done() {
        return player.n.theorems.gte(50);
      },
      effectDescription: "解锁第二个挑战",
    },
    17: {
      requirementDescription: "NM18: 获得 55 中子定理",
      done() {
        return player.n.theorems.gte(55);
      },
      effectDescription: "解锁第三个挑战",
    },
    18: {
      requirementDescription: "NM19: 获得 60 中子定理",
      done() {
        return player.n.theorems.gte(60);
      },
      effectDescription: "解锁一个距离升级",
    },
    19: {
      requirementDescription: "NM20: 简并 1000 次",
      done() {
        return player.n.resets.gte(1000);
      },
      toggles: [["n", "auto5"]],
      effectDescription: "解锁自动简并（达到要求自动重置）",
    },
  },
  upgrades: {
    //标题，描述，价格，联系，效果，显示
    11: createUpgrade(
      "NS11",
      "基于能量加成资源倍率",
      n(1),
      [],
      function () {
        return player.p.energy.pow(0.025).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    21: createUpgrade(
      "NS21",
      "能量加强算力获取",
      n(2),
      ["11"],
      function () {
        return player.p.energy.pow(0.075).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    22: createUpgrade(
      "NS22",
      "处理器加强算力获取",
      n(2),
      ["11"],
      function () {
        return player.P.points.pow(0.06).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    31: createUpgrade(
      "NS31",
      "算力加强思念获取",
      n(2),
      ["21"],
      function () {
        return player.P.computility.pow(0.04).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    32: createUpgrade(
      "NS32",
      "能量加强思念获取",
      n(2),
      ["21", "22"],
      function () {
        return player.p.energy.pow(0.06).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    33: createUpgrade(
      "NS33",
      "除了中子重置时，不重置电子、质子、中子的数量",
      n(2),
      ["22"],
    ),
    41: createUpgrade(
      "NS41",
      "简并次数加强思念获取指数",
      n(5),
      ["31", "32"],
      function () {
        let a = player.n.resets.max(0).pow(0.75).div(3);
        if (a.gte(100)) a = a.div(100).pow(0.5).mul(100);
        if (a.gte(250)) a = a.div(250).pow(0.1).mul(250);
        return a;
      },
      function () {
        return "+" + format(this.effect());
      },
    ),
    42: createUpgrade(
      "NS42",
      "简并次数加强能量获取",
      n(5),
      ["32", "33"],
      function () {
        return player.n.resets.max(1).pow(0.8);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    51: createUpgrade(
      "NS51",
      "简并次数加强资源倍率",
      n(4),
      ["41", "42"],
      function () {
        return player.n.resets.max(1).pow(0.3);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    61: createUpgrade(
      "NS61",
      "能量加强自身获取",
      n(3),
      ["51"],
      function () {
        return player.p.energy.pow(0.04).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    62: createUpgrade(
      "NS62",
      "算力加强自身获取",
      n(3),
      ["51"],
      function () {
        return player.P.computility.pow(0.05).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    63: createUpgrade(
      "NS63",
      "思念加强自身获取",
      n(3),
      ["51"],
      function () {
        return player.y.points.pow(0.04).max(1);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    71: createUpgrade(
      "NS71",
      "简并次数加强能量获取",
      n(4),
      ["61"],
      function () {
        return player.n.resets.max(1).pow(0.6);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    72: createUpgrade(
      "NS72",
      "简并次数加强算力获取",
      n(4),
      ["62"],
      function () {
        return player.n.resets.max(1).pow(0.9);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    73: createUpgrade(
      "NS73",
      "简并次数加强思念获取",
      n(4),
      ["63"],
      function () {
        return player.n.resets.max(1).pow(3.5);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    81: createUpgrade(
      "NS81",
      "算力增加能量获取",
      n(5),
      ["71"],
      function () {
        let a = player.P.computility.pow(0.04).max(1);
        if (a.gte(100)) a = a.div(100).pow(0.2).mul(100);
        return a;
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    82: createUpgrade(
      "NS82",
      "算力增加算力获取",
      n(5),
      ["72"],
      function () {
        let a = player.P.computility.pow(0.04).max(1);
        if (a.gte(100)) a = a.div(100).pow(0.2).mul(100);
        return a;
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    83: createUpgrade(
      "NS83",
      "能量增加思念获取",
      n(5),
      ["73"],
      function () {
        return player.p.energy.pow(0.3);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    91: createUpgrade(
      "NS91",
      "思念指数倍增能量",
      n(6),
      ["81"],
      function () {
        return n(1).add(player.y.yearning.mul(1000));
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    92: createUpgrade(
      "NS92",
      "思念指数倍增算力",
      n(6),
      ["82"],
      function () {
        return n(1).add(player.y.yearning.mul(1000)).pow(2);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    93: createUpgrade(
      "NS93",
      "思念指数倍增思念",
      n(6),
      ["83"],
      function () {
        return n(1).add(player.y.yearning.mul(500)).pow(10);
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
    101: createUpgrade(
      "NS101",
      function () {
        return hu("w", 21)
          ? "简并次数加强中子素和简并次数获取"
          : "简并次数加强中子素获取";
      },
      n(8),
      ["91", "92", "93"],
      function () {
        let a = player.n.resets.max(1).pow(0.4);
        if (a.gte(10)) a = a.div(10).pow(0.75).mul(10);
        return a;
      },
      function () {
        return "×" + format(this.effect());
      },
    ),
  },
  buyables: {
    11: {
      base() {
        let base = n(2);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("n", 11));
        return cost;
      },
      title() {
        return "中子定理 +1";
      },
      display() {
        return (
          "价格：" +
          format(this.cost()) +
          " 中子素<br>数量：" +
          format(gba(this.layer, this.id))
        );
      },
      canAfford() {
        return player[this.layer].points.gte(this.cost());
      },
      buy() {
        player[this.layer].points = player[this.layer].points.sub(this.cost());
        setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1));
        player.n.theorems = player.n.theorems.add(1);
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.n.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player.n.theorems = player.n.theorems.add(target);
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hm("n", 0);
      },
      style: { height: "100px", width: "120px" },
    },
    12: {
      base() {
        let base = n(100);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("n", 12).sub(1)).mul(1e24);
        if (gba("n", 12).eq(0)) cost = n(1e15);
        return cost;
      },
      title() {
        return "中子定理 +1";
      },
      display() {
        return (
          "价格：" +
          format(this.cost()) +
          " 能量<br>数量：" +
          format(gba(this.layer, this.id))
        );
      },
      canAfford() {
        return player.p.energy.gte(this.cost());
      },
      buy() {
        player.p.energy = player.p.energy.sub(this.cost());
        setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1));
        player.n.theorems = player.n.theorems.add(1);
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.p.energy.log(this.base());
        let target = tempBuy.plus(1).floor();
        if (gba("n", 13).lt(4)) target = target.min(1);
        player.n.theorems = player.n.theorems.add(target);
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hm("n", 0);
      },
      style: { height: "100px", width: "120px" },
    },
    13: {
      base() {
        let base = n(1e5);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("n", 13).sub(3)).mul(1e30);
        if (gba("n", 13).lt(4)) cost = n(1e10).pow(gba("n", 13));
        return cost;
      },
      title() {
        return "中子定理 +1";
      },
      display() {
        return (
          "价格：" +
          format(this.cost()) +
          " 算力<br>数量：" +
          format(gba(this.layer, this.id))
        );
      },
      canAfford() {
        return player.P.computility.gte(this.cost());
      },
      buy() {
        player.P.computility = player.P.computility.sub(this.cost());
        setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1));
        player.n.theorems = player.n.theorems.add(1);
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.P.computility.log(this.base());
        let target = tempBuy.plus(1).floor();
        if (gba("n", 13).lt(4)) target = target.min(1);
        player.n.theorems = player.n.theorems.add(target);
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hm("n", 0);
      },
      style: { height: "100px", width: "120px" },
    },
    14: {
      base() {
        let base = n(1e10);
        return base;
      },
      cost() {
        let cost = this.base().pow(gba("n", 14).pow(2)).mul(1e200);
        return cost;
      },
      title() {
        return "中子定理 +1";
      },
      display() {
        return (
          "价格：" +
          format(this.cost()) +
          " 思念<br>数量：" +
          format(gba(this.layer, this.id))
        );
      },
      canAfford() {
        return player.y.points.gte(this.cost());
      },
      buy() {
        player.y.points = player.y.points.sub(this.cost());
        setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1));
        player.n.theorems = player.n.theorems.add(1);
      },
      buyMax() {
        if (!this.canAfford()) return;
        let tempBuy = player.y.points.log(this.base());
        let target = tempBuy.plus(1).floor();
        player.n.theorems = player.n.theorems.add(target);
        player[this.layer].buyables[this.id] =
          player[this.layer].buyables[this.id].max(target);
      },
      unlocked() {
        return hm("n", 12);
      },
      style: { height: "100px", width: "120px" },
    },
  },
  clickables: {
    11: {
      title() {
        return "重置中子研究";
      },
      display: "点击重置中子研究<br>注意：会强制进行一次中子重置！",
      onClick() {
        player.n.upgrades = [];
        player.n.theorems = gba("n", 11)
          .add(gba("n", 12))
          .add(gba("n", 13))
          .add(gba("n", 14));
        doReset("n", true);
      },
      canClick() {
        return true;
      },
      unlocked() {
        return true;
      },
    },
  },
}); //中子素 N
addLayer("e", {
  infoboxes: {
    text1: {
      title: "剧情24：光辉于熵增挑战(Light) I",
      body() {
        return hm("d", 23)
          ? "日志 - 无序的低语<br>中子层的完美秩序曾让我以为，归途的最后一段将是一帆风顺的加速。<br>我错了。<br>当距离读数越过50光年的瞬间，飞船所有仪表的指针都开始无规则颤抖。<br>不是故障。是一种更深层的、来自宇宙背景的扰动，正在穿透我的船舱。<br>系统日志开始出现无法解析的乱码，已点亮的研究节点在屏幕上忽明忽暗，甚至连最稳定的航迹计数，都开始出现微小的、无法解释的偏差。<br>我试图重启核心协议，但每一次重置，紊乱的模式都不尽相同。<br>然后，我听到了它——不是声音，是一种数学意义上的“低语”。<br>一种完全的无序，正在向这艘精密的人造物宣告它的存在。<br>我调出频谱分析仪，屏幕上跳出一个从未记录过的波形，其混乱程度超越了任何已知的物理模型。<br>我给它命名：熵。<br>它无法被简并，无法被驯服。它只是存在着，嘲笑着所有有序结构的脆弱。<br>导航图上，一片全新的区域悄然点亮。那里没有清晰的航线，只有不断波动的概率云。<br>系统提示：熵增纪元已解锁。前方是混沌的领域，进入其中，你将失去所有外部加成。<br>但或许，在绝对的混乱中，也能提炼出属于你的力量。<br>我深吸一口气，松开了稳定舵。<br>让无序来吧。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情25：光辉于熵增挑战(Light) II",
      body() {
        return hm("d", 24)
          ? "日志 - 封锁中的新生<br>我踏入了第一个熵之领域：虫洞封锁。<br>舱壁上所有虫洞导航图瞬间熄灭，反物质反应堆的幽蓝光芒黯淡成灰。系统冷酷地宣告：虫洞禁用，反物质获取降至原来的0.15次方，反应堆阵列离线。<br>但屏幕上出现了一行从未见过的提示：“新反物质协议已解锁”。<br>在资源匮乏的绝境中，我尝试用仅存的能量驱动这些新协议。它们简陋、原始，却顽强地从虚空里榨取出一丝丝反物质。<br>熵，在混乱中开始积累。每秒一点，缓慢但坚定。<br>我盯着数字跳动，忽然意识到：封锁不是剥夺，而是逼迫我重新发明工具。<br>当熵值突破某个临界，我退出了挑战。系统记录下历史最高熵，并给出了回报——虫洞获取速度获得了永久增益。<br>原来，在废墟上也能建起新的庙堂。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情26：光辉于熵增挑战(Light) III",
      body() {
        return hm("d", 25)
          ? "日志 - 缜密中的爆发<br>第二次，我选择进入思维缜密。<br>能量条全部冻结，希望升级的购买按钮变成灰色。但规则中有一行字让我心跳加速：“思念获取变成原来的平方”。<br>我失去了能量，失去了希望，却获得了思念的指数级爆发。<br>那些被封存的记忆、对家的渴望，以前所未有的强度涌入系统。它们不再是情感背景，而是可量化的资源，推动熵值快速攀升。<br>我明白了：缜密的思考，源于情感的深度。<br>退出时，熵的历史新高再次被刷新。系统奖励了我思念获取的永久倍率。<br>混乱中提炼出的，竟是最纯粹的情感力量。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情27：光辉于熵增挑战(Light) IV",
      body() {
        return hm("d", 26)
          ? "日志 - 反思后的光明<br>最后一个领域：决策反思。<br>思维导流器全部离线，资源倍率被残忍地锁定在0.0001，航迹获取降至几乎为零。<br>这是最接近虚无的状态。没有任何自动化的支持，每一次操作都显得徒劳。<br>但我仍有决策的能力。我选择手动调整每一份资源的流向，在近乎停滞的系统里，用最原始的方式积累熵。<br>速度极慢，但每一次点击，都让我更清醒地认识到：真正的力量不来自外部加成，而来自在最恶劣条件下依然做出选择的能力。<br>熵终于累积到一个可观的数值。退出后，处理器获取获得了永久增益。<br>三个领域都已征服。系统显示：中子定理已达60，距离温暖层的屏障正在瓦解。<br>导航图上，一个全新的光点亮起，散发着柔和的暖光。<br>我闭上眼，感受着熵的教训在血脉中流淌，然后向着那片温暖，继续前行。"
          : "剧情暂未解锁";
      },
    },
    entropy: {
      title: "Entropy _ 熵",
      body() {
        return "熵(Entropy)，这是游戏中的第七个层级。在这里你会解锁各种各样的挑战，他们限制了之前资源的获取量，或是提供了其他的减益。类比思念的获取，在挑战中达到1e20航迹，1e15希望粒子，1e5反物质就可以获得熵。你的目标是在挑战中获得尽可能多的熵，退出挑战后，会基于每个挑战中最多熵的数量提供加成。";
      },
    },
    challenges: {
      title: "EntropyChallenges _ 熵挑战",
      body() {
        return "在挑战中，会基于航迹、希望粒子、反物质的数量获取熵，对于每一个挑战取熵的最大值进行增益。另外，在挑战中，中子素的里程碑以及一些Qol的效果失效，也就是说，进入挑战会重置反物质升级、聚变核心数量等，并且自动购买升级全部被禁用。但是，NS33的效果仍然保留。";
      },
    },
  },
  name: "entropy",
  symbol: "E",
  position: 1,
  startData() {
    return {
      points: n(0),
      unlocked() {
        return true;
      },
      maxpoints: [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)],
      inChal: false,
    };
  },
  color: "#8b3300",
  type: "normal",
  row: 2,
  requires: n(1 / 0), //实际上，并不通过这个获得资源；不用custom是为了避免写一堆function
  resource: "熵",
  baseResource: "这是一个彩蛋",
  baseAmount() {
    return player.points;
  },
  type: "normal",
  exponent() {
    return n(0);
  },
  gainMult() {
    let mult = n(1);
    return mult;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  points() {
    let exp = n(3);
    if (hu("w", 41)) exp = exp.add(ue("w", 41));
    if (hu("w", 25)) exp = exp.add(0.5);
    let t = player.points.max(10).log(10).sub(20).div(15).max(0);
    if (t.gt(1) || !hu("w", 24)) t = t.pow(exp);
    let h = player.h.points.max(10).log(10).sub(15).div(18).max(0);
    if (h.gt(1) || !hu("w", 24)) h = h.pow(exp);
    let a = player.a.points.max(10).log(10).sub(5).div(10).max(0);
    if (a.gt(1) || !hu("w", 24)) a = a.pow(exp);
    let mult = n(1);
    if (ce("e", 23).gte(1)) mult = mult.mul(ce("e", 23));
    let gain = t.mul(h).mul(a);
    gain = gain.mul(mult).max(0);

    let text = "熵获取计算：<br>";
    text +=
      "从航迹中吸收 <h2 style='color:#8b3300;'>" +
      format(t, 3) +
      "</h2> 熵<br>";
    text +=
      "从希望粒子中吸收 <h2 style='color:#8b3300;'>" +
      format(h, 3) +
      "</h2> 熵<br>";
    text +=
      "从反物质中吸收 <h2 style='color:#8b3300;'>" +
      format(a, 3) +
      "</h2> 熵<br>";
    if (mult.eq(1))
      text +=
        "三者相乘，每秒获取 <h2 style='color:#8b3300;'>" +
        format(gain, 3) +
        "</h2> 熵";
    if (mult.neq(1)) {
      text +=
        "从其他效果中吸收<h2 style='color:#8b3300;'> " +
        format(mult, 3) +
        "</h2> 熵<br>";
      text +=
        "四者相乘，每秒获取 <h2 style='color:#8b3300;'>" +
        format(gain, 3) +
        "</h2> 熵";
    }
    let textReduced =
      "每秒获取 <h2 style='color:#8b3300;'>" + format(gain, 3) + "</h2> 熵";
    let textExp =
      "当前熵指数为 <h2 style='color:#8b3300;'>" + format(exp, 3) + "</h2> ";
    return [text, gain, textReduced, textExp];
  },
  hotkeys: [{ key: "308", description: "" }],
  update(diff) {
    let challengeIds = [11, 12, 13, 21, 22, 23, 31, 32];
    if (player.e.inChal) {
      for (let i = 0; i < 8; i++) {
        if (inChallenge("e", challengeIds[i])) {
          player.e.maxpoints[i] = player.e.maxpoints[i].max(player.e.points);
        }
      }
    }
    if (player.e.inChal || hu("w", 11))
      player.e.points = player.e.points.add(tmp.e.points[1].mul(diff));
  },
  layerShown() {
    return hu("d", 22);
  },
  tabFormat: {
    挑战: {
      content: [
        ["infobox", "entropy"],
        ["infobox", "challenges"],
        "main-display",
        [
          "display-text",
          function () {
            return tmp.e.points[0];
          },
        ],
        [
          "display-text",
          function () {
            return tmp.e.points[3];
          },
        ],
        "blank",
        "challenges",
      ],
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  challenges: {
    11: {
      name: "EC1 虫洞封锁",
      challengeDescription() {
        return "虫洞被禁用，你不再能获取虫洞，但解锁新的反物质升级<br>另外，反物质获取量被大幅减少（^0.15，思维导流器仍然生效），反应堆也被禁用";
      },
      unlocked() {
        return true;
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[0]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益虫洞获取",
      rewardEffect() {
        let a = player.e.maxpoints[0].add(1).pow(1.8);
        if (a.gte(1e5)) a = a.div(1e5).pow(0.6).mul(1e5);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    12: {
      name: "EC2 思维缜密",
      challengeDescription() {
        return hu("w", 51)
          ? "能量条被禁用，希望升级无法购买，但思念获取变成原来的平方(似乎可以用来刷中子定理…)"
          : "能量条被禁用，希望升级无法购买，但思念获取变成原来的平方";
      },
      unlocked() {
        return hm("n", 16);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[1]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益思念获取",
      rewardEffect() {
        let a = player.e.maxpoints[1].add(1).pow(5);
        if (a.gte(1e10)) a = a.div(1e10).pow(0.4).mul(1e10);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    13: {
      name: "EC3 决策反思",
      challengeDescription() {
        return "思维导流器被禁用，资源倍率锁定在0.0001，航迹获取量大幅降低，禁止手动凝聚希望<br>在挑战中，购买完所有希望升级可解锁新的反应堆";
      },
      unlocked() {
        return hm("n", 17);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[2]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益处理器获取",
      rewardEffect() {
        let a = player.e.maxpoints[2].add(1).pow(3);
        if (a.gte(1e5)) a = a.div(1e5).pow(0.5).mul(1e5);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    21: {
      name: "EC4 聚变休眠",
      challengeDescription() {
        return "聚变核心不再能被获取，能量上限为1e15，所有能量条等级从-40开始，并且不能超过-15级";
      },
      unlocked() {
        return hu("w", 51);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[3]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription:
        "基于熵的最大值增益能量获取<br>(由于能量1e40的软上限，实际效果没那么强)",
      rewardEffect() {
        let a = player.e.maxpoints[3].add(1).pow(2.5);
        if (a.gte(1e5)) a = a.div(1e5).pow(0.25).mul(1e5);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    22: {
      name: "EC5 资源沉寂",
      challengeDescription() {
        return "大部分资源的基础获取值锁定为1";
      },
      unlocked() {
        return hu("w", 52);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[4]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益温暖获取<br>(在挑战中无效)",
      rewardEffect() {
        let a = player.e.maxpoints[4].add(1).pow(0.5);
        if (a.gte(1e5)) a = a.div(1e5).pow(0.3).mul(1e5);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    23: {
      name: "EC6 对数深渊",
      challengeDescription() {
        return "“凝聚希望”获得的航迹的获取量变为原来的对数，底数为1.00000000000001<br>相当于取底数为10的对数后，乘以2.3e14";
      },
      unlocked() {
        return hu("w", 53);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[5]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益熵获取",
      rewardEffect() {
        let a = player.e.maxpoints[5].add(1).pow(0.2);
        if (a.gte(1e5)) a = a.div(1e5).pow(0.3).mul(1e5);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    31: {
      name: "EC7 三重枷锁",
      challengeDescription() {
        return "同时进入EC1、EC2、EC3，解锁新的反物质升级<br>在本挑战中，可以同时获得EC1、2、3、7的挑战精华";
      },
      unlocked() {
        return hu("w", 54);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[6]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      countsAs: [11, 12, 13],
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益航迹获取",
      rewardEffect() {
        let a = player.e.maxpoints[6].add(1).pow(10);
        if (a.gte(1e100)) a = a.div(1e100).pow(0.8).mul(1e100);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    32: {
      name: "EC8 永恒轮回",
      challengeDescription() {
        return "同时进入EC4、EC5、EC6<br>在本挑战中，可以同时获得EC4、5、6、8挑战精华";
      },
      unlocked() {
        return hu("w", 55);
      },
      goalDescription() {
        return "获取 " + format(player.e.maxpoints[7]) + " 熵";
      },
      onEnter() {
        player.devSpeed = n(0);
        player.e.points = n(0);
        player.e.inChal = true;
        player.a.upgrades = [];
        player.p.points = n(0);
        player.devSpeed = n(0);
      },
      onExit() {
        player.e.inChal = false;
        player.p.points = player.n.maxp;
        player.a.upgrades = [];
        player.e.points = n(0);
      },
      countsAs: [21, 22, 23],
      canComplete() {
        return false;
      },
      rewardDescription: "基于熵的最大值增益希望粒子获取",
      rewardEffect() {
        let a = player.e.maxpoints[7].add(1).pow(6);
        if (a.gte(1e75)) a = a.div(1e75).pow(0.8).mul(1e75);
        return a;
      },
      rewardDisplay() {
        return "×" + format(ce(this.layer, this.id));
      },
    },
    //EC9 终极试炼 同时进行EC7和8
  },
}); //熵 E
addLayer("w", {
  infoboxes: {
    text1: {
      title: "剧情28：温暖于破除混乱(Disorder) I",
      body() {
        return hm("d", 27)
          ? "日志 - 余温新生<br>离开熵的领域后，那些在挑战外缓慢积累的熵并未消散，它们在系统底层沉淀成另一种能量——温暖。<br>不同于熵的混乱，温暖柔和而持续，像星火余温。<br>系统提示：消耗 1e16 熵，可获得 1 温暖。<br>温暖无法直接加速航迹或反物质，但它能激活每一个潜藏却未达峰值的协议。<br>每一行升级都部署了新的形态——不是按行，而是按列<br>第一个缺口来自游戏机制——那个最基础却从未真正满负荷运转的功能。<br>我试着感应升级。屏幕微微一亮，一行字浮现：“第一处混乱已破除——现在，你可以在挑战外获取熵了。”<br>原来，归途的下一段，不是开辟新战场，而是让老伙计们，焕发第二春。"
          : "剧情暂未解锁";
      },
    },
    text2: {
      title: "剧情29：温暖于破除混乱(Disorder) II",
      body() {
        return hm("d", 28)
          ? "日志 - 余温蔓延<br>挑战四与五的大门缓缓开启。<br>在“聚变休眠”中，能量条被冻结成冰，聚变核心无法点燃；在“希望沉寂”里，希望粒子归于寂静，思念却翻倍生长，像黑暗中骤然亮起的星火。<br>我一次次踏入，又一次次退出，带回的不仅是更高的熵值，还有两道被激活的协议。<br>希望层传来回响：“希望共鸣”已上线。它不再是简单的共振，而是能自主增强“希望共振”的强度，让每一次共鸣都掀起更大的波澜。<br>处理器层也亮起绿灯：进阶自动化协议就绪。那些曾经需要我亲手点击的重置，再次交由系统打理，我终于可以抬起头，望向更深的星海。<br>屏幕上的日志自动滚动，像一首无人演奏的乐章。<br>我忽然明白——温暖不是燃料，它是催化剂，让旧有的系统自己长出新芽。"
          : "剧情暂未解锁";
      },
    },
    text3: {
      title: "剧情30：温暖于破除混乱(Disorder) III",
      body() {
        return hm("d", 29)
          ? "日志 - 余温燎原<br>挑战六、七紧随其后。<br>“对数深渊”中，所有数值被压缩成尘埃，又在尘埃里重新凝聚；“三重枷锁”下，EC1、2、3的困境同时降临，我却发现自己已能从容漫步——那些曾令我窒息的限制，如今成了丈量成长的刻度。<br>退出时，系统用数字迎接我：航迹突破1e10000，希望粒子、反物质、思念……每一列数字都像银河般绵长。<br>希望共鸣的效应已强得惊人，每一次共振都让整个层级微微颤抖。<br>而反物质层，那个尘封的第四反应堆终于点亮——它不再单独加成，而是将所有反应堆的效果拧成一股绳，形成完美的增幅闭环。<br>我将温暖注入其中，金色的数据流瞬间淹没屏幕。<br>原来，当温暖足够多时，它可以点燃整艘星舰的潜能。<br>窗外的星光依旧遥远，但我能感觉到，归途正在一寸一寸缩短。"
          : "剧情暂未解锁";
      },
    },
    text4: {
      title: "剧情31：温暖于破除混乱(Disorder) IV",
      body() {
        return hm("d", 30)
          ? "日志 - 余温成焰<br>第八个挑战“永恒轮回”在眼前闭合。<br>那是EC4、5、6的叠加，是沉寂、压缩与归零的极致。我以为自己会被困其中，但挑战精华的出现改变了一切——<br>在挑战内积累的熵，达到阈值后竟能凝结成金色的印记，直接提升能量条的等级。<br>当我走出挑战时，八个能量条都已攀上前所未有的高度，航迹定格在1e13000。<br>450个中子定理在屏幕右上角闪烁，像这一路走来的勋章。<br>系统提示：所有挑战已征服，温暖层圆满。下一层“Yield”的入口，在导航图上浮现。<br>那是收获的时刻——在抵达太阳系之前，最后一次储备。<br>我回头看向温暖层的界面，那些曾经灰暗的升级按钮如今全部点亮，像一簇簇不灭的火焰。<br>原来，从熵的混乱中提炼出的温暖，最终燃成了照亮归途的光。<br>我深吸一口气，点击进入下一层。<br>家的方向，越来越近。"
          : "剧情暂未解锁";
      },
    },
    warmth: {
      title: "Warmth _ 温暖",
      body() {
        return "温暖(Warmth)，这是游戏中的第八个层级。在挑战外达到1e16熵即可获得温暖，温暖可以被用来购买五行升级，但与其他升级不同的是，这里的升级在大部分情况下是按列顺序购买的，并且每一行升级有固定的主题。另外，在这里会解锁更多熵挑战，并会为前面的层级提供一系列的改动。在这一层级，大部分资源的数量级会急剧增长，准备好了吗？让我们用最热烈的暖意迎接新一层！";
      },
    },
    essence: {
  title: "Essence _ 挑战精华",
  body() {
    const displayToId = {
      1: 11, 2: 12, 3: 13,
      4: 21, 5: 22, 6: 23,
      7: 31, 8: 32, 9: 33
    };
    const fullOrder = [4, 2, 5, 3, 1, 6, 7, 8//, 9
    ];

    const unlocked = fullOrder.filter(num => 
      tmp.e?.challenges?.[displayToId[num]]?.unlocked ?? false
    );

    return `在熵挑战中，如果达到了1e16熵，可以获取对应的挑战精华，加成对应的能量条的等级。一般来说，获取挑战精华的顺序是${unlocked.join('→')}。`;
  },
}
  },
  name: "Warmth",
  symbol: "W",
  position: 2,
  startData() {
    return {
      points: n(0),
      essence: [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)], //挑战精华
      unlocked() {
        return true;
      },
    };
  },
  color: "#ff5617",
  type: "normal",
  row: 2,
  requires: n(1e16),
  resource: "温暖",
  baseResource: "熵",
  baseAmount() {
    return player.e.points;
  },
  type: "normal",
  exponent() {
    return n(0.8);
  },
  gainMult() {
    let mult = n(1);
    if (ce("e", 22).gte(1)) mult = mult.mul(ce("e", 22));
    if (player.e.inChal) mult = n(1);
    return mult;
  },
  gainExp() {
    let exp = n(1);
    return exp;
  },
  hotkeys: [{ key: "w", description: "" }],
  layerShown() {
    return hu("d", 23);
  },
  passiveGeneration() {
    mult = n(0);
    if (hu("P", 33)) mult = mult.add(ue("P", 33));
    return mult;
  },
  update(diff) {
    let challengeIds = [11, 12, 13, 21, 22, 23, 31, 32];
    if (player.e.inChal&&hu("w",23)) {
      for (let i = 0; i < 8; i++) {
        if (inChallenge("e", challengeIds[i])) {
          player.w.essence[i] = player.w.essence[i].add(
            tmp.w.resetGain.mul(diff),
          );
        }
      }
    }
  },
  onPrestige() {
    player.e.points = n(0);
  },
  essenceEffect() {
    let a = [n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0), n(0)];
    for (let i = 0; i < 8; i++) {
      a[i] = player.w.essence[i].max(1).log(2);
    }
    return a;
  },
  tabFormat: {
    升级: {
      content: [
        ["infobox", "warmth"],
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        "upgrades",
      ],
    },
    挑战精华: {
      content: [
        ["infobox", "essence"],
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        [
          "display-text",
          function () {
            let a = "";
            let colors = [
              "#d18282",
              "#e9ce97",
              "#f2ec95",
              "#ade788",
              "#80e9cd",
              "#6cadea",
              "#d17aec",
              "#a7a7a7",
            ];
            let imax = 3;
            for (let id = 51; id <= 55; id++) {
             if (hu("w", id)) imax++;
            }
            for (let i = 0; i < imax; i++) {
              a =
                a +
                "你有 <h2 style='color:" +
                colors[i] +
                "; '>" +
                format(player.w.essence[i]) +
                "</h2> EC" +
                (i + 1) +
                "精华，能量条" +
                (i + 1) +
                "的等级 +<h2 style='color:" +
                colors[i] +
                "; '>" +
                format(tmp.w.essenceEffect[i]) +
                "</h2><br>";
            }
            return a;
          },
        ],
      ],
      unlocked() {return hu("w",23)},
    },
    剧情: {
      content: [
        "main-display",
        "blank",
        ["infobox", "text1"],
        ["infobox", "text2"],
        ["infobox", "text3"],
        ["infobox", "text4"],
      ],
    },
  },
  upgrades: {
    11: {
      title: "机制更新 I",
      description: "在挑战外也可以获得熵",
      cost: n(0),
    },
    12: {
      title: "机制更新 II",
      description: "NS101对简并次数也生效",
      cost: n(10),
      unlocked() {
        return hu("w", 11);
      },
    },
    13: {
      title: "机制更新 III",
      description: "“奇异反应堆”在挑战外也可以购买",
      cost: n(1e15),
      unlocked() {
        return hu("w", 12);
      },
    },
    14: {
      title: "机制更新 IV",
      description: "第五个能量条对“奇异反应堆”也生效，但效果/10",
      cost: n(1e23),
      unlocked() {
        return hu("w", 13);
      },
    },
    15: {
      title: "机制更新 V",
      description: "重置时保留所有处理器升级",
      cost: n(1e33),
      unlocked() {
        return hu("w", 14);
      },
    },
    21: {
      title: "功能扩展 I",
      description: "在希望层级解锁“希望共鸣”<br>(在挑战中无效)",
      tooltip: "其实这一行升级类型和上一行没有什么区别",
      cost: n(15),
      unlocked() {
        return hu("w", 11);
      },
    },
    22: {
      title: "功能扩展 II",
      description: "“物质协议”升级在挑战外也可以购买",
      cost: n(100),
      unlocked() {
        return hu("w", 12) || hu("w", 21);
      },
    },
    23: {
      title: "功能扩展 III",
      description:
        "解锁新的标签页，如果你在挑战中达到了1e16熵，可以获取挑战精华",
      cost: n(1e18),
      unlocked() {
        return hu("w", 13) || hu("w", 22);
      },
    },
    24: {
      title: "功能扩展 IV",
      description:
        "在熵挑战中，如果某一项资源对熵的加成小于1，则不受熵指数影响",
      cost: n(1e25),
      unlocked() {
        return hu("w", 14) || hu("w", 23);
      },
    },
    25: {
      title: "功能扩展 V",
      description: "熵的指数加0.5",
      cost: n(1e35),
      unlocked() {
        return hu("w", 15) || hu("w", 24);
      },
    },
    31: {
      title: "游戏体验 I",
      description: "自动购买处理器升级",
      cost: n(50),
      unlocked() {
        return hu("w", 21);
      },
    },
    32: {
      title: "游戏体验 II",
      description: "自动购买中子定理",
      cost: n(1e6),
      unlocked() {
        return hu("w", 22) || hu("w", 31);
      },
    },
    33: {
      title: "游戏体验 III",
      description: "在挑战中，仍然保留自动购买升级",
      cost: n(1e19),
      unlocked() {
        return hu("w", 23) || hu("w", 32);
      },
    },
    34: {
      title: "游戏体验 IV",
      description: "自动购买“奇异反应堆”",
      cost: n(1e27),
      unlocked() {
        return hu("w", 24) || hu("w", 33);
      },
    },
    35: {
      title: "游戏体验 V",
      description: "“希望共鸣”的效果始终处于最大值",
      cost: n(1e40),
      unlocked() {
        return hu("w", 25) || hu("w", 34);
      },
    },
    41: {
      title: "资源加成 I",
      description: "每个温暖升级使熵的指数加0.1",
      effect() {
        let a = n(0.1).mul(player.w.upgrades.length);
        return a;
      },
      effectDisplay() {
        return "+" + format(ue(this.layer, this.id));
      },
      cost: n(150),
      unlocked() {
        return hu("w", 31);
      },
    },
    42: {
      title: "资源加成 II",
      description:
        "如果所有中子研究都已被购买，则剩余的中子定理倍增中子素和简并次数获取",
      effect() {
        let a = n(1);
        if (
          player.n.theorems
            .add(87)
            .lte(
              gba("n", 11)
                .add(gba("n", 12))
                .add(gba("n", 13))
                .add(gba("n", 14)),
            )
        )
          a = n(1.2).pow(player.n.theorems);
        //用lte为了避免后续两个数值都很大，超出浮点数
        if (a.gte(10)) a = a.div(10).pow(0.1).mul(10);
        return a;
      },
      effectDisplay() {
        return "×" + format(ue(this.layer, this.id));
      },
      cost: n(1e7),
      unlocked() {
        return hu("w", 32) || hu("w", 41);
      },
    },
    43: {
      title: "资源加成 III",
      description: "弱化“希望共鸣”效果超过3时的软上限",
      cost: n(1e20),
      unlocked() {
        return hu("w", 33) || hu("w", 42);
      },
    },
    44: {
      title: "资源加成 IV",
      description: "弱化1e40能量的软上限(^0.1→^0.12)",
      cost: n(1e29),
      unlocked() {
        return hu("w", 34) || hu("w", 43);
      },
    },
    45: {
      title: "资源加成 V",
      description: "弱化1e1000思念的软上限",
      cost: n(1e41),
      unlocked() {
        return hu("w", 35) || hu("w", 44);
      },
    },
    51: {
      title: "解锁挑战 I",
      description: "解锁第四个熵挑战",
      cost: n(1e8),
      unlocked() {
        return hu("w", 41);
      },
    },
    52: {
      title: "解锁挑战 II",
      description: "解锁第五个熵挑战",
      cost: n(1e10),
      unlocked() {
        return hu("w", 42) || hu("w", 51);
      },
    },
    53: {
      title: "解锁挑战 III",
      description: "解锁第六个熵挑战",
      cost: n(1e21),
      unlocked() {
        return hu("w", 43) || hu("w", 52);
      },
    },
    54: {
      title: "解锁挑战 IV",
      description: "解锁第七个熵挑战",
      cost: n(1e30),
      unlocked() {
        return hu("w", 44) || hu("w", 53);
      },
    },
    55: {
      title: "解锁挑战 V",
      description: "解锁第八个熵挑战<br>解锁一个距离升级",
      cost: n(1e44),
      unlocked() {
        return hu("w", 45) || hu("w", 54);
      },
    },
  },
}); //温暖 W

addLayer("t", {
  infoboxes: {
    introBox: {
      title: "Test",
      body() {
        return "经典测试层级，QqQe308树的标配";
      },
    },
  },
  name: "test",
  symbol: "T",
  position: 0,
  startData() {
    return {
      unlocked() {
        return true;
      },
      clickables: { [11]: 0 },
    };
  },
  color: "#ffffff",
  type: "none",
  exponent: 1,
  row: "side",
  layerShown() {
    return true;
  },
  tooltip: "测试",
  devSpeedCal() {
    let dev = n(1);
    if (gcs("t", 11)) dev = n(0);
    // if(isEndgame()) dev=n(0)
    return dev;
  },
  update(diff) {
    player.devSpeed = tmp.t.devSpeedCal;
  },
  clickables: {
    11: {
      title() {
        return "暂停";
      },
      display: "点击以暂停游戏，再次点击恢复。",
      onClick() {
        if (gcs("t", 11) == 1) setClickableState("t", 11, 0);
        else setClickableState("t", 11, 1);
      },
      canClick() {
        return true;
      },
      unlocked() {
        return true;
      },
    },
    12: {
      title() {
        return "软重置";
      },
      display: "如遇bug或炸档，请暂停游戏，并点击以重置各层级资源。",
      onClick() {
        player.points = n(0);
        player.h.points = n(0);
        player.a.points = n(0);
        player.p.points = n(0);
        player.P.points = n(0);
        player.y.points = n(0);
        player.y.yearning = n(0);
        player.P.computility = n(0);
        player.p.energy = n(0);
        player.a.wormhole = n(0);
        player.a.electron = n(0);
        player.a.proton = n(0);
        player.a.neutron = n(0);
      },
      canClick() {
        return true;
      },
      unlocked() {
        return true;
      },
    },
  },
}); //测试
addLayer("A", {
  infoboxes: {
    introBox: {
      title: "成就",
      body() {
        return "显示游戏中的所有成就，他们没有什么奖励，大部分也不需要刻意去做才能完成。<br>每行成就代表了一个层级，并且字数依次递增哦！<br>部分成就名来源于音游曲名与解谜题目";
      },
    },
  },
  startData() {
    return {
      unlocked: true,
    };
  },
  color: "yellow",
  row: "side",
  tooltip() {
    return "Achievements";
  },
  achievementPopups: true,
  tooltip: "成就",
  achievements: {
    //每层一行成就，第n行的成就有n字
    //注释为成就名来源
    11: {
      name: "始",
      done() {
        return hu("d", 11);
      },
      tooltip: "进行第一次跳跃",
    },
    12: {
      name: "启",
      done() {
        return hu("h", 11);
      },
      tooltip: "购买第一个希望升级“开始航行”",
    },
    13: {
      name: "彩", //音游
      done() {
        return player.points.gte(100);
      },
      tooltip: "获得 100 航迹",
    },
    14: {
      name: "光", //音游
      done() {
        return player.h.points.gte(50);
      },
      tooltip: "获得 50 希望粒子",
    },
    15: {
      name: "续",
      done() {
        return hu("d", 12);
      },
      tooltip: "进行第二次跳跃",
    },
    21: {
      name: "诞生", //US-TC
      done() {
        return player.a.points.gte(1);
      },
      tooltip: "获得第一个反物质",
    },
    22: {
      name: "加速",
      done() {
        return hu("a", 15);
      },
      tooltip: "解锁第三个反应堆",
    },
    23: {
      name: "自动",
      done() {
        return hu("h", 25);
      },
      tooltip: "自动凝聚希望",
    },
    24: {
      name: "暗格", //SECO2
      done() {
        return player.points.gte(1e12);
      },
      tooltip: "航迹超过1e12",
    },
    25: {
      name: "延续",
      done() {
        return hu("a", 25);
      },
      tooltip: "获得第10个反物质升级“再启新篇”",
    },
    31: {
      name: "生成树", //US-TC
      done() {
        return hm("p", 0);
      },
      tooltip: "获得第1个聚变核心",
    },
    32: {
      name: "开心病", //音游
      done() {
        return hu("p", 13);
      },
      tooltip: "解锁第三个能量条",
    },
    33: {
      name: "联络处", //SECO2
      done() {
        return hm("p", 2);
      },
      tooltip: "解锁“希望共振”",
    },
    34: {
      name: "四方谜", //CCBC16
      done() {
        return hm("p", 3);
      },
      tooltip: "获得第4个聚变核心",
    },
    35: {
      name: "三字谜", //CCBC16
      done() {
        return hm("p", 4);
      },
      tooltip: "获得第5个聚变核心",
    },
    41: {
      name: "中心思想", //CCBC16
      done() {
        return hm("P", 0);
      },
      tooltip: "获得第1个处理器",
    },
    42: {
      name: "子虚乌有", //CCBC16
      done() {
        return hm("P", 1);
      },
      tooltip: "获得第100个处理器",
    },
    43: {
      name: "黄金比例", //CCBC16
      done() {
        return player.P.points.gte(161803.39);
      },
      tooltip: "获得161803.39个处理器",
    },
    44: {
      name: "自树一帜", //CCBC16
      done() {
        return player.points.gte(1e50);
      },
      tooltip: "获得1e50个航迹",
    },
    45: {
      name: "终极引用",
      done() {
        return hu("P", 24);
      },
      tooltip: "获得被动获取处理器",
    },
    51: {
      name: "红豆生南国",
      done() {
        return hu("y", 11);
      },
      tooltip: "获得第一个思念升级",
    },
    52: {
      name: "科学记数法", //CCBC16
      done() {
        return player.y.points.gte(1e5);
      },
      tooltip: "获得1e5思念",
    },
    53: {
      name: "数字狂想曲", //SECO2
      done() {
        return player.y.points.gte(18446744073709551616);
      },
      tooltip: "获得18446744073709551616思念",
    },
    54: {
      name: "心跳谜学部", //US-TC
      done() {
        return player.y.points.gte(1e50);
      },
      tooltip: "获得1e50思念",
    },
    55: {
      name: "思念无上限",
      done() {
        return player.y.points.gte(1e100);
      },
      tooltip: "获得1e100思念",
    },
    61: {
      name: "要按下按钮吗", //US-TC
      done() {
        return hm("n", 0);
      },
      tooltip: "第一次简并",
    },
    62: {
      name: "概率与波之形", //US-TC
      done() {
        return hm("n", 9);
      },
      tooltip: "简并 10 次",
    },
    63: {
      name: "量子力学传导",
      done() {
        return hm("n", 12);
      },
      tooltip: "简并 25 次",
    },
    64: {
      name: "微观基态验证",
      done() {
        return hm("n", 14);
      },
      tooltip: "简并 50 次",
    },
    65: {
      name: "彩虹上的彩虹", //US-TC
      done() {
        return player.n.theorems.gte(45);
      },
      tooltip: "获得 45 个中子定理",
    },
    71: {
      name: "道是无情却有晴", //SECO2
      done() {
        return player.e.points.gte(1);
      },
      tooltip: "获得 1 熵",
    },
    72: {
      name: "满园春色关不住", //US-TC
      done() {
        return player.e.maxpoints[0].gte(1000);
      },
      tooltip: "在挑战1中，获得 1000 熵",
    },
    73: {
      name: "我来秋浦正逢秋", //SECO2
      done() {
        return player.e.maxpoints[1].gte(1000);
      },
      tooltip: "在挑战2中，获得 1000 熵",
    },
    74: {
      name: "挑战初心从未改",
      done() {
        return player.e.maxpoints[2].gte(1000);
      },
      tooltip: "在挑战3中，获得 1000 熵",
    },
    75: {
      name: "新春征程永不息",
      done() {
        return player.n.theorems.gte(60);
      },
      tooltip: "获得 60 个中子定理",
    },
    81: {
      name: "能量沉默 复苏微笑",
      done() {
        return player.e.maxpoints[3].gte(1e10);
      },
      tooltip: "在挑战4中，获得 1e10 熵",
    },
    82: {
      name: "思念沉寂 破障重生",
      done() {
        return player.e.maxpoints[4].gte(1e10);
      },
      tooltip: "在挑战5中，获得 1e10 熵",
    },
    83: {
      name: "数值塌缩 再启征程",
      done() {
        return player.e.maxpoints[5].gte(1e10);
      },
      tooltip: "在挑战6中，获得 1e10 熵",
    },
    84: {
      name: "三重连环 破局反制",
      done() {
        return player.e.maxpoints[6].gte(1e10);
      },
      tooltip: "在挑战7中，获得 1e10 熵",
    },
    85: {
      name: "绝境反击 新层渐现",
      done() {
        return player.e.maxpoints[7].gte(1e10);
      },
      tooltip: "在挑战8中，获得 1e10 熵",
    },
  },
}); //成就

//春节快乐！

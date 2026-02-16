let modInfo = {
	name: "2026春节树",
	id: "HappyNewYear2026",
	author: "QqQe308",
	pointsName: "航迹",
	modFiles: ["layers.js", "tree.js"],

	discordName: "B站@QqQe308",
	discordLink: "https://b23.tv/nUimzD9",
	initialStartPoints: new Decimal(0), 
	offlineLimit: 1,  
}


let VERSION = {
	num: "2026",
	name: "春节树",
}

let changelog = `
<h2>v0.5 Beginning 2026/1/11～2026/2/16<br>
<h3>- 开始这份计划，进行基本构思<br>
- 更新前7个层级<br>
- 游戏结局： 航迹<br><br>
`

let winText = `春节快乐!!!!!!!!!!!<br>后续的更新很快就来！`



var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}


function canGenPoints(){
	let a = hu("h",25)
	if(hm("p",1)) a=true
	if(hm("n",1)) a=true
	return a
}


function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let m = getPointClick().mul(20)
	if(hm("p",1)) m=m.add(getPointClick().mul(30))
	if(hm("n",1)) m=m.add(getPointClick().mul(50))
		if(inChallenge("e",13)&&m.gte(1e20)) m=m.div(1e20).pow(0.01).mul(1e20)
	
return m
}

function getPointClick() {

	let m = new Decimal(1)
	if(hu("h",11)) m=n(2)
	if(hu("h",12)) m=m.mul(ue("h",12))
	if(hu("h",15)) m=m.mul(ue("h",15))
	if(hu("a",11)) m=m.mul(buyableEffect("a",11))
	if(hu("a",14)) m=m.mul(ue("a",14))
	if(hu("a",22)) m=m.mul(ue("a",22))
 if(hu("a",25)) m=m.mul(10)
 if(hu("p",11)) m=m.mul(tmp.p.energyEffect[0])
	if(hm("p",2)&&player.h.duration.gt(0)) m=m.mul(tmp.h.during)
	if(player.n.mult.gte(0)) m=m.mul(player.n.mult)
	
	if(m.gte(1e6)) m=m.div(1e6).pow(0.5).mul(1e6)//偷偷加个软上限
	
	let e=n(1)
	if(inChallenge("e",13)) e=n(0.2)
	if(hu("y",13)) e=e.add(buyableEffect("y",11))
	
	m=m.pow(e)
		return m
}


function addedPlayerData() { return {
 devSpeed: new Decimal(1),
 realTime: new Decimal(0),
}}


var displayThings = [
function() {
let a=""
return a}
]


function isEndgame() {
	return player.points.gte("1e750")
}

var backgroundStyle = {

}


function maxTickLength() {
	return(1e300) 
}



function fixOldSave(oldVersion){
}

function n(a) {
return new Decimal(a)
}

function gba(a,b) {return getBuyableAmount(a,b)}

function gcs(a,b) {return getClickableState(a,b)}

function ue(layer,id) {return upgradeEffect(layer,id)}

function ce(layer,id) {return challengeEffect(layer,id)}

function be(layer,id) {return buyableEffect(layer,id)}

function hu(layer,id) {return hasUpgrade(layer,id)}

function hm(layer,id) {return hasMilestone(layer,id)}

function hc(layer,id) {return hasChallenge(layer,id)}
//一大堆缩写

function createUpgrade(title, description, costValue, branches, effectFn, effectDisplayFn) {
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
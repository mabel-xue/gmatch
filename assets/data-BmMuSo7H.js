import{d as B,k as u,g as b,u as S,o as r,e as h,w as e,a,j as y,B as A,t as E,f as l,c as m,b as n,l as p,F as w}from"./index-rGXmS-dq.js";import{a as H,b as f,V as M}from"./VRow-DU7ZG77a.js";import{V as s}from"./VBtn-D2GhvE2i.js";const N={style:{height:"calc(100vh - 160px)"},class:"d-flex justify-center align-center"},z=B({__name:"ScrollView",props:{items:{type:Array,required:!0},random:{type:Boolean,default:!1}},setup(i){const c=i,t=u(-1),x=b(()=>{var d;return((d=c.items)==null?void 0:d[t.value])||"-"}),v=S(),o=u(),k=()=>{t.value=Math.max(t.value-1,0)},_=()=>{t.value=Math.min(t.value+1,c.items.length-1)},g=()=>{o.value=setInterval(()=>{t.value=Math.floor(Math.random()*c.items.length)},70)},V=()=>{clearInterval(o.value),o.value=null},C=()=>{v.push("/")};return(d,R)=>(r(),h(M,{class:"fill-height"},{default:e(()=>[a(f,{class:"fill-height",align:"center",justify:"center"},{default:e(()=>[a(H,{class:"fill-height d-flex flex-column"},{default:e(()=>[y("div",N,[y("h1",{style:A({fontSize:i.random?"50px":"120px"})},E(l(x)),5)]),y("div",null,[a(f,null,{default:e(()=>[i.random?(r(),m(w,{key:0},[l(o)?p("",!0):(r(),h(s,{key:0,"prepend-icon":"mdi-play",style:{width:"160px"},color:"primary",onClick:g},{default:e(()=>[n(" 随机 ")]),_:1})),l(o)?(r(),h(s,{key:1,"prepend-icon":"mdi-stop",style:{width:"160px"},color:"primary",onClick:V},{default:e(()=>[n(" 停 ")]),_:1})):p("",!0)],64)):(r(),m(w,{key:1},[a(s,{"prepend-icon":"mdi-skip-previous",style:{width:"160px"},color:"primary",onClick:k,disabled:l(t)===0},{default:e(()=>[n(" 上一个 ")]),_:1},8,["disabled"]),a(s,{"prepend-icon":"mdi-skip-next",style:{width:"160px"},color:"primary",onClick:_,disabled:l(t)===i.items.length-1},{default:e(()=>[n(" 下一个 ")]),_:1},8,["disabled"])],64)),a(s,{color:"primary",onClick:C},{default:e(()=>[n(" 返回 ")]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}))}}),F=["假如有一天你可以飞了，是因为?","描述一下理想的被单样式","喜欢的三种颜色","怕冷or怕热","有什么恐惧症吗(巨物、深海)","下雪天还是下雨天，why","喜欢的一个气味，why","早睡党or熬夜党","幸运数字是什么，why","周末出行 你选博物馆/公园/商场，why?","怕鬼吗，why","森林or海洋，why","最想旅行的地方，why","你更会思考 过去/当下/未来，why","你容易入睡吗","能思考决不动笔or能动笔决不思考，why","你想活到几岁，why","最讨厌做的一类家务，why","现在心情如何","日久生情or一件钟情，why","有收集什么东西的习惯吗","夏夜看星星or冬日堆雪人，why","一部可以n刷的番/动漫/电影/剧，why","最近使用最多的软件是什么","甜粽子or咸粽子","为现在努力的程度打个分数1-10，why","喝奶茶的甜度和冰度","日出or日落更让你心动，why","你能够很好的接受离别吗，why","想好下一顿吃什么了吗","如果有一位神明突然找你，它会是谁?","喜欢什么奶茶","谈过几任","如果有人喜欢你，你的反应?","因为什么被人夸过","受不了冷暴力or语言暴力，why","说出最喜欢的两种蔬菜","最讨厌的学科","三选一:文科or理科or艺术","最长的一段友谊维持了多久","火山or冰川，why","手枪和图书馆最大的区别是什么?","你是一个王国的统治者，你的王位该如何继承?","你是一个恐怖游戏里的怪物，你的恐怖之处在哪里?","高山和大树，谁更自由?为什么","你的仇人被困在沙漠中心，给TA一样东西吧?","最喜欢的3种水果","平常几点睡","喜欢的月饼口味","曾有过crush吗(crush指短暂、羞涩且热烈的喜欢),是什么样的人？","喜欢吃的一道菜","退休后想做什么呢，why","BE Or HE，why","擅长表达情感吗，why"],T=["上一段为什分手？","经历过哪几段恋情，分别在什么时候？","怎么知道自己喜欢女生？","和恋人吵架后是什么样？","遇到喜欢的人一般会主动还是被动？为什么","占有欲强吗？体现在哪","喜欢强制爱吗？","上次哭是因为什么？","喜欢什么性格的人？","恋人对同性好会吃醋吗","第一次发生关系是什么时候？","朋友经常形容自己的三个词","在座的你觉得谁最有故事？为什么","最不能接受另一半什么习惯？","谈恋爱期间会主动报备吗？会希望对方报备吗？","从前任那学到了什么？","同居过吗？多长时间？","你觉得吵架最伤人的话或者行为是什么？","亲亲的时候手喜欢怎么放？","喜欢什么样的长相？列举一个明星","追求别人一般会有什么实际行动？","感觉自己是个固执的人吗？为什么","为现在努力的程度打个分数1-10，为什么","退休后想做什么？","在年底之前,你最想完成的一件事是什么?","如果你可以向未来的自己提一个问题,那会是什么?","如果你要写一本书,那会是关于什么内容的?","你怎么看待恋爱中的仪式感？","生气时什么方式能够让你冷静下来？","你最欣赏自己性格中的哪一点?","选个人扳手腕"],q={1:["画蛇添足","泪流满面","狼吞虎咽","杯弓蛇影","狐假虎威","指鹿为马","金鸡独立","盲人摸象","一手遮天","眉飞色舞","五体投地","指手画脚","笨鸟先飞","牛头马面","回眸一笑","井底之蛙","隔山打牛","闻鸡起舞","画饼充饥","小鸟依人","虎头蛇尾","金蝉脱壳","对牛弹琴","装聋作哑","打草惊蛇","穿针引线","刻舟求剑","弱不禁风","目瞪口呆","掩耳盗铃","三头六臂","守株待兔","将心比心","摇头晃脑","东倒西歪","鸡飞狗跳","开门见山"],2:["章鱼","海狮","老鼠","猫头鹰","蝙蝠","壁虎","犀牛","乌龟","蜥蜴","鹦鹉","金鱼","鸽子","河马","猩猩","青蛙","蟑螂","海豚","眼镜蛇","狐狸","刺猬","蜗牛","羊驼","恐龙","鲨鱼","考拉","海马","蝴蝶","孔雀","企鹅","长颈鹿","螃蟹","树懒","猪","鸵鸟","袋鼠","熊猫","骆驼"],3:["电子秤","猫抓板","防晒霜","冲浪板","垃圾桶","拍立得","打火机","路由器","遥控器","手表","地球仪","魔方","鼠标","微波炉","口罩","剃须刀","古筝","订书机","保温杯","卫生纸","台灯","隐形眼镜","卷尺","相框","头盔","钱包","拖鞋","花露水","电风扇","手电筒","胶带","瑜伽垫","熨斗","洗碗机","闹钟"],4:["披萨","肉夹馍","冰淇淋","鸡爪","剁椒鱼头","饺子","蛋挞","沙拉","花生","葡萄","烤红薯","龙须糖","火锅","印度飞饼","爆米花","螺蛳粉","汉堡","榴莲","春卷","鸭脖","猪蹄","棒棒糖","热狗","通心粉","寿司","章鱼烧","汤圆","月饼","香蕉","果冻","甜甜圈","巧克力","咖啡","包子","冰糖葫芦"],5:["诸葛亮","马里奥","灰姑娘","卓别林","关羽","蜘蛛侠","梵高","玛丽莲·梦露","鲁智深","牛顿","武则天","爱丽丝","白娘子","米老鼠","达芬奇","钢铁侠","哪吒","扁鹊","丘比特","鸟叔","李小龙","美国队长","姜子牙","林黛玉","沙僧","特朗普","鸣人","迈克尔·杰克逊","郭靖","匹诺曹","容嬷嬷","蜡笔小新","哈利·波特","阿拉丁"]},D=["互相说出对方身上的一个特点","扳手腕","两个人手拉手5个深蹲","互相给对方安利一个东西","给对方讲笑话直到对方笑","打手心,两局","轮流报菜名,共10个不能重复","用方言聊天5句话","互相问一个真心话","互相说一句夸奖的话","互相挑战二选一","互相说出最重要的人","互相分享最近的烦恼","互相说出最害怕的东西","互相分享一个小愿望"];export{T as Q,z as _,F as a,D as d,q as n};
import React from "react";

// qna
export function PageQNA0(props) {
    const title = 'Q&A 为什么哲学是一种实践';
    const content = (
        <div className="content">
            <p>
                因为最无聊的事就是记住谁说了什么，
                <br/>以证明自己读过。
                <br/>或错以为出了名的人说说话就能指导人生。
            </p>
            <br />
            <p>
                哲学家又怎样，
                <br/>你瞧他生活里，是一个笨蛋。
                <br/>有讨人喜欢的笨蛋，有道德败坏的笨蛋，
                <br/>如果苏格拉底还活着，
                <br/>你多半会觉得，
                <br/>这真是个气人的笨蛋。
            </p>
            <br />
            <p>
                别误会，没有说笨蛋不好的意思。
            </p>
            <br />
            <p>
                因为观点没那么重要。
                <br/>我曾经以为它很重要，
                <br/>后来发现，如果世界是由观点改变的，
                <br/>那一定是哪里出了差错。
            </p>
            <br />
            <p>
                因为哲学不是智商的竞赛
            </p>
            <br />
            <p>
                因为being smart没能帮我们得到答案。
            </p>
            <br />
            <p>
                像抛球的小孩——
                <br/>一遍又一遍，把问题抛向空中，
                <br/>被另一个同伴接住。
            </p>
            <br />
            <p>
                因为你总会选择一条路走下去。
                <br/>走下去，你就是
                <br/>道路的化身。
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
} 

export function PageQNA1(props) {
    const title = 'Q&A 写作是什么';
    const content = (
        <div className="content">
            <p>
                写作是一种博弈：
                <br/>写作者与阅读者之间的博弈。
                <br/>讨好无用，赢是第一要义。
            </p>
            <br/>
            <p>
                第二切记兵不厌诈。
                <br/>尊重对手，
                <br/>别把他当傻子糊弄：
                <br/>他也在失败中吸取了经验。
            </p>
            <br/>
            <p>
                第三要知己知彼。
                <br/>世界上最了解你的人，
                <br/>不是你的爱人，
                <br/>而是你的敌人。
            </p>
            <br/>
            <p>
                第四，轻松一点。
                <br/>散场时记得握握手。
                <br/>当灯光暗下，
                <br/>发自内心地说句：
                <br/>“这是一场精彩的比赛。”
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
} 

export function PageQNA2(props) {
    const title = 'Q&A 对广告的热爱是什么';
    const content = (
        <div className="content">
            <p>
                ……反正不是对光辉岁月的追忆吧！
                <br/>如果是热爱，那应当是向前的。
                <br/>向前，一些人觉得那是往低处的溪流，
                <br/>我却想看看，它要到哪去——
                <br/>有没有良田美池，在柳暗花明后的，
                <br/>又一个村落……
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
} 

export function PageQNA3(props) {
    const titlesTabs = ['品牌是什么', '写同人对我的启发'];
    const titles = ['Q&A 品牌是什么', '写同人对我的启发'];
    const content = [
        <div className="content">
            <p>
                在客观世界的叙事缝隙里，
                <br/>创造属于一种符号（品牌名）的共有的记忆，
                <br/>让一个词语包含色彩、声音、触感、气味、味道、情感……
                <br/>并让体会到这些情感的人，
                <br/>连结在一起。
            </p>
        </div>,
        <div className="content">
            <p>
                作品不属于作者。
                <br/>品牌不属于企业。
                <br/>作者创作出材料——感官、叙事、关系……
                <br/>就像企业给出产品、价值、承诺、体验……
                <br/>但这些材料催化的是一个对话的场域。
                <br/>读者赋予意义。
                <br/>每一次对话，都轻微地篡改了
                <br/>作品的含义。
                <br/>而每一次消费，都如同一场对话。
                <br/>我们互换了一些东西……没人准确地知道那是什么。
                <br/>但我们从此拥有了一些
                <br/>共同的记忆。
                <br/>当我们念起这个名字。
                <br/>当每个后来的人到来，
                <br/>又成为我们。
            </p>
        </div>,
    ]

    return (
        <MultiContentContainer titlesTabs={titlesTabs} titles={titles} content={content}></MultiContentContainer>
    );
}

// fy
export function PageFY0(props) {
    const title = '翻译稿';
    const items = [
        {
            name: <p>英译中</p>,
            desc: [
                {
                    text: <p>L'OR Brand Book<br/>L'OR 咖啡品牌手册</p>,
                    date: <p>2022 - 05</p>,
                }
            ]
        },
        {
            name: <p>中译英</p>,
            desc: [
                {
                    text: <p>Corporate Branding Campaign 40 yrs anniversary<br/>百时美施贵宝四十周年企业品牌传播方案</p>,
                    date: <p>2021 - 05</p>,
                }
            ]
        }
    ]
    const content = (
        <ListContentLayout items={items}/>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
}

// wa
export function PageWA3(props) {
    const title = '商业计划书';
    const items = [
        {
            name: <p>敦研微生物</p>,
            desc: [
                {
                    text: <p>基于人体共生微生物的创新药<br/>用于疾病精准诊疗的共生菌生产数据化平台</p>,
                    date: <p>2022 - 03</p>,
                },
                {
                    text: <p>儿童龋齿早期筛查服务:<br/>基于口腔微生物的早筛试剂盒开发</p>,
                    date: <p>2022 - 06</p>,
                }
            ]
        },
        {
            name: <p>旌帛传媒</p>,
            desc: [
                {
                    text: <p>声激未来——有声读物“生态链”</p>,
                    date: <p>2021 - 07</p>,
                }
            ]
        }
    ]
    const content = (
        <ListContentLayout items={items}/>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
}

export function PageWA0(props) {
    const titlesTabs = ['概念文案', '展签文案'];
    const content = [
        <div className="content">
            <p className="title"><span className="sub">回想 回想/那心的铁片/也要发出轰响</span><br/>概念文案</p>
            <p>
                《回响》
                <br/>
                <br/>荷叶滴落泪水
                <br/>来不及  浸透书页
                <br/>一百年 一千年
                <br/>点燃一片通电的网
                <br/>
                <br/>回想 回想
                <br/>那心的铁片 
                <br/>也要发出轰响
            </p>
            <div className="sep"></div>
            <p className="left">
                项目背景：实验诗歌文本汉字设计与交互艺术装置。项目第一部分：问卷调查千余中国人心中浮现的古诗，选取其中具有代表性的诗句制作汉字字体设计实验海报。第二部分：展馆现场交互艺术装置，手写一句诗歌，神经网络生成计算机的情感“心声”。
                <br/>
                <br/>展览地点：浙江展览馆
                <br/>
                <br/>目标人群：观展群众、艺术爱好者
                <br/>
                <br/>概念搭建：通过短诗将项目两部分串联，赋予多层次的统一概念。以“距离”为核心概念轴点，传达今与古的距离、脑与心的距离以及艺术表达与艺术对象之间的距离。拆分诗句《回想 回想》为古诗实验海报部分标题；《心的铁片》为神经网络交互装置部分标题。
            </p>


        </div>,
        <div className="content">
            <p className="title"><span className="sub">回想 回想/那心的铁片/也要发出轰响</span><br/>展签文案</p>
            <p className="left">
                我们与万物的距离，永远言不尽意。词语是我们的故乡，而古诗是存在于历史的“过去式”，一个文化上完成、完结的集体，一个封存的梦。在21世纪的当下读古诗，是还魂的乡愁带领我们去梦别人的梦，却使我们真正成为我们自己。古诗提醒着我们：艺术是不断失去的当下，我们是永远伸往过去的手。来自4-18岁受访者的一千多份诗句调研问卷，缓缓打开这本梦的合集：你最喜爱哪首古诗，缘何喜爱？——是壮志，遥想长风破浪会有时；是洒脱，千金散尽还复来；是万古难全，月有阴晴圆缺……
                <br/>
                <br/>机器是我们的镜子，是牙牙学语的儿童。我们制造人工智能，力图破解和复刻心智的秘密。交互程序邀请我们写下此刻涌上心头的一句诗，通过神经网络读取计算诗句中的情感，回馈属于这首诗的视觉元素，让古与今、心与脑以诗相连。日出江花红胜火——在点燃的神经网络里，这一份美，机器是否也能领略？它是否也像我们一样，面对万物，想靠近一点，再靠近一点……
            </p>
        </div>,
    ]

    return (
        <MultiContentContainer titlesTabs={titlesTabs} content={content}></MultiContentContainer>
    );
}

export function PageWA1(props) {
    const content = (
        <div className="content">
            <p className="title"><span className="sub">飒 Stranding Air 品牌宣讲会</span><br/>主题Slogan<br/><span className="sub">2022</span></p>

            <p className="left">
                #定理一：先行动再说！
                <br/>
                <br/>#定理二：1加1永远大于2
                <br/>
                <br/>#定理三：无契约，不商业
                <br/>
                <br/>#定理四：知己知彼，化敌为友
                <br/>
                <br/>#定理五：不要为了幸福去奋斗，要幸福地奋斗                    
            </p>

            <div className="sep"></div>
            <p className="left">
                项目背景：飒Stranding Air高校宣讲会《青年之声》，演讲稿及PPT撰写
                <br/>
                <br/>演讲地点：杭州天目里
                <br/>
                <br/>受众：现场观众，以艺术创作者、高校学生为主
                <br/>
                <br/>目标：以宣讲者的个人商业探索经历为主线，使现场受众相信自由职业、灵活就业、以及跨领域内容合作的可能性，沟通“为什么要选择 飒”的理由。深入浅出、呼吁“行动”、普及盲区、传递“创作可以是自由和幸福的”的品牌理念。
            </p>

        </div>
    );

    return (
        <SingleContentContainer content={content} />
    );
}

export function PageWA2(props) {
    const content = (
        <div className="content">
            <p className="title">品牌宣言 飒立于风<br/><span className="sub">2022</span></p>
            <p>
                《飒》
                <br/>
                <br/>追风者摇摆，精力耗费在每一次的风吹草动。
                <br/>逆风者挣扎，对抗中反复确认存在的价值。
                <br/>我们既不急于追赶，
                <br/>亦不苦于抗衡。
                <br/>
                <br/>我们确信：
                <br/>每一份才能都是这世界独一无二的坐标；
                <br/>每个作品，都借风而来。
                <br/>
                <br/>飒，立于风。
            </p>
            <div className="sep"></div>
            <p className="left">
                项目背景：去中心化创作者联盟品牌宣言，对内构建品牌核心价值，对外传递品牌理念，唤起情感共鸣。
                <br/>
                <br/>核心受众：艺术创作者、内容创作者
                <br/>
                <br/>咬文嚼字：
                <br/>飒取字形拆分的“立于风”，在飒的字面含义——飒爽、独立——之上再增添一层冲突含义：笃定、从容、不随波逐流，在时代演变中不怀疑自己独一无二的价值。
                <br/>
                <br/>风还能够bring together不同的才能，代表汇聚和融合，贴合联盟“跨媒介创作者合作”的卖点。
                <br/>
                <br/>最后两句既要有“好风凭借力，送我上青云”的联想，又要有如有风来的爽利语感。
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} />
    );
}

export function PageWA4(props) {
    const content = (
        <div className="content">
            <p className="title">毕业演讲 长文案<br/><span className="sub">2022</span></p>
            <p className="left">
                （节选）
                <br/>诸位，今天，我们毕业了！带着欣喜、激动，去寻找新的机遇，迎接新的挑战。今天，我们心怀无数梦想，明天，将用自己的力量将前路照亮！
                <br/>
                <br/>以上是我从百度粘贴的内容。
                <br/>
                <br/>是这样的吗？好像不是这样的。
                <br/>
                <br/>……
                <br/>
                <br/>2020年全球新冠爆发，中国以最快的速度控住了疫情。我们以为自己上了战场，人类又一次战胜了自然；可是我们凯旋归来，发现家园已是一片废墟。今天，在后疫情时代的2022年，我们要捡起地上的砖瓦，努力重建我们的生活。
                <br/>
                <br/>我才意识到，时代的湍流是不等人的。而成长意味着一个接一个的问题，而不是答案。
                <br/>
                <br/>……
                <br/>
                <br/>相信大家在毕业前夕，都被朋友圈里的一些新闻刷屏了。面对恶性的社会事件，以及一轮又一轮的互联网骂战，许多心怀善意的人可能都会感到沮丧，人类的躯体和声音似乎都如此脆弱。我们忍不住问：这就是你我揣着各自尚不成熟的技能和一颗单纯的心，即将奔赴的世界吗？
                <br/>
                <br/>这一点的技能，和这颗心，就是我们全部的武器了。
                <br/>
                <br/>……
                <br/>
                <br/>上海封控初期，我经历了物资匮乏和就医困难两座大山。网购的物流滞后、暂停，买菜平台的蔬菜在开售几秒内一抢而空。
                <br/>
                <br/>这个时候我才意识到，我们已经如此习惯于轻松、便捷的生活，习惯于动动手指，你想要的东西就送到了你的家门口。而这背后是怎样的一个系统，这件货品经手了多少物流工人、快递小哥，却是我们长期以来视而不见的。在疫情无差别的攻击下，我们才好像忽然想起，他们也是和我们一样脆弱的人，而不仅仅是系统里的一个功能，一个按键。
                <br/>
                <br/>……
                <br/>
                <br/>也许未来有一天，我们会行至水流湍急处，个人危机的旋涡与时代的险境接踵而至。会站在道德的十字路口，面对善与恶的抉择。
                <br/>
                <br/>在那样的时刻，希望我们不要忘记：我们曾经聚在一起，关心自己的亲人、朋友、和无数远方的陌生人。
                <br/>
                <br/>希望我们不要忘记，我们曾经因为有着发现、体会、创造美的愿望而聚集在此地。我们曾经在毕业的舞台上用艺术的力量为弱势群体、为那些受苦的人发声。这是我们身为艺术创作者的使命。
                <br/>
                <br/>在文学巨著《卡拉马佐夫兄弟》里，陀思妥耶夫斯基借阿廖沙的口，在巨石旁对朋友们发表了一篇演说。那也是一个告别的时刻。阿廖沙说：首先我们善良，然后我们正直，然后——我们将彼此永不相忘。
                <br/>
                <br/>只要我们能回忆起此刻 “被一种善良而美好的感情连结在一起”，我们就没有无法共同渡过的险境，我们今天，也无须彼此道别。
                <br/>
                <br/>谢谢大家！
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} />
    );
} 

export function PagePW3(props) {
    const content = (
        <div className="content">
            <p className="title">电影短评《色戒》<br/><span className="sub">2022</span></p>
            <p className="left">
                王佳芝看爱情电影流泪，当忍辱负重变成笑话之后她还是拿仅剩的钱买电影票，坐在电影院为爱情流泪。然而爱情叙事一次次被抗战叙事打断。她的人生插播了一段战争宣传片。
                <br/>
                <br/>她从此知晓秘密：原来她被纯真的爱情骗进纯真理想的陷阱，而在巨大的谎言中间又窥探到了爱情的一点真。“快跑。”她决定演完这场爱情故事。这一次她不会被打断了。
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content}/>
    );
}

export function PagePW0(props) {
    const titlesTabs = ['写作指导 文本分析', '个人随记'];
    const content = [
        <div className="content">
            <p className="title">写作指导 文本分析<br/><span className="sub">2019</span></p>
            <p className="left">
                这是“叙述者”按捺不住情绪的时刻。A想要唤醒B的情绪，通过叙述者的语气传达了—— 如此迫切地想要B回应，仿佛母亲对孩子的循循善诱:“你⻅过吗”，“你的A老师”...... “血黏得像拔丝的糖”是典型的小⻦老师式血腥猎奇美学。以最甜蜜写最残酷，以最残忍写最幸福。包括前面写B自杀，一种动植物性质的自杀，像⻘草一样呼吸，伤口像⻥鳃，血流是柔美丝状的小喷泉。写比喻，一定要抛弃一件事物最容易最方便的联想......一定要耐心，灵感、积累缺一不可。“反”写是最普遍也最能出奇制胜的手法。
                <br/>
                <br/>然后又是漫⻓的铺垫，A老师回到他藏匿着巨大恐怖的日常生活，全部为了全文的最后一 段:“世界上最后一个美丽的⻓镜头是A喝农药的全过程。”这是好干脆的死，然后立刻收尾，没有多余的一点煽情和阐释。回想B的自杀，用了多少篇幅？为什么呢？到这里我觉得你应该能理清作者的排布了。我只再提最后一点，人物逻辑上，⻘少年轻飘飘地去死了，成年人郑重地殉情，所以 “爱情是弹尽粮绝时战场上方传来的挽歌”。人物逻辑、手法——形式——体现在叙事者的态度——体现在作者的态度上，对立是显性的，所有的安排都有其目的所在。 这样一个有情的、与命运同在的、狡猾的、又无比脆弱的叙事镜头，总使我联想到第一次读这篇文时让我心惊的那个比喻：“唱机滚落到书籍上，一卡一卡的开始自转，发出神明口吃的声音”。
            </p>
        </div>,
        <div className="content">
            <p className="title">个人随记</p>
            <p className="left">
                高中时那些白人男老师像无害的大型兔子，在叽叽喳喳的学生中间不知所措，搜肠刮肚半天也只能说出一句不痛不痒的“guys you're not supposed to do that”; 我最喜欢的一个老师，身材高大个性懒散，整节课地播放本应该留作作业的小说的音频，我偷偷瞄他: 目光涣散，捧着 kindle的手半小时都不动一下。我们一直以为他不喜欢我们且懒得教我们。最后一节课，我们围坐一圈，他给我们念了童话书，给了我们每个人一封他亲手写的信。他站在讲台中央理应讲些祝福的话，却眼圈红红耳朵红红，一个字说不出，第一排的男生忍不住要喊，“C'mon man”。我很久之后才明白，我们能如此是因为那时候我是kid，后来我念了大学，校园里随处可见和我高中老师一样的白男，但我变成了亚洲人、中国人、女人，我们在彼此眼里都成了应当被宽容的傻逼 
            </p>
        </div>,
    ];

    return (
        <MultiContentContainer titlesTabs={titlesTabs} content={content}></MultiContentContainer>
    );
}

export function PagePW1(props) {
    const content = (
        <div className="content">
            <p className="title">剧评《进击的巨人》<br/><span className="sub">2021</span></p>
            <p className="left">
                观感上和多年前看行尸走肉差不多⋯⋯本质上都是从“非人性”的到“过于人性”的故事推进，看到第四季已经很疲惫，谏山创努力地填坑，或者说已经在远超期待地填坑，补完了故事的B面，填充了很多细节，可以看出剧情在他的把控之内，当然这既可以说作是巧思也可以说是匠气。
                <br/>
                <br/>阿尔敏烧焦的时候我要心梗了，面对救埃尔文还是阿尔敏的抉择时我觉得这是我忍耐的极限了⋯⋯没想到后面还有，埃尔文举起手的一刻⋯⋯作为全作最纯洁的两个人物，选哪一个都扭转不了他们的悲剧性：埃尔文的死正是阿尔敏命运的预言，因为纯洁而成为恶魔，在成为恶魔的过程里才被视作半神，最后剩下了什么，只有疲惫，所以理解的人才要放手。杀的是我们在他们身上的寄托(但他们也的确⋯因此更加纯洁)。团兵两个人各自的线都在前情里都趋于饱满了，这一刻的交汇里才能够迷人。
                <br/>
                <br/>对剧情的好感差不多到这里就结束了，第四季真的烂，不单是制作的问题，我能理解为什么观众会失望，前期悬念吊得那么高，最后却以最合常理最容易猜想的方式解答了，人的斗争，人的政治。第四季运用了一个批判主角的范式，但未免过于直白，事无巨细把观众当做傻子教育，善因得恶果很好，事与愿违的安排也没问题，但谏山创太想要完整了，这种想做伟大作品的野心简直不可理喻。
                <br/>
                <br/>另一个让人疲惫的点是，难道我们只有存在主义这一条路可以走？前进是什么意思，前进的意思是there is no promised future，我们只能向前，是“不得不”，在选择里否定选择。这一困境广泛地存在于这一代作者的弑父母题里：我想要你的爱，你的认可，但我只有杀了你才能超越你，这也是 “不得不”，为时代和命运推动下的必然。如果这是作者想表达的“前进”的悲剧性，好，i'll take it，但用这样的体量去写，太笨重了，我不喜欢。
                <br/>
                <br/>(虽然对人物还是有很多的感情和不舍⋯⋯谁一路看下来不想说，唉，艾伦，小可怜呢！作者想要在这个人物身上传达的东西过载了，连观众都忍不住觉得他无辜)
                <br/>
                <br/>巨人让我不适的还有一点，谏山创自始至终对艾伦都有一种嘲讽的视角/声音，既不幽默也不高明，完全是为了取笑而取笑，这个角色就在他的掌心被抛来抛去，我极其怀疑艾伦的状态被他的心情状态过度影响⋯⋯这其中的不协调感就是因为他既承认又否定，既想在艾伦身上创造意义又时刻忍不住嘲讽这么做的自己。
                <br/>
                <br/>也可以这么解读:艾伦体现了作者对少年漫genre传统的觉察和自反性以及对该类别主角行为意图和行为习惯的一种质问。我更倾向于，他是在创作的中途逐渐产生了这种意识，而于这种意识到达高峰时创造出了贾碧。他怕读者看不出他的技巧所以把初始艾伦在贾碧上放大了——自反性必然会带来不适，如果说贾碧之前的艾伦让人勉强忍耐，贾碧之后的艾伦就让人于心不忍了。在这样的作品里主角之所以是主角是超验的，临近结尾放出贾碧这样的角色鞭打，轻浮且残忍，哪怕有命运的对照，贾碧都不会是艾伦，不为别的原因，只因为艾伦是主角，他必须随身携带动机、线索、意义、推动故事的责任、动态角色的灵活性。谏山创不是在指责过去的艾伦，而是将现在的艾伦也一并否定了。
                <br/>
                <br/>甘蔗没有两头甜，用少年漫讲反少年漫，却用了如此粗劣的手法，最后连角色都抛下了。贾碧可怜，艾伦更可怜。
                <br/>
                <br/>再发散一点，联系上条提到的这一代作者的弑父母题在巨人剧情里的体现，其实和谏对少年漫传统的矛盾态度是一致的，父辈(的作品)难以超越，我们对少年漫(的套路)的理解和期待正是被那些作品训练习得的，如何利用的同时反思和创新，这个事是个创作者都会想，就算不能四两拨千斤，也不要包袱这么重吧。            
            </p>


        </div>
    );

    return (
        <SingleContentContainer content={content}/>
    );
}

export function PagePW2(props) {
    const titlesTabs = ['唐探3', '刺杀小说家', '你好，李焕英'];
    const content = [
        <div className="content">
            <p className="title"><span className="sub">影评 2021春节档</span><br/>唐探3</p>
            <p className="left">
                唐探3是因为坎老师想要就可以有临时加塞的一部，我没看过唐探系列，也很久没怎么看国内商业片，几乎全程处于一种惊疑状态：这是拼贴布风格创新吗，国产电影现在是这样的吗，剧情台词像日本动画片，拍摄像1.5倍速游戏trailer，氛围像综艺或情景主题乐园(甚至是西部世界里的那种主题乐园) ，音乐使用大杂烩，跳水死那里的歌我想到来吧甜蜜的死亡，循空洞美声找人像森本晃司的她的回忆，Q组织是各种动画片里幕后神秘邪教组织，主要由老头构成，椅子设计很Seele( 有椅背灯还是没有来着？记不清了) 除了直接cue漫威，解谜也cite教程，核心道德困境直接使用最简化版电车难题，除此之外，由于被坎老师洗脑，字幕里的每一个走字都仿佛跳出幕布，笔直地走，轻盈地走。
                <br/>
                <br/>结尾烟花放得我惊掉下巴(长到让人感到诡异)，然后英雄们站在世界之巅宣……..叙事和风格肉眼可见的破碎。观看过程中我的惊疑是，电影选取了不同国家和题材下最容易被人记住的风格特点,四处Cite , 你知道哪段台词在对哪个群体吹口哨打招呼，年龄，阶级，亚文化群体……它想讨好几乎所有人，那它注定不可能是连贯的，你对内容的理解要建立在你对其他作品的记忆和理解之……最终获得一种熟悉感。
                <br/>
                <br/>这是商业片的取巧,遮不住的东西无限放大变成风格，我在想是不是因为故事地点选在日本，所以在风格上要去靠近日本（ /我们基于流行文化对日本的体验感）这种援引行为和文本之间存在的联系从影史上看是常见且必然的，只不过在cite流行文化的时候,所援引的往往是一个空壳子（我们对不存在之事物的记忆）……商业片有商业片的规则，我觉得唐探3不算成功吧，虽然它赚很多钱，我总觉得它赚到的是无论如何都会赚到的那部分凑热闹钱，它投机的拼贴布拍片法(据我观察)大家好像并不买账，那你说它是援引不奏效呢，还是它过于奏效之后观众抵触呢，不知道，值得简单撕烤一下
            </p>
        </div>,
        <div className="content">
            <p className="title"><span className="sub">影评 2021春节档</span><br/>刺杀小说家</p>
            <p className="left">
                刺杀小说家，我觉得是可以看的，我这样对我室友说了，她看完告诉我她就没见过这么难看的片（不应该啊） ，理由是太零碎逻辑不通无法入戏，人物脸谱化，角色动机无解释。我其实忍不住替这部电影说话（一般来说一部电影只要没烂到一无是处我都是愿意琢磨琢磨…） 因为我觉得它的形式/风格有篡改内容的含义
                <br/>
                <br/>我挺喜欢服道的，那个灯笼做的龙看起来格外邪。现实线更像虚构，因为你在现实线里几乎看不到活人，巷子里拿台球打架，居然不会打扰到别人的生活，图书馆管理员老头像一个僵尸，嚼空文舌根的邻居阿姨就是个只提供主线信息的NPC，而人群大概都像红发鬼投影手掌底下起伏的傀儡，所以现实线更鬼气森森阴气逼人，所以根本不是空文笔下的玄幻故事改变了现实世界相关人物的运作规则/&现实世界的因果是疑心病罪犯大老板想要抹除罪证......
                <br/>
                <br/>而是整个现实世界都由小说的逻辑构建，角色的功能就是完成情节。我也不好说导演就一定抱着这样清晰的目的，但风格上它高度可疑( &和内容是一致的) ；我怀疑剧本的某一稿想做 loop , 但最终呈现效果是这样，肯定不算好，不过在我心里还算有意思，self-reflexive , 在类型下夹了点私货。想看看这个导演别的作品
            </p>
        </div>,
        <div className="content">
            <p className="title"><span className="sub">影评 2021春节档</span><br/>你好，李焕英</p>
            <p className="left">
                李焕英，让我说什么好，再自闭耳目我也能听见一些态度，“特别好”“没那么好”，后者是对前者的回应，足够体现问题了。我那场是满厅，我坐最后一排的角落，能听见周围人(大声)的聊天……让我意识到我们每个人觉得理所当然如此的东西差异可以如此之大。时空设定，我旁边的小情侣说看不懂，无笑点的地方，说这电影没意思，结尾处两个人抱在一起哭。
                <br/>
                <br/>这不是一个高级低级或正确错误理解的问题，我始终觉得电影自出生起就是大众娱乐产品，那么对大众来说看电影最大的价值是凑热闹的价值，一种群体聚集活动（所以也会产生聚集活动里的一些矛盾，比如有人占了我的坐，导致我以为自己走错排，想问一问结果被骂：你找个空座坐下就得了…….倒是感觉挺春节的) ，并在聚集后和别人有讨论的话题。
                <br/>
                <br/>我是看完才知道大家都觉得这是单/双穿越……贾玲刚回到过去的时候我笃定不是穿越,因为这也太生硬了……再看到贾玲想改变过去，就自然而然就代入了我认为最合理的情况：出于某种过于迫切的愿望，偏要强求挽回失去的事物，在梦里试图修正过去（在这之后我几乎就没考虑过穿越的问题）。贾玲撕妈妈结婚证妈妈说她这辈子过得值得的时候，给妈妈的特写，用的是仰拍，我当时觉得奇怪，不明白为什么要这样用。往后看，虽说从这里梦境就开始坍塌了，但其实现实的作用力从一开始就存在，做梦的大脑是已经消化过现实事件的大脑，现实避无可避，只能以别的方式呈现，具体到情节上，就是强迫美满结局过程中遇见的种种困难, 然而越困难，越一定要改…越要做梦，因为心灵尚不能接纳碎裂的真实。
                <br/>
                <br/>当沈腾那个角色说他把机会让给了现实中他的妻子的那个角色时，梦境就已经岌岌可危了，理智在回笼，事物要回到正轨，那个缝出图案的补丁是梦醒的信号，贾玲要拼命地跑……她马上就要见不到妈妈了。因为我没有考虑穿越的问题，对于这段我只能如此理解，但其实穿越与否并不重要，因为穿越的核心就是知情和篡改，而电影的结局妈妈离开了，敞篷车里只有贾玲一人，她在梦里做过的事没有改变现实分亳；仰拍的妈妈被赋予了知情者的视角，她洞悉一切，如此了解女儿的愿望，因此在扭转的视角里贾玲补完了所有知情的妈妈可能出现的地方。现实里妈妈没有参与这样的过程，所以从头至尾都是贾玲一个人走完的路，她抗拒，但她最终和解了，人不和解就没办法继续往下走。这是我们在失去重要的人/事物时会独自走完的路……在心里使被失去之事物成为纯洁的永恒。电影里贾玲这样强求，不禁让人想到她本人也如此强求过——真是真在这样的地方，愿望是让另一个人幸福的愿望。
                <br/>
                <br/>梦境prepare我们回到残酷的现实世界。这段路很孤独，但这是我们唯一能够达成圆满的方式：你在这里，且此前此后你都将无处不在。
                <br/>
                <br/>*关于搞笑的问题，电影里很多地方都是对过去小品的致敬，因为贾玲的个人经历而增添了说服力，多多少少勾起些我们对朴素过去的回忆。看完之后我在想，我们要如何搞笑？怎样的搞笑是正当的？这其实很难判断，因为我们只能看到被搞笑的部分，不能看到没有被搞笑的部分，因此只能有一个对作者态度模糊的判断：什么东西是可以拿来搞笑的，什么东西不能。屎尿屁的搞笑总归要比针对人种偏见的搞笑要高贵和干净一些，但其实这个问题应该是这样：所有[一些事物可以拿来搞笑而另一些不能]的假设都暗含了欺压，而如果任何事物都不能拿来搞笑，就意味着，所有的一切都可以拿来搞笑……于此我们只能去考察作者的言行，去考虑语境，无法独立地对事件做判断，所以它见仁见智，也因此需要更多批评的声音。
            </p>
        </div>,
    ]

    return (
        <MultiContentContainer titlesTabs={titlesTabs} content={content}></MultiContentContainer>
    );
}

export class PageGZH0 extends React.Component {

    render() {

        const title = '公众号推文';
        const cardTitle = '产品设计 | 时间的礼物 | 师承原研哉，异国土壤上流放故乡的花';
        const cardSubtitle = '时间的礼物，名为度过。';
        const link = 'https://mp.weixin.qq.com/s/40TYZ7xDewrv8qV8FYNaWw';

        return (
            <SingleContentContainer content={<CardContentLayout title={cardTitle} subtitle={cardSubtitle} link={link}/>} title={title}/>
        );
    }
}

export class PageGZH1 extends React.Component {

    render() {

        const title = '公众号推文';
        const cardTitle = '装置艺术| 回想 回想| 浙江展览馆展出中| 古典诗歌与神经网络的交互艺术';
        const cardSubtitle = '当设计与编程碰撞，当机器寻找诗心。浙江展览馆4号厅，6.1-6.12';
        const link = 'https://mp.weixin.qq.com/s/8qYwWBoebysw8vlWYXU6uw';

        return (
            <SingleContentContainer content={<CardContentLayout title={cardTitle} subtitle={cardSubtitle} link={link}/>} title={title}/>
        );
    }
}

export class PageGZH2 extends React.Component {

    render() {

        const title = '公众号推文';
        const cardTitle = '深度访谈| 回想 回想/那心的铁片/也要发出轰响| 完整作品及创作历程分享';
        const cardSubtitle = '诗心的共振：从汉字设计、实验海报到交互艺术装置。';
        const link = 'https://mp.weixin.qq.com/s/4wEyE0wHCFw4OUH6wSTqIQ';

        return (
            <SingleContentContainer content={<CardContentLayout title={cardTitle} subtitle={cardSubtitle} link={link}/>} title={title}/>
        );
    }
}

class CardContentLayout extends React.Component {
    render() {
        return (
            <div className="card-layout">

                <div className="card-wrapper-border">
                    <div className="card-wrapper">
                        <a className="card-link" target="_blank" href={this.props.link}></a>
                        
                        <div className="card-center">
                            <div className="link-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 50 50"><path d="M27.25,35.693l-9.765,9.765a6.342,6.342,0,0,1-8.809,0,6.217,6.217,0,0,1,0-8.809l9.765-9.765a2.527,2.527,0,0,0-3.574-3.574L5.1,33.1A11.275,11.275,0,0,0,21.033,49.033l9.791-9.765a2.527,2.527,0,1,0-3.574-3.574ZM48.844,5.29a11.3,11.3,0,0,0-15.932,0l-9.791,9.765A2.527,2.527,0,0,0,26.7,18.629l9.765-9.765a6.342,6.342,0,0,1,8.809,0,6.217,6.217,0,0,1,0,8.809L35.5,27.438a2.527,2.527,0,1,0,3.574,3.574l9.765-9.791a11.3,11.3,0,0,0,0-15.932ZM18.994,35.14a2.552,2.552,0,0,0,3.574,0L34.951,22.757a2.527,2.527,0,0,0-3.574-3.574L18.994,31.566a2.517,2.517,0,0,0,0,3.574Z" transform="translate(-2.129 -2.005)" fill="#7399d8"/></svg>
                            </div>
                            <div className="card-content">
                                <p className="card-title">{this.props.title}</p>
                                <p className="card-subtitle">{this.props.subtitle}</p>                            
                        </div>

                        </div>
                    
                    
                    </div>
                </div>
            </div>
        )
    }
}

class ListContentLayout extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return (
                <div className="list-item" key={index}>

                    <div className="name">
                        {item.name}
                    </div>
                    <div className="list-item-secondary">
                        {item.desc.map((ii, index) => {
                            return (
                                <div className="desc" key={index}>
                                    <div className="text">
                                        {ii.text}
                                    </div>              
                                    <div className="date">
                                        {ii.date}
                                    </div>    
                                </div>
                            );
                        })}                        
                    </div>
                </div>
            );
        });

        return (
            <div className="page-layout-list">
                {items}
            </div>
        );
    }
}

class SingleContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-single-content-container">
                <div className="page-container">
                    {this.props.title && <p className="title">{this.props.title}</p>}
                    {this.props.content}      
                </div>
                <div className="scroll-fade top"></div>
                <div className="scroll-fade bottom"></div>
            </div>
        );
    }
}

class MultiContentContainer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            pageNum: 0
        }

    }
    
    render() {
        const tabClickHandler = (page) => {
            this.setState({pageNum: page});
        }
        const titlesTabs = this.props.titlesTabs.map((t,i)=>{
            return (
                <div className={(this.state.pageNum === i) ? 'tab selected' : 'tab'} key={i} onClick={()=>{tabClickHandler(i)}} style={{width:'calc(100% / ' + this.props.titlesTabs.length + ' )'}}>
                    {(this.state.pageNum === i) ? <div className="select-indicator"></div> : null}
                    <p>{t}</p>
                </div>
            );

        });

        return (
            <div className="page-multi-content-container">
                <div className="tab-content">
                    {this.props.titles && <p className="title">{this.props.titles[this.state.pageNum]}</p>}
                    {this.props.content[this.state.pageNum]}
                </div>
                <div className="tabs-container">
                    <div className="tabs">{titlesTabs}</div>
                </div>
                <div className="scroll-fade top"></div>
                
            </div>
        );
    }
}
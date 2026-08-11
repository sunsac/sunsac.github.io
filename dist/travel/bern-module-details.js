(function () {
  "use strict";

  const VERIFIED_ON = "2026-08-11";
  const sbb = "https://www.sbb.ch/en";
  const bls = "https://www.bls.ch/en/leisure-holidays/ships";
  const bern = "https://bern.com/en";
  const jungfrau = "https://www.jungfrau.ch/en-gb/";

  const attraction = (name, description, stay, hours, price, booking, practical, officialUrl, lat, lng, imageQuery) => ({
    name, description, stay, hours, price, booking, practical, officialUrl, coordinates: [lat, lng], imageQuery,
  });
  const dining = (role, name, routePosition, specialties, price, hours, reservation, officialUrl, lat, lng) => ({
    role, name, routePosition, specialties, price, hours, reservation, officialUrl, coordinates: [lat, lng],
  });
  const resource = (label, url, kind = "官方资料") => ({ label, url, kind });
  const checkpoint = (name, lat, lng, stay, walkFromPrevious, value, practical, optional = false) => ({
    name, coordinates: [lat, lng], stay, walkFromPrevious, value, practical, optional,
  });

  const shared = {
    "bern-city-walk": {
      whyChoose: "希望用半天读懂 Bern 的政治中心、中世纪城市轴线、Aare 河谷与制高点，而且行程可随时缩短。",
      skipWhen: "雷暴、结冰或连续强降雨时不要登塔或走陡坡；若只剩不足两小时，改走 Bahnhof–Zytglogge 短线。",
      attractions: [
        attraction("Bundeshaus 与 Bundesplatz", "联邦议会建筑把 Bern 的首都职能放进行程开场；广场也是市集、喷泉和公共活动空间。", "20–35 分钟", "广场全天；议会导览按官方场次", "广场免费；导览按官方页面", "导览需预先确认并携带证件", "工作日安检和议会活动可能影响进入；不要堵住入口", "https://www.parlament.ch/en/services/visit-parliament-building", 46.9466, 7.4441, "Bundeshaus Bern"),
        attraction("Zytglogge", "旧城轴线的视觉锚点；在整点前观察机械人物，再从钟塔理解城市扩张。", "20–45 分钟", "外观全天；塔内只随导览开放", "外观免费；导览价格临行确认", "塔内导览建议预约", "整点前约 5 分钟到场；石阶狭窄", "https://www.bern.com/en/explore/guided-city-tours/tour-of-the-clock-tower", 46.9483, 7.4513, "Zytglogge Bern"),
        attraction("Einstein House", "Kramgasse 49 的二楼旧居恢复了 Einstein 与家人在 Bern 生活时期的室内尺度；他在 Bern 的关键研究岁月包括 1905 年的 annus mirabilis。", "30–45 分钟", "2026/2/4–12/18 每日 10:00–17:00；最后进入 16:45", "成人 CHF 8；学生／长者 CHF 6；其他折扣按官网", "个人可现场或线上安排；团体至少 6 人须按官网预约", "入口和展室空间小、楼梯狭窄且无电梯；它与 Bern Historical Museum 内的 Einstein Museum 是不同地点", "https://www.einstein-bern.ch/?lang=en&show=haus", 46.9489, 7.4514, "Einstein House Bern"),
        attraction("Bern Minster", "瑞士最高教堂尖塔与晚期哥特式主教堂；门廊雕塑和平台共同解释旧城宗教与地形。", "35–70 分钟", "教堂与塔楼开放随季节、礼拜和天气变化", "教堂通常免费；登塔收费", "团体或特别参观另查", "登塔为狭窄旋梯；雷雨或强风不要上塔", "https://www.bernermuenster.ch/en/", 46.9472, 7.4519, "Bern Minster"),
        attraction("BearPark 与 Nydegg", "从老城跨过 Aare 后观察城市悬崖、河道和熊作为城市象征的历史。", "30–50 分钟", "公共空间全天；动物可见性不保证", "免费", "无需预约", "动物可能休息或不在视线内；以河谷景观为主要价值", "https://bern.com/en/explore/activities-and-excursions/bern-animal-park-daehlhoelzli-bearpark", 46.9494, 7.4593, "BearPark Bern"),
        attraction("Rosengarten", "从东北高地完整回望 Aare 半岛，是把前面走过的旧城轴线收束成一张地图的终点。", "35–60 分钟", "公园全天开放", "免费", "无需预约", "由 BearPark 上坡较陡；可改搭 bus 10", "https://bern.com/en/detail/the-rose-garden", 46.9517, 7.4599, "Rosengarten Bern"),
      ],
      dining: [
        dining("主餐", "Altes Tramdepot", "BearPark 后、上 Rosengarten 前", "啤酒厂料理、沙拉与瑞士热食", "约 CHF 25–45", "营业时段会调整，临行查官网", "景观位与晚餐建议订位", "https://altestramdepot.ch/", 46.9486, 7.4607),
        dining("咖啡休息", "Einstein Café", "Kramgasse／Zytglogge 中段", "咖啡、甜点与轻食", "约 CHF 8–25", "临行确认当日时段", "一般不必订位", "https://www.einstein-cafe.ch/", 46.9482, 7.4518),
        dining("主餐", "Restaurant Rosengarten", "完整版终点", "瑞士及地中海菜、城市景观", "约 CHF 30–55", "季节与活动可能影响营业", "露台和晚餐建议订位", "https://www.rosengarten.be/", 46.9515, 7.4600),
      ],
      foodGuide: {
        intro: "Bern 的味道不只在正餐：早餐面包、周市集、奶酪咸点、传统肉食、巧克力与可带走的熊形甜点，都可以嵌入 City Walk。最实用的做法是沿途尝两种小食，再把一道重菜留给路线结束后。",
        specialties: [
          { name: "Bärner Anke-Züpfe", category: "早餐／面包", imageQuery: "Zopf Swiss bread", imageFallback: "braided butter bread", summary: "奶油编辫面包，传统上与星期日早餐关系最深；组织细软、表面金黄。", taste: "单吃、配果酱，或配一小份本地奶酪。", timing: "出发前或 Bahnhof–Bundesplatz 段", portion: "适合两人分享一段；不会拖慢步行。", diet: "含麸质、奶油和通常含蛋。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Chäschueche", category: "咸点／快速午餐", imageQuery: "Swiss cheese tart", imageFallback: "cheese quiche", summary: "瑞士德语区常见的奶酪挞；比 fondue 更适合作为 City Walk 中途补给。", taste: "温热吃，搭配沙拉或饮料即可成为轻午餐。", timing: "Münstergasse／Minster 前后", portion: "一人一小块；之后仍能继续上坡。", diet: "奶制品、蛋和麸质；素食者通常可选。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Berner Rösti", category: "经典主食", imageQuery: "Rösti", imageFallback: "Swiss potato rosti", summary: "Bern 版本强调酥脆金黄的马铃薯外壳，传统做法可能加入猪油、培根、奶酪或煎蛋。", taste: "先确认配料；想吃出重点可选较简单的 bacon／egg 版本。", timing: "Old City 午餐，或 City Walk 结束后的早晚餐", portion: "偏饱；点 Rösti 后不必再加 fondue。", diet: "可做素食，但传统版本未必素食；需主动询问。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Bärner Platte", category: "传统重菜", imageQuery: "Berner Platte", imageFallback: "Bernese platter Switzerland", summary: "由香肠、培根、火腿、猪肋、酸菜和干豆组成的丰盛拼盘，与 1798 年 Neuenegg 战役后的庆祝传说相关。", taste: "把它当成一道历史型共享餐，不是普通肉拼盘。", timing: "完整版结束后的晚餐最合适", portion: "非常重，建议两人分享或先确认份量；不适合步行中段。", diet: "高肉量、高盐；不适合素食者和只想轻食的人。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Suure Mocke", category: "慢炖主菜", imageQuery: "Sauerbraten mashed potatoes", imageFallback: "Swiss braised beef", summary: "经过酸味腌制后长时间炖煮的牛肉，通常配马铃薯泥和肉汁，是家庭式星期日料理。", taste: "比 Bärner Platte 更像完整的一人份主菜，酸香和浓肉汁是重点。", timing: "Old City 晚餐；不要安排成快速补给", portion: "正常正餐份量但较厚重。", diet: "牛肉菜；酱汁可能含酒、奶油或麸质，过敏者询问。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Bärner Läbchueche", category: "甜点／伴手礼", imageQuery: "Lebkuchen", imageFallback: "Swiss gingerbread", summary: "Bern 风格的蜂蜜榛果软姜饼；调味较克制，主要以肉桂和蜂蜜呈现。", taste: "买小块当天吃，装饰完整的版本更适合作伴手礼。", timing: "Marktgasse／Kramgasse 拱廊段", portion: "甜度集中，适合配无糖咖啡。", diet: "通常含坚果、蜂蜜与麸质。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Mandelbärli", category: "Bern 小甜点", imageQuery: "Mandelbärli Bern", imageFallback: "almond cake Switzerland", summary: "Confiserie Glatz 在 1989 年推出的熊形杏仁小蛋糕，体积小、辨识度高，是最方便随身携带的 Bern 甜点之一。", taste: "原味最能判断杏仁蛋糕质地，也可选巧克力版本。", timing: "Bärenplatz／Old City 段购买，Rosengarten 再吃", portion: "一人一个或买组合装带走。", diet: "含杏仁，通常含蛋、奶油和麸质。", officialUrl: "https://bern.com/en/explore/food-drink/chocolate" },
          { name: "Bern chocolate", category: "巧克力文化", imageQuery: "Swiss chocolate pralines", imageFallback: "Toblerone Bern chocolate", summary: "Lindt 的 conching 技术、Toblerone、Ovomaltine 与 Ragusa 都和 Bern 有历史联系；今天 Old City 仍有独立 chocolatier。", taste: "不要只买全球通路款；可选一两颗 praline 或本地 bean-to-bar 小包装比较。", timing: "Kramgasse 甜点停留或返程伴手礼", portion: "少量品尝比一次买大盒更适合 City Walk。", diet: "坚果、乳制品和大豆过敏者逐项查看标示。", officialUrl: "https://bern.com/en/explore/food-drink/chocolate" },
        ],
        routePlan: [
          { checkpoint: "Bern Bahnhof → Bundesplatz", suggestion: "先吃 Anke-Züpfe 或买一份当天面包；若适逢星期二／六上午，在 Bundesplatz 与 Bärenplatz 市集看奶酪、烘焙、蜂蜜和农产品。" },
          { checkpoint: "Zytglogge → Kramgasse", suggestion: "安排一份 Mandelbärli、Läbchueche 或两三颗 praline；这是甜点和伴手礼最自然的路段。" },
          { checkpoint: "Münstergasse → Minster", suggestion: "需要轻午餐时选 Chäschueche；星期二／六的 Münstergasse gourmet market 还有肉食、鱼、奶酪、烘焙和 Emmental 地区产品。" },
          { checkpoint: "BearPark → Rosengarten／返回 Old City", suggestion: "City Walk 完成后再决定 Rösti、Suure Mocke 或 Bärner Platte；三者只选一道重菜。想轻松收尾则保留 café、啤酒或甜点。" },
        ],
        marketNote: "Bern 周市集通常全年于星期二和星期六举行，主要分布在 Bundesplatz、Bärenplatz、Waisenhausplatz、Münstergasse 及邻近街巷；摊位和假日安排仍须临行确认。星期日一般零售选择较少，可优先依靠车站店铺、餐厅和开放的 café。",
        sources: [
          resource("Bernese specialties", "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself", "官方美食指南"),
          resource("Bern farmer's markets", "https://bern.com/en/news/stories-and-recommendations/berns-farmers-markets", "官方市集指南"),
          resource("Bern — city of chocolate", "https://bern.com/en/explore/food-drink/chocolate", "官方巧克力指南"),
        ],
      },
      background: ["Bern 老城位于 Aare 河弯形成的半岛上，街道轴线由西向东延伸。", "Lauben 拱廊让雨天步行仍具连续性；河谷与高地视角则解释了城市防御和扩张。"],
      resources: [resource("Bern Old Town", "https://www.bern.com/en/detail/old-town-of-bern"), resource("Einstein House", "https://www.einstein-bern.ch/?lang=en&show=haus"), resource("Bern-Ticket", "https://bern.com/en/inform/bern-ticket/"), resource("Aare 安全说明", "https://bern.com/en/news/stories-and-recommendations/aare")],
    },
    interlaken: {
      whyChoose: "想要低强度、交通简单的山谷门户，也想保留现场加入滑翔伞或短船的弹性。",
      skipWhen: "若主要期待高山景观却遇到低云，可改城市模块；若已有明确山村目标，不必把 Interlaken 当强制景点。",
      attractions: [
        attraction("Unterseen Old Town", "跨过 Aare 后的小型老城，尺度比 Höheweg 安静，适合从 Interlaken West 开始。", "35–50 分钟", "公共街区全天", "免费", "无需预约", "石板路与桥面雨天湿滑", "https://www.interlaken.ch/en/experiences/poi/unterseen-old-town", 46.6854, 7.8476, "Unterseen old town"),
        attraction("Höhematte", "大片公共草地把城市、滑翔伞降落区与 Jungfrau 远景放在同一画面。", "30–50 分钟", "公共空间全天", "免费", "无需预约", "不要进入标示的降落区域", "https://www.interlaken.ch/en/experiences/poi/hohematte-park", 46.6867, 7.8587, "Hohematte Interlaken"),
        attraction("Harder Kulm", "Interlaken 上方观景台，可同时看 Thun 与 Brienz 两湖；只有能见度好时才值得加。", "1.5–2.5 小时", "缆车季节营运；查当天班次", "票价临行查 Jungfrau 页面", "旺季可预购，仍须看天气", "谷站在 Aare 北岸；记录末班下山", "https://www.jungfrau.ch/en-gb/harder-kulm/", 46.6975, 7.8512, "Harder Kulm"),
      ],
      dining: [
        dining("主餐", "Hüsi Bierhaus", "Unterseen 与中心之间", "瑞士家常菜、啤酒与汉堡", "约 CHF 25–45", "临行查官网", "晚餐建议订位", "https://www.huesi-bierhaus.ch/", 46.6863, 7.8586),
        dining("快速补给", "Little Thai", "Höhematte 西侧", "泰式饭面和外带", "约 CHF 18–35", "营业日可能变化", "小店座位有限", "https://littlethai.ch/", 46.6868, 7.8568),
        dining("咖啡休息", "Grand Café Schuh", "Höheweg 中段", "咖啡、巧克力与轻食", "约 CHF 10–30", "临行确认", "一般无需订位", "https://www.schuh-interlaken.ch/", 46.6865, 7.8598),
      ],
      background: ["Interlaken 位于 Thun 与 Brienz 两湖之间的冲积平原，是前往 Jungfrau 地区的换乘中心。", "城市本身的价值在于门户地理与低强度缓冲，而不是用景点数量取胜。"],
      resources: [resource("Interlaken Tourism", "https://www.interlaken.ch/en"), resource("Harder Kulm", "https://www.jungfrau.ch/en-gb/harder-kulm/")],
    },
    lauterbrunnen: {
      whyChoose: "想看 U 形冰川谷、垂直岩壁和瀑布，而且愿意把一天集中在谷底。",
      skipWhen: "低云完全遮住岩壁、雷雨、高水位封闭步道或 Trümmelbach 停运时，改城市／湖区模块。",
      attractions: [
        attraction("Staubbach Falls", "近 300 米高的自由落瀑布，是从车站进入山谷后最清晰的尺度参照。", "25–45 分钟", "外观全天；后方步道季节开放", "免费", "无需预约", "瀑布后方步道湿滑且可能关闭", "https://www.jungfrau.ch/en-gb/lauterbrunnen/staubbach-falls/", 46.5894, 7.9061, "Staubbach Falls"),
        attraction("Lauterbrunnen Valley Trail", "沿 Lütschine 河与牧场向南，持续观察两侧岩壁、瀑布和村落关系。", "1–2.5 小时", "开放步道全天", "免费", "无需预约", "遇雷雨立即离开开阔地；尊重农地", "https://jungfrau.ch/en-gb/lauterbrunnen/", 46.5795, 7.9077, "Lauterbrunnen valley"),
        attraction("Trümmelbach Falls", "冰川融水在山体内部形成的多层瀑布系统，声音与水量比外观摄影更重要。", "60–90 分钟", "季节开放，确切日期与时段查官网", "成人票价临行确认", "通常现场购票", "大量台阶、湿滑且不适合婴幼儿；入口可能因水量关闭", "https://www.truemmelbachfaelle.ch/e/", 46.5710, 7.9144, "Trummelbach Falls"),
      ],
      dining: [
        dining("主餐", "Hotel Oberland Restaurant", "村中心、车站与瀑布之间", "瑞士菜、rösti 与素食选项", "约 CHF 25–45", "临行查官网", "午餐高峰建议订位", "https://www.hoteloberland.ch/", 46.5938, 7.9075),
        dining("主餐", "Weidstübli", "村南、山谷步道起点附近", "瑞士家常菜与奶酪菜", "约 CHF 25–45", "季节时段须确认", "晚餐建议订位", "https://www.campingjungfrau.swiss/en/restaurant", 46.5949, 7.9080),
      ],
      background: ["Lauterbrunnen 是典型冰川 U 形谷，陡壁上的悬谷形成多条瀑布。", "谷底村落是 Wengen、Mürren 和 Jungfraujoch 的分流点，模块化规划可避免无意识叠加过多上山交通。"],
      resources: [resource("Lauterbrunnen Tourism", "https://jungfrau.ch/en-gb/lauterbrunnen/"), resource("Trümmelbach Falls", "https://www.truemmelbachfaelle.ch/e/")],
    },
    wengen: {
      whyChoose: "希望在无车山村慢走，并从高位俯瞰 Lauterbrunnen Valley，而不是冲击山顶项目。",
      skipWhen: "山谷完全被低云遮住、铁路受阻，或不适应连续坡道时，留在谷底或改 Thun。",
      attractions: [
        attraction("Wengen Village", "无车村落主街、木屋与旅馆构成 Belle Époque 旅游史和当代山村生活的混合。", "60–90 分钟", "公共街区全天", "免费", "无需预约", "行李车和电动车仍会通行", "https://wengen.swiss/en/", 46.6055, 7.9218, "Wengen village"),
        attraction("Wengen Church viewpoint", "教堂外缘是最容易抵达的 Lauterbrunnen Valley 高位视角。", "25–40 分钟", "外部空间全天；礼拜时保持安静", "免费", "无需预约", "边坡和冬季结冰需留意", "https://wengen.swiss/en/map/detail/wengen-church-1d970c70-0609-40ca-960a-8627dd40c534.html", 46.6037, 7.9212, "Wengen church view"),
        attraction("Männlichen（可选延伸）", "缆车上至宽阔山脊，可看 Eiger–Mönch–Jungfrau；只在晴朗且有足够回程时间时加入。", "2–4 小时", "缆车季节营运", "票价临行确认", "旺季可预购", "强风会停运；Royal Walk 有上坡", "https://www.maennlichen.ch/en/", 46.6182, 7.9386, "Mannlichen Wengen"),
      ],
      dining: [
        dining("主餐", "Restaurant Bären", "村南、教堂前后", "区域菜与季节菜单", "约 CHF 30–55", "依酒店季节营业", "建议订位", "https://www.baeren-wengen.ch/en/restaurant", 46.6057, 7.9226),
        dining("咖啡休息", "Hotel Schönegg terrace", "村中心上方", "咖啡、甜点与轻食", "约 CHF 12–35", "临行确认非住客时段", "景观位建议询问", "https://www.hotel-schoenegg.ch/en/", 46.6053, 7.9216),
      ],
      background: ["Wengen 位于 Lauterbrunnen 谷东侧台地，只能由齿轨铁路和步道连接。", "其景观价值来自高位观察谷底，而不是单个纪念性建筑。"],
      resources: [resource("Wengen Tourism", "https://wengen.swiss/en/"), resource("Männlichen", "https://www.maennlichen.ch/en/")],
    },
    muerren: {
      whyChoose: "愿意接受较多转乘，换取无车高山村落与 Eiger–Mönch–Jungfrau 正面对景。",
      skipWhen: "大风、低云、雷雨或 Grütschalp 线异常时；不要把 Schilthorn 当现场强加项目。",
      attractions: [
        attraction("Mürren Village Walk", "从 BLM 车站穿过木屋、旅馆和农地，主峰对景贯穿村落。", "60–100 分钟", "公共街区全天", "免费", "无需预约", "村内有服务车辆；坡道与碎石路需稳健鞋", "https://muerren.swiss/en/", 46.5596, 7.8926, "Murren village"),
        attraction("Allmendhubel", "短程 funicular 上至花径和观景平台，适合比 Schilthorn 更轻量的延伸。", "1.5–3 小时", "季节营运", "票价临行确认", "通常无需订位", "末班和步道状态必须在上山前确认", "https://schilthorn.ch/en/Infos/Allmendhubel", 46.5654, 7.8821, "Allmendhubel"),
        attraction("Northface Trail 起段", "村外步道以草坡、农舍和北壁景观为主；可以只走短段后原路返回。", "45–120 分钟", "步道开放依积雪与天气", "免费", "无需预约", "雷雨或湿滑时取消；不要用城市鞋", "https://muerren.swiss/en/summer/hiking/", 46.5672, 7.8910, "Murren Northface Trail"),
      ],
      dining: [
        dining("主餐", "Hotel Edelweiss Restaurant", "村中段、山谷边缘", "瑞士菜与景观露台", "约 CHF 28–50", "酒店季节营业", "景观位建议订位", "https://www.edelweiss-muerren.ch/en/restaurant", 46.5593, 7.8923),
        dining("主餐", "Stägerstübli", "村中心", "rösti、奶酪与山区家常菜", "约 CHF 25–45", "临行确认休息日", "晚餐建议订位", "https://www.staegerstuebli.ch/", 46.5597, 7.8920),
      ],
      background: ["Mürren 位于 Lauterbrunnen 谷西侧悬崖台地，BLM 路线由缆车和窄轨铁路组成。", "村落无一般道路直通，转乘本身就是空间体验的一部分。"],
      resources: [resource("Mürren Tourism", "https://muerren.swiss/en/"), resource("Schilthorn cableways", "https://schilthorn.ch/en")],
    },
    gimmelwald: {
      whyChoose: "喜欢规模很小的农舍村、慢节奏和少商业化环境，可接受长交通换短停留。",
      skipWhen: "只想密集看景点、缆车受风停运、或雨后坡道湿滑时；餐饮少也不适合临时空腹前往。",
      attractions: [
        attraction("Gimmelwald village", "几十栋农舍散布在陡坡上，重点是村落尺度、农业景观和山谷视线。", "60–90 分钟", "公共街区全天", "免费", "无需预约", "私人农地和住宅勿闯入；保持安静", "https://muerren.swiss/en/discover/gimmelwald/", 46.5470, 7.8907, "Gimmelwald village"),
        attraction("Honesty Shop / village produce", "以自助小店和本地产品观察小型山村的生活网络。", "15–25 分钟", "开放与库存不固定", "按标价付款", "无需预约", "准备少量现金并尊重自助规则", "https://muerren.swiss/en/discover/gimmelwald/", 46.5474, 7.8912, "Gimmelwald Switzerland"),
        attraction("Gimmelwald–Mürren trail", "约两公里上坡连接两个无车村，是把 Gimmelwald 扩展成半日的自然方式。", "60–90 分钟", "依积雪、雨水和维护状态", "免费", "无需预约", "持续上坡；不想爬升则搭缆车", "https://muerren.swiss/en/summer/hiking/", 46.5532, 7.8913, "Gimmelwald Murren trail"),
      ],
      dining: [
        dining("快速补给", "Gimmelwald Pension restaurant", "村中心附近", "简餐、饮料与山区菜", "约 CHF 15–35", "营业具有季节性，务必临行确认", "团体建议联系", "https://www.pensiongimmelwald.ch/", 46.5483, 7.8669),
        dining("咖啡休息", "Mountain Hostel Gimmelwald", "缆车站附近", "饮料、轻食与披萨（按季节）", "约 CHF 10–30", "季节营业", "一般无需订位；先确认开放", "https://www.mountainhostel.ch/", 46.5471, 7.8904),
      ],
      background: ["Gimmelwald 在 Mürren 下方的山坡台地，长期以农业与小型住宿为主。", "其吸引力来自完整环境而非单一地标，因此慢走和尊重社区比打卡更重要。"],
      resources: [resource("Gimmelwald Tourism", "https://muerren.swiss/en/discover/gimmelwald/"), resource("Schilthorn cableways", "https://schilthorn.ch/en")],
    },
    "grindelwald-village": {
      whyChoose: "想看 Eiger 山脚生活、村落和冰川地貌，但不想把预算与体力都押在 First 或 Jungfraujoch。",
      skipWhen: "持续大雨令峡谷与步道关闭，或唯一目标是高山观景而能见度为零时。",
      attractions: [
        attraction("Grindelwald Dorfstrasse", "从车站沿村道观察木屋、旅馆与 Eiger 北壁形成的山脚聚落。", "60–90 分钟", "公共街区全天", "免费", "无需预约", "主路有车辆；使用人行道", "https://grindelwald.swiss/en/", 46.6244, 8.0410, "Grindelwald village"),
        attraction("Glacier Canyon", "冰川侵蚀形成的狭谷，以栈道近距离观察岩壁与水流。", "1–2 小时", "季节与天气开放", "门票临行查官网", "一般可现场购票", "湿滑、噪音大；洪水或维护会关闭", "https://www.gletscherschlucht.ch/en", 46.6056, 8.0464, "Grindelwald glacier canyon"),
        attraction("Pfingstegg", "村东短程缆车上至草坡和山谷观景点，可作为比 First 更短的高处延伸。", "2–3 小时", "季节营运", "票价临行确认", "活动项目可预购", "强风停运；记录末班", "https://www.pfingstegg.ch/en/", 46.6107, 8.0548, "Pfingstegg Grindelwald"),
      ],
      dining: [
        dining("主餐", "Barry's", "Dorfstrasse 中段", "山区烧烤、瑞士菜与素食", "约 CHF 30–55", "临行查官网", "晚餐建议订位", "https://www.barrysrestaurant.ch/en", 46.6247, 8.0418),
        dining("咖啡休息", "C und M Café Bar Restaurant", "Firstbahn 附近", "咖啡、蛋糕与简餐", "约 CHF 12–35", "临行确认", "繁忙时段可订位", "https://www.cundm-grindelwald.ch/", 46.6241, 8.0452),
      ],
      background: ["Grindelwald 位于 Eiger 北侧山谷，是铁路、Firstbahn 与 Jungfraujoch V-Bahn 的分流点。", "把村落与高山模块拆开，可以在低云日仍保留山脚地貌和生活景观。"],
      resources: [resource("Grindelwald Tourism", "https://grindelwald.swiss/en/"), resource("Glacier Canyon", "https://www.gletscherschlucht.ch/en")],
    },
    "grindelwald-first": {
      whyChoose: "能见度好、愿意步行并想把缆车、悬崖栈道、山湖和一项山地活动集中在一天。",
      skipWhen: "强风、雷暴、山顶云封、Bachalpsee 步道积雪或 Firstbahn／活动线停运时。",
      attractions: [
        attraction("First Cliff Walk", "贴近岩壁的金属栈道与悬挑平台，是无需长途徒步的主要观景点。", "30–50 分钟", "随 Firstbahn 开放，天气可临时关闭", "通常含在 First 缆车到达范围；票种查官网", "缆车票可预购", "恐高者可绕开；湿滑和拥挤时放慢", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/", 46.6600, 8.0535, "First Cliff Walk"),
        attraction("Bachalpsee", "从 First 往返的高山湖步道，以 Schreckhorn 倒影和草坡地形为主要价值。", "2–3 小时往返", "步道依积雪、雷雨和维护开放", "免费（需先到 First）", "无需预约", "约 6 公里往返并有起伏；补水、防晒", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/bachalpsee/", 46.6690, 8.0249, "Bachalpsee"),
        attraction("First Flyer / Glider", "高速飞索或鹰形吊挂活动；只选一项，排队时间可能显著。", "45–120 分钟", "依风、雨、容量即时营运", "单项或套票从官网查询", "旺季建议提前购买，但不保证因天气开放", "有身高体重与装备限制；以现场判定为准", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/adventure-package/", 46.6590, 8.0570, "First Flyer Grindelwald"),
      ],
      dining: [
        dining("主餐", "Berggasthaus First", "First 缆车顶站", "热食、瑞士山区菜与露台", "约 CHF 25–45", "随缆车季节营业", "一般无需订位；团体除外", "https://www.bergrestaurant-first.ch/", 46.6590, 8.0570),
        dining("咖啡休息", "Bergrestaurant Bort", "下山中段", "轻食、甜点与热饮", "约 CHF 12–35", "随缆车季节营业", "繁忙午餐可询问", "https://www.bergrestaurant-bort.ch/", 46.6428, 8.0445),
      ],
      background: ["First 位于 Grindelwald 北侧山坡，与 Eiger 对望；Bachalpsee 则在更高的草坡台地。", "山地活动的营运逻辑由风速、湿度和容量决定，票券不等于项目必开。"],
      resources: [resource("Grindelwald-First 官方", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"), resource("票价与套票", "https://www.jungfrau.ch/en-gb/prices-and-tickets/")],
    },
    jungfraujoch: {
      whyChoose: "预报显示山顶能见度好、愿意承担高费用与高海拔，并把全天只留给冰川和高山铁路。",
      skipWhen: "山顶实时画面云封、铁路异常、强风，或同行者有不适合快速上升至 3,454 米的健康状况。",
      attractions: [
        attraction("Sphinx viewing terrace", "高速电梯到达高位观景台，观察 Aletsch Glacier 与高阿尔卑斯地形。", "30–45 分钟", "随站区和天气开放", "含在 Jungfraujoch 访问范围", "按官方要求预订交通座位", "强风或结冰可关闭室外平台", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/sphinx-observation-deck/", 46.5475, 7.9855, "Sphinx Jungfraujoch"),
        attraction("Ice Palace", "在冰体内部通行的雕塑与廊道，强调冰川作为物质空间而非仅远景。", "25–40 分钟", "随站区开放", "含在访问范围", "无需另订", "地面湿滑；慢走并使用扶手", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/ice-palace/", 46.5474, 7.9852, "Jungfraujoch Ice Palace"),
        attraction("Alpine Sensation", "连接站区的展览动线，解释铁路建设史与山区旅游发展。", "20–35 分钟", "随站区开放", "含在访问范围", "无需另订", "可作为室外平台关闭时的室内替代", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/alpine-sensation/", 46.5473, 7.9850, "Alpine Sensation Jungfraujoch"),
        attraction("Plateau", "雪面近距离观景区；与室内站区相比更直接感受高海拔风、冷和紫外线。", "15–30 分钟", "仅在天气及安全条件允许时", "含在访问范围", "无需另订", "不要越过围栏；出现头痛、恶心立即返回室内并下降", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/", 46.5469, 7.9847, "Jungfraujoch Plateau"),
      ],
      dining: [
        dining("主餐", "Restaurant Crystal", "Jungfraujoch 站区", "瑞士及国际热食", "约 CHF 30–55", "随站区营运", "团体建议查询", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/restaurants/", 46.5475, 7.9855),
        dining("快速补给", "Aletsch Self-Service", "站区动线内", "自助热食、饮料与点心；高峰可能排队", "约 CHF 15–35", "随站区营运", "无需订位；仍自备少量能量食品", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/restaurants/", 46.5473, 7.9852),
      ],
      background: ["Jungfraujoch 铁路终点位于 Mönch 与 Jungfrau 之间的山坳，站区海拔约 3,454 米。", "Aletsch Glacier 属于阿尔卑斯最大冰川系统；高价交通的核心是工程与地理到达，而不是游乐园式项目数量。"],
      resources: [resource("Jungfraujoch 到达方式", "https://www.jungfrau.ch/en-gb/arriving/"), resource("价格与票券", "https://www.jungfrau.ch/en-gb/prices-and-tickets/"), resource("实时状况", "https://www.jungfrau.ch/en-gb/live/")],
    },
  };

  const secondBatch = {
    thun: {
      whyChoose: "想要从 Bern 轻松往返，在河流、老城、城堡和湖口之间获得完整但低风险的半日。",
      skipWhen: "若目标只是坐船，应直接选 Lake Thun cruise；严重暴雨时取消 Schadau 长走。",
      attractions: [
        attraction("Thun Old Town", "Aare 两岸、Rathausplatz 与高架人行道形成紧凑的商业老城。", "60–90 分钟", "公共街区全天", "免费", "无需预约", "高架人行道有台阶", "https://www.thun.ch/en/tourism/old-town", 46.7581, 7.6290, "Thun old town"),
        attraction("Thun Castle", "十二世纪城堡主塔高于老城，是理解 Zähringen 城市和 Lake Thun 战略位置的核心。", "60–90 分钟", "开放日与时段随季节", "成人票价临行确认", "一般可现场购票", "由老城上坡且塔内多台阶", "https://schlossthun.ch/en/", 46.7590, 7.6300, "Thun Castle"),
        attraction("Schadau Park", "Aare 流入 Lake Thun 的湖口公园，可看到 Alps、湖岸与 Schadau Castle。", "45–75 分钟", "公园全天", "公园免费", "无需预约", "由车站步行约 20 分钟；风雨时缩短", "https://www.thun.ch/en/leisure/schadaupark", 46.7395, 7.6265, "Schadau Park Thun"),
      ],
      dining: [
        dining("主餐", "Restaurant Schloss Schadau", "Schadau 湖畔收尾", "季节菜、瑞士及欧洲料理", "约 CHF 35–70", "临行查官网", "强烈建议订位", "https://www.schloss-schadau.ch/en/restaurant", 46.7395, 7.6265),
        dining("咖啡休息", "Mühleplatz cafés", "Aare 与老城中段", "咖啡、甜点、轻食", "约 CHF 10–30", "各店时段不同", "一般无需订位", "https://www.thun.ch/en/tourism/gastronomy", 46.7578, 7.6295),
      ],
      background: ["Thun 位于 Aare 流出 Lake Thun 的位置，既是水路节点也是 Bernese Oberland 门户。", "城堡高点、老城与 Schadau 湖口构成清晰的纵向路线。"],
      resources: [resource("Thun Tourism", "https://www.thun.ch/en/tourism"), resource("Thun Castle", "https://schlossthun.ch/en/")],
    },
    "lake-thun": {
      whyChoose: "需要恢复节奏，希望湖畔与 Alps 景观占主角，但不把船班当成行程唯一支点。",
      skipWhen: "持续风雨令湖景价值很低，或当天时间不足以同时处理 Spiez 与 Thun 两端。",
      attractions: [
        attraction("Spiez Bay", "葡萄园、城堡、港湾与 Niesen 山形成 Lake Thun 最紧凑的湖畔构图。", "60–90 分钟", "湖岸全天", "免费", "无需预约", "车站到湖边下坡明显，回程可搭 bus", "https://www.spiez.com/en", 46.6859, 7.6815, "Spiez bay"),
        attraction("Spiez Castle", "城堡与教堂展示湖区领主史，塔楼和花园提供港湾俯瞰。", "60–90 分钟", "季节开放", "门票临行确认", "一般现场购票", "冬季可能关闭；塔内有楼梯", "https://www.schloss-spiez.ch/en", 46.6850, 7.6870, "Spiez Castle"),
        attraction("Schadau lakeshore", "Thun 一端的平缓湖岸，适合不坐船的低强度散步。", "45–75 分钟", "公园全天", "免费", "无需预约", "强日照时遮阴有限", "https://www.thun.ch/en/leisure/schadaupark", 46.7395, 7.6265, "Schadau Lake Thun"),
      ],
      dining: [
        dining("主餐", "Restaurant Seegarten Marina Spiez", "Spiez 港湾", "鱼类、沙拉与季节菜", "约 CHF 30–55", "季节时段查官网", "露台建议订位", "https://www.seegarten-marina.ch/", 46.6862, 7.6862),
        dining("咖啡休息", "Spiez harbour café", "城堡与码头之间", "咖啡、冰淇淋与轻食", "约 CHF 8–25", "季节营业", "无需订位", "https://www.spiez.com/en/experiences/food-drink", 46.6855, 7.6850),
      ],
      background: ["Lake Thun 位于 Bernese Alps 北缘，西端由 Aare 流向 Bern，东端连接 Interlaken。", "铁路沿南岸快速连接各节点，因此不坐船也能完成可靠的湖区模块。"],
      resources: [resource("Lake Thun / BLS", bls), resource("Spiez Tourism", "https://www.spiez.com/en")],
    },
    iseltwald: {
      whyChoose: "想用半天看 Lake Brienz 南岸的小村、木屋和湖色，接受班次较少的节奏。",
      skipWhen: "只有很短时间、bus/boat 衔接差、强风大雨或村内拥挤已影响体验时。",
      attractions: [
        attraction("Iseltwald village lane", "小型渔农村街巷与木屋紧贴湖岸，适合慢走而非追逐很多点。", "45–75 分钟", "公共街区全天", "免费", "无需预约", "住宅区保持安静，勿堵塞道路", "https://www.interlaken.ch/en/experiences/poi/iseltwald", 46.7108, 7.9643, "Iseltwald village"),
        attraction("Iseltwald harbour", "bus、船与湖畔步道交会点，可观察 Lake Brienz 的水色和对岸山坡。", "30–45 分钟", "公共码头全天；船季节营运", "湖岸免费", "船票另购", "先确认回程 bus，不以船为唯一退路", bls, 46.7114, 7.9647, "Iseltwald harbour"),
        attraction("Seeburg viewpoint", "半岛上的城堡外观是村落标志，但属于私人区域，重点是公共岸线视角。", "20–30 分钟", "仅从公共区域观看", "免费", "不可进入私人区域", "不要越界拍摄或放无人机", "https://www.interlaken.ch/en/experiences/poi/iseltwald", 46.7099, 7.9660, "Seeburg Iseltwald"),
      ],
      dining: [
        dining("主餐", "Hotel Chalet du Lac Restaurant", "村口及湖边", "鱼类、瑞士菜与湖景露台", "约 CHF 28–50", "季节营业", "午餐建议订位", "https://www.chaletdulac.ch/en/", 46.7112, 7.9631),
        dining("咖啡休息", "Iseltwald harbour kiosk/café", "码头等候段", "饮料、冰淇淋与简餐", "约 CHF 6–20", "高度季节性，临行确认", "无需订位", "https://www.interlaken.ch/en/experiences/food-drink", 46.7114, 7.9647),
      ],
      background: ["Iseltwald 位于 Lake Brienz 南岸，陆路主要依靠从 Interlaken Ost 出发的 bus。", "小村容量有限，模块设计应留出等待与安静停留，而不是强行追加 Giessbach。"],
      resources: [resource("Iseltwald Tourism", "https://www.interlaken.ch/en/experiences/poi/iseltwald"), resource("BLS 船班", bls)],
    },
    "lake-brienz": {
      whyChoose: "把 turquoise 湖色、Brienz 木雕传统或 Giessbach 瀑布选作唯一主线，愿意按季节班次取舍。",
      skipWhen: "船班稀少且陆路备份不清楚，或强风大雨令湖岸与瀑布步道都失去安全性。",
      attractions: [
        attraction("Brienz lakeside", "北岸村落的连续湖滨步道、木屋与木雕文化，是最可靠的陆路主节点。", "60–90 分钟", "公共湖岸全天", "免费", "无需预约", "车站附近即可开始；强日照注意防晒", "https://www.interlaken.ch/en/experiences/poi/brienz", 46.7540, 8.0380, "Brienz village lake"),
        attraction("Giessbach Falls", "多层瀑布从森林陡坡下降到湖岸，可由船与古老 funicular 接近。", "1.5–3 小时", "步道、船与 funicular 季节营运", "步道免费；交通另购", "船班少时先锁定衔接", "瀑布喷雾使石阶湿滑", "https://www.giessbach.ch/en/nature-experience/giessbach-falls", 46.7333, 8.0208, "Giessbach Falls"),
        attraction("Swiss Woodcarving Museum", "以 Brienz 的木雕教育与手工传统补足湖景之外的文化内容。", "60–90 分钟", "季节开放，查官网", "门票临行确认", "一般现场购票", "开放日有限，勿把它设为唯一目的", "https://www.museum-holzbildhauerei.ch/en/", 46.7543, 8.0366, "Brienz woodcarving"),
      ],
      dining: [
        dining("主餐", "Grandhotel Giessbach restaurant", "Giessbach 延伸段", "季节菜、瑞士菜与湖景", "约 CHF 35–70", "随酒店季节营业", "建议订位", "https://www.giessbach.ch/en/restaurants", 46.7333, 8.0203),
        dining("咖啡休息", "Brienz lakeside cafés", "车站至湖岸段", "咖啡、烘焙与轻食", "约 CHF 10–30", "各店营业不同", "通常无需订位", "https://www.interlaken.ch/en/experiences/food-drink", 46.7538, 8.0385),
      ],
      background: ["Lake Brienz 较深，冰川沉积物令湖水呈现明亮蓝绿色。", "北岸有铁路，南岸主要靠 bus 和季节船班；路线可靠性在两岸明显不同。"],
      resources: [resource("Lake Brienz / BLS", bls), resource("Giessbach", "https://www.giessbach.ch/en/")],
    },
    lucerne: {
      whyChoose: "想要一整天城市文化、湖岸和室内外弹性，不依赖高山能见度。",
      skipWhen: "若当天只剩半天，Bern 往返后会太赶；不要临时叠加完整 Pilatus 或 Rigi。",
      attractions: [
        attraction("Chapel Bridge", "十四世纪木桥与水塔跨越 Reuss，是城市贸易、防御和重建记忆的入口。", "30–45 分钟", "公共通道全天", "免费", "无需预约", "繁忙时不要停在狭窄通道中央", "https://www.luzern.com/en/poi/chapel-bridge-and-water-tower", 47.0517, 8.3071, "Chapel Bridge Lucerne"),
        attraction("Lucerne Old Town", "彩绘立面、广场与 Reuss 河岸组成可步行的历史核心。", "60–100 分钟", "公共街区全天", "免费", "无需预约", "周末与团客高峰较拥挤", "https://www.luzern.com/en/highlights/the-city/lucernes-old-town", 47.0525, 8.3055, "Lucerne old town"),
        attraction("Lion Monument", "十九世纪为阵亡瑞士卫兵雕刻的纪念碑，适合结合民族记忆与旅游史理解。", "20–35 分钟", "公共空间全天", "免费", "无需预约", "保持安静，避开团客高峰", "https://www.luzern.com/en/poi/lion-monument", 47.0585, 8.3102, "Lion Monument Lucerne"),
        attraction("Swiss Museum of Transport", "交通、铁路、航空与媒体的大型互动博物馆，是雨天或家庭同行的完整替代。", "2.5–4 小时", "每日时段依官网", "票价临行确认", "旺季可预购", "内容很大，不应与所有老城点同时硬塞", "https://www.verkehrshaus.ch/en", 47.0528, 8.3353, "Swiss Museum of Transport"),
      ],
      dining: [
        dining("主餐", "Rathaus Brauerei", "Chapel Bridge 北岸", "啤酒厂料理与瑞士菜", "约 CHF 25–45", "临行查官网", "午晚餐建议订位", "https://www.rathausbrauerei.ch/", 47.0518, 8.3058),
        dining("主餐", "Wirtshaus Galliker", "老城西侧", "传统 Lucerne 家常菜", "约 CHF 28–50", "休息日与假期须确认", "建议订位", "https://www.galliker.ch/", 47.0508, 8.3047),
        dining("咖啡休息", "Heini Luzern", "老城／车站附近", "咖啡、糕点与轻食", "约 CHF 8–25", "分店时段不同", "无需订位", "https://www.heini.ch/", 47.0522, 8.3078),
      ],
      background: ["Lucerne 位于 Reuss 河流出 Lake Lucerne 的位置，木桥连接两岸市集和防御体系。", "城市模块应聚焦湖口、老城与记忆地标；山岳铁路另需一个完整系统。"],
      resources: [resource("Lucerne Tourism", "https://www.luzern.com/en"), resource("城市地图与信息", "https://www.luzern.com/en/information")],
    },
    lausanne: {
      whyChoose: "需要受天气影响较低的法语区城市日，喜欢大教堂、坡城、Lake Geneva 与体育文化。",
      skipWhen: "不愿承受高低城坡度、无法安排完整一天，或 Olympic Museum 关闭而它又是首要目标时。",
      attractions: [
        attraction("Lausanne Cathedral", "瑞士重要哥特式教堂，高城位置可解释中世纪宗教中心与现代坡城。", "45–70 分钟", "礼拜与活动影响开放", "教堂通常免费；塔楼另计", "团体另查", "由车站上坡明显，可搭 metro", "https://www.lausanne-tourisme.ch/en/explore/lausanne-cathedral/", 46.5228, 6.6358, "Lausanne Cathedral"),
        attraction("Escaliers du Marché", "有盖木阶梯连接商业街和 Cathedral，是坡度最具象的城市路径。", "20–30 分钟", "公共通道全天", "免费", "无需预约", "雨天台阶湿滑", "https://www.lausanne-tourisme.ch/en/explore/market-stairs/", 46.5220, 6.6340, "Escaliers du Marche Lausanne"),
        attraction("The Olympic Museum", "以奥运历史、设计、媒体与体育文化构成完整室内参观。", "2–3 小时", "2026 通常 Tue–Sun 09:00–18:00；临行确认", "成人参考 CHF 20", "可在线购票", "周一闭馆规律与特别活动须再核对", "https://olympics.com/museum", 46.5086, 6.6339, "Olympic Museum Lausanne"),
        attraction("Ouchy promenade", "Lake Geneva 湖岸、港口和 Savoy Alps 远景，为高城路线提供平缓收尾。", "45–75 分钟", "公共湖岸全天", "免费", "无需预约", "夏季日照强；metro 可直返车站", "https://www.lausanne-tourisme.ch/en/explore/ouchy/", 46.5070, 6.6260, "Ouchy Lausanne"),
      ],
      dining: [
        dining("主餐", "Café de Grancy", "车站南侧、前往 Ouchy 途中", "brunch、季节菜与素食", "约 CHF 25–45", "临行查官网", "周末建议订位", "https://cafedegrancy.ch/", 46.5160, 6.6280),
        dining("主餐", "Pinte Besson", "Old Town", "传统 Vaud 菜与奶酪料理", "约 CHF 28–50", "临行确认", "座位少，建议订位", "https://www.pinte-besson.com/", 46.5220, 6.6330),
        dining("咖啡休息", "Olympic Museum TOM Café", "Ouchy／museum 段", "咖啡、轻食与湖景", "约 CHF 12–35", "随 museum 时段", "繁忙时可能等位", "https://olympics.com/museum/visit/practical-information", 46.5086, 6.6339),
      ],
      background: ["Lausanne 从 Lake Geneva 岸边急升至 Cathedral 高城，metro 是路线设计的一部分而非妥协。", "它同时是 Vaud 首府与国际奥林匹克委员会所在地，城市身份跨越宗教、教育和体育。"],
      resources: [resource("Lausanne Tourism", "https://www.lausanne-tourisme.ch/en/"), resource("Olympic Museum", "https://olympics.com/museum")],
    },
    fribourg: {
      whyChoose: "想要离 Bern 很近的双语中世纪城市，用半天走 Cathedral、高低城和 Sarine 河桥。",
      skipWhen: "膝盖不适且不愿用 funicular/bus，或误把目的地查成德国 Freiburg 时。",
      attractions: [
        attraction("St Nicholas Cathedral", "哥特式 Cathedral、彩绘玻璃和高塔主导高城天际线。", "45–75 分钟", "礼拜与活动会限制参观；塔楼季节开放", "教堂通常免费；塔楼收费", "团体另查", "塔楼台阶多；先确认开放", "https://www.fribourgtourisme.ch/en/P10752/st-nicholas-cathedral", 46.8061, 7.1631, "Fribourg Cathedral"),
        attraction("Lower Town", "从高城沿坡道下降到 Sarine 河谷，保存中世纪街巷与工匠区尺度。", "60–90 分钟", "公共街区全天", "免费", "无需预约", "坡陡且石板湿滑；回程可用 funicular", "https://fribourg.ch/en/fribourg/architecture-and-monuments/the-lower-town/", 46.8040, 7.1680, "Fribourg lower town"),
        attraction("Pont de Berne", "有盖木桥横跨 Sarine，是下城防御、交通与河谷景观的关键节点。", "20–35 分钟", "公共通道全天", "免费", "无需预约", "桥上仍有交通，留在人行区域", "https://fribourg.ch/en/fribourg/architecture-and-monuments/bern-bridge/", 46.8044, 7.1690, "Pont de Berne Fribourg"),
      ],
      dining: [
        dining("主餐", "Café du Gothard", "Cathedral 附近", "Fribourg 地方菜、fondue 与 rösti", "约 CHF 25–45", "临行确认", "午晚餐建议订位", "https://www.le-gothard.ch/", 46.8055, 7.1610),
        dining("咖啡休息", "Le Port de Fribourg", "Lower Town／Sarine 河边", "咖啡、轻食与文化空间", "约 CHF 8–25", "季节与活动时段不固定", "通常无需订位", "https://www.leport.ch/", 46.8032, 7.1681),
      ],
      background: ["Fribourg 建在 Sarine 河曲与砂岩高地上，德法语言边界在城市生活中交会。", "高城宗教与行政中心、下城工匠区之间的落差，是路线的主要内容。"],
      resources: [resource("Fribourg Tourism", "https://fribourg.ch/en/fribourg/bienvenue-a-fribourg/"), resource("城市交通 TPF", "https://www.tpf.ch/en")],
    },
    gruyeres: {
      whyChoose: "愿意为山丘中世纪村、城堡和 Gruyère 奶酪文化安排一整天，并接受多次转乘。",
      skipWhen: "只有半天、Bulle 接续不稳，或期待安静村落但正逢大型活动／客流高峰时。",
      attractions: [
        attraction("Gruyères Castle", "从中世纪堡垒到浪漫主义收藏的多时期城堡，是村落最完整的历史主体。", "1.5–2 小时", "全年开放但时段随季节", "成人票价临行确认", "可线上或现场购票", "石阶和高低差较多", "https://www.chateau-gruyeres.ch/en", 46.5847, 7.0833, "Gruyeres Castle"),
        attraction("Gruyères medieval village", "无车主街、城墙与山地景观形成紧凑游览区。", "45–75 分钟", "公共街区全天", "免费", "无需预约", "午间团客多；清晨或下午较松", "https://fribourg.ch/en/gruyeres/", 46.5838, 7.0828, "Gruyeres village"),
        attraction("La Maison du Gruyère", "车站旁展示奶酪生产、成熟和地区农业，可补足只吃 fondue 的表层体验。", "60–90 分钟", "开放与示范时间查官网", "门票临行确认", "团体建议预约", "先看生产时段再决定参观顺序", "https://www.lamaisondugruyere.ch/en", 46.5820, 7.0726, "Maison du Gruyere"),
        attraction("HR Giger Museum", "超现实主义艺术馆与中世纪村形成强烈反差；只适合对其视觉语言有兴趣者。", "60–90 分钟", "开放日与时段查官网", "门票临行确认", "一般现场购票", "内容可能不适合儿童", "https://www.hrgigermuseum.com/", 46.5842, 7.0831, "HR Giger Museum"),
      ],
      dining: [
        dining("主餐", "Le Chalet de Gruyères", "村落主街", "fondue、raclette、rösti 与 meringue", "约 CHF 28–50", "临行查官网", "午餐建议订位", "https://www.chalet-gruyeres.ch/en/", 46.5835, 7.0830),
        dining("咖啡休息", "HR Giger Bar", "museum 对面", "饮料与简餐、主题室内设计", "约 CHF 10–30", "时段与 museum 不完全相同", "一般无需订位", "https://www.hrgigerbar.com/", 46.5841, 7.0830),
      ],
      background: ["Gruyères 位于通往阿尔卑斯山口的丘陵，城堡控制路线并形成领主中心。", "AOP 奶酪来自更广的农业体系；村口的 cheese dairy 能把商品与生产地重新连接。"],
      resources: [resource("Gruyères Tourism", "https://fribourg.ch/en/gruyeres/"), resource("Gruyères Castle", "https://www.chateau-gruyeres.ch/en"), resource("Maison du Gruyère", "https://www.lamaisondugruyere.ch/en")],
    },
    gurten: {
      whyChoose: "只想用三至五小时获得 Bern 全景、草地和轻量步道，或给高强度日程安排恢复。",
      skipWhen: "山顶低云完全遮住城市、雷暴或 Gurtenbahn 维护停运时。",
      attractions: [
        attraction("Gurtenbahn", "由 Wabern 快速爬升至 Bern local mountain，短程交通本身展示城市与近郊关系。", "15–25 分钟", "班次与维护期查官网", "票价临行确认", "一般无需预约", "Libero／住宿票适用范围需单独核对", "https://www.gurtenbahn.ch/en", 46.9192, 7.4737, "Gurtenbahn"),
        attraction("Gurten observation tower", "免费塔楼提供 Bern、Aare 和 Alps 的 360 度视角。", "25–40 分钟", "户外设施依天气", "免费", "无需预约", "强风、雷雨或结冰不要登塔", "https://www.gurtenpark.ch/en/discover/observation-tower", 46.9218, 7.4869, "Gurten tower Bern"),
        attraction("Gurten meadow loop", "山顶草地、林缘和短步道适合低强度散步与野餐。", "45–90 分钟", "公共路径全天；活动可能占用区域", "免费", "无需预约", "雨后泥泞；留意自行车路线", "https://www.gurtenpark.ch/en", 46.9230, 7.4870, "Gurten park"),
      ],
      dining: [
        dining("主餐", "Restaurant Gurtners", "山顶站附近", "瑞士季节菜与景观用餐", "约 CHF 30–55", "临行查官网", "周末建议订位", "https://www.gurtenpark.ch/en/restaurants/gurtners", 46.9219, 7.4860),
        dining("快速补给", "Gurten takeaway / picnic", "山顶草地", "简餐、饮料或自备野餐", "约 CHF 8–25", "摊点季节营业", "无需订位", "https://www.gurtenpark.ch/en/restaurants", 46.9223, 7.4864),
      ],
      background: ["Gurten 是 Bern 南侧的 local mountain，海拔不高但足以把 Aare 半岛、城市扩张与 Alps 放进同一视野。", "它的价值是短距离换取空间理解，而非高山挑战。"],
      resources: [resource("Gurten Park", "https://www.gurtenpark.ch/en"), resource("Gurtenbahn", "https://www.gurtenbahn.ch/en")],
    },
    "aare-riverside": {
      whyChoose: "想在 Bern 市内用两至四小时观察河色、Marzili 与城市高低差，不参与水上活动。",
      skipWhen: "高水位、雷暴、结冰、河岸封闭或鞋底不适合湿滑路面时。",
      attractions: [
        attraction("Marzilibahn", "极短 funicular 连接 Bundeshaus 高地和 Marzili 河岸，直接体现城市垂直落差。", "10–20 分钟", "班次查运营方", "市内票适用以 Libero/SBB 为准", "无需订位", "维护时改走楼梯或绕行", "https://www.marzilibahn.ch/en/", 46.9440, 7.4436, "Marzilibahn Bern"),
        attraction("Marzili riverbank", "公共河岸、泳池外缘和草地呈现 Bern 日常生活；本模块只沿岸观察。", "45–75 分钟", "公共路径依封闭公告", "免费", "无需预约", "Aare 水流急；不建议无当地经验者下水", "https://bern.com/en/news/stories-and-recommendations/aare", 46.9418, 7.4438, "Marzili Aare"),
        attraction("Dalmaziquai walk", "沿 Aare 平缓连接 Marzili 与 Museumsquartier 一带，适合作为安全短线。", "40–70 分钟", "公共路径全天，水位可影响", "免费", "无需预约", "骑行与步行共用段注意让行", "https://bern.com/en/explore/activities-and-excursions/aare", 46.9420, 7.4510, "Dalmaziquai Bern"),
      ],
      dining: [
        dining("咖啡休息", "Marzer", "Marzili 社区", "咖啡、烘焙与轻食", "约 CHF 8–25", "临行确认", "一般无需订位", "https://www.marzer.ch/", 46.9411, 7.4453),
        dining("快速补给", "Dampfzentrale restaurant", "Dalmaziquai 河岸中段", "季节菜、饮料与文化场馆餐饮", "约 CHF 20–45", "活动日时段不同", "晚餐建议订位", "https://www.dampfzentrale.ch/en/gastronomy/", 46.9390, 7.4459),
      ],
      background: ["Aare 深切割 Bern 台地，使旧城看似平坦的街道在边缘突然下降。", "河流既是城市景观也是高风险水体；岸线体验与游泳能力必须明确分开。"],
      resources: [resource("Bern Aare 指南", "https://bern.com/en/news/stories-and-recommendations/aare"), resource("Marzilibahn", "https://www.marzilibahn.ch/en/")],
    },
  };

  const activityBatch = {
    "interlaken-paragliding": {
      whyChoose: "预报适合飞行、符合体重与健康条件，并愿意把最终决定交给持证 tandem pilot。",
      skipWhen: "强风、降雨、低云、近期手术／严重健康问题，或无法接受短时通知改期与取消。",
      operators: [
        { name: "Skywings Paragliding", price: "价格依飞行高度／时长，预约页确认", meeting: "夏季常见 Höheweg 56；亦可能安排住宿接送", duration: "整体约 1.5 小时；空中常见约 10–20 分钟", eligibility: "常见最低年龄约 5–6 岁；体重上限会随风况约 80–90 kg", cancellation: "天气不适由 pilot 决定改期或取消；以预订条款为准", bookingUrl: "https://www.interlaken-paragliding.com/" },
        { name: "Twin Paragliding", price: "按 flight package 显示，照片／视频通常另计", meeting: "Interlaken 指定集合点或接送", duration: "依 flight package 与接送安排", eligibility: "年龄、体重、鞋服与健康条件须在预约时确认", cancellation: "天气安全决定优先；核对退款和 no-show 条款", bookingUrl: "https://www.twin-paragliding.ch/en/" },
      ],
      attractions: [
        attraction("Operator check-in", "完成免责声明、体重与装备确认，听取因天气调整的最终方案。", "20–35 分钟", "只按预约时段", "含在活动流程", "必须预约", "提早到场；如实申报健康状况", "https://welcome.interlaken.ch/en/interlaken/streaming/detail/POI/p_100044073/skywings-paragliding", 46.6868, 7.8580, "Interlaken paragliding"),
        attraction("Beatenberg launch area", "常见起飞区之一；由 operator 接送，实际场地随风向调整。", "briefing + 起飞约 20–40 分钟", "仅天气允许", "含在预订", "由 operator 安排", "不要自行前往或跨越起飞线", "https://www.interlaken-paragliding.com/", 46.7059, 7.7798, "Beatenberg paragliding"),
        attraction("Höhematte landing area", "常见降落区，结束后可直接在 Interlaken 中心休息。", "15–25 分钟", "仅活动时使用", "免费观察；飞行含预订", "听从地勤", "观众须留在标线外", "https://www.interlaken.ch/en/experiences/poi/hohematte-park", 46.6867, 7.8587, "Hohematte paragliding"),
      ],
      dining: [
        dining("快速补给", "Grand Café Schuh", "集合前后", "轻食、巧克力与饮料", "约 CHF 10–30", "临行确认", "无需订位", "https://www.schuh-interlaken.ch/", 46.6865, 7.8598),
        dining("主餐", "Hüsi Bierhaus", "活动完成后", "瑞士热食与汉堡", "约 CHF 25–45", "临行确认", "晚餐建议订位", "https://www.huesi-bierhaus.ch/", 46.6863, 7.8586),
      ],
      background: ["Interlaken 的谷风与开阔降落区使 tandem paragliding 成为成熟活动，但每天仍需由 pilot 按局地风况判断。"],
      resources: [resource("Skywings 官方旅游局条目", "https://welcome.interlaken.ch/en/interlaken/streaming/detail/POI/p_100044073/skywings-paragliding"), resource("Twin Paragliding", "https://www.twin-paragliding.ch/en/")],
    },
    "lake-thun-cruise": {
      whyChoose: "希望从船上串联 Thun、Spiez 或 Interlaken West，并把一段湖程作为低强度主体验。",
      skipWhen: "当季时刻表无法连接回程、强风导致班次调整，或晕船且无法选择短段。",
      operators: [
        { name: "BLS scheduled cruise", price: "按区段与舱等计价；SBB/BLS 查询实际价格", meeting: "Thun、Spiez 或 Interlaken West 码头", duration: "短段约 40–90 分钟；全段更长", eligibility: "一般公共船班；无特殊体力门槛", cancellation: "班次调整以 BLS 运营公告为准", bookingUrl: bls },
        { name: "BLS Lake Thun day ticket", price: "日票价格与折扣资格临行确认", meeting: "有效码头任选班次", duration: "适合计划两段以上船程的全天方案", eligibility: "核对舱等、折扣卡与有效日期", cancellation: "票券退款和班次取消按产品条款", bookingUrl: "https://www.bls.ch/en/fahren/fahrausweise/billette/tageskarten" },
      ],
      attractions: [
        attraction("Thun pier", "火车站旁的可靠登船点，适合先走老城再上船。", "提前 20–30 分钟", "按 BLS timetable", "码头免费；船票另购", "旺季可提前购票", "确认船名、方向和登船栈桥", bls, 46.7568, 7.6294, "Thun boat pier"),
        attraction("Spiez harbour", "城堡、葡萄园和 Niesen 山在短停内即可形成完整湖岸画面。", "45–90 分钟", "公共港湾全天", "免费", "无需预约", "上坡回车站需时间，可搭 bus", "https://www.spiez.com/en", 46.6859, 7.6815, "Spiez harbour"),
        attraction("Interlaken West pier", "Aare 航道进入城市西端，可接 Unterseen 与火车回 Bern。", "20–45 分钟", "按船班", "公共区域免费", "无需预约", "码头与车站步行短，但仍留转乘缓冲", bls, 46.6819, 7.8497, "Interlaken West pier"),
      ],
      dining: [
        dining("主餐", "BLS onboard restaurant", "船程中", "依船型提供热食或小食", "约 CHF 15–45", "只有部分班次／船型提供", "餐饮航次建议查询或预约", bls, 46.7200, 7.7300),
        dining("咖啡休息", "Spiez harbour cafés", "下船短停", "咖啡、甜点与轻食", "约 CHF 10–30", "季节营业", "通常无需订位", "https://www.spiez.com/en/experiences/food-drink", 46.6855, 7.6850),
      ],
      background: ["Lake Thun 船班既是观光体验也是沿岸公共交通，但季节频率远低于铁路。"],
      resources: [resource("BLS 船班与资讯", bls), resource("BLS 日票", "https://www.bls.ch/en/fahren/fahrausweise/billette/tageskarten")],
    },
    "lake-brienz-cruise": {
      whyChoose: "想把 Lake Brienz 的水色和 Giessbach／Brienz 作为低强度船程主线，并能接受季节班次。",
      skipWhen: "没有可靠陆路回程、Giessbach 衔接过紧、强风停航或容易晕船时。",
      operators: [
        { name: "BLS scheduled cruise", price: "按区段与舱等，SBB/BLS 显示为准", meeting: "Interlaken Ost、Brienz 等码头", duration: "短段约 40–90 分钟；全湖段更长", eligibility: "一般公共船班", cancellation: "时刻与取消按 BLS 公告", bookingUrl: bls },
        { name: "BLS Giessbach / Brienz segment", price: "区段票；funicular 可能另购", meeting: "Interlaken Ost 或 Brienz", duration: "船程加下船参观约 3–5 小时", eligibility: "Giessbach 路段有坡道与台阶", cancellation: "船或 funicular 停运时改火车／bus", bookingUrl: "https://www.giessbach.ch/en/arrival" },
      ],
      attractions: [
        attraction("Interlaken Ost pier", "火车站东侧的 Lake Brienz 起点，先在此确认船与铁路回程。", "提前 20–30 分钟", "按 BLS timetable", "船票另购", "可提前购票", "同一站区仍需留步行与找码头时间", bls, 46.6905, 7.8695, "Interlaken Ost pier"),
        attraction("Giessbach See", "湖岸码头连接历史 funicular 与多层瀑布。", "1.5–3 小时", "船、funicular 季节营运", "各段票价另查", "班次少时应预先规划", "不要错过最后一程；瀑布步道湿滑", "https://www.giessbach.ch/en/arrival", 46.7328, 8.0200, "Giessbach See"),
        attraction("Brienz pier", "靠近火车站和湖岸步道，是最稳妥的船火车转换终点。", "30–60 分钟", "公共湖岸全天", "免费", "无需预约", "确认 Brienz–Interlaken Ost 铁路班次", bls, 46.7540, 8.0380, "Brienz pier"),
      ],
      dining: [
        dining("主餐", "Grandhotel Giessbach restaurant", "Giessbach 下船段", "季节菜与湖景", "约 CHF 35–70", "季节营业", "建议订位", "https://www.giessbach.ch/en/restaurants", 46.7333, 8.0203),
        dining("快速补给", "Interlaken Ost station shops", "登船前", "三明治、饮料与零食", "约 CHF 8–20", "按站内店铺", "无需订位", "https://www.sbb.ch/en/travel-information/stations/find-station/interlaken-ost.html", 46.6905, 7.8695),
      ],
      background: ["Lake Brienz 的冰川细粉改变水色；南岸节点依赖船和 bus，北岸铁路则提供重要备份。"],
      resources: [resource("BLS Lake Brienz", bls), resource("Giessbach 到达", "https://www.giessbach.ch/en/arrival")],
    },
    "lake-lucerne-cruise": {
      whyChoose: "已到 Lucerne，想用一至三小时从湖面看城市和群山，而不进入完整山岳铁路日。",
      skipWhen: "船班与 Bern 回程冲突、强风大雨、或已安排大型 museum 而时间不足时。",
      operators: [
        { name: "SGV 1-hour panorama cruise", price: "官方 webshop 参考从 CHF 15 起，依日期／舱等确认", meeting: "Luzern Bahnhofquai", duration: "约 1 小时", eligibility: "一般观光船", cancellation: "依 SGV 产品与运营条款", bookingUrl: "https://webshop.lakelucerne.ch/en/products/panorama-cruise" },
        { name: "SGV scheduled lake service", price: "按区段和舱等计价", meeting: "Luzern Bahnhofquai 及沿湖码头", duration: "自选短段；须与返程船／铁路衔接", eligibility: "一般公共船班", cancellation: "班次变化以 SGV timetable 为准", bookingUrl: "https://www.lakelucerne.ch/en/information/timetable/" },
      ],
      attractions: [
        attraction("Luzern Bahnhofquai", "火车站正前方码头，步行即可从城际列车切换到湖船。", "提前 20–30 分钟", "按 SGV timetable", "码头免费；船票另购", "热门航次可预购", "确认码头编号和船名", "https://www.lakelucerne.ch/en/information/timetable/", 47.0500, 8.3100, "Luzern pier"),
        attraction("Lucerne basin panorama", "短程即可回望 Chapel Bridge、老城和 Pilatus/Rigi 方向。", "约 1 小时", "季节与班次不同", "按产品", "可在线购票", "甲板风大，带防风层", "https://webshop.lakelucerne.ch/en/products/panorama-cruise", 47.0400, 8.3300, "Lake Lucerne panorama boat"),
        attraction("Verkehrshaus-Lido shore", "短段航线常经过交通博物馆和湖滨，可作为单向下船点但先查回城交通。", "30–75 分钟", "按船／bus 班次", "区段票另查", "无需特殊预约", "留出回 Luzern station 的 bus 时间", "https://www.verkehrshaus.ch/en/visit/getting-here", 47.0528, 8.3353, "Verkehrshaus pier"),
      ],
      dining: [
        dining("咖啡休息", "SGV onboard catering", "船程中", "饮料、点心；服务依船型", "约 CHF 8–30", "并非所有班次完整供餐", "餐饮船另查", "https://www.lakelucerne.ch/en/experience/gastronomy/", 47.0400, 8.3200),
        dining("主餐", "Rathaus Brauerei", "回到 Old Town 后", "瑞士菜与啤酒厂料理", "约 CHF 25–45", "临行确认", "建议订位", "https://www.rathausbrauerei.ch/", 47.0518, 8.3058),
      ],
      background: ["Lake Lucerne 由多个湖盆与狭窄水道组成，短程 panorama cruise 只覆盖 Lucerne 近端，而非整个湖区。"],
      resources: [resource("SGV timetable", "https://www.lakelucerne.ch/en/information/timetable/"), resource("1-hour cruise", "https://webshop.lakelucerne.ch/en/products/panorama-cruise")],
    },
    "aare-guided-raft": {
      whyChoose: "想在专业向导和安全装备下体验 Aare 水面，并能接受水位与天气拥有最终否决权。",
      skipWhen: "不符合游泳／健康要求、高水位、雷暴、饮酒后，或 operator 无法明确保险与撤离安排。",
      operators: [
        { name: "Outdoor Switzerland / Bern group rafting", price: "Bern Welcome 参考每组 1–16 人从 CHF 990；最终报价确认", meeting: "由 operator 指定 Bern 周边集合／下水点", duration: "约 3 小时", eligibility: "游泳能力、年龄和健康条件预约时确认", cancellation: "高水位或恶劣天气由 operator 取消／改期", bookingUrl: "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare" },
        { name: "Aarebootsvermietung guided tour", price: "按船型、人数与向导方案报价", meeting: "预订后确认起点与接送", duration: "依河段与产品", eligibility: "按产品确认年龄、游泳能力与装备", cancellation: "水位、天气及预订条款为准", bookingUrl: "https://www.aarebootsvermietung.ch/" },
      ],
      attractions: [
        attraction("Safety briefing", "确认救生衣、划桨、落水处置、信号和撤离点；没有完成说明不得下水。", "30–45 分钟", "只按预约", "含在活动报价", "必须预约", "如实说明游泳能力和健康状况", "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare", 46.9250, 7.4300, "Aare rafting Bern"),
        attraction("Guided Aare section", "实际河段由 operator 根据水位选择，从水面理解 Bern 河谷。", "1.5–2.5 小时", "仅安全条件允许", "含在活动", "由 operator 安排", "全程穿救生衣并服从向导", "https://www.aarebootsvermietung.ch/", 46.9400, 7.4550, "Aare guided boat"),
        attraction("Take-out and return", "指定结束点清点人员装备、更衣并确认回程交通。", "30–60 分钟", "按 operator 流程", "接送是否包含须确认", "预约时核对", "不要自行在非指定岸边结束", "https://www.aarebootsvermietung.ch/", 46.9500, 7.4700, "Aare river Bern"),
      ],
      dining: [
        dining("快速补给", "Marzili area café", "集合前后，视 operator 路线", "轻食与补水", "约 CHF 10–25", "各店不同", "无需订位", "https://bern.com/en/explore/food-drink", 46.9418, 7.4438),
        dining("主餐", "Altes Tramdepot", "活动后回 Bern", "热食与饮料", "约 CHF 25–45", "临行确认", "建议订位", "https://altestramdepot.ch/", 46.9486, 7.4607),
      ],
      background: ["Aare 水温低、流速快且水位变化明显；专业 guided raft 与自行游泳在风险管理上完全不同。"],
      resources: [resource("Bern Welcome rafting", "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare"), resource("Aarebootsvermietung", "https://www.aarebootsvermietung.ch/")],
    },
    canyoning: {
      whyChoose: "体力良好、会游泳、愿意接受跳跃／滑降／绳降，并选择与经验匹配的专业路线。",
      skipWhen: "雷雨、高水位、受伤、怕水、无法符合年龄体重健康限制，或只因同伴压力而参加。",
      operators: [
        { name: "Outdoor Interlaken — Canyoning Interlaken", price: "成人参考 CHF 154；团体 10+ 参考 CHF 139，临行确认", meeting: "Outdoor base, Wilderswil；含指定接送", duration: "约半日，常见出发时段以预约页为准", eligibility: "须符合游泳、年龄、体重和健康要求", cancellation: "水位过高等安全原因会取消／改期", bookingUrl: "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken" },
        { name: "Alpin Raft canyoning", price: "依 Interlaken / Chli Schliere 等路线报价", meeting: "Interlaken 区指定基地／接送点", duration: "半日或全日", eligibility: "各 canyon 难度、年龄和游泳条件不同", cancellation: "天气与水位安全决定，核对退款条款", bookingUrl: "https://www.alpinraft.com/canyoning/" },
      ],
      attractions: [
        attraction("Operator base and gear fitting", "更换 wetsuit、helmet、harness，确认鞋码、健康与紧急流程。", "40–60 分钟", "只按预约", "通常含技术装备", "必须预约", "泳装穿在 wetsuit 内；贵重物品留存规则先问", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6656, 7.8641, "Outdoor Interlaken Wilderswil"),
        attraction("Interlaken canyon", "入门至中级的短峡谷，包含滑降、跳跃和绳降；具体动作由向导按现场决定。", "峡谷内约 1.5–2 小时", "约 Apr–Oct 且依水位", "依 operator package", "必须预约", "任何跳跃都可向向导说明；不要隐瞒恐惧或伤病", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6500, 7.8500, "Canyoning Interlaken"),
        attraction("Debrief and return", "回基地更衣、补水并处理照片；为疲劳和交通延误保留缓冲。", "30–60 分钟", "随活动流程", "照片是否包含依产品", "无需另订", "不要马上安排不可退的远程交通", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6656, 7.8641, "Canyoning gear Interlaken"),
      ],
      dining: [
        dining("快速补给", "Outdoor base snack / nearby Wilderswil", "集合前后", "轻食、饮水与能量补给", "约 CHF 8–20", "按基地与附近店铺", "无需订位", "https://www.outdoor.ch/en/", 46.6656, 7.8641),
        dining("主餐", "Interlaken centre restaurant", "活动完成并回城后", "热食与高碳水餐", "约 CHF 25–45", "各店不同", "晚餐繁忙时订位", "https://www.interlaken.ch/en/experiences/food-drink", 46.6865, 7.8585),
      ],
      background: ["Canyoning 把天然水道变成技术路线；即使同一名称，水量变化也会显著改变难度。", "成熟 operator 会根据现场跳过动作、改线或取消，这不是服务失败而是核心安全机制。"],
      resources: [resource("Outdoor Interlaken", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken"), resource("Alpin Raft", "https://www.alpinraft.com/canyoning/")],
    },
  };

  const contextualNotes = {
    "bern-city-walk": [
      "从 Bahnhof 向东走，街道会依次经过城市历次扩建形成的 Spitalgasse、Marktgasse 与 Kramgasse；钟塔和旧城门的位置，就是昔日城市边界向西移动留下的刻度。",
      "现场可特别观察砂岩立面、地窖入口、街心喷泉与连续拱廊：它们分别对应建筑材料、商业储藏、公共供水和雨雪气候下的城市生活。",
    ],
    interlaken: [
      "Interlaken West、Höheweg 与 Interlaken Ost 并不是三个孤立景点，而是一条由历史城镇、十九世纪旅游大道到现代铁路门户的西东剖面。",
      "Höhematte 被保留为开阔草地，使酒店区始终拥有朝向 Jungfrau 的视廊；滑翔伞降落只是这片公共空间今天的新用途。",
    ],
    lauterbrunnen: [
      "瀑布多从高处悬谷落入主谷，说明较小冰川支谷没有被侵蚀到与主谷同一高度；Staubbach 与 Trümmelbach 展示了外露和山体内部两种水系。",
      "村落、铁路、牧场和道路几乎都被压缩在狭窄谷底。沿谷向南走时，可观察交通与房屋如何避开落石区、洪水线和陡壁。",
    ],
    wengen: [
      "齿轨铁路让 Wengen 在没有普通汽车道路的情况下发展成大型度假村；车站周围的旅馆尺度，记录了十九世纪末以来的阿尔卑斯旅游增长。",
      "由教堂一带向谷底看，能同时辨认 Lauterbrunnen 村、Staubbach Falls 和对面悬崖台地，从而理解 Wengen 为什么占据这一高位平台。",
    ],
    muerren: [
      "村落沿近乎等高的台地展开，建筑朝向主峰排列；从 BLM 车站穿村而过，比只在观景台拍照更能感受高山聚落如何利用有限平地。",
      "传统农舍、Belle Époque 旅馆和现代缆车设施并置，反映 Mürren 从农业社区、登山基地到国际冬季运动目的地的多重身份。",
    ],
    gimmelwald: [
      "Gimmelwald 的房屋不像城市街道般连续，而是围绕农地、坡度和水源疏落分布；村落空间首先服务农业，其次才服务观光。",
      "从 Gimmelwald 步行上 Mürren，会看到商业密度和建筑规模逐渐增加。这段短路最能比较两个相邻无车村落不同的发展路径。",
    ],
    "grindelwald-village": [
      "Eiger 北壁不是远处背景，而是决定日照、谷地尺度和旅游想象的巨大立面。沿 Dorfstrasse 行走时，山体会不断在建筑间重新出现。",
      "冰川曾更深入谷地；Glacier Canyon 和地貌展示了冰体后退后留下的侵蚀痕迹，也让“冰川村”不只是一项品牌名称。",
    ],
    "grindelwald-first": [
      "First 位于村落北侧山坡，观景方向主要朝向 Eiger 与 Grindelwald 谷；Bachalpsee 则把路线带到更开阔、相对平缓的高山台地。",
      "缆车站、Cliff Walk、山湖与冒险项目属于不同时间尺度：前两者短而集中，山湖需要步行，活动则受排队和风况控制，不能只看地图距离。",
    ],
    jungfraujoch: [
      "铁路穿越 Eiger 与 Mönch 山体抵达高山坳，其工程改变了普通旅客接近冰川世界的方式，也塑造了“Top of Europe”的旅游叙事。",
      "室内展览、Ice Palace、Sphinx 与 Plateau 是由封闭到暴露的渐进动线；依这个顺序参观，可让身体逐步适应寒冷、风势和海拔。",
    ],
    thun: [
      "城堡占据 Aare 与湖口上方的制高点，老城商业街沿河发展，Schadau 则在城市转向湖景旅游的一端；三者分别代表权力、贸易和休闲。",
      "Obere Hauptgasse 的高架人行道是 Thun 最特殊的城市细节：上下两层入口回应坡地，也让商业街拥有不同于平地老城的立体感。",
    ],
    "lake-thun": [
      "Niesen、湖面、葡萄园与 Spiez 城堡形成南岸的空间层次；天气清晰时，可用山峰方向判断自己位于湖的哪一端。",
      "湖岸聚落往往由码头向上连接铁路和村中心。步行中的高差不是绕路，而是十九世纪船运与后来铁路系统叠加的结果。",
    ],
    iseltwald: [
      "村落位于湖岸小半岛与山坡之间，公共空间容量很小；码头、bus stop 和餐饮集中在同一带，因此班次到达时会短暂拥挤。",
      "观察木屋朝向、船坞和岸线，可看到渔业、湖上交通与现代观光共同留下的痕迹；私人住宅仍是这里的主体。",
    ],
    "lake-brienz": [
      "Brienz 北岸铁路与南岸季节船／bus 构成不对称交通网络。规划时先理解两岸差异，才能知道哪个节点适合作为可靠退路。",
      "Giessbach 的瀑布、森林、历史酒店与 funicular 组成十九世纪湖区旅游景观；它不是单一瀑布，而是一套由船抵达的完整空间设计。",
    ],
    lucerne: [
      "Reuss 把湖水引出城市，Chapel Bridge 斜跨河道并连接两岸。站在桥上比较湖、河和城墙遗迹，能迅速读懂 Lucerne 的水陆节点。",
      "彩绘立面、行会建筑、教堂和旅游纪念设施并存，说明 Lucerne 既是中世纪贸易城市，也很早就被塑造成面向国际旅客的瑞士形象窗口。",
    ],
    lausanne: [
      "由 Cathedral 高城到 Ouchy 湖岸的巨大落差，把宗教中心、商业街、铁路站和港口分成不同高度；metro 是串联这些层级的城市骨架。",
      "视野从高城屋顶转向 Lake Geneva 和法国一侧群山，也对应城市身份从 Vaud 地方中心延伸到国际体育机构所在地。",
    ],
    fribourg: [
      "Sarine 河在砂岩地形中切出深谷，高城位于易防守的平台，下城则靠近桥梁和水力资源；路线的下降过程就是城市社会地理的转换。",
      "街名、标识和日常语言体现法语与德语文化接触，但边界并非简单分成两半；可留意同一地点在不同资料中的双语名称。",
    ],
    gruyeres: [
      "城堡位于山丘末端，主街像一条通往堡垒的长前庭。无车村落今天看似为观光而设，其骨架原本服务防御、集市和领主经济。",
      "奶酪文化应从牧场、乳品生产、熟成与餐桌连续理解；Maison du Gruyère 与村内餐厅分别呈现生产系统和消费传统。",
    ],
    gurten: [
      "由山顶向北可辨认 Aare 半岛与 Bern 城区，向南则是 Alps；Gurten 正好处在城市日常与高山想象之间。",
      "funicular、草地、活动场地和林间步道显示 local mountain 的功能：它不是遥远自然，而是由公共交通接入的城市休闲基础设施。",
    ],
    "aare-riverside": [
      "从 Bundeshaus 附近下降到 Marzili，短距离内会经历行政高地、住宅坡面和河岸休闲带，呈现 Bern 极强的垂直城市结构。",
      "河色来自上游沉积物与光线，但漂亮水面容易掩盖低温和流速。观察入水梯、警示和当地人的路线，有助于理解河流文化建立在经验之上。",
    ],
    "interlaken-paragliding": [
      "起飞场位于山坡，降落区位于平坦谷底，垂直地形与谷风共同构成飞行条件；路线会随风向而改变，并非固定观光航线。",
      "从空中可同时辨认 Thun 与 Brienz 两湖、Aare 水系和 Interlaken 城区，这种空间总览是活动的核心价值，而不仅是刺激感。",
    ],
    "lake-thun-cruise": [
      "船上视角把沿岸城堡、葡萄园和山口排列在同一水平线上；与火车相比，水路更容易看清聚落为什么围绕港湾形成。",
      "蒸汽船传统与现代定期航运共同构成湖上文化。选择区段时可留意船型，因为甲板空间、餐饮和旅行节奏会明显不同。",
    ],
    "lake-brienz-cruise": [
      "由 Interlaken Ost 向东航行时，湖面逐渐收窄，南岸瀑布与北岸村落交替出现；水上路线比陆路更清楚展示两岸地形差异。",
      "Giessbach 的码头与 funicular 是历史湖船旅游网络的典型组合，Brienz 火车站则代表后来的铁路连接；两者可在一程中对照。",
    ],
    "lake-lucerne-cruise": [
      "Lucerne 近端湖盆开阔，但完整 Lake Lucerne 由多个湖盆和狭窄水道组成；一小时航程只是城市水域的缩影。",
      "离岸后回望车站、教堂塔楼与旧城屋顶，可以理解 Lucerne 如何围绕湖口发展，也能区分城市游船与通往山岳铁路的长线交通。",
    ],
    "aare-guided-raft": [
      "河面视角会放大桥梁净高、岸壁和水流转弯，让平日在老城上方看见的 Aare 变成一条连续地形通道。",
      "Bern 的河流文化建立在冷水、快速水流和明确下水／上岸知识上；向导的路线判断本身就是活动最重要的地方经验。",
    ],
    canyoning: [
      "峡谷是水流长期切割岩体形成的狭窄通道，落差、岩面和水量决定每个动作；同一路线在不同水位下会成为不同难度。",
      "装备、接送、briefing 与撤退点看似是体验外围，实际上共同构成专业 canyoning 文化；安全决定优先于完成所有跳跃。",
    ],
  };

  const detailedCityWalks = {
    lucerne: {
      title: "Lucerne 湖口与老城 City Walk",
      summary: "由火车站跨过 Reuss，穿过 Old Town 与北侧历史地标，再沿湖岸回到车站；标准版约 5.5 公里。",
      start: "Luzern Bahnhof",
      finish: "Luzern Bahnhofquai",
      estimatedDistance: "约 5.5 公里",
      walkingTime: "净步行约 1 小时 25 分；含参观约 5–7 小时",
      shortCut: "Lion Monument 后直接由 Löwenplatz 搭 bus 回 Bahnhof，可省略 Hofkirche 与长湖岸段。",
      checkpoints: [
        checkpoint("Luzern Bahnhof / Bahnhofplatz", 47.0502, 8.3093, "10–15 分钟", "起点", "先在站前辨认湖、Reuss 出水口、Bahnhofquai 船码头与旧车站拱门，建立整条路线方向。", "先确认回 Bern 的候选班次；需要坐船时同时确认码头。"),
        checkpoint("Chapel Bridge & Water Tower", 47.0517, 8.3071, "25–35 分钟", "步行约 5 分钟", "沿木桥斜跨 Reuss，观察桥顶绘画、Water Tower 和两岸城市关系。", "桥内狭窄，拍照时靠边；早上客流较少。"),
        checkpoint("Jesuit Church", 47.0505, 8.3050, "20–30 分钟", "步行约 6 分钟", "从南岸回看 Chapel Bridge，并进入巴洛克教堂理解 Lucerne 的天主教城市身份。", "礼拜或活动时不作观光；内部保持安静。"),
        checkpoint("Weinmarkt & Old Town lanes", 47.0528, 8.3044, "45–60 分钟", "步行约 8 分钟", "经 Reussbrücke 进入 Weinmarkt、Hirschenplatz 等彩绘广场，把立面、喷泉和行会建筑串成一段。", "不要逐条小巷来回；以 Weinmarkt 为主 checkpoint。"),
        checkpoint("Musegg Wall / Zyt Tower", 47.0547, 8.3034, "35–55 分钟", "上坡约 10 分钟", "由老城登到中世纪城墙低段，从高处看屋顶、湖口和城市边缘。", "开放具季节性且多台阶；雨天、怕高或时间不足可跳过。", true),
        checkpoint("Lion Monument", 47.0585, 8.3102, "25–35 分钟", "由城墙步行约 15 分钟", "在岩壁纪念雕塑前理解瑞士卫兵、十九世纪纪念文化与早期国际旅游。", "团客集中时先看周围说明，稍后再靠近水池。"),
        checkpoint("Hofkirche & Nationalquai", 47.0550, 8.3142, "35–50 分钟", "步行约 9 分钟", "由双塔教堂转入湖岸，路线从封闭老城切换到开阔水面。", "教堂开放受礼拜影响；湖岸风大。"),
        checkpoint("Lakeside promenade → Bahnhofquai", 47.0510, 8.3121, "35–50 分钟", "沿湖步行约 12 分钟", "沿 Nationalquai 回望城市天际线，在 Bahnhofquai 完成闭环。", "时间不足可从附近 bus stop 返回；不要为走完全程错过火车。"),
      ],
    },
    lausanne: {
      title: "Lausanne 高城到 Ouchy City Walk",
      summary: "利用 metro 先到 Cathedral 高城，再逐层向下穿过 Old Town、Flon 和 Ouchy，避免逆坡重复行走；标准版约 5 公里。",
      start: "Lausanne Gare → metro 至 Bessières / Riponne",
      finish: "Ouchy-Olympique metro",
      estimatedDistance: "约 5 公里",
      walkingTime: "净步行约 1 小时 30 分；含 museum 约 6–8 小时",
      shortCut: "Place de la Palud 后由 Lausanne-Flon 搭 metro 直接回 Gare；不下 Ouchy。",
      checkpoints: [
        checkpoint("Lausanne Gare", 46.5168, 6.6291, "10–15 分钟", "起点", "先看车站与城市坡度，不从这里徒步硬爬 Cathedral；City Walk 的关键是先乘 metro 到高处。", "购买／确认市内交通票，并记住回 Bern 月台信息。"),
        checkpoint("Bessières Bridge viewpoint", 46.5217, 6.6370, "15–25 分钟", "metro 后步行约 5 分钟", "从桥面观察 Cathedral 高地、街谷与下层 metro 结构，快速建立 Lausanne 的垂直关系。", "桥上有交通，拍照留在人行区域。"),
        checkpoint("Lausanne Cathedral", 46.5228, 6.6358, "45–60 分钟", "上坡约 6 分钟", "以哥特式 Cathedral 作为高城核心，观察门廊、内部空间和城市屋顶。", "礼拜与活动优先；塔楼开放和最后进入时间另查。"),
        checkpoint("Escaliers du Marché", 46.5220, 6.6340, "15–25 分钟", "步行约 4 分钟", "沿有盖木阶梯向下，把 Cathedral 与商业 Old Town 连接起来。", "雨天木阶与石阶湿滑；顺坡向下走比反向省力。"),
        checkpoint("Place de la Palud", 46.5213, 6.6328, "30–45 分钟", "步行约 4 分钟", "市政厅、喷泉和步行商业街构成 Lausanne 的市民中心，可在这里午餐或咖啡。", "整点机械钟并非必须等待；先守住整体节奏。"),
        checkpoint("Le Flon", 46.5203, 6.6300, "30–40 分钟", "下坡约 8 分钟", "旧仓储与铁路谷地转型为当代商业文化区，是高城与湖岸之间的空间转换点。", "这里是 metro 枢纽，也是精简版结束点。"),
        checkpoint("Ouchy harbour", 46.5065, 6.6263, "35–50 分钟", "metro 至 Ouchy-Olympique", "由城市坡地突然抵达 Lake Geneva 水平岸线，观察港口、酒店与 Savoy Alps 远景。", "湖岸日照与风势都强；先确认 museum 开放再继续。"),
        checkpoint("The Olympic Museum", 46.5086, 6.6339, "2–3 小时", "湖岸步行约 12 分钟", "以展览和公园理解 Lausanne 的国际体育身份，作为全线主要室内 checkpoint。", "常见周一闭馆规律需临行确认；时间不足只走公园外部。", true),
        checkpoint("Ouchy-Olympique return", 46.5061, 6.6260, "10–15 分钟", "由 museum 回走约 12 分钟", "搭 metro 回 Gare，避免把已经完成的下坡路线徒步走回。", "至少预留 20–30 分钟由 Ouchy 回到火车月台。"),
      ],
    },
    fribourg: {
      title: "Fribourg 高低城 City Walk",
      summary: "由火车站进入高城 Cathedral，再一路下降到 Sarine、Lower Town 与 Pont de Berne，最后以 funicular 回到高处；标准版约 4.5 公里。",
      start: "Fribourg/Freiburg Bahnhof",
      finish: "Funiculaire Neuveville / St-Pierre",
      estimatedDistance: "约 4.5 公里",
      walkingTime: "净步行约 1 小时 20 分；含参观约 4–6 小时",
      shortCut: "Cathedral 后由高城返回车站；不下降 Lower Town，可缩成约 2 小时。",
      checkpoints: [
        checkpoint("Fribourg/Freiburg Bahnhof", 46.8031, 7.1512, "10–15 分钟", "起点", "确认自己位于瑞士 Fribourg/Freiburg，并从站前辨认高城方向。", "不要误用德国 Freiburg 的地图或车票。"),
        checkpoint("Place Georges-Python", 46.8050, 7.1566, "15–20 分钟", "步行约 8 分钟", "由现代交通区进入高城公共空间，是前往 Old Town 的清晰过渡点。", "市集或活动可能改变穿行路线。"),
        checkpoint("St Nicholas Cathedral", 46.8061, 7.1631, "45–70 分钟", "步行约 10 分钟", "以 Cathedral、彩绘玻璃与高塔理解高城宗教和政治中心。", "塔楼多级台阶且季节开放；先看门口公告。"),
        checkpoint("Zähringen Bridge viewpoint", 46.8073, 7.1681, "20–30 分钟", "步行约 7 分钟", "从高处先看 Sarine 谷地、Lower Town 与对岸，再决定下降路线。", "这里只走观景段，不必完整跨桥往返。"),
        checkpoint("Stalden descent", 46.8051, 7.1664, "20–30 分钟", "由 Cathedral 区步行约 6 分钟", "沿陡坡与中世纪街巷下到 Auge district，亲身体验高低城落差。", "石板路陡，雨天慢走；行动不便者改 bus。"),
        checkpoint("Pont de Berne", 46.8044, 7.1690, "25–35 分钟", "下坡约 8 分钟", "木桥、河流、城墙与下城房屋共同组成 Fribourg 最完整的空间 checkpoint。", "桥上仍可能有车辆，保持在人行侧。"),
        checkpoint("Lower Town / Place du Petit-Saint-Jean", 46.8034, 7.1658, "35–50 分钟", "河岸步行约 8 分钟", "在昔日工匠区安排午餐或咖啡，观察建筑尺度与高城明显不同。", "餐饮选择较分散，营业日临行确认。"),
        checkpoint("Funiculaire Neuveville", 46.8042, 7.1588, "15–25 分钟", "沿河与下城步行约 12 分钟", "搭历史 funicular 返回 St-Pierre 高处，以交通工具完成城市剖面闭环。", "维护或停运时用 bus；不要在疲劳后硬爬回车站。"),
      ],
    },
    gruyeres: {
      title: "Gruyères 奶酪工坊到城堡 City Walk",
      summary: "从铁路站和奶酪工坊出发，沿坡道进入无车中世纪村，经过主街、museum 与城堡后原线返回；标准版约 3.5 公里。",
      start: "Gruyères Gare",
      finish: "Gruyères Gare",
      estimatedDistance: "约 3.5 公里",
      walkingTime: "净步行约 55 分钟；含参观约 5–7 小时",
      shortCut: "只走 station → village → castle，Maison du Gruyère 与 HR Giger Museum 二选一。",
      checkpoints: [
        checkpoint("Gruyères Gare", 46.5820, 7.0724, "10–15 分钟", "起点", "站前同时看到 Maison du Gruyère 与山丘村落，先建立“生产在谷底、权力在高处”的空间关系。", "记录回 Bulle 的班次；上村前先决定 cheese dairy 是否参观。"),
        checkpoint("La Maison du Gruyère", 46.5820, 7.0726, "60–90 分钟", "站旁约 2 分钟", "从牛奶、制作到熟成理解 Gruyère AOP，不把奶酪文化缩成餐厅里的一锅 fondue。", "生产示范有时段；若错过可先上村，回程再看。", true),
        checkpoint("Village ascent / hill approach", 46.5830, 7.0780, "15–25 分钟", "上坡约 12–15 分钟", "沿坡道接近城墙，观察城堡如何控制山丘末端和周围牧场。", "坡度持续；可查询 local bus，但班次不密。"),
        checkpoint("Village gate & main street", 46.5836, 7.0824, "35–50 分钟", "步行约 5 分钟", "穿过城门进入无车主街，广场、喷泉、旅馆与商店构成城堡前的线性公共空间。", "午间团客集中，先走到主街尽头再回头选餐厅。"),
        checkpoint("HR Giger Museum / Bar", 46.5842, 7.0831, "60–90 分钟", "主街步行约 3 分钟", "超现实主义艺术与中世纪村形成刻意反差，是兴趣导向而非必做 checkpoint。", "内容可能不适合儿童；与 Castle 时间冲突时优先自己真正感兴趣的一项。", true),
        checkpoint("Gruyères Castle", 46.5847, 7.0833, "90–120 分钟", "步行约 3 分钟", "由庭院、室内展览、城墙和山地视野理解领主中心与防御位置。", "闭馆前至少留 90 分钟；内部和塔楼有台阶。"),
        checkpoint("Castle rampart viewpoint", 46.5850, 7.0838, "20–30 分钟", "城堡参观动线内／出口附近", "向谷底回看 railway、cheese dairy 与牧场，把一日路线压缩成一张空间图。", "天气差时缩短户外停留。"),
        checkpoint("Main street meal → station", 46.5835, 7.0830, "60–90 分钟", "回主街约 5 分钟", "以 cheese lunch 或 meringue 收尾，再预留约 20 分钟下坡回 station。", "不要把点餐时间压到最后一班连接前。"),
      ],
    },
  };

  function minutesFor(module) {
    if (["bern-city-walk", "gurten", "aare-riverside"].includes(module.id)) return ["09:30", "10:00", "12:00", "14:30", "16:30"];
    if (["interlaken", "thun", "lake-thun", "fribourg"].includes(module.id)) return ["08:30", "09:45", "12:15", "15:30", "18:30"];
    if (["jungfraujoch", "lausanne", "grindelwald-first"].includes(module.id)) return ["06:30", "09:30", "12:30", "15:30", "20:00"];
    return ["07:30", "09:45", "12:30", "15:30", "19:30"];
  }

  function enrich(module, detail) {
    const times = minutesFor(module);
    const first = detail.attractions[0];
    const second = detail.attractions[1];
    const last = detail.attractions[detail.attractions.length - 1];
    const activity = module.type === "activity";
    const variants = module.id === "bern-city-walk" ? [
      { name: "精简版", duration: "2–2.5 小时", when: "只有半天、抵达较晚或天气窗口较短", route: "Bern Bahnhof → Bundeshaus → Zytglogge → Kramgasse → Bern Minster → Münsterplattform" },
      { name: "完整版", duration: "4–5 小时", when: "默认选择；由政治区、Old City 完整走到 Aare 河谷与全景终点", route: module.route },
      { name: "文化延伸版", duration: "5–6 小时", when: "开放时间合适且体力充足；Einstein House、Zytglogge tour 或登塔只选一项", route: `${module.route} ＋ 一个室内／登塔项目` },
    ] : [
      { name: "精简版", duration: "约 3–4 小时（另加 Bern 往返）", when: "出发较晚、天气窗口短或体力一般", route: `${first.name} → ${second.name}` },
      { name: "标准版", duration: module.duration, when: "默认选择；保留用餐与交通缓冲", route: module.route },
      { name: "延伸版", duration: "接近模块时长上限", when: "早出发、状态稳定且最后回程仍有余量", route: `${module.route} → ${last.name} 深度停留` },
    ];
    return {
      whyChoose: detail.whyChoose,
      skipWhen: detail.skipWhen,
      variants,
      schedule: [
        { time: `${times[0]}–${times[1]}`, title: activity ? "集合／交通缓冲" : "从 Bern 出发", detail: activity ? "按 operator 指定时间提早抵达；不要把接驳当成零缓冲。" : `在 SBB 搜索路线并预留至少 15 分钟换乘缓冲；先前往 ${first.name}。` },
        { time: `${times[1]}–12:15`, title: first.name, detail: `${first.description} 建议停留 ${first.stay}。` },
        { time: "12:15–13:30", title: "主餐与复核", detail: `优先使用位于路线中的 ${detail.dining[0].name}；同时复核下午开放状态和回程。` },
        { time: `13:30–${times[3]}`, title: `${second.name}${last === second ? "" : ` → ${last.name}`}`, detail: "按标准版推进；若天气、排队或体力低于预期，立即改用精简版，不追回落后时间。" },
        { time: `${times[3]}–${times[4]}`, title: "返回 Bern", detail: `至少为最后一程保留 30 分钟机动；若在 ${times[3]} 尚未开始返程，取消所有延伸项目。` },
      ],
      attractions: detail.attractions,
      dining: detail.dining,
      transport: {
        search: module.transport.search,
        segments: module.transport.steps.map((step, index) => ({ label: `第 ${index + 1} 段`, detail: step })),
        ticketChoice: `${module.estimatedCost} 为规划范围。先在 SBB 比较点到点票、Saver Day Pass／折扣资格；山岳铁路、船或活动不应假设自动包含。`,
        bookingSearch: "以模块所列起终点搜索，不锁死单一班次；出发前再次检查 platform、施工和替代交通。",
        plannedCost: module.estimatedCost,
        lastMile: `${module.transport.note} 回程至少预留一班车的余量，活动模块另加 operator 延迟缓冲。`,
      },
      conditions: {
        weather: `天气依赖：${module.weatherDependency}。出发前看目的地区域预报、雷达、风势及运营状态，不只看 Bern 市区天气。`,
        cancel: `${detail.skipWhen} 已购票也不应凌驾于现场安全和能见度判断。`,
        clothing: module.clothing,
        packing: module.packing,
        fitness: `体力强度：${module.intensity}。以同行者中最慢者为节奏，并把返程体力计入。`,
        accessibility: "无障碍程度因站点、坡道、缆车、船型和维护状态而变；需要无障碍路线时，出发前向交通或景点官方确认升降机与协助服务。",
        backup: module.backup,
      },
      background: [...detail.background, ...(contextualNotes[module.id] || [])],
      resources: [resource("SBB 行程与票价查询", sbb, "官方交通"), ...detail.resources],
      operators: detail.operators || [],
      cityWalk: detailedCityWalks[module.id] || null,
      foodGuide: detail.foodGuide || null,
      verifiedOn: VERIFIED_ON,
    };
  }

  const allSpecific = { ...shared, ...secondBatch, ...activityBatch };
  const bernModuleDetails = Object.fromEntries(window.bernModules.map((module) => {
    const detail = allSpecific[module.id];
    if (!detail) throw new Error(`Missing Bern module detail: ${module.id}`);
    return [module.id, enrich(module, detail)];
  }));

  window.bernModuleDetails = bernModuleDetails;
})();

const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const heidelbergTrips = {
  "old-town-university": {
    category: "Local／City Walk 与大学文化",
    title: "Heidelberg Old Town + University",
    summary: "把 Heidelberg 的老城、大学生活、教堂和 Neckar 河桥分成一个完整慢游日，不把城堡山坡硬塞进来。",
    intensity: "低",
    weather: "低至中",
    route: "Heidelberg Hbf → Bismarckplatz → Hauptstraße → Universitätsplatz → Heiliggeistkirche → Marktplatz → Old Bridge",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "抵达及返回交通枢纽"]],
    points: [["Bismarckplatz", 49.4074, 8.6878, "City Walk 及公共交通起点"], ["Hauptstraße", 49.4100, 8.7030, "老城主要步行街"], ["Universitätsplatz", 49.4100, 8.7070, "大学城文化节点"], ["Heiliggeistkirche", 49.4120, 8.7106, "老城核心教堂"], ["Marktplatz", 49.4123, 8.7108, "城堡视角和城市广场"], ["Old Bridge", 49.4144, 8.7127, "Neckar 与老城景观"]],
    restaurants: [["Schnitzelbank", 49.4114, 8.7084, "老城传统餐饮选项，热门时段确认排队。", mapsSearch("Schnitzelbank Heidelberg")], ["Vetter's Alt Heidelberger Brauhaus", 49.4120, 8.7090, "大学广场附近的啤酒馆餐饮。", mapsSearch("Vetter Heidelberg")], ["Café Knösel", 49.4119, 8.7090, "适合甜点和下午咖啡。", mapsSearch("Café Knösel Heidelberg")]],
    schedule: [["09:00–10:00", "由 Heidelberg Hbf 乘 tram／bus 到 Bismarckplatz。"], ["10:00–12:30", "Hauptstraße、Universitätsplatz、Student Prison 周边。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Heiliggeistkirche、Marktplatz、Old Bridge。"], ["16:30–18:00", "Neckar 河畔短走或咖啡，再返回住宿。"]],
    activities: [["Student Prison", "大学城独有的历史空间，适合作为室内文化段落。", "低", mapsSearch("Student Prison Heidelberg")], ["Heiliggeistkirche", "观察老城核心教堂与 Marktplatz 的城市关系。", "低", mapsSearch("Heiliggeistkirche Heidelberg")], ["Neckar riverside", "沿河短走，不延伸到 Philosopher’s Walk 长坡。", "低", mapsSearch("Neckar river Heidelberg")]],
    highlights: [["Universitätsplatz", "大学建筑、学生生活和老城历史在这里交汇。", mapsSearch("Universitätsplatz Heidelberg")], ["Old Bridge", "适合作为城市日收尾，集中观察 Neckar、城堡和山坡。", mapsSearch("Old Bridge Heidelberg")]],
    booking: "City Walk 不需预约；Student Prison 和教堂按开放时间安排。",
    backup: "雨天以 Hauptstraße 拱廊、大学、博物馆和咖啡店为主。",
  },
  "castle-philosopher": {
    category: "Local／城堡与山坡景观",
    title: "Heidelberg Castle + Philosopher’s Walk",
    summary: "Heidelberg 最经典的城堡、老桥和山坡视角一日；坡度和台阶较多，适合天气稳定的一天。",
    intensity: "中等",
    weather: "中至高",
    route: "Kornmarkt → Heidelberg Castle → Old Bridge → Philosopher’s Walk → Neckar riverside",
    transit: [["Kornmarkt", 49.4102, 8.7115, "前往城堡 funicular 的起点"]],
    points: [["Heidelberg Castle", 49.4106, 8.7157, "城堡遗迹、药学博物馆与城市全景"], ["Kornmarkt", 49.4102, 8.7115, "funicular 和老城转移点"], ["Old Bridge", 49.4144, 8.7127, "桥上城堡与 Neckar 视角"], ["Philosopher's Walk", 49.4145, 8.7175, "山坡观景步道"], ["Neckar riverbank", 49.4155, 8.7115, "低强度河岸收尾"]],
    restaurants: [["Burgfreiheit", 49.4107, 8.7156, "城堡附近餐饮，先确认开放。", mapsSearch("Burgfreiheit Heidelberg Castle")], ["Schnitzelbank", 49.4114, 8.7084, "下山后老城晚餐选择。", mapsSearch("Schnitzelbank Heidelberg")], ["Kaffeezimmer", 49.4142, 8.7130, "老桥附近咖啡休息。", mapsSearch("Kaffeezimmer Heidelberg")]],
    schedule: [["09:00–11:30", "Kornmarkt 乘 funicular 或步行进入 Heidelberg Castle。"], ["11:30–13:00", "城堡庭院、露台和药学博物馆。"], ["13:00–14:30", "老城午餐。"], ["14:30–16:00", "Old Bridge 与 Neckar 河边。"], ["16:00–18:00", "按体力走 Philosopher’s Walk 的核心观景段。"]],
    activities: [["Castle tour", "城堡庭院、露台和大酒桶是核心，不必追求所有内部展览。", "中等", mapsSearch("Heidelberg Castle")], ["Philosopher’s Walk", "只走观景最好的短段即可，湿滑或高温时缩短。", "中等", mapsSearch("Philosopher's Walk Heidelberg")], ["Funicular", "用缆车减少上坡，把体力留给城堡和山坡视角。", "低", mapsSearch("Heidelberg funicular")]],
    highlights: [["Heidelberg Castle", "城堡遗迹与城市屋顶、Neckar 河和山谷形成经典全景。", mapsSearch("Heidelberg Castle")], ["Philosopher’s Walk", "从河对岸回望老城和城堡，是 Heidelberg 最具代表性的山坡视角。", mapsSearch("Philosopher's Walk Heidelberg")]],
    booking: "城堡门票、funicular 和导览按官方开放时间确认；穿防滑鞋。",
    backup: "高温或暴雨时取消长坡，只保留城堡、老城博物馆和 Neckar 河岸。",
  },
  "neckar-heiligenberg": {
    category: "Local／Neckar 与高地自然",
    title: "Neckar + Heiligenberg + Königstuhl",
    summary: "把 Heidelberg 的两个高地和河岸景观拆成弹性自然日；按天气选择 Heiligenberg 或 Königstuhl，不必两者都完成。",
    intensity: "中等",
    weather: "高",
    route: "Heidelberg → Neckar riverside → Heiligenberg 或 Königstuhl → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "住宿基地"], ["Heiligenberg access", 49.4210, 8.7190, "北岸高地入口"], ["Königstuhl", 49.3813, 8.7167, "南侧高地与观景区"]],
    points: [["Neckar riverside", 49.4155, 8.7115, "河岸慢走"], ["Heiligenberg", 49.4210, 8.7190, "北岸森林、高地和遗迹"], ["Thingstätte", 49.4215, 8.7200, "山上历史剧场"], ["Königstuhl", 49.3813, 8.7167, "俯瞰城市和 Rhine plain"], ["Forest viewpoint", 49.3820, 8.7160, "森林观景短段"]],
    restaurants: [["Philosophenhöhe", 49.4178, 8.7175, "山坡餐饮选项，按路线和营运确认。", mapsSearch("Philosophenhöhe Heidelberg")], ["Berggasthof Königstuhl", 49.3813, 8.7167, "Königstuhl 山上餐饮，先确认开放。", mapsSearch("Berggasthof Königstuhl")]],
    schedule: [["09:00–10:00", "由住宿前往 Neckar 河岸，按天气决定高地。"], ["10:00–13:00", "Heiligenberg 与 Thingstätte，或 Königstuhl 高地路线。"], ["13:00–14:30", "山上或老城午餐。"], ["14:30–16:30", "完成短段森林步道或回到 Neckar 河岸。"], ["16:30–18:00", "返回住宿，保留行李整理时间。"]],
    activities: [["Heiligenberg", "北岸高地和遗迹，文化与自然结合；不适合暴雨时长时间停留。", "中等", mapsSearch("Heiligenberg Heidelberg")], ["Königstuhl", "可用 funicular 减少上坡，天气好时看 Rhine plain。", "低至中等", mapsSearch("Königstuhl Heidelberg")], ["Neckar riverside", "高地天气不佳时的低强度替代。", "低", mapsSearch("Neckar river Heidelberg")]],
    highlights: [["Heiligenberg", "比城堡更偏自然和遗迹，适合作为第二个本地自然日。", mapsSearch("Heiligenberg Heidelberg")], ["Königstuhl", "从更高位置理解 Heidelberg、Neckar 和 Rhine plain 的地理关系。", mapsSearch("Königstuhl Heidelberg")]],
    booking: "检查 Heidelberg mountain railway、步道和天气；雷雨时不要前往高地和森林。",
    backup: "改为 Kurpfälzisches Museum、Student Prison、大学和 Neckar 河岸短走。",
  },
  speyer: {
    category: "Rhine City／大教堂与历史",
    title: "Speyer",
    summary: "从 Heidelberg 出发的低压力 Rhine 城市文化日，核心是 Speyer Cathedral、老城轴线和 Rhine 河岸。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Speyer Hbf → Maximilianstraße → Speyer Cathedral → Old Gate → Rhine promenade",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出发站"], ["Speyer Hbf", 49.3180, 8.4420, "城市 Walk 起点"]],
    points: [["Speyer Cathedral", 49.3170, 8.4410, "UNESCO Romanesque cathedral"], ["Maximilianstraße", 49.3160, 8.4420, "老城主轴"], ["Altpörtel", 49.3165, 8.4355, "历史城门"], ["Historical Museum", 49.3168, 8.4400, "室内文化选择"], ["Rhine promenade", 49.3100, 8.4500, "河岸短走"]],
    restaurants: [["Domhof Hausbrauerei", 49.3168, 8.4410, "大教堂附近啤酒馆餐饮。", mapsSearch("Domhof Speyer")], ["Maximilian", 49.3160, 8.4415, "主街午餐和咖啡。", mapsSearch("Restaurant Maximilian Speyer")]],
    schedule: [["08:30–09:30", "Heidelberg 前往 Speyer。"], ["09:30–12:30", "Cathedral、Maximilianstraße 和 Altpörtel。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:00", "Historical Museum 或 Rhine promenade。"], ["16:00–18:00", "返回 Heidelberg。"]],
    activities: [["Speyer Cathedral", "罗马式大教堂是当天核心，不需再增加过多景点。", "低", mapsSearch("Speyer Cathedral")], ["Historical Museum", "雨天室内备选，适合了解 Rhine 与帝国历史。", "低", mapsSearch("Historical Museum Speyer")], ["Rhine promenade", "午后低强度河岸收尾。", "低", mapsSearch("Rhine promenade Speyer")]],
    highlights: [["Speyer Cathedral", "城市规模不大但历史地标集中，适合慢节奏文化日。", mapsSearch("Speyer Cathedral")], ["Altpörtel", "老城门与主街构成清晰的步行轴线。", mapsSearch("Altpörtel Speyer")]],
    booking: "确认 Cathedral、博物馆开放时间；Regional train 票券按当天方案购买。",
    backup: "雨天集中 Cathedral、Historical Museum 和老城咖啡。",
  },
  strasbourg: {
    category: "Cross-border City／Alsace",
    title: "Strasbourg",
    summary: "从 Heidelberg 出发的跨境城市 Full-day，重点是 Cathedral、Petite France、Barrage Vauban 和运河。",
    intensity: "中等",
    weather: "低至中",
    route: "Heidelberg → Strasbourg Gare → Cathedral → Petite France → Barrage Vauban → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出发站"], ["Strasbourg Gare", 48.5850, 7.7340, "城市 Walk 起点"]],
    points: [["Strasbourg Cathedral", 48.5818, 7.7508, "哥德式教堂"], ["Petite France", 48.5805, 7.7397, "运河和木骨架建筑"], ["Barrage Vauban", 48.5791, 7.7352, "城市防御建筑与观景"], ["Place du Marché Gayot", 48.5820, 7.7515, "餐饮与城市生活"], ["Boat cruise", 48.5800, 7.7450, "运河船游备选"]],
    restaurants: [["Maison Kammerzell", 48.5815, 7.7504, "Cathedral 附近传统餐饮。", mapsSearch("Maison Kammerzell Strasbourg")], ["Le Clou", 48.5812, 7.7497, "Alsace 菜选择。", mapsSearch("Le Clou Strasbourg")], ["L'Ancienne Douane", 48.5807, 7.7478, "老城餐饮。", mapsSearch("L'Ancienne Douane Strasbourg")]],
    schedule: [["06:30–10:00", "Heidelberg 经 Karlsruhe／Offenburg 等节点前往 Strasbourg，确认跨境车次。"], ["10:00–12:30", "Cathedral、广场和老城。"], ["12:30–14:00", "Alsace 午餐。"], ["14:00–16:30", "Petite France、Barrage Vauban 或船游。"], ["16:30–20:00", "返回 Strasbourg Gare 及 Heidelberg。"]],
    activities: [["Cathedral", "城市核心地标，按开放时间决定是否登塔。", "低至中等", mapsSearch("Strasbourg Cathedral")], ["Petite France", "运河和木骨架街区的主要慢游段。", "低", mapsSearch("Petite France Strasbourg")], ["Boat cruise", "长距离交通后降低步行量的备选。", "低", mapsSearch("Strasbourg boat cruise")]],
    highlights: [["Strasbourg Cathedral", "Alsace 首府最醒目的历史建筑。", mapsSearch("Strasbourg Cathedral")], ["Petite France", "运河、木骨架建筑和桥梁构成完整城市体验。", mapsSearch("Petite France Strasbourg")]],
    booking: "确认跨境车票、护照、Cathedral 登塔和船游班次；这是长交通日，不要再加 Colmar。",
    backup: "跨境班次或票价不理想时，改 Speyer、Mannheim 或 Schwetzingen。",
  },
  schwetzingen: {
    category: "Garden／Baroque Palace",
    title: "Schwetzingen Palace Gardens",
    summary: "低强度花园与宫殿日，适合作为 Strasbourg 后的恢复日或天气普通时的轻松选项。",
    intensity: "低",
    weather: "低至中",
    route: "Heidelberg → Schwetzingen → Palace Gardens → Old Town → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出发站"], ["Schwetzingen", 49.3820, 8.5750, "宫殿与花园入口"]],
    points: [["Schwetzingen Palace", 49.3820, 8.5750, "Baroque palace"], ["Palace Gardens", 49.3810, 8.5755, "花园、雕塑和轴线"], ["Mosque", 49.3800, 8.5735, "花园内历史建筑"], ["Schwetzingen Old Town", 49.3830, 8.5770, "午餐和咖啡区"]],
    restaurants: [["Schlossrestaurant Schwetzingen", 49.3820, 8.5750, "宫殿附近餐饮，查看营运。", mapsSearch("Schlossrestaurant Schwetzingen")], ["Café Leisinger", 49.3828, 8.5765, "花园后咖啡休息。", mapsSearch("Café Leisinger Schwetzingen")]],
    schedule: [["09:00–10:00", "Heidelberg 前往 Schwetzingen。"], ["10:00–13:00", "Palace Gardens、Mosque 和花园轴线。"], ["13:00–14:30", "Schwetzingen 午餐。"], ["14:30–16:00", "宫殿内部或老城咖啡。"], ["16:00–17:30", "返回 Heidelberg。"]],
    activities: [["Palace Gardens", "花园规模足够支撑半天慢走，不需再增加长途景点。", "低", mapsSearch("Schwetzingen Palace Gardens")], ["Palace interior", "按开放时间选择室内参观。", "低", mapsSearch("Schwetzingen Palace")]],
    highlights: [["Palace Gardens", "对称花园、雕塑和建筑轴线是与 Heidelberg 老城完全不同的体验。", mapsSearch("Schwetzingen Palace Gardens")], ["Mosque", "花园中的特殊历史建筑，适合作为路线亮点。", mapsSearch("Schwetzingen Mosque")]],
    booking: "花园与宫殿开放时间分开确认；夏季注意遮阳和饮水。",
    backup: "高温时缩短花园路线，改 Mannheim 室内博物馆或 Heidelberg 博物馆。",
  },
  mannheim: {
    category: "City／Baroque Grid 与 Rhine",
    title: "Mannheim",
    summary: "以 Baroque grid、Mannheim Palace 和城市河流格局为主的雨天与城市文化备选。",
    intensity: "低至中等",
    weather: "低",
    route: "Heidelberg → Mannheim Hbf → Mannheim Palace → Quadrate → Water Tower → Rhine／Neckar",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出发站"], ["Mannheim Hbf", 49.4793, 8.4699, "城市入口"]],
    points: [["Mannheim Palace", 49.4830, 8.4615, "宫殿与大学建筑"], ["Paradeplatz", 49.4870, 8.4660, "Quadrate 城市网格中心"], ["Water Tower", 49.4853, 8.4755, "城市地标"], ["Kunsthalle Mannheim", 49.4850, 8.4750, "艺术博物馆"], ["Luisenpark", 49.4825, 8.4970, "天气好时的公园备选"]],
    restaurants: [["Keller's Weinrestaurant", 49.4855, 8.4660, "市中心餐饮选项。", mapsSearch("Keller's Weinrestaurant Mannheim")], ["Markthaus Mannheim", 49.4850, 8.4700, "弹性午餐选择。", mapsSearch("Markthaus Mannheim")]],
    schedule: [["09:00–10:00", "Heidelberg 前往 Mannheim。"], ["10:00–12:30", "Mannheim Palace、Quadrate 和 Paradeplatz。"], ["12:30–14:00", "市中心午餐。"], ["14:00–16:30", "Kunsthalle、Water Tower 或 Luisenpark。"], ["16:30–18:00", "返回 Heidelberg。"]],
    activities: [["Kunsthalle Mannheim", "雨天稳定的室内艺术选项。", "低", mapsSearch("Kunsthalle Mannheim")], ["Mannheim Palace", "理解城市 Baroque grid 起源的核心地点。", "低", mapsSearch("Mannheim Palace")], ["Luisenpark", "天气好时的绿色替代，不与 Schwetzingen 同日硬接。", "低", mapsSearch("Luisenpark Mannheim")]],
    highlights: [["Quadrate", "规则的城市网格和 Heidelberg 的中世纪老城形成鲜明对比。", mapsSearch("Mannheim Quadrate")], ["Water Tower", "城市现代识别地标，适合作为短路线收尾。", mapsSearch("Mannheim Water Tower")]],
    booking: "博物馆和宫殿按官方时间确认；城市交通简单，适合雨天替代。",
    backup: "雨天留在 Kunsthalle、宫殿和咖啡；若想更慢，可直接回 Heidelberg。",
  },
  cologne: {
    category: "Long-distance City／大教堂与 Rhine",
    title: "Cologne Cathedral + Old Town",
    summary: "从 Heidelberg 往返较长的独立城市文化日；核心是 Cologne Cathedral、老城、Rhine 河岸和一间博物馆。",
    intensity: "中等",
    weather: "低至中",
    route: "Heidelberg → Köln Hbf → Cologne Cathedral → Old Town → Rhine promenade → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "长途出发站"], ["Köln Hbf", 50.9430, 6.9580, "大教堂旁抵达站"]],
    points: [["Cologne Cathedral", 50.9413, 6.9583, "哥德式大教堂"], ["Hohenzollern Bridge", 50.9416, 6.9658, "Rhine 桥景"], ["Old Town", 50.9380, 6.9600, "老城街区"], ["Rhine promenade", 50.9360, 6.9650, "河岸散步"], ["Museum Ludwig", 50.9410, 6.9625, "现代艺术博物馆"]],
    restaurants: [["Früh am Dom", 50.9405, 6.9580, "大教堂附近传统啤酒馆。", mapsSearch("Früh am Dom Cologne")], ["Peters Brauhaus", 50.9385, 6.9585, "老城餐饮选项。", mapsSearch("Peters Brauhaus Cologne")], ["Museum Ludwig Café", 50.9410, 6.9625, "博物馆附近短休。", mapsSearch("Museum Ludwig cafe")]],
    schedule: [["06:30–10:00", "Heidelberg 前往 Köln Hbf，预留长途车次缓冲。"], ["10:00–12:30", "Cologne Cathedral、广场和 Hohenzollern Bridge。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Rhine promenade 或 Museum Ludwig 二选一。"], ["16:30–20:00", "返回 Köln Hbf 及 Heidelberg。"]],
    activities: [["Cologne Cathedral", "全天核心地标，可按体力选择内部参观或登塔。", "低至中等", mapsSearch("Cologne Cathedral")], ["Museum Ludwig", "雨天及艺术文化备选，只选一间博物馆。", "低", mapsSearch("Museum Ludwig Cologne")], ["Rhine promenade", "在长途交通日保留轻松的河岸段。", "低", mapsSearch("Rhine promenade Cologne")]],
    highlights: [["Cologne Cathedral", "大教堂就在 Köln Hbf 旁，交通效率高，是独立长途城市日的核心理由。", mapsSearch("Cologne Cathedral")], ["Hohenzollern Bridge", "从桥上理解 Cologne Cathedral、Rhine 和城市天际线。", mapsSearch("Hohenzollern Bridge Cologne")]],
    booking: "长途铁路建议尽早查看票价和座位；大教堂登塔、博物馆按官方时间安排。",
    backup: "高铁票价或车次不理想时，不安排 Cologne；改选 Mannheim、Speyer 或 Heidelberg 本地 Full-day。",
  },
  "baden-baden": {
    category: "Wellness／温泉城市备选",
    title: "Baden-Baden",
    summary: "从 Heidelberg 出发的温泉、Kurhaus 和公园方案，作为天气或体力调整用的低风险备选。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Baden-Baden → Kurhaus → Old Town → Lichtentaler Allee → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出发站"], ["Baden-Baden station", 48.7905, 8.1906, "市外车站，需转巴士"], ["Kurhaus", 48.7594, 8.2398, "温泉城市核心"]],
    points: [["Kurhaus", 48.7594, 8.2398, "城市地标"], ["Trinkhalle", 48.7598, 8.2390, "温泉历史建筑"], ["Old Town", 48.7608, 8.2409, "老城"], ["Caracalla Spa", 48.7581, 8.2408, "现代温泉"], ["Lichtentaler Allee", 48.7509, 8.2390, "公园步道"]],
    restaurants: [["Café König", 48.7606, 8.2413, "咖啡和蛋糕。", mapsSearch("Café König Baden-Baden")], ["Hectors", 48.7601, 8.2409, "老城餐饮。", mapsSearch("Hectors Baden-Baden")]],
    schedule: [["08:00–10:30", "Heidelberg 前往 Baden-Baden，再转市区巴士。"], ["10:30–12:30", "Kurhaus、Trinkhalle 和 Old Town。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Spa 或 Lichtentaler Allee。"], ["16:30–19:30", "返回 Heidelberg。"]],
    activities: [["Caracalla Spa", "雨天和疲劳日的核心选项，需提前确认入场规则。", "低", "https://www.carasana.de/en/caracalla-spa/"], ["Lichtentaler Allee", "公园和河流组成的低强度散步。", "低", mapsSearch("Lichtentaler Allee")]],
    highlights: [["Kurhaus", "温泉城市建筑与老城文化集中在一起。", mapsSearch("Kurhaus Baden-Baden")], ["Caracalla Spa", "与 Heidelberg Castle、Speyer 等文化日形成休息型对比。", mapsSearch("Caracalla Spa")]],
    booking: "Spa 时段和交通转乘需提前查看；这是备选，不建议压缩到 8/29 转移日。",
    backup: "雨天保留 Spa、Kurhaus 和咖啡，不依赖公园路线。",
  },
  colmar: {
    category: "Cross-border／Alsace 童话小镇备选",
    title: "Colmar",
    summary: "比 Strasbourg 更小、更适合慢拍摄的 Alsace 小镇；作为跨境备选，不与 Strasbourg 同日安排。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Colmar → Old Town → Petite Venise → Unterlinden Museum → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "跨境出发站"], ["Colmar station", 48.0707, 7.3469, "城市 Walk 起点"]],
    points: [["Colmar Old Town", 48.0770, 7.3570, "木骨架街区"], ["Petite Venise", 48.0735, 7.3600, "运河与彩色房屋"], ["Collégiale Saint-Martin", 48.0774, 7.3580, "老城教堂"], ["Marché Couvert", 48.0750, 7.3610, "市场午餐"], ["Unterlinden Museum", 48.0794, 7.3555, "室内艺术文化"]],
    restaurants: [["Marché Couvert", 48.0750, 7.3610, "弹性市场午餐。", mapsSearch("Marché Couvert Colmar")], ["Le Fer Rouge", 48.0749, 7.3590, "Petite Venise 附近餐饮。", mapsSearch("Le Fer Rouge Colmar")]],
    schedule: [["07:00–10:30", "Heidelberg 经跨境转乘前往 Colmar。"], ["10:30–13:00", "Old Town、教堂和木骨架街区。"], ["13:00–14:30", "市场或老城午餐。"], ["14:30–16:30", "Petite Venise、运河船或 Unterlinden Museum。"], ["16:30–20:00", "返回 Heidelberg，预留跨境缓冲。"]],
    activities: [["Petite Venise", "Colmar 最具代表性的运河和童话街区。", "低", mapsSearch("Petite Venise Colmar")], ["Unterlinden Museum", "雨天室内备选。", "低", "https://www.musee-unterlinden.com/en/"]],
    highlights: [["Petite Venise", "规模较小、摄影密度高，适合慢节奏城市日。", mapsSearch("Petite Venise Colmar")], ["Old Town", "与 Strasbourg 的首府规模形成对比。", mapsSearch("Colmar Old Town")]],
    booking: "确认跨境车次、护照、票券和回程；不要同日加入 Strasbourg。",
    backup: "跨境不便时改 Speyer、Schwetzingen 或 Heidelberg 室内日。",
  },
};

const heidelbergImageQueries = {
  "Heidelberg Old Town + University": "Heidelberg Old Town",
  "Heidelberg Castle + Philosopher’s Walk": "Heidelberg Castle",
  "Neckar + Heiligenberg + Königstuhl": "Königstuhl Heidelberg",
  "Speyer Cathedral": "Speyer Cathedral",
  "Strasbourg Cathedral": "Strasbourg Cathedral",
  "Schwetzingen Palace Gardens": "Schwetzingen Palace Gardens",
  "Mannheim Palace": "Mannheim Palace",
  "Cologne Cathedral": "Cologne Cathedral",
};

const normalize = (value) => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));

function icon(label, type = "") {
  return L.divIcon({ className: "", html: `<span class="daytrip-map-number ${type}">${label}</span>`, iconSize: [34, 34], iconAnchor: [17, 17] });
}

function renderMap(data) {
  const element = document.querySelector("#heidelberg-trip-map");
  if (!element || !window.L) return;
  const all = [...data.transit, ...data.points, ...data.restaurants];
  const map = L.map(element);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
  data.transit.forEach(([name, lat, lng, desc], index) => L.marker([lat, lng], { icon: icon(`T${index + 1}`, "transit") }).addTo(map).bindPopup(`<strong>T${index + 1}｜${esc(name)}</strong><br>${esc(desc)}`));
  data.points.forEach(([name, lat, lng, desc], index) => L.marker([lat, lng], { icon: icon(index + 1) }).addTo(map).bindPopup(`<strong>${index + 1}｜${esc(name)}</strong><br>${esc(desc)}`));
  data.restaurants.forEach(([name, lat, lng, desc, link], index) => L.marker([lat, lng], { icon: icon(`R${index + 1}`, "restaurant") }).addTo(map).bindPopup(`<strong>R${index + 1}｜${esc(name)}</strong><br>${esc(desc)}<br><a href="${link}" target="_blank" rel="noreferrer">Google Maps →</a>`));
  L.polyline(data.transit.map(([, lat, lng]) => [lat, lng]), { color: "#d9782f", dashArray: "8 8", weight: 4 }).addTo(map);
  L.polyline(data.points.map(([, lat, lng]) => [lat, lng]), { color: "#2e6f95", weight: 4 }).addTo(map);
  map.fitBounds(L.latLngBounds(all.map(([, lat, lng]) => [lat, lng])), { padding: [24, 24] });
}

async function loadImages() {
  document.querySelectorAll(".attraction-image").forEach(async (element) => {
    const title = element.dataset.attractionName;
    const query = heidelbergImageQueries[title] || title;
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=8&prop=pageimages&piprop=thumbnail&pithumbsize=640&format=json&origin=*`);
      const pages = Object.values((await response.json()).query?.pages || {}).filter((page) => page.thumbnail).sort((a, b) => (a.index || 999) - (b.index || 999));
      const match = pages.find((page) => normalize(page.title).includes(normalize(query)));
      const source = (match || pages[0])?.thumbnail?.source;
      if (source) {
        element.style.background = `center / cover url("${source}")`;
      } else {
        element.classList.add("image-fallback");
      }
    } catch {
      element.classList.add("image-fallback");
    }
  });
}

function renderTrip(data) {
  document.title = `${data.title}｜Heidelberg 周边`;
  document.querySelector("#heidelberg-daytrip-title").textContent = data.title;
  document.querySelector("#heidelberg-daytrip-subtitle").textContent = `Heidelberg 周边 Full-day｜${data.category}｜强度：${data.intensity}｜天气依赖：${data.weather}`;
  document.querySelector("#heidelberg-daytrip-page").innerHTML = `
    <section class="daytrip-hero"><p class="daytrip-category">${esc(data.category)}</p><h2>${esc(data.title)}</h2><p>${esc(data.summary)}</p><div class="daytrip-tags"><span>公共交通</span><span>${esc(data.intensity)}</span><span>8 月可行</span></div></section>
    <section><h2>当日路线与时间轴</h2><p><code>${esc(data.route)}</code></p><div class="daytrip-timeline">${data.schedule.map(([time, detail]) => `<article class="daytrip-time"><strong>${esc(time)}</strong><p>${esc(detail)}</p></article>`).join("")}</div></section>
    <section><h2>交通与互动地图</h2><div id="heidelberg-trip-map" class="daytrip-map"></div><div class="daytrip-map-legend"><span><i class="legend-map-number transit">T</i>交通</span><span><i class="legend-map-number">1</i>景点</span><span><i class="legend-map-number restaurant">R</i>餐厅</span></div><p class="small"><strong>橙色虚线：</strong>长途／跨城交通；<strong>蓝色实线：</strong>当地步行与短途路线。</p></section>
    <section><h2>主要景点与活动</h2><div class="highlight-detail-grid">${data.highlights.map(([name, desc, link]) => `<article class="card highlight-card"><div class="attraction-image" data-attraction-name="${esc(name)}"></div><h3>${esc(name)}</h3><p>${esc(desc)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看详情 →</a></article>`).join("")}</div><div class="activity-choice-grid">${data.activities.map(([name, desc, intensity, link]) => `<article class="card activity-choice"><h3>${esc(name)}</h3><p>${esc(desc)}</p><p class="small">强度：${esc(intensity)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看详情 →</a></article>`).join("")}</div></section>
    <section><h2>推荐餐厅</h2><div class="grid restaurant-list">${data.restaurants.map(([name, , , desc, link], index) => `<article class="card restaurant-card"><h3>R${index + 1}｜${esc(name)}</h3><p>${esc(desc)}</p><a class="restaurant-link" href="${link}" target="_blank" rel="noreferrer">Google Maps →</a></article>`).join("")}</div></section>
    <section><h2>预约、天气与备案</h2><div class="grid"><article class="card planning-card"><h3>预约／交通</h3><p>${esc(data.booking)}</p></article><article class="card planning-card"><h3>天气与衣着</h3><p>出发前确认 DWD 天气、DB／SBB 车次和景点开放；穿舒适步行鞋，携带分层衣物、雨具、饮水和行动电源。</p><a class="activity-link" href="https://www.dwd.de/EN/weather/weather_node.html" target="_blank" rel="noreferrer">DWD 官方天气 →</a></article><article class="card planning-card"><h3>备选方案</h3><p>${esc(data.backup)}</p></article></div></section>
  `;
  renderMap(data);
  loadImages();
}

const tripKey = new URLSearchParams(window.location.search).get("trip") || "old-town-university";
renderTrip(heidelbergTrips[tripKey] || heidelbergTrips["old-town-university"]);

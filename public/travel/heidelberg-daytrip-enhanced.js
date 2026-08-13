const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const heidelbergTrips = {
  "old-town-university": {
    category: "Local／City Walk 與大學文化",
    title: "Heidelberg Old Town + University",
    summary: "把 Heidelberg 的老城、大學生活、教堂和 Neckar 河橋分成一個完整慢游日，不把城堡山坡硬塞進來。",
    intensity: "低",
    weather: "低至中",
    route: "Heidelberg Hbf → Bismarckplatz → Hauptstraße → Universitätsplatz → Heiliggeistkirche → Marktplatz → Old Bridge",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "抵達及返回交通樞紐"]],
    points: [["Bismarckplatz", 49.4074, 8.6878, "City Walk 及公共交通起點"], ["Hauptstraße", 49.4100, 8.7030, "老城主要步行街"], ["Universitätsplatz", 49.4100, 8.7070, "大學城文化節點"], ["Heiliggeistkirche", 49.4120, 8.7106, "老城核心教堂"], ["Marktplatz", 49.4123, 8.7108, "城堡視角和城市廣場"], ["Old Bridge", 49.4144, 8.7127, "Neckar 與老城景觀"]],
    restaurants: [["Schnitzelbank", 49.4114, 8.7084, "老城傳統餐飲選項，熱門時段確認排隊。", mapsSearch("Schnitzelbank Heidelberg")], ["Vetter's Alt Heidelberger Brauhaus", 49.4120, 8.7090, "大學廣場附近的啤酒館餐飲。", mapsSearch("Vetter Heidelberg")], ["Café Knösel", 49.4119, 8.7090, "適合甜點和下午咖啡。", mapsSearch("Café Knösel Heidelberg")]],
    schedule: [["09:00–10:00", "由 Heidelberg Hbf 乘 tram／bus 到 Bismarckplatz。"], ["10:00–12:30", "Hauptstraße、Universitätsplatz、Student Prison 周邊。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Heiliggeistkirche、Marktplatz、Old Bridge。"], ["16:30–18:00", "Neckar 河畔短走或咖啡，再返回住宿。"]],
    activities: [["Student Prison", "大學城獨有的歷史空間，適合作為室內文化段落。", "低", mapsSearch("Student Prison Heidelberg")], ["Heiliggeistkirche", "觀察老城核心教堂與 Marktplatz 的城市關係。", "低", mapsSearch("Heiliggeistkirche Heidelberg")], ["Neckar riverside", "沿河短走，不延伸到 Philosopher’s Walk 長坡。", "低", mapsSearch("Neckar river Heidelberg")]],
    highlights: [["Universitätsplatz", "大學建築、學生生活和老城歷史在這裡交匯。", mapsSearch("Universitätsplatz Heidelberg")], ["Old Bridge", "適合作為城市日收尾，集中觀察 Neckar、城堡和山坡。", mapsSearch("Old Bridge Heidelberg")]],
    booking: "City Walk 不需預約；Student Prison 和教堂按開放時間安排。",
    backup: "雨天以 Hauptstraße 拱廊、大學、博物館和咖啡店為主。",
  },
  "castle-philosopher": {
    category: "Local／城堡與山坡景觀",
    title: "Heidelberg Castle + Philosopher’s Walk",
    summary: "Heidelberg 最經典的城堡、老橋和山坡視角一日；坡度和台階較多，適合天氣穩定的一天。",
    intensity: "中等",
    weather: "中至高",
    route: "Kornmarkt → Heidelberg Castle → Old Bridge → Philosopher’s Walk → Neckar riverside",
    transit: [["Kornmarkt", 49.4102, 8.7115, "前往城堡 funicular 的起點"]],
    points: [["Heidelberg Castle", 49.4106, 8.7157, "城堡遺跡、藥學博物館與城市全景"], ["Kornmarkt", 49.4102, 8.7115, "funicular 和老城轉移點"], ["Old Bridge", 49.4144, 8.7127, "橋上城堡與 Neckar 視角"], ["Philosopher's Walk", 49.4145, 8.7175, "山坡觀景步道"], ["Neckar riverbank", 49.4155, 8.7115, "低強度河岸收尾"]],
    restaurants: [["Burgfreiheit", 49.4107, 8.7156, "城堡附近餐飲，先確認開放。", mapsSearch("Burgfreiheit Heidelberg Castle")], ["Schnitzelbank", 49.4114, 8.7084, "下山後老城晚餐選擇。", mapsSearch("Schnitzelbank Heidelberg")], ["Kaffeezimmer", 49.4142, 8.7130, "老橋附近咖啡休息。", mapsSearch("Kaffeezimmer Heidelberg")]],
    schedule: [["09:00–11:30", "Kornmarkt 乘 funicular 或步行進入 Heidelberg Castle。"], ["11:30–13:00", "城堡庭院、露台和藥學博物館。"], ["13:00–14:30", "老城午餐。"], ["14:30–16:00", "Old Bridge 與 Neckar 河邊。"], ["16:00–18:00", "按體力走 Philosopher’s Walk 的核心觀景段。"]],
    activities: [["Castle tour", "城堡庭院、露台和大酒桶是核心，不必追求所有內部展覽。", "中等", mapsSearch("Heidelberg Castle")], ["Philosopher’s Walk", "只走觀景最好的短段即可，濕滑或高溫時縮短。", "中等", mapsSearch("Philosopher's Walk Heidelberg")], ["Funicular", "用纜車減少上坡，把體力留給城堡和山坡視角。", "低", mapsSearch("Heidelberg funicular")]],
    highlights: [["Heidelberg Castle", "城堡遺跡與城市屋頂、Neckar 河和山谷形成經典全景。", mapsSearch("Heidelberg Castle")], ["Philosopher’s Walk", "從河對岸回望老城和城堡，是 Heidelberg 最具代表性的山坡視角。", mapsSearch("Philosopher's Walk Heidelberg")]],
    booking: "城堡門票、funicular 和導覽按官方開放時間確認；穿防滑鞋。",
    backup: "高溫或暴雨時取消長坡，只保留城堡、老城博物館和 Neckar 河岸。",
  },
  "neckar-heiligenberg": {
    category: "Local／Neckar 與高地自然",
    title: "Neckar + Heiligenberg + Königstuhl",
    summary: "把 Heidelberg 的兩個高地和河岸景觀拆成彈性自然日；按天氣選擇 Heiligenberg 或 Königstuhl，不必兩者都完成。",
    intensity: "中等",
    weather: "高",
    route: "Heidelberg → Neckar riverside → Heiligenberg 或 Königstuhl → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "住宿基地"], ["Heiligenberg access", 49.4210, 8.7190, "北岸高地入口"], ["Königstuhl", 49.3813, 8.7167, "南側高地與觀景區"]],
    points: [["Neckar riverside", 49.4155, 8.7115, "河岸慢走"], ["Heiligenberg", 49.4210, 8.7190, "北岸森林、高地和遺跡"], ["Thingstätte", 49.4215, 8.7200, "山上歷史劇場"], ["Königstuhl", 49.3813, 8.7167, "俯瞰城市和 Rhine plain"], ["Forest viewpoint", 49.3820, 8.7160, "森林觀景短段"]],
    restaurants: [["Philosophenhöhe", 49.4178, 8.7175, "山坡餐飲選項，按路線和營運確認。", mapsSearch("Philosophenhöhe Heidelberg")], ["Berggasthof Königstuhl", 49.3813, 8.7167, "Königstuhl 山上餐飲，先確認開放。", mapsSearch("Berggasthof Königstuhl")]],
    schedule: [["09:00–10:00", "由住宿前往 Neckar 河岸，按天氣決定高地。"], ["10:00–13:00", "Heiligenberg 與 Thingstätte，或 Königstuhl 高地路線。"], ["13:00–14:30", "山上或老城午餐。"], ["14:30–16:30", "完成短段森林步道或回到 Neckar 河岸。"], ["16:30–18:00", "返回住宿，保留行李整理時間。"]],
    activities: [["Heiligenberg", "北岸高地和遺跡，文化與自然結合；不適合暴雨時長時間停留。", "中等", mapsSearch("Heiligenberg Heidelberg")], ["Königstuhl", "可用 funicular 減少上坡，天氣好時看 Rhine plain。", "低至中等", mapsSearch("Königstuhl Heidelberg")], ["Neckar riverside", "高地天氣不佳時的低強度替代。", "低", mapsSearch("Neckar river Heidelberg")]],
    highlights: [["Heiligenberg", "比城堡更偏自然和遺跡，適合作為第二個本地自然日。", mapsSearch("Heiligenberg Heidelberg")], ["Königstuhl", "從更高位置理解 Heidelberg、Neckar 和 Rhine plain 的地理關係。", mapsSearch("Königstuhl Heidelberg")]],
    booking: "檢查 Heidelberg mountain railway、步道和天氣；雷雨時不要前往高地和森林。",
    backup: "改為 Kurpfälzisches Museum、Student Prison、大學和 Neckar 河岸短走。",
  },
  speyer: {
    category: "Rhine City／大教堂與歷史",
    title: "Speyer",
    summary: "從 Heidelberg 出發的低壓力 Rhine 城市文化日，核心是 Speyer Cathedral、老城軸線和 Rhine 河岸。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Speyer Hbf → Maximilianstraße → Speyer Cathedral → Old Gate → Rhine promenade",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出發站"], ["Speyer Hbf", 49.3180, 8.4420, "城市 Walk 起點"]],
    points: [["Speyer Cathedral", 49.3170, 8.4410, "UNESCO Romanesque cathedral"], ["Maximilianstraße", 49.3160, 8.4420, "老城主軸"], ["Altpörtel", 49.3165, 8.4355, "歷史城門"], ["Historical Museum", 49.3168, 8.4400, "室內文化選擇"], ["Rhine promenade", 49.3100, 8.4500, "河岸短走"]],
    restaurants: [["Domhof Hausbrauerei", 49.3168, 8.4410, "大教堂附近啤酒館餐飲。", mapsSearch("Domhof Speyer")], ["Maximilian", 49.3160, 8.4415, "主街午餐和咖啡。", mapsSearch("Restaurant Maximilian Speyer")]],
    schedule: [["08:30–09:30", "Heidelberg 前往 Speyer。"], ["09:30–12:30", "Cathedral、Maximilianstraße 和 Altpörtel。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:00", "Historical Museum 或 Rhine promenade。"], ["16:00–18:00", "返回 Heidelberg。"]],
    activities: [["Speyer Cathedral", "羅馬式大教堂是當天核心，不需再增加過多景點。", "低", mapsSearch("Speyer Cathedral")], ["Historical Museum", "雨天室內備選，適合瞭解 Rhine 與帝國歷史。", "低", mapsSearch("Historical Museum Speyer")], ["Rhine promenade", "午後低強度河岸收尾。", "低", mapsSearch("Rhine promenade Speyer")]],
    highlights: [["Speyer Cathedral", "城市規模不大但歷史地標集中，適合慢節奏文化日。", mapsSearch("Speyer Cathedral")], ["Altpörtel", "老城門與主街構成清晰的步行軸線。", mapsSearch("Altpörtel Speyer")]],
    booking: "確認 Cathedral、博物館開放時間；Regional train 票券按當天方案購買。",
    backup: "雨天集中 Cathedral、Historical Museum 和老城咖啡。",
  },
  strasbourg: {
    category: "Cross-border City／Alsace",
    title: "Strasbourg",
    summary: "從 Heidelberg 出發的跨境城市 Full-day，重點是 Cathedral、Petite France、Barrage Vauban 和運河。",
    intensity: "中等",
    weather: "低至中",
    route: "Heidelberg → Strasbourg Gare → Cathedral → Petite France → Barrage Vauban → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出發站"], ["Strasbourg Gare", 48.5850, 7.7340, "城市 Walk 起點"]],
    points: [["Strasbourg Cathedral", 48.5818, 7.7508, "哥德式教堂"], ["Petite France", 48.5805, 7.7397, "運河和木骨架建築"], ["Barrage Vauban", 48.5791, 7.7352, "城市防禦建築與觀景"], ["Place du Marché Gayot", 48.5820, 7.7515, "餐飲與城市生活"], ["Boat cruise", 48.5800, 7.7450, "運河船游備選"]],
    restaurants: [["Maison Kammerzell", 48.5815, 7.7504, "Cathedral 附近傳統餐飲。", mapsSearch("Maison Kammerzell Strasbourg")], ["Le Clou", 48.5812, 7.7497, "Alsace 菜選擇。", mapsSearch("Le Clou Strasbourg")], ["L'Ancienne Douane", 48.5807, 7.7478, "老城餐飲。", mapsSearch("L'Ancienne Douane Strasbourg")]],
    schedule: [["06:30–10:00", "Heidelberg 經 Karlsruhe／Offenburg 等節點前往 Strasbourg，確認跨境車次。"], ["10:00–12:30", "Cathedral、廣場和老城。"], ["12:30–14:00", "Alsace 午餐。"], ["14:00–16:30", "Petite France、Barrage Vauban 或船游。"], ["16:30–20:00", "返回 Strasbourg Gare 及 Heidelberg。"]],
    activities: [["Cathedral", "城市核心地標，按開放時間決定是否登塔。", "低至中等", mapsSearch("Strasbourg Cathedral")], ["Petite France", "運河和木骨架街區的主要慢游段。", "低", mapsSearch("Petite France Strasbourg")], ["Boat cruise", "長距離交通後降低步行量的備選。", "低", mapsSearch("Strasbourg boat cruise")]],
    highlights: [["Strasbourg Cathedral", "Alsace 首府最醒目的歷史建築。", mapsSearch("Strasbourg Cathedral")], ["Petite France", "運河、木骨架建築和橋梁構成完整城市體驗。", mapsSearch("Petite France Strasbourg")]],
    booking: "確認跨境車票、護照、Cathedral 登塔和船游班次；這是長交通日，不要再加 Colmar。",
    backup: "跨境班次或票價不理想時，改 Speyer、Mannheim 或 Schwetzingen。",
  },
  schwetzingen: {
    category: "Garden／Baroque Palace",
    title: "Schwetzingen Palace Gardens",
    summary: "低強度花園與宮殿日，適合作為 Strasbourg 後的恢復日或天氣普通時的輕鬆選項。",
    intensity: "低",
    weather: "低至中",
    route: "Heidelberg → Schwetzingen → Palace Gardens → Old Town → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出發站"], ["Schwetzingen", 49.3820, 8.5750, "宮殿與花園入口"]],
    points: [["Schwetzingen Palace", 49.3820, 8.5750, "Baroque palace"], ["Palace Gardens", 49.3810, 8.5755, "花園、雕塑和軸線"], ["Mosque", 49.3800, 8.5735, "花園內歷史建築"], ["Schwetzingen Old Town", 49.3830, 8.5770, "午餐和咖啡區"]],
    restaurants: [["Schlossrestaurant Schwetzingen", 49.3820, 8.5750, "宮殿附近餐飲，查看營運。", mapsSearch("Schlossrestaurant Schwetzingen")], ["Café Leisinger", 49.3828, 8.5765, "花園後咖啡休息。", mapsSearch("Café Leisinger Schwetzingen")]],
    schedule: [["09:00–10:00", "Heidelberg 前往 Schwetzingen。"], ["10:00–13:00", "Palace Gardens、Mosque 和花園軸線。"], ["13:00–14:30", "Schwetzingen 午餐。"], ["14:30–16:00", "宮殿內部或老城咖啡。"], ["16:00–17:30", "返回 Heidelberg。"]],
    activities: [["Palace Gardens", "花園規模足夠支撐半天慢走，不需再增加長途景點。", "低", mapsSearch("Schwetzingen Palace Gardens")], ["Palace interior", "按開放時間選擇室內參觀。", "低", mapsSearch("Schwetzingen Palace")]],
    highlights: [["Palace Gardens", "對稱花園、雕塑和建築軸線是與 Heidelberg 老城完全不同的體驗。", mapsSearch("Schwetzingen Palace Gardens")], ["Mosque", "花園中的特殊歷史建築，適合作為路線亮點。", mapsSearch("Schwetzingen Mosque")]],
    booking: "花園與宮殿開放時間分開確認；夏季注意遮陽和飲水。",
    backup: "高溫時縮短花園路線，改 Mannheim 室內博物館或 Heidelberg 博物館。",
  },
  mannheim: {
    category: "City／Baroque Grid 與 Rhine",
    title: "Mannheim",
    summary: "以 Baroque grid、Mannheim Palace 和城市河流格局為主的雨天與城市文化備選。",
    intensity: "低至中等",
    weather: "低",
    route: "Heidelberg → Mannheim Hbf → Mannheim Palace → Quadrate → Water Tower → Rhine／Neckar",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出發站"], ["Mannheim Hbf", 49.4793, 8.4699, "城市入口"]],
    points: [["Mannheim Palace", 49.4830, 8.4615, "宮殿與大學建築"], ["Paradeplatz", 49.4870, 8.4660, "Quadrate 城市網格中心"], ["Water Tower", 49.4853, 8.4755, "城市地標"], ["Kunsthalle Mannheim", 49.4850, 8.4750, "藝術博物館"], ["Luisenpark", 49.4825, 8.4970, "天氣好時的公園備選"]],
    restaurants: [["Keller's Weinrestaurant", 49.4855, 8.4660, "市中心餐飲選項。", mapsSearch("Keller's Weinrestaurant Mannheim")], ["Markthaus Mannheim", 49.4850, 8.4700, "彈性午餐選擇。", mapsSearch("Markthaus Mannheim")]],
    schedule: [["09:00–10:00", "Heidelberg 前往 Mannheim。"], ["10:00–12:30", "Mannheim Palace、Quadrate 和 Paradeplatz。"], ["12:30–14:00", "市中心午餐。"], ["14:00–16:30", "Kunsthalle、Water Tower 或 Luisenpark。"], ["16:30–18:00", "返回 Heidelberg。"]],
    activities: [["Kunsthalle Mannheim", "雨天穩定的室內藝術選項。", "低", mapsSearch("Kunsthalle Mannheim")], ["Mannheim Palace", "理解城市 Baroque grid 起源的核心地點。", "低", mapsSearch("Mannheim Palace")], ["Luisenpark", "天氣好時的綠色替代，不與 Schwetzingen 同日硬接。", "低", mapsSearch("Luisenpark Mannheim")]],
    highlights: [["Quadrate", "規則的城市網格和 Heidelberg 的中世紀老城形成鮮明對比。", mapsSearch("Mannheim Quadrate")], ["Water Tower", "城市現代識別地標，適合作為短路線收尾。", mapsSearch("Mannheim Water Tower")]],
    booking: "博物館和宮殿按官方時間確認；城市交通簡單，適合雨天替代。",
    backup: "雨天留在 Kunsthalle、宮殿和咖啡；若想更慢，可直接回 Heidelberg。",
  },
  cologne: {
    category: "Long-distance City／大教堂與 Rhine",
    title: "Cologne Cathedral + Old Town",
    summary: "從 Heidelberg 往返較長的獨立城市文化日；核心是 Cologne Cathedral、老城、Rhine 河岸和一間博物館。",
    intensity: "中等",
    weather: "低至中",
    route: "Heidelberg → Köln Hbf → Cologne Cathedral → Old Town → Rhine promenade → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "長途出發站"], ["Köln Hbf", 50.9430, 6.9580, "大教堂旁抵達站"]],
    points: [["Cologne Cathedral", 50.9413, 6.9583, "哥德式大教堂"], ["Hohenzollern Bridge", 50.9416, 6.9658, "Rhine 橋景"], ["Old Town", 50.9380, 6.9600, "老城街區"], ["Rhine promenade", 50.9360, 6.9650, "河岸散步"], ["Museum Ludwig", 50.9410, 6.9625, "現代藝術博物館"]],
    restaurants: [["Früh am Dom", 50.9405, 6.9580, "大教堂附近傳統啤酒館。", mapsSearch("Früh am Dom Cologne")], ["Peters Brauhaus", 50.9385, 6.9585, "老城餐飲選項。", mapsSearch("Peters Brauhaus Cologne")], ["Museum Ludwig Café", 50.9410, 6.9625, "博物館附近短休。", mapsSearch("Museum Ludwig cafe")]],
    schedule: [["06:30–10:00", "Heidelberg 前往 Köln Hbf，預留長途車次緩衝。"], ["10:00–12:30", "Cologne Cathedral、廣場和 Hohenzollern Bridge。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Rhine promenade 或 Museum Ludwig 二選一。"], ["16:30–20:00", "返回 Köln Hbf 及 Heidelberg。"]],
    activities: [["Cologne Cathedral", "全天核心地標，可按體力選擇內部參觀或登塔。", "低至中等", mapsSearch("Cologne Cathedral")], ["Museum Ludwig", "雨天及藝術文化備選，只選一間博物館。", "低", mapsSearch("Museum Ludwig Cologne")], ["Rhine promenade", "在長途交通日保留輕鬆的河岸段。", "低", mapsSearch("Rhine promenade Cologne")]],
    highlights: [["Cologne Cathedral", "大教堂就在 Köln Hbf 旁，交通效率高，是獨立長途城市日的核心理由。", mapsSearch("Cologne Cathedral")], ["Hohenzollern Bridge", "從橋上理解 Cologne Cathedral、Rhine 和城市天際線。", mapsSearch("Hohenzollern Bridge Cologne")]],
    booking: "長途鐵路建議盡早查看票價和座位；大教堂登塔、博物館按官方時間安排。",
    backup: "高鐵票價或車次不理想時，不安排 Cologne；改選 Mannheim、Speyer 或 Heidelberg 本地 Full-day。",
  },
  "baden-baden": {
    category: "Wellness／溫泉城市備選",
    title: "Baden-Baden",
    summary: "從 Heidelberg 出發的溫泉、Kurhaus 和公園方案，作為天氣或體力調整用的低風險備選。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Baden-Baden → Kurhaus → Old Town → Lichtentaler Allee → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "出發站"], ["Baden-Baden station", 48.7905, 8.1906, "市外車站，需轉巴士"], ["Kurhaus", 48.7594, 8.2398, "溫泉城市核心"]],
    points: [["Kurhaus", 48.7594, 8.2398, "城市地標"], ["Trinkhalle", 48.7598, 8.2390, "溫泉歷史建築"], ["Old Town", 48.7608, 8.2409, "老城"], ["Caracalla Spa", 48.7581, 8.2408, "現代溫泉"], ["Lichtentaler Allee", 48.7509, 8.2390, "公園步道"]],
    restaurants: [["Café König", 48.7606, 8.2413, "咖啡和蛋糕。", mapsSearch("Café König Baden-Baden")], ["Hectors", 48.7601, 8.2409, "老城餐飲。", mapsSearch("Hectors Baden-Baden")]],
    schedule: [["08:00–10:30", "Heidelberg 前往 Baden-Baden，再轉市區巴士。"], ["10:30–12:30", "Kurhaus、Trinkhalle 和 Old Town。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "Spa 或 Lichtentaler Allee。"], ["16:30–19:30", "返回 Heidelberg。"]],
    activities: [["Caracalla Spa", "雨天和疲勞日的核心選項，需提前確認入場規則。", "低", "https://www.carasana.de/en/caracalla-spa/"], ["Lichtentaler Allee", "公園和河流組成的低強度散步。", "低", mapsSearch("Lichtentaler Allee")]],
    highlights: [["Kurhaus", "溫泉城市建築與老城文化集中在一起。", mapsSearch("Kurhaus Baden-Baden")], ["Caracalla Spa", "與 Heidelberg Castle、Speyer 等文化日形成休息型對比。", mapsSearch("Caracalla Spa")]],
    booking: "Spa 時段和交通轉乘需提前查看；這是備選，不建議壓縮到 8/29 轉移日。",
    backup: "雨天保留 Spa、Kurhaus 和咖啡，不依賴公園路線。",
  },
  colmar: {
    category: "Cross-border／Alsace 童話小鎮備選",
    title: "Colmar",
    summary: "比 Strasbourg 更小、更適合慢拍攝的 Alsace 小鎮；作為跨境備選，不與 Strasbourg 同日安排。",
    intensity: "低至中等",
    weather: "低至中",
    route: "Heidelberg → Colmar → Old Town → Petite Venise → Unterlinden Museum → Heidelberg",
    transit: [["Heidelberg Hbf", 49.4037, 8.6724, "跨境出發站"], ["Colmar station", 48.0707, 7.3469, "城市 Walk 起點"]],
    points: [["Colmar Old Town", 48.0770, 7.3570, "木骨架街區"], ["Petite Venise", 48.0735, 7.3600, "運河與彩色房屋"], ["Collégiale Saint-Martin", 48.0774, 7.3580, "老城教堂"], ["Marché Couvert", 48.0750, 7.3610, "市場午餐"], ["Unterlinden Museum", 48.0794, 7.3555, "室內藝術文化"]],
    restaurants: [["Marché Couvert", 48.0750, 7.3610, "彈性市場午餐。", mapsSearch("Marché Couvert Colmar")], ["Le Fer Rouge", 48.0749, 7.3590, "Petite Venise 附近餐飲。", mapsSearch("Le Fer Rouge Colmar")]],
    schedule: [["07:00–10:30", "Heidelberg 經跨境轉乘前往 Colmar。"], ["10:30–13:00", "Old Town、教堂和木骨架街區。"], ["13:00–14:30", "市場或老城午餐。"], ["14:30–16:30", "Petite Venise、運河船或 Unterlinden Museum。"], ["16:30–20:00", "返回 Heidelberg，預留跨境緩衝。"]],
    activities: [["Petite Venise", "Colmar 最具代表性的運河和童話街區。", "低", mapsSearch("Petite Venise Colmar")], ["Unterlinden Museum", "雨天室內備選。", "低", "https://www.musee-unterlinden.com/en/"]],
    highlights: [["Petite Venise", "規模較小、攝影密度高，適合慢節奏城市日。", mapsSearch("Petite Venise Colmar")], ["Old Town", "與 Strasbourg 的首府規模形成對比。", mapsSearch("Colmar Old Town")]],
    booking: "確認跨境車次、護照、票券和回程；不要同日加入 Strasbourg。",
    backup: "跨境不便時改 Speyer、Schwetzingen 或 Heidelberg 室內日。",
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
  document.title = `${data.title}｜Heidelberg 周邊`;
  document.querySelector("#heidelberg-daytrip-title").textContent = data.title;
  document.querySelector("#heidelberg-daytrip-subtitle").textContent = `Heidelberg 周邊 Full-day｜${data.category}｜強度：${data.intensity}｜天氣依賴：${data.weather}`;
  document.querySelector("#heidelberg-daytrip-page").innerHTML = `
    <section class="daytrip-hero"><p class="daytrip-category">${esc(data.category)}</p><h2>${esc(data.title)}</h2><p>${esc(data.summary)}</p><div class="daytrip-tags"><span>公共交通</span><span>${esc(data.intensity)}</span><span>8 月可行</span></div></section>
    <section><h2>當日路線與時間軸</h2><p><code>${esc(data.route)}</code></p><div class="daytrip-timeline">${data.schedule.map(([time, detail]) => `<article class="daytrip-time"><strong>${esc(time)}</strong><p>${esc(detail)}</p></article>`).join("")}</div></section>
    <section><h2>交通與互動地圖</h2><div id="heidelberg-trip-map" class="daytrip-map"></div><div class="daytrip-map-legend"><span><i class="legend-map-number transit">T</i>交通</span><span><i class="legend-map-number">1</i>景點</span><span><i class="legend-map-number restaurant">R</i>餐廳</span></div><p class="small"><strong>橙色虛線：</strong>長途／跨城交通；<strong>藍色實線：</strong>當地步行與短途路線。</p></section>
    <section><h2>主要景點與活動</h2><div class="highlight-detail-grid">${data.highlights.map(([name, desc, link]) => `<article class="card highlight-card"><div class="attraction-image" data-attraction-name="${esc(name)}"></div><h3>${esc(name)}</h3><p>${esc(desc)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看詳情 →</a></article>`).join("")}</div><div class="activity-choice-grid">${data.activities.map(([name, desc, intensity, link]) => `<article class="card activity-choice"><h3>${esc(name)}</h3><p>${esc(desc)}</p><p class="small">強度：${esc(intensity)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看詳情 →</a></article>`).join("")}</div></section>
    <section><h2>推薦餐廳</h2><div class="grid restaurant-list">${data.restaurants.map(([name, , , desc, link], index) => `<article class="card restaurant-card"><h3>R${index + 1}｜${esc(name)}</h3><p>${esc(desc)}</p><a class="restaurant-link" href="${link}" target="_blank" rel="noreferrer">Google Maps →</a></article>`).join("")}</div></section>
    <section><h2>預約、天氣與備案</h2><div class="grid"><article class="card planning-card"><h3>預約／交通</h3><p>${esc(data.booking)}</p></article><article class="card planning-card"><h3>天氣與衣著</h3><p>出發前確認 DWD 天氣、DB／SBB 車次和景點開放；穿舒適步行鞋，攜帶分層衣物、雨具、飲水和行動電源。</p><a class="activity-link" href="https://www.dwd.de/EN/weather/weather_node.html" target="_blank" rel="noreferrer">DWD 官方天氣 →</a></article><article class="card planning-card"><h3>備選方案</h3><p>${esc(data.backup)}</p></article></div></section>
  `;
  renderMap(data);
  loadImages();
}

const tripKey = new URLSearchParams(window.location.search).get("trip") || "old-town-university";
renderTrip(heidelbergTrips[tripKey] || heidelbergTrips["old-town-university"]);

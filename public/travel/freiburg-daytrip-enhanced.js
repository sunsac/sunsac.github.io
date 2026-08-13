const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const highlightImageQueries = {
  "Lake Titisee": "Titisee",
  Hinterzarten: "Hinterzarten",
  "Triberg Waterfalls": "Triberg Waterfalls",
  Schwarzwaldbahn: "Black Forest Railway",
  "Kurhaus + Trinkhalle": "Kurhaus Baden-Baden",
  "Lichtentaler Allee": "Lichtentaler Allee",
  "Basel Minster": "Basel Minster",
  "Rhine promenade": "Rhine Basel",
  Baumwipfelpfad: "Baumwipfelpfad Schwarzwald",
  "Palais Thermal": "Palais Thermal Bad Wildbad",
  "Schiltach Old Town": "Schiltach",
  "Kinzig riverside": "Schiltach",
  "Todtnauer Wasserfall": "Todtnauer Wasserfall",
  Hasenhorn: "Hasenhorn Todtnau",
  "Park zones": "Europa-Park",
  "Ringsheim transfer": "Europa-Park",
  "Strasbourg Cathedral": "Strasbourg Cathedral",
  "Petite France": "Petite France Strasbourg",
  "Petite Venise": "Petite Venise Colmar",
  "Old Town": "Colmar",
};

const trip = (data) => ({
  intensity: "低至中等",
  weather: "中",
  transitLabel: "Freiburg → 目的地",
  localLabel: "目的地 City Walk／景點步行",
  ...data,
});

const freiburgDaytrips = {
  titisee: trip({
    category: "Black Forest／湖區與慢遊",
    title: "Titisee + Hinterzarten",
    summary: "以湖畔、森林和咖啡為主的低壓力自然日，最適合想放慢節奏、又不想承擔長途山徑的人。",
    route: "Freiburg → Titisee → 湖畔及碼頭 → Hinterzarten（可選）→ Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發及返回站"], ["Titisee station", 47.9008, 8.1548, "湖區步行起點"], ["Hinterzarten", 47.9028, 8.1033, "可選的森林小鎮段"]],
    points: [["Titisee lakefront", 47.8968, 8.1544, "湖畔、碼頭及咖啡店集中區"], ["Titisee boat pier", 47.8956, 8.1533, "短程湖船起點，按當日船班安排"], ["Lake loop south shore", 47.8887, 8.1566, "較安靜的湖畔步行段"], ["Hinterzarten village", 47.9028, 8.1033, "森林小鎮及咖啡休息點"]],
    restaurants: [["Restaurant Bergsee", 47.8957, 8.1534, "湖畔用餐選項；旺季先確認營業及候位。", mapsSearch("Restaurant Bergsee Titisee")], ["Café Becker", 47.8968, 8.1532, "適合咖啡、蛋糕及湖畔短休。", mapsSearch("Café Becker Titisee")], ["Seehotel Wiesler", 47.8962, 8.1519, "湖區較完整的餐飲選項，適合提早查看訂位。", mapsSearch("Seehotel Wiesler restaurant")]],
    activity: "湖船、湖畔環線、森林咖啡和 Hinterzarten 小鎮散步可自由組合，不需把所有活動塞進同一天。",
    activityOptions: [["Lake Titisee boat", "短程湖船適合天氣穩定、想減少步行的版本；先查當日船班。", "低｜依船班", mapsSearch("Titisee boat")], ["South-shore walk", "沿湖較安靜一側散步，按體力走一段即可，不必完成完整環湖。", "低", mapsSearch("Lake Titisee south shore walk")], ["Hinterzarten", "以森林小鎮和咖啡作為下午延伸；若交通等待過長可直接留在 Titisee。", "低", mapsSearch("Hinterzarten village")]],
    schedule: [["08:30–10:00", "由 Freiburg Hbf 前往 Titisee；抵達後先確認回程班次。"], ["10:00–12:30", "湖畔、碼頭及短段南岸步行。"], ["12:30–14:00", "湖畔午餐；船班合適時安排短程湖船。"], ["14:00–16:00", "選擇完成湖畔另一段，或前往 Hinterzarten。"], ["16:00–18:30", "返回 Freiburg，保留晚餐和交通延誤緩衝。"]],
    highlights: [["Lake Titisee", "黑森林最容易安排的湖區景觀，重點是水面、森林和慢步節奏。", "湖泊、碼頭、慢遊", mapsSearch("Lake Titisee")], ["Hinterzarten", "比湖畔更安靜的森林小鎮，可作為半日延伸而非必去點。", "森林、小鎮、咖啡", mapsSearch("Hinterzarten")]],
    booking: "Regional train、湖畔步行通常不需預約；湖船和餐廳要按 8 月當日班次及營業時間確認。",
    backup: "大雨或湖船停駛時，留在 Titisee 咖啡店，或改成 Freiburg 室內 City Walk；不要為了湊景點硬走濕滑森林路。",
  }),
  triberg: trip({
    category: "Black Forest／瀑布與景觀鐵路",
    title: "Triberg + Schwarzwaldbahn",
    summary: "瀑布、小鎮、黑森林文化和景觀鐵路的一日組合；景點密度高，但需要接受山路和階梯。",
    intensity: "中等",
    weather: "中至高",
    route: "Freiburg → Offenburg → Triberg → Waterfalls／Museum → Schwarzwaldbahn → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Offenburg", 48.4735, 7.9449, "Regional train 轉乘節點"], ["Triberg station", 48.1317, 8.2332, "小鎮外圍車站"]],
    points: [["Triberg town", 48.1285, 8.2345, "主街、商店及黑森林蛋糕"], ["Triberg Waterfalls", 48.1300, 8.2303, "瀑布步道及觀景段"], ["Black Forest Museum", 48.1286, 8.2349, "黑森林生活與工藝展示"], ["Triberg viewpoint", 48.1320, 8.2265, "天氣良好時的森林景觀"]],
    restaurants: [["Café Schäfer", 48.1285, 8.2343, "黑森林蛋糕和咖啡的代表性選項，旺季可能排隊。", mapsSearch("Café Schäfer Triberg")], ["Restaurant zur Lilie", 48.1287, 8.2347, "小鎮中心的午餐選項。", mapsSearch("Restaurant zur Lilie Triberg")], ["Bergseestüble", 48.1392, 8.2255, "森林方向的餐飲備選，需按當日路線及營業確認。", mapsSearch("Bergseestüble Triberg")]],
    activity: "瀑布步道、Black Forest Museum 和小鎮散步是核心；Schwarzwaldbahn 應視班次作為交通景觀，而非額外硬塞的景點。",
    activityOptions: [["Triberg Waterfalls", "由小鎮向瀑布上行，階梯較多；雨後注意濕滑。", "中等", mapsSearch("Triberg Waterfalls")], ["Black Forest Museum", "用室內展示補足黑森林文化，適合雨天或不想走完整瀑布線。", "低", mapsSearch("Black Forest Museum Triberg")], ["Schwarzwaldbahn", "經典黑森林鐵路景觀，按 Regional train 班次安排座位和回程。", "低｜依班次", mapsSearch("Black Forest Railway Schwarzwaldbahn")]],
    schedule: [["07:30–10:00", "Freiburg 經 Offenburg 前往 Triberg；抵達後確認回程。"], ["10:00–12:30", "由車站轉往小鎮，再走瀑布較核心的觀景段。"], ["12:30–14:00", "小鎮午餐及 Black Forest cake。"], ["14:00–16:00", "Museum 或瀑布剩餘步道，按天氣和體力二選一。"], ["16:00–19:00", "乘景觀路段及 Regional train 返回 Freiburg。"]],
    highlights: [["Triberg Waterfalls", "黑森林最具辨識度的瀑佈景點，重點是選一段舒服的步道，而不是完成所有階梯。", "瀑布、森林、階梯", mapsSearch("Triberg Waterfalls")], ["Schwarzwaldbahn", "火車本身就是景觀體驗，可把沿途山谷視作回程放鬆段。", "鐵路、山谷、交通", mapsSearch("Schwarzwaldbahn")]],
    booking: "確認 DB／SBB App 的 Regional train 班次；瀑布及 Museum 依當日開放狀況安排，山路濕滑時降低目標。",
    backup: "若雨勢大或鐵路時間不理想，改選 Baden-Baden 或 Freiburg 室內行程。",
  }),
  "baden-baden": trip({
    category: "City／溫泉與文化",
    title: "Baden-Baden",
    summary: "以溫泉、Kurhaus、公園和老城為主的低天氣風險方案，和森林瀑布日形成明顯對比。",
    route: "Freiburg → Baden-Baden station → Old Town → Kurhaus／Trinkhalle → Lichtentaler Allee → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Baden-Baden station", 48.7905, 8.1906, "市外車站，需轉巴士"], ["Kurhaus", 48.7594, 8.2398, "老城及溫泉區核心"]],
    points: [["Kurhaus", 48.7594, 8.2398, "公園、賭場建築及城市地標"], ["Trinkhalle", 48.7598, 8.2390, "柱廊、壁畫及溫泉文化"], ["Old Town", 48.7608, 8.2409, "老城街道、商店和咖啡店"], ["Lichtentaler Allee", 48.7509, 8.2390, "河畔公園及樹蔭步道"], ["Caracalla Spa", 48.7581, 8.2408, "較現代的溫泉選項"]],
    restaurants: [["Hectors", 48.7601, 8.2409, "老城中心餐飲選項，適合午餐或晚餐。", mapsSearch("Hectors Baden-Baden")], ["Rive Gauche", 48.7589, 8.2403, "Kurhaus 附近的餐飲選項。", mapsSearch("Rive Gauche Baden-Baden")], ["Café König", 48.7606, 8.2413, "咖啡、蛋糕和短休選項。", mapsSearch("Café König Baden-Baden")]],
    activity: "City Walk 與 Thermal Spa 是兩個平行選項；不必同日同時安排兩個完整 Spa。",
    activityOptions: [["Caracalla Spa", "室內外溫泉池，雨天也可行；必須提前查看入場規則和時段。", "低｜需確認", "https://www.carasana.de/en/caracalla-spa/"], ["Friedrichsbad", "歷史浴場體驗，規則和開放安排與現代 Spa 不同，出發前仔細確認。", "低｜需確認", "https://www.carasana.de/en/friedrichsbad/"], ["Lichtentaler Allee", "沿 Oos 河的樹蔭公園散步，適合溫泉前後放鬆。", "低", mapsSearch("Lichtentaler Allee")]],
    schedule: [["08:30–10:30", "Freiburg 前往 Baden-Baden station，再轉市區巴士。"], ["10:30–12:30", "Kurhaus、Trinkhalle、老城及咖啡。"], ["12:30–14:00", "老城午餐。"], ["14:00–16:30", "按預約選 Spa，或走 Lichtentaler Allee。"], ["16:30–19:00", "返回車站及 Freiburg，預留巴士轉乘緩衝。"]],
    highlights: [["Kurhaus + Trinkhalle", "Baden-Baden 的城市識別核心，適合先理解溫泉城市的歷史和建築。", "建築、溫泉文化、老城", mapsSearch("Kurhaus Baden-Baden")], ["Lichtentaler Allee", "將城市文化和自然公園結合的低強度路線，雨勢不大時很適合。", "公園、河流、散步", mapsSearch("Lichtentaler Allee")]],
    booking: "Spa 必須查看官方時段、入場規則及用品要求；Freiburg–Baden-Baden 需把車站到老城的巴士段計入時間。",
    backup: "大雨時以 Spa、Trinkhalle、Kurhaus、博物館和咖啡為主，不依賴公園步行。",
  }),
  basel: trip({
    category: "Cross-border City／博物館與 Rhine 河",
    title: "Basel",
    summary: "適合把 Freiburg 周邊的一天轉為跨境城市文化日；Old Town、Rhine 和博物館可按天氣自由調節。",
    route: "Freiburg → Basel Bad Bf → Old Town → Basel Minster／Rhine → Museum → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Basel Bad Bf", 47.5677, 7.6103, "德國側車站及跨境入口"], ["Basel SBB", 47.5475, 7.5898, "瑞士側主要車站"]],
    points: [["Basel Minster", 47.5574, 7.5926, "紅砂岩教堂及 Rhine 觀景"], ["Rathaus", 47.5596, 7.5885, "紅色市政廳及 Marktplatz"], ["Spalentor", 47.5580, 7.5792, "歷史城門"], ["Rhine promenade", 47.5595, 7.5870, "河岸散步及渡船"], ["Kunstmuseum Basel", 47.5547, 7.5948, "雨天博物館選項"]],
    restaurants: [["Markthalle Basel", 47.5484, 7.5894, "多樣化餐飲，適合不想預約的午餐。", mapsSearch("Markthalle Basel")], ["Zum Isaak", 47.5572, 7.5924, "Basel Minster 附近的餐飲選項。", mapsSearch("Zum Isaak Basel")], ["Consum", 47.5591, 7.5880, "老城內簡單午餐及咖啡選項。", mapsSearch("Consum Basel restaurant")]],
    activity: "以 Old Town City Walk 為主，再在博物館、Rhine 河岸和渡船中選一至兩項。",
    activityOptions: [["Old Town Walk", "Rathaus、Marktplatz、Spalentor、Basel Minster 的連續城市步行。", "低", mapsSearch("Basel Old Town")], ["Kunstmuseum Basel", "雨天最穩定的室內文化選項；出發前查看當日展覽和開放時間。", "低｜需查開放", "https://kunstmuseumbasel.ch/en"], ["Rhine ferry", "短程渡河體驗，視水位、風雨和當日營運決定。", "低｜依營運", mapsSearch("Basel Rhine ferry")]],
    schedule: [["08:30–10:00", "Freiburg 前往 Basel Bad Bf；準備護照及確認票券適用範圍。"], ["10:00–12:30", "Basel Old Town、Rathaus、Spalentor 和 Basel Minster。"], ["12:30–14:00", "老城或 Markthalle 午餐。"], ["14:00–16:30", "博物館、Rhine 河岸或渡船三選一至二。"], ["16:30–19:00", "返回 Basel Bad Bf 及 Freiburg，預留跨境轉乘緩衝。"]],
    highlights: [["Basel Minster", "紅砂岩教堂和 Rhine 河景是 Basel 最具辨識度的城市景觀。", "教堂、河景、歷史", mapsSearch("Basel Minster")], ["Rhine promenade", "把博物館和老城步行轉為河岸慢遊，適合下午放鬆。", "河岸、渡船、散步", mapsSearch("Rhine promenade Basel")]],
    booking: "跨境前確認護照、票券有效範圍和當日鐵路；博物館及渡船依官方開放狀況調整。",
    backup: "雨天以 Kunstmuseum、Basel Minster、老城拱廊和 Markthalle 為主。",
  }),
  "bad-wildbad": trip({
    category: "Black Forest／溫泉與樹冠步道",
    title: "Bad Wildbad",
    summary: "以溫泉、森林和樹冠步道組成的北黑森林一日；比 Baden-Baden 更偏自然和森林體驗。",
    route: "Freiburg → Pforzheim → Bad Wildbad → Sommerberg／Thermal Spa → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Pforzheim", 48.8922, 8.7027, "轉乘節點"], ["Bad Wildbad station", 48.7500, 8.5500, "城鎮及溫泉入口"]],
    points: [["Bad Wildbad town", 48.7500, 8.5500, "溫泉城鎮及河谷散步"], ["Sommerbergbahn", 48.7535, 8.5520, "上 Sommerberg 的纜車"], ["Baumwipfelpfad Schwarzwald", 48.7600, 8.5600, "森林樹冠步道及觀景塔"], ["Palais Thermal", 48.7492, 8.5510, "歷史溫泉建築"]],
    restaurants: [["Auerhahn", 48.7600, 8.5600, "Sommerberg 附近的森林餐飲備選。", mapsSearch("Auerhahn Sommerberg")], ["Wildbader Hof", 48.7504, 8.5510, "城鎮中心餐飲選項。", mapsSearch("Wildbader Hof Bad Wildbad")]],
    activity: "Sommerberg 樹冠步道和 Palais Thermal 是兩個平行核心，不建議為了兩個完整活動而壓縮交通。",
    activityOptions: [["Baumwipfelpfad", "森林樹冠步道和觀景塔，適合夏季；雷雨時避免停留高處。", "低至中等", "https://www.baumwipfelpfad-schwarzwald.de/en/"], ["Palais Thermal", "歷史溫泉體驗，須查看入場時段及用品規則。", "低｜需確認", mapsSearch("Palais Thermal Bad Wildbad")], ["Sommerbergbahn", "以纜車取代長上坡，讓森林日保持舒適節奏。", "低｜依營運", mapsSearch("Sommerbergbahn Bad Wildbad")]],
    schedule: [["07:00–10:30", "Freiburg 經 Pforzheim 前往 Bad Wildbad。"], ["10:30–11:15", "市區轉 Sommerbergbahn，上山前確認營運。"], ["11:15–14:00", "Baumwipfelpfad 和森林觀景。"], ["14:00–15:30", "Sommerberg 午餐或返回城鎮。"], ["15:30–17:00", "Palais Thermal 或河谷短走，再返回 Freiburg。"]],
    highlights: [["Baumwipfelpfad", "把黑森林從地面步道提升到樹冠高度，與 Triberg 的瀑布主題不同。", "樹冠、森林、觀景塔", "https://www.baumwipfelpfad-schwarzwald.de/en/"], ["Palais Thermal", "歷史溫泉建築，適合雨天和不想長距離步行的一天。", "溫泉、建築、休息", mapsSearch("Palais Thermal Bad Wildbad")]],
    booking: "交通轉乘、纜車、樹冠步道和 Spa 均需出發前確認；雷雨時不要安排高處觀景塔。",
    backup: "山上雷雨或纜車停駛時，改留在 Bad Wildbad 城鎮和 Palais Thermal，或改 Baden-Baden。",
  }),
  schiltach: trip({
    category: "Black Forest／木骨架小鎮與河谷",
    title: "Schiltach",
    summary: "黑森林中最適合慢慢理解地方建築和河谷生活的小鎮之一，強度低、拍攝和散步價值高。",
    route: "Freiburg → Hausach／Offenburg → Schiltach → Old Town → 河谷 → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Hausach", 48.2848, 8.1760, "黑森林鐵路轉乘節點"], ["Schiltach station", 48.2895, 8.3430, "小鎮外圍車站"]],
    points: [["Schiltach Old Town", 48.2900, 8.3420, "木骨架房屋、斜坡街道和廣場"], ["Market Square", 48.2890, 8.3430, "歷史中心及拍攝位置"], ["Schüttesäge Museum", 48.2895, 8.3445, "傳統鋸木工藝展示"], ["Kinzig riverside", 48.2875, 8.3415, "河岸短走和小鎮全景"]],
    restaurants: [["Hotel zur alten Brücke", 48.2892, 8.3423, "老城及橋邊餐飲選項。", mapsSearch("Hotel zur alten Brücke Schiltach")], ["Café Bachbeck", 48.2895, 8.3428, "咖啡、蛋糕和下午短休。", mapsSearch("Café Bachbeck Schiltach")]],
    activity: "木骨架老城、河谷散步和博物館三者組合即可支撐一個慢節奏日，不需再硬接 Triberg。",
    activityOptions: [["Old Town Walk", "由市場廣場、木骨架街道到河邊，適合慢走和拍攝。", "低", mapsSearch("Schiltach Old Town")], ["Schüttesäge Museum", "瞭解 Kinzig 河谷的木材和鋸木傳統，開放時間需確認。", "低｜需查開放", mapsSearch("Schüttesäge Museum")], ["Kinzig riverside", "在河邊看小鎮立面和橋樑，適合午餐後消化。", "低", mapsSearch("Kinzig river Schiltach")]],
    schedule: [["08:00–10:30", "Freiburg 經 Hausach 前往 Schiltach。"], ["10:30–13:00", "老城、Marktplatz 和木骨架街道。"], ["13:00–14:30", "老城午餐。"], ["14:30–16:00", "博物館或 Kinzig 河岸短走。"], ["16:00–19:00", "按班次返回 Freiburg。"]],
    highlights: [["Schiltach Old Town", "木骨架房屋沿山坡和河谷排列，與 Triberg 的自然景觀形成互補。", "木骨架、歷史、拍攝", mapsSearch("Schiltach Old Town")], ["Kinzig riverside", "河岸角度能看到小鎮的立體層次，是低強度散步的最佳段落。", "河谷、橋、慢遊", mapsSearch("Kinzig river Schiltach")]],
    booking: "交通班次較疏，建議先鎖定回程；博物館按當日開放時間安排。",
    backup: "大雨時縮短河岸路線，集中老城咖啡和室內博物館。",
  }),
  todtnau: trip({
    category: "Black Forest／瀑布與夏季山景",
    title: "Todtnau",
    summary: "南黑森林的瀑布、山谷和夏季戶外活動；比 Titisee 更偏自然，交通安排也較依賴巴士。",
    route: "Freiburg → Kirchzarten／Todtnau → Todtnauer Wasserfall → Hasenhorn（可選）→ Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Kirchzarten", 47.9630, 7.9580, "南黑森林轉移節點"], ["Todtnau", 47.8290, 7.9430, "瀑布及山地活動基地"]],
    points: [["Todtnauer Wasserfall", 47.8310, 7.9435, "瀑布和短步道"], ["Todtnau town", 47.8290, 7.9430, "午餐和巴士轉移點"], ["Hasenhorn Coaster", 47.8240, 7.9440, "夏季滑車及山地活動，需看天氣"], ["Black Forest valley", 47.8270, 7.9500, "南黑森林山谷景觀"]],
    restaurants: [["Wasserfall Restaurant", 47.8310, 7.9435, "瀑布附近簡單餐飲選項，按營業狀況確認。", mapsSearch("restaurant Todtnau waterfall")], ["Berggasthaus Hasenhorn", 47.8240, 7.9440, "山上活動區餐飲，適合配合纜車或滑車。", mapsSearch("Berggasthaus Hasenhorn")]],
    activity: "瀑布是穩定核心；Hasenhorn Coaster 等夏季活動只作可選模組，不安排冬季滑雪內容。",
    activityOptions: [["Todtnauer Wasserfall", "短距離即可看到瀑布，適合當日天氣不穩時保留。", "低至中等", mapsSearch("Todtnauer Wasserfall")], ["Hasenhorn Coaster", "夏季山地滑車，需確認身高、營運和雷雨規則。", "中等｜需確認", mapsSearch("Hasenhorn Coaster")], ["Todtnau valley walk", "沿山谷做短段散步，不追求完整長線。", "低至中等", mapsSearch("Todtnau Black Forest hiking")]],
    schedule: [["07:30–10:00", "Freiburg 經 Kirchzarten 轉巴士前往 Todtnau。"], ["10:00–12:30", "Todtnauer Wasserfall 和周邊短步道。"], ["12:30–14:00", "Todtnau 午餐。"], ["14:00–16:00", "按天氣選 Hasenhorn 或山谷短走。"], ["16:00–19:00", "返回 Freiburg，預留巴士延誤緩衝。"]],
    highlights: [["Todtnauer Wasserfall", "南黑森林最直接的瀑佈景觀，適合和 Triberg 作南北兩種瀑布選擇比較。", "瀑布、山谷、短步道", mapsSearch("Todtnauer Wasserfall")], ["Hasenhorn", "把瀑布自然日延伸成夏季山地活動，但高度依賴營運和天氣。", "夏季活動、山景、滑車", mapsSearch("Hasenhorn Todtnau")]],
    booking: "巴士和山地活動營運需提前查詢；只列夏季活動，冬季滑雪不納入 8 月計畫。",
    backup: "雷雨或巴士銜接不理想時，改選 Freiburg、Baden-Baden 或 Basel。",
  }),
  "europa-park": trip({
    category: "Theme Park／主題樂園 Full-day",
    title: "Europa-Park Rust",
    summary: "完全獨立的一日主題樂園方案，適合把一天交給遊樂設施、表演和園區分區，不與黑森林自然日混搭。",
    route: "Freiburg → Ringsheim／Europa-Park Rust → 園區 Full-day → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Ringsheim station", 48.2470, 7.7760, "Europa-Park 接駁轉移點"], ["Europa-Park entrance", 48.2660, 7.7210, "園區入口"]],
    points: [["Europa-Park entrance", 48.2660, 7.7210, "入園、安檢和資訊中心"], ["France area", 48.2640, 7.7200, "主題分區及餐飲"], ["Iceland area", 48.2700, 7.7140, "大型刺激設施集中區"], ["Spain／Adventure area", 48.2620, 7.7270, "表演、家庭設施和休息區"]],
    restaurants: [["FoodLoop", 48.2680, 7.7170, "園區內特色餐飲，熱門時段可能需要排隊。", mapsSearch("FoodLoop Europa-Park")], ["See-Restaurant", 48.2660, 7.7240, "適合中段休息和午餐。", mapsSearch("See-Restaurant Europa-Park")]],
    activity: "一日只安排 Europa-Park；樂園分區、表演和設施按身體狀況選擇，不再加入 Rust 老城或黑森林景點。",
    activityOptions: [["大型雲霄飛車", "先處理想玩的熱門設施，再用園區 App 或現場資訊調整隊伍。", "中至高", "https://www.europapark.de/en"], ["Family／Indoor attractions", "適合炎熱、下雨或需要降低刺激度的時段。", "低", "https://www.europapark.de/en"], ["Shows and themed areas", "以表演和主題分區平衡排隊時間，讓全天不只剩下遊樂設施。", "低", "https://www.europapark.de/en"]],
    schedule: [["08:00–09:30", "Freiburg 前往 Ringsheim，再接駁到 Europa-Park。"], ["09:30–12:30", "入園後優先安排最想體驗的設施。"], ["12:30–14:00", "園內午餐及休息。"], ["14:00–18:00", "按排隊時間選設施、表演和主題區。"], ["18:00–20:00", "離園及返回 Freiburg，預留接駁和鐵路緩衝。"]],
    highlights: [["Park zones", "不同國家主題區讓一天即使不追求所有設施也有完整體驗。", "主題分區、拍攝、餐飲", "https://www.europapark.de/en"], ["Ringsheim transfer", "公共交通可行，但接駁段和閉園後人流要預留時間。", "交通、接駁、行李", mapsSearch("Europa-Park shuttle Ringsheim")]],
    booking: "門票、開放日期和入園規則必須以官方網站為準；8 月旺季建議提前購票。",
    backup: "大雨不代表取消，先利用室內設施和表演；若交通或園區營運異常，改排 Freiburg 室內日。",
  }),
  strasbourg: trip({
    category: "Cross-border City／Alsace 城市文化",
    title: "Strasbourg",
    summary: "跨境前往 Alsace 首府，適合安排完整城市 Walk、教堂、運河和室內文化，不與 Colmar 同日硬接。",
    route: "Freiburg → Offenburg → Strasbourg → Cathedral → Petite France → European Quarter（可選）→ Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Offenburg", 48.4735, 7.9449, "跨境鐵路轉乘／班次確認點"], ["Strasbourg station", 48.5850, 7.7340, "城市 Walk 起點"]],
    points: [["Strasbourg Cathedral", 48.5818, 7.7508, "哥德式教堂和廣場"], ["La Petite France", 48.5805, 7.7397, "運河、木骨架房屋和橋樑"], ["Barrage Vauban", 48.5791, 7.7352, "城市防禦建築及觀景"], ["European Parliament", 48.5973, 7.7680, "可選的歐洲機構區域"], ["Place Kléber", 48.5846, 7.7480, "市中心廣場和購物區"]],
    restaurants: [["Maison Kammerzell", 48.5815, 7.7504, "教堂附近歷史餐飲選項，熱門時段建議確認訂位。", mapsSearch("Maison Kammerzell Strasbourg")], ["Le Clou", 48.5812, 7.7497, "傳統 Alsace 菜選項。", mapsSearch("Le Clou Strasbourg")], ["L'Ancienne Douane", 48.5807, 7.7478, "市中心餐飲選項。", mapsSearch("L'Ancienne Douane Strasbourg")]],
    activity: "以 Cathedral + Petite France 為主線，European Quarter 只作額外選項；需要跨境證件和票券確認。",
    activityOptions: [["Cathedral and platform", "教堂內部及廣場是城市核心；登塔需按官方開放與體力決定。", "低至中等｜需確認", mapsSearch("Strasbourg Cathedral")], ["Petite France", "運河、木骨架建築和橋樑組成最適合慢走的街區。", "低", mapsSearch("Petite France Strasbourg")], ["Boat cruise", "以船遊覽運河和城市歷史，適合下午減少步行。", "低｜依班次", mapsSearch("Strasbourg boat cruise")]],
    schedule: [["07:30–10:00", "Freiburg 經 Offenburg 前往 Strasbourg，確認跨境車次。"], ["10:00–12:30", "Cathedral、廣場和市中心街道。"], ["12:30–14:00", "Alsace 午餐。"], ["14:00–16:30", "Petite France、Barrage Vauban 或船遊。"], ["16:30–19:30", "返回 Strasbourg station 及 Freiburg，預留跨境緩衝。"]],
    highlights: [["Strasbourg Cathedral", "城市最醒目的歷史地標，和 Bern、Basel 的教堂城市主題互相區分。", "教堂、歷史、城市", mapsSearch("Strasbourg Cathedral")], ["Petite France", "運河和木骨架建築是 Strasbourg 最具 Alsace 特色的街區。", "運河、木骨架、散步", mapsSearch("Petite France Strasbourg")]],
    booking: "確認跨境車次、票券適用範圍、護照和當日邊境交通；教堂登塔、船遊按官方班次安排。",
    backup: "雨天改為 Cathedral、博物館、商場和船遊；若跨境車次不理想，改安排 Basel。",
  }),
  colmar: trip({
    category: "Cross-border City／童話小鎮與 Alsace",
    title: "Colmar",
    summary: "以 Petite Venise、木骨架街區和 Alsace 小鎮氛圍為主；比 Strasbourg 更小、更適合慢慢拍攝。",
    route: "Freiburg → Müllheim／Mulhouse 或 Offenburg → Colmar → Old Town → Petite Venise → Freiburg",
    transit: [["Freiburg Hbf", 47.9978, 7.8417, "出發站"], ["Colmar station", 48.0707, 7.3469, "城市 Walk 起點"], ["Colmar Old Town", 48.0770, 7.3570, "老城核心"]],
    points: [["Unterlinden Museum", 48.0794, 7.3555, "室內藝術和文化選項"], ["Collégiale Saint-Martin", 48.0774, 7.3580, "老城教堂"], ["Koïfhus", 48.0765, 7.3578, "歷史市場建築"], ["Petite Venise Colmar", 48.0735, 7.3600, "運河、色彩房屋和拍攝點"], ["Marché Couvert", 48.0750, 7.3610, "市場和簡單午餐"]],
    restaurants: [["Le Fer Rouge", 48.0749, 7.3590, "Petite Venise 附近的 Alsace 餐飲選項。", mapsSearch("Le Fer Rouge Colmar")], ["Marché Couvert", 48.0750, 7.3610, "市場型午餐，彈性較高。", mapsSearch("Marché Couvert Colmar")], ["Wistub de la Petite Venise", 48.0733, 7.3595, "運河區傳統菜選項，旺季先確認訂位。", mapsSearch("Wistub Petite Venise Colmar")]],
    activity: "Colmar 的重點是完整 Old Town Walk，不建議再硬加 Strasbourg；想看葡萄園村落應另排一日。",
    activityOptions: [["Petite Venise", "沿運河和橋樑慢走，是 Colmar 最具代表性的攝影段落。", "低", mapsSearch("Petite Venise Colmar")], ["Old Town churches", "Collégiale Saint-Martin、Koïfhus 和木骨架街區可組成短 City Walk。", "低", mapsSearch("Colmar Old Town")], ["Boat cruise", "小型運河船可降低步行量，按當日營運及排隊狀況決定。", "低｜依班次", mapsSearch("Colmar boat tour")], ["Unterlinden Museum", "雨天室內備案，適合對藝術和地方文化有興趣時安排。", "低｜需查開放", "https://www.musee-unterlinden.com/en/"]],
    schedule: [["07:30–10:00", "由 Freiburg 前往 Colmar，確認跨境轉乘和回程。"], ["10:00–12:30", "老城、教堂、Koïfhus 和木骨架街區。"], ["12:30–14:00", "Marché Couvert 或老城午餐。"], ["14:00–16:30", "Petite Venise、運河船或 Unterlinden Museum。"], ["16:30–19:30", "返回 Colmar station 及 Freiburg，預留跨境緩衝。"]],
    highlights: [["Petite Venise", "色彩房屋、運河和橋樑構成 Colmar 最鮮明的童話感。", "運河、木骨架、攝影", mapsSearch("Petite Venise Colmar")], ["Old Town", "城市規模比 Strasbourg 小，適合用慢節奏完成完整步行。", "老城、教堂、慢遊", mapsSearch("Colmar Old Town")]],
    booking: "確認跨境車次、票券、護照及回程班次；運河船和博物館按當日營運安排。",
    backup: "雨天以 Unterlinden Museum、教堂、市場和咖啡店為主；不要同日再加入 Strasbourg。",
  }),
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));

function makeIcon(label, kind = "") {
  return L.divIcon({ className: "", html: `<span class="daytrip-map-number ${kind}">${label}</span>`, iconSize: [34, 34], iconAnchor: [17, 17] });
}

function renderMap(data) {
  const mapElement = document.querySelector("#freiburg-trip-map");
  if (!mapElement || !window.L) return;
  const all = [...data.transit, ...data.points, ...data.restaurants];
  const map = L.map(mapElement).setView([all[0][1], all[0][2]], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap contributors" }).addTo(map);
  data.transit.forEach(([name, lat, lng, description], index) => L.marker([lat, lng], { icon: makeIcon(`T${index + 1}`, "transit") }).addTo(map).bindPopup(`<strong>T${index + 1}｜${escapeHtml(name)}</strong><br>${escapeHtml(description)}`));
  data.points.forEach(([name, lat, lng, description], index) => L.marker([lat, lng], { icon: makeIcon(index + 1) }).addTo(map).bindPopup(`<strong>${index + 1}｜${escapeHtml(name)}</strong><br>${escapeHtml(description)}`));
  data.restaurants.forEach(([name, lat, lng, description, link], index) => L.marker([lat, lng], { icon: makeIcon(`R${index + 1}`, "restaurant") }).addTo(map).bindPopup(`<strong>R${index + 1}｜${escapeHtml(name)}</strong><br>${escapeHtml(description)}<br><a href="${link}" target="_blank" rel="noreferrer">Google Maps →</a>`));
  const transitLine = data.transit.map(([, lat, lng]) => [lat, lng]);
  const localLine = data.points.map(([, lat, lng]) => [lat, lng]);
  L.polyline(transitLine, { color: "#d9782f", dashArray: "8 8", weight: 4 }).addTo(map);
  L.polyline(localLine, { color: "#2e6f95", weight: 4 }).addTo(map);
  map.fitBounds(L.latLngBounds(all.map(([, lat, lng]) => [lat, lng])), { padding: [24, 24] });
}

function renderFreiburgDaytrip(data) {
  document.title = `${data.title}｜Freiburg 周邊`;
  document.querySelector("#freiburg-daytrip-title").textContent = data.title;
  document.querySelector("#freiburg-daytrip-subtitle").textContent = `Freiburg 周邊 Full-day｜${data.category}｜強度：${data.intensity}｜天氣依賴：${data.weather}`;
  document.querySelector("#freiburg-daytrip-page").innerHTML = `
    <section class="daytrip-hero"><p class="daytrip-category">${escapeHtml(data.category)}</p><h2>${escapeHtml(data.title)}</h2><p>${escapeHtml(data.summary)}</p><div class="daytrip-tags"><span>公共交通</span><span>${escapeHtml(data.intensity)}</span><span>8 月可行</span></div></section>
    <section><h2>當日路線與時間軸</h2><p><code>${escapeHtml(data.route)}</code></p><div class="daytrip-timeline">${data.schedule.map(([time, detail]) => `<article class="daytrip-time"><strong>${escapeHtml(time)}</strong><p>${escapeHtml(detail)}</p></article>`).join("")}</div></section>
    <section><h2>交通與互動地圖</h2><div id="freiburg-trip-map" class="daytrip-map" aria-label="${escapeHtml(data.title)} 地圖"></div><div class="daytrip-map-legend"><span><i class="legend-map-number transit">T</i>交通節點</span><span><i class="legend-map-number">1</i>景點</span><span><i class="legend-map-number restaurant">R</i>餐廳</span></div><p class="small"><strong>橙色虛線：</strong>${escapeHtml(data.transitLabel)}；<strong>藍色實線：</strong>${escapeHtml(data.localLabel)}。</p></section>
    <section><h2>主要景點與活動</h2><div class="highlight-detail-grid">${data.highlights.map(([name, description, tags, link]) => `<article class="card highlight-card"><div class="attraction-image" data-attraction-name="${escapeHtml(name)}"></div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p><p class="small">${escapeHtml(tags)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看地圖／官方資料 →</a></article>`).join("")}</div><div class="activity-choice-grid">${data.activityOptions.map(([name, description, intensity, link]) => `<article class="card activity-choice"><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p><p class="small">強度：${escapeHtml(intensity)}</p><a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看詳情 →</a></article>`).join("")}</div><p class="note"><strong>組合原則：</strong>${escapeHtml(data.activity)}</p></section>
    <section><h2>推薦餐廳</h2><div class="grid restaurant-list">${data.restaurants.map(([name, , , description, link], index) => `<article class="card restaurant-card"><h3>R${index + 1}｜${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p><a class="restaurant-link" href="${link}" target="_blank" rel="noreferrer">Google Maps →</a></article>`).join("")}</div></section>
    <section><h2>預約、天氣與備案</h2><div class="grid"><article class="card planning-card"><h3>預約／交通</h3><p>${escapeHtml(data.booking)}</p></article><article class="card planning-card"><h3>天氣與衣著</h3><p>出發前一晚確認 DB、SBB、景點和活動 operator。穿舒適步行鞋、分層衣物、薄外套和雨具；森林及河邊路線不要穿不防滑的城市皮鞋。</p><a class="activity-link" href="https://www.meteoswiss.admin.ch/" target="_blank" rel="noreferrer">MeteoSwiss 官方天氣 →</a></article><article class="card planning-card"><h3>備案</h3><p>${escapeHtml(data.backup)}</p></article></div></section>
  `;
  renderMap(data);
  document.querySelectorAll(".attraction-image").forEach(async (element) => {
    const title = element.dataset.attractionName;
    const query = highlightImageQueries[title] || title;
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=8&prop=pageimages&piprop=thumbnail&pithumbsize=640&format=json&origin=*`);
      const pages = Object.values((await response.json()).query?.pages || {});
      const normalizedTitle = query
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");
      const rankedPages = pages
        .filter((page) => page.thumbnail)
        .sort((left, right) => (left.index || Number.MAX_SAFE_INTEGER) - (right.index || Number.MAX_SAFE_INTEGER));
      const matchingPage = rankedPages.find((page) =>
        page.title
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]/g, "")
          .includes(normalizedTitle)
      );
      const source = (matchingPage || rankedPages[0])?.thumbnail?.source;
      if (source) element.style.background = `center / cover url("${source}")`;
      else element.classList.add("image-fallback");
    } catch {
      element.classList.add("image-fallback");
    }
  });
}

const tripKey = new URLSearchParams(window.location.search).get("trip") || "titisee";
renderFreiburgDaytrip(freiburgDaytrips[tripKey] || freiburgDaytrips.titisee);

const bernDaytrips = {
  "interlaken-lauterbrunnen": {
    category: "Alpine／高山與瀑布",
    title: "Interlaken + Lauterbrunnen",
    summary: "山谷、瀑布及 Swiss Alps 的平衡版本；第一次到 Bern 周邊最值得優先考慮。",
    intensity: "中等",
    weather: "高",
    route: "Bern → Interlaken Ost → Lauterbrunnen → Interlaken → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Lauterbrunnen",
      localLabel: "Interlaken Ost／Lauterbrunnen Valley 步行及短程轉移",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Lauterbrunnen 及 Jungfrau Region 的轉乘站"],
        ["Lauterbrunnen", 46.593600, 7.909000, "山谷村落及瀑布路線起點"]
      ],
      points: [
        ["Interlaken Ost", 46.690500, 7.869500, "交通樞紐、Höhematte 及湖區轉移起點"],
        ["Lauterbrunnen", 46.593600, 7.909000, "瀑布山谷村落"],
        ["Staubbach Falls", 46.596500, 7.907200, "Lauterbrunnen 代表性瀑布"],
        ["Höhematte", 46.686700, 7.858700, "Interlaken 中心草地及滑翔傘降落區附近"],
        ["Harder Kulm", 46.697200, 7.861500, "俯瞰 Interlaken、Lake Thun 及 Lake Brienz 的觀景台"],
        ["Interlaken promenade", 46.686000, 7.858000, "小鎮散步、咖啡及晚餐區"],
        ["Interlaken West", 46.682000, 7.852500, "前往 Unterseen Old Town 及西側 City Walk 的起點"],
        ["Unterseen Old Town", 46.683000, 7.847500, "較安靜的歷史街區、教堂及廣場"],
        ["Japanese Garden", 46.686000, 7.854500, "短暫休息及 City Walk 的綠地停留點"]
      ],
      restaurants: [
        ["Hüsi Bierhaus", 46.686300, 7.858600, "Interlaken Old Town 內的 beer house，適合返回 Interlaken 後晚餐。", "https://www.google.com/maps/search/?api=1&query=H%C3%BCsi+Bierhaus+Interlaken"],
        ["Little Thai", 46.686800, 7.856800, "Interlaken 的 Thai restaurant 選項，適合不想吃山上餐食的一晚。", "https://www.google.com/maps/search/?api=1&query=Little+Thai+Interlaken"],
        ["Harder Kulm Panorama Restaurant", 46.697200, 7.861500, "觀景台上的餐飲選項；應先確認 funicular 及餐廳當日營運。", "https://www.google.com/maps/search/?api=1&query=Harder+Kulm+Panorama+Restaurant"],
        ["Restaurant Weidstübli", 46.594900, 7.908000, "Lauterbrunnen Valley 內的餐飲選項，可配合瀑布及山谷步行。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Weidst%C3%BCbli+Lauterbrunnen"]
      ]
    },
    chooseTwo: [
      ["lake", "游湖", "Lake Thun 或 Lake Brienz 選一段船程，適合慢節奏及天氣普通的日子。", "低強度｜需查船班", "可與 Lauterbrunnen 或 Paragliding 組合；不要同日安排兩個完整湖程。"],
      ["paragliding", "Tandem paragliding", "由 Interlaken 周邊山坡滑翔至 Höhematte，約需半天，必須由 operator 按天氣放飛。", "低至中等｜必須預約", "適合搭配 Lauterbrunnen；若與游湖組合，需把兩項時間安排得較彈性。"],
      ["lauterbrunnen", "Lauterbrunnen Valley", "瀑布、岩壁及山谷村落的慢步行，是三項中最穩定的核心景觀。", "中等｜天氣依賴高", "適合與游湖或 Paragliding 組合；不要再加入 Wengen、Mürren 或 Jungfraujoch。"]
    ],
    activity: "可選 tandem paragliding，但必須預約且不能與山谷深度行程硬接。",
    activityOptions: [
      ["Tandem paragliding", "由 Interlaken 周邊山坡滑翔至 Höhematte，通常約需半天，必須以風勢及 operator 安全判斷為準。", "低至中等", "https://www.google.com/maps/search/?api=1&query=tandem+paragliding+Interlaken"],
      ["Harder Kulm", "乘 funicular 上山看兩湖與 Alps；適合替代長距離山區步道，但仍高度依賴能見度。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Harder+Kulm+Interlaken"],
      ["Lake Thun／Lake Brienz boat", "可在 Interlaken 一帶安排短程湖船，按船班及時間選一個湖，不要兩湖都硬接。", "低", "https://www.google.com/maps/search/?api=1&query=Interlaken+boat+cruise"],
      ["Interlaken promenade + Höhematte", "不需預約的低強度活動，適合滑翔傘前後、等候船班或天氣普通時使用。", "低", "https://www.google.com/maps/search/?api=1&query=H%C3%B6hematte+Interlaken"],
      ["Interlaken + Unterseen City Walk", "由 Interlaken West 走 Höheweg、Höhematte、Japanese Garden，再延伸到 Unterseen Old Town；適合不想安排高強度山區的一天。", "低", "https://www.google.com/maps/search/?api=1&query=Unterseen+Old+Town"],
      ["Schynige Platte", "由 Wilderswil 乘山地鐵路上山，安排 Panorama Trail 或 Alpine Garden；是比 Harder Kulm 更完整的山景活動。", "中等", "https://www.google.com/maps/search/?api=1&query=Schynige+Platte"],
      ["Giessbach Falls + Lake Brienz", "可搭配 Lake Brienz 船程及 Giessbach Falls，適合想看瀑布但不想走 Lauterbrunnen 路線的人。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Giessbach+Falls"],
      ["St. Beatus Caves", "Lake Thun 北岸的洞穴及瀑布景點，適合與湖區活動組合；交通比 Interlaken 市內活動複雜。", "中等", "https://www.google.com/maps/search/?api=1&query=St.+Beatus+Caves"]
    ],
    activityOptionsTitle: "Interlaken 活動與 City Walk Optional",
    schedule: [
      ["07:30–09:30", "由 Bern 出發，經 Interlaken Ost 前往 Lauterbrunnen。"],
      ["09:30–12:30", "Lauterbrunnen Valley、Staubbach Falls、村落及山谷步行。"],
      ["12:30–14:00", "Lauterbrunnen 午餐及休息，不急於轉乘。"],
      ["14:00–16:30", "返回 Interlaken，安排 Höhematte、Aare 或湖邊短步行。"],
      ["16:30–18:30", "視體力在 Interlaken café 停留，再返回 Bern。"]
    ],
    highlights: ["Staubbach Falls", "Lauterbrunnen Valley", "Höhematte", "Harder Kulm", "Interlaken promenade"],
    highlightDetails: [
      ["Staubbach Falls", "Lauterbrunnen 最具代表性的瀑布，從村內即可看到；適合上午抵達後先拍照及短暫停留。", "瀑布、攝影、短步行", "https://www.google.com/maps/search/?api=1&query=Staubbach+Falls"],
      ["Lauterbrunnen Valley", "巨大岩壁、瀑布及山谷村落組成的景觀，重點是慢走與感受尺度，不必追求長途徒步。", "山谷、村落、散步", "https://www.google.com/maps/search/?api=1&query=Lauterbrunnen+Valley"],
      ["Höhematte", "Interlaken 中心的大草地，可看到滑翔傘降落、山景及小鎮生活，適合活動前後休息。", "草地、滑翔傘、城市生活", "https://www.google.com/maps/search/?api=1&query=H%C3%B6hematte+Interlaken"],
      ["Harder Kulm", "Interlaken 上方的觀景台，可俯瞰 Lake Thun、Lake Brienz 及 Eiger、Mönch、Jungfrau 方向。", "觀景台、funicular、湖景", "https://www.google.com/maps/search/?api=1&query=Harder+Kulm"],
      ["Interlaken promenade", "Interlaken Ost、Höhematte 及 Old Town 之間的逛街、咖啡及晚餐區，適合安排在回程緩衝。", "小鎮散步、餐廳、購物", "https://www.google.com/maps/search/?api=1&query=Interlaken+promenade"],
      ["Unterseen Old Town", "與 Interlaken 相鄰但氣氛較安靜的歷史小鎮，可看教堂、廣場及傳統建築，適合補足城市文化面向。", "歷史街區、教堂、散步", "https://www.google.com/maps/search/?api=1&query=Unterseen+Old+Town"],
      ["Japanese Garden", "Interlaken 內適合短暫停留的綠洲，可與 Höhematte、Höheweg 及 Interlaken West 串成短版 City Walk。", "公園、散步、短停", "https://www.google.com/maps/search/?api=1&query=Japanese+Garden+Interlaken"]
    ],
    booking: "一般火車不需指定座位；paragliding、Harder Kulm 或其他戶外活動需提前確認。",
    backup: "山谷雲霧或雷雨時，改選 Lucerne、Thun 或 Bern 室內行程。"
  },
  "wengen-lauterbrunnen": {
    category: "Storybook villages／童話村落",
    title: "Wengen + Lauterbrunnen",
    summary: "無車村落、山谷瀑布與木屋景觀；最接近經典 Swiss storybook village 的組合。",
    intensity: "中等",
    weather: "高",
    route: "Bern → Interlaken Ost → Lauterbrunnen → Wengen → Lauterbrunnen → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Lauterbrunnen",
      localLabel: "Lauterbrunnen → Wengen 及村落周邊步行",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Lauterbrunnen 的轉乘站"],
        ["Lauterbrunnen", 46.593600, 7.909000, "轉乘 Wengen mountain railway"]
      ],
      points: [
        ["Lauterbrunnen", 46.593600, 7.909000, "瀑布山谷村落及 Wengen 轉乘起點"],
        ["Wengen", 46.605500, 7.921800, "無車村落、木屋、山景及餐飲"],
        ["Staubbach Falls", 46.596500, 7.907200, "Lauterbrunnen 代表性瀑布"],
        ["Wengen village walk", 46.605500, 7.921800, "村內短步道、觀景平台及木屋街景"],
        ["Männlichen", 46.607700, 7.942400, "可由 Wengen 乘纜車前往的山上觀景及步道區"]
      ],
      restaurants: [
        ["Restaurant Bären Wengen", 46.605700, 7.922600, "Wengen 村內餐飲選項，適合村落散步中段或下山前用餐。", "https://www.google.com/maps/search/?api=1&query=Restaurant+B%C3%A4ren+Wengen"],
        ["Hotel Schönegg Wengen", 46.605300, 7.921600, "Wengen 村內具山景的餐飲選項；熱門時段先查看訂位。", "https://www.google.com/maps/search/?api=1&query=Hotel+Sch%C3%B6negg+Wengen+restaurant"],
        ["Restaurant Weidstübli", 46.594900, 7.908000, "Lauterbrunnen Valley 內的餐飲選項，可安排在瀑布及山谷步行後。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Weidst%C3%BCbli+Lauterbrunnen"],
        ["Hotel Oberland Lauterbrunnen", 46.593800, 7.907500, "Lauterbrunnen 村內方便的餐飲選項，適合等待轉乘或回程用餐。", "https://www.google.com/maps/search/?api=1&query=Hotel+Oberland+Lauterbrunnen+restaurant"]
      ]
    },
    activity: "搭 mountain railway 上 Wengen，安排村內短步道及山景 terrace。",
    activityOptions: [
      ["Wengen village walk", "在無車村落內慢走，觀察木屋、山景、教堂及山坡 terrace；最適合作為主活動。", "低", "https://www.google.com/maps/search/?api=1&query=Wengen+Switzerland"],
      ["Männlichen cable car", "由 Wengen 上 Männlichen 看 Eiger、Mönch、Jungfrau；按雲量決定是否加入。", "低至中等", "https://www.google.com/maps/search/?api=1&query=M%C3%A4nnlichen+cable+car+Wengen"],
      ["Lauterbrunnen Valley walk", "由村內看 Staubbach Falls、岩壁與山谷，步行距離可按體力縮短。", "中等", "https://www.google.com/maps/search/?api=1&query=Lauterbrunnen+Valley"],
      ["Wengen–Männlichen short hike", "天氣及步道狀況良好時，可安排短段山脊步行；不必追求完整長線。", "中等", "https://www.google.com/maps/search/?api=1&query=Wengen+M%C3%A4nnlichen+hiking"]
    ],
    schedule: [
      ["07:00–09:30", "由 Bern 前往 Lauterbrunnen，再轉 mountain railway 上 Wengen。"],
      ["09:30–12:30", "Wengen 村內慢走、木屋街景、觀景點及 café。"],
      ["12:30–14:00", "Wengen 午餐；視能見度決定是否走短步道。"],
      ["14:00–16:00", "下山回 Lauterbrunnen，補看瀑布與山谷。"],
      ["16:00–19:00", "預留轉乘緩衝，返回 Bern。"]
    ],
    highlights: ["Wengen village", "Staubbach Falls", "無車村落", "山谷木屋景觀"],
    highlightDetails: [
      ["Wengen village", "位於山坡上的無車村落，木屋、山景 terrace 及慢步調是主要特色；適合留半天慢慢看。", "村落、木屋、咖啡", "https://www.google.com/maps/search/?api=1&query=Wengen+Switzerland"],
      ["Lauterbrunnen Valley", "巨大岩壁與多條瀑布包圍的山谷，適合與 Wengen 組成一日的高低景觀對比。", "山谷、瀑布、散步", "https://www.google.com/maps/search/?api=1&query=Lauterbrunnen+Valley"],
      ["Staubbach Falls", "由 Lauterbrunnen 村內即可看到的代表性瀑布，適合抵達或離開前安排短停。", "瀑布、攝影、短步行", "https://www.google.com/maps/search/?api=1&query=Staubbach+Falls"],
      ["Männlichen", "Wengen 上方的山景及步道區，能見度良好時可看 Eiger、Mönch、Jungfrau 方向。", "纜車、觀景、短步道", "https://www.google.com/maps/search/?api=1&query=M%C3%A4nnlichen+Switzerland"],
      ["Wengen–Lauterbrunnen contrast", "同一天由瀑布谷地上升到無車山村，是這個方案相較其他村落選項最鮮明的差異。", "高低景觀、公共交通、村落", "https://www.google.com/maps/search/?api=1&query=Wengen+Lauterbrunnen"]
    ],
    booking: "一般交通按 SBB timetable；出發前查看山區鐵路、纜車及步道狀況。",
    backup: "視野完全被雲霧遮蔽時，改選 Thun、Lucerne 或 Fribourg + Gruyères。"
  },
  "muerren-gimmelwald": {
    category: "Storybook villages／高山無車村落",
    title: "Mürren + Gimmelwald",
    summary: "更安靜、更高海拔的無車山村；交通轉乘較多，但視野好時非常有童話感。",
    intensity: "中等至偏高",
    weather: "非常高",
    route: "Bern → Interlaken Ost → Lauterbrunnen → Mürren → Gimmelwald → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Lauterbrunnen → Mürren",
      localLabel: "Mürren → Gimmelwald／Schilthorn 山區活動",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Lauterbrunnen 的轉乘站"],
        ["Lauterbrunnen", 46.593600, 7.909000, "轉乘 Grütschalp／Stechelberg 路線"]
      ],
      points: [
        ["Lauterbrunnen", 46.593600, 7.909000, "山谷村落及 Mürren 轉乘起點"],
        ["Grütschalp", 46.613500, 7.895000, "前往 Mürren 的纜車及山地鐵路轉接點"],
        ["Mürren", 46.559600, 7.892600, "高山無車村落、木屋及 Eiger Mönch Jungfrau 景觀"],
        ["Gimmelwald", 46.548300, 7.866900, "更安靜的高山村落及農牧景觀"],
        ["Schilthorn / Piz Gloria", 46.557500, 7.835700, "高山觀景、007 Bond World 及旋轉餐廳"],
        ["Flower Trail", 46.562500, 7.895000, "Mürren／Allmendhubel 一帶的夏季花卉步道"]
      ],
      restaurants: [
        ["Hotel Edelweiss Mürren", 46.559300, 7.892300, "Mürren 村內具山景的餐飲選項，適合村落散步後用餐。", "https://www.google.com/maps/search/?api=1&query=Hotel+Edelweiss+M%C3%BCrren+restaurant"],
        ["Stägerstübli Mürren", 46.559700, 7.892000, "Mürren 村內的傳統餐飲選項；熱門時段先確認營業及訂位。", "https://www.google.com/maps/search/?api=1&query=St%C3%A4gerst%C3%BCbli+M%C3%BCrren"],
        ["Piz Gloria", 46.557500, 7.835700, "Schilthorn 山頂旋轉餐廳，適合把觀景與午餐結合。", "https://www.google.com/maps/search/?api=1&query=Piz+Gloria+Schilthorn"],
        ["Restaurant Gimmelwald", 46.548300, 7.866900, "Gimmelwald 村內簡單餐飲選項，營運時間需按當日確認。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Gimmelwald"]
      ]
    },
    activity: "纜車、村落散步及短步道；不再加入 Jungfraujoch。",
    activityOptions: [
      ["Mürren village walk", "無車高山村落慢走，觀察木屋、農牧景觀及 Eiger、Mönch、Jungfrau 山景。", "低", "https://www.google.com/maps/search/?api=1&query=M%C3%BCrren+Switzerland"],
      ["Gimmelwald village", "比 Mürren 更安靜的村落選擇，適合慢步、拍攝木屋及感受高山生活。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Gimmelwald+Switzerland"],
      ["Schilthorn / Piz Gloria", "乘纜車上 2970m 高山觀景，包含 007 Bond World；天氣好時景觀非常壯觀。", "中等", "https://www.google.com/maps/search/?api=1&query=Schilthorn+Piz+Gloria"],
      ["Flower Trail", "由 Allmendhubel 方向走回 Mürren 的夏季花卉步道，適合 8 月安排的低至中強度活動。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Flower+Trail+M%C3%BCrren"]
    ],
    schedule: [
      ["06:45–09:45", "由 Bern 出發，經 Lauterbrunnen 轉乘上 Mürren。"],
      ["09:45–12:30", "Mürren 村內散步、木屋及山景觀察。"],
      ["12:30–14:00", "村內午餐，按雲量及體力決定是否前往 Gimmelwald。"],
      ["14:00–16:00", "Gimmelwald 短線及高山村落體驗。"],
      ["16:00–19:30", "按末班纜車及鐵路時間下山返回 Bern。"]
    ],
    highlights: ["Mürren", "Gimmelwald", "無車山村", "高山木屋與 Alps"],
    highlightDetails: [
      ["Mürren village", "高山無車村落，木屋、花朵、山景 terrace 及安靜氛圍是主要特色。", "村落、木屋、Alps 景觀", "https://www.google.com/maps/search/?api=1&query=M%C3%BCrren+Switzerland"],
      ["Gimmelwald", "比 Mürren 更小、更安靜的村落，適合觀察農牧生活及山坡木屋。", "童話村落、農牧、散步", "https://www.google.com/maps/search/?api=1&query=Gimmelwald+Switzerland"],
      ["Schilthorn / Piz Gloria", "高海拔觀景點及 007 相關展示；景觀很依賴雲量與纜車營運。", "高山、觀景、007", "https://www.google.com/maps/search/?api=1&query=Schilthorn+Piz+Gloria"],
      ["Flower Trail", "夏季花卉與 Jungfrau panorama 結合的短步道，8 月通常比冬季更適合安排。", "花卉、短步道、攝影", "https://www.google.com/maps/search/?api=1&query=Flower+Trail+M%C3%BCrren"],
      ["Grütschalp", "由 Lauterbrunnen 上山後的轉乘及觀景位置，能把纜車、山地鐵路與高山村落串起來。", "交通、山景、轉乘", "https://www.google.com/maps/search/?api=1&query=Gr%C3%BCtschalp+Switzerland"]
    ],
    booking: "確認 mountain railway／cable car 運行及末班時間；不要只依靠手機地圖估算。",
    backup: "雲霧、風勢或纜車停駛時，改選 Lausanne 或 Lucerne。"
  },
  "grindelwald-first": {
    category: "Alpine／高山與戶外景觀",
    title: "Grindelwald First",
    summary: "纜車上山、山景及短步道；適合想要高山景色但不一定要登頂的人。",
    intensity: "中等至偏高",
    weather: "高",
    route: "Bern → Interlaken Ost → Grindelwald → First → Grindelwald → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Grindelwald",
      localLabel: "Grindelwald → First",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Grindelwald 的轉乘站"],
        ["Grindelwald", 46.624400, 8.041000, "抵達後轉 Firstbahn"]
      ],
      points: [
        ["Grindelwald", 46.624400, 8.041000, "村落、火車站及 Firstbahn 轉乘起點"],
        ["First", 46.659000, 8.057000, "Firstbahn 山上終點、First Cliff Walk 及觀景平台"],
        ["Bachalpsee", 46.683500, 8.000800, "高山湖泊步道終點，需由 First 徒步前往"],
        ["Schreckfeld", 46.651700, 8.062000, "Flyer／Glider 及 Mountain Cart 活動位置"],
        ["Bort", 46.642800, 8.044500, "Mountain Cart／Trottibike 下山活動位置"],
        ["Pfingstegg Rodelbahn", 46.611500, 8.055500, "Grindelwald 另一側的滑道替代方案"]
      ],
      restaurants: [
        ["Berggasthaus First", 46.659000, 8.057000, "First 山上用餐點；適合安排在山上活動中段，先確認當日營運。", "https://www.google.com/maps/search/?api=1&query=Berggasthaus+First+Switzerland"],
        ["Bergrestaurant Bort", 46.642800, 8.044500, "Bort 站附近的山景餐飲，可搭配 Mountain Cart 或 Trottibike。", "https://www.google.com/maps/search/?api=1&query=Bergrestaurant+Bort+Grindelwald"],
        ["Berggasthaus Pfingstegg", 46.611500, 8.055500, "Pfingstegg 滑道附近的山上餐飲，適合選擇 Pfingstegg 半日方案。", "https://www.google.com/maps/search/?api=1&query=Berggasthaus+Pfingstegg"],
        ["Restaurant Schmitte", 46.624000, 8.041500, "Grindelwald village 內的餐飲選項，適合下山後用餐。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Schmitte+Grindelwald"],
        ["Barry's Restaurant", 46.624700, 8.041800, "Grindelwald 村內較方便的晚餐選項；熱門時段建議先查訂位。", "https://www.google.com/maps/search/?api=1&query=Barry%27s+Restaurant+Grindelwald"]
      ]
    },
    activity: "First Cliff Walk、Bachalpsee、Flyer／Glider、Mountain Cart、Trottibike 等，可按體力及刺激程度選擇。",
    activityOptions: [
      ["First Cliff Walk + View Platform", "最輕量的山上活動。沿懸崖步道及觀景平台欣賞 Alps；恐高者可只走安全的觀景段。", "低至中等", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/"],
      ["Bachalpsee", "經典高山湖泊步道，往返約 2 小時，需預留體力及天氣緩衝；適合把徒步當作當日主活動。", "中等", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/lake-bachalpsee/"],
      ["Flyer / Glider", "由 First 方向向 Schreckfeld 滑行的高空活動，刺激度較高，需按官方年齡、身高、體重及天氣要求預約。", "中等至偏高", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"],
      ["Mountain Cart", "由 Schreckfeld 下到 Bort 的山地卡丁車；速度及路面顛簸感較明顯，需穿包覆性鞋履。", "中等", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-mountain-cart/"],
      ["Trottibike", "由 Bort 騎至 Grindelwald 的下山活動，可自行控制速度；適合不想走長步道但仍想戶外活動的人。", "中等", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/trottibike-scooter/"],
      ["Pfingstegg Rodelbahn（替代）", "位於 Grindelwald 另一側的滑道，不建議與 First 山上活動同日全部安排；可作為改選項或另一個半日主題。", "中等", "https://www.pfingstegg.ch/index.php/en/activities/toboggan"]
    ],
    schedule: [
      ["07:00–09:30", "由 Bern 經 Interlaken Ost 前往 Grindelwald。"],
      ["09:30–10:30", "前往 First，先確認纜車及山上天氣。"],
      ["10:30–13:00", "First Cliff Walk 或短步道；體力許可再選 Bachalpsee。"],
      ["13:00–14:30", "山上或 Grindelwald 午餐。"],
      ["14:30–16:30", "下山後在 Grindelwald village 慢走及休息。"],
      ["16:30–19:30", "返回 Bern，預留轉乘緩衝。"]
    ],
    highlights: ["First Cliff Walk", "Bachalpsee", "Grindelwald village", "Alps panorama"],
    highlightDetails: [
      ["First Cliff Walk", "沿 First 山站岩壁前進的懸崖步道，連接觀景平台；恐高者可按狀況只走較舒適的觀景段。", "懸崖步道、觀景、攝影", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/"],
      ["Bachalpsee", "由 First 出發的經典高山湖泊步道，約需近兩小時往返，適合把它當作當日主要徒步活動。", "高山湖泊、徒步、倒影", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/lake-bachalpsee/"],
      ["First View", "位於山站附近的觀景平台，可快速取得 Alps 全景，不需要安排長距離徒步。", "觀景平台、山景", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"],
      ["Schreckfeld + Bort", "Flyer、Glider、Mountain Cart 及 Trottibike 的活動轉接位置，適合按刺激程度選一項。", "戶外活動、纜車、下山", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"],
      ["Grindelwald village", "First 下山後的木屋、牧場、咖啡及山谷景觀，適合放慢節奏及安排晚餐。", "童話村落、咖啡、散步", "https://www.google.com/maps/search/?api=1&query=Grindelwald+village"]
    ],
    booking: "纜車及活動先查看官方營運；晴天旺季預留排隊時間。",
    backup: "First 被雲層遮蔽時，改成 Grindelwald village 或 Lucerne，不要勉強上山。"
  },
  "grindelwald-village": {
    category: "Storybook villages／童話村落",
    title: "Grindelwald village",
    summary: "專注感受木屋、山谷、牧場與村落生活，不把高空活動當成必做。",
    intensity: "中等",
    weather: "高",
    route: "Bern → Interlaken Ost → Grindelwald village → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Grindelwald",
      localLabel: "Grindelwald village 及 Firstbahn／Pfingstegg 周邊",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Grindelwald 的轉乘站"],
        ["Grindelwald", 46.624400, 8.041000, "村落、火車站及 Firstbahn 起點"]
      ],
      points: [
        ["Grindelwald village", 46.624400, 8.041000, "木屋、牧場、咖啡及山谷觀景"],
        ["Grindelwald station", 46.624400, 8.041000, "抵達村落及前往 First 的交通節點"],
        ["Firstbahn", 46.624700, 8.041700, "前往 First 的纜車起點"],
        ["Pfingstegg", 46.611500, 8.055500, "滑道、山景及低強度戶外活動"],
        ["Gletscherschlucht", 46.618500, 8.052000, "冰川峽谷及木棧道體驗"]
      ],
      restaurants: [
        ["Restaurant Schmitte", 46.624000, 8.041500, "Grindelwald village 內的餐飲選項，適合村落慢遊中段。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Schmitte+Grindelwald"],
        ["Barry's Restaurant", 46.624700, 8.041800, "村中心較方便的晚餐選項；熱門時段建議先查訂位。", "https://www.google.com/maps/search/?api=1&query=Barry%27s+Restaurant+Grindelwald"],
        ["Berggasthaus First", 46.659000, 8.057000, "若安排短版 First，可在山上餐廳用餐並欣賞景觀。", "https://www.google.com/maps/search/?api=1&query=Berggasthaus+First+Switzerland"],
        ["Berggasthaus Pfingstegg", 46.611500, 8.055500, "Pfingstegg 活動附近的山上餐飲選項。", "https://www.google.com/maps/search/?api=1&query=Berggasthaus+Pfingstegg"]
      ]
    },
    activity: "café、村落短步道；想加 First 時只選短版纜車活動。",
    activityOptions: [
      ["Grindelwald village walk", "以村中心、木屋街景、牧場、商店及山谷觀景為主，保留咖啡及午餐時間。", "低", "https://www.google.com/maps/search/?api=1&query=Grindelwald+village"],
      ["First short version", "只安排 First Cliff Walk 或 First View，不再加入 Bachalpsee 及下山活動，維持村落慢遊節奏。", "中等", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"],
      ["Pfingstegg Rodelbahn", "由村內前往 Pfingstegg，安排滑道或山景短停；適合作為半日活動。", "中等", "https://www.pfingstegg.ch/index.php/en/activities/toboggan"],
      ["Gletscherschlucht", "冰川峽谷、吊橋及木棧道，適合天氣普通但不想搭高山纜車的戶外選項。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Gletscherschlucht+Grindelwald"]
    ],
    schedule: [
      ["08:00–10:30", "由 Bern 前往 Grindelwald。"],
      ["10:30–12:30", "村中心、木屋街景、山谷觀景點及 local shops。"],
      ["12:30–14:00", "村內午餐或 café，保持慢節奏。"],
      ["14:00–16:30", "選一段短步道，或視天氣加 First 的短版體驗。"],
      ["16:30–19:30", "返回 Bern。"]
    ],
    highlights: ["Grindelwald village", "木屋與牧場", "山谷景觀", "café slow time"],
    highlightDetails: [
      ["Grindelwald village", "以木屋、牧場、山谷及咖啡為主的 Alpine village，適合放慢節奏而不是追逐所有山上活動。", "村落、木屋、咖啡", "https://www.google.com/maps/search/?api=1&query=Grindelwald+village"],
      ["Firstbahn", "村中心即可前往 First 的纜車起點，方便把短版山上活動加入半天行程。", "纜車、交通、山景", "https://www.google.com/maps/search/?api=1&query=Firstbahn+Grindelwald"],
      ["Pfingstegg", "比 First 更適合做半日替代的山坡活動區，可安排滑道、餐飲及山景。", "滑道、山景、半日活動", "https://www.google.com/maps/search/?api=1&query=Pfingstegg+Grindelwald"],
      ["Gletscherschlucht", "由冰川侵蝕形成的峽谷及木棧道，提供與村落及高山景觀不同的自然體驗。", "峽谷、木棧道、自然", "https://www.google.com/maps/search/?api=1&query=Gletscherschlucht+Grindelwald"],
      ["Grindelwald valley panorama", "村落本身的價值在於從日常尺度看山谷、牧場與木屋，不必把所有時間放在高空活動。", "山谷、牧場、攝影", "https://www.google.com/maps/search/?api=1&query=Grindelwald+Switzerland"]
    ],
    booking: "單純村落散步不需預約；纜車及餐廳按需要確認。",
    backup: "天氣不佳時改選 Fribourg + Gruyères 或 Bern slow day。"
  },
  jungfraujoch: {
    category: "Alpine／高山鐵路",
    title: "Jungfraujoch",
    summary: "高山鐵路與冰雪景觀的經典體驗，但時間長、費用高，需選最晴的一天。",
    intensity: "中等",
    weather: "非常高",
    route: "Bern → Interlaken Ost → Grindelwald Terminal／Lauterbrunnen → Jungfraujoch → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Grindelwald Terminal",
      localLabel: "Grindelwald Terminal → Jungfraujoch",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "前往 Jungfrau Region 的轉乘站"],
        ["Grindelwald Terminal", 46.624500, 8.023500, "Eiger Express 及 Jungfrau Railway 轉乘方向"]
      ],
      points: [
        ["Grindelwald Terminal", 46.624500, 8.023500, "前往 Jungfraujoch 的山區交通起點之一"],
        ["Jungfraujoch", 46.547500, 7.985500, "Top of Europe；高山鐵路終點"],
        ["Sphinx Observatory", 46.547500, 7.985500, "高山觀景平台，可遠眺冰川及 Alps"],
        ["Ice Palace", 46.547100, 7.985000, "冰川內的冰雕及冰洞體驗"],
        ["Alpine Sensation", 46.547300, 7.985200, "連接車站與 Sphinx 的聲光及歷史展示"],
        ["Jungfrau Plateau", 46.546800, 7.986300, "戶外高山景觀區，按安全狀況停留"],
        ["360° Cinema", 46.547300, 7.985200, "天氣不佳時仍可進行的高山全景影片體驗"],
        ["Lindt Swiss Chocolate Heaven", 46.547300, 7.985200, "山頂巧克力及紀念品商店"]
      ],
      restaurants: [
        ["Restaurant Crystal", 46.547500, 7.985500, "Jungfraujoch 山頂餐飲選項；適合在室內休息及補充熱量。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Crystal+Jungfraujoch"],
        ["Bollywood Restaurant", 46.547300, 7.985200, "Jungfraujoch 內的印度料理選項，可作高山行程中的熱食備案。", "https://www.google.com/maps/search/?api=1&query=Bollywood+Restaurant+Jungfraujoch"],
        ["Café at Jungfraujoch", 46.547500, 7.985500, "適合咖啡、熱飲及短暫休息；實際開放區域以當日營運為準。", "https://www.google.com/maps/search/?api=1&query=Jungfraujoch+cafe"]
      ]
    },
    activity: "高山鐵路、Sphinx、Ice Palace、Alpine Sensation、360° Cinema 及 Lindt Swiss Chocolate Heaven，可支撐完整一日但要安排休息。",
    activityOptions: [
      ["Sphinx Observatory", "Jungfraujoch 的主要觀景平台，重點是冰川、山峰與高山鐵路視角；能見度是體驗關鍵。", "低", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/sphinx-observation-deck/"],
      ["Ice Palace", "位於冰川內的冰雕與冰洞空間，適合雲霧天作為室內重點，但地面可能濕滑。", "低", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/ice-palace/"],
      ["Alpine Sensation", "以聲光及歷史展示串連車站與觀景區，適合作為短時間的文化內容。", "低", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/alpine-sensation/"],
      ["Jungfrau Plateau", "戶外高山景觀區；按風勢、積雪、護欄及官方安全指示停留，不要自行離開安全範圍。", "低至中等", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/"],
      ["360° Cinema", "室內全景影片體驗，適合雲霧或寒風時穿插，讓身體在室內恢復。", "低", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/"],
      ["Lindt Swiss Chocolate Heaven", "高山上的巧克力及紀念品商店，可作短暫停留，不必為購物額外安排長時間。", "低", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/"]
    ],
    schedule: [
      ["06:30–09:30", "由 Bern 出發，按車票路線轉乘至 Jungfraujoch；不要壓縮轉乘緩衝。"],
      ["09:30–11:30", "抵達後先適應高度，再安排 Sphinx Observatory、Jungfrau Plateau 及主要戶外觀景。"],
      ["11:30–13:00", "Ice Palace、Alpine Sensation 及 Discovery Tour；寒冷或不適時以室內活動為主。"],
      ["13:00–14:00", "山頂餐廳午餐及休息，留意高海拔反應並補充水分。"],
      ["14:00–16:00", "按能見度再次觀景，或安排 360° Cinema、Lindt Swiss Chocolate Heaven 及室內休息。"],
      ["16:00–17:00", "預留下山前緩衝，確認列車及 seat reservation；不再加入其他山區景點。"],
      ["17:00–20:30", "下山返回 Bern；不要安排晚間預約。"]
    ],
    highlights: ["Jungfraujoch", "Sphinx", "Ice Palace", "高山鐵路"],
    highlightDetails: [
      ["Sphinx Observatory", "乘高速電梯到觀景台，欣賞 Aletsch Glacier、四千米山峰及高山鐵路視角；能見度是核心。", "觀景、冰川、Alps", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/sphinx-observation-deck/"],
      ["Ice Palace", "位於冰川內的冰洞及冰雕空間，適合雲霧或寒風時安排，地面可能濕滑。", "冰洞、室內、冰雕", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/ice-palace/"],
      ["Alpine Sensation", "以聲光及歷史展示介紹 Jungfrau Railway 的開發歷史，適合作為室內文化段落。", "歷史、聲光展示、室內", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/alpine-sensation/"],
      ["Jungfrau Plateau", "戶外高山景觀區，可感受雪地、冰川及高山風勢；只在安全範圍及官方指示內活動。", "高山景觀、雪地、攝影", "https://www.google.com/maps/search/?api=1&query=Jungfrau+Plateau"],
      ["360° Cinema + Lindt Swiss Chocolate Heaven", "天氣不好時仍可安排的室內內容，包含全景影片、巧克力及紀念品短停。", "室內、全景影片、購物", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/"]
    ],
    booking: "出發前確認官方票價、時段、山頂天氣、行李限制及營運狀況；官方目前標示 2026 年 5 月 1 日至 10 月 31 日 Jungfrau Railway 需付費 seat reservation，請以官方售票頁為準。",
    backup: "若山頂雲量遮蔽或風雪影響運行，改選 Lucerne 或 Lausanne，通常更有性價比。"
  },
  lucerne: {
    category: "Lake／湖區與城市文化",
    title: "Lucerne",
    summary: "湖畔城市、Kapellbrücke、Old Town；不想承受山區天氣風險時的文化替代。",
    intensity: "低至中等",
    weather: "中",
    route: "Bern → Lucerne Bahnhof → Old Town → Lake Lucerne → Bern",
    cityWalkDetails: {
      title: "Option A｜Lucerne City Walk：湖畔入口與 Old Town",
      route: "Lucerne Bahnhof → Chapel Bridge → Jesuit Church → Weinmarkt → Museggmauer（視體力）→ Lion Monument → Lake Lucerne",
      description: "Lucerne 的城市特色在於湖、Reuss 河、木橋、教堂、壁畫廣場及山景同時交會。建議先走城市核心，再把船程或 Swiss Museum of Transport 放到下午，不要用交通活動取代 Old Town。",
      stops: [
        ["Lucerne Bahnhof", "從交通樞紐及湖畔入口開始，先建立城市與湖的方向感。"],
        ["Chapel Bridge", "木橋、水塔及 Reuss 河是 Lucerne 的代表性城市景觀，適合早上先走。"],
        ["Jesuit Church", "河畔巴洛克教堂，展示 Lucerne 的宗教、建築及河流城市性格。"],
        ["Weinmarkt", "Old Town 廣場、壁畫建築及小巷，適合觀察城市生活與歷史層次。"],
        ["Lion Monument", "由 Old Town 延伸至歷史紀念碑，了解 Lucerne 的另一面向。"],
        ["Lake Lucerne lakeside", "以湖景、船隻及遠山收尾，再決定是否加入短程湖船。"]
      ]
    },
    mountainLakeRoute: {
      title: "Option B｜Lucerne：市區 → 山 → 湖 → 市區",
      route: "Lucerne → Pilatus／Rigi → Lake Lucerne → Lucerne",
      description: "這是 Lucerne 很適合的一條主題路線。兩個山區版本不要同日混用：Pilatus 偏壯觀及交通體驗，Rigi 偏慢遊及湖景。以下先以 Pilatus 的「市區 → 山 → 湖 → 市區」順序示範。",
      schedule: [
        ["08:00–09:00", "由 Lucerne 市區前往 Kriens／Pilatus 山區起點。"],
        ["09:00–12:00", "乘纜車上 Pilatus，安排山頂觀景及短步道。"],
        ["12:00–14:00", "下山至 Alpnachstad，再銜接 Lake Lucerne 船程。"],
        ["14:00–16:00", "湖上返回 Lucerne，欣賞湖岸及山景。"],
        ["16:00–18:00", "回到 Lucerne 市區，補充咖啡、晚餐或短版 Old Town。"]
      ],
      alternatives: [
        ["Pilatus", "山勢壯觀、交通組合豐富；適合想把山景與船程串成一個完整活動日。", "https://www.google.com/maps/search/?api=1&query=Mount+Pilatus"],
        ["Rigi", "由 Vitznau／Weggis 上山，節奏較慢、湖景較多；適合不想安排太高強度的一天。", "https://www.google.com/maps/search/?api=1&query=Mount+Rigi"]
      ]
    },
    map: {
      transitLabel: "Bern → Lucerne Bahnhof",
      localLabel: "Lucerne Old Town → Lake Lucerne 湖畔",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Lucerne Bahnhof", 47.050200, 8.310000, "城市、湖船及博物館交通起點"]
      ],
      points: [
        ["Lucerne Bahnhof", 47.050200, 8.310000, "抵達、湖船及 City Walk 起點"],
        ["Chapel Bridge", 47.052000, 8.305000, "Lucerne 最具代表性的木橋及水塔"],
        ["Jesuit Church", 47.051000, 8.304000, "湖畔巴洛克教堂"],
        ["Lucerne Old Town", 47.052000, 8.306000, "廣場、壁畫建築、商店及餐飲"],
        ["Lion Monument", 47.058000, 8.310000, "歷史紀念碑及城市文化景點"],
        ["Swiss Museum of Transport", 47.052000, 8.336000, "交通、航空及科技主題博物館"],
        ["Lake Lucerne pier", 47.052000, 8.305500, "Lake Lucerne 船程起點"],
        ["Pilatus", 46.979000, 8.254000, "市區→山→湖路線的山區版本之一"],
        ["Alpnachstad", 46.953000, 8.278000, "Pilatus 下山及 Lake Lucerne 船程銜接點"],
        ["Rigi", 47.056000, 8.485000, "較慢節奏的另一個山區版本"]
      ],
      restaurants: [
        ["Rathaus Brauerei", 47.051800, 8.305800, "Old Town 及河邊的啤酒餐廳，適合午餐或早晚餐。", "https://www.google.com/maps/search/?api=1&query=Rathaus+Brauerei+Lucerne"],
        ["Wirtshaus Galliker", 47.050800, 8.304700, "Lucerne 傳統餐飲選項，適合想吃 Swiss dishes 的一餐。", "https://www.google.com/maps/search/?api=1&query=Wirtshaus+Galliker+Lucerne"],
        ["Restaurant Schiff", 47.052000, 8.305500, "靠近湖邊及船碼頭的餐飲選項，方便配合船班。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Schiff+Lucerne"],
        ["Old Swiss House", 47.057000, 8.311000, "靠近 Lion Monument 的傳統餐飲選項；熱門時段先查訂位。", "https://www.google.com/maps/search/?api=1&query=Old+Swiss+House+Lucerne"]
      ]
    },
    activity: "Lake Lucerne boat cruise、Swiss Museum of Transport，二選一即可。",
    activityOptions: [
      ["Lucerne Old Town City Walk", "由 Bahnhof、Chapel Bridge、Jesuit Church、Old Town 到 Lion Monument，適合第一次到 Lucerne。", "低", "https://www.google.com/maps/search/?api=1&query=Lucerne+Old+Town"],
      ["Lake Lucerne boat cruise", "選短程湖船感受湖景及山景，不必為完整船程犧牲 Old Town 時間。", "低", "https://www.google.com/maps/search/?api=1&query=Lake+Lucerne+boat+cruise"],
      ["Swiss Museum of Transport", "雨天或喜歡交通、工程及互動展覽時的完整室內活動；需預留至少半天。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Swiss+Museum+of+Transport"],
      ["Lakefront + Lido slow walk", "沿湖邊散步、咖啡及短暫休息，適合作為船程前後的低強度安排。", "低", "https://www.google.com/maps/search/?api=1&query=Lake+Lucerne+Lucerne"]
    ],
    schedule: [
      ["08:00–09:30", "由 Bern 前往 Lucerne。"],
      ["09:30–12:30", "Kapellbrücke、Jesuit Church、Old Town 及湖畔。"],
      ["12:30–14:00", "Old Town 午餐。"],
      ["14:00–16:30", "短程 Lake Lucerne boat cruise 或 Swiss Museum of Transport。"],
      ["16:30–19:00", "湖邊咖啡及返回 Bern。"]
    ],
    highlights: ["Kapellbrücke", "Lucerne Old Town", "Jesuit Church", "Lake Lucerne"],
    highlightDetails: [
      ["Chapel Bridge", "木橋、水塔及河景構成 Lucerne 的城市標誌，適合早上先走，避開最擁擠時段。", "木橋、攝影、城市地標", "https://www.google.com/maps/search/?api=1&query=Chapel+Bridge+Lucerne"],
      ["Lucerne Old Town", "廣場、壁畫建築、商店及餐飲集中，適合不趕時間的城市散步。", "老城、壁畫、餐飲", "https://www.google.com/maps/search/?api=1&query=Lucerne+Old+Town"],
      ["Jesuit Church", "位於 Reuss 河畔的巴洛克教堂，可與 Chapel Bridge 及 Old Town 串成短路線。", "教堂、建築、歷史", "https://www.google.com/maps/search/?api=1&query=Jesuit+Church+Lucerne"],
      ["Lion Monument", "Lucerne 重要歷史紀念碑，適合與 Old Town 一起安排，而不是獨立拉長交通。", "歷史、紀念碑、文化", "https://www.google.com/maps/search/?api=1&query=Lion+Monument+Lucerne"],
      ["Lake Lucerne", "湖畔、船程及遠山景觀提供城市日的自然段落，天氣普通時仍可短走。", "湖景、船程、散步", "https://www.google.com/maps/search/?api=1&query=Lake+Lucerne"]
    ],
    booking: "船程及博物館按興趣購票；Old Town 步行不需預約。",
    backup: "大雨時保留 Old Town、教堂及博物館，取消船程。"
  },
  lausanne: {
    category: "City／文化與 Lake Geneva",
    title: "Lausanne",
    summary: "Lake Geneva、Olympic Museum、Old Town 及 Cathedral；城市文化取向的一日遊。",
    intensity: "中等",
    weather: "低至中",
    route: "Bern → Lausanne → Old Town／Ouchy → Bern",
    cityWalkDetails: {
      title: "Lausanne City Walk：Old Town 到 Lake Geneva",
      route: "Lausanne Bahnhof → Lausanne Cathedral → Escaliers du Marché → Place de la Palud → Old Town → Ouchy",
      description: "Lausanne 的特色在於陡坡、Cathedral、Old Town、metro 及 Lake Geneva 的高低差。建議由高處 Old Town 開始，再向 Ouchy 湖畔下降，避免反覆上坡。",
      stops: [
        ["Lausanne Bahnhof", "由車站利用 metro 及步行開始城市路線，先處理城市高低差。"],
        ["Lausanne Cathedral", "Lausanne 最重要的宗教及城市地標，位於 Old Town 高處。"],
        ["Escaliers du Marché", "連接 Cathedral 與 Place de la Palud 的歷史木梯，呈現城市坡度特色。"],
        ["Place de la Palud", "Old Town 的城市廣場、噴泉、商店及咖啡集中處。"],
        ["Olympic Museum", "Ouchy 方向的文化活動，可作城市步行後的室內主題。"],
        ["Ouchy／Lake Geneva", "由城市高處下降到湖畔，以 Lake Geneva、碼頭及湖邊散步收尾。"]
      ]
    },
    map: {
      transitLabel: "Bern → Lausanne",
      localLabel: "Lausanne Old Town → Ouchy／Lake Geneva",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Lausanne Bahnhof", 46.516800, 6.629100, "城市及 metro 交通起點"]
      ],
      points: [
        ["Lausanne Bahnhof", 46.516800, 6.629100, "抵達及 metro 轉移起點"],
        ["Lausanne Cathedral", 46.522000, 6.635500, "Old Town 高處的哥德式大教堂"],
        ["Place de la Palud", 46.521000, 6.632500, "Old Town 廣場及城市生活"],
        ["Olympic Museum", 46.508800, 6.631400, "Olympic history 及互動展示"],
        ["Ouchy", 46.507500, 6.626000, "Lake Geneva 湖畔、碼頭及散步區"]
      ],
      restaurants: [
        ["Café de Grancy", 46.516000, 6.628000, "靠近 Lausanne Bahnhof 的餐飲選項，適合抵達後或回程前用餐。", "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+de+Grancy+Lausanne"],
        ["Café Romand", 46.521000, 6.632000, "Old Town 內的傳統餐飲選項，適合 City Walk 午餐。", "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Romand+Lausanne"],
        ["Pinte Besson", 46.522000, 6.633000, "Lausanne Old Town 內的傳統餐飲選項；先確認開放及訂位。", "https://www.google.com/maps/search/?api=1&query=Pinte+Besson+Lausanne"],
        ["Ouchy lakeside restaurants", 46.507500, 6.626000, "湖畔一帶的餐飲及咖啡選項，可配合 Ouchy 收尾。", "https://www.google.com/maps/search/?api=1&query=restaurants+Ouchy+Lausanne"]
      ]
    },
    activity: "Olympic Museum、Lake Geneva boat、Cathedral，按興趣選兩項。",
    activityOptions: [
      ["Lausanne Old Town City Walk", "由 Cathedral 經 Escaliers du Marché、Place de la Palud 下降到湖畔，最能理解 Lausanne 的城市性格。", "中等", "https://www.google.com/maps/search/?api=1&query=Lausanne+Old+Town"],
      ["Olympic Museum", "適合想加入室內文化、運動歷史及互動展示的一段活動。", "低", "https://www.google.com/maps/search/?api=1&query=Olympic+Museum+Lausanne"],
      ["Ouchy + Lake Geneva", "沿湖畔碼頭散步、咖啡或短程船，作為 Old Town 下坡後的慢遊收尾。", "低", "https://www.google.com/maps/search/?api=1&query=Ouchy+Lausanne"],
      ["Lavaux vineyard（延伸）", "若想把城市日改成湖景及葡萄園主題，可替代 Olympic Museum；不建議同日全部加入。", "中等", "https://www.google.com/maps/search/?api=1&query=Lavaux+Vineyards"]
    ],
    schedule: [
      ["08:00–09:30", "由 Bern 前往 Lausanne，利用 metro 處理高低差。"],
      ["09:30–12:30", "Lausanne Cathedral、Escaliers du Marché、Place de la Palud。"],
      ["12:30–14:00", "Old Town 午餐。"],
      ["14:00–16:30", "Olympic Museum 或 Ouchy 湖畔；時間足夠再選短程船。"],
      ["16:30–19:00", "返回 Lausanne station，再回 Bern。"]
    ],
    highlights: ["Lausanne Cathedral", "Old Town", "Ouchy", "Olympic Museum"],
    highlightDetails: [
      ["Lausanne Cathedral", "位於城市高處的哥德式大教堂，是 Lausanne Old Town 的核心地標。", "教堂、建築、城市觀景", "https://www.google.com/maps/search/?api=1&query=Lausanne+Cathedral"],
      ["Escaliers du Marché + Old Town", "木梯、斜坡、廣場及歷史建築共同形成 Lausanne 最有辨識度的城市步行體驗。", "老城、散步、城市結構", "https://www.google.com/maps/search/?api=1&query=Escaliers+du+March%C3%A9+Lausanne"],
      ["Olympic Museum", "以 Olympic history、運動文化及互動展示為主，適合雨天或想加入室內內容。", "博物館、運動文化、室內", "https://www.google.com/maps/search/?api=1&query=Olympic+Museum+Lausanne"],
      ["Ouchy", "Lausanne 高處城市走到 Lake Geneva 湖畔後的開闊收尾，適合咖啡及湖邊散步。", "湖畔、碼頭、散步", "https://www.google.com/maps/search/?api=1&query=Ouchy+Lausanne"],
      ["Lake Geneva", "湖景及葡萄園方向提供城市以外的自然段落，可按時間選 Ouchy 或 Lavaux。", "湖景、船程、葡萄園", "https://www.google.com/maps/search/?api=1&query=Lake+Geneva+Lausanne"]
    ],
    booking: "Olympic Museum 查開放時間；Lake Geneva boat 依季節船班。",
    backup: "下雨仍可保留 Cathedral、Olympic Museum、咖啡店及 Old Town。"
  },
  thun: {
    category: "Lake／湖區與慢遊",
    title: "Thun + Lake Thun",
    summary: "最輕鬆的湖區方案，城堡、Old Town、湖景及船程都可按體力調整。",
    intensity: "低",
    weather: "中",
    route: "Bern → Thun → Old Town／Lake Thun → Bern",
    cityWalkDetails: {
      title: "Thun City Walk：Aare 河、城堡與湖區",
      route: "Thun Bahnhof → Aare 河 → Thun Castle → Old Town → Obere Hauptgasse → Rathausplatz → 湖畔",
      description: "Thun 的特色不是大型景點密集，而是 Aare 河分流、城堡高地、Old Town、橋樑及 Lake Thun 共同形成的城市尺度。先完成 City Walk，再按時間及船班決定是否游湖。",
      stops: [
        ["Thun Bahnhof", "由交通樞紐進入城市，先沿 Aare 河方向走，感受 Thun 的水城結構。"],
        ["Aare River", "河流、橋樑及水道是 Thun 日常生活的一部分，適合慢走及拍攝倒影。"],
        ["Thun Castle", "城堡位於城市高處，可理解 Thun 的歷史防禦位置並取得城市視角。"],
        ["Obere Hauptgasse", "有拱頂街道及商店的 Old Town 主軸，適合觀察地方生活。"],
        ["Rathausplatz", "廣場及餐飲集中處，適合作為 City Walk 的午餐及休息點。"],
        ["Lake Thun lakeside", "最後延伸至湖邊，再決定短程船、Schloss Schadau 或返回車站。"]
      ]
    },
    map: {
      transitLabel: "Bern → Thun",
      localLabel: "Thun Old Town → Lake Thun 湖畔",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Thun station", 46.757000, 7.627000, "Thun City Walk 及湖區交通起點"]
      ],
      points: [
        ["Thun station", 46.757000, 7.627000, "抵達 Thun 及開始 City Walk 的交通節點"],
        ["Thun Castle", 46.758500, 7.628500, "城市高處的歷史城堡及觀景位置"],
        ["Old Town", 46.758000, 7.628000, "Aare 河分流、商店、拱橋及歷史街區"],
        ["Rathausplatz", 46.758500, 7.630000, "Old Town 的廣場及餐飲停留位置"],
        ["Schloss Schadau", 46.739500, 7.626500, "Lake Thun 湖畔城堡、公園及湖景"],
        ["Lake Thun boat pier", 46.756000, 7.629000, "Lake Thun 船程及湖區轉移起點"]
      ],
      restaurants: [
        ["Restaurant Schloss Schadau", 46.739500, 7.626500, "湖畔城堡內的餐飲選項，適合把午餐與湖景結合。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Schloss+Schadau+Thun"],
        ["Restaurant Freienhof", 46.757800, 7.629500, "Thun Old Town 及 Aare 附近的餐飲選項，適合 City Walk 中段。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Freienhof+Thun"],
        ["Rathaus Thun restaurants", 46.758500, 7.630000, "Rathausplatz 周邊多個餐飲選項，方便按當日菜單及座位選擇。", "https://www.google.com/maps/search/?api=1&query=restaurants+Rathausplatz+Thun"],
        ["Lake Thun boat café", 46.756000, 7.629000, "船程或湖畔附近的簡單咖啡及小食選項，先確認船班及營運。", "https://www.google.com/maps/search/?api=1&query=Lake+Thun+boat+pier+restaurant"]
      ]
    },
    activity: "Lake Thun boat cruise、Schloss Schadau、湖畔咖啡。",
    activityOptions: [
      ["Thun Old Town City Walk", "由車站、Aare 河、Thun Castle、Obere Hauptgasse 到 Rathausplatz，最適合慢慢了解城市。", "低", "https://www.google.com/maps/search/?api=1&query=Thun+Old+Town"],
      ["Lake Thun boat cruise", "按船班安排短程湖上活動，可選擇湖畔停靠點；不必追求完整湖程。", "低", "https://www.google.com/maps/search/?api=1&query=Lake+Thun+boat+cruise"],
      ["Schloss Schadau", "湖畔城堡與公園，適合午餐、散步及拍攝 Lake Thun；可作為下午慢遊重點。", "低", "https://www.google.com/maps/search/?api=1&query=Schloss+Schadau+Thun"],
      ["Thun Panorama", "雨天或想加入室內文化時，可查看 Thun Panorama 及附近博物館的開放時間。", "低", "https://www.google.com/maps/search/?api=1&query=Thun+Panorama"]
    ],
    schedule: [
      ["09:00–09:30", "由 Bern 短程火車前往 Thun。"],
      ["09:30–12:30", "Aare 河、Thun Castle、Old Town、Obere Hauptgasse。"],
      ["12:30–14:00", "Rathausplatz 或河邊午餐。"],
      ["14:00–16:30", "Lake Thun 短程船、Schloss Schadau 或湖畔散步。"],
      ["16:30–18:30", "回到 Thun station，返回 Bern。"]
    ],
    highlights: ["Thun Castle", "Old Town", "Aare River", "Lake Thun"],
    highlightDetails: [
      ["Thun Castle", "位於城市高處的歷史城堡，可從城內街道及河景理解 Thun 的地形與歷史。", "城堡、歷史、觀景", "https://www.google.com/maps/search/?api=1&query=Thun+Castle"],
      ["Thun Old Town", "以 Aare 河、水道、橋樑、商店及歷史街區組成，適合低強度 City Walk。", "老城、河流、散步", "https://www.google.com/maps/search/?api=1&query=Thun+Old+Town"],
      ["Schloss Schadau", "Lake Thun 湖畔城堡及公園，與 Old Town 風格不同，適合安排下午慢遊。", "湖畔、城堡、公園", "https://www.google.com/maps/search/?api=1&query=Schloss+Schadau+Thun"],
      ["Lake Thun", "湖景、船程及遠山是方案核心；能見度普通時仍可保留湖畔散步。", "湖景、船程、慢遊", "https://www.google.com/maps/search/?api=1&query=Lake+Thun"],
      ["Aare River", "Thun 城市生活與河流交會的景觀，適合沿河短走及拍攝城市倒影。", "河岸、橋樑、城市生活", "https://www.google.com/maps/search/?api=1&query=Aare+River+Thun"]
    ],
    booking: "Old Town 不需預約；船程及城堡按官方開放時間確認。",
    backup: "天氣不佳時延長 Old Town、城堡及咖啡時間，不必勉強坐船。"
  },
  iseltwald: {
    category: "Storybook villages／湖畔村落",
    title: "Iseltwald + Lake Brienz",
    summary: "湖畔小村、木屋與 turquoise Lake Brienz；湖水、山景與村落兼備。",
    intensity: "低至中等",
    weather: "中至高",
    route: "Bern → Interlaken Ost → Iseltwald → Interlaken → Bern",
    map: {
      transitLabel: "Bern → Interlaken Ost → Iseltwald",
      localLabel: "Iseltwald village 及 Lake Brienz 湖畔",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Interlaken Ost", 46.690500, 7.869500, "轉乘 Iseltwald 巴士或 Lake Brienz 船程"],
        ["Iseltwald", 46.710700, 7.728400, "湖畔村落及碼頭"]
      ],
      points: [
        ["Iseltwald", 46.710700, 7.728400, "Lake Brienz 湖畔村落、木屋及碼頭"],
        ["Iseltwald jetty", 46.710300, 7.727800, "湖上船程及拍攝湖景的碼頭位置"],
        ["Lake Brienz lakeside", 46.709800, 7.726500, "turquoise 湖水、山景及湖畔散步"],
        ["Giessbach Falls", 46.733300, 8.020800, "Lake Brienz 另一側的瀑布及森林景觀"],
        ["Interlaken Ost", 46.690500, 7.869500, "回程轉乘及補充餐飲的位置"]
      ],
      restaurants: [
        ["Restaurant Dorfpintli Iseltwald", 46.710600, 7.728300, "Iseltwald 村內的湖畔餐飲選項，適合午餐或咖啡。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Dorfpintli+Iseltwald"],
        ["Seerestaurant", 46.710200, 7.727500, "靠近 Lake Brienz 的餐飲選項；旺季先確認營業及座位。", "https://www.google.com/maps/search/?api=1&query=Seerestaurant+Iseltwald"],
        ["Giessbach Restaurant", 46.733300, 8.020800, "Giessbach Falls 附近的餐飲選項，適合將瀑布安排成半日延伸。", "https://www.google.com/maps/search/?api=1&query=Giessbach+Restaurant"],
        ["Restaurant Schiff", 46.691000, 7.869000, "Interlaken Ost 一帶的回程餐飲選項，適合等待轉乘或回 Bern 前用餐。", "https://www.google.com/maps/search/?api=1&query=Restaurant+Schiff+Interlaken"]
      ]
    },
    activity: "Lake Brienz boat cruise、湖畔散步及咖啡。",
    activityOptions: [
      ["Iseltwald village walk", "以村內木屋、碼頭、湖畔小路及咖啡為主，適合慢節奏及低強度一日遊。", "低", "https://www.google.com/maps/search/?api=1&query=Iseltwald+Switzerland"],
      ["Lake Brienz boat cruise", "用船程欣賞 turquoise 湖水、山谷及湖畔村落；先確認班次及末班船。", "低", "https://www.google.com/maps/search/?api=1&query=Lake+Brienz+boat+cruise"],
      ["Giessbach Falls", "由湖的另一側延伸到瀑布及森林，景觀變化較大，但交通時間及船班要計算清楚。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Giessbach+Falls"],
      ["Interlaken return stop", "回程在 Interlaken Ost 或 Höhematte 短停，補充餐飲及咖啡，不必硬塞另一個遠程景點。", "低", "https://www.google.com/maps/search/?api=1&query=H%C3%B6hematte+Interlaken"]
    ],
    schedule: [
      ["08:00–10:00", "由 Bern 前往 Interlaken Ost，再轉 bus 或 boat 到 Iseltwald。"],
      ["10:00–12:30", "村內木屋、湖邊、碼頭及短距離散步。"],
      ["12:30–14:00", "湖畔午餐或咖啡。"],
      ["14:00–16:30", "湖上船程或留在村內慢遊，視末班交通安排。"],
      ["16:30–19:00", "經 Interlaken Ost 返回 Bern。"]
    ],
    highlights: ["Iseltwald village", "Lake Brienz", "湖畔木屋", "湖上船程"],
    highlightDetails: [
      ["Iseltwald village", "Lake Brienz 湖畔的童話小村，重點是木屋、湖水、山景及慢步調，而不是大量景點打卡。", "村落、木屋、湖畔", "https://www.google.com/maps/search/?api=1&query=Iseltwald+Switzerland"],
      ["Iseltwald jetty", "村落碼頭及湖畔拍攝位置，可安排短停及等待船班；旺季可能較擁擠。", "碼頭、攝影、船程", "https://www.google.com/maps/search/?api=1&query=Iseltwald+jetty"],
      ["Lake Brienz lakeside", "turquoise 湖水與山谷景觀是本方案的核心，適合沿湖散步及安排咖啡時間。", "湖景、散步、慢遊", "https://www.google.com/maps/search/?api=1&query=Lake+Brienz"],
      ["Giessbach Falls", "Lake Brienz 另一側的瀑布及森林景觀，可作湖船日的半日延伸，但需配合船班。", "瀑布、森林、湖區", "https://www.google.com/maps/search/?api=1&query=Giessbach+Falls"],
      ["Interlaken Ost return stop", "回程轉乘點，可按時間短停補充餐飲；不建議再塞入完整的山區行程。", "交通、餐飲、彈性", "https://www.google.com/maps/search/?api=1&query=Interlaken+Ost"]
    ],
    booking: "確認船班、巴士末班及交通票適用範圍；熱門時段預留人流緩衝。",
    backup: "船班不合或下雨時，改選 Thun + Lake Thun 或 Lucerne。"
  },
  "fribourg-gruyeres": {
    category: "City／文化、美食與城堡",
    title: "Fribourg + Gruyères",
    summary: "中世紀城市、Catholic heritage、奶酪及城堡；文化與美食兼備。",
    intensity: "中等",
    weather: "低至中",
    route: "Bern → Fribourg → Gruyères → Bern",
    cityWalkDetails: {
      title: "Fribourg City Walk：Old Town、教堂與 Sarine 河",
      route: "Fribourg Bahnhof → Old Town → St. Nicholas Cathedral → Pont de Bern → Sarine 河景",
      description: "Fribourg 先提供中世紀城市、Catholic heritage 及河谷景觀，再轉往 Gruyères 的城堡與奶酪文化；兩段風格不同，適合放在同一個文化美食日。",
      stops: [
        ["Fribourg Bahnhof", "由交通樞紐進入 Old Town，先處理城市高低差及步行方向。"],
        ["Fribourg Old Town", "中世紀街道、橋樑及砂岩建築，適合慢慢觀察城市尺度。"],
        ["St. Nicholas Cathedral", "Fribourg 最重要的宗教與城市地標，可安排入內及看塔樓細節。"],
        ["Pont de Bern", "連接高低地形的歷史橋樑，能看到 Sarine 河谷及 Old Town。"],
        ["Sarine river viewpoint", "以河谷景觀作 City Walk 收尾，再前往 Gruyères。"]
      ]
    },
    map: {
      transitLabel: "Bern → Fribourg → Gruyères",
      localLabel: "Fribourg Old Town → Sarine 河谷／Gruyères village",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及出發站"],
        ["Fribourg Bahnhof", 46.802000, 7.151000, "Fribourg City Walk 起點"],
        ["Gruyères", 46.583000, 7.083000, "城堡及奶酪文化段落"]
      ],
      points: [
        ["Fribourg Old Town", 46.806000, 7.161000, "中世紀街區及砂岩建築"],
        ["St. Nicholas Cathedral", 46.806000, 7.161500, "Fribourg 主要教堂及城市地標"],
        ["Pont de Bern", 46.807000, 7.167000, "歷史橋樑及 Sarine 河谷觀景"],
        ["Gruyères village", 46.583000, 7.083000, "中世紀山村、城堡及奶酪文化"],
        ["Gruyères Castle", 46.584000, 7.082000, "歷史城堡及山村景觀"],
        ["La Maison du Gruyère", 46.582000, 7.061000, "奶酪製作及品嚐體驗"]
      ],
      restaurants: [
        ["Café du Gothard", 46.805500, 7.161000, "Fribourg Old Town 內的餐飲選項，適合 City Walk 午餐。", "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+du+Gothard+Fribourg"],
        ["Restaurant des Trois Tours", 46.806000, 7.162000, "Fribourg 老城傳統餐飲選項，先確認當日營業。", "https://www.google.com/maps/search/?api=1&query=Restaurant+des+Trois+Tours+Fribourg"],
        ["Le Chalet de Gruyères", 46.583500, 7.083000, "Gruyères village 內的奶酪及 Swiss cuisine 餐飲選項。", "https://www.google.com/maps/search/?api=1&query=Le+Chalet+de+Gruy%C3%A8res"],
        ["Restaurant de l'Etoile", 46.583000, 7.082000, "靠近 Gruyères Castle 的村內餐飲選項，適合下午或早晚餐。", "https://www.google.com/maps/search/?api=1&query=Restaurant+de+l%27Etoile+Gruy%C3%A8res"]
      ]
    },
    activity: "St. Nicholas Cathedral、Gruyères Castle、cheese tasting。",
    activityOptions: [
      ["Fribourg Old Town City Walk", "以 Old Town、St. Nicholas Cathedral、Pont de Bern 及 Sarine 河谷為主。", "中等", "https://www.google.com/maps/search/?api=1&query=Fribourg+Old+Town"],
      ["Gruyères Castle", "中世紀山村中的城堡及展覽，適合把下午安排成歷史主題。", "低至中等", "https://www.google.com/maps/search/?api=1&query=Gruy%C3%A8res+Castle"],
      ["La Maison du Gruyère", "了解 Gruyère cheese 製作及品嚐流程；可與村落及城堡二選一搭配。", "低", "https://www.google.com/maps/search/?api=1&query=La+Maison+du+Gruy%C3%A8re"],
      ["Gruyères village walk", "村內石板路、木屋、城堡視角及甜點，適合在室內景點之間放慢節奏。", "低", "https://www.google.com/maps/search/?api=1&query=Gruy%C3%A8res+village"]
    ],
    schedule: [
      ["08:30–09:00", "由 Bern 前往 Fribourg。"],
      ["09:00–12:00", "Fribourg Old Town、St. Nicholas Cathedral、Pont de Bern、Sarine 河景。"],
      ["12:00–13:30", "Fribourg 午餐。"],
      ["13:30–15:00", "轉往 Gruyères，安排 Castle 或 village walk。"],
      ["15:00–17:00", "cheese experience／甜點及村落慢遊，再返回 Bern。"]
    ],
    highlights: ["Fribourg Old Town", "St. Nicholas Cathedral", "Gruyères Castle", "cheese culture"],
    highlightDetails: [
      ["Fribourg Old Town", "中世紀街道、砂岩建築及河谷地形構成城市的主要特色。", "老城、歷史、散步", "https://www.google.com/maps/search/?api=1&query=Fribourg+Old+Town"],
      ["St. Nicholas Cathedral", "Fribourg 重要的 Catholic heritage 及城市地標，可作 City Walk 核心。", "教堂、宗教歷史、建築", "https://www.google.com/maps/search/?api=1&query=St.+Nicholas+Cathedral+Fribourg"],
      ["Pont de Bern", "歷史橋樑連接城市高低地形，可取得 Old Town 及 Sarine 河谷視角。", "橋樑、河谷、觀景", "https://www.google.com/maps/search/?api=1&query=Pont+de+Bern+Fribourg"],
      ["Gruyères Castle", "中世紀山村中的城堡及歷史展示，和 Fribourg 城市段形成對比。", "城堡、山村、歷史", "https://www.google.com/maps/search/?api=1&query=Gruy%C3%A8res+Castle"],
      ["La Maison du Gruyère", "奶酪製作及地方飲食文化的代表景點，適合安排品嚐或短參觀。", "奶酪、美食、體驗", "https://www.google.com/maps/search/?api=1&query=La+Maison+du+Gruy%C3%A8re"]
    ],
    booking: "Gruyères Castle、cheese tasting 或製作體驗先查官方時間。",
    backup: "若轉乘不理想，留在 Fribourg 做完整 Old Town 及教堂 City Walk。"
  },
  "gurten-aare": {
    category: "Slow／Bern 周邊低強度",
    title: "Gurten + Aare slow day",
    summary: "留在 Bern 周邊，安排 local mountain、河岸生活與休息，不必長途移動。",
    intensity: "低",
    weather: "中",
    route: "Bern → Gurten → Bern Old City／Marzili → Aare → Bern",
    map: {
      transitLabel: "Bern 市區 → Gurten",
      localLabel: "Gurten → Bern Old City／Marzili → Aare 河岸",
      transit: [
        ["Bern", 46.948000, 7.439600, "住宿基地及市區活動起點"],
        ["Gurtenbahn", 46.929200, 7.465000, "乘 funicular 上 Gurten 的起點"]
      ],
      points: [
        ["Gurtenbahn", 46.929200, 7.465000, "Gurten funicular 及山上活動起點"],
        ["Gurten Kulm", 46.927000, 7.464000, "觀景塔、短步道及山上咖啡"],
        ["Marzili", 46.938200, 7.444600, "Aare 河畔休閒及 Bern 城市生活"],
        ["Aare River", 46.940000, 7.445000, "河岸散步及城市景觀"],
        ["Bern Historical Museum", 46.944500, 7.445500, "雨天室內文化備案"],
        ["Old City", 46.948000, 7.451000, "拱廊、街道及餐飲收尾"]
      ],
      restaurants: [
        ["Gurten Pavilion", 46.927000, 7.464000, "Gurten 山上餐飲及觀景選項，適合午餐或咖啡。", "https://www.google.com/maps/search/?api=1&query=Gurten+Pavilion+Bern"],
        ["Marzilibrücke restaurants", 46.938000, 7.444500, "Marzili 及 Aare 河附近的餐飲選項，適合下午休息。", "https://www.google.com/maps/search/?api=1&query=restaurants+Marzili+Bern"],
        ["Altes Tramdepot", 46.948600, 7.460700, "BearPark 附近的 brewery restaurant，可配合 Old City 或 Aare 河岸。", "https://www.google.com/maps/search/?api=1&query=Altes+Tramdepot+Bern"],
        ["Kornhauskeller", 46.948500, 7.451500, "Bern Old City 內的歷史拱頂餐廳，適合慢遊日的晚餐。", "https://www.google.com/maps/search/?api=1&query=Kornhauskeller+Bern"]
      ]
    },
    activity: "Gurten funicular、Aare guided raft 或河岸散步，按安全及預約選一項。",
    activityOptions: [
      ["Gurten funicular + viewpoint", "乘 funicular 上 Gurten，安排觀景塔、短步道及咖啡；不需要高強度登山。", "低", "https://www.google.com/maps/search/?api=1&query=Gurten+Bern"],
      ["Aare riverside walk", "沿 Marzili 及 Aare 河岸慢走，感受 Bern 的河流生活；不把游泳當成必做活動。", "低", "https://www.google.com/maps/search/?api=1&query=Marzili+Bern"],
      ["Aare guided raft", "由專業團隊帶領的河流活動，必須提前預約並以水流及安全條件為準。", "中等", "https://www.google.com/maps/search/?api=1&query=Aare+guided+raft+Bern"],
      ["Bern Historical Museum", "雨天或想把一天改成文化主題時，加入 Museum Quarter 及 Old City 拱廊。", "低", "https://www.google.com/maps/search/?api=1&query=Bern+Historical+Museum"]
    ],
    schedule: [
      ["09:00–10:00", "由 Bern 市區前往 Gurtenbahn，乘 funicular 上山。"],
      ["10:00–12:30", "Gurten 觀景塔、短步道及山上咖啡。"],
      ["12:30–14:00", "Gurten 或 Bern 市區午餐。"],
      ["14:00–17:00", "Marzili、Aare 河岸、Bern Historical Museum 或餐廳。"],
      ["17:00–18:30", "返回住宿休息，保留晚上彈性。"]
    ],
    highlights: ["Gurten", "Aare River", "Marzili", "Bern Historical Museum"],
    highlightDetails: [
      ["Gurten Kulm", "Bern 的 local mountain，可由 funicular 輕鬆抵達，適合看城市、短步道及休息。", "觀景、短步道、咖啡", "https://www.google.com/maps/search/?api=1&query=Gurten+Kulm"],
      ["Aare River", "Aare 河是 Bern 城市生活與自然的交界，適合沿河散步及觀察城市地形。", "河岸、散步、城市生活", "https://www.google.com/maps/search/?api=1&query=Aare+River+Bern"],
      ["Marzili", "靠近市區的河岸休閒區，可安排短停、咖啡及看河景；活動安全需按當日資訊。", "河岸、休閒、城市生活", "https://www.google.com/maps/search/?api=1&query=Marzili+Bern"],
      ["Bern Historical Museum", "雨天或想深入了解 Bern、Einstein 及 Switzerland 歷史時的室內重點。", "博物館、歷史、室內", "https://www.google.com/maps/search/?api=1&query=Bern+Historical+Museum"],
      ["Bern Old City", "以拱廊、砂岩建築、噴泉及餐飲作為低壓力收尾，讓一天不必被遠程交通填滿。", "老城、拱廊、餐飲", "https://www.google.com/maps/search/?api=1&query=Bern+Old+City"]
    ],
    booking: "Gurten及河岸散步通常不需預約；guided raft 必須提前確認。",
    backup: "大雨時改為拱廊、Bern Historical Museum、Einstein House 及 Old City 餐廳。"
  }
};

const tripTransportPlans = {
  "interlaken-lauterbrunnen": {
    sbbSearch: "Bern → Lauterbrunnen",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Lauterbrunnen</code>；通常於 <code>Interlaken Ost</code> 轉乘。",
      "回程直接搜尋 <code>Lauterbrunnen</code> → <code>Bern</code>；不用把 Interlaken 另開成一張票。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 85–95</strong>。",
    extra: "若加 Lake Thun／Lake Brienz boat、Harder Kulm 或 paragliding，分別另購；不要假設包含在火車票內。",
    tip: "普通火車不需訂位。若想在 Interlaken 停留，可先確認該票的有效路線與 stopover 規則；不確定時分開買 Bern → Lauterbrunnen 及 Lauterbrunnen → Bern。"
  },
  "wengen-lauterbrunnen": {
    sbbSearch: "Bern → Wengen",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Wengen</code>；通常經 <code>Interlaken Ost</code>、<code>Lauterbrunnen</code>，最後乘 Wengernalp Railway 上山。",
      "若先逛 Lauterbrunnen，再乘 <code>Lauterbrunnen</code> → <code>Wengen</code>；回程則搜尋 <code>Wengen</code> → <code>Bern</code>。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 100–110</strong>，已把上 Wengen 的山地鐵路列入基本交通預算。",
    extra: "Männlichen cable car、其他山上纜車及餐飲另計。",
    tip: "購票目的地必須選 <code>Wengen</code>，不要只買到 Lauterbrunnen；回程要留意 Wengen 的末班山地鐵路。"
  },
  "muerren-gimmelwald": {
    sbbSearch: "Bern → Mürren",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Mürren</code>；常見路線為 Bern → Interlaken Ost → Lauterbrunnen → Grütschalp → Mürren。",
      "到 Gimmelwald 時，按即時班次由 Mürren 接 Schilthornbahn／cable car；回程從 <code>Gimmelwald</code> 或 <code>Mürren</code> 搜尋回 <code>Bern</code>。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 110–130</strong>，實際取決於採用 Grütschalp 或 Stechelberg 路線。",
    extra: "Schilthorn／Piz Gloria、Allmendhubel 與額外山上纜車不包含在基本交通預算。",
    tip: "這條線末段依賴 cable car；出發當日用 SBB 的即時 journey planner 確認轉乘與末班車，不要只按地圖估算。"
  },
  "grindelwald-first": {
    sbbSearch: "Bern → Grindelwald",
    segments: [
      "先在 SBB Mobile 買 <code>Bern</code> → <code>Grindelwald</code> 往返，通常經 <code>Interlaken Ost</code> 轉乘。",
      "抵達 Grindelwald 後步行至 Firstbahn valley station；First cable car 與 adventure activities 由 Jungfrau 官方售票頁或現場另購。"
    ],
    fare: "Bern ↔ Grindelwald 成人 2nd class、No discount、單人往返約 <strong>CHF 85–95</strong>；First cable car 往返 <strong>CHF 60 起</strong>，基本交通合計約 <strong>CHF 145 起</strong>。",
    extra: "First Adventure Package、Flyer／Glider、Mountain Cart、Trottibike 依組合另購。",
    tip: "SBB 票只買至 <code>Grindelwald</code>；不要把 Firstbahn 誤當一般 SBB 火車票。晴天旺季可先買 Firstbahn 或 package，以免現場排隊。"
  },
  "grindelwald-village": {
    sbbSearch: "Bern → Grindelwald",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Grindelwald</code>，通常經 <code>Interlaken Ost</code> 轉乘。",
      "回程直接搜尋 <code>Grindelwald</code> → <code>Bern</code>；村內 City Walk 不需要額外交通。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 85–95</strong>。",
    extra: "Firstbahn、Pfingstegg、Gletscherschlucht 與其他活動另計。",
    tip: "此方案只買到 Grindelwald 即可；如臨時加 First，另於 Firstbahn station 買纜車／活動票，不需要重買 SBB 主線票。"
  },
  jungfraujoch: {
    sbbSearch: "Bern → Grindelwald Terminal",
    segments: [
      "在 SBB Mobile 買 <code>Bern</code> → <code>Grindelwald Terminal</code>，通常經 <code>Interlaken Ost</code>；這是進入 Eiger Express 的最順路起點。",
      "另到 Jungfrau 官方售票頁購買 <code>Grindelwald Terminal → Jungfraujoch – Top of Europe</code> 往返票，通常包含 Eiger Express 與 Jungfrau Railway 的對應山岳段。",
      "回程按票券指定或可用路線下山，再由 Grindelwald Terminal 乘 SBB 回 <code>Bern</code>。"
    ],
    fare: "全程成人、無折扣的規劃預算約 <strong>CHF 250–300／人往返</strong>；其中 SBB 主線與 Jungfrau 山岳票是兩個購買步驟。",
    extra: "2026 年夏季 Jungfrau Railway 需另確認強制付費 seat reservation；餐飲與山頂消費不包括。",
    tip: "不要只在 SBB 買到 Grindelwald Terminal 就上山；先確認 Jungfrau 官方票的日期、路線與 reservation，並預留至少 15–20 分鐘轉乘 Eiger Express。"
  },
  lucerne: {
    sbbSearch: "Bern → Luzern",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Luzern</code>，選最快的 IC／IR 班次；一般只需一次轉乘或可直達。",
      "Lucerne City Walk 從 <code>Luzern</code> station 出發；回程買／使用 <code>Luzern</code> → <code>Bern</code>。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 76</strong>。",
    extra: "Lake Lucerne boat、Pilatus／Rigi 山岳票、Swiss Museum of Transport 與市內短程交通另計。",
    tip: "若只選 Option A City Walk，無需預先買船或山岳票；Option B 要先按當日船班與 Pilatus／Rigi 的營運時間倒推回程火車。"
  },
  lausanne: {
    sbbSearch: "Bern → Lausanne",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Lausanne</code>，通常可乘 IC 直達。",
      "抵達 <code>Lausanne</code> station 後，City Walk 可步行；如需下到 Ouchy，另以 Lausanne métro 單程／短期票處理。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 74</strong>。",
    extra: "Lausanne métro、Lake Geneva boat、Olympic Museum 與 Lavaux 延伸交通另計。",
    tip: "若同日要從 Old Town 下至 Ouchy，可用 metro 下坡、再沿湖步行；不用為市內短段額外買長距離 City-Ticket。"
  },
  thun: {
    sbbSearch: "Bern → Thun",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Thun</code>；直達班次頻密，約 20 分鐘。",
      "Thun station 到 Old Town、Castle 及湖畔主要靠步行；回程使用 <code>Thun</code> → <code>Bern</code>。"
    ],
    fare: "成人 2nd class、No discount、單人往返約 <strong>CHF 26</strong>。",
    extra: "Lake Thun boat、Thun Castle／Panorama 門票另計。",
    tip: "最適合臨時按天氣決定。先買普通來回火車票；確認下午船班後才另買短程船票，不需追求完整環湖。"
  },
  iseltwald: {
    sbbSearch: "Bern → Iseltwald Dorf",
    segments: [
      "在 SBB Mobile 搜尋 <code>Bern</code> → <code>Iseltwald Dorf</code>，常見路線為火車至 <code>Interlaken Ost</code>，再轉 PostBus 103。",
      "如果改以 Lake Brienz boat 抵達，先買 Bern → Interlaken Ost 火車票；船票按 BLS Lake Cruise 另購，回程可由 Iseltwald Dorf 乘 bus 回 Interlaken Ost。"
    ],
    fare: "火車＋PostBus 成人 2nd class、No discount、單人往返約 <strong>CHF 75–90</strong>。",
    extra: "Lake Brienz boat、Giessbach Falls 船／funicular 另計。",
    tip: "不要在 SBB 只搜尋 <code>Iseltwald</code>；選 <code>Iseltwald Dorf</code> 才會把村中心巴士站納入行程。船班較少，先以回程 bus 作保底。"
  },
  "fribourg-gruyeres": {
    sbbSearch: "Bern → Fribourg/Freiburg；Fribourg/Freiburg → Gruyères",
    segments: [
      "早上先在 SBB Mobile 買 <code>Bern</code> → <code>Fribourg/Freiburg</code>；抵達後步行進 Old Town。",
      "下午再買 <code>Fribourg/Freiburg</code> → <code>Gruyères</code>，通常需經 <code>Bulle</code> 轉乘；最後搜尋 <code>Gruyères</code> → <code>Bern</code> 回程。",
      "Gruyères station 至 village／Castle 有上坡步行；如不想走，按即時班次找 local bus。"
    ],
    fare: "三段合計成人 2nd class、No discount、單人約 <strong>CHF 55–65</strong>。",
    extra: "Gruyères Castle、La Maison du Gruyère、cheese tasting 與村內 local bus 另計。",
    tip: "因中途在 Fribourg 停留，最清楚的做法是分三段買票；不要假設 Bern → Gruyères 一張票一定適合長時間 stopover。"
  },
  "gurten-aare": {
    sbbSearch: "Bern → Wabern bei Bern",
    segments: [
      "由 Bern 市區以 Libero tram／S-Bahn 前往 <code>Wabern bei Bern</code> 或 <code>Wabern, Gurtenbahn</code>；可在 SBB Mobile 輸入該站查最順班次。",
      "在 Gurtenbahn valley station 另購 <code>Gurtenbahn</code> 往返票；下山後再乘市內 tram／bus 回 Bern Old City 或住宿。"
    ],
    fare: "沒有長途火車；Gurtenbahn 往返加 Bern 市內 Libero 交通，單人約 <strong>CHF 15–20</strong>。",
    extra: "Aare guided raft、博物館及餐飲另計。",
    tip: "若朋友家位於 Libero 適用範圍，可先確認是否已有住宿提供的 Bern Ticket；沒有的話再依當日行程買市內單程或 day ticket。"
  }
};

Object.entries(bernDaytrips).forEach(([id, trip]) => {
  trip.transport = tripTransportPlans[id];
});

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

const highlightImageQueries = {
  "Interlaken promenade": "Interlaken",
  "Japanese Garden": "Japanese Garden Interlaken",
  "Wengen village": "Wengen",
  "Wengen–Lauterbrunnen contrast": "Wengen",
  "Mürren village": "Mürren",
  "Schilthorn / Piz Gloria": "Schilthorn",
  "Flower Trail": "Allmendhubel Mürren",
  "First View": "Grindelwald First",
  "Schreckfeld + Bort": "Grindelwald First",
  "Grindelwald village": "Grindelwald",
  "Grindelwald valley panorama": "Grindelwald",
  "Sphinx Observatory": "Sphinx Observatory Jungfraujoch",
  "Jungfrau Plateau": "Jungfraujoch",
  "360° Cinema + Lindt Swiss Chocolate Heaven": "Jungfraujoch",
  "Lucerne Old Town": "Lucerne",
  "Escaliers du Marché + Old Town": "Lausanne Old Town",
  "Thun Old Town": "Thun",
  "Iseltwald village": "Iseltwald",
  "Iseltwald jetty": "Iseltwald",
  "Lake Brienz lakeside": "Lake Brienz",
  "Interlaken Ost return stop": "Interlaken Ost",
  "Fribourg Old Town": "Fribourg",
  "Pont de Bern": "Pont de Berne Fribourg",
  "Gurten Kulm": "Gurten",
};

async function loadHighlightImage(card) {
  const name = card.dataset.imageQuery;
  const query = highlightImageQueries[name] || name;
  if (!query || card.querySelector(".attraction-detail-image")) return;
  try {
    const response = await fetch(
      "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" +
      encodeURIComponent(query) +
      "&gsrnamespace=0&gsrlimit=8&prop=pageimages&piprop=thumbnail&pithumbsize=640&format=json&origin=*"
    );
    const data = await response.json();
    const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
    const normalizedQuery = query
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
        .includes(normalizedQuery)
    );
    const source = (matchingPage || rankedPages[0])?.thumbnail?.source;
    if (!source) return;
    const image = document.createElement("img");
    image.className = "attraction-detail-image";
    image.src = source;
    image.alt = query + " 景點圖片";
    image.loading = "lazy";
    image.addEventListener("error", () => image.remove(), { once: true });
    card.prepend(image);
  } catch (error) {
    // 圖片載入失敗時保留文字內容。
  }
}

function loadHighlightImages(container) {
  container.querySelectorAll("[data-image-query]").forEach((card) => {
    loadHighlightImage(card);
  });
}

function makeDaytripMapIcon(label, type) {
  return L.divIcon({
    className: "",
    html: '<span class="daytrip-map-number ' + type + '">' + label + "</span>",
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -17]
  });
}

function getPlanningNotes(trip) {
  if (trip.title === "Interlaken + Lauterbrunnen") {
    return {
      forecast: "同一天包含 Interlaken 低地、Lauterbrunnen 山谷及可能的 Harder Kulm，三處天氣不一定相同。出發前確認山谷雲量、雷雨、瀑布區降雨、纜車／funicular 及船班；paragliding 另由 operator 作最後放飛判斷。",
      clothing: "穿舒適步行鞋及分層衣物，帶輕便防風防雨外套、帽子、太陽鏡及防曬。若安排山坡或瀑布附近步道，避免穿不防滑的平底鞋。",
      packing: "交通票、飲用水、零食、行動電源、個人藥物、雨具及小型背包；paragliding 另帶預約確認及符合 operator 要求的衣著。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Interlaken 交通及活動資料", "https://www.interlaken.swiss/en"]
      ]
    };
  }
  if (trip.title === "Wengen + Lauterbrunnen") {
    return {
      forecast: "Wengen、Lauterbrunnen Valley 及 Männlichen 的天氣可能不同；出發前查看雲量、雷雨、山區鐵路、纜車及步道狀態。山谷有視野不代表 Wengen 或 Männlichen 一定清晰。",
      clothing: "穿舒適且有抓地力的步行鞋，採分層衣物並帶輕便防風防雨外套；若加入 Männlichen 或山脊步道，另帶帽子、太陽鏡及防曬。",
      packing: "SBB／山區鐵路及纜車票券、飲用水、零食、行動電源、個人藥物、雨具及小型背包；無車村落內不要安排拖大型行李。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Jungfrau Region 官方資料", "https://www.jungfrau.ch/en-gb/"]
      ]
    };
  }
  if (trip.title === "Mürren + Gimmelwald") {
    return {
      forecast: "Mürren、Gimmelwald 及 Schilthorn 的海拔差異很大，需分別查看雲量、風勢、雷雨及纜車營運。高山雲霧可能快速遮蔽 Eiger、Mönch、Jungfrau，出發前一晚及當天清晨重新確認。",
      clothing: "穿分層衣物、包覆性防滑鞋及輕便防風防雨外套；若前往 Schilthorn，額外帶帽子、薄手套、太陽鏡及防曬。Flower Trail 也不建議穿城市皮鞋。",
      packing: "SBB／纜車票券、飲用水、零食、行動電源、個人藥物、雨具及小型背包；務必記下末班纜車時間，避免滯留山上。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Jungfrau Region 官方資料", "https://www.jungfrau.ch/en-gb/"]
      ]
    };
  }
  if (trip.title === "Grindelwald village") {
    return {
      forecast: "Grindelwald village 的天氣通常比 First 等高山站容易應對，但若加入纜車、Pfingstegg 或 Gletscherschlucht，仍要確認雲量、雷雨、降雨及活動營運。",
      clothing: "以舒適步行鞋、輕便分層衣物及防風防雨外套為主；若安排 Gletscherschlucht 或 Pfingstegg，建議穿抓地力較好的鞋。",
      packing: "交通票、飲用水、雨具、太陽鏡、防曬、行動電源、個人藥物及小型背包；村落內可補充食物，不需要帶太多裝備。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Grindelwald Tourism 官方資料", "https://grindelwald.swiss/en"]
      ]
    };
  }
  if (trip.title === "Iseltwald + Lake Brienz") {
    return {
      forecast: "湖畔天氣相對比高山穩定，但船班、湖面風勢及 Giessbach Falls 的降雨仍需確認。出發前一晚及當日早上查看 Lake Brienz 船班和巴士末班時間，避免只依賴地圖估算回程。",
      clothing: "穿舒適步行鞋及輕便分層衣物，帶薄外套、雨具、太陽鏡及防曬；湖邊風勢可能比村內明顯，船上也可能較涼。",
      packing: "交通票、船票或時刻表截圖、飲用水、零食、行動電源、個人藥物、小型雨具及相機；湖畔慢遊不需要登山裝備。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Interlaken／Lake Brienz 官方資料", "https://www.interlaken.swiss/en"]
      ]
    };
  }
  if (trip.title === "Thun + Lake Thun") {
    return {
      forecast: "Thun Old Town 對天氣較有彈性，但 Lake Thun 船程受風勢、降雨及季節時刻影響。出發前一晚及當日早上確認船班、城堡及博物館開放時間。",
      clothing: "穿舒適步行鞋及輕便分層衣物，帶薄外套、雨具、太陽鏡及防曬；湖上船程可能比 Old Town 更涼。",
      packing: "交通票、船班截圖、飲用水、行動電源、個人藥物、雨具及小型背包；不需要登山裝備。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Thun 官方旅遊資料", "https://www.thunersee.ch/en"]
      ]
    };
  }
  if (trip.title === "Lucerne") {
    return {
      forecast: "Lucerne Old Town 對天氣較有彈性，Lake Lucerne 船程則要查看風勢、降雨及季節船班。出發前一晚及當日早上確認船班、博物館開放時間及回程火車。",
      clothing: "穿舒適步行鞋及輕便分層衣物，帶薄外套、雨具、太陽鏡及防曬；湖上船程可能比 Old Town 更涼。",
      packing: "交通票、船班截圖、飲用水、行動電源、個人藥物、雨具及小型背包；若去 Swiss Museum of Transport，保留室內活動時間。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Lucerne 官方旅遊資料", "https://www.luzern.com/en"]
      ]
    };
  }
  if (trip.title === "Lausanne") {
    return {
      forecast: "Lausanne 老城與 Ouchy 湖畔天氣可能不同；出發前查看降雨、雷雨、Lake Geneva 風勢及船班。城市本身雨天仍可安排 Cathedral、Old Town 及 Olympic Museum。",
      clothing: "穿舒適步行鞋，因 Lausanne 有明顯坡度及長梯；帶輕便外套、雨具、太陽鏡及防曬。若安排 Ouchy 或船程，湖邊可能較涼。",
      packing: "交通票、metro 方向資料、飲用水、行動電源、個人藥物、雨具及小型背包；不要為了老城坡度攜帶不必要的大件物品。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Lausanne 官方旅遊資料", "https://www.lausanne-tourisme.ch/en/"]
      ]
    };
  }
  if (trip.title === "Fribourg + Gruyères") {
    return {
      forecast: "Fribourg Old Town 與 Gruyères 山村的天氣差異通常小於高山方案，但轉乘、戶外河谷及城堡步行仍要查看降雨。若下雨，保留 Cathedral、Castle、cheese experience 及餐廳。",
      clothing: "穿舒適步行鞋及輕便分層衣物；Fribourg 有坡度及石板路，另帶薄外套、雨具及防曬。",
      packing: "交通票、飲用水、行動電源、個人藥物、雨具及小型背包；若購買奶酪或食品，帶可重複使用的購物袋。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Gruyères 官方旅遊資料", "https://www.la-gruyere.ch/en"]
      ]
    };
  }
  if (trip.title === "Gurten + Aare slow day") {
    return {
      forecast: "這個方案對山區能見度要求較低，但 Gurten、Aare 河岸及戶外活動仍受降雨、雷雨及水流狀況影響。若安排 guided raft，必須以 operator 的安全判斷為準。",
      clothing: "穿舒適步行鞋及輕便分層衣物，帶薄外套、雨具、太陽鏡及防曬；若參加河流活動，按 operator 要求準備替換衣物。",
      packing: "Bern 交通票、飲用水、零食、行動電源、個人藥物、雨具及小型背包；河流活動另帶乾衣物及防水收納袋。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Bern 官方旅遊資料", "https://www.bern.com/en"]
      ]
    };
  }
  if (trip.title === "Jungfraujoch") {
    return {
      forecast: "Jungfraujoch 海拔 3454m，不能只看 Bern 或 Interlaken 的天气。出發前 3 天看趨勢，前一晚及當日清晨再確認山頂能見度、風勢、降雪／降雨及鐵路營運；山下陰天不代表山頂一定沒有視野，但也不能保證。",
      clothing: "採洋蔥式穿法：吸濕排汗內層、保暖中層、防風防水外套；帶帽子、薄手套、太陽鏡及防曬。穿包覆性、防滑的鞋，不建議只穿薄衫或一般平底鞋。",
      packing: "Swiss Travel Pass／車票及 seat reservation、護照或身份證明、飲用水、少量高熱量零食、個人藥物、行動電源、紙巾及小型背包。高海拔不適時應立即休息、補水並向工作人員求助。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Jungfraujoch 官方營運資料", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/"]
      ]
    };
  }
  if (trip.title === "Grindelwald First") {
    return {
      forecast: "First 山站約 2166m，出發前查看 Grindelwald／First 的雲量、能見度、雷雨及風勢。若安排 Flyer、Glider、Mountain Cart 或 Trottibike，還要確認活動是否因風雨暫停；山下晴天不代表山上一定適合戶外活動。",
      clothing: "穿分層衣物、輕便防風／防雨外套、包覆性運動鞋；Bachalpsee 建議穿有抓地力的鞋。帶帽子、太陽鏡及防曬，山上風大時薄手套也有用。",
      packing: "Firstbahn／活動票券、飲用水、零食、行動電源、個人藥物、雨具及小型背包。Mountain Cart 和 Trottibike 的安全帽通常由 operator 提供，但仍需穿適合運動的衣物和鞋。",
      links: [
        ["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"],
        ["Grindelwald-First 官方活動及營運", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"]
      ]
    };
  }
  if (trip.category.startsWith("Alpine")) {
    return {
      forecast: "山區天氣變化快，出發前一晚及當日早上確認能見度、雷雨、風勢、纜車及步道狀態。",
      clothing: "分層穿衣、防風外套、包覆性運動鞋；高山活動另帶帽子、太陽鏡及防曬。",
      packing: "交通票、飲用水、零食、行動電源、個人藥物及小型背包；需要預約的活動帶上確認資料。",
      links: [["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"]]
    };
  }
  return {
    forecast: "出發前一晚及當日早上確認降雨、雷雨、風勢、交通及船班；湖區與山區活動的實際營運可能因天氣調整。",
    clothing: "以舒適步行鞋及輕便分層衣物為主，另帶薄外套及雨具；湖邊、山坡或船上可能比市區涼。",
    packing: "交通票、飲用水、零食、行動電源、個人藥物、太陽鏡、防曬及小型背包。",
    links: [["MeteoSwiss 官方天氣", "https://www.meteoswiss.admin.ch/"]]
  };
}

function renderDaytrip(trip) {
  const planningNotes = getPlanningNotes(trip);
  document.title = `${trip.title}｜Bern Full-day 行程`;
  document.querySelector("#daytrip-title").textContent = trip.title;
  document.querySelector("#daytrip-subtitle").textContent =
    `Bern 周邊 Full-day｜${trip.category}｜8 月 18–19 日擇一安排`;
  document.querySelector("#daytrip-page").innerHTML = `
    <section class="daytrip-hero">
      <p class="daytrip-category">${trip.category}</p>
      <h2>${trip.title}</h2>
      <p>${trip.summary}</p>
      <div class="daytrip-tags">
        <span>強度：${trip.intensity}</span>
        <span>天氣依賴：${trip.weather}</span>
      </div>
    </section>
    ${trip.chooseTwo ? `
      <section class="choose-two-section">
        <h2>Interlaken：三選二</h2>
        <p>這一天不需要把所有活動都塞進去；從以下三個主題中選兩個，保留轉乘、天氣及臨時取消的緩衝。</p>
        <div class="choose-two-grid">
          ${trip.chooseTwo.map(([id, title, description, meta, combination]) => `
            <label class="choose-two-card">
              <input type="checkbox" data-choice-id="${id}">
              <span>
                <strong>${title}</strong>
                <small>${description}</small>
                <small class="choice-meta">${meta}</small>
                <small class="choice-combination">${combination}</small>
              </span>
            </label>
          `).join("")}
        </div>
        <p class="choose-two-status" data-choice-status>已選 0／2</p>
      </section>
    ` : ""}
    ${trip.cityWalkDetails && trip.mountainLakeRoute ? `
      <section class="route-choice-notice">
        <h2>Lucerne Full-day 路線：二選一</h2>
        <p>兩條路線是平行的不同方案，不建議同一天串聯。Option A 偏城市文化及慢步；Option B 偏山景、交通體驗及湖上移動。</p>
        <div class="grid">
          <article class="card route-choice-card city-choice">
            <h3>Option A｜市區 City Walk</h3>
            <p>Chapel Bridge、Jesuit Church、Old Town、Lion Monument 及 Lake Lucerne 湖畔。</p>
            <p class="small">強度較低｜雨天彈性較高</p>
          </article>
          <article class="card route-choice-card mountain-choice">
            <h3>Option B｜市區 → 山 → 湖 → 市區</h3>
            <p>Pilatus 或 Rigi、Lake Lucerne 船程及市區收尾。</p>
            <p class="small">交通較複雜｜更依賴山區及船班天氣</p>
          </article>
        </div>
      </section>
    ` : ""}
    ${trip.cityWalkDetails ? `
      <section class="city-walk-detail">
        <h2>${trip.cityWalkDetails.title}（景點導覽）</h2>
        <p class="small">這裡只說明城市步行段的理解順序；完整交通、地圖及時間安排請看下方 Full-day 路線。</p>
        <p><code>步行段：${trip.cityWalkDetails.route}</code></p>
        <p>${trip.cityWalkDetails.description}</p>
        <div class="city-walk-stop-grid">
          ${trip.cityWalkDetails.stops.map(([name, description], index) => `
            <article class="card city-walk-stop">
              <span class="city-walk-stop-number">${index + 1}</span>
              <h3>${name}</h3>
              <p>${description}</p>
            </article>
          `).join("")}
        </div>
      </section>
    ` : ""}
    ${trip.mountainLakeRoute ? `
      <section class="mountain-lake-route">
        <h2>${trip.mountainLakeRoute.title}</h2>
        <p><code>${trip.mountainLakeRoute.route}</code></p>
        <p>${trip.mountainLakeRoute.description}</p>
        <div class="daytrip-timeline">
          ${trip.mountainLakeRoute.schedule.map(([time, detail]) => `
            <article class="daytrip-time">
              <strong>${time}</strong>
              <p>${detail}</p>
            </article>
          `).join("")}
        </div>
        <h3>山區版本二選一</h3>
        <div class="grid">
          ${trip.mountainLakeRoute.alternatives.map(([name, description, link]) => `
            <article class="card route-alternative">
              <h3>${name}</h3>
              <p>${description}</p>
              <a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看地圖／最新資料 →</a>
            </article>
          `).join("")}
        </div>
      </section>
    ` : ""}
    <section>
      <h2>Full-day 交通與時間軸${trip.chooseTwo ? "（按三選二調整）" : ""}</h2>
      <p><code>${trip.route}</code></p>
      ${trip.transport ? `
        <div class="grid">
          <article class="card">
            <h3>SBB 購票設定</h3>
            <p><strong>搜尋：</strong><code>${trip.transport.sbbSearch}</code></p>
            <p class="small">SBB Mobile：選 <strong>Adult</strong>、<strong>2nd class</strong>、<strong>No discount / Full fare</strong>。以下金額均為單人規劃預算。</p>
          </article>
          <article class="card">
            <h3>交通預算</h3>
            <p>${trip.transport.fare}</p>
            <p class="small"><strong>另計：</strong>${trip.transport.extra}</p>
          </article>
        </div>
        <article class="card">
          <h3>建議購買與轉乘次序</h3>
          <ol>${trip.transport.segments.map((segment) => `<li>${segment}</li>`).join("")}</ol>
          <p class="small"><strong>購票提醒：</strong>${trip.transport.tip}</p>
        </article>
      ` : ""}
      ${trip.map ? `
        <div class="daytrip-map" id="daytrip-map" aria-label="${trip.title} 活動地圖"></div>
        <p class="map-note">橙色虛線為 ${trip.map.transitLabel} 的公共交通轉移；藍色實線為 ${trip.map.localLabel} 的山上路線。地圖用於理解相對位置，實際班次、步道、纜車及活動入口以官方公告為準。</p>
        <div class="daytrip-map-legend">
          <span><i class="legend-map-number attraction">1</i>主要景點</span>
          <span><i class="legend-map-number transit">T1</i>交通節點</span>
          <span><i class="legend-map-number restaurant">R1</i>餐廳</span>
        </div>
        <div class="restaurant-list">
          <h3>附近推薦餐廳</h3>
          <p class="small">橙色餐廳標記可作為午餐或下山後用餐參考；山上餐廳開放時間及最後點餐時間要按當日確認。</p>
          <div class="grid">
            ${trip.map.restaurants.map(([name, , , description, link]) => `
              <article class="card restaurant-card">
                <h3>${name}</h3>
                <p>${description}</p>
                <a class="restaurant-link" href="${link}" target="_blank" rel="noreferrer">查看地圖／最新餐廳資料 →</a>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}
      <div class="daytrip-timeline">
        ${trip.schedule.map(([time, detail]) => `
          <article class="daytrip-time">
            <strong>${time}</strong>
            <p>${detail}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section>
      <h2>景點與活動</h2>
      <div class="grid">
        ${trip.highlightDetails ? `
          <div class="highlight-detail-grid">
            ${trip.highlightDetails.map(([name, description, activity, link]) => `
              <article class="card highlight-card" data-image-query="${name}">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="small">適合：${activity}</p>
                <a class="activity-link" href="${link}" target="_blank" rel="noreferrer">查看地圖／圖片資料 →</a>
              </article>
            `).join("")}
          </div>
        ` : `
          <article class="card">
            <h3>主要看點</h3>
            <ul>${renderList(trip.highlights)}</ul>
          </article>
        `}
        <article class="card">
          <h3>可搭配活動</h3>
          <p>${trip.activity}</p>
        </article>
      </div>
    </section>
    ${trip.activityOptions ? `
      <section>
        <h2>${trip.activityOptionsTitle || trip.title + " 活動選擇"}</h2>
        <p>以下不是全部必做，而是同一個 Full-day 中的選擇器。建議「一個主活動＋一個輕量活動」，不要把所有項目都塞進同一天。</p>
        <div class="activity-choice-grid">
          ${trip.activityOptions.map(([name, description, intensity, link]) => `
            <article class="card activity-choice">
              <h3>${name}</h3>
              <p>${description}</p>
              <p class="small">建議強度：${intensity}</p>
              <a class="activity-link" href="${link}" target="_blank" rel="noreferrer">官方資料／圖片 →</a>
            </article>
          `).join("")}
        </div>
      </section>
    ` : ""}
    <section>
      <h2>預約、交通與備案</h2>
      <div class="note"><strong>預約／交通：</strong>${trip.booking}</div>
      <p><strong>天氣或營運變化：</strong>${trip.backup}</p>
      <p class="small">此頁是行程規劃框架；出發前仍需以 SBB、船公司、纜車及活動 operator 的最新時刻表和營運公告為準。</p>
    </section>
    <section>
      <h2>天氣、衣著與隨身物品</h2>
      <div class="grid">
        <article class="card planning-card">
          <h3>天氣預測</h3>
          <p>${planningNotes.forecast}</p>
          ${planningNotes.links.map(([label, link]) => `<a class="activity-link" href="${link}" target="_blank" rel="noreferrer">${label} →</a>`).join("<br>")}
        </article>
        <article class="card planning-card">
          <h3>衣著建議</h3>
          <p>${planningNotes.clothing}</p>
        </article>
        <article class="card planning-card">
          <h3>建議攜帶</h3>
          <p>${planningNotes.packing}</p>
        </article>
      </div>
    </section>
    <section>
      <h2>行程取捨</h2>
      <p>這是一個完整 Full-day 主題，不建議再加入另一個遠距離山區或城市。若另一天想換類別，可返回 Bern 選擇 Lake、City 或 Storybook villages 方案。</p>
    </section>
  `;
  loadHighlightImages(document.querySelector("#daytrip-page"));
  const choiceInputs = document.querySelectorAll("[data-choice-id]");
  const choiceStatus = document.querySelector("[data-choice-status]");
  choiceInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = [...choiceInputs].filter((choice) => choice.checked);
      if (selected.length > 2) {
        input.checked = false;
        return;
      }
      choiceStatus.textContent = "已選 " + selected.length + "／2";
    });
  });
}

const tripKey = new URLSearchParams(window.location.search).get("trip");
const selectedTrip = bernDaytrips[tripKey] || bernDaytrips["interlaken-lauterbrunnen"];
renderDaytrip(selectedTrip);

if (selectedTrip.map && window.L) {
  const mapElement = document.querySelector("#daytrip-map");
  const map = L.map(mapElement);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
  const points = selectedTrip.map.points;
  const coordinates = points.map((point) => [point[1], point[2]]);
  const transitCoordinates = selectedTrip.map.transit.map((point) => [point[1], point[2]]);
  selectedTrip.map.transit.forEach((point, index) => {
    const marker = L.marker([point[1], point[2]], {
      icon: makeDaytripMapIcon("T" + (index + 1), "transit")
    }).addTo(map);
    marker.bindPopup(
      "<strong>交通 " + (index + 1) + "｜" + point[0] + "</strong><br>" + point[3]
    );
  });
  points.forEach((point, index) => {
    const marker = L.marker([point[1], point[2]], {
      icon: makeDaytripMapIcon(index + 1, "attraction")
    }).addTo(map);
    marker.bindPopup(
      "<strong>" + (index + 1) + ". " + point[0] + "</strong><br>" + point[3]
    );
  });
  selectedTrip.map.restaurants.forEach((restaurant, index) => {
    const marker = L.marker([restaurant[1], restaurant[2]], {
      icon: makeDaytripMapIcon("R" + (index + 1), "restaurant")
    }).addTo(map);
    marker.bindPopup(
      "<strong>餐廳 R" + (index + 1) + "｜" + restaurant[0] + "</strong><br>" + restaurant[3] +
      "<br><small>請以當日官方營運及最後點餐時間為準。</small>" +
      '<br><a href="' + restaurant[4] + '" target="_blank" rel="noreferrer">查看地圖／最新資料 →</a>'
    );
  });
  L.polyline(coordinates.slice(0, 2), {
    color: "#2e6f95",
    weight: 5,
    opacity: 0.85
  }).addTo(map);
  L.polyline(transitCoordinates, {
    color: "#d9782f",
    weight: 4,
    opacity: 0.9,
    dashArray: "9 8"
  }).addTo(map);
  map.fitBounds(
    coordinates.concat(transitCoordinates, selectedTrip.map.restaurants.map((restaurant) => [restaurant[1], restaurant[2]])),
    { padding: [24, 24] }
  );
}

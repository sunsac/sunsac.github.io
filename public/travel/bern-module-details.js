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
  const resource = (label, url, kind = "官方資料") => ({ label, url, kind });
  const checkpoint = (name, lat, lng, stay, walkFromPrevious, value, practical, optional = false) => ({
    name, coordinates: [lat, lng], stay, walkFromPrevious, value, practical, optional,
  });

  const shared = {
    "bern-city-walk": {
      whyChoose: "希望用半天讀懂 Bern 的政治中心、中世紀城市軸線、Aare 河谷與制高點，而且行程可隨時縮短。",
      skipWhen: "雷暴、結冰或連續強降雨時不要登塔或走陡坡；若只剩不足兩小時，改走 Bahnhof–Zytglogge 短線。",
      attractions: [
        attraction("Bundeshaus 與 Bundesplatz", "聯邦議會建築把 Bern 的首都職能放進行程開場；廣場也是市集、噴泉和公共活動空間。", "20–35 分鐘", "廣場全天；議會導覽按官方場次", "廣場免費；導覽按官方頁面", "導覽需預先確認並攜帶證件", "工作日安檢和議會活動可能影響進入；不要堵住入口", "https://www.parlament.ch/en/services/visit-parliament-building", 46.9466, 7.4441, "Bundeshaus Bern"),
        attraction("Zytglogge", "舊城軸線的視覺錨點；在整點前觀察機械人物，再從鐘塔理解城市擴張。", "20–45 分鐘", "外觀全天；塔內只隨導覽開放", "外觀免費；導覽價格臨行確認", "塔內導覽建議預約", "整點前約 5 分鐘到場；石階狹窄", "https://www.bern.com/en/explore/guided-city-tours/tour-of-the-clock-tower", 46.9483, 7.4513, "Zytglogge Bern"),
        attraction("Einstein House", "Kramgasse 49 的二樓舊居恢復了 Einstein 與家人在 Bern 生活時期的室內尺度；他在 Bern 的關鍵研究歲月包括 1905 年的 annus mirabilis。", "30–45 分鐘", "2026/2/4–12/18 每日 10:00–17:00；最後進入 16:45", "成人 CHF 8；學生／長者 CHF 6；其他折扣按官網", "個人可現場或線上安排；團體至少 6 人須按官網預約", "入口和展室空間小、樓梯狹窄且無電梯；它與 Bern Historical Museum 內的 Einstein Museum 是不同地點", "https://www.einstein-bern.ch/?lang=en&show=haus", 46.9489, 7.4514, "Einstein House Bern"),
        attraction("Bern Minster", "瑞士最高教堂尖塔與晚期哥特式主教堂；門廊雕塑和平臺共同解釋舊城宗教與地形。", "35–70 分鐘", "教堂與塔樓開放隨季節、禮拜和天氣變化", "教堂通常免費；登塔收費", "團體或特別參觀另查", "登塔為狹窄旋梯；雷雨或強風不要上塔", "https://www.bernermuenster.ch/en/", 46.9472, 7.4519, "Bern Minster"),
        attraction("BearPark 與 Nydegg", "從老城跨過 Aare 後觀察城市懸崖、河道和熊作為城市象徵的歷史。", "30–50 分鐘", "公共空間全天；動物可見性不保證", "免費", "無需預約", "動物可能休息或不在視線內；以河谷景觀為主要價值", "https://bern.com/en/explore/activities-and-excursions/bern-animal-park-daehlhoelzli-bearpark", 46.9494, 7.4593, "BearPark Bern"),
        attraction("Rosengarten", "從東北高地完整回望 Aare 半島，是把前面走過的舊城軸線收束成一張地圖的終點。", "35–60 分鐘", "公園全天開放", "免費", "無需預約", "由 BearPark 上坡較陡；可改搭 bus 10", "https://bern.com/en/detail/the-rose-garden", 46.9517, 7.4599, "Rosengarten Bern"),
      ],
      dining: [
        dining("主餐", "Altes Tramdepot", "BearPark 後、上 Rosengarten 前", "啤酒廠料理、沙拉與瑞士熱食", "約 CHF 25–45", "營業時段會調整，臨行查官網", "景觀位與晚餐建議訂位", "https://altestramdepot.ch/", 46.9486, 7.4607),
        dining("咖啡休息", "Einstein Café", "Kramgasse／Zytglogge 中段", "咖啡、甜點與輕食", "約 CHF 8–25", "臨行確認當日時段", "一般不必訂位", "https://www.einstein-cafe.ch/", 46.9482, 7.4518),
        dining("主餐", "Restaurant Rosengarten", "完整版終點", "瑞士及地中海菜、城市景觀", "約 CHF 30–55", "季節與活動可能影響營業", "露臺和晚餐建議訂位", "https://www.rosengarten.be/", 46.9515, 7.4600),
      ],
      foodGuide: {
        intro: "Bern 的味道不只在正餐：早餐麵包、周市集、奶酪鹹點、傳統肉食、巧克力與可帶走的熊形甜點，都可以嵌入 City Walk。最實用的做法是沿途嘗兩種小食，再把一道重菜留給路線結束後。",
        specialties: [
          { name: "Bärner Anke-Züpfe", category: "早餐／麵包", imageQuery: "Zopf Swiss bread", imageFallback: "braided butter bread", summary: "奶油編辮麵包，傳統上與星期日早餐關係最深；組織細軟、表面金黃。", taste: "單吃、配果醬，或配一小份本地奶酪。", timing: "出發前或 Bahnhof–Bundesplatz 段", portion: "適合兩人分享一段；不會拖慢步行。", diet: "含麩質、奶油和通常含蛋。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Chäschueche", category: "鹹點／快速午餐", imageQuery: "Swiss cheese tart", imageFallback: "cheese quiche", summary: "瑞士德語區常見的奶酪撻；比 fondue 更適合作為 City Walk 中途補給。", taste: "溫熱吃，搭配沙拉或飲料即可成為輕午餐。", timing: "Münstergasse／Minster 前後", portion: "一人一小塊；之後仍能繼續上坡。", diet: "奶製品、蛋和麩質；素食者通常可選。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Berner Rösti", category: "經典主食", imageQuery: "Rösti", imageFallback: "Swiss potato rosti", summary: "Bern 版本強調酥脆金黃的馬鈴薯外殼，傳統做法可能加入豬油、培根、奶酪或煎蛋。", taste: "先確認配料；想吃出重點可選較簡單的 bacon／egg 版本。", timing: "Old City 午餐，或 City Walk 結束後的早晚餐", portion: "偏飽；點 Rösti 後不必再加 fondue。", diet: "可做素食，但傳統版本未必素食；需主動詢問。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Bärner Platte", category: "傳統重菜", imageQuery: "Berner Platte", imageFallback: "Bernese platter Switzerland", summary: "由香腸、培根、火腿、豬肋、酸菜和幹豆組成的豐盛拼盤，與 1798 年 Neuenegg 戰役後的慶祝傳說相關。", taste: "把它當成一道歷史型共享餐，不是普通肉拼盤。", timing: "完整版結束後的晚餐最合適", portion: "非常重，建議兩人分享或先確認份量；不適合步行中段。", diet: "高肉量、高鹽；不適合素食者和只想輕食的人。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Suure Mocke", category: "慢燉主菜", imageQuery: "Sauerbraten mashed potatoes", imageFallback: "Swiss braised beef", summary: "經過酸味醃製後長時間燉煮的牛肉，通常配馬鈴薯泥和肉汁，是家庭式星期日料理。", taste: "比 Bärner Platte 更像完整的一人份主菜，酸香和濃肉汁是重點。", timing: "Old City 晚餐；不要安排成快速補給", portion: "正常正餐份量但較厚重。", diet: "牛肉菜；醬汁可能含酒、奶油或麩質，過敏者詢問。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Bärner Läbchueche", category: "甜點／伴手禮", imageQuery: "Lebkuchen", imageFallback: "Swiss gingerbread", summary: "Bern 風格的蜂蜜榛果軟薑餅；調味較剋制，主要以肉桂和蜂蜜呈現。", taste: "買小塊當天吃，裝飾完整的版本更適合作伴手禮。", timing: "Marktgasse／Kramgasse 拱廊段", portion: "甜度集中，適合配無糖咖啡。", diet: "通常含堅果、蜂蜜與麩質。", officialUrl: "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself" },
          { name: "Mandelbärli", category: "Bern 小甜點", imageQuery: "Mandelbärli Bern", imageFallback: "almond cake Switzerland", summary: "Confiserie Glatz 在 1989 年推出的熊形杏仁小蛋糕，體積小、辨識度高，是最方便隨身攜帶的 Bern 甜點之一。", taste: "原味最能判斷杏仁蛋糕質地，也可選巧克力版本。", timing: "Bärenplatz／Old City 段購買，Rosengarten 再吃", portion: "一人一個或買組合裝帶走。", diet: "含杏仁，通常含蛋、奶油和麩質。", officialUrl: "https://bern.com/en/explore/food-drink/chocolate" },
          { name: "Bern chocolate", category: "巧克力文化", imageQuery: "Swiss chocolate pralines", imageFallback: "Toblerone Bern chocolate", summary: "Lindt 的 conching 技術、Toblerone、Ovomaltine 與 Ragusa 都和 Bern 有歷史聯繫；今天 Old City 仍有獨立 chocolatier。", taste: "不要只買全球通路款；可選一兩顆 praline 或本地 bean-to-bar 小包裝比較。", timing: "Kramgasse 甜點停留或返程伴手禮", portion: "少量品嚐比一次買大盒更適合 City Walk。", diet: "堅果、乳製品和大豆過敏者逐項查看標示。", officialUrl: "https://bern.com/en/explore/food-drink/chocolate" },
        ],
        routePlan: [
          { checkpoint: "Bern Bahnhof → Bundesplatz", suggestion: "先吃 Anke-Züpfe 或買一份當天麵包；若適逢星期二／六上午，在 Bundesplatz 與 Bärenplatz 市集看奶酪、烘焙、蜂蜜和農產品。" },
          { checkpoint: "Zytglogge → Kramgasse", suggestion: "安排一份 Mandelbärli、Läbchueche 或兩三顆 praline；這是甜點和伴手禮最自然的路段。" },
          { checkpoint: "Münstergasse → Minster", suggestion: "需要輕午餐時選 Chäschueche；星期二／六的 Münstergasse gourmet market 還有肉食、魚、奶酪、烘焙和 Emmental 地區產品。" },
          { checkpoint: "BearPark → Rosengarten／返回 Old City", suggestion: "City Walk 完成後再決定 Rösti、Suure Mocke 或 Bärner Platte；三者只選一道重菜。想輕鬆收尾則保留 café、啤酒或甜點。" },
        ],
        marketNote: "Bern 周市集通常全年於星期二和星期六舉行，主要分佈在 Bundesplatz、Bärenplatz、Waisenhausplatz、Münstergasse 及鄰近街巷；攤位和假日安排仍須臨行確認。星期日一般零售選擇較少，可優先依靠車站店鋪、餐廳和開放的 café。",
        sources: [
          resource("Bernese specialties", "https://bern.com/en/news/stories-and-recommendations/bernese-specialities-to-cook-yourself", "官方美食指南"),
          resource("Bern farmer's markets", "https://bern.com/en/news/stories-and-recommendations/berns-farmers-markets", "官方市集指南"),
          resource("Bern — city of chocolate", "https://bern.com/en/explore/food-drink/chocolate", "官方巧克力指南"),
        ],
      },
      background: ["Bern 老城位於 Aare 河彎形成的半島上，街道軸線由西向東延伸。", "Lauben 拱廊讓雨天步行仍具連續性；河谷與高地視角則解釋了城市防禦和擴張。"],
      resources: [resource("Bern Old Town", "https://www.bern.com/en/detail/old-town-of-bern"), resource("Einstein House", "https://www.einstein-bern.ch/?lang=en&show=haus"), resource("Bern-Ticket", "https://bern.com/en/inform/bern-ticket/"), resource("Aare 安全說明", "https://bern.com/en/news/stories-and-recommendations/aare")],
    },
    interlaken: {
      whyChoose: "想要低強度、交通簡單的山谷門戶，也想保留現場加入滑翔傘或短船的彈性。",
      skipWhen: "若主要期待高山景觀卻遇到低雲，可改城市模塊；若已有明確山村目標，不必把 Interlaken 當強制景點。",
      attractions: [
        attraction("Unterseen Old Town", "跨過 Aare 後的小型老城，尺度比 Höheweg 安靜，適合從 Interlaken West 開始。", "35–50 分鐘", "公共街區全天", "免費", "無需預約", "石板路與橋面雨天溼滑", "https://www.interlaken.ch/en/experiences/poi/unterseen-old-town", 46.6854, 7.8476, "Unterseen old town"),
        attraction("Höhematte", "大片公共草地把城市、滑翔傘降落區與 Jungfrau 遠景放在同一畫面。", "30–50 分鐘", "公共空間全天", "免費", "無需預約", "不要進入標示的降落區域", "https://www.interlaken.ch/en/experiences/poi/hohematte-park", 46.6867, 7.8587, "Hohematte Interlaken"),
        attraction("Harder Kulm", "Interlaken 上方觀景臺，可同時看 Thun 與 Brienz 兩湖；只有能見度好時才值得加。", "1.5–2.5 小時", "纜車季節營運；查當天班次", "票價臨行查 Jungfrau 頁面", "旺季可預購，仍須看天氣", "谷站在 Aare 北岸；記錄末班下山", "https://www.jungfrau.ch/en-gb/harder-kulm/", 46.6975, 7.8512, "Harder Kulm"),
      ],
      dining: [
        dining("主餐", "Hüsi Bierhaus", "Unterseen 與中心之間", "瑞士家常菜、啤酒與漢堡", "約 CHF 25–45", "臨行查官網", "晚餐建議訂位", "https://www.huesi-bierhaus.ch/", 46.6863, 7.8586),
        dining("快速補給", "Little Thai", "Höhematte 西側", "泰式飯面和外帶", "約 CHF 18–35", "營業日可能變化", "小店座位有限", "https://littlethai.ch/", 46.6868, 7.8568),
        dining("咖啡休息", "Grand Café Schuh", "Höheweg 中段", "咖啡、巧克力與輕食", "約 CHF 10–30", "臨行確認", "一般無需訂位", "https://www.schuh-interlaken.ch/", 46.6865, 7.8598),
      ],
      background: ["Interlaken 位於 Thun 與 Brienz 兩湖之間的沖積平原，是前往 Jungfrau 地區的換乘中心。", "城市本身的價值在於門戶地理與低強度緩衝，而不是用景點數量取勝。"],
      resources: [resource("Interlaken Tourism", "https://www.interlaken.ch/en"), resource("Harder Kulm", "https://www.jungfrau.ch/en-gb/harder-kulm/")],
    },
    lauterbrunnen: {
      whyChoose: "想看 U 形冰川穀、垂直巖壁和瀑布，而且願意把一天集中在谷底。",
      skipWhen: "低雲完全遮住巖壁、雷雨、高水位封閉步道或 Trümmelbach 停運時，改城市／湖區模塊。",
      attractions: [
        attraction("Staubbach Falls", "近 300 米高的自由落瀑布，是從車站進入山谷後最清晰的尺度參照。", "25–45 分鐘", "外觀全天；後方步道季節開放", "免費", "無需預約", "瀑布後方步道溼滑且可能關閉", "https://www.jungfrau.ch/en-gb/lauterbrunnen/staubbach-falls/", 46.5894, 7.9061, "Staubbach Falls"),
        attraction("Lauterbrunnen Valley Trail", "沿 Lütschine 河與牧場向南，持續觀察兩側巖壁、瀑布和村落關係。", "1–2.5 小時", "開放步道全天", "免費", "無需預約", "遇雷雨立即離開開闊地；尊重農地", "https://jungfrau.ch/en-gb/lauterbrunnen/", 46.5795, 7.9077, "Lauterbrunnen valley"),
        attraction("Trümmelbach Falls", "冰川融水在山體內部形成的多層瀑布系統，聲音與水量比外觀攝影更重要。", "60–90 分鐘", "季節開放，確切日期與時段查官網", "成人票價臨行確認", "通常現場購票", "大量臺階、溼滑且不適合嬰幼兒；入口可能因水量關閉", "https://www.truemmelbachfaelle.ch/e/", 46.5710, 7.9144, "Trummelbach Falls"),
      ],
      dining: [
        dining("主餐", "Hotel Oberland Restaurant", "村中心、車站與瀑布之間", "瑞士菜、rösti 與素食選項", "約 CHF 25–45", "臨行查官網", "午餐高峰建議訂位", "https://www.hoteloberland.ch/", 46.5938, 7.9075),
        dining("主餐", "Weidstübli", "村南、山谷步道起點附近", "瑞士家常菜與奶酪菜", "約 CHF 25–45", "季節時段須確認", "晚餐建議訂位", "https://www.campingjungfrau.swiss/en/restaurant", 46.5949, 7.9080),
      ],
      background: ["Lauterbrunnen 是典型冰川 U 形谷，陡壁上的懸谷形成多條瀑布。", "谷底村落是 Wengen、Mürren 和 Jungfraujoch 的分流點，模塊化規劃可避免無意識疊加過多上山交通。"],
      resources: [resource("Lauterbrunnen Tourism", "https://jungfrau.ch/en-gb/lauterbrunnen/"), resource("Trümmelbach Falls", "https://www.truemmelbachfaelle.ch/e/")],
    },
    wengen: {
      whyChoose: "希望在無車山村慢走，並從高位俯瞰 Lauterbrunnen Valley，而不是衝擊山頂項目。",
      skipWhen: "山谷完全被低雲遮住、鐵路受阻，或不適應連續坡道時，留在谷底或改 Thun。",
      attractions: [
        attraction("Wengen Village", "無車村落主街、木屋與旅館構成 Belle Époque 旅遊史和當代山村生活的混合。", "60–90 分鐘", "公共街區全天", "免費", "無需預約", "行李車和電動車仍會通行", "https://wengen.swiss/en/", 46.6055, 7.9218, "Wengen village"),
        attraction("Wengen Church viewpoint", "教堂外緣是最容易抵達的 Lauterbrunnen Valley 高位視角。", "25–40 分鐘", "外部空間全天；禮拜時保持安靜", "免費", "無需預約", "邊坡和冬季結冰需留意", "https://wengen.swiss/en/map/detail/wengen-church-1d970c70-0609-40ca-960a-8627dd40c534.html", 46.6037, 7.9212, "Wengen church view"),
        attraction("Männlichen（可選延伸）", "纜車上至寬闊山脊，可看 Eiger–Mönch–Jungfrau；只在晴朗且有足夠回程時間時加入。", "2–4 小時", "纜車季節營運", "票價臨行確認", "旺季可預購", "強風會停運；Royal Walk 有上坡", "https://www.maennlichen.ch/en/", 46.6182, 7.9386, "Mannlichen Wengen"),
      ],
      dining: [
        dining("主餐", "Restaurant Bären", "村南、教堂前後", "區域菜與季節菜單", "約 CHF 30–55", "依酒店季節營業", "建議訂位", "https://www.baeren-wengen.ch/en/restaurant", 46.6057, 7.9226),
        dining("咖啡休息", "Hotel Schönegg terrace", "村中心上方", "咖啡、甜點與輕食", "約 CHF 12–35", "臨行確認非住客時段", "景觀位建議詢問", "https://www.hotel-schoenegg.ch/en/", 46.6053, 7.9216),
      ],
      background: ["Wengen 位於 Lauterbrunnen 谷東側臺地，只能由齒軌鐵路和步道連接。", "其景觀價值來自高位觀察谷底，而不是單個紀念性建築。"],
      resources: [resource("Wengen Tourism", "https://wengen.swiss/en/"), resource("Männlichen", "https://www.maennlichen.ch/en/")],
    },
    muerren: {
      whyChoose: "願意接受較多轉乘，換取無車高山村落與 Eiger–Mönch–Jungfrau 正面對景。",
      skipWhen: "大風、低雲、雷雨或 Grütschalp 線異常時；不要把 Schilthorn 當現場強加項目。",
      attractions: [
        attraction("Mürren Village Walk", "從 BLM 車站穿過木屋、旅館和農地，主峰對景貫穿村落。", "60–100 分鐘", "公共街區全天", "免費", "無需預約", "村內有服務車輛；坡道與碎石路需穩健鞋", "https://muerren.swiss/en/", 46.5596, 7.8926, "Murren village"),
        attraction("Allmendhubel", "短程 funicular 上至花徑和觀景平臺，適合比 Schilthorn 更輕量的延伸。", "1.5–3 小時", "季節營運", "票價臨行確認", "通常無需訂位", "末班和步道狀態必須在上山前確認", "https://schilthorn.ch/en/Infos/Allmendhubel", 46.5654, 7.8821, "Allmendhubel"),
        attraction("Northface Trail 起段", "村外步道以草坡、農舍和北壁景觀為主；可以只走短段後原路返回。", "45–120 分鐘", "步道開放依積雪與天氣", "免費", "無需預約", "雷雨或溼滑時取消；不要用城市鞋", "https://muerren.swiss/en/summer/hiking/", 46.5672, 7.8910, "Murren Northface Trail"),
      ],
      dining: [
        dining("主餐", "Hotel Edelweiss Restaurant", "村中段、山谷邊緣", "瑞士菜與景觀露臺", "約 CHF 28–50", "酒店季節營業", "景觀位建議訂位", "https://www.edelweiss-muerren.ch/en/restaurant", 46.5593, 7.8923),
        dining("主餐", "Stägerstübli", "村中心", "rösti、奶酪與山區家常菜", "約 CHF 25–45", "臨行確認休息日", "晚餐建議訂位", "https://www.staegerstuebli.ch/", 46.5597, 7.8920),
      ],
      background: ["Mürren 位於 Lauterbrunnen 谷西側懸崖臺地，BLM 路線由纜車和窄軌鐵路組成。", "村落無一般道路直通，轉乘本身就是空間體驗的一部分。"],
      resources: [resource("Mürren Tourism", "https://muerren.swiss/en/"), resource("Schilthorn cableways", "https://schilthorn.ch/en")],
    },
    gimmelwald: {
      whyChoose: "喜歡規模很小的農舍村、慢節奏和少商業化環境，可接受長交通換短停留。",
      skipWhen: "只想密集看景點、纜車受風停運、或雨後坡道溼滑時；餐飲少也不適合臨時空腹前往。",
      attractions: [
        attraction("Gimmelwald village", "幾十棟農舍散佈在陡坡上，重點是村落尺度、農業景觀和山谷視線。", "60–90 分鐘", "公共街區全天", "免費", "無需預約", "私人農地和住宅勿闖入；保持安靜", "https://muerren.swiss/en/discover/gimmelwald/", 46.5470, 7.8907, "Gimmelwald village"),
        attraction("Honesty Shop / village produce", "以自助小店和本地產品觀察小型山村的生活網絡。", "15–25 分鐘", "開放與庫存不固定", "按標價付款", "無需預約", "準備少量現金並尊重自助規則", "https://muerren.swiss/en/discover/gimmelwald/", 46.5474, 7.8912, "Gimmelwald Switzerland"),
        attraction("Gimmelwald–Mürren trail", "約兩公里上坡連接兩個無車村，是把 Gimmelwald 擴展成半日的自然方式。", "60–90 分鐘", "依積雪、雨水和維護狀態", "免費", "無需預約", "持續上坡；不想爬升則搭纜車", "https://muerren.swiss/en/summer/hiking/", 46.5532, 7.8913, "Gimmelwald Murren trail"),
      ],
      dining: [
        dining("快速補給", "Gimmelwald Pension restaurant", "村中心附近", "簡餐、飲料與山區菜", "約 CHF 15–35", "營業具有季節性，務必臨行確認", "團體建議聯繫", "https://www.pensiongimmelwald.ch/", 46.5483, 7.8669),
        dining("咖啡休息", "Mountain Hostel Gimmelwald", "纜車站附近", "飲料、輕食與披薩（按季節）", "約 CHF 10–30", "季節營業", "一般無需訂位；先確認開放", "https://www.mountainhostel.ch/", 46.5471, 7.8904),
      ],
      background: ["Gimmelwald 在 Mürren 下方的山坡臺地，長期以農業與小型住宿為主。", "其吸引力來自完整環境而非單一地標，因此慢走和尊重社區比打卡更重要。"],
      resources: [resource("Gimmelwald Tourism", "https://muerren.swiss/en/discover/gimmelwald/"), resource("Schilthorn cableways", "https://schilthorn.ch/en")],
    },
    "grindelwald-village": {
      whyChoose: "想看 Eiger 山腳生活、村落和冰川地貌，但不想把預算與體力都押在 First 或 Jungfraujoch。",
      skipWhen: "持續大雨令峽谷與步道關閉，或唯一目標是高山觀景而能見度為零時。",
      attractions: [
        attraction("Grindelwald Dorfstrasse", "從車站沿村道觀察木屋、旅館與 Eiger 北壁形成的山腳聚落。", "60–90 分鐘", "公共街區全天", "免費", "無需預約", "主路有車輛；使用人行道", "https://grindelwald.swiss/en/", 46.6244, 8.0410, "Grindelwald village"),
        attraction("Glacier Canyon", "冰川侵蝕形成的狹谷，以棧道近距離觀察巖壁與水流。", "1–2 小時", "季節與天氣開放", "門票臨行查官網", "一般可現場購票", "溼滑、噪音大；洪水或維護會關閉", "https://www.gletscherschlucht.ch/en", 46.6056, 8.0464, "Grindelwald glacier canyon"),
        attraction("Pfingstegg", "村東短程纜車上至草坡和山谷觀景點，可作為比 First 更短的高處延伸。", "2–3 小時", "季節營運", "票價臨行確認", "活動項目可預購", "強風停運；記錄末班", "https://www.pfingstegg.ch/en/", 46.6107, 8.0548, "Pfingstegg Grindelwald"),
      ],
      dining: [
        dining("主餐", "Barry's", "Dorfstrasse 中段", "山區燒烤、瑞士菜與素食", "約 CHF 30–55", "臨行查官網", "晚餐建議訂位", "https://www.barrysrestaurant.ch/en", 46.6247, 8.0418),
        dining("咖啡休息", "C und M Café Bar Restaurant", "Firstbahn 附近", "咖啡、蛋糕與簡餐", "約 CHF 12–35", "臨行確認", "繁忙時段可訂位", "https://www.cundm-grindelwald.ch/", 46.6241, 8.0452),
      ],
      background: ["Grindelwald 位於 Eiger 北側山谷，是鐵路、Firstbahn 與 Jungfraujoch V-Bahn 的分流點。", "把村落與高山模塊拆開，可以在低雲日仍保留山腳地貌和生活景觀。"],
      resources: [resource("Grindelwald Tourism", "https://grindelwald.swiss/en/"), resource("Glacier Canyon", "https://www.gletscherschlucht.ch/en")],
    },
    "grindelwald-first": {
      whyChoose: "能見度好、願意步行並想把纜車、懸崖棧道、山湖和一項山地活動集中在一天。",
      skipWhen: "強風、雷暴、山頂雲封、Bachalpsee 步道積雪或 Firstbahn／活動線停運時。",
      attractions: [
        attraction("First Cliff Walk", "貼近巖壁的金屬棧道與懸挑平臺，是無需長途徒步的主要觀景點。", "30–50 分鐘", "隨 Firstbahn 開放，天氣可臨時關閉", "通常含在 First 纜車到達範圍；票種查官網", "纜車票可預購", "恐高者可繞開；溼滑和擁擠時放慢", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/first-cliff-walk-by-tissot/", 46.6600, 8.0535, "First Cliff Walk"),
        attraction("Bachalpsee", "從 First 往返的高山湖步道，以 Schreckhorn 倒影和草坡地形為主要價值。", "2–3 小時往返", "步道依積雪、雷雨和維護開放", "免費（需先到 First）", "無需預約", "約 6 公里往返並有起伏；補水、防曬", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/bachalpsee/", 46.6690, 8.0249, "Bachalpsee"),
        attraction("First Flyer / Glider", "高速飛索或鷹形吊掛活動；只選一項，排隊時間可能顯著。", "45–120 分鐘", "依風、雨、容量即時營運", "單項或套票從官網查詢", "旺季建議提前購買，但不保證因天氣開放", "有身高體重與裝備限制；以現場判定為準", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/adventure-package/", 46.6590, 8.0570, "First Flyer Grindelwald"),
      ],
      dining: [
        dining("主餐", "Berggasthaus First", "First 纜車頂站", "熱食、瑞士山區菜與露臺", "約 CHF 25–45", "隨纜車季節營業", "一般無需訂位；團體除外", "https://www.bergrestaurant-first.ch/", 46.6590, 8.0570),
        dining("咖啡休息", "Bergrestaurant Bort", "下山中段", "輕食、甜點與熱飲", "約 CHF 12–35", "隨纜車季節營業", "繁忙午餐可詢問", "https://www.bergrestaurant-bort.ch/", 46.6428, 8.0445),
      ],
      background: ["First 位於 Grindelwald 北側山坡，與 Eiger 對望；Bachalpsee 則在更高的草坡臺地。", "山地活動的營運邏輯由風速、溼度和容量決定，票券不等於項目必開。"],
      resources: [resource("Grindelwald-First 官方", "https://www.jungfrau.ch/en-gb/grindelwaldfirst/"), resource("票價與套票", "https://www.jungfrau.ch/en-gb/prices-and-tickets/")],
    },
    jungfraujoch: {
      whyChoose: "預報顯示山頂能見度好、願意承擔高費用與高海拔，並把全天只留給冰川和高山鐵路。",
      skipWhen: "山頂實時畫面雲封、鐵路異常、強風，或同行者有不適合快速上升至 3,454 米的健康狀況。",
      attractions: [
        attraction("Sphinx viewing terrace", "高速電梯到達高位觀景臺，觀察 Aletsch Glacier 與高阿爾卑斯地形。", "30–45 分鐘", "隨站區和天氣開放", "含在 Jungfraujoch 訪問範圍", "按官方要求預訂交通座位", "強風或結冰可關閉室外平臺", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/sphinx-observation-deck/", 46.5475, 7.9855, "Sphinx Jungfraujoch"),
        attraction("Ice Palace", "在冰體內部通行的雕塑與廊道，強調冰川作為物質空間而非僅遠景。", "25–40 分鐘", "隨站區開放", "含在訪問範圍", "無需另訂", "地面溼滑；慢走並使用扶手", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/ice-palace/", 46.5474, 7.9852, "Jungfraujoch Ice Palace"),
        attraction("Alpine Sensation", "連接站區的展覽動線，解釋鐵路建設史與山區旅遊發展。", "20–35 分鐘", "隨站區開放", "含在訪問範圍", "無需另訂", "可作為室外平臺關閉時的室內替代", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/alpine-sensation/", 46.5473, 7.9850, "Alpine Sensation Jungfraujoch"),
        attraction("Plateau", "雪面近距離觀景區；與室內站區相比更直接感受高海拔風、冷和紫外線。", "15–30 分鐘", "僅在天氣及安全條件允許時", "含在訪問範圍", "無需另訂", "不要越過圍欄；出現頭痛、噁心立即返回室內並下降", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/", 46.5469, 7.9847, "Jungfraujoch Plateau"),
      ],
      dining: [
        dining("主餐", "Restaurant Crystal", "Jungfraujoch 站區", "瑞士及國際熱食", "約 CHF 30–55", "隨站區營運", "團體建議查詢", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/restaurants/", 46.5475, 7.9855),
        dining("快速補給", "Aletsch Self-Service", "站區動線內", "自助熱食、飲料與點心；高峰可能排隊", "約 CHF 15–35", "隨站區營運", "無需訂位；仍自備少量能量食品", "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/restaurants/", 46.5473, 7.9852),
      ],
      background: ["Jungfraujoch 鐵路終點位於 Mönch 與 Jungfrau 之間的山坳，站區海拔約 3,454 米。", "Aletsch Glacier 屬於阿爾卑斯最大冰川系統；高價交通的核心是工程與地理到達，而不是遊樂園式項目數量。"],
      resources: [resource("Jungfraujoch 到達方式", "https://www.jungfrau.ch/en-gb/arriving/"), resource("價格與票券", "https://www.jungfrau.ch/en-gb/prices-and-tickets/"), resource("實時狀況", "https://www.jungfrau.ch/en-gb/live/")],
    },
  };

  const secondBatch = {
    thun: {
      whyChoose: "想要從 Bern 輕鬆往返，在河流、老城、城堡和湖口之間獲得完整但低風險的半日。",
      skipWhen: "若目標只是坐船，應直接選 Lake Thun cruise；嚴重暴雨時取消 Schadau 長走。",
      attractions: [
        attraction("Thun Old Town", "Aare 兩岸、Rathausplatz 與高架人行道形成緊湊的商業老城。", "60–90 分鐘", "公共街區全天", "免費", "無需預約", "高架人行道有臺階", "https://www.thun.ch/en/tourism/old-town", 46.7581, 7.6290, "Thun old town"),
        attraction("Thun Castle", "十二世紀城堡主塔高於老城，是理解 Zähringen 城市和 Lake Thun 戰略位置的核心。", "60–90 分鐘", "開放日與時段隨季節", "成人票價臨行確認", "一般可現場購票", "由老城上坡且塔內多臺階", "https://schlossthun.ch/en/", 46.7590, 7.6300, "Thun Castle"),
        attraction("Schadau Park", "Aare 流入 Lake Thun 的湖口公園，可看到 Alps、湖岸與 Schadau Castle。", "45–75 分鐘", "公園全天", "公園免費", "無需預約", "由車站步行約 20 分鐘；風雨時縮短", "https://www.thun.ch/en/leisure/schadaupark", 46.7395, 7.6265, "Schadau Park Thun"),
      ],
      dining: [
        dining("主餐", "Restaurant Schloss Schadau", "Schadau 湖畔收尾", "季節菜、瑞士及歐洲料理", "約 CHF 35–70", "臨行查官網", "強烈建議訂位", "https://www.schloss-schadau.ch/en/restaurant", 46.7395, 7.6265),
        dining("咖啡休息", "Mühleplatz cafés", "Aare 與老城中段", "咖啡、甜點、輕食", "約 CHF 10–30", "各店時段不同", "一般無需訂位", "https://www.thun.ch/en/tourism/gastronomy", 46.7578, 7.6295),
      ],
      background: ["Thun 位於 Aare 流出 Lake Thun 的位置，既是水路節點也是 Bernese Oberland 門戶。", "城堡高點、老城與 Schadau 湖口構成清晰的縱向路線。"],
      resources: [resource("Thun Tourism", "https://www.thun.ch/en/tourism"), resource("Thun Castle", "https://schlossthun.ch/en/")],
    },
    "lake-thun": {
      whyChoose: "需要恢復節奏，希望湖畔與 Alps 景觀佔主角，但不把船班當成行程唯一支點。",
      skipWhen: "持續風雨令湖景價值很低，或當天時間不足以同時處理 Spiez 與 Thun 兩端。",
      attractions: [
        attraction("Spiez Bay", "葡萄園、城堡、港灣與 Niesen 山形成 Lake Thun 最緊湊的湖畔構圖。", "60–90 分鐘", "湖岸全天", "免費", "無需預約", "車站到湖邊下坡明顯，回程可搭 bus", "https://www.spiez.com/en", 46.6859, 7.6815, "Spiez bay"),
        attraction("Spiez Castle", "城堡與教堂展示湖區領主史，塔樓和花園提供港灣俯瞰。", "60–90 分鐘", "季節開放", "門票臨行確認", "一般現場購票", "冬季可能關閉；塔內有樓梯", "https://www.schloss-spiez.ch/en", 46.6850, 7.6870, "Spiez Castle"),
        attraction("Schadau lakeshore", "Thun 一端的平緩湖岸，適合不坐船的低強度散步。", "45–75 分鐘", "公園全天", "免費", "無需預約", "強日照時遮陰有限", "https://www.thun.ch/en/leisure/schadaupark", 46.7395, 7.6265, "Schadau Lake Thun"),
      ],
      dining: [
        dining("主餐", "Restaurant Seegarten Marina Spiez", "Spiez 港灣", "魚類、沙拉與季節菜", "約 CHF 30–55", "季節時段查官網", "露臺建議訂位", "https://www.seegarten-marina.ch/", 46.6862, 7.6862),
        dining("咖啡休息", "Spiez harbour café", "城堡與碼頭之間", "咖啡、冰淇淋與輕食", "約 CHF 8–25", "季節營業", "無需訂位", "https://www.spiez.com/en/experiences/food-drink", 46.6855, 7.6850),
      ],
      background: ["Lake Thun 位於 Bernese Alps 北緣，西端由 Aare 流向 Bern，東端連接 Interlaken。", "鐵路沿南岸快速連接各節點，因此不坐船也能完成可靠的湖區模塊。"],
      resources: [resource("Lake Thun / BLS", bls), resource("Spiez Tourism", "https://www.spiez.com/en")],
    },
    iseltwald: {
      whyChoose: "想用半天看 Lake Brienz 南岸的小村、木屋和湖色，接受班次較少的節奏。",
      skipWhen: "只有很短時間、bus/boat 銜接差、強風大雨或村內擁擠已影響體驗時。",
      attractions: [
        attraction("Iseltwald village lane", "小型漁農村街巷與木屋緊貼湖岸，適合慢走而非追逐很多點。", "45–75 分鐘", "公共街區全天", "免費", "無需預約", "住宅區保持安靜，勿堵塞道路", "https://www.interlaken.ch/en/experiences/poi/iseltwald", 46.7108, 7.9643, "Iseltwald village"),
        attraction("Iseltwald harbour", "bus、船與湖畔步道交會點，可觀察 Lake Brienz 的水色和對岸山坡。", "30–45 分鐘", "公共碼頭全天；船季節營運", "湖岸免費", "船票另購", "先確認回程 bus，不以船為唯一退路", bls, 46.7114, 7.9647, "Iseltwald harbour"),
        attraction("Seeburg viewpoint", "半島上的城堡外觀是村落標誌，但屬於私人區域，重點是公共岸線視角。", "20–30 分鐘", "僅從公共區域觀看", "免費", "不可進入私人區域", "不要越界拍攝或放無人機", "https://www.interlaken.ch/en/experiences/poi/iseltwald", 46.7099, 7.9660, "Seeburg Iseltwald"),
      ],
      dining: [
        dining("主餐", "Hotel Chalet du Lac Restaurant", "村口及湖邊", "魚類、瑞士菜與湖景露臺", "約 CHF 28–50", "季節營業", "午餐建議訂位", "https://www.chaletdulac.ch/en/", 46.7112, 7.9631),
        dining("咖啡休息", "Iseltwald harbour kiosk/café", "碼頭等候段", "飲料、冰淇淋與簡餐", "約 CHF 6–20", "高度季節性，臨行確認", "無需訂位", "https://www.interlaken.ch/en/experiences/food-drink", 46.7114, 7.9647),
      ],
      background: ["Iseltwald 位於 Lake Brienz 南岸，陸路主要依靠從 Interlaken Ost 出發的 bus。", "小村容量有限，模塊設計應留出等待與安靜停留，而不是強行追加 Giessbach。"],
      resources: [resource("Iseltwald Tourism", "https://www.interlaken.ch/en/experiences/poi/iseltwald"), resource("BLS 船班", bls)],
    },
    "lake-brienz": {
      whyChoose: "把 turquoise 湖色、Brienz 木雕傳統或 Giessbach 瀑布選作唯一主線，願意按季節班次取捨。",
      skipWhen: "船班稀少且陸路備份不清楚，或強風大雨令湖岸與瀑布步道都失去安全性。",
      attractions: [
        attraction("Brienz lakeside", "北岸村落的連續湖濱步道、木屋與木雕文化，是最可靠的陸路主節點。", "60–90 分鐘", "公共湖岸全天", "免費", "無需預約", "車站附近即可開始；強日照注意防曬", "https://www.interlaken.ch/en/experiences/poi/brienz", 46.7540, 8.0380, "Brienz village lake"),
        attraction("Giessbach Falls", "多層瀑布從森林陡坡下降到湖岸，可由船與古老 funicular 接近。", "1.5–3 小時", "步道、船與 funicular 季節營運", "步道免費；交通另購", "船班少時先鎖定銜接", "瀑布噴霧使石階溼滑", "https://www.giessbach.ch/en/nature-experience/giessbach-falls", 46.7333, 8.0208, "Giessbach Falls"),
        attraction("Swiss Woodcarving Museum", "以 Brienz 的木雕教育與手工傳統補足湖景之外的文化內容。", "60–90 分鐘", "季節開放，查官網", "門票臨行確認", "一般現場購票", "開放日有限，勿把它設為唯一目的", "https://www.museum-holzbildhauerei.ch/en/", 46.7543, 8.0366, "Brienz woodcarving"),
      ],
      dining: [
        dining("主餐", "Grandhotel Giessbach restaurant", "Giessbach 延伸段", "季節菜、瑞士菜與湖景", "約 CHF 35–70", "隨酒店季節營業", "建議訂位", "https://www.giessbach.ch/en/restaurants", 46.7333, 8.0203),
        dining("咖啡休息", "Brienz lakeside cafés", "車站至湖岸段", "咖啡、烘焙與輕食", "約 CHF 10–30", "各店營業不同", "通常無需訂位", "https://www.interlaken.ch/en/experiences/food-drink", 46.7538, 8.0385),
      ],
      background: ["Lake Brienz 較深，冰川沉積物令湖水呈現明亮藍綠色。", "北岸有鐵路，南岸主要靠 bus 和季節船班；路線可靠性在兩岸明顯不同。"],
      resources: [resource("Lake Brienz / BLS", bls), resource("Giessbach", "https://www.giessbach.ch/en/")],
    },
    lucerne: {
      whyChoose: "想要一整天城市文化、湖岸和室內外彈性，不依賴高山能見度。",
      skipWhen: "若當天只剩半天，Bern 往返後會太趕；不要臨時疊加完整 Pilatus 或 Rigi。",
      attractions: [
        attraction("Chapel Bridge", "十四世紀木橋與水塔跨越 Reuss，是城市貿易、防禦和重建記憶的入口。", "30–45 分鐘", "公共通道全天", "免費", "無需預約", "繁忙時不要停在狹窄通道中央", "https://www.luzern.com/en/poi/chapel-bridge-and-water-tower", 47.0517, 8.3071, "Chapel Bridge Lucerne"),
        attraction("Lucerne Old Town", "彩繪立面、廣場與 Reuss 河岸組成可步行的歷史核心。", "60–100 分鐘", "公共街區全天", "免費", "無需預約", "週末與團客高峰較擁擠", "https://www.luzern.com/en/highlights/the-city/lucernes-old-town", 47.0525, 8.3055, "Lucerne old town"),
        attraction("Lion Monument", "十九世紀為陣亡瑞士衛兵雕刻的紀念碑，適合結合民族記憶與旅遊史理解。", "20–35 分鐘", "公共空間全天", "免費", "無需預約", "保持安靜，避開團客高峰", "https://www.luzern.com/en/poi/lion-monument", 47.0585, 8.3102, "Lion Monument Lucerne"),
        attraction("Swiss Museum of Transport", "交通、鐵路、航空與媒體的大型互動博物館，是雨天或家庭同行的完整替代。", "2.5–4 小時", "每日時段依官網", "票價臨行確認", "旺季可預購", "內容很大，不應與所有老城點同時硬塞", "https://www.verkehrshaus.ch/en", 47.0528, 8.3353, "Swiss Museum of Transport"),
      ],
      dining: [
        dining("主餐", "Rathaus Brauerei", "Chapel Bridge 北岸", "啤酒廠料理與瑞士菜", "約 CHF 25–45", "臨行查官網", "午晚餐建議訂位", "https://www.rathausbrauerei.ch/", 47.0518, 8.3058),
        dining("主餐", "Wirtshaus Galliker", "老城西側", "傳統 Lucerne 家常菜", "約 CHF 28–50", "休息日與假期須確認", "建議訂位", "https://www.galliker.ch/", 47.0508, 8.3047),
        dining("咖啡休息", "Heini Luzern", "老城／車站附近", "咖啡、糕點與輕食", "約 CHF 8–25", "分店時段不同", "無需訂位", "https://www.heini.ch/", 47.0522, 8.3078),
      ],
      background: ["Lucerne 位於 Reuss 河流出 Lake Lucerne 的位置，木橋連接兩岸市集和防禦體系。", "城市模塊應聚焦湖口、老城與記憶地標；山嶽鐵路另需一個完整系統。"],
      resources: [resource("Lucerne Tourism", "https://www.luzern.com/en"), resource("城市地圖與信息", "https://www.luzern.com/en/information")],
    },
    lausanne: {
      whyChoose: "需要受天氣影響較低的法語區城市日，喜歡大教堂、坡城、Lake Geneva 與體育文化。",
      skipWhen: "不願承受高低城坡度、無法安排完整一天，或 Olympic Museum 關閉而它又是首要目標時。",
      attractions: [
        attraction("Lausanne Cathedral", "瑞士重要哥特式教堂，高城位置可解釋中世紀宗教中心與現代坡城。", "45–70 分鐘", "禮拜與活動影響開放", "教堂通常免費；塔樓另計", "團體另查", "由車站上坡明顯，可搭 metro", "https://www.lausanne-tourisme.ch/en/explore/lausanne-cathedral/", 46.5228, 6.6358, "Lausanne Cathedral"),
        attraction("Escaliers du Marché", "有蓋木階梯連接商業街和 Cathedral，是坡度最具象的城市路徑。", "20–30 分鐘", "公共通道全天", "免費", "無需預約", "雨天台階溼滑", "https://www.lausanne-tourisme.ch/en/explore/market-stairs/", 46.5220, 6.6340, "Escaliers du Marche Lausanne"),
        attraction("The Olympic Museum", "以奧運歷史、設計、媒體與體育文化構成完整室內參觀。", "2–3 小時", "2026 通常 Tue–Sun 09:00–18:00；臨行確認", "成人參考 CHF 20", "可在線購票", "週一閉館規律與特別活動須再核對", "https://olympics.com/museum", 46.5086, 6.6339, "Olympic Museum Lausanne"),
        attraction("Ouchy promenade", "Lake Geneva 湖岸、港口和 Savoy Alps 遠景，為高城路線提供平緩收尾。", "45–75 分鐘", "公共湖岸全天", "免費", "無需預約", "夏季日照強；metro 可直返車站", "https://www.lausanne-tourisme.ch/en/explore/ouchy/", 46.5070, 6.6260, "Ouchy Lausanne"),
      ],
      dining: [
        dining("主餐", "Café de Grancy", "車站南側、前往 Ouchy 途中", "brunch、季節菜與素食", "約 CHF 25–45", "臨行查官網", "週末建議訂位", "https://cafedegrancy.ch/", 46.5160, 6.6280),
        dining("主餐", "Pinte Besson", "Old Town", "傳統 Vaud 菜與奶酪料理", "約 CHF 28–50", "臨行確認", "座位少，建議訂位", "https://www.pinte-besson.com/", 46.5220, 6.6330),
        dining("咖啡休息", "Olympic Museum TOM Café", "Ouchy／museum 段", "咖啡、輕食與湖景", "約 CHF 12–35", "隨 museum 時段", "繁忙時可能等位", "https://olympics.com/museum/visit/practical-information", 46.5086, 6.6339),
      ],
      background: ["Lausanne 從 Lake Geneva 岸邊急升至 Cathedral 高城，metro 是路線設計的一部分而非妥協。", "它同時是 Vaud 首府與國際奧林匹克委員會所在地，城市身份跨越宗教、教育和體育。"],
      resources: [resource("Lausanne Tourism", "https://www.lausanne-tourisme.ch/en/"), resource("Olympic Museum", "https://olympics.com/museum")],
    },
    fribourg: {
      whyChoose: "想要離 Bern 很近的雙語中世紀城市，用半天走 Cathedral、高低城和 Sarine 河橋。",
      skipWhen: "膝蓋不適且不願用 funicular/bus，或誤把目的地查成德國 Freiburg 時。",
      attractions: [
        attraction("St Nicholas Cathedral", "哥特式 Cathedral、彩繪玻璃和高塔主導高城天際線。", "45–75 分鐘", "禮拜與活動會限制參觀；塔樓季節開放", "教堂通常免費；塔樓收費", "團體另查", "塔樓臺階多；先確認開放", "https://www.fribourgtourisme.ch/en/P10752/st-nicholas-cathedral", 46.8061, 7.1631, "Fribourg Cathedral"),
        attraction("Lower Town", "從高城沿坡道下降到 Sarine 河谷，保存中世紀街巷與工匠區尺度。", "60–90 分鐘", "公共街區全天", "免費", "無需預約", "坡陡且石板溼滑；回程可用 funicular", "https://fribourg.ch/en/fribourg/architecture-and-monuments/the-lower-town/", 46.8040, 7.1680, "Fribourg lower town"),
        attraction("Pont de Berne", "有蓋木橋橫跨 Sarine，是下城防禦、交通與河谷景觀的關鍵節點。", "20–35 分鐘", "公共通道全天", "免費", "無需預約", "橋上仍有交通，留在人行區域", "https://fribourg.ch/en/fribourg/architecture-and-monuments/bern-bridge/", 46.8044, 7.1690, "Pont de Berne Fribourg"),
      ],
      dining: [
        dining("主餐", "Café du Gothard", "Cathedral 附近", "Fribourg 地方菜、fondue 與 rösti", "約 CHF 25–45", "臨行確認", "午晚餐建議訂位", "https://www.le-gothard.ch/", 46.8055, 7.1610),
        dining("咖啡休息", "Le Port de Fribourg", "Lower Town／Sarine 河邊", "咖啡、輕食與文化空間", "約 CHF 8–25", "季節與活動時段不固定", "通常無需訂位", "https://www.leport.ch/", 46.8032, 7.1681),
      ],
      background: ["Fribourg 建在 Sarine 河曲與砂岩高地上，德法語言邊界在城市生活中交會。", "高城宗教與行政中心、下城工匠區之間的落差，是路線的主要內容。"],
      resources: [resource("Fribourg Tourism", "https://fribourg.ch/en/fribourg/bienvenue-a-fribourg/"), resource("城市交通 TPF", "https://www.tpf.ch/en")],
    },
    gruyeres: {
      whyChoose: "願意為山丘中世紀村、城堡和 Gruyère 奶酪文化安排一整天，並接受多次轉乘。",
      skipWhen: "只有半天、Bulle 接續不穩，或期待安靜村落但正逢大型活動／客流高峰時。",
      attractions: [
        attraction("Gruyères Castle", "從中世紀堡壘到浪漫主義收藏的多時期城堡，是村落最完整的歷史主體。", "1.5–2 小時", "全年開放但時段隨季節", "成人票價臨行確認", "可線上或現場購票", "石階和高低差較多", "https://www.chateau-gruyeres.ch/en", 46.5847, 7.0833, "Gruyeres Castle"),
        attraction("Gruyères medieval village", "無車主街、城牆與山地景觀形成緊湊遊覽區。", "45–75 分鐘", "公共街區全天", "免費", "無需預約", "午間團客多；清晨或下午較松", "https://fribourg.ch/en/gruyeres/", 46.5838, 7.0828, "Gruyeres village"),
        attraction("La Maison du Gruyère", "車站旁展示奶酪生產、成熟和地區農業，可補足只吃 fondue 的表層體驗。", "60–90 分鐘", "開放與示範時間查官網", "門票臨行確認", "團體建議預約", "先看生產時段再決定參觀順序", "https://www.lamaisondugruyere.ch/en", 46.5820, 7.0726, "Maison du Gruyere"),
        attraction("HR Giger Museum", "超現實主義藝術館與中世紀村形成強烈反差；只適合對其視覺語言有興趣者。", "60–90 分鐘", "開放日與時段查官網", "門票臨行確認", "一般現場購票", "內容可能不適合兒童", "https://www.hrgigermuseum.com/", 46.5842, 7.0831, "HR Giger Museum"),
      ],
      dining: [
        dining("主餐", "Le Chalet de Gruyères", "村落主街", "fondue、raclette、rösti 與 meringue", "約 CHF 28–50", "臨行查官網", "午餐建議訂位", "https://www.chalet-gruyeres.ch/en/", 46.5835, 7.0830),
        dining("咖啡休息", "HR Giger Bar", "museum 對面", "飲料與簡餐、主題室內設計", "約 CHF 10–30", "時段與 museum 不完全相同", "一般無需訂位", "https://www.hrgigerbar.com/", 46.5841, 7.0830),
      ],
      background: ["Gruyères 位於通往阿爾卑斯山口的丘陵，城堡控制路線並形成領主中心。", "AOP 奶酪來自更廣的農業體系；村口的 cheese dairy 能把商品與生產地重新連接。"],
      resources: [resource("Gruyères Tourism", "https://fribourg.ch/en/gruyeres/"), resource("Gruyères Castle", "https://www.chateau-gruyeres.ch/en"), resource("Maison du Gruyère", "https://www.lamaisondugruyere.ch/en")],
    },
    gurten: {
      whyChoose: "只想用三至五小時獲得 Bern 全景、草地和輕量步道，或給高強度日程安排恢復。",
      skipWhen: "山頂低雲完全遮住城市、雷暴或 Gurtenbahn 維護停運時。",
      attractions: [
        attraction("Gurtenbahn", "由 Wabern 快速爬升至 Bern local mountain，短程交通本身展示城市與近郊關係。", "15–25 分鐘", "班次與維護期查官網", "票價臨行確認", "一般無需預約", "Libero／住宿票適用範圍需單獨核對", "https://www.gurtenbahn.ch/en", 46.9192, 7.4737, "Gurtenbahn"),
        attraction("Gurten observation tower", "免費塔樓提供 Bern、Aare 和 Alps 的 360 度視角。", "25–40 分鐘", "戶外設施依天氣", "免費", "無需預約", "強風、雷雨或結冰不要登塔", "https://www.gurtenpark.ch/en/discover/observation-tower", 46.9218, 7.4869, "Gurten tower Bern"),
        attraction("Gurten meadow loop", "山頂草地、林緣和短步道適合低強度散步與野餐。", "45–90 分鐘", "公共路徑全天；活動可能佔用區域", "免費", "無需預約", "雨後泥濘；留意自行車路線", "https://www.gurtenpark.ch/en", 46.9230, 7.4870, "Gurten park"),
      ],
      dining: [
        dining("主餐", "Restaurant Gurtners", "山頂站附近", "瑞士季節菜與景觀用餐", "約 CHF 30–55", "臨行查官網", "週末建議訂位", "https://www.gurtenpark.ch/en/restaurants/gurtners", 46.9219, 7.4860),
        dining("快速補給", "Gurten takeaway / picnic", "山頂草地", "簡餐、飲料或自備野餐", "約 CHF 8–25", "攤點季節營業", "無需訂位", "https://www.gurtenpark.ch/en/restaurants", 46.9223, 7.4864),
      ],
      background: ["Gurten 是 Bern 南側的 local mountain，海拔不高但足以把 Aare 半島、城市擴張與 Alps 放進同一視野。", "它的價值是短距離換取空間理解，而非高山挑戰。"],
      resources: [resource("Gurten Park", "https://www.gurtenpark.ch/en"), resource("Gurtenbahn", "https://www.gurtenbahn.ch/en")],
    },
    "aare-riverside": {
      whyChoose: "想在 Bern 市內用兩至四小時觀察河色、Marzili 與城市高低差，不參與水上活動。",
      skipWhen: "高水位、雷暴、結冰、河岸封閉或鞋底不適合溼滑路面時。",
      attractions: [
        attraction("Marzilibahn", "極短 funicular 連接 Bundeshaus 高地和 Marzili 河岸，直接體現城市垂直落差。", "10–20 分鐘", "班次查運營方", "市內票適用以 Libero/SBB 為準", "無需訂位", "維護時改走樓梯或繞行", "https://www.marzilibahn.ch/en/", 46.9440, 7.4436, "Marzilibahn Bern"),
        attraction("Marzili riverbank", "公共河岸、泳池外緣和草地呈現 Bern 日常生活；本模塊只沿岸觀察。", "45–75 分鐘", "公共路徑依封閉公告", "免費", "無需預約", "Aare 水流急；不建議無當地經驗者下水", "https://bern.com/en/news/stories-and-recommendations/aare", 46.9418, 7.4438, "Marzili Aare"),
        attraction("Dalmaziquai walk", "沿 Aare 平緩連接 Marzili 與 Museumsquartier 一帶，適合作為安全短線。", "40–70 分鐘", "公共路徑全天，水位可影響", "免費", "無需預約", "騎行與步行共用段注意讓行", "https://bern.com/en/explore/activities-and-excursions/aare", 46.9420, 7.4510, "Dalmaziquai Bern"),
      ],
      dining: [
        dining("咖啡休息", "Marzer", "Marzili 社區", "咖啡、烘焙與輕食", "約 CHF 8–25", "臨行確認", "一般無需訂位", "https://www.marzer.ch/", 46.9411, 7.4453),
        dining("快速補給", "Dampfzentrale restaurant", "Dalmaziquai 河岸中段", "季節菜、飲料與文化場館餐飲", "約 CHF 20–45", "活動日時段不同", "晚餐建議訂位", "https://www.dampfzentrale.ch/en/gastronomy/", 46.9390, 7.4459),
      ],
      background: ["Aare 深切割 Bern 臺地，使舊城看似平坦的街道在邊緣突然下降。", "河流既是城市景觀也是高風險水體；岸線體驗與游泳能力必須明確分開。"],
      resources: [resource("Bern Aare 指南", "https://bern.com/en/news/stories-and-recommendations/aare"), resource("Marzilibahn", "https://www.marzilibahn.ch/en/")],
    },
  };

  const activityBatch = {
    "interlaken-paragliding": {
      whyChoose: "預報適合飛行、符合體重與健康條件，並願意把最終決定交給持證 tandem pilot。",
      skipWhen: "強風、降雨、低雲、近期手術／嚴重健康問題，或無法接受短時通知改期與取消。",
      operators: [
        { name: "Skywings Paragliding", price: "價格依飛行高度／時長，預約頁確認", meeting: "夏季常見 Höheweg 56；亦可能安排住宿接送", duration: "整體約 1.5 小時；空中常見約 10–20 分鐘", eligibility: "常見最低年齡約 5–6 歲；體重上限會隨風況約 80–90 kg", cancellation: "天氣不適由 pilot 決定改期或取消；以預訂條款為準", bookingUrl: "https://www.interlaken-paragliding.com/" },
        { name: "Twin Paragliding", price: "按 flight package 顯示，照片／視頻通常另計", meeting: "Interlaken 指定集合點或接送", duration: "依 flight package 與接送安排", eligibility: "年齡、體重、鞋服與健康條件須在預約時確認", cancellation: "天氣安全決定優先；核對退款和 no-show 條款", bookingUrl: "https://www.twin-paragliding.ch/en/" },
      ],
      attractions: [
        attraction("Operator check-in", "完成免責聲明、體重與裝備確認，聽取因天氣調整的最終方案。", "20–35 分鐘", "只按預約時段", "含在活動流程", "必須預約", "提早到場；如實申報健康狀況", "https://welcome.interlaken.ch/en/interlaken/streaming/detail/POI/p_100044073/skywings-paragliding", 46.6868, 7.8580, "Interlaken paragliding"),
        attraction("Beatenberg launch area", "常見起飛區之一；由 operator 接送，實際場地隨風向調整。", "briefing + 起飛約 20–40 分鐘", "僅天氣允許", "含在預訂", "由 operator 安排", "不要自行前往或跨越起飛線", "https://www.interlaken-paragliding.com/", 46.7059, 7.7798, "Beatenberg paragliding"),
        attraction("Höhematte landing area", "常見降落區，結束後可直接在 Interlaken 中心休息。", "15–25 分鐘", "僅活動時使用", "免費觀察；飛行含預訂", "聽從地勤", "觀眾須留在標線外", "https://www.interlaken.ch/en/experiences/poi/hohematte-park", 46.6867, 7.8587, "Hohematte paragliding"),
      ],
      dining: [
        dining("快速補給", "Grand Café Schuh", "集合前後", "輕食、巧克力與飲料", "約 CHF 10–30", "臨行確認", "無需訂位", "https://www.schuh-interlaken.ch/", 46.6865, 7.8598),
        dining("主餐", "Hüsi Bierhaus", "活動完成後", "瑞士熱食與漢堡", "約 CHF 25–45", "臨行確認", "晚餐建議訂位", "https://www.huesi-bierhaus.ch/", 46.6863, 7.8586),
      ],
      background: ["Interlaken 的穀風與開闊降落區使 tandem paragliding 成為成熟活動，但每天仍需由 pilot 按局地風況判斷。"],
      resources: [resource("Skywings 官方旅遊局條目", "https://welcome.interlaken.ch/en/interlaken/streaming/detail/POI/p_100044073/skywings-paragliding"), resource("Twin Paragliding", "https://www.twin-paragliding.ch/en/")],
    },
    "lake-thun-cruise": {
      whyChoose: "希望從船上串聯 Thun、Spiez 或 Interlaken West，並把一段湖程作為低強度主體驗。",
      skipWhen: "當季時刻表無法連接回程、強風導致班次調整，或暈船且無法選擇短段。",
      operators: [
        { name: "BLS scheduled cruise", price: "按區段與艙等計價；SBB/BLS 查詢實際價格", meeting: "Thun、Spiez 或 Interlaken West 碼頭", duration: "短段約 40–90 分鐘；全段更長", eligibility: "一般公共船班；無特殊體力門檻", cancellation: "班次調整以 BLS 運營公告為準", bookingUrl: bls },
        { name: "BLS Lake Thun day ticket", price: "日票價格與折扣資格臨行確認", meeting: "有效碼頭任選班次", duration: "適合計劃兩段以上船程的全天方案", eligibility: "核對艙等、折扣卡與有效日期", cancellation: "票券退款和班次取消按產品條款", bookingUrl: "https://www.bls.ch/en/fahren/fahrausweise/billette/tageskarten" },
      ],
      attractions: [
        attraction("Thun pier", "火車站旁的可靠登船點，適合先走老城再上船。", "提前 20–30 分鐘", "按 BLS timetable", "碼頭免費；船票另購", "旺季可提前購票", "確認船名、方向和登船棧橋", bls, 46.7568, 7.6294, "Thun boat pier"),
        attraction("Spiez harbour", "城堡、葡萄園和 Niesen 山在短停內即可形成完整湖岸畫面。", "45–90 分鐘", "公共港灣全天", "免費", "無需預約", "上坡回車站需時間，可搭 bus", "https://www.spiez.com/en", 46.6859, 7.6815, "Spiez harbour"),
        attraction("Interlaken West pier", "Aare 航道進入城市西端，可接 Unterseen 與火車回 Bern。", "20–45 分鐘", "按船班", "公共區域免費", "無需預約", "碼頭與車站步行短，但仍留轉乘緩衝", bls, 46.6819, 7.8497, "Interlaken West pier"),
      ],
      dining: [
        dining("主餐", "BLS onboard restaurant", "船程中", "依船型提供熱食或小食", "約 CHF 15–45", "只有部分班次／船型提供", "餐飲航次建議查詢或預約", bls, 46.7200, 7.7300),
        dining("咖啡休息", "Spiez harbour cafés", "下船短停", "咖啡、甜點與輕食", "約 CHF 10–30", "季節營業", "通常無需訂位", "https://www.spiez.com/en/experiences/food-drink", 46.6855, 7.6850),
      ],
      background: ["Lake Thun 船班既是觀光體驗也是沿岸公共交通，但季節頻率遠低於鐵路。"],
      resources: [resource("BLS 船班與資訊", bls), resource("BLS 日票", "https://www.bls.ch/en/fahren/fahrausweise/billette/tageskarten")],
    },
    "lake-brienz-cruise": {
      whyChoose: "想把 Lake Brienz 的水色和 Giessbach／Brienz 作為低強度船程主線，並能接受季節班次。",
      skipWhen: "沒有可靠陸路回程、Giessbach 銜接過緊、強風停航或容易暈船時。",
      operators: [
        { name: "BLS scheduled cruise", price: "按區段與艙等，SBB/BLS 顯示為準", meeting: "Interlaken Ost、Brienz 等碼頭", duration: "短段約 40–90 分鐘；全湖段更長", eligibility: "一般公共船班", cancellation: "時刻與取消按 BLS 公告", bookingUrl: bls },
        { name: "BLS Giessbach / Brienz segment", price: "區段票；funicular 可能另購", meeting: "Interlaken Ost 或 Brienz", duration: "船程加下船參觀約 3–5 小時", eligibility: "Giessbach 路段有坡道與臺階", cancellation: "船或 funicular 停運時改火車／bus", bookingUrl: "https://www.giessbach.ch/en/arrival" },
      ],
      attractions: [
        attraction("Interlaken Ost pier", "火車站東側的 Lake Brienz 起點，先在此確認船與鐵路回程。", "提前 20–30 分鐘", "按 BLS timetable", "船票另購", "可提前購票", "同一站區仍需留步行與找碼頭時間", bls, 46.6905, 7.8695, "Interlaken Ost pier"),
        attraction("Giessbach See", "湖岸碼頭連接歷史 funicular 與多層瀑布。", "1.5–3 小時", "船、funicular 季節營運", "各段票價另查", "班次少時應預先規劃", "不要錯過最後一程；瀑布步道溼滑", "https://www.giessbach.ch/en/arrival", 46.7328, 8.0200, "Giessbach See"),
        attraction("Brienz pier", "靠近火車站和湖岸步道，是最穩妥的船火車轉換終點。", "30–60 分鐘", "公共湖岸全天", "免費", "無需預約", "確認 Brienz–Interlaken Ost 鐵路班次", bls, 46.7540, 8.0380, "Brienz pier"),
      ],
      dining: [
        dining("主餐", "Grandhotel Giessbach restaurant", "Giessbach 下船段", "季節菜與湖景", "約 CHF 35–70", "季節營業", "建議訂位", "https://www.giessbach.ch/en/restaurants", 46.7333, 8.0203),
        dining("快速補給", "Interlaken Ost station shops", "登船前", "三明治、飲料與零食", "約 CHF 8–20", "按站內店鋪", "無需訂位", "https://www.sbb.ch/en/travel-information/stations/find-station/interlaken-ost.html", 46.6905, 7.8695),
      ],
      background: ["Lake Brienz 的冰川細粉改變水色；南岸節點依賴船和 bus，北岸鐵路則提供重要備份。"],
      resources: [resource("BLS Lake Brienz", bls), resource("Giessbach 到達", "https://www.giessbach.ch/en/arrival")],
    },
    "lake-lucerne-cruise": {
      whyChoose: "已到 Lucerne，想用一至三小時從湖面看城市和群山，而不進入完整山嶽鐵路日。",
      skipWhen: "船班與 Bern 回程衝突、強風大雨、或已安排大型 museum 而時間不足時。",
      operators: [
        { name: "SGV 1-hour panorama cruise", price: "官方 webshop 參考從 CHF 15 起，依日期／艙等確認", meeting: "Luzern Bahnhofquai", duration: "約 1 小時", eligibility: "一般觀光船", cancellation: "依 SGV 產品與運營條款", bookingUrl: "https://webshop.lakelucerne.ch/en/products/panorama-cruise" },
        { name: "SGV scheduled lake service", price: "按區段和艙等計價", meeting: "Luzern Bahnhofquai 及沿湖碼頭", duration: "自選短段；須與返程船／鐵路銜接", eligibility: "一般公共船班", cancellation: "班次變化以 SGV timetable 為準", bookingUrl: "https://www.lakelucerne.ch/en/information/timetable/" },
      ],
      attractions: [
        attraction("Luzern Bahnhofquai", "火車站正前方碼頭，步行即可從城際列車切換到湖船。", "提前 20–30 分鐘", "按 SGV timetable", "碼頭免費；船票另購", "熱門航次可預購", "確認碼頭編號和船名", "https://www.lakelucerne.ch/en/information/timetable/", 47.0500, 8.3100, "Luzern pier"),
        attraction("Lucerne basin panorama", "短程即可回望 Chapel Bridge、老城和 Pilatus/Rigi 方向。", "約 1 小時", "季節與班次不同", "按產品", "可在線購票", "甲板風大，帶防風層", "https://webshop.lakelucerne.ch/en/products/panorama-cruise", 47.0400, 8.3300, "Lake Lucerne panorama boat"),
        attraction("Verkehrshaus-Lido shore", "短段航線常經過交通博物館和湖濱，可作為單向下船點但先查回城交通。", "30–75 分鐘", "按船／bus 班次", "區段票另查", "無需特殊預約", "留出回 Luzern station 的 bus 時間", "https://www.verkehrshaus.ch/en/visit/getting-here", 47.0528, 8.3353, "Verkehrshaus pier"),
      ],
      dining: [
        dining("咖啡休息", "SGV onboard catering", "船程中", "飲料、點心；服務依船型", "約 CHF 8–30", "並非所有班次完整供餐", "餐飲船另查", "https://www.lakelucerne.ch/en/experience/gastronomy/", 47.0400, 8.3200),
        dining("主餐", "Rathaus Brauerei", "回到 Old Town 後", "瑞士菜與啤酒廠料理", "約 CHF 25–45", "臨行確認", "建議訂位", "https://www.rathausbrauerei.ch/", 47.0518, 8.3058),
      ],
      background: ["Lake Lucerne 由多個湖盆與狹窄水道組成，短程 panorama cruise 只覆蓋 Lucerne 近端，而非整個湖區。"],
      resources: [resource("SGV timetable", "https://www.lakelucerne.ch/en/information/timetable/"), resource("1-hour cruise", "https://webshop.lakelucerne.ch/en/products/panorama-cruise")],
    },
    "aare-guided-raft": {
      whyChoose: "想在專業嚮導和安全裝備下體驗 Aare 水面，並能接受水位與天氣擁有最終否決權。",
      skipWhen: "不符合游泳／健康要求、高水位、雷暴、飲酒後，或 operator 無法明確保險與撤離安排。",
      operators: [
        { name: "Outdoor Switzerland / Bern group rafting", price: "Bern Welcome 參考每組 1–16 人從 CHF 990；最終報價確認", meeting: "由 operator 指定 Bern 周邊集合／下水點", duration: "約 3 小時", eligibility: "游泳能力、年齡和健康條件預約時確認", cancellation: "高水位或惡劣天氣由 operator 取消／改期", bookingUrl: "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare" },
        { name: "Aarebootsvermietung guided tour", price: "按船型、人數與嚮導方案報價", meeting: "預訂後確認起點與接送", duration: "依河段與產品", eligibility: "按產品確認年齡、游泳能力與裝備", cancellation: "水位、天氣及預訂條款為準", bookingUrl: "https://www.aarebootsvermietung.ch/" },
      ],
      attractions: [
        attraction("Safety briefing", "確認救生衣、劃槳、落水處置、信號和撤離點；沒有完成說明不得下水。", "30–45 分鐘", "只按預約", "含在活動報價", "必須預約", "如實說明游泳能力和健康狀況", "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare", 46.9250, 7.4300, "Aare rafting Bern"),
        attraction("Guided Aare section", "實際河段由 operator 根據水位選擇，從水面理解 Bern 河谷。", "1.5–2.5 小時", "僅安全條件允許", "含在活動", "由 operator 安排", "全程穿救生衣並服從嚮導", "https://www.aarebootsvermietung.ch/", 46.9400, 7.4550, "Aare guided boat"),
        attraction("Take-out and return", "指定結束點清點人員裝備、更衣並確認回程交通。", "30–60 分鐘", "按 operator 流程", "接送是否包含須確認", "預約時核對", "不要自行在非指定岸邊結束", "https://www.aarebootsvermietung.ch/", 46.9500, 7.4700, "Aare river Bern"),
      ],
      dining: [
        dining("快速補給", "Marzili area café", "集合前後，視 operator 路線", "輕食與補水", "約 CHF 10–25", "各店不同", "無需訂位", "https://bern.com/en/explore/food-drink", 46.9418, 7.4438),
        dining("主餐", "Altes Tramdepot", "活動後回 Bern", "熱食與飲料", "約 CHF 25–45", "臨行確認", "建議訂位", "https://altestramdepot.ch/", 46.9486, 7.4607),
      ],
      background: ["Aare 水溫低、流速快且水位變化明顯；專業 guided raft 與自行遊泳在風險管理上完全不同。"],
      resources: [resource("Bern Welcome rafting", "https://bern.com/en/business/planning/find-activities-for-the-social-programme/river-rafting-on-the-aare"), resource("Aarebootsvermietung", "https://www.aarebootsvermietung.ch/")],
    },
    canyoning: {
      whyChoose: "體力良好、會游泳、願意接受跳躍／滑降／繩降，並選擇與經驗匹配的專業路線。",
      skipWhen: "雷雨、高水位、受傷、怕水、無法符合年齡體重健康限制，或只因同伴壓力而參加。",
      operators: [
        { name: "Outdoor Interlaken — Canyoning Interlaken", price: "成人參考 CHF 154；團體 10+ 參考 CHF 139，臨行確認", meeting: "Outdoor base, Wilderswil；含指定接送", duration: "約半日，常見出發時段以預約頁為準", eligibility: "須符合游泳、年齡、體重和健康要求", cancellation: "水位過高等安全原因會取消／改期", bookingUrl: "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken" },
        { name: "Alpin Raft canyoning", price: "依 Interlaken / Chli Schliere 等路線報價", meeting: "Interlaken 區指定基地／接送點", duration: "半日或全日", eligibility: "各 canyon 難度、年齡和游泳條件不同", cancellation: "天氣與水位安全決定，核對退款條款", bookingUrl: "https://www.alpinraft.com/canyoning/" },
      ],
      attractions: [
        attraction("Operator base and gear fitting", "更換 wetsuit、helmet、harness，確認鞋碼、健康與緊急流程。", "40–60 分鐘", "只按預約", "通常含技術裝備", "必須預約", "泳裝穿在 wetsuit 內；貴重物品留存規則先問", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6656, 7.8641, "Outdoor Interlaken Wilderswil"),
        attraction("Interlaken canyon", "入門至中級的短峽谷，包含滑降、跳躍和繩降；具體動作由嚮導按現場決定。", "峽谷內約 1.5–2 小時", "約 Apr–Oct 且依水位", "依 operator package", "必須預約", "任何跳躍都可向嚮導說明；不要隱瞞恐懼或傷病", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6500, 7.8500, "Canyoning Interlaken"),
        attraction("Debrief and return", "回基地更衣、補水並處理照片；為疲勞和交通延誤保留緩衝。", "30–60 分鐘", "隨活動流程", "照片是否包含依產品", "無需另訂", "不要馬上安排不可退的遠程交通", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken", 46.6656, 7.8641, "Canyoning gear Interlaken"),
      ],
      dining: [
        dining("快速補給", "Outdoor base snack / nearby Wilderswil", "集合前後", "輕食、飲水與能量補給", "約 CHF 8–20", "按基地與附近店鋪", "無需訂位", "https://www.outdoor.ch/en/", 46.6656, 7.8641),
        dining("主餐", "Interlaken centre restaurant", "活動完成並回城後", "熱食與高碳水餐", "約 CHF 25–45", "各店不同", "晚餐繁忙時訂位", "https://www.interlaken.ch/en/experiences/food-drink", 46.6865, 7.8585),
      ],
      background: ["Canyoning 把天然水道變成技術路線；即使同一名稱，水量變化也會顯著改變難度。", "成熟 operator 會根據現場跳過動作、改線或取消，這不是服務失敗而是核心安全機制。"],
      resources: [resource("Outdoor Interlaken", "https://www.outdoor.ch/en/outdoor-adventure/canyoning-interlaken"), resource("Alpin Raft", "https://www.alpinraft.com/canyoning/")],
    },
  };

  const contextualNotes = {
    "bern-city-walk": [
      "從 Bahnhof 向東走，街道會依次經過城市歷次擴建形成的 Spitalgasse、Marktgasse 與 Kramgasse；鐘塔和舊城門的位置，就是昔日城市邊界向西移動留下的刻度。",
      "現場可特別觀察砂岩立面、地窖入口、街心噴泉與連續拱廊：它們分別對應建築材料、商業儲藏、公共供水和雨雪氣候下的城市生活。",
    ],
    interlaken: [
      "Interlaken West、Höheweg 與 Interlaken Ost 並不是三個孤立景點，而是一條由歷史城鎮、十九世紀旅遊大道到現代鐵路門戶的西東剖面。",
      "Höhematte 被保留為開闊草地，使酒店區始終擁有朝向 Jungfrau 的視廊；滑翔傘降落只是這片公共空間今天的新用途。",
    ],
    lauterbrunnen: [
      "瀑布多從高處懸谷落入主谷，說明較小冰川支谷沒有被侵蝕到與主谷同一高度；Staubbach 與 Trümmelbach 展示了外露和山體內部兩種水系。",
      "村落、鐵路、牧場和道路幾乎都被壓縮在狹窄谷底。沿谷向南走時，可觀察交通與房屋如何避開落石區、洪水線和陡壁。",
    ],
    wengen: [
      "齒軌鐵路讓 Wengen 在沒有普通汽車道路的情況下發展成大型度假村；車站周圍的旅館尺度，記錄了十九世紀末以來的阿爾卑斯旅遊增長。",
      "由教堂一帶向谷底看，能同時辨認 Lauterbrunnen 村、Staubbach Falls 和對面懸崖臺地，從而理解 Wengen 為什麼佔據這一高位平臺。",
    ],
    muerren: [
      "村落沿近乎等高的臺地展開，建築朝向主峰排列；從 BLM 車站穿村而過，比只在觀景臺拍照更能感受高山聚落如何利用有限平地。",
      "傳統農舍、Belle Époque 旅館和現代纜車設施並置，反映 Mürren 從農業社區、登山基地到國際冬季運動目的地的多重身份。",
    ],
    gimmelwald: [
      "Gimmelwald 的房屋不像城市街道般連續，而是圍繞農地、坡度和水源疏落分佈；村落空間首先服務農業，其次才服務觀光。",
      "從 Gimmelwald 步行上 Mürren，會看到商業密度和建築規模逐漸增加。這段短路最能比較兩個相鄰無車村落不同的發展路徑。",
    ],
    "grindelwald-village": [
      "Eiger 北壁不是遠處背景，而是決定日照、谷地尺度和旅遊想象的巨大立面。沿 Dorfstrasse 行走時，山體會不斷在建築間重新出現。",
      "冰川曾更深入谷地；Glacier Canyon 和地貌展示了冰體後退後留下的侵蝕痕跡，也讓“冰川村”不只是一項品牌名稱。",
    ],
    "grindelwald-first": [
      "First 位於村落北側山坡，觀景方向主要朝向 Eiger 與 Grindelwald 谷；Bachalpsee 則把路線帶到更開闊、相對平緩的高山臺地。",
      "纜車站、Cliff Walk、山湖與冒險項目屬於不同時間尺度：前兩者短而集中，山湖需要步行，活動則受排隊和風況控制，不能只看地圖距離。",
    ],
    jungfraujoch: [
      "鐵路穿越 Eiger 與 Mönch 山體抵達高山坳，其工程改變了普通旅客接近冰川世界的方式，也塑造了“Top of Europe”的旅遊敘事。",
      "室內展覽、Ice Palace、Sphinx 與 Plateau 是由封閉到暴露的漸進動線；依這個順序參觀，可讓身體逐步適應寒冷、風勢和海拔。",
    ],
    thun: [
      "城堡佔據 Aare 與湖口上方的制高點，老城商業街沿河發展，Schadau 則在城市轉向湖景旅遊的一端；三者分別代表權力、貿易和休閒。",
      "Obere Hauptgasse 的高架人行道是 Thun 最特殊的城市細節：上下兩層入口回應坡地，也讓商業街擁有不同於平地老城的立體感。",
    ],
    "lake-thun": [
      "Niesen、湖面、葡萄園與 Spiez 城堡形成南岸的空間層次；天氣清晰時，可用山峰方向判斷自己位於湖的哪一端。",
      "湖岸聚落往往由碼頭向上連接鐵路和村中心。步行中的高差不是繞路，而是十九世紀船運與後來鐵路系統疊加的結果。",
    ],
    iseltwald: [
      "村落位於湖岸小半島與山坡之間，公共空間容量很小；碼頭、bus stop 和餐飲集中在同一帶，因此班次到達時會短暫擁擠。",
      "觀察木屋朝向、船塢和岸線，可看到漁業、湖上交通與現代觀光共同留下的痕跡；私人住宅仍是這裡的主體。",
    ],
    "lake-brienz": [
      "Brienz 北岸鐵路與南岸季節船／bus 構成不對稱交通網絡。規劃時先理解兩岸差異，才能知道哪個節點適合作為可靠退路。",
      "Giessbach 的瀑布、森林、歷史酒店與 funicular 組成十九世紀湖區旅遊景觀；它不是單一瀑布，而是一套由船抵達的完整空間設計。",
    ],
    lucerne: [
      "Reuss 把湖水引出城市，Chapel Bridge 斜跨河道並連接兩岸。站在橋上比較湖、河和城牆遺蹟，能迅速讀懂 Lucerne 的水陸節點。",
      "彩繪立面、行會建築、教堂和旅遊紀念設施並存，說明 Lucerne 既是中世紀貿易城市，也很早就被塑造成面向國際旅客的瑞士形象窗口。",
    ],
    lausanne: [
      "由 Cathedral 高城到 Ouchy 湖岸的巨大落差，把宗教中心、商業街、鐵路站和港口分成不同高度；metro 是串聯這些層級的城市骨架。",
      "視野從高城屋頂轉向 Lake Geneva 和法國一側群山，也對應城市身份從 Vaud 地方中心延伸到國際體育機構所在地。",
    ],
    fribourg: [
      "Sarine 河在砂岩地形中切出深谷，高城位於易防守的平臺，下城則靠近橋樑和水力資源；路線的下降過程就是城市社會地理的轉換。",
      "街名、標識和日常語言體現法語與德語文化接觸，但邊界並非簡單分成兩半；可留意同一地點在不同資料中的雙語名稱。",
    ],
    gruyeres: [
      "城堡位於山丘末端，主街像一條通往堡壘的長前庭。無車村落今天看似為觀光而設，其骨架原本服務防禦、集市和領主經濟。",
      "奶酪文化應從牧場、乳品生產、熟成與餐桌連續理解；Maison du Gruyère 與村內餐廳分別呈現生產系統和消費傳統。",
    ],
    gurten: [
      "由山頂向北可辨認 Aare 半島與 Bern 城區，向南則是 Alps；Gurten 正好處在城市日常與高山想象之間。",
      "funicular、草地、活動場地和林間步道顯示 local mountain 的功能：它不是遙遠自然，而是由公共交通接入的城市休閒基礎設施。",
    ],
    "aare-riverside": [
      "從 Bundeshaus 附近下降到 Marzili，短距離內會經歷行政高地、住宅坡面和河岸休閒帶，呈現 Bern 極強的垂直城市結構。",
      "河色來自上游沉積物與光線，但漂亮水面容易掩蓋低溫和流速。觀察入水梯、警示和當地人的路線，有助於理解河流文化建立在經驗之上。",
    ],
    "interlaken-paragliding": [
      "起飛場位於山坡，降落區位於平坦谷底，垂直地形與穀風共同構成飛行條件；路線會隨風向而改變，並非固定觀光航線。",
      "從空中可同時辨認 Thun 與 Brienz 兩湖、Aare 水系和 Interlaken 城區，這種空間總覽是活動的核心價值，而不僅是刺激感。",
    ],
    "lake-thun-cruise": [
      "船上視角把沿岸城堡、葡萄園和山口排列在同一水平線上；與火車相比，水路更容易看清聚落為什麼圍繞港灣形成。",
      "蒸汽船傳統與現代定期航運共同構成湖上文化。選擇區段時可留意船型，因為甲板空間、餐飲和旅行節奏會明顯不同。",
    ],
    "lake-brienz-cruise": [
      "由 Interlaken Ost 向東航行時，湖面逐漸收窄，南岸瀑布與北岸村落交替出現；水上路線比陸路更清楚展示兩岸地形差異。",
      "Giessbach 的碼頭與 funicular 是歷史湖船旅遊網絡的典型組合，Brienz 火車站則代表後來的鐵路連接；兩者可在一程中對照。",
    ],
    "lake-lucerne-cruise": [
      "Lucerne 近端湖盆開闊，但完整 Lake Lucerne 由多個湖盆和狹窄水道組成；一小時航程只是城市水域的縮影。",
      "離岸後回望車站、教堂塔樓與舊城屋頂，可以理解 Lucerne 如何圍繞湖口發展，也能區分城市遊船與通往山嶽鐵路的長線交通。",
    ],
    "aare-guided-raft": [
      "河面視角會放大橋樑淨高、岸壁和水流轉彎，讓平日在老城上方看見的 Aare 變成一條連續地形通道。",
      "Bern 的河流文化建立在冷水、快速水流和明確下水／上岸知識上；嚮導的路線判斷本身就是活動最重要的地方經驗。",
    ],
    canyoning: [
      "峽谷是水流長期切割巖體形成的狹窄通道，落差、巖面和水量決定每個動作；同一路線在不同水位下會成為不同難度。",
      "裝備、接送、briefing 與撤退點看似是體驗外圍，實際上共同構成專業 canyoning 文化；安全決定優先於完成所有跳躍。",
    ],
  };

  const detailedCityWalks = {
    lucerne: {
      title: "Lucerne 湖口與老城 City Walk",
      summary: "由火車站跨過 Reuss，穿過 Old Town 與北側歷史地標，再沿湖岸回到車站；標準版約 5.5 公里。",
      start: "Luzern Bahnhof",
      finish: "Luzern Bahnhofquai",
      estimatedDistance: "約 5.5 公里",
      walkingTime: "淨步行約 1 小時 25 分；含參觀約 5–7 小時",
      shortCut: "Lion Monument 後直接由 Löwenplatz 搭 bus 回 Bahnhof，可省略 Hofkirche 與長湖岸段。",
      checkpoints: [
        checkpoint("Luzern Bahnhof / Bahnhofplatz", 47.0502, 8.3093, "10–15 分鐘", "起點", "先在站前辨認湖、Reuss 出水口、Bahnhofquai 船碼頭與舊車站拱門，建立整條路線方向。", "先確認回 Bern 的候選班次；需要坐船時同時確認碼頭。"),
        checkpoint("Chapel Bridge & Water Tower", 47.0517, 8.3071, "25–35 分鐘", "步行約 5 分鐘", "沿木橋斜跨 Reuss，觀察橋頂繪畫、Water Tower 和兩岸城市關係。", "橋內狹窄，拍照時靠邊；早上客流較少。"),
        checkpoint("Jesuit Church", 47.0505, 8.3050, "20–30 分鐘", "步行約 6 分鐘", "從南岸回看 Chapel Bridge，並進入巴洛克教堂理解 Lucerne 的天主教城市身份。", "禮拜或活動時不作觀光；內部保持安靜。"),
        checkpoint("Weinmarkt & Old Town lanes", 47.0528, 8.3044, "45–60 分鐘", "步行約 8 分鐘", "經 Reussbrücke 進入 Weinmarkt、Hirschenplatz 等彩繪廣場，把立面、噴泉和行會建築串成一段。", "不要逐條小巷來回；以 Weinmarkt 為主 checkpoint。"),
        checkpoint("Musegg Wall / Zyt Tower", 47.0547, 8.3034, "35–55 分鐘", "上坡約 10 分鐘", "由老城登到中世紀城牆低段，從高處看屋頂、湖口和城市邊緣。", "開放具季節性且多臺階；雨天、怕高或時間不足可跳過。", true),
        checkpoint("Lion Monument", 47.0585, 8.3102, "25–35 分鐘", "由城牆步行約 15 分鐘", "在巖壁紀念雕塑前理解瑞士衛兵、十九世紀紀念文化與早期國際旅遊。", "團客集中時先看周圍說明，稍後再靠近水池。"),
        checkpoint("Hofkirche & Nationalquai", 47.0550, 8.3142, "35–50 分鐘", "步行約 9 分鐘", "由雙塔教堂轉入湖岸，路線從封閉老城切換到開闊水面。", "教堂開放受禮拜影響；湖岸風大。"),
        checkpoint("Lakeside promenade → Bahnhofquai", 47.0510, 8.3121, "35–50 分鐘", "沿湖步行約 12 分鐘", "沿 Nationalquai 回望城市天際線，在 Bahnhofquai 完成閉環。", "時間不足可從附近 bus stop 返回；不要為走完全程錯過火車。"),
      ],
    },
    lausanne: {
      title: "Lausanne 高城到 Ouchy City Walk",
      summary: "利用 metro 先到 Cathedral 高城，再逐層向下穿過 Old Town、Flon 和 Ouchy，避免逆坡重複行走；標準版約 5 公里。",
      start: "Lausanne Gare → metro 至 Bessières / Riponne",
      finish: "Ouchy-Olympique metro",
      estimatedDistance: "約 5 公里",
      walkingTime: "淨步行約 1 小時 30 分；含 museum 約 6–8 小時",
      shortCut: "Place de la Palud 後由 Lausanne-Flon 搭 metro 直接回 Gare；不下 Ouchy。",
      checkpoints: [
        checkpoint("Lausanne Gare", 46.5168, 6.6291, "10–15 分鐘", "起點", "先看車站與城市坡度，不從這裡徒步硬爬 Cathedral；City Walk 的關鍵是先乘 metro 到高處。", "購買／確認市內交通票，並記住回 Bern 月臺信息。"),
        checkpoint("Bessières Bridge viewpoint", 46.5217, 6.6370, "15–25 分鐘", "metro 後步行約 5 分鐘", "從橋面觀察 Cathedral 高地、街谷與下層 metro 結構，快速建立 Lausanne 的垂直關係。", "橋上有交通，拍照留在人行區域。"),
        checkpoint("Lausanne Cathedral", 46.5228, 6.6358, "45–60 分鐘", "上坡約 6 分鐘", "以哥特式 Cathedral 作為高城核心，觀察門廊、內部空間和城市屋頂。", "禮拜與活動優先；塔樓開放和最後進入時間另查。"),
        checkpoint("Escaliers du Marché", 46.5220, 6.6340, "15–25 分鐘", "步行約 4 分鐘", "沿有蓋木階梯向下，把 Cathedral 與商業 Old Town 連接起來。", "雨天木階與石階溼滑；順坡向下走比反向省力。"),
        checkpoint("Place de la Palud", 46.5213, 6.6328, "30–45 分鐘", "步行約 4 分鐘", "市政廳、噴泉和步行商業街構成 Lausanne 的市民中心，可在這裡午餐或咖啡。", "整點機械鐘並非必須等待；先守住整體節奏。"),
        checkpoint("Le Flon", 46.5203, 6.6300, "30–40 分鐘", "下坡約 8 分鐘", "舊倉儲與鐵路谷地轉型為當代商業文化區，是高城與湖岸之間的空間轉換點。", "這裡是 metro 樞紐，也是精簡版結束點。"),
        checkpoint("Ouchy harbour", 46.5065, 6.6263, "35–50 分鐘", "metro 至 Ouchy-Olympique", "由城市坡地突然抵達 Lake Geneva 水平岸線，觀察港口、酒店與 Savoy Alps 遠景。", "湖岸日照與風勢都強；先確認 museum 開放再繼續。"),
        checkpoint("The Olympic Museum", 46.5086, 6.6339, "2–3 小時", "湖岸步行約 12 分鐘", "以展覽和公園理解 Lausanne 的國際體育身份，作為全線主要室內 checkpoint。", "常見週一閉館規律需臨行確認；時間不足只走公園外部。", true),
        checkpoint("Ouchy-Olympique return", 46.5061, 6.6260, "10–15 分鐘", "由 museum 回走約 12 分鐘", "搭 metro 回 Gare，避免把已經完成的下坡路線徒步走回。", "至少預留 20–30 分鐘由 Ouchy 回到火車月臺。"),
      ],
    },
    fribourg: {
      title: "Fribourg 高低城 City Walk",
      summary: "由火車站進入高城 Cathedral，再一路下降到 Sarine、Lower Town 與 Pont de Berne，最後以 funicular 回到高處；標準版約 4.5 公里。",
      start: "Fribourg/Freiburg Bahnhof",
      finish: "Funiculaire Neuveville / St-Pierre",
      estimatedDistance: "約 4.5 公里",
      walkingTime: "淨步行約 1 小時 20 分；含參觀約 4–6 小時",
      shortCut: "Cathedral 後由高城返回車站；不下降 Lower Town，可縮成約 2 小時。",
      checkpoints: [
        checkpoint("Fribourg/Freiburg Bahnhof", 46.8031, 7.1512, "10–15 分鐘", "起點", "確認自己位於瑞士 Fribourg/Freiburg，並從站前辨認高城方向。", "不要誤用德國 Freiburg 的地圖或車票。"),
        checkpoint("Place Georges-Python", 46.8050, 7.1566, "15–20 分鐘", "步行約 8 分鐘", "由現代交通區進入高城公共空間，是前往 Old Town 的清晰過渡點。", "市集或活動可能改變穿行路線。"),
        checkpoint("St Nicholas Cathedral", 46.8061, 7.1631, "45–70 分鐘", "步行約 10 分鐘", "以 Cathedral、彩繪玻璃與高塔理解高城宗教和政治中心。", "塔樓多級臺階且季節開放；先看門口公告。"),
        checkpoint("Zähringen Bridge viewpoint", 46.8073, 7.1681, "20–30 分鐘", "步行約 7 分鐘", "從高處先看 Sarine 谷地、Lower Town 與對岸，再決定下降路線。", "這裡只走觀景段，不必完整跨橋往返。"),
        checkpoint("Stalden descent", 46.8051, 7.1664, "20–30 分鐘", "由 Cathedral 區步行約 6 分鐘", "沿陡坡與中世紀街巷下到 Auge district，親身體驗高低城落差。", "石板路陡，雨天慢走；行動不便者改 bus。"),
        checkpoint("Pont de Berne", 46.8044, 7.1690, "25–35 分鐘", "下坡約 8 分鐘", "木橋、河流、城牆與下城房屋共同組成 Fribourg 最完整的空間 checkpoint。", "橋上仍可能有車輛，保持在人行側。"),
        checkpoint("Lower Town / Place du Petit-Saint-Jean", 46.8034, 7.1658, "35–50 分鐘", "河岸步行約 8 分鐘", "在昔日工匠區安排午餐或咖啡，觀察建築尺度與高城明顯不同。", "餐飲選擇較分散，營業日臨行確認。"),
        checkpoint("Funiculaire Neuveville", 46.8042, 7.1588, "15–25 分鐘", "沿河與下城步行約 12 分鐘", "搭歷史 funicular 返回 St-Pierre 高處，以交通工具完成城市剖面閉環。", "維護或停運時用 bus；不要在疲勞後硬爬回車站。"),
      ],
    },
    gruyeres: {
      title: "Gruyères 奶酪工坊到城堡 City Walk",
      summary: "從鐵路站和奶酪工坊出發，沿坡道進入無車中世紀村，經過主街、museum 與城堡後原線返回；標準版約 3.5 公里。",
      start: "Gruyères Gare",
      finish: "Gruyères Gare",
      estimatedDistance: "約 3.5 公里",
      walkingTime: "淨步行約 55 分鐘；含參觀約 5–7 小時",
      shortCut: "只走 station → village → castle，Maison du Gruyère 與 HR Giger Museum 二選一。",
      checkpoints: [
        checkpoint("Gruyères Gare", 46.5820, 7.0724, "10–15 分鐘", "起點", "站前同時看到 Maison du Gruyère 與山丘村落，先建立“生產在谷底、權力在高處”的空間關係。", "記錄回 Bulle 的班次；上村前先決定 cheese dairy 是否參觀。"),
        checkpoint("La Maison du Gruyère", 46.5820, 7.0726, "60–90 分鐘", "站旁約 2 分鐘", "從牛奶、製作到熟成理解 Gruyère AOP，不把奶酪文化縮成餐廳裡的一鍋 fondue。", "生產示範有時段；若錯過可先上村，回程再看。", true),
        checkpoint("Village ascent / hill approach", 46.5830, 7.0780, "15–25 分鐘", "上坡約 12–15 分鐘", "沿坡道接近城牆，觀察城堡如何控制山丘末端和周圍牧場。", "坡度持續；可查詢 local bus，但班次不密。"),
        checkpoint("Village gate & main street", 46.5836, 7.0824, "35–50 分鐘", "步行約 5 分鐘", "穿過城門進入無車主街，廣場、噴泉、旅館與商店構成城堡前的線性公共空間。", "午間團客集中，先走到主街盡頭再回頭選餐廳。"),
        checkpoint("HR Giger Museum / Bar", 46.5842, 7.0831, "60–90 分鐘", "主街步行約 3 分鐘", "超現實主義藝術與中世紀村形成刻意反差，是興趣導向而非必做 checkpoint。", "內容可能不適合兒童；與 Castle 時間衝突時優先自己真正感興趣的一項。", true),
        checkpoint("Gruyères Castle", 46.5847, 7.0833, "90–120 分鐘", "步行約 3 分鐘", "由庭院、室內展覽、城牆和山地視野理解領主中心與防禦位置。", "閉館前至少留 90 分鐘；內部和塔樓有臺階。"),
        checkpoint("Castle rampart viewpoint", 46.5850, 7.0838, "20–30 分鐘", "城堡參觀動線內／出口附近", "向谷底回看 railway、cheese dairy 與牧場，把一日路線壓縮成一張空間圖。", "天氣差時縮短戶外停留。"),
        checkpoint("Main street meal → station", 46.5835, 7.0830, "60–90 分鐘", "回主街約 5 分鐘", "以 cheese lunch 或 meringue 收尾，再預留約 20 分鐘下坡回 station。", "不要把點餐時間壓到最後一班連接前。"),
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
      { name: "精簡版", duration: "2–2.5 小時", when: "只有半天、抵達較晚或天氣窗口較短", route: "Bern Bahnhof → Bundeshaus → Zytglogge → Kramgasse → Bern Minster" },
      { name: "完整版", duration: "4–5 小時", when: "默認選擇；由政治區、Old City 完整走到 Aare 河谷與全景終點", route: module.route },
      { name: "文化延伸版", duration: "5–6 小時", when: "開放時間合適且體力充足；Münsterplattform、Zytglogge tour 或 Minster tower 只選一項", route: `${module.route} ＋ 一個 Optional 延伸` },
    ] : [
      { name: "精簡版", duration: "約 3–4 小時（另加 Bern 往返）", when: "出發較晚、天氣窗口短或體力一般", route: `${first.name} → ${second.name}` },
      { name: "標準版", duration: module.duration, when: "默認選擇；保留用餐與交通緩衝", route: module.route },
      { name: "延伸版", duration: "接近模塊時長上限", when: "早出發、狀態穩定且最後回程仍有餘量", route: `${module.route} → ${last.name} 深度停留` },
    ];
    return {
      whyChoose: detail.whyChoose,
      skipWhen: detail.skipWhen,
      variants,
      schedule: [
        { time: `${times[0]}–${times[1]}`, title: activity ? "集合／交通緩衝" : "從 Bern 出發", detail: activity ? "按 operator 指定時間提早抵達；不要把接駁當成零緩衝。" : `在 SBB 搜索路線並預留至少 15 分鐘換乘緩衝；先前往 ${first.name}。` },
        { time: `${times[1]}–12:15`, title: first.name, detail: `${first.description} 建議停留 ${first.stay}。` },
        { time: "12:15–13:30", title: "主餐與複核", detail: `優先使用位於路線中的 ${detail.dining[0].name}；同時複核下午開放狀態和回程。` },
        { time: `13:30–${times[3]}`, title: `${second.name}${last === second ? "" : ` → ${last.name}`}`, detail: "按標準版推進；若天氣、排隊或體力低於預期，立即改用精簡版，不追回落後時間。" },
        { time: `${times[3]}–${times[4]}`, title: "返回 Bern", detail: `至少為最後一程保留 30 分鐘機動；若在 ${times[3]} 尚未開始返程，取消所有延伸項目。` },
      ],
      attractions: detail.attractions,
      dining: detail.dining,
      transport: {
        search: module.transport.search,
        segments: module.transport.steps.map((step, index) => ({ label: `第 ${index + 1} 段`, detail: step })),
        ticketChoice: `${module.estimatedCost} 為規劃範圍。先在 SBB 比較點到點票、Saver Day Pass／折扣資格；山嶽鐵路、船或活動不應假設自動包含。`,
        bookingSearch: "以模塊所列起終點搜索，不鎖死單一班次；出發前再次檢查 platform、施工和替代交通。",
        plannedCost: module.estimatedCost,
        lastMile: `${module.transport.note} 回程至少預留一班車的餘量，活動模塊另加 operator 延遲緩衝。`,
      },
      conditions: {
        weather: `天氣依賴：${module.weatherDependency}。出發前看目的地區域預報、雷達、風勢及運營狀態，不只看 Bern 市區天氣。`,
        cancel: `${detail.skipWhen} 已購票也不應凌駕於現場安全和能見度判斷。`,
        clothing: module.clothing,
        packing: module.packing,
        fitness: `體力強度：${module.intensity}。以同行者中最慢者為節奏，並把返程體力計入。`,
        accessibility: "無障礙程度因站點、坡道、纜車、船型和維護狀態而變；需要無障礙路線時，出發前向交通或景點官方確認升降機與協助服務。",
        backup: module.backup,
      },
      background: [...detail.background, ...(contextualNotes[module.id] || [])],
      resources: [resource("SBB 行程與票價查詢", sbb, "官方交通"), ...detail.resources],
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

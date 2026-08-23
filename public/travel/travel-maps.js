const cityWalkRoutes = {
  zurich: [
    ["Zurich HB", 47.378177, 8.540192],
    ["Bahnhofstrasse", 47.369700, 8.539600],
    ["Augustinergasse", 47.370300, 8.540000],
    ["Lindenhof", 47.370700, 8.541600],
    ["Fraumünster", 47.369720, 8.541110],
    ["Münsterbrücke", 47.369900, 8.542600],
    ["Grossmünster", 47.370020, 8.544070],
    ["Lake Zurich promenade", 47.365300, 8.544000],
    ["Kunsthaus Zürich", 47.370500, 8.548000],
    ["University of Zurich", 47.374700, 8.548300],
    ["ETH Zurich / Polyterrasse", 47.376300, 8.548300],
    ["Predigerkirche", 47.376300, 8.543900],
    ["Zurich HB (return)", 47.378177, 8.540192]
  ],
  bern: [
    ["Bern Bahnhof", 46.948040, 7.439650],
    ["Bundeshaus", 46.946600, 7.444000],
    ["Zytglogge", 46.948010, 7.451330],
    ["Kramgasse", 46.948700, 7.454500],
    ["Bern Minster", 46.947000, 7.451240],
    ["Münsterplattform", 46.945900, 7.452220],
    ["Nydeggbrücke", 46.948820, 7.459000],
    ["BearPark", 46.948700, 7.459800],
    ["Rosengarten", 46.951500, 7.459900]
  ],
  freiburg: [
    ["Freiburg (Breisgau) Hbf", 47.997800, 7.842900],
    ["Martinstor", 47.993600, 7.849500],
    ["Münsterplatz", 47.995600, 7.852900],
    ["Freiburg Minster", 47.995600, 7.852900],
    ["Konviktstraße", 47.994400, 7.853600],
    ["Schwabentor", 47.991600, 7.855000],
    ["Schlossberg", 47.993200, 7.859000]
  ],
  heidelberg: [
    ["Bismarckplatz", 49.407400, 8.687800],
    ["Hauptstraße", 49.410000, 8.701500],
    ["Universitätsplatz", 49.410050, 8.706650],
    ["Jesuitenkirche", 49.409050, 8.706850],
    ["Heiliggeistkirche", 49.412000, 8.710600],
    ["Marktplatz", 49.412300, 8.710800],
    ["Kornmarkt", 49.411500, 8.713100],
    ["Old Bridge", 49.414400, 8.712700],
    ["Neckarwiese", 49.413850, 8.696200],
    ["Theodor-Heuss-Brücke", 49.410650, 8.691200],
    ["Bismarckplatz (return)", 49.407400, 8.687800]
  ],
  frankfurt: [
    ["Frankfurt (Main) Hbf", 50.107100, 8.663800],
    ["Main Tower", 50.110000, 8.674000],
    ["Alte Oper", 50.115400, 8.671300],
    ["Hauptwache", 50.113100, 8.679700],
    ["New Old Town", 50.110600, 8.682000],
    ["Römer", 50.110600, 8.682000],
    ["Frankfurt Cathedral", 50.110300, 8.685000],
    ["Eiserner Steg", 50.110000, 8.686800],
    ["Museum Embankment", 50.104000, 8.678000]
  ]
};

const cityWalkGuides = {
  zurich: {
    options: [
      ["Full City Walk（推薦）", "約 5–6 公里、4–5 小時；由 Old Town 西側、Münsterbrücke、湖邊、Kunsthaus、University of Zurich、ETH / Polyterrasse 及 Predigerkirche 組成完整閉環，回到 Zürich HB。"],
      ["短版 Old Town loop", "Zurich HB → Bahnhofstrasse → Augustinergasse → Lindenhof → St. Peter's → Fraumünster → Münsterbrücke → Grossmünster → Predigerkirche → Zurich HB，約 2–2.5 小時。"],
      ["湖景加強版", "完整 Full City Walk 後，由湖邊沿 Utoquai 前往 Zürichhorn；回程改乘 tram 或 boat，不再硬接回 HB。"],
      ["雨天備案", "Old Town、Fraumünster、Swiss National Museum；Polyterrasse 視天氣決定。"]
    ],
    stops: [
      ["Zurich HB", "大型交通樞紐及 City Walk 起點；先寄放行李，再由 Bahnhofstrasse 進入 Old Town 西側。", "公共交通／戶外：無入場票；可選 Swiss National Museum。"],
      ["Bahnhofstrasse", "城市金融與購物主軸；在此只走 Old Town 段，不必整條街來回。", "戶外街道：全天開放、無門票；接 Fraumünster 前可短停 Paradeplatz 一帶。"],
      ["Augustinergasse", "色彩鮮明的窄巷及傳統行會建築，連接 Lindenhof、Bahnhofstrasse 與老城西側。", "戶外街道：全天開放、無門票。"],
      ["Lindenhof", "羅馬時期高地，能俯瞰 Limmat River、Old Town 及 Grossmünster。", "戶外觀景：全天開放、無門票；由 Augustinergasse 上坡，再向 Fraumünster 下坡。"],
      ["Fraumünster", "以 Chagall 彩窗聞名的教堂，位於 Limmat River 西岸。", "8/15（六）10:00–18:00；8/16（日）13:00–18:00。旅客參觀 CHF 5，只限現場購票（卡／現金／TWINT），可與 Grossmünster tower 買 CHF 8 combo ticket。"],
      ["Münsterbrücke", "連接 Fraumünster 與 Grossmünster 的步行橋，提供最經典的雙教堂河景。", "戶外橋樑：無門票、可通行；在橋上回望 Lindenhof 及沿河屋頂。"],
      ["Grossmünster", "Zurich 最具辨識度的地標之一，與 Zwingli 及 Reformation 歷史相關；現正進行長期修復，外觀可能有鷹架。", "8/15（六）教堂 10:00–18:00、11:30–13:15 暫停遊客；8/16（日）教堂遊客 12:00–18:00、Karlsturm 12:30–17:30。nave / crypt 免費；tower CHF 5、只限現場購票。"],
      ["Lake Zurich promenade", "由 Grossmünster 南行到湖邊，欣賞船隻、遠山及湖岸生活。", "戶外湖畔：全天開放、無門票；這是轉往 Kunsthaus 山坡前的開闊段落。"],
      ["Kunsthaus Zürich", "Zurich 的主要藝術館，位於山坡東側；即使不入館也可作為上坡與街區轉換的地標。", "8/15（六）及 8/16（日）均 10:00–18:00；入館需買票，collection / small exhibitions CHF 24 起、major exhibition CHF 31 起；可網上或現場購票。"],
      ["University of Zurich", "University of Zurich 的主校園位於山坡上，是由文化區走向學術區的過渡段。", "校園戶外免票；2026 外部工程可能有噪音或短繞路，不預設進圖書館。"],
      ["ETH Zurich / Polyterrasse", "大學山坡的觀景台，能俯瞰 Old Town、Limmat River 與 Lake Zurich。", "8/15（六）及 8/16（日）ETH main building 08:00–17:00、免票；Polyterrasse 戶外全日可進。由 University of Zurich 步行至 ETH。"],
      ["Predigerkirche", "Old Town 北段的重要歷史教堂，位於 ETH 下坡回市中心的自然收尾位置。", "8/15（六）及 8/16（日）10:00–17:00、參觀免費；週日 11:00 有 service，想安靜參觀宜避開該時段。"],
      ["Zurich HB (return)", "回到 Zürich HB，完成不重複折返的完整 City Walk 閉環。", "公共交通／戶外：無入場票；可步行回 25hours Hotel Zürich Langstrasse 休息，或在 HB / Old Town 附近用餐。"]
    ]
  },
  bern: {
    options: [
      ["Full City Walk（推薦）", "約 4–5 公里、4.5–5.5 小時；由 Bern Bahnhof 經聯邦政治區、UNESCO Old City、Einstein House、Minster、Aare 河谷、BearPark 到 Rosengarten，最後乘 bus 10 返回市中心。"],
      ["精簡版", "Bern Bahnhof → Bundeshaus → Zytglogge → Kramgasse → Bern Minster，約 2–2.5 小時；適合只有半天或天氣窗口較短時。"],
      ["自然景觀版", "完整 Old City 主線（含 Einstein House）後前往 BearPark、Aare 河畔及 Rosengarten；Münsterplattform 視體力與天氣選加，上坡段可改乘 bus 10。"],
      ["雨天文化版", "Bern Bahnhof → Bundeshaus 外觀 → Old City 拱廊 → Zytglogge → Einstein House → Bern Minster；以有遮蔽路段和室內景點為主。"]
    ],
    stops: [
      ["Bern Bahnhof", "大型交通樞紐與 City Walk 起點；出站後先經 Bahnhofplatz 進入 Spitalgasse / Marktgasse 的拱廊軸線。", "公共交通／戶外：無入場票。住朋友家通常沒有 Bern-Ticket；先按朋友地址另買 Libero 市內票並放下大行李。"],
      ["Bundeshaus", "Swiss Federal Palace 與 Bundesplatz 代表 Bern 作為 Switzerland federal city 的政治角色；廣場上的 26 道噴泉象徵各州。", "外觀與 Bundesplatz 可自由參觀；議會內部導覽受會期、星期與安檢安排影響，必須通過官方日曆預約並攜帶證件。"],
      ["Zytglogge", "曾是城市西側城門，後來成為鐘樓；整點前約 5 分鐘可看 1530 年代 astronomical clock 的機械人偶。", "外觀全天免費。塔內只可參加約 1 小時 guided tour；現行 public tour 成人 CHF 25、6–16 歲 CHF 12，private tour CHF 300。場次和語言須按 booking calendar 確認，約 130 級樓梯且不適合行動不便者。"],
      ["Kramgasse", "UNESCO Old City 的主要歷史街道；連續 Lauben 拱廊、16 世紀噴泉、地窖商店與砂岩立面共同呈現 Bern 的步行尺度。", "戶外街道全天免費；週日多數零售店休息，但拱廊、噴泉和建築仍可看。Einstein House 位於 Kramgasse 49，已列入完整版預設，預留 30–45 分鐘；時間緊時可跳過。"],
      ["Bern Minster", "Switzerland 最高教堂尖塔及 Bern Old City 天際線核心；西門 Last Judgement 雕刻、nave 與 tower 是重點。", "夏季一般週一至六 church 10:00–17:00、週日 11:30–17:00；tower 最後登塔 16:30。成人登塔 CHF 6、344 級樓梯、無 lift；禮拜及特別活動可臨時限制參觀。"],
      ["Münsterplattform", "Minster 後方高地平台，能俯瞰 Aare 河谷、Matte district 與 Gurten；適合作為觀景與補水的可選延伸。", "戶外平台免費且修復期間仍維持開放；retaining wall 工程持續至 2026 Q4，預期有 scaffolding 及小型圍封。雨後靠崖邊路面可能濕滑。"],
      ["Nydeggbrücke", "跨越 Aare 河谷、連接 Old City 與 BearPark 的橋，最能看清 Bern 半島、高低城與河流地形。", "戶外橋樑免費；從 Old City 前往 BearPark 為下坡，反向返回較費力。"],
      ["BearPark", "Bern 熊徽章與城市身份的現代展示區，沿 Aare 河坡地延伸；觀景平台能回望 Old City。", "戶外觀景區免費、通常全天可看；熊可能因天氣或休息不在視線內。不要把看到熊當作保證。旁邊可在 Altes Tramdepot 休息。"],
      ["Rosengarten", "由東側高地俯瞰整個 Aare 半島、Minster 與 Old City，是最適合收尾的城市全景。", "公園免費、通常全天開放；BearPark 步行上坡約 10–15 分鐘。2026 spring 的 demonstration vineyard 工程可能令 restaurant 旁步道改道，8 月是否完全復原須臨行確認。體力不足時乘 bus 10 往返。"]
    ]
  },
  freiburg: {
    options: [
      ["完整路線", "約半天，將 Old Town、城市門及 Schlossberg 低段串起來。"],
      ["短版路線", "Freiburg Hbf → Martinstor → Münsterplatz → Schwabentor → Freiburg Minster。"],
      ["自然加強版", "由 Schwabentor 延伸 Schlossberg Panorama Trail；只在轉移日體力足夠時使用。"],
      ["雨天備案", "Freiburg Minster、Old Town 小巷、博物館及 Dreisam 河畔短線。"]
    ],
    stops: [
      ["Freiburg (Breisgau) Hbf", "Black Forest 西側的重要交通入口，也是抵達後整理行李及開始 City Walk 的位置。", "可先寄放行李，再進入 Old Town。"],
      ["Martinstor", "保存下來的城市門，呈現 Freiburg 中世紀城牆及現代城市共存的特色。", "可沿 Kaiser-Joseph-Straße 觀察購物街與舊城交界。"],
      ["Münsterplatz", "Freiburg Minster 周邊的核心廣場，市集、建築及城市生活集中於此。", "早上可安排 Münstermarkt；留意市集日程。"],
      ["Freiburg Minster", "哥德式大教堂及 Freiburg 最重要的城市地標，適合看塔樓及細部雕刻。", "可按開放時間參觀內部或登塔。"],
      ["Konviktstraße", "保存良好的窄巷及彩色立面，最能感受 Freiburg Old Town 的步行尺度。", "適合安排小店、甜點或咖啡停留。"],
      ["Schwabentor", "另一座代表性城市門，靠近 Schlossberg，是從城市走入 Black Forest 的轉折點。", "可直接進入 Schlossberg 低段。"],
      ["Schlossberg", "從城市中心即能抵達的山丘，提供 Old Town、Freiburg Minster 及周邊景觀。", "完整 Panorama Trail 留待非搬行李日。"]
    ]
  },
  heidelberg: {
    options: [
      ["完整 City Walk（推薦）", "約 5.5–6.5 公里、4.5–5.5 小時；由 Bismarckplatz 穿過大學與 Old Town，經 Old Bridge 到 Neckar 北岸，再由 Theodor-Heuss-Brücke 回到起點。"],
      ["抵達日短版", "Bismarckplatz → Hauptstraße → Universitätsplatz → Heiliggeistkirche → Marktplatz → Old Bridge；約 2–2.5 小時，不加 Castle 山坡。"],
      ["Castle 城堡版", "Old Town → Kornmarkt → Heidelberg Castle → Old Bridge → Neckarwiese；使用 Bergbahn 減少上坡，不再加入 Philosophenweg。"],
      ["雨天文化版", "Kurpfälzisches Museum → Universitätsplatz → Student Prison／University Museum → Jesuitenkirche → Heiliggeistkirche → café；按星期刪減。"]
    ],
    stops: [
      ["Bismarckplatz", "Heidelberg 公共交通與城市生活的西側節點；先由 Hbf 搭 tram／bus 到這裡，再開始真正的 City Walk。", "交通／起點：先放大型行李；同時記下由 Bismarckplatz 或 Neckarmünzplatz 返回住宿的車線。"],
      ["Hauptstraße", "沿 Old Town 的東西主軸前進，從現代商業段逐步轉入歷史建築、大學生活和較細密的街巷。", "公共步行街、免費；不必逐店停留。週日零售較少，但街道、廣場與餐飲仍可使用。"],
      ["Universitätsplatz", "德國最古老大學的歷史核心之一；Old University、廣場與周邊學生空間把 1386 年傳統帶入今天的城市生活。", "公共廣場免費；University Museum／Student Prison 是獨立 Optional，先看時段與預約。"],
      ["Jesuitenkirche", "巴洛克 Jesuit Church 與較樸素的學院街區形成對比，也補足 Heidelberg 在 Reformation 後的天主教歷史。", "教堂開放受禮拜、活動和現場公告影響；只在大門開放且不妨礙宗教活動時入內。"],
      ["Heiliggeistkirche", "Marktplatz 的城市核心教堂；Bibliotheca Palatina、選帝侯歷史，以及曾被牆分隔的 Catholic／Protestant 空間都集中在這裡。", "宗教活動優先；開放可能調整。無法入內時仍可由外部閱讀教堂、商業攤位與廣場關係。"],
      ["Marktplatz", "Rathaus、Heiliggeistkirche、噴泉與 café 共同構成 Old Town 的市民中心，從廣場亦可抬頭定位 Castle 山坡。", "公共廣場免費；不要把這裡和 Kornmarkt 混為同一站，兩者提供不同的 Castle 視角。"],
      ["Kornmarkt", "由 Old Town 平地轉入 Castle Ridge 的門戶；Madonna、城堡視線與 Kornmarkt Bergbahn station 共同構成垂直交通節點。", "不登 Castle 時只停 15–25 分鐘；登城堡則從這裡切換成獨立半日並檢查 Bergbahn。"],
      ["Old Bridge", "1786–88 年建成的紅砂岩 Carl-Theodor-Brücke，把 Old Town、Castle、Neckar 水位與北岸山坡放進同一視野。", "公共橋樑、免費；拍照靠邊並留意單車／人流。過橋後再決定走平坦河岸或陡峭 Schlangenweg。"],
      ["Neckarwiese", "北岸草地是 Heidelberg 日常休閒空間；由這裡回望 Old Town 和 Castle，可把明信片景觀轉成完整的河谷剖面。", "公共河岸、免費；夏季補水、防曬。高水位或雷雨時不靠近岸緣，改走城市側街道。"],
      ["Theodor-Heuss-Brücke", "由北岸跨回城市西端，沿途比較現代橋樑、河流交通和 Old Bridge 的歷史景觀。", "公共橋樑、免費；此處是完整閉環最後一段，體力不足可提前在北岸搭 bus。"],
      ["Bismarckplatz (return)", "回到可靠的 tram／bus 樞紐，完成不重複折返的 Old Town—Neckar 閉環。", "至少保留 15 分鐘查車與回住宿；已經完成主線時，不再臨時加 Castle 或高地。"]
    ]
  },
  frankfurt: {
    options: [
      ["完整路線", "約半天，串連金融區、New Old Town、River Main 及 Museum Embankment。"],
      ["短版路線", "Hauptwache → New Old Town → Römer → Frankfurt Cathedral → Eiserner Steg。"],
      ["博物館加強版", "由 Eiserner Steg 前往 Museum Embankment，選擇 Städel Museum 或其他一間博物館。"],
      ["航班日前備案", "只走 New Old Town、Römer 及 River Main，提早回住宿取行李。"]
    ],
    stops: [
      ["Frankfurt (Main) Hbf", "大型交通樞紐及 Frankfurt 的現代入口，能感受城市的商務及交通規模。", "抵達後先放行李，再開始 City Walk。"],
      ["Main Tower", "從金融區觀察 Frankfurt skyline，理解城市作為金融中心的現代面貌。", "可預約觀景台；時間不足只看外觀。"],
      ["Alte Oper", "由舊歌劇院廣場開始，感受 Frankfurt 的文化及商業區交界。", "可沿 Goethestraße 走向 Hauptwache。"],
      ["Hauptwache", "歷史建築與現代購物街交會的城市節點，適合觀察新舊並置。", "可把 Zeil 作為購物或咖啡 optional 路段。"],
      ["New Old Town", "2018 年完成的重建區，呈現 Frankfurt 如何在歷史遺址上重建城市生活。", "可參觀 Historical Museum 或 Schirn Kunsthalle。"],
      ["Römer", "Frankfurt 最具代表性的市政及歷史建築群，理解城市的政治與商業傳統。", "可搭配 New Old Town 小巷慢慢探索。"],
      ["Frankfurt Cathedral", "與 Frankfurt 歷史、皇帝加冕及城市天際線相關的重要宗教建築。", "留意開放時間，再決定是否入內。"],
      ["Eiserner Steg", "跨越 River Main 的步行橋，提供 skyline、河岸及 Old Town 的綜合視角。", "適合日落時段，但要留意返程時間。"],
      ["Museum Embankment", "沿 River Main 集中多間博物館，代表 Frankfurt 的藝術與文化面向。", "選一間 Städel Museum 等博物館，不要一次安排太多。"]
    ]
  }
};

const cityWalkOptionalStops = {
  zurich: [
    ["St. Peter's Church", 47.369300, 8.541000, "Zurich 最古老教堂之一，擁有醒目的大型鐘面。週六 09:00–15:00、週日 09:00–16:00，教堂參觀免費；8/16 的 St. Peter 會眾參加 Grossmünster 10:00 聯合禮拜。"],
    ["Bürkliplatz", 47.366900, 8.540800, "Lake Zurich 碼頭、船班與湖畔景觀的入口。戶外公共廣場、全天免費；湖船依 ZSG 當日 timetable，天氣及活動可能影響班次。"],
    ["Niederdorf", 47.373400, 8.544100, "Old Town 東側的步行街區，餐廳及小店密集。戶外街區、全天免費；週日個別零售店可能休息，餐廳各自營業。"],
    ["Central", 47.376950, 8.544280, "Limmat River、Polybahn 與 tram 的轉乘點，可步行回 Zürich HB。戶外公共交通節點、全天可通行；Polybahn / tram 依 ZVV timetable。"],
    ["Uetliberg", 47.349900, 8.491100, "Zurich 的 local mountain 及全景觀景點。山頂與步道免費、全天開放；但 2026/4/29–10/18 S10 在 Zürich HB–Selnau 段停駛，需由 HB 步行至 Selnau 或 tram 3 / 14 至 Stauffacher 後步行轉乘，預留額外時間。"],
    ["Swiss National Museum", 47.379650, 8.540300, "瞭解 Switzerland 歷史的博物館。週五至日 10:00–17:00，入館需買票；2026/8/1–24 只有 library 因盤點關閉，museum、boutique 和 bistro 正常。"],
    ["Lindt Home of Chocolate", 47.320600, 8.536700, "Kilchberg 的巧克力博物館及體驗。每日 10:00–19:00；museum 必須預約 timed ticket（熱門日不接受臨時到訪），但 fountain、shop 與 café 無票可進。"],
    ["Limmat River Cruise", 47.379500, 8.540500, "由 National Museum 出發的城市河上觀光。2026/4/6–10/19 季節營運、round trip 約 1 小時；可用 ZVV zone 110 single ticket（成人 CHF 4.70）或 Zürich Card，出發時間與水位／城市活動須當日確認。"],
    ["Schanzengraben", 47.373080, 8.533980, "由防禦壕溝轉成的安靜水道。戶外步道、免費且通常全天可走；雨後地面可能濕滑，沒有固定場館開放時間。"],
    ["Old Botanical Garden", 47.374550, 8.528840, "城市中心的綠洲及 University Quarter。戶外公園、免費；以現場出入口與園內公告為準，不作需要預約的主活動。"],
    ["Zürichhorn", 47.354700, 8.557600, "Lake Zurich 湖畔公園及 China Garden。湖畔公園免費、全天開放；China Garden 屬獨立收費景點，需另查當日開放。"],
    ["Zurich Opera House", 47.364500, 8.546700, "Lake Zurich 旁的文化地標。8 月為 summer break，外觀與廣場可看，但不安排 opera 或 public guided tour；導覽預計 9/13 起恢復並需預先購票。"],
    ["Zürich West / Im Viadukt", 47.388200, 8.521800, "創意街區、鐵路拱廊及 Markthalle。戶外街區免費；店舖、market hall 與餐廳各自營業，週日多數零售店可能不開。"],
    ["Stadtkäserei", 47.382500, 8.535000, "Cheese Workshop 及城市起司工坊。2.5 小時、CHF 145／人、6–12 人團體，通常週三至五、週六可申請，至少 2 週前預約；週日不適合臨時加入。"],
    ["Swiss Chuchi", 47.371700, 8.544000, "Old Town fondue restaurant。週一至五 11:30–23:15、週六至日 12:00–23:15；建議晚餐先訂位。"],
    ["Le Dézaley", 47.371600, 8.544500, "Grossmünster 附近的 Swiss cuisine restaurant。週一至六 11:30–14:00、18:00–24:00；週日休息，晚餐建議訂位。"],
    ["Zeughauskeller", 47.369500, 8.539900, "傳統 Swiss dishes 及 guild hall 餐廳。每日約 11:30–23:00，熱門時段建議預約或預留排隊。"],
    ["Sternen Grill", 47.366900, 8.545900, "Bellevue 附近的 bratwurst 快餐，適合湖邊、Opera House 外觀或趕 tram 前快速吃。周日 10:30–23:00（last sausage 22:45），週二至六營業至 24:00；無需訂位，熱門時段可能排隊。"],
    ["Schokolade & Espresso Bar", 47.371397, 8.543873, "Münstergasse 19｜Schwarzenbach 的 espresso、hot chocolate 及 350+ 手工巧克力；週六 09:00–17:00，週日休息。適合 Grossmünster / Niederdorf 間 15–30 分鐘短停，不適合作正餐。"],
    ["St Andrew's Anglican Church", 47.368696, 8.549423, "Promenadengasse 9｜English-language Anglican / Protestant worship。週日 09:00 Said Eucharist（約 45 分鐘、安靜 spoken service）或 10:30 Sung Eucharist（約 1 小時、hymns，之後 coffee）。無票／通常無需預約；位於 Kunsthaus 附近，適合週日上午加入。"],
    ["Hillsong Zürich", 47.389667, 8.492258, "Campus für Christus｜Hohlstrasse 535, 8048 Zürich。週日 10:30 German / English contemporary evangelical service，含 modern worship 與 Hillsong Kids；無票／通常無需預約。由 Zürich HB 乘 train 到 Zürich Altstetten 後步行約 5 分鐘；較適合想參與現代敬拜，而非 Old Town 教堂體驗的人。"],
    ["Babu's Bakery & Coffeehouse", 47.373173, 8.534405, "Löwenstrasse 1｜早餐、brunch、bagel、pancake、eggs、Rösti、Birchermüesli、cake 與 coffee。週六 08:00–18:00｜週日 09:00–17:00；一般可 walk-in，brunch platter 才建議預訂。"],
    ["Confiserie Sprüngli at Zürich HB", 47.379000, 8.539800, "Zürich HB，ShopVille / Halle Landesmuseum（-2，近 41/42 號月台扶梯）｜Bircher muesli、sandwich、salad、coffee 與 Luxemburgerli。週六 06:30–20:00｜週日 08:00–20:00；無需訂位，適合轉車前補給。"],
    ["Haus Hiltl", 47.373304, 8.536750, "Sihlstrasse 28｜歷史悠久的 vegetarian buffet、à la carte、coffee 與 pastry。週六 08:00–23:00｜週日 10:00–22:00；適合蔬食／vegan 或口味不同的同行者，繁忙時可訂位。"],
    ["Conditorei Schober", 47.370865, 8.541847, "Wühre 15｜Limmat 河邊的 hot chocolate、praline、cake 與 pastry。週二至五 10:00–18:30｜週六 10:00–17:30｜週日、週一休息；適合 8/15 下午茶，不適合週日。"]
  ],
  bern: [
    ["Bern Historical Museum", 46.945300, 7.445300, "Bern 與 Switzerland 歷史、Einstein Museum 及文化展覽。通常有固定休館規律，作為雨天選項前須查看官方日曆；開放時可安排約 1.5–2 小時。"],
    ["Einstein House", 46.948900, 7.451400, "Kramgasse 49｜Einstein 1903–1905 年居所。2026/2/4–12/18 每日 10:00–17:00、最後入場 16:45；成人 CHF 8，Swiss Travel Pass 成人 CHF 6。空間小，預留 30–45 分鐘。"],
    ["Altes Tramdepot", 46.948600, 7.460700, "BearPark 旁的 brewery restaurant，可看 Old City 與 Aare 河。適合 BearPark 後午餐、啤酒或休息；週末／晚餐時段建議訂位，飲酒後不要安排 Aare 水上活動。"],
    ["Marzili", 46.938200, 7.444600, "Aare 河與 Marzili outdoor pool 一帶的 Bern 夏季生活區。河水流速快，不把自行下河游泳列為觀光活動；只散步或在正式泳池活動較穩妥。"],
    ["Gurtenbahn", 46.929200, 7.465000, "前往 Gurten local mountain 的 funicular lower station。適合獨立半日，不接在 Full City Walk 後；住朋友家通常沒有 Bern-Ticket，需另查 Libero ticket。"],
    ["French Church", 46.948000, 7.447000, "Bern Old City 內的 former Dominican church，反映 Bern 中世紀宗教與 Reformation 歷史。開放受 worship、concert 與活動影響，只有路過且大門開放時才入內。"],
    ["Kornhauskeller", 46.949100, 7.447600, "Kornhausplatz 18｜宏偉拱頂地窖餐廳；現行菜單有 CHF 39 Berner Platte、Kornhaus Rösti 與 Bärner Geschnetzeltes。週一至六 11:30–14:30、17:30–23:30；週日 12:00–15:00、17:30–22:00。建議訂位。"],
    ["Restaurant Harmonie", 46.947900, 7.450200, "Hotelgasse 3｜傳統 Bern restaurant，主打 fondue、Chäshörnli 和 Swiss home-style dishes。營業日與最後點餐時間請臨行查看餐廳官網。"],
    ["Restaurant Rosengarten", 46.951400, 7.459900, "Rosengarten 旁的景觀餐廳，每日 09:00–23:30；適合 City Walk 終點 coffee、午餐或 sunset dinner。景觀座位受天氣影響，熱門時段建議訂位。"],
    ["Lötschberg", 46.947300, 7.441700, "Zeughausgasse 16｜每日 11:00–23:00、hot food 11:45–21:30；可吃 rösti、fondue、raclette 與 Swiss wine。比景觀餐廳更靠近 Bern Bahnhof，週日抵達晚餐亦可。"],
    ["Confiserie Tschirren", 46.948200, 7.447800, "Kramgasse 一帶的 Bern chocolate / confectionery stop，適合 pralines、truffles 或小份甜點。零售營業受星期與假日影響，以店方當日資料為準。"]
  ],
  freiburg: [
    ["Schlossbergbahn", 47.992800, 7.858500, "較省力登上 Schlossberg 的纜車"],
    ["Dreisam river", 47.987800, 7.856000, "適合短距離放鬆的河岸步道"],
    ["Seepark", 48.012500, 7.815500, "Green City 氛圍較強的城市公園"],
    ["St. Martin Church", 47.995000, 7.851800, "Münsterplatz 附近的歷史教堂，適合順路參觀"]
  ],
  heidelberg: [
    ["Heidelberg Castle", 49.410600, 8.715700, "城堡庭院、Altan、大酒桶與 German Pharmacy Museum。2026 每日 09:00–18:00、最後入場 17:30；成人 €11 含 Kornmarkt–Schloss–Molkenkur 下段 Bergbahn 往返。至少留 2.5–3 小時，不放進抵達日晚段。"],
    ["Philosopher's Walk", 49.414900, 8.717500, "由 Schlangenweg 登上北岸山坡的經典觀景段；可回望 Old Town、Castle 與 Neckar。上坡、石階和曝曬明顯，與 Castle 通常分日，雷雨或濕滑時取消。"],
    ["Kurpfälzisches Museum", 49.411250, 8.700850, "藝術、考古與 Heidelberg／Kurpfalz 城市史的室內選擇，位於 Hauptstraße 主線旁；作為雨天核心前，先查當日展覽、休館與最後入場。"],
    ["Student Prison + University Museum", 49.410200, 8.706200, "6–9 月 Tue–Sun 10:00–18:00，13:45–14:15 暫停入場、最後入場 17:15；combo 成人 €7.50。Student Prison 容量小、樓梯多，建議預約並準備 locker 的 €1 coin。"],
    ["Königstuhl", 49.381300, 8.716700, "Heidelberg 567 m local mountain，可由歷史上段 Bergbahn 抵達。晴天看 Rhine plain；與 Heiligenberg 二選一，雷雨、強風或低能見度時取消。"],
    ["Neckar boat cruise", 49.413300, 8.713900, "由 Neckarstaden 一帶出發的季節性遊船；只在班次與 City Walk 節奏吻合時加入。水位、天氣與 operator 可能改班，不能當作固定回程交通。"],
    ["Café Knösel", 49.412050, 8.710150, "Haspelgasse 20｜Heidelberg 最老的 café 之一，也是 Studentenkuss 的代表停靠點。現行官網列每日 09:00 起、廚房至 17:00；買一顆 Studentenkuss 或短暫 coffee break 即可。"],
    ["Hackteufel", 49.413250, 8.711650, "Steingasse 7、Old Bridge 路段｜Maultaschen、Saumagen、Spätzle 與區域菜。現行廚房 Sun–Thu 至 21:30、Fri–Sat 至 22:00；主餐建議訂位。"],
    ["Schnitzelbank Heidelberg", 49.410300, 8.707000, "Bauamtsgasse 7、University／Old Town 路段｜Saumagen、Leberknödel、Schnitzel、Käsespätzle。2026 Mon–Fri 17:00–22:00、Sat–Sun 12:00–22:00，廚房至 21:00。"],
    ["Vetter's Alt Heidelberger Brauhaus", 49.412750, 8.711000, "Steingasse 9、Heiliggeistkirche → Old Bridge｜自釀啤酒與德國／區域菜。Sun–Thu 11:30–24:00、Fri–Sat 至 01:00；室內可訂位，Biergarten 以 walk-in 為主。"]
  ],
  frankfurt: [
    ["Städel Museum", 50.103800, 8.675800, "Museum Embankment 的主要藝術博物館"],
    ["Historical Museum", 50.109600, 8.682600, "Frankfurt 城市歷史及 New Old Town 背景"],
    ["Schirn Kunsthalle", 50.110300, 8.684500, "當代及專題藝術展覽空間"],
    ["Zeil", 50.114600, 8.681600, "Frankfurt 主要購物街"],
    ["St. Paul's Church", 50.110600, 8.680300, "Frankfurt 重要的民主歷史地標及圓形教堂建築"]
  ]
};

const cityAccommodationStops = {
  zurich: [
    ["25hours Hotel Zürich Langstrasse", 47.38030, 8.52850, "H1｜已訂住宿｜Langstrasse 150；位於 Europaallee / Langstrasse 一側，距 Zürich HB 約 9–12 分鐘步行。抵達後可先寄放行李，再步行回 HB 開始 City Walk。"]
  ]
};

const attractionImageQueries = {
  "Zurich HB": "Zürich Hauptbahnhof",
  Bahnhofstrasse: "Bahnhofstrasse",
  Lindenhof: "Lindenhof Zürich",
  Grossmünster: "Grossmünster",
  Fraumünster: "Fraumünster",
  Bürkliplatz: "Bürkliplatz",
  Bellevue: "Bellevueplatz Zürich",
  "Bern Bahnhof": "Bern railway station",
  Bundeshaus: "Federal Palace of Switzerland",
  Zytglogge: "Zytglogge",
  Kramgasse: "Kramgasse Bern",
  "Bern Minster": "Bern Minster",
  Münsterplattform: "Münsterplattform Bern",
  Nydeggbrücke: "Nydeggbrücke",
  BearPark: "Bärengraben",
  Rosengarten: "Rosengarten Bern",
  "Freiburg (Breisgau) Hbf": "Freiburg Hauptbahnhof",
  Martinstor: "Martinstor",
  Münsterplatz: "Münsterplatz Freiburg",
  "Freiburg Minster": "Freiburg Minster",
  Konviktstraße: "Konviktstraße Freiburg",
  Schwabentor: "Schwabentor",
  Schlossberg: "Schlossberg Freiburg",
  Bismarckplatz: "Bismarckplatz Heidelberg",
  Hauptstraße: "Hauptstraße Heidelberg",
  Universitätsplatz: "Universitätsplatz Heidelberg",
  "Heidelberg Old Town": "Old Town Heidelberg",
  "Heidelberg Castle": "Heidelberg Castle",
  "Philosophenweg": "Philosophenweg Heidelberg",
  "Alte Brücke": "Old Bridge Heidelberg",
  Heiliggeistkirche: "Church of the Holy Spirit Heidelberg",
  Marktplatz: "Marktplatz Heidelberg",
  "Old Bridge": "Old Bridge Heidelberg",
  Jesuitenkirche: "Jesuit Church Heidelberg",
  Kornmarkt: "Kornmarkt Heidelberg",
  Neckarwiese: "Neckarwiese Heidelberg",
  "Theodor-Heuss-Brücke": "Theodor Heuss Bridge Heidelberg",
  "Bismarckplatz (return)": "Bismarckplatz Heidelberg",
  Römerberg: "Römerberg",
  "Frankfurt (Main) Hbf": "Frankfurt Central Station",
  "Frankfurt Cathedral": "Frankfurt Cathedral",
  Hauptwache: "Hauptwache",
  "New Old Town": "New Frankfurt Old Town",
  Römer: "Römer Frankfurt",
  "Eiserner Steg": "Eiserner Steg",
  "Museum Embankment": "Museumsufer",
  "Kleinmarkthalle": "Kleinmarkthalle",
  "Main Tower": "Main Tower",
  "Alte Oper": "Alte Oper",
  "Palmengarten": "Palmengarten Frankfurt",
  "Titisee Black Forest": "Lake Titisee",
  "Triberg Waterfalls Schwarzwaldbahn": "Triberg Waterfalls",
  "Todtnau Black Forest": "Todtnau",
  "Schiltach Black Forest": "Schiltach",
  "Baden Baden Germany": "Baden-Baden",
  "Bad Wildbad Black Forest": "Bad Wildbad",
  "Europa Park Rust": "Europa-Park",
  "Basel Switzerland": "Basel",
  "Strasbourg France": "Strasbourg",
  "Colmar France": "Colmar",
  "Wengen Lauterbrunnen": "Wengen",
  "Mürren Gimmelwald": "Mürren",
  "Grindelwald Switzerland": "Grindelwald",
  "Iseltwald Lake Brienz": "Iseltwald",
  "ETH Zurich / Polyterrasse": "ETH Zurich",
  Uetliberg: "Uetliberg",
  "Kunsthaus Zürich": "Kunsthaus Zürich",
  "Swiss National Museum": "Swiss National Museum",
  "Lindt Home of Chocolate": "Lindt Home of Chocolate",
  "Limmat River Cruise": "Limmat Zürich",
  Schanzengraben: "Schanzengraben Zürich",
  "Old Botanical Garden": "Old Botanical Garden Zürich",
  Zürichhorn: "Zürichhorn",
  "Zurich Opera House": "Zürich Opera House",
  "Zürich West / Im Viadukt": "Im Viadukt Zürich",
  Stadtkäserei: "Stadtkäserei Zürich",
  "Swiss Chuchi": "Swiss Chuchi Zürich",
  "Le Dézaley": "Le Dézaley Zürich",
  Zeughauskeller: "Zeughauskeller Zürich",
  "Sternen Grill": "Sternen Grill Zürich",
  "Zürcher Geschnetzeltes + Rösti": "Zürcher Geschnetzeltes",
  "Cheese fondue": "Cheese fondue",
  Raclette: "Raclette",
  Älplermagronen: "Älplermagronen",
  Capuns: "Capuns",
  Birchermüesli: "Bircher muesli",
  "St. Galler bratwurst": "St. Galler Bratwurst",
  Luxemburgerli: "Luxemburgerli",
  "Teuscher Champagne Truffle": "Champagne truffle",
  "Sprüngli chocolate & pralines": "Confiserie Sprüngli",
  "laflor bean-to-bar chocolate": "laflor chocolate Zurich",
  "Taucherli drinking chocolate": "Taucherli",
  "St. Peter's Church": "St. Peter church Zürich",
  Predigerkirche: "Predigerkirche Zürich",
  "Bern Historical Museum": "Bern Historical Museum",
  "Einstein House": "Einstein House Bern",
  "Altes Tramdepot": "Altes Tramdepot Bern",
  Kornhauskeller: "Kornhaus Bern",
  "Restaurant Harmonie": "Restaurant Harmonie Bern",
  "Restaurant Rosengarten": "Rosengarten Bern",
  Lötschberg: "Lötschberg restaurant Bern",
  "Confiserie Tschirren": "Swiss chocolate pralines",
  "Berner Platte": "Berner Platte",
  "Bern Rösti": "Rösti",
  Chäshörnli: "Swiss macaroni cheese",
  Zibelechueche: "Swiss onion tart",
  "Bernese chocolate": "Swiss chocolate pralines",
  Marzili: "Marzili Bern",
  Gurtenbahn: "Gurtenbahn",
  "French Church": "French Church Bern",
  Schlossbergbahn: "Schlossbergbahn Freiburg",
  "Dreisam river": "Dreisam",
  Seepark: "Seepark Freiburg",
  "St. Martin Church": "St. Martin Church Freiburg",
  "Kurpfälzisches Museum": "Kurpfälzisches Museum Heidelberg",
  "Student Prison + University Museum": "Studentenkarzer Heidelberg",
  Königstuhl: "Königstuhl Heidelberg",
  "Neckar boat cruise": "Neckar Heidelberg boat",
  Hackteufel: "Hackteufel Heidelberg",
  "Schnitzelbank Heidelberg": "Schnitzelbank Heidelberg",
  "Café Knösel": "Heidelberger Studentenkuss",
  "Vetter's Alt Heidelberger Brauhaus": "Vetter Heidelberg Brauhaus",
  "Städel Museum": "Städel Museum",
  "Historical Museum": "Historical Museum Frankfurt",
  "Schirn Kunsthalle": "Schirn Kunsthalle Frankfurt",
  Zeil: "Zeil Frankfurt",
  "St. Paul's Church": "St. Paul's Church Frankfurt",
};

const cityWalkPresets = {
  zurich: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 }, { type: "main", index: 9 },
      { type: "main", index: 10 }, { type: "main", index: 11 },
      { type: "main", index: 12 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 0 }, { type: "main", index: 4 },
      { type: "main", index: 5 }, { type: "main", index: 6 },
      { type: "main", index: 11 }, { type: "main", index: 12 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 }, { type: "main", index: 9 },
      { type: "main", index: 10 },
      { type: "optional", index: 10 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 0 }, { type: "main", index: 4 },
      { type: "main", index: 5 }, { type: "main", index: 6 },
      { type: "main", index: 11 }, { type: "main", index: 12 },
      { type: "optional", index: 5 }
    ]
  ],
  bern: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 1 }, { type: "main", index: 4 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 1 }, { type: "main", index: 4 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 },
      { type: "optional", index: 3 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 1 }, { type: "main", index: 4 },
      { type: "optional", index: 0 }
    ]
  ],
  freiburg: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 5 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 5 }, { type: "main", index: 6 },
      { type: "optional", index: 1 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 2 },
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "optional", index: 1 }
    ]
  ],
  heidelberg: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 }, { type: "main", index: 9 },
      { type: "main", index: 10 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 4 },
      { type: "main", index: 5 }, { type: "main", index: 7 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "optional", index: 0 },
      { type: "main", index: 7 }, { type: "main", index: 8 },
      { type: "main", index: 9 }, { type: "main", index: 10 }
    ],
    [
      { type: "main", index: 0 }, { type: "optional", index: 2 },
      { type: "main", index: 2 }, { type: "optional", index: 3 },
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "optional", index: 6 }
    ]
  ],
  frankfurt: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "main", index: 8 }
    ],
    [
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "main", index: 5 }, { type: "main", index: 6 },
      { type: "main", index: 7 }
    ],
    [
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "main", index: 5 }, { type: "main", index: 6 },
      { type: "main", index: 7 }, { type: "main", index: 8 },
      { type: "optional", index: 0 }
    ],
    [
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 }
    ]
  ]
};

const cityWalkPresetShortcuts = {
  zurich: [
    { label: "完整 City Walk", meta: "推薦 · 4–5 小時" },
    { label: "Old Town 短版", meta: "延誤／省體力 · 2–2.5 小時" },
    { label: "湖景加強版", meta: "湖岸延伸 · tram 回程" },
    { label: "雨天文化版", meta: "室內優先 · 彈性路線" }
  ],
  bern: [
    { label: "完整 City Walk", meta: "推薦 · 4.5–5.5 小時" },
    { label: "Old City 精簡版", meta: "半天／晚出發 · 2–2.5 小時" },
    { label: "河谷景觀版", meta: "Aare＋Rosengarten · 體力充足" },
    { label: "雨天文化版", meta: "拱廊＋室內 · 少走陡坡" }
  ],
  freiburg: [
    { label: "完整 City Walk", meta: "推薦 · 約半天" },
    { label: "Old Town 短版", meta: "省體力 · 不上 Schlossberg" },
    { label: "自然加強版", meta: "Schlossberg＋河岸延伸" },
    { label: "雨天文化版", meta: "Minster＋室內 · 彈性路線" }
  ],
  heidelberg: [
    { label: "完整 City Walk", meta: "推薦 · 4.5–5.5 小時" },
    { label: "抵達日短版", meta: "Old Town 主線 · 2–2.5 小時" },
    { label: "Castle 城堡版", meta: "Bergbahn＋河岸 · 6–8 小時" },
    { label: "雨天文化版", meta: "大學＋博物館 · 室內優先" }
  ],
  frankfurt: [
    { label: "完整 City Walk", meta: "推薦 · 4–6 小時" },
    { label: "Old Town 短版", meta: "Römer＋河岸 · 2–3 小時" },
    { label: "博物館加強版", meta: "Museumsufer · 選一間館" },
    { label: "航班日前短版", meta: "輕量收尾 · 提早取行李" }
  ]
};

const cityDiningSchedules = {
  zurich: [
    {
      id: "breakfast",
      label: "早餐／Brunch",
      note: "慢早餐選 Babu’s；趕火車選 Zürich HB Sprüngli；蔬食或同行口味不同時選 Hiltl。",
      optionalIndexes: [21, 22, 23]
    },
    {
      id: "lunch",
      label: "午餐",
      note: "傳統肉食選 Zeughauskeller，fondue／raclette 選 Swiss Chuchi，清爽蔬食選 Hiltl。",
      optionalIndexes: [16, 14, 23]
    },
    {
      id: "coffee",
      label: "下午茶／Coffee & Chocolate",
      note: "8/15 City Walk 可選 Schwarzenbach 或 Schober；8/16 星期日以 Zürich HB Sprüngli 最穩妥。",
      optionalIndexes: [18, 24, 22]
    },
    {
      id: "dinner",
      label: "晚餐",
      note: "fondue 選 Swiss Chuchi 或 Le Dézaley；不想吃 cheese 可選 Hiltl 或 Zeughauskeller。",
      optionalIndexes: [14, 15, 23, 16]
    },
    {
      id: "snacks",
      label: "Snacks／快速補給",
      note: "湖邊快速吃選 Sternen Grill；換城與行李日優先 Zürich HB Sprüngli。",
      optionalIndexes: [17, 22]
    }
  ],
  bern: [
    {
      id: "lunch",
      label: "午餐",
      note: "Old City 內選 Kornhauskeller／Harmonie；想把主餐留到路線末段，可選 Lötschberg。",
      optionalIndexes: [6, 7, 9]
    },
    {
      id: "coffee",
      label: "咖啡／甜點／巧克力",
      note: "Kramgasse 一帶用 Confiserie Tschirren 作短停；買少量 praline 或甜點即可繼續步行。",
      optionalIndexes: [10]
    },
    {
      id: "view-break",
      label: "BearPark／Rosengarten 休息",
      note: "Altes Tramdepot 在河谷段，Restaurant Rosengarten 在全景終點；兩者通常二選一，不必重複安排。",
      optionalIndexes: [2, 8]
    },
    {
      id: "dinner",
      label: "晚餐",
      note: "傳統 Bern 菜優先 Kornhauskeller 或 Harmonie；景觀收尾選 Rosengarten；靠近車站選 Lötschberg。",
      optionalIndexes: [6, 7, 8, 9]
    }
  ],
  heidelberg: [
    {
      id: "lunch",
      label: "午餐／Brauhaus",
      note: "Old Bridge 一帶選 Hackteufel 或 Vetter’s；兩者都在路線後段，同一餐只選一家。",
      optionalIndexes: [7, 9]
    },
    {
      id: "coffee",
      label: "咖啡／Studentenkuss",
      note: "Café Knösel 位於 Heiliggeistkirche → Old Bridge 之間，適合 20–40 分鐘甜點停留。",
      optionalIndexes: [6]
    },
    {
      id: "dinner",
      label: "晚餐／區域菜",
      note: "University 一帶選 Schnitzelbank；Old Bridge 一帶選 Hackteufel 或 Vetter’s。山坡行程結束後再吃重菜。",
      optionalIndexes: [8, 7, 9]
    }
  ]
};

const cityWalkDefaultRoutes = {
  bern: cityWalkPresets.bern[0],
  heidelberg: cityWalkPresets.heidelberg[0]
};

function getDefaultRouteItems(routeName) {
  const configuredRoute = cityWalkDefaultRoutes[routeName];
  const routeItems = configuredRoute || cityWalkRoutes[routeName].map((stop, index) => ({
    type: "main", index
  }));
  return routeItems.map((item) => ({ ...item, active: true }));
}

const attractionCategories = {
  zurich: {
    "Zurich HB": "交通／城市入口",
    Bahnhofstrasse: "購物／城市散步",
    Lindenhof: "歷史／觀景",
    Augustinergasse: "老街／城市散步",
    Grossmünster: "教堂／宗教歷史",
    Fraumünster: "教堂／藝術",
    Münsterbrücke: "橋樑／河景",
    Bürkliplatz: "湖畔／觀景",
    Bellevue: "湖畔／城市散步",
    Niederdorf: "老城／城市散步",
    Central: "交通／河岸景觀",
    "Lake Zurich promenade": "湖畔／散步",
    "Zurich HB (return)": "交通／路線終點",
    "University of Zurich": "大學／城市文化",
    "ETH Zurich / Polyterrasse": "校園／觀景",
    Uetliberg: "自然／觀景",
    "Kunsthaus Zürich": "博物館／藝術",
    "Swiss National Museum": "博物館／歷史",
    "Lindt Home of Chocolate": "博物館／美食體驗",
    "Limmat River Cruise": "遊船／觀景",
    Schanzengraben: "水岸／散步",
    "Old Botanical Garden": "公園／散步",
    Zürichhorn: "湖畔／公園",
    "Zurich Opera House": "文化／表演",
    "Zürich West / Im Viadukt": "街區／購物",
    Stadtkäserei: "美食／體驗",
    "Swiss Chuchi": "餐廳／Swiss cuisine",
    "Le Dézaley": "餐廳／Swiss cuisine",
    Zeughauskeller: "餐廳／傳統美食",
    "Sternen Grill": "小吃／快餐",
    "Schokolade & Espresso Bar": "咖啡／巧克力",
    "St Andrew's Anglican Church": "教堂／英文禮拜",
    "Hillsong Zürich": "教堂／英德雙語現代敬拜",
    "Babu's Bakery & Coffeehouse": "早餐／咖啡",
    "Confiserie Sprüngli at Zürich HB": "早餐／甜點",
    "Haus Hiltl": "餐廳／蔬食",
    "Conditorei Schober": "咖啡／甜點",
    "St. Peter's Church": "教堂／宗教歷史",
    Predigerkirche: "教堂／宗教歷史"
  },
  bern: {
    "Bern Bahnhof": "交通／城市入口",
    Bundeshaus: "政治／歷史",
    Zytglogge: "歷史／城市地標",
    Kramgasse: "老城／拱廊與噴泉",
    "Bern Minster": "教堂／宗教歷史",
    Münsterplattform: "觀景／散步",
    Nydeggbrücke: "橋樑／觀景",
    BearPark: "自然／城市生活",
    Rosengarten: "公園／觀景",
    "Bern Historical Museum": "博物館／歷史",
    "Einstein House": "博物館／人物歷史",
    "Altes Tramdepot": "餐廳／啤酒",
    Marzili: "河岸／休閒",
    Gurtenbahn: "交通／自然觀景",
    "French Church": "教堂／宗教歷史",
    Kornhauskeller: "餐廳／Bernese cuisine",
    "Restaurant Harmonie": "餐廳／傳統美食",
    "Restaurant Rosengarten": "餐廳／景觀",
    Lötschberg: "餐廳／Swiss cuisine",
    "Confiserie Tschirren": "巧克力／甜點"
  },
  freiburg: {
    "Freiburg (Breisgau) Hbf": "交通／城市入口",
    Martinstor: "歷史／城市地標",
    Münsterplatz: "廣場／市集",
    "Freiburg Minster": "教堂／宗教歷史",
    Konviktstraße: "老街／城市散步",
    Schwabentor: "歷史／城市地標",
    Schlossberg: "自然／觀景",
    Schlossbergbahn: "交通／自然觀景",
    "Dreisam river": "河岸／散步",
    Seepark: "公園／散步",
    "St. Martin Church": "教堂／宗教歷史"
  },
  heidelberg: {
    Bismarckplatz: "交通／城市生活",
    "Bismarckplatz (return)": "交通／路線終點",
    Hauptstraße: "購物／城市散步",
    Universitätsplatz: "大學／歷史",
    Jesuitenkirche: "教堂／宗教歷史",
    Heiliggeistkirche: "教堂／宗教歷史",
    Marktplatz: "廣場／城市生活",
    Kornmarkt: "廣場／城堡交通",
    "Old Bridge": "橋樑／觀景",
    Neckarwiese: "河岸／城市生活",
    "Theodor-Heuss-Brücke": "橋樑／路線返回",
    "Heidelberg Castle": "城堡／歷史",
    "Philosopher's Walk": "步道／觀景",
    "Kurpfälzisches Museum": "博物館／藝術歷史",
    "Student Prison + University Museum": "博物館／大學文化",
    Königstuhl: "自然／觀景",
    "Neckar boat cruise": "遊船／河谷觀景",
    Hackteufel: "餐廳／Palatinate cuisine",
    "Schnitzelbank Heidelberg": "餐廳／傳統美食",
    "Café Knösel": "咖啡／巧克力",
    "Vetter's Alt Heidelberger Brauhaus": "餐廳／Brauhaus"
  },
  frankfurt: {
    "Frankfurt (Main) Hbf": "交通／城市入口",
    "Main Tower": "觀景／城市天際線",
    "Alte Oper": "文化／建築",
    Hauptwache: "歷史／購物",
    "New Old Town": "歷史／城市散步",
    Römer: "歷史／城市地標",
    "Frankfurt Cathedral": "教堂／宗教歷史",
    "Eiserner Steg": "橋樑／河岸觀景",
    "Museum Embankment": "博物館／藝術",
    "Städel Museum": "博物館／藝術",
    "Historical Museum": "博物館／城市歷史",
    "Schirn Kunsthalle": "博物館／當代藝術",
    Zeil: "購物／城市散步",
    "St. Paul's Church": "教堂／宗教歷史"
  }
};

const bilingualStopNames = {
  zurich: {
    "Zurich HB": "Zürich HB (Zurich Main Station)",
    Bahnhofstrasse: "Bahnhofstrasse (Station Street)",
    Lindenhof: "Lindenhof (Lindenhof Hill)",
    Augustinergasse: "Augustinergasse (Old Town Lane)",
    Grossmünster: "Grossmünster (Gross Minster)",
    Fraumünster: "Fraumünster (Fraumünster Church)",
    Münsterbrücke: "Münsterbrücke (Minster Bridge)",
    Bürkliplatz: "Bürkliplatz (Bürkliplatz Square)",
    Bellevue: "Bellevue (Bellevue Square)",
    Niederdorf: "Niederdorf (Old Town Quarter)",
    Central: "Central (Limmat River Transit Hub)",
    "Lake Zurich promenade": "Lake Zurich promenade (Lakeside Walk)",
    "Zurich HB (return)": "Zürich HB (Return to Zurich Main Station)",
    "University of Zurich": "University of Zurich (Main Campus)",
    "ETH Zurich / Polyterrasse": "ETH Zurich / Polyterrasse (ETH Terrace)",
    Uetliberg: "Uetliberg (Zurich's Local Mountain)",
    "Kunsthaus Zürich": "Kunsthaus Zürich (Zurich Art Museum)",
    Schanzengraben: "Schanzengraben (Schanzengraben Canal)",
    Zürichhorn: "Zürichhorn (Zürichhorn Park)",
    "Zürich West / Im Viadukt": "Zürich West / Im Viadukt (Creative District / Railway Viaduct)",
    Stadtkäserei: "Stadtkäserei (City Dairy)",
    Zeughauskeller: "Zeughauskeller (Armory Cellar)",
    "Schokolade & Espresso Bar": "Schokolade & Espresso Bar (Chocolate & Espresso)",
    "St Andrew's Anglican Church": "St Andrew's Anglican Church (English Protestant Worship)",
    "Hillsong Zürich": "Hillsong Zürich (German / English Contemporary Worship)",
    "Babu's Bakery & Coffeehouse": "Babu's Bakery & Coffeehouse (Breakfast / Brunch)",
    "Confiserie Sprüngli at Zürich HB": "Confiserie Sprüngli at Zürich HB (Breakfast / Sweets)",
    "Haus Hiltl": "Haus Hiltl (Vegetarian Restaurant)",
    "Conditorei Schober": "Conditorei Schober (Coffee / Chocolate)",
    "St. Peter's Church": "St. Peter's Church (St Peter Church)",
    Predigerkirche: "Predigerkirche (Preachers' Church)"
  },
  bern: {
    "Bern Bahnhof": "Bern Bahnhof (Bern Main Station)",
    Bundeshaus: "Bundeshaus (Federal Palace)",
    Zytglogge: "Zytglogge (Clock Tower)",
    Kramgasse: "Kramgasse (Old Town Main Street)",
    "Bern Minster": "Berner Münster (Bern Minster)",
    Münsterplattform: "Münsterplattform (Minster Terrace)",
    Nydeggbrücke: "Nydeggbrücke (Nydegg Bridge)",
    BearPark: "BärenPark (BearPark)",
    Rosengarten: "Rosengarten (Rose Garden)",
    "Bern Historical Museum": "Bernisches Historisches Museum (Bern Historical Museum)",
    "Einstein House": "Einsteinhaus (Einstein House)",
    Marzili: "Marzili (Aare Riverside District)",
    "French Church": "Französische Kirche (French Church)",
    Kornhauskeller: "Kornhauskeller (Granary Cellar)",
    "Restaurant Harmonie": "Restaurant Harmonie (Traditional Bern Restaurant)",
    "Restaurant Rosengarten": "Restaurant Rosengarten (Rose Garden Restaurant)",
    Lötschberg: "Lötschberg (Swiss Restaurant)",
    "Confiserie Tschirren": "Confiserie Tschirren (Bern Chocolate)"
  }
};

const routeStates = {};
const attractionImageCache = {};

function isFoodCategory(category) {
  return /餐廳|小吃|美食|咖啡|巧克力|早餐|甜點|飲食/.test(category);
}

function isWorshipCategory(category) {
  return /禮拜|敬拜/.test(category);
}

function makeRouteIcon(active, number, category) {
  const foodClass = isFoodCategory(category) ? " food-stop" : "";
  return L.divIcon({
    className: "",
    html: '<span class="route-number' + (active ? "" : " inactive") + foodClass + '">' + number + "</span>",
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function makeOptionalIcon(number, selected, category) {
  const foodClass = isFoodCategory(category) ? " food-stop" : "";
  const worshipClass = isWorshipCategory(category) ? " worship-stop" : "";
  return L.divIcon({
    className: "",
    html: '<span class="optional-number' + (selected ? " selected" : "") + foodClass + worshipClass + '">' + number + "</span>",
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function makeAccommodationIcon(label) {
  return L.divIcon({
    className: "",
    html: '<span class="accommodation-number">' + label + "</span>",
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
}

function getStopLetter(routeName, type, index) {
  const optionalOffset = cityWalkRoutes[routeName].length;
  const letterIndex = (type === "optional" ? optionalOffset : 0) + index;
  let value = letterIndex + 1;
  let label = "";
  while (value > 0) {
    const remainder = (value - 1) % 26;
    label = String.fromCharCode(65 + remainder) + label;
    value = Math.floor((value - 1) / 26);
  }
  return label;
}

function distanceBetweenPoints(map, points) {
  return points.slice(1).reduce((total, point, index) => {
    return total + map.distance(points[index], point);
  }, 0);
}

async function fetchWalkingRoute(points, signal) {
  const coordinates = points
    .map(([lat, lng]) => `${lng},${lat}`)
    .join(";");
  const response = await fetch(
    "https://routing.openstreetmap.de/routed-foot/route/v1/driving/" +
      coordinates + "?overview=full&geometries=geojson&steps=false",
    { signal }
  );
  if (!response.ok) throw new Error("Walking route unavailable");
  const data = await response.json();
  const route = data.routes?.[0];
  if (!route?.geometry?.coordinates?.length) {
    throw new Error("Walking route unavailable");
  }
  return {
    points: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    distanceMeters: route.distance
  };
}

function getStateStop(state, item) {
  const stops = item.type === "main"
    ? cityWalkRoutes[state.routeName]
    : cityWalkOptionalStops[state.routeName];
  return stops[item.index];
}

function getStopCategory(routeName, stop) {
  return (attractionCategories[routeName] || {})[stop[0]] || "其他景點";
}

function getDisplayStopName(routeName, stopName) {
  return bilingualStopNames[routeName]?.[stopName] || stopName;
}

function localizeRouteText(routeName, value) {
  const replacements = [
    ["當地", "當地"], ["傳統", "傳統"], ["適合", "適合"], ["星期日", "週日"], ["周日", "週日"], ["營業", "營業"],
    ["無需", "無需"], ["熱門", "熱門"], ["時段", "時段"], ["餐廳", "餐廳"], ["餐飲", "餐飲"],
    ["選擇", "選擇"], ["地圖", "地圖"], ["路線", "路線"], ["當前", "目前"], ["從", "從"],
    ["與", "與"], ["時", "時"], ["個", "個"], ["這", "這"], ["會", "會"], ["為", "為"],
    ["發", "發"], ["後", "後"], ["內", "內"], ["線", "線"], ["現", "現"], ["較", "較"],
    ["點", "點"], ["開", "開"], ["關", "關"], ["門", "門"], ["車", "車"], ["邊", "邊"],
    ["區", "區"], ["場", "場"], ["隊", "隊"], ["間", "間"], ["帶", "帶"], ["覽", "覽"],
    ["圖", "圖"], ["體", "體"], ["壓", "壓"], ["計", "計"], ["別", "別"], ["說", "說"],
    ["還", "還"], ["買", "買"], ["來", "來"], ["種", "種"], ["達", "達"], ["應", "應"],
    ["選", "選"], ["趕", "趕"], ["穩", "穩"], ["優", "優"], ["給", "給"], ["換", "換"],
    ["廳", "廳"], ["規", "規"], ["錄", "錄"], ["歷", "歷"], ["紀", "紀"], ["細", "細"],
    ["訂", "訂"], ["組", "組"], ["鍵", "鍵"], ["減", "減"], ["動", "動"], ["數", "數"],
    ["順", "順"], ["識", "識"], ["機", "機"], ["標", "標"], ["擊", "擊"], ["預", "預"],
    ["復", "復"], ["載", "載"], ["暫", "暫"], ["項", "項"], ["飲", "飲"], ["據", "據"],
    ["過", "過"], ["調", "調"], ["該", "該"], ["顯", "顯"], ["認", "認"]
  ];
  const text = String(value ?? "");
  if (routeName === "zurich" || routeName === "bern") {
    return replacements.reduce((result, [from, to]) => result.replaceAll(from, to), text);
  }
  return text;
}

function normalizeImageQuery(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

async function loadAttractionImage(card) {
  const name = card.dataset.attractionName;
  if (!name || card.querySelector(".attraction-image")) return;
  const query = attractionImageQueries[name] || name;

  const image = document.createElement("img");
  image.className = "attraction-image";
  image.alt = name + " 景點圖片";
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.remove();
    attractionImageCache[name] = null;
  }, { once: true });

  if (attractionImageCache[name] === null) return;
  if (attractionImageCache[name]) {
    image.src = attractionImageCache[name];
    card.prepend(image);
    return;
  }

  try {
    const response = await fetch(
      "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" +
      encodeURIComponent(query) +
      "&gsrnamespace=0&gsrlimit=8&prop=pageimages&piprop=thumbnail&pithumbsize=640&format=json&origin=*"
    );
    const data = await response.json();
    const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
    const normalizedQuery = normalizeImageQuery(query);
    const rankedPages = pages
      .filter((page) => page.thumbnail)
      .sort((left, right) => (left.index || Number.MAX_SAFE_INTEGER) - (right.index || Number.MAX_SAFE_INTEGER));
    const matchingPage = rankedPages.find((page) =>
      page.thumbnail &&
      normalizeImageQuery(page.title).includes(normalizedQuery)
    );
    const source = (matchingPage || rankedPages[0])?.thumbnail?.source;
    if (!source) {
      attractionImageCache[name] = null;
      return;
    }
    attractionImageCache[name] = source;
    image.src = source;
    card.prepend(image);
  } catch (error) {
    attractionImageCache[name] = null;
  }
}

function loadAttractionImages(container) {
  container.querySelectorAll("[data-attraction-name]").forEach((card) => {
    if (card.classList.contains("route-stop-card")) return;
    loadAttractionImage(card);
  });
}

function renderMapActions(state) {
  let actions = state.mapElement.parentElement.querySelector(
    `[data-route-map-actions="${state.routeName}"]`
  );
  if (!actions) {
    actions = document.createElement("div");
    actions.className = "route-actions route-map-actions";
    actions.dataset.routeMapActions = state.routeName;
    actions.setAttribute("aria-label", `${state.routeName} 地圖操作`);
    state.mapElement.insertAdjacentElement("afterend", actions);
  }
  actions.innerHTML = `
    <button class="route-action" type="button" data-route-action="reset" data-city="${state.routeName}">恢復預設主路線</button>
    <button class="route-action" type="button" data-route-action="fit-route" data-city="${state.routeName}">聚焦目前路線</button>
    <button class="route-action route-marker-toggle${state.showAllMarkers ? " is-active" : ""}" type="button" data-route-action="toggle-markers" data-city="${state.routeName}" aria-pressed="${state.showAllMarkers}">${state.showAllMarkers ? "只看目前路線" : "顯示全部標記"}</button>
  `;
}

function renderRouteBuilder(state) {
  const builder = document.querySelector("[data-route-builder='" + state.routeName + "']");
  if (!builder) return;
  renderMapActions(state);

  const guide = cityWalkGuides[state.routeName];
  const optionalStops = cityWalkOptionalStops[state.routeName] || [];
  const activePoints = state.routeItems.map((item) => {
    const stop = getStateStop(state, item);
    return [stop[1], stop[2]];
  });
  const currentDistance = state.routeDistanceMeters ?? (activePoints.length > 1
    ? distanceBetweenPoints(state.map, activePoints)
    : 0);
  const distanceText = state.routeDistanceSource === "walking"
    ? `：步行約 ${(currentDistance / 1000).toFixed(1)} 公里`
    : state.routeDistanceSource === "unavailable"
      ? "：步行路線暫不可用，請依逐站文字或現場導航"
      : `：正在取得步行路線（暫估 ${(currentDistance / 1000).toFixed(1)} 公里）`;
  const removedMainStops = cityWalkRoutes[state.routeName]
    .map((stop, index) => ({ type: "main", index, stop }))
    .filter(({ index }) => !state.routeItems.some((item) =>
      item.type === "main" && item.index === index
    ));
  const presetShortcuts = cityWalkPresetShortcuts[state.routeName] || [];
  const routeDisplayName = {
    zurich: "Zürich",
    bern: "Bern",
    freiburg: "Freiburg",
    heidelberg: "Heidelberg",
    frankfurt: "Frankfurt"
  }[state.routeName] || state.routeName;
  const activePresetIndex = (cityWalkPresets[state.routeName] || []).findIndex((preset) =>
    preset.length === state.routeItems.length && preset.every((item, index) =>
      item.type === state.routeItems[index]?.type && item.index === state.routeItems[index]?.index
    )
  );
  const optionalStopEntries = optionalStops.map((stop, index) => ({ stop, index }));
  const diningCategoryPrefixes = ["餐廳／", "小吃／", "咖啡／", "早餐／", "巧克力／"];
  const isDiningStop = (stop) => diningCategoryPrefixes.some((prefix) =>
    getStopCategory(state.routeName, stop).startsWith(prefix)
  );
  const attractionOptionalStops = optionalStopEntries.filter(({ stop }) => !isDiningStop(stop));
  const diningOptionalStops = optionalStopEntries.filter(({ stop }) => isDiningStop(stop));
  const renderOptionalStop = ({ stop, index }) => {
    const selected = state.routeItems.some((item) =>
      item.type === "optional" && item.index === index
    );
    return `
      <article class="stop-card ${selected ? "selected" : ""}" data-attraction-name="${stop[0]}">
        <span class="stop-category">${getStopCategory(state.routeName, stop)}</span>
        <h3><span class="stop-letter">${getStopLetter(state.routeName, "optional", index)}.</span> <span class="stop-name">${getDisplayStopName(state.routeName, stop[0])}</span></h3>
        <p>${stop[3]}</p>
        <label class="small">
          <input class="route-toggle" type="checkbox"
            data-route-action="add-route"
            data-city="${state.routeName}"
            data-kind="optional"
            data-index="${index}"
            ${selected ? "checked" : ""}>
          ${selected ? "已加入路線" : "加入我的路線"}
        </label>
      </article>
    `;
  };
  const diningSchedule = cityDiningSchedules[state.routeName] || [];
  const diningEntryByIndex = new Map(diningOptionalStops.map((entry) => [entry.index, entry]));
  const renderDiningOptions = () => {
    if (!diningSchedule.length) {
      return `<div class="stop-guide">${diningOptionalStops.map(renderOptionalStop).join("")}</div>`;
    }
    return `<div class="dining-time-groups">
      ${diningSchedule.map((timeGroup) => {
        const entries = timeGroup.optionalIndexes
          .map((index) => diningEntryByIndex.get(index))
          .filter(Boolean);
        if (!entries.length) return "";
        return `<section class="dining-time-group" aria-labelledby="${state.routeName}-dining-${timeGroup.id}">
          <div class="dining-time-heading">
            <h4 id="${state.routeName}-dining-${timeGroup.id}">${timeGroup.label}</h4>
            <span>${entries.length} 個選擇</span>
          </div>
          <p>${timeGroup.note}</p>
          <div class="stop-guide">${entries.map(renderOptionalStop).join("")}</div>
        </section>`;
      }).join("")}
    </div>`;
  };

  builder.innerHTML = localizeRouteText(state.routeName, `
    <h3>自訂行程路線</h3>
    ${presetShortcuts.length ? `
      <div class="route-preset-shortcuts" aria-label="${routeDisplayName} 路線快捷組合">
        <div class="route-preset-heading">
          <strong>快捷組合</strong>
          <small>一鍵替換目前路線，之後仍可增減景點或拖動排序。</small>
        </div>
        <div class="route-preset-buttons">
          ${presetShortcuts.map((shortcut, index) => {
            const option = cityWalkGuides[state.routeName].options[index];
            const isActive = index === activePresetIndex;
            return `
              <button class="route-preset-button ${isActive ? "is-active" : ""}" type="button"
                data-route-action="preset" data-city="${state.routeName}"
                data-preset-index="${index}" aria-pressed="${isActive}"
                title="${option?.[1] || shortcut.meta}">
                <span>${shortcut.label}</span>
                <small>${shortcut.meta}</small>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    ` : ""}
    <p class="small">數字是目前路線順序，字母是與地圖一致的景點識別。桌面可拖動卡片；手機或鍵盤可用上下移動按鈕調整順序。</p>
    <div class="route-builder-section-title">目前路線 <span>${state.routeItems.length} 個 checkpoint</span></div>
    <div class="route-builder-list">
      ${state.routeItems.map((item, position) => {
        const stop = getStateStop(state, item);
        const description = item.type === "main"
          ? guide.stops[item.index][1]
          : stop[3];
        const category = getStopCategory(state.routeName, stop);
        const letter = getStopLetter(state.routeName, item.type, item.index);
        return `
          <article class="route-stop-card selected" data-attraction-name="${stop[0]}"
            draggable="true" data-route-position="${position}" data-city="${state.routeName}">
            <span class="drag-handle" aria-hidden="true">☷</span>
            <div>
              <span class="stop-category">${category}</span>
              <h4><span class="route-order">${position + 1}</span><span class="stop-name"><span class="stop-letter">${letter}.</span> ${getDisplayStopName(state.routeName, stop[0])}</span></h4>
              <p>${description}</p>
            </div>
            <div class="route-stop-controls" aria-label="調整 ${stop[0]} 的路線位置">
              <button type="button" data-route-action="move-up" data-city="${state.routeName}" data-position="${position}" aria-label="上移 ${stop[0]}" ${position === 0 ? "disabled" : ""}>↑</button>
              <button type="button" data-route-action="move-down" data-city="${state.routeName}" data-position="${position}" aria-label="下移 ${stop[0]}" ${position === state.routeItems.length - 1 ? "disabled" : ""}>↓</button>
              <button class="route-remove-button" type="button" data-route-action="remove-route" data-city="${state.routeName}" data-position="${position}" aria-label="從路線移除 ${stop[0]}">×</button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <p class="route-distance-editor small">目前已選路線${distanceText}</p>
    <div class="route-options route-option-groups">
      <details class="route-option-group" aria-labelledby="${state.routeName}-optional-attractions">
        <summary class="route-option-group-heading">
          <div>
            <p class="route-option-kicker">SIGHTS &amp; ACTIVITIES</p>
            <h3 id="${state.routeName}-optional-attractions">Optional 景點與活動</h3>
          </div>
          <span>${removedMainStops.length + attractionOptionalStops.length} 個選項</span>
        </summary>
        <div class="route-option-group-body">
        <p class="small">勾選加入路線；從目前主線移除的 checkpoint 也會回到這裡。</p>
        <div class="stop-guide">
        ${removedMainStops.map(({ index, stop }) => `
          <article class="stop-card" data-attraction-name="${stop[0]}">
            <span class="stop-category">${getStopCategory(state.routeName, stop)}</span>
            <h3><span class="stop-letter">${getStopLetter(state.routeName, "main", index)}.</span> <span class="stop-name">${getDisplayStopName(state.routeName, stop[0])}</span></h3>
            <p>${guide.stops[index][1]}</p>
            <label class="small">
              <input class="route-toggle" type="checkbox"
                data-route-action="add-route"
                data-city="${state.routeName}"
                data-kind="main"
                data-index="${index}">
              預設景點：加迴路線
            </label>
          </article>
        `).join("")}
          ${attractionOptionalStops.map(renderOptionalStop).join("")}
        </div>
        </div>
      </details>
      ${diningOptionalStops.length ? `
        <details class="route-option-group route-option-group-dining" aria-labelledby="${state.routeName}-optional-dining">
          <summary class="route-option-group-heading">
            <div>
              <p class="route-option-kicker">FOOD &amp; BREAKS</p>
              <h3 id="${state.routeName}-optional-dining">Optional 美食／餐飲</h3>
            </div>
            <span>${diningOptionalStops.length} 個選項</span>
          </summary>
          <div class="route-option-group-body">
          <p class="small">按用餐時段直接把餐廳加入地圖路線；同一家店可出現在多個時段，但只會加入目前路線一次。</p>
          ${renderDiningOptions()}
          </div>
        </details>
      ` : ""}
    </div>
  `);
  loadAttractionImages(builder);
}

function updateDistanceNote(state) {
  const distanceNote = state.mapElement.parentElement.querySelector(".route-distance");
  if (!distanceNote) return;
  const distance = (state.routeDistanceMeters / 1000).toFixed(1);
  distanceNote.textContent = localizeRouteText(state.routeName,
    state.routeDistanceSource === "walking"
      ? "目前已選步行路線：約 " + distance + " 公里"
      : state.routeDistanceSource === "unavailable"
        ? "步行路線暫不可用；地圖不以直線代替，請依逐站文字或現場導航。"
        : "步行路線載入中；暫時距離估算約 " + distance + " 公里");
}

function fitCurrentRoute(state) {
  const points = state.routeItems
    .filter((item) => item.active)
    .map((item) => {
      const stop = getStateStop(state, item);
      return [stop[1], stop[2]];
    });
  if (points.length) state.map.fitBounds(points, { padding: [34, 34], maxZoom: 16 });
}

function setRouteMarkerVisibility(state, marker, visible) {
  const isVisible = state.map.hasLayer(marker);
  if (visible && !isVisible) marker.addTo(state.map);
  if (!visible && isVisible) state.map.removeLayer(marker);
}

function updateRouteMap(state) {
  if (state.routeLine) state.map.removeLayer(state.routeLine);
  if (state.routeAbortController) state.routeAbortController.abort();
  const activeItems = state.routeItems.filter((item) => item.active);
  const activePoints = activeItems.map((item) => {
    const stop = getStateStop(state, item);
    return [stop[1], stop[2]];
  });
  const requestId = (state.routeRequestId || 0) + 1;
  state.routeRequestId = requestId;
  state.routeDistanceMeters = activePoints.length > 1
    ? distanceBetweenPoints(state.map, activePoints)
    : 0;
  state.routeDistanceSource = "estimated";

  state.mainMarkers.forEach((marker, index) => {
    const active = state.routeItems.some((item) =>
      item.type === "main" && item.index === index && item.active
    );
    marker.setIcon(makeRouteIcon(
      active,
      getStopLetter(state.routeName, "main", index),
      getStopCategory(state.routeName, cityWalkRoutes[state.routeName][index])
    ));
    setRouteMarkerVisibility(state, marker, active || state.showAllMarkers);
  });
  state.optionalMarkers.forEach((marker, index) => {
    const selected = state.routeItems.some((item) =>
      item.type === "optional" && item.index === index && item.active
    );
    marker.setIcon(makeOptionalIcon(
      getStopLetter(state.routeName, "optional", index),
      selected,
      getStopCategory(state.routeName, cityWalkOptionalStops[state.routeName][index])
    ));
    setRouteMarkerVisibility(state, marker, selected || state.showAllMarkers);
  });

  updateDistanceNote(state);
  renderRouteBuilder(state);

  if (activePoints.length < 2) return;
  const controller = new AbortController();
  state.routeAbortController = controller;
  fetchWalkingRoute(activePoints, controller.signal)
    .then(({ points, distanceMeters }) => {
      if (state.routeRequestId !== requestId) return;
      if (state.routeLine) state.map.removeLayer(state.routeLine);
      state.routeLine = L.polyline(points, {
        color: "#2e6f95",
        weight: 5,
        opacity: 0.9
      }).addTo(state.map);
      state.routeDistanceMeters = distanceMeters;
      state.routeDistanceSource = "walking";
      updateDistanceNote(state);
      renderRouteBuilder(state);
    })
    .catch((error) => {
      if (error.name !== "AbortError") {
        if (state.routeLine) state.map.removeLayer(state.routeLine);
        state.routeLine = null;
        state.routeDistanceSource = "unavailable";
        updateDistanceNote(state);
        renderRouteBuilder(state);
        console.warn("Walking route unavailable; written checkpoints remain available.", error);
      }
    });
}

function createCityWalkMap(routeName, mapElement) {
  const stops = cityWalkRoutes[routeName];
  const guide = cityWalkGuides[routeName];
  if (!stops || !mapElement || !window.L) return;

  const map = L.map(mapElement);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const state = {
    routeName,
    map,
    mapElement,
    routeItems: getDefaultRouteItems(routeName),
    mainMarkers: [],
    optionalMarkers: [],
    routeLine: null,
    dragPosition: null,
    routeAbortController: null,
    routeRequestId: 0,
    routeDistanceMeters: 0,
    routeDistanceSource: "estimated",
    showAllMarkers: false
  };
  routeStates[routeName] = state;

  const routePoints = stops.map((stop, index) => {
    const marker = L.marker([stop[1], stop[2]], {
      icon: makeRouteIcon(true, getStopLetter(routeName, "main", index), getStopCategory(routeName, stop))
    }).addTo(map);
    marker.bindPopup(localizeRouteText(routeName,
      "<strong>" + getStopLetter(routeName, "main", index) + "｜" + getDisplayStopName(routeName, stop[0]) + "</strong><br>" +
      guide.stops[index][1] + "<br><small>" +
      getStopCategory(routeName, stop) + "｜看點：" +
      guide.stops[index][2] + "</small>"
    ));
    state.mainMarkers.push(marker);
    return [stop[1], stop[2]];
  });
  state.routePoints = routePoints;

  const optionalPoints = (cityWalkOptionalStops[routeName] || []).map((stop, index) => {
    const marker = L.marker([stop[1], stop[2]], {
      icon: makeOptionalIcon(
        getStopLetter(routeName, "optional", index),
        false,
        getStopCategory(routeName, stop)
      )
    }).addTo(map);
    marker.bindPopup(localizeRouteText(routeName,
      "<strong>" + getStopLetter(routeName, "optional", index) + "｜Optional｜" + getDisplayStopName(routeName, stop[0]) + "</strong><br>" + stop[3] +
      "<br><small>" + getStopCategory(routeName, stop) + "</small>" +
      '<br><button class="add-route-button" type="button" data-route-action="toggle-optional" data-city="' +
      routeName + '" data-kind="optional" data-index="' + index + '">加入／移除路線</button>'
    ));
    state.optionalMarkers.push(marker);
    return [stop[1], stop[2]];
  });

  const accommodationPoints = (cityAccommodationStops[routeName] || []).map((stop, index) => {
    const label = "H" + (index + 1);
    L.marker([stop[1], stop[2]], { icon: makeAccommodationIcon(label) })
      .addTo(map)
      .bindPopup(localizeRouteText(routeName,
        "<strong>" + label + "｜" + stop[0] + "</strong><br>" + stop[3] +
        '<br><a href="https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(stop[0] + ", Beatenplatz 4, Zürich") +
        '" target="_blank" rel="noreferrer">Google Maps →</a>'
      ));
    return [stop[1], stop[2]];
  });

  fitCurrentRoute(state);
  updateRouteMap(state);
}

function renderCityWalkGuide(routeName, guideElement) {
  if (!cityWalkGuides[routeName] || !guideElement) return;
  const usesCompactPresets = Boolean(cityWalkPresetShortcuts[routeName]);
  guideElement.innerHTML = `
    <div class="route-builder" data-route-builder="${routeName}"></div>
    ${usesCompactPresets ? "" : `<div class="route-options">
      <h3>路線 Optional 方案</h3>
      ${cityWalkGuides[routeName].options.map((option, index) => `
        <article class="route-option">
          <button class="route-option-button" type="button"
            data-route-action="preset" data-city="${routeName}"
            data-preset-index="${index}">
            <h3>${option[0]}</h3>
            <p>${option[1]}</p>
            <span class="route-option-hint">點擊套用此路線組合 →</span>
          </button>
        </article>
      `).join("")}
    </div>`}
  `;
}

function handleRouteAction(action, routeName, element) {
  const state = routeStates[routeName];
  if (!state) return;

  if (action === "preset") {
    const presetIndex = Number(element.dataset.presetIndex);
    const preset = cityWalkPresets[routeName]?.[presetIndex];
    if (!preset) return;
    state.routeItems = preset.map((item) => ({
      type: item.type,
      index: item.index,
      active: true
    }));
  } else if (action === "remove-route") {
    const position = Number(element.dataset.position);
    if (state.routeItems[position]) state.routeItems.splice(position, 1);
  } else if (action === "move-up" || action === "move-down") {
    const position = Number(element.dataset.position);
    const targetPosition = action === "move-up" ? position - 1 : position + 1;
    if (state.routeItems[position] && state.routeItems[targetPosition]) {
      const [moved] = state.routeItems.splice(position, 1);
      state.routeItems.splice(targetPosition, 0, moved);
    }
  } else if (action === "add-route") {
    const kind = element.dataset.kind;
    const index = Number(element.dataset.index);
    const existing = state.routeItems.findIndex((item) =>
      item.type === kind && item.index === index
    );
    if (element.checked && existing === -1) {
      state.routeItems.push({ type: kind, index, active: true });
    } else if (!element.checked && existing !== -1) {
      state.routeItems.splice(existing, 1);
    }
  } else if (action === "toggle-optional") {
    const index = Number(element.dataset.index);
    const existing = state.routeItems.findIndex((item) =>
      item.type === "optional" && item.index === index
    );
    if (existing === -1) {
      state.routeItems.push({ type: "optional", index, active: true });
    } else {
      state.routeItems.splice(existing, 1);
    }
  } else if (action === "reset") {
    state.routeItems = getDefaultRouteItems(routeName);
  } else if (action === "fit-route") {
    fitCurrentRoute(state);
    return;
  } else if (action === "toggle-markers") {
    state.showAllMarkers = !state.showAllMarkers;
    if (state.showAllMarkers) {
      const stops = cityWalkOptionalStops[routeName] || [];
      state.map.fitBounds(
        state.routePoints.concat(stops.map((stop) => [stop[1], stop[2]])),
        { padding: [24, 24] }
      );
    } else {
      fitCurrentRoute(state);
    }
  }
  updateRouteMap(state);
}

document.addEventListener("DOMContentLoaded", () => {
  loadAttractionImages(document);

  document.querySelectorAll("[data-city-guide]").forEach((guideElement) => {
    renderCityWalkGuide(guideElement.dataset.cityGuide, guideElement);
  });

  document.addEventListener("change", (event) => {
    const control = event.target.closest("[data-route-action]");
    if (!control) return;
    handleRouteAction(control.dataset.routeAction, control.dataset.city, control);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-route-action]");
    if (!button) return;
    handleRouteAction(button.dataset.routeAction, button.dataset.city, button);
  });

  document.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-route-position]");
    if (!card) return;
    const state = routeStates[card.dataset.city];
    if (!state) return;
    state.dragPosition = Number(card.dataset.routePosition);
    event.dataTransfer.effectAllowed = "move";
  });

  document.addEventListener("dragover", (event) => {
    if (event.target.closest("[data-route-position]")) event.preventDefault();
  });

  document.addEventListener("drop", (event) => {
    const card = event.target.closest("[data-route-position]");
    if (!card) return;
    event.preventDefault();
    const state = routeStates[card.dataset.city];
    const targetPosition = Number(card.dataset.routePosition);
    if (!state || state.dragPosition === null || state.dragPosition === targetPosition) return;
    const [moved] = state.routeItems.splice(state.dragPosition, 1);
    state.routeItems.splice(targetPosition, 0, moved);
    state.dragPosition = null;
    updateRouteMap(state);
  });

  if (window.L) {
    document.querySelectorAll("[data-city-map]").forEach((mapElement) => {
      createCityWalkMap(mapElement.dataset.cityMap, mapElement);
    });
  }
});

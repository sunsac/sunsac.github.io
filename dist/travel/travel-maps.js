const cityWalkRoutes = {
  zurich: [
    ["Zurich HB", 47.378177, 8.540192],
    ["Bahnhofstrasse", 47.374000, 8.539000],
    ["Lindenhof", 47.370700, 8.541600],
    ["Grossmünster", 47.370020, 8.544070],
    ["Fraumünster", 47.369000, 8.545600],
    ["Bürkliplatz", 47.366930, 8.544210],
    ["Bellevue", 47.366780, 8.545720]
  ],
  bern: [
    ["Bern Bahnhof", 46.948040, 7.439650],
    ["Bundeshaus", 46.946600, 7.444000],
    ["Zytglogge", 46.948010, 7.451330],
    ["Bern Minster", 46.947000, 7.451240],
    ["Münsterplattform", 46.945900, 7.452220],
    ["Nydeggbrücke", 46.948820, 7.459000],
    ["BearPark", 46.948700, 7.459800],
    ["Rosengarten", 46.950500, 7.466000]
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
    ["Hauptstraße", 49.410000, 8.703000],
    ["Universitätsplatz", 49.410000, 8.707000],
    ["Heiliggeistkirche", 49.412000, 8.710600],
    ["Marktplatz", 49.412300, 8.710800],
    ["Old Bridge", 49.414400, 8.712700]
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
      ["完整路線", "約 2.5–3 公里，主走 Old Town 及湖邊，不把較遠的景點硬接在主線。"],
      ["短版路線", "Zurich HB → Bahnhofstrasse → Lindenhof → Grossmünster → Fraumünster，約 1.5–2 小時。"],
      ["湖景加強版", "由 Bellevue 沿 Utoquai 前往 Zürichhorn；單程約 3 公里，回程建議乘 tram 或 boat。"],
      ["雨天備案", "Old Town、Fraumünster、Swiss National Museum；Polyterrasse 視天氣決定。"]
    ],
    stops: [
      ["Zurich HB", "大型交通樞紐及城市入口；先處理行李，再開始平緩的 Old Town 路線。", "可選 Swiss National Museum，了解 Switzerland 歷史。"],
      ["Bahnhofstrasse", "由車站通往湖邊的主軸，將金融、購物及城市歷史串在一起。", "只走一小段即可，不建議整條街來回。"],
      ["Lindenhof", "羅馬時期高地，能俯瞰 Limmat 河、Old Town 及 Grossmünster。", "有上坡；體力不足可改為 Limmat 河岸平路。"],
      ["Grossmünster", "Zurich 最具辨識度的地標之一，與 Zwingli 及 Reformation 歷史相關。", "體力許可可登塔。"],
      ["Fraumünster", "以 Chagall 彩窗聞名的教堂，和 Grossmünster 隔 Limmat 河相望。", "可順走 Münsterbrücke，不需額外交通。"],
      ["Bürkliplatz", "Lake Zurich 的城市門戶，可看到湖面、船隻及遠方山景。", "天氣良好可加 Lake Zurich 船程。"],
      ["Bellevue", "Lake Zurich、Limmat 河與文化場館交會的位置，適合決定繼續湖邊或返回 Old Town。", "可加 Sechseläutenplatz 或 Zurich Opera House 外觀。"]
    ]
  },
  bern: {
    options: [
      ["完整路線", "約半天，從聯邦政治中心走到 Aare 河、BearPark 及 Rosengarten。"],
      ["短版路線", "Bern Bahnhof → Bundeshaus → Zytglogge → Bern Minster → Münsterplattform。"],
      ["河岸加強版", "由 BearPark 延伸至 Aare 河畔，再視體力前往 Rosengarten。"],
      ["雨天備案", "Bern Historical Museum、Einstein House 及 Old City 拱廊。"]
    ],
    stops: [
      ["Bern Bahnhof", "從交通樞紐進入 Bern，城市街道很快轉入具有連續拱廊的 Old City。", "可先在車站 Tourist Information 取得城市資料。"],
      ["Bundeshaus", "聯邦議會所在地，理解 Bern 作為 Switzerland 政治中心的角色。", "議會開放時可查詢官方導覽場次。"],
      ["Zytglogge", "中世紀鐘樓及 Bern 的城市象徵，適合觀察鐘樓與街道軸線。", "可預約鐘樓導覽，否則在外部欣賞即可。"],
      ["Bern Minster", "哥德式教堂及 Old City 天際線核心，外立面細節值得慢看。", "可登塔看 Bern 屋頂與 Aare 河。"],
      ["Münsterplattform", "靠近教堂的高地平台，能看見 Aare 河谷及 Gurten 方向。", "適合買簡單午餐或作短暫休息。"],
      ["Nydeggbrücke", "連接 Old City 與河東側的橋，能看見 Bern 建在高地上的城市結構。", "可在橋上拍攝 Old City 全景。"],
      ["BearPark", "Bern 的城市象徵與 Aare 河畔公共空間，適合了解城市與自然的關係。", "可加 Altes Tramdepot 啤酒廠餐廳。"],
      ["Rosengarten", "由高處觀看 Bern Old City 最好的位置之一，適合在 City Walk 收尾。", "可只乘巴士前往，作為低體力版本終點。"]
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
      ["完整路線", "先由 Heidelberg Hbf 乘約 10 分鐘 tram / bus 到 Bismarckplatz，再步行約 2–3 公里到 Old Bridge。"],
      ["短版路線", "Bismarckplatz → Hauptstraße → Universitätsplatz → Marktplatz → Old Bridge。"],
      ["景觀加強版", "City Walk 後加入 Heidelberg Castle 或 Philosopher’s Walk，但建議另安排完整半天。"],
      ["雨天備案", "Heidelberg University、Kurpfälzisches Museum、Castle 室內部分及咖啡店。"]
    ],
    stops: [
      ["Bismarckplatz", "Heidelberg 公共交通及城市生活的重要節點，適合作為 City Walk 的真正起點。", "從 Heidelberg Hbf 乘 tram / bus 約 10 分鐘，避免拉長步行。"],
      ["Hauptstraße", "Old Town 的主要步行街，商店、餐廳、大學生活及歷史建築集中。", "可按興趣繞入小巷，避免只走主街。"],
      ["Universitätsplatz", "大學城文化的代表空間，能感受 Heidelberg 的學生及學術氣質。", "可尋找 Student Prison 及大學歷史相關景點。"],
      ["Heiliggeistkirche", "Old Town 的核心教堂，位於 Schloss、Old Bridge 與 Marktplatz 之間。", "可搭配 Marktplatz 及周邊餐廳。"],
      ["Marktplatz", "城市歷史及日常生活交會的廣場，也是觀看 Heidelberg Castle 的重要位置。", "傍晚回訪可觀察白天與夜間不同氛圍。"],
      ["Old Bridge", "Neckar 河上的經典視角，能同時看到 Old Town、Castle 及 Philosopher’s Walk 山坡。", "可沿河邊或前往 Philosopher’s Walk 延伸。"]
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
    ["ETH Zurich / Polyterrasse", 47.376300, 8.548300, "ETH Zurich 旁的城市觀景台"],
    ["Uetliberg", 47.349900, 8.491100, "Zurich 的 local mountain 及全景觀景點"],
    ["Kunsthaus Zürich", 47.370500, 8.548000, "Swiss art and culture museum"],
    ["Swiss National Museum", 47.379650, 8.540300, "了解 Switzerland 歷史的博物館"],
    ["Lindt Home of Chocolate", 47.320600, 8.536700, "Kilchberg 的巧克力博物館及體驗"],
    ["Limmat River Cruise", 47.379500, 8.540500, "由 National Museum 出發的城市河上觀光"],
    ["Schanzengraben", 47.373080, 8.533980, "由防禦壕溝轉成的安靜水道"],
    ["Old Botanical Garden", 47.374550, 8.528840, "城市中心的綠洲及 University Quarter"],
    ["Zürichhorn", 47.354700, 8.557600, "Lake Zurich 湖畔公園及 China Garden"],
    ["Zurich Opera House", 47.364500, 8.546700, "Lake Zurich 旁的文化地標"],
    ["Zürich West / Im Viadukt", 47.388200, 8.521800, "創意街區、鐵路拱廊及 Markthalle"],
    ["Stadtkäserei", 47.382500, 8.535000, "Cheese Workshop 及城市起司工坊"],
    ["Swiss Chuchi", 47.371700, 8.544000, "Old Town fondue restaurant"],
    ["Le Dézaley", 47.371600, 8.544500, "Grossmünster 附近的 Swiss cuisine restaurant"],
    ["Zeughauskeller", 47.369500, 8.539900, "傳統 Swiss dishes 及 guild hall 餐廳"],
    ["Sternen Grill", 47.366900, 8.545900, "Bellevue 附近的 bratwurst 快餐"],
    ["St. Peter's Church", 47.369300, 8.541000, "Zurich 最古老教堂之一，擁有醒目的大型鐘面"],
    ["Predigerkirche", 47.376300, 8.543900, "Old Town 內歷史悠久的教堂，適合與 Niederdorf 一起參觀"]
  ],
  bern: [
    ["Bern Historical Museum", 46.945300, 7.445300, "了解 Bern 及 Switzerland 歷史文化"],
    ["Einstein House", 46.948900, 7.451400, "Einstein 曾居住的歷史房屋"],
    ["Altes Tramdepot", 46.948600, 7.460700, "BearPark 旁的啤酒廠餐廳"],
    ["Marzili", 46.938200, 7.444600, "Aare 河及 Marzili funicular 的入口"],
    ["Gurtenbahn", 46.929200, 7.465000, "前往 Gurten local mountain 的纜車站"],
    ["French Church", 46.948000, 7.447000, "Bern Old City 內歷史悠久的教堂，保留中世紀建築特色"]
  ],
  freiburg: [
    ["Schlossbergbahn", 47.992800, 7.858500, "較省力登上 Schlossberg 的纜車"],
    ["Dreisam river", 47.987800, 7.856000, "適合短距離放鬆的河岸步道"],
    ["Seepark", 48.012500, 7.815500, "Green City 氛圍較強的城市公園"],
    ["St. Martin Church", 47.995000, 7.851800, "Münsterplatz 附近的歷史教堂，適合順路參觀"]
  ],
  heidelberg: [
    ["Heidelberg Castle", 49.410600, 8.715700, "Heidelberg 的核心歷史景點及城市全景"],
    ["Philosopher's Walk", 49.414500, 8.717500, "眺望 Old Town、Neckar 河及 Castle 的步道"],
    ["Kurpfälzisches Museum", 49.412000, 8.707900, "藝術、考古及 Heidelberg 地區歷史"],
    ["Student Prison", 49.410200, 8.706200, "大學城獨有的學生歷史空間"],
    ["Königstuhl", 49.381300, 8.716700, "更高角度俯瞰 Heidelberg 及 Rhine plain"],
    ["Jesuit Church", 49.410900, 8.706800, "Heidelberg Old Town 內宏偉的巴洛克教堂"]
  ],
  frankfurt: [
    ["Städel Museum", 50.103800, 8.675800, "Museum Embankment 的主要藝術博物館"],
    ["Historical Museum", 50.109600, 8.682600, "Frankfurt 城市歷史及 New Old Town 背景"],
    ["Schirn Kunsthalle", 50.110300, 8.684500, "當代及專題藝術展覽空間"],
    ["Zeil", 50.114600, 8.681600, "Frankfurt 主要購物街"],
    ["St. Paul's Church", 50.110600, 8.680300, "Frankfurt 重要的民主歷史地標及圓形教堂建築"]
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
  "St. Peter's Church": "St. Peter church Zürich",
  Predigerkirche: "Predigerkirche Zürich",
  "Bern Historical Museum": "Bern Historical Museum",
  "Einstein House": "Einstein House Bern",
  "Altes Tramdepot": "Altes Tramdepot Bern",
  Marzili: "Marzili Bern",
  Gurtenbahn: "Gurtenbahn",
  "French Church": "French Church Bern",
  Schlossbergbahn: "Schlossbergbahn Freiburg",
  "Dreisam river": "Dreisam",
  Seepark: "Seepark Freiburg",
  "St. Martin Church": "St. Martin Church Freiburg",
  "Kurpfälzisches Museum": "Kurpfälzisches Museum Heidelberg",
  "Student Prison": "Studentenkarzer Heidelberg",
  Königstuhl: "Königstuhl Heidelberg",
  "Jesuit Church": "Jesuit Church Heidelberg",
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
      { type: "main", index: 6 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "optional", index: 8 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 2 },
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "optional", index: 0 }, { type: "optional", index: 3 }
    ]
  ],
  bern: [
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "main", index: 6 }, { type: "main", index: 7 },
      { type: "optional", index: 3 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "optional", index: 0 }, { type: "optional", index: 1 }
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
      { type: "main", index: 4 }, { type: "main", index: 5 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 4 },
      { type: "main", index: 5 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 1 },
      { type: "main", index: 2 }, { type: "main", index: 3 },
      { type: "main", index: 4 }, { type: "main", index: 5 },
      { type: "optional", index: 0 }, { type: "optional", index: 1 }
    ],
    [
      { type: "main", index: 0 }, { type: "main", index: 2 },
      { type: "main", index: 3 }, { type: "main", index: 4 },
      { type: "optional", index: 2 }, { type: "optional", index: 3 }
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

const attractionCategories = {
  zurich: {
    "Zurich HB": "交通／城市入口",
    Bahnhofstrasse: "購物／城市散步",
    Lindenhof: "歷史／觀景",
    Grossmünster: "教堂／宗教歷史",
    Fraumünster: "教堂／藝術",
    Bürkliplatz: "湖畔／觀景",
    Bellevue: "湖畔／城市散步",
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
    "St. Peter's Church": "教堂／宗教歷史",
    Predigerkirche: "教堂／宗教歷史"
  },
  bern: {
    "Bern Bahnhof": "交通／城市入口",
    Bundeshaus: "政治／歷史",
    Zytglogge: "歷史／城市地標",
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
    "French Church": "教堂／宗教歷史"
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
    Hauptstraße: "購物／城市散步",
    Universitätsplatz: "大學／歷史",
    Heiliggeistkirche: "教堂／宗教歷史",
    Marktplatz: "廣場／城市生活",
    "Old Bridge": "橋樑／觀景",
    "Heidelberg Castle": "城堡／歷史",
    "Philosopher's Walk": "步道／觀景",
    "Kurpfälzisches Museum": "博物館／藝術歷史",
    "Student Prison": "歷史／大學文化",
    Königstuhl: "自然／觀景",
    "Jesuit Church": "教堂／宗教歷史"
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

const routeStates = {};
const attractionImageCache = {};

function isFoodCategory(category) {
  return /餐廳|小吃|美食/.test(category);
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
  return L.divIcon({
    className: "",
    html: '<span class="optional-number' + (selected ? " selected" : "") + foodClass + '">' + number + "</span>",
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function getStopLetter(routeName, type, index) {
  const optionalOffset = cityWalkRoutes[routeName].length;
  const letterIndex = (type === "optional" ? optionalOffset : 0) + index;
  return String.fromCharCode(65 + letterIndex);
}

function distanceBetweenPoints(map, points) {
  return points.slice(1).reduce((total, point, index) => {
    return total + map.distance(points[index], point);
  }, 0);
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
    loadAttractionImage(card);
  });
}

function renderRouteBuilder(state) {
  const builder = document.querySelector("[data-route-builder='" + state.routeName + "']");
  if (!builder) return;

  const guide = cityWalkGuides[state.routeName];
  const optionalStops = cityWalkOptionalStops[state.routeName] || [];
  const activePoints = state.routeItems.map((item) => {
    const stop = getStateStop(state, item);
    return [stop[1], stop[2]];
  });
  const currentDistance = activePoints.length > 1
    ? distanceBetweenPoints(state.map, activePoints)
    : 0;
  const removedMainStops = cityWalkRoutes[state.routeName]
    .map((stop, index) => ({ type: "main", index, stop }))
    .filter(({ index }) => !state.routeItems.some((item) =>
      item.type === "main" && item.index === index
    ));

  builder.innerHTML = `
    <h3>自訂行程路線</h3>
    <p class="small">卡片前方的數字是目前路線順序；字母是景點固定識別，與地圖標記一致。預設景點一開始已加入路線，取消勾選後會自動移到下方 Optional 區域；目前路線卡片可以拖動排序。</p>
    <div class="route-builder-section-title">目前路線（拖動卡片排序）</div>
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
              <h4><span class="route-order">${position + 1}</span><span class="stop-name"><span class="stop-letter">${letter}.</span> ${stop[0]}</span></h4>
              <p>${description}</p>
            </div>
            <input class="route-toggle" type="checkbox"
              aria-label="從路線移除 ${stop[0]}"
              data-route-action="remove-route"
              data-city="${state.routeName}"
              data-position="${position}"
              checked>
          </article>
        `;
      }).join("")}
    </div>
    <p class="route-distance-editor small">目前已選路線：約 ${(currentDistance / 1000).toFixed(1)} 公里</p>
    <div class="route-actions">
      <button class="route-action" type="button" data-route-action="reset" data-city="${state.routeName}">恢復預設主路線</button>
      <button class="route-action" type="button" data-route-action="fit" data-city="${state.routeName}">重新查看全部標記</button>
    </div>
    <div class="route-options">
      <h3>Optional 景點與活動（勾選加入／取消移除）</h3>
      <div class="stop-guide">
        ${removedMainStops.map(({ index, stop }) => `
          <article class="stop-card" data-attraction-name="${stop[0]}">
            <span class="stop-category">${getStopCategory(state.routeName, stop)}</span>
            <h3><span class="stop-letter">${getStopLetter(state.routeName, "main", index)}.</span> <span class="stop-name">${stop[0]}</span></h3>
            <p>${guide.stops[index][1]}</p>
            <label class="small">
              <input class="route-toggle" type="checkbox"
                data-route-action="add-route"
                data-city="${state.routeName}"
                data-kind="main"
                data-index="${index}">
              預設景點：加回路線
            </label>
          </article>
        `).join("")}
        ${optionalStops.map((stop, index) => {
          const selected = state.routeItems.some((item) =>
            item.type === "optional" && item.index === index
          );
          return `
            <article class="stop-card ${selected ? "selected" : ""}" data-attraction-name="${stop[0]}">
              <span class="stop-category">${getStopCategory(state.routeName, stop)}</span>
              <h3><span class="stop-letter">${getStopLetter(state.routeName, "optional", index)}.</span> <span class="stop-name">${stop[0]}</span></h3>
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
        }).join("")}
      </div>
    </div>
  `;
  loadAttractionImages(builder);
}

function updateRouteMap(state) {
  if (state.routeLine) state.map.removeLayer(state.routeLine);
  const activeItems = state.routeItems.filter((item) => item.active);
  const activePoints = activeItems.map((item) => {
    const stop = getStateStop(state, item);
    return [stop[1], stop[2]];
  });

  if (activePoints.length > 1) {
    state.routeLine = L.polyline(activePoints, {
      color: "#2e6f95",
      weight: 5,
      opacity: 0.9
    }).addTo(state.map);
  }

  state.mainMarkers.forEach((marker, index) => {
    const active = state.routeItems.some((item) =>
      item.type === "main" && item.index === index && item.active
    );
    marker.setIcon(makeRouteIcon(
      active,
      getStopLetter(state.routeName, "main", index),
      getStopCategory(state.routeName, cityWalkRoutes[state.routeName][index])
    ));
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
  });

  const distanceNote = state.mapElement.parentElement.querySelector(".route-distance");
  if (distanceNote) {
    distanceNote.textContent = "目前已選路線：約 " +
      (activePoints.length > 1 ? distanceBetweenPoints(state.map, activePoints) / 1000 : 0).toFixed(1) +
      " 公里";
  }
  renderRouteBuilder(state);
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
    routeItems: stops.map((stop, index) => ({ type: "main", index, active: true })),
    mainMarkers: [],
    optionalMarkers: [],
    routeLine: null,
    dragPosition: null
  };
  routeStates[routeName] = state;

  const routePoints = stops.map((stop, index) => {
    const marker = L.marker([stop[1], stop[2]], {
      icon: makeRouteIcon(true, getStopLetter(routeName, "main", index), getStopCategory(routeName, stop))
    }).addTo(map);
    marker.bindPopup(
      "<strong>" + getStopLetter(routeName, "main", index) + "｜" + stop[0] + "</strong><br>" +
      guide.stops[index][1] + "<br><small>" +
      getStopCategory(routeName, stop) + "｜看點：" +
      guide.stops[index][2] + "</small>"
    );
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
    marker.bindPopup(
      "<strong>" + getStopLetter(routeName, "optional", index) + "｜Optional｜" + stop[0] + "</strong><br>" + stop[3] +
      "<br><small>" + getStopCategory(routeName, stop) + "</small>" +
      '<br><button class="add-route-button" type="button" data-route-action="toggle-optional" data-city="' +
      routeName + '" data-kind="optional" data-index="' + index + '">加入／移除路線</button>'
    );
    state.optionalMarkers.push(marker);
    return [stop[1], stop[2]];
  });

  map.fitBounds(routePoints.concat(optionalPoints), { padding: [24, 24] });
  updateRouteMap(state);
}

function renderCityWalkGuide(routeName, guideElement) {
  if (!cityWalkGuides[routeName] || !guideElement) return;
  guideElement.innerHTML = `
    <div class="route-builder" data-route-builder="${routeName}"></div>
    <div class="route-options">
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
    </div>
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
    state.routeItems = cityWalkRoutes[routeName].map((stop, index) => ({
      type: "main", index, active: true
    }));
  } else if (action === "fit") {
    const stops = cityWalkOptionalStops[routeName] || [];
    state.map.fitBounds(
      state.routePoints.concat(stops.map((stop) => [stop[1], stop[2]])),
      { padding: [24, 24] }
    );
    return;
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

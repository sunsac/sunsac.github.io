(function () {
  "use strict";

  const VERIFIED_ON = "2026-08-11";
  const food = (name, category, imageQuery, imageFallback, summary, taste, timing, portion, diet, officialUrl) => ({
    name, category, imageQuery, imageFallback, summary, taste, timing, portion, diet, officialUrl,
  });
  const source = (label, url) => ({ label, url });

  const guides = {
    freiburg: {
      compactLibrary: true,
      eyebrow: "TASTE FREIBURG",
      title: "Freiburg 當地美食：從 Münster 市集吃到 Baden 葡萄酒",
      libraryTitle: "Freiburg 完整當地食物資料庫",
      intro: "Freiburg 的味道來自三個空間：Münsterplatz 的市集小吃、Old Town 的 Baden 家常菜，以及 Black Forest 與葡萄園帶來的甜點、啤酒和葡萄酒。抵達日最實用的安排是一咸一甜；完整 City Walk 後再選啤酒花園或 Baden 晚餐。",
      specialties: [
        food("Lange Rote", "市集小吃", "Lange Rote Freiburg", "German long red sausage", "約 35 釐米長、無腸衣的 Freiburg 烤豬肉香腸；外層焦香，傳統搭配炒洋蔥，麵包只負責托住香腸。", "第一次可點 mit Zwiebeln；想照當地傳統就不要為了塞進麵包而切短。", "Münsterplatz／Minster checkpoint", "一根足夠當輕午餐；兩人可先分享，再去吃甜點。", "豬肉；素食版並非每個攤位都有。", "https://visit.freiburg.de/en/discover/culinary/sausage-lange-rote"),
        food("Stefans Käsekuchen", "市集甜點", "Stefans Käsekuchen Freiburg", "German cheesecake slice", "Freiburg 市集代表性的 quark cheesecake；使用少量蛋、cream 與 quark，口感輕柔，帶一點檸檬酸香。", "買一片現吃；比 Black Forest cake 更輕，適合步行中段。", "Münsterplatz，與 Lange Rote 前後搭配", "兩人分一片即可繼續走路。", "含奶、蛋和麩質。", "https://visit.freiburg.de/en/discover/culinary/stefans-cheesecake"),
        food("Bibeleskäs mit Brägele", "Baden 家常菜", "Bibeleskaes Braegele", "herb quark fried potatoes", "香草 quark 鮮奶酪配煎馬鈴薯，是南 Baden 啤酒花園常見的清爽組合。", "先吃原味，再按需要加鹽、胡椒或洋蔥；比肉類主菜更適合夏天。", "Schwabentor 後的午餐／啤酒花園", "可作一人輕主餐，也適合兩人共享配沙拉。", "奶製品；通常為素食，仍應確認煎薯用油。", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        food("Badischer Flammkuchen", "薄餅／共享", "Flammkuchen Baden", "German tarte flambee", "薄脆面餅抹 crème fraîche，經典版本加洋蔥和培根；靠近 Alsace 的 Freiburg 很常見。", "趁熱分食，邊緣應脆而不是厚軟；可找 vegetarian 版本。", "Old Town 晚餐或 Schlossberg 觀景休息", "一張適合兩人共享，再加 salad。", "含奶和麩質；經典版含豬肉。", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        food("Schwarzwälder Kirschtorte", "Black Forest 甜點", "Black Forest gateau slice", "Schwarzwaelder Kirschtorte", "巧克力蛋糕、鮮奶油、櫻桃與 Kirsch 櫻桃酒組成的 Black Forest cake；重點是酒香與酸甜平衡。", "在 café 點單片並配黑咖啡，不要在高溫下長時間攜帶。", "下午茶，或 Black Forest day trip 再吃", "奶油厚重，兩人分享一片較舒服。", "含奶、蛋、麩質與酒精。", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        food("Freiburg Bier", "本地飲品", "Freiburg beer Ganter Feierling", "German beer garden", "Freiburg 有 Ganter、Feierling 及 craft breweries；Feierling 的自然渾濁 Inselhopf 是 Old Town 很容易體驗的一杯。", "先點小杯判斷風格；酒後不要接陡坡或需要精確轉乘的行程。", "Schwabentor／Schneckenvorstadt 晚餐段", "一杯配 Bibeleskäs 或 pretzel 即可。", "含酒精和通常含麩質；可問 alcohol-free beer。", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        food("Badischer Wein", "葡萄酒文化", "Baden wine Freiburg vineyards", "Baden white wine", "Freiburg 周圍交會 Breisgau、Markgräflerland 與 Tuniberg 產區；Gutedel、Pinot Gris 與 Pinot Noir 都比籠統點“德國白酒”更有地方性。", "夏天先試一杯乾型 Gutedel 或 Pinot Gris；不必為了品酒一次點多款。", "Münsterplatz Alte Wache，或正式晚餐", "一杯即可；若當天跨城或上坡則選無酒精飲料。", "含酒精與 sulfites。", "https://visit.freiburg.de/en/discover/culinary/freiburg-wine"),
      ],
      routePlan: [
        { checkpoint: "Hbf → Martinstor", suggestion: "抵達後先放行李；此段只補水，不急著在車站吃完整正餐。" },
        { checkpoint: "Münsterplatz", suggestion: "市集開放時選 Lange Rote + 一片 Käsekuchen；兩人共享就是高效率的 Freiburg tasting。" },
        { checkpoint: "Konviktstraße → Schwabentor", suggestion: "想坐下休息，可選 Bibeleskäs mit Brägele 或 Flammkuchen，避免同時再點厚重肉菜。" },
        { checkpoint: "Schlossberg／晚餐", suggestion: "體力與天氣允許再選一杯 Freiburg beer 或 Baden wine；飲酒後不走濕滑山徑。" },
      ],
      marketLabel: "遇到 Münstermarkt 時",
      marketNote: "Münstermarkt 通常每週一至六圍繞 Freiburg Minster 營業，攤位與節假日安排會調整。Lange Rote 與 Käsekuchen 應優先放在市集時段；星期日抵達則改用 café、bakery 或 Old Town restaurant。",
      sources: [
        source("Freiburg culinary highlights", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        source("Lange Rote", "https://visit.freiburg.de/en/discover/culinary/sausage-lange-rote"),
        source("Freiburg beer", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        source("Baden wine", "https://visit.freiburg.de/en/discover/culinary/freiburg-wine"),
      ],
    },
    heidelberg: {
      compactLibrary: true,
      eyebrow: "TASTE HEIDELBERG",
      title: "Heidelberg 與 Kurpfalz 的味道：大學城甜點、家常菜與 Neckar 酒",
      libraryTitle: "Heidelberg 完整當地食物資料庫",
      intro: "Heidelberg 真正獨有的識別點是 Studentenkuss；正餐則來自 Baden 與 Kurpfalz 兩側的區域傳統。不要把所有德國南部食物都說成 Heidelberg 特產：最穩妥的組合是 Studentenkuss、一道區域主菜，再配當地葡萄酒或啤酒。",
      specialties: [
        food("Heidelberger Studentenkuss", "城市甜點／手信", "Heidelberger Studentenkuss", "chocolate wafer confection", "Café Knösel 的巧克力糖點：nougat cream 夾在 wafer 上，再包覆巧克力。19 世紀時被包裝成學生向心上人表達愛意的體面禮物。", "先買一個原味現場吃，再決定是否買盒裝；夏天避免放在曬熱的背包裡。", "Heiliggeistkirche → Old Bridge 之間的 Haspelgasse", "一人一個剛好，不會影響晚餐。", "含堅果、奶、麩質／wafer；逐項看包裝。", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        food("Badischer Sauerbraten mit Spätzle", "區域主菜", "Sauerbraten Spaetzle", "German pot roast noodles", "酸味醃制後慢燉的肉配 Spätzle，是 Heidelberg 官方美食資料明確提到的 Baden 風格組合。", "把酸香肉汁與蛋面一起吃；適合想嘗傳統燉肉、又不想點炸物的人。", "Old Town 完整晚餐", "一人主菜通常很飽；兩人另加 salad 即可。", "含肉、蛋與麩質；醬汁可能含酒。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Kurpfälzer Schlachtplatte", "Palatinate 重菜", "Palatinate Schlachtplatte", "German sausage platter sauerkraut", "血腸、肝腸等肉食配酸菜或馬鈴薯的傳統拼盤，代表 Kurpfalz 的厚重家常方向。", "把它當共享型文化體驗，不要在爬 Castle 或 Philosophenweg 前吃。", "Full City Walk 後的晚餐", "很重，建議兩人分享或先確認份量。", "豬肉、內臟與高鹽；不適合素食者。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Kurpfälzer Saumagen", "區域肉食", "Pfälzer Saumagen", "Palatinate pork potato dish", "豬肉、馬鈴薯與香料填制後切片煎香，是 Palatinate 區域菜；在 Heidelberg 餐廳常與 sauerkraut 或 gravy 一起出現。", "第一次可點小份或與同行者交換品嘗；口感比名稱聽起來更像緊實肉糕。", "Old Town 午／晚餐", "一人主菜偏飽，避免再點 Schlachtplatte。", "豬肉；配方可能含蛋、麩質或 mustard。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Käsespätzle", "無肉熱食", "Kaesespaetzle", "German cheese noodles", "蛋面與融化奶酪、焦香洋蔥組成的南德舒適食物；並非 Heidelberg 獨有，但在區域餐廳是可靠的無肉選擇。", "趁熱吃並配 salad；奶酪香很濃，不需要再加奶油甜點。", "天氣轉涼或雨天午餐", "一份通常足夠兩人試味或一人主餐。", "通常為素食；含蛋、奶和麩質。", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        food("Heidelberger Herrenberg Wein", "城市葡萄酒", "Heidelberg Herrenberg wine", "Baden Pinot Noir rose", "Heidelberg 山坡有自己的葡萄種植傳統；官方資料特別以 Herrenberg wine 說明這座城市不只有啤酒和學生酒館。", "八月底可先試當地 rosé、Pinot 或乾白；問清楚是否真來自 Heidelberg vineyard。", "晚餐、wine bar 或 Castle day 收尾", "一杯即可；山坡日與跨城日不安排品酒。", "含酒精與 sulfites。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Zwiebelkuchen + Neuer Wein", "晚夏季節味", "Zwiebelkuchen Federweisser", "German onion tart", "洋蔥咸派常與剛發酵的新酒搭配，是葡萄酒區晚夏到秋季的季節組合；八月底是否已經供應要看當年採收與店家。", "看到菜單再點，不把它當保證項目；新酒甜但仍有酒精。", "wine bar／Old Town 晚餐 Optional", "兩人分享一塊，再吃正餐。", "含麩質、奶、蛋；傳統版本可能含培根。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
      ],
      routePlan: [
        { checkpoint: "Bismarckplatz → Hauptstraße", suggestion: "抵達日先吃輕食；不要一到 Old Town 就點 Schlachtplatte，避免剩餘路線變得疲累。" },
        { checkpoint: "Universitätsplatz", suggestion: "把咖啡或學生區小食放在這裡，保留甜點額度給真正屬於 Heidelberg 的 Studentenkuss。" },
        { checkpoint: "Heiliggeistkirche → Haspelgasse", suggestion: "繞進 Café Knösel 買 Studentenkuss；這是最值得固定在 City Walk 的 tasting checkpoint。" },
        { checkpoint: "Old Bridge／路線結束", suggestion: "再選 Sauerbraten、Saumagen 或 Käsespätzle其中一道；只在不再上山時配一杯 Heidelberg wine。" },
      ],
      marketLabel: "區域菜怎麼判斷",
      marketNote: "菜單出現 badisch、kurpfälzisch 或 pfälzisch，表示區域背景不同但都可能在 Heidelberg 出現。Studentenkuss 是最明確的城市特產；Sauerbraten、Saumagen、Spätzle 和 wine 應標作 Heidelberg 周邊傳統，而不是宣稱全部起源於本城。",
      sources: [
        source("Culinary Heidelberg", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        source("City of Heidelberg dining guide", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        source("Café Knösel／Studentenkuss city listing", "https://www.heidelberg.de/hd,Lde/HD/Erleben/Gastronomie.html"),
      ],
    },
    frankfurt: {
      compactLibrary: true,
      eyebrow: "TASTE FRANKFURT",
      title: "Frankfurt 七種代表味道：市場午餐、綠色醬與 Apfelwein 文化",
      libraryTitle: "Frankfurt 完整當地食物資料庫",
      intro: "Frankfurt 的地方味道非常集中：Kleinmarkthalle 適合白天小吃，Sachsenhausen 適合晚上的 Apfelwein tavern。七種官方代表食物不必全部吃齊；最好的組合是一份冷食／小吃、一份主菜和一種甜點。",
      specialties: [
        food("Apfelwein / Ebbelwei", "城市飲品", "Frankfurt Apfelwein Bembel", "German apple wine jug", "偏酸、清爽的發酵蘋果酒，傳統從灰藍色 Bembel 陶壺倒進有菱格紋的 Geripptes 玻璃杯。", "先點一杯純飲；怕酸可選加礦泉水的 Sauergespritzter。", "Sachsenhausen 晚餐段", "一杯體驗即可；返程日不喝酒。", "含酒精與可能含 sulfites。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Grüne Soße", "冷醬／輕主餐", "Frankfurter Gruene Sosse eggs potatoes", "green sauce boiled eggs potatoes", "由七種香草製成、冷食的綠色醬，經典搭配水煮蛋和馬鈴薯，也會配 schnitzel 或魚。", "第一次選 egg + potato 版本，最能吃出香草本身。", "Kleinmarkthalle／Old Town 午餐", "比 Rippchen 輕，適合 City Walk 中段。", "蛋奶配方依店家；基礎版本通常可素食。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Handkäs mit Musik", "酒館冷食", "Handkaes mit Musik", "German sour milk cheese onions", "低脂酸奶酪以醋、油、洋蔥和香料醃制；“mit Musik”幽默地指洋蔥之後的生理效果。", "用叉子配麵包吃；氣味和酸味明顯，先點一份共享。", "Apfelwein tavern 前菜", "兩人分食最合適。", "奶製品；醃汁與麵包成分另問。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Würstchen", "快速小吃", "Frankfurter Wuerstchen mustard bread", "Frankfurt sausage", "細長、輕煙薰的豬肉香腸，傳統以熱水加熱而不是大火煎烤，配麵包和 mustard。", "把它當市場小吃，不需要為了“正宗”點成複雜套餐。", "Kleinmarkthalle／City Walk 中段", "一對可當輕午餐，兩人也可共享試味。", "豬肉；mustard 與麵包過敏者留意。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Rippchen mit Kraut", "傳統重菜", "Frankfurter Rippchen sauerkraut", "German pork ribs sauerkraut potatoes", "醃制豬排配酸菜和馬鈴薯，是比 sausage 更完整、更厚重的 Frankfurt 酒館主菜。", "留給 City Walk 結束後；配 Apfelwein 時減少其他肉食。", "Sachsenhausen 晚餐", "一人份很飽，先確認是否適合分享。", "豬肉、高鹽；不適合返程前輕食。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Kranz", "蛋糕／下午茶", "Frankfurter Kranz cake", "German crown cake", "環形 sponge cake 夾 buttercream 與果醬，外層裹脆果仁，外觀象徵 Frankfurt 的“皇冠”。", "點單片配咖啡；奶油怕熱，不適合裝進夏季行李。", "Old Town café 下午茶", "兩人分享一片較舒服。", "含奶、蛋、麩質和堅果。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Bethmännchen", "甜點／手信", "Bethmaennchen marzipan", "German marzipan cookies almonds", "小型杏仁膏烘焙甜點，外側以杏仁裝飾，與 Frankfurt 的 Bethmann family 故事相連。", "先買兩三顆試味；比奶油蛋糕更適合帶往機場。", "Kleinmarkthalle、bakery 或返程伴手禮", "體積小但甜度高，一次一顆。", "含杏仁、蛋；配方可能含 gluten。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
      ],
      routePlan: [
        { checkpoint: "Kleinmarkthalle", suggestion: "星期六先吃 Grüne Soße、Frankfurter Würstchen 或小份市場食物；不要一開始就吃 Rippchen。" },
        { checkpoint: "New Old Town → Römer", suggestion: "途中安排 Bethmännchen 或一片 Frankfurter Kranz；奶油蛋糕現場吃，不放行李。" },
        { checkpoint: "Eiserner Steg → Sachsenhausen", suggestion: "想體驗酒館文化，點一杯 Apfelwein + 一份 Handkäs；對酸味沒把握就兩人共享。" },
        { checkpoint: "City Walk 結束／機場日", suggestion: "Rippchen 只放在星期六晚餐；星期日返程保留輕食，並用 Bethmännchen 作可攜帶手信。" },
      ],
      marketLabel: "本行程的星期規則",
      marketNote: "Kleinmarkthalle 星期六適合作為路線開場，星期日休息。Museumsuferfest 週末的橋梁、河岸和 Sachsenhausen 會擁擠，想吃 Apfelwein tavern 應預留排隊與過橋時間；返程日不以排隊名店為目標。",
      sources: [
        source("Frankfurt seven specialties", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        source("Frankfurt cuisine guide", "https://www.visitfrankfurt.travel/en/experience/cuisine"),
      ],
    },
    zurich: {
      traditional: true,
      compactLibrary: true,
      eyebrow: "TASTE ZÜRICH",
      title: "Zürich 美食指南：當地味道、巧克力與城市餐桌",
      libraryTitle: "Zürich 完整當地食物資料庫",
      intro: "先看這次兩天行程實際怎麼吃，再按興趣展開完整食物資料庫。類別標籤會區分 Zürich 味道、瑞士經典與城市巧克力，不把所有 Swiss food 都說成 Zürich 特產。",
      specialties: [
        food("Züri Gschnätzlets + Rösti", "城市主菜", "Zuercher Geschnetzeltes Roesti", "veal cream sauce rosti", "薄切小牛肉以白酒、cream 和 mushroom sauce 烹調，配酥脆 Rösti，是最明確的 Zürich 主菜。", "醬汁和 Rösti 一起吃；若不吃 veal，不必用普通奶油雞肉版本冒充體驗。", "Old Town 午餐／City Walk 後晚餐", "一份偏飽；同餐不再點 fondue。", "含小牛肉、奶與可能含酒、麩質。", "https://www.zuerich.com/en/zurcher-geschnetzeltes"),
        food("Birchermüesli", "早餐", "Bircher muesli", "Swiss muesli apple oats", "由 Zürich 醫生 Maximilian Bircher-Benner 推廣的燕麥、水果與堅果組合；比酒店冷切更適合轉移日早餐。", "選蘋果味明顯、不過度加糖的版本，配咖啡即可。", "酒店／Zürich HB，前往 Bern 前", "一碗是一頓輕早餐。", "含燕麥、堅果和通常含奶；可問 vegan 版本。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Luxemburgerli", "甜點／手信", "Luxemburgerli Spruengli", "Swiss mini macarons", "Sprüngli 的迷你夾心 macaron，體積比普通 macaron 小，口味多、適合買少量現場比較。", "先選 3–4 種，冷藏口味不要在夏日背包久放。", "Paradeplatz 或 Zürich HB", "一人兩三顆即可。", "含蛋、堅果與奶；口味配方不同。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Zürcher Tirggel", "歷史餅乾", "Zuercher Tirggel", "Swiss honey cookie embossed", "薄而硬脆的蜂蜜香料餅乾，表面壓有 Zürich 歷史圖案；文字記錄可追溯至 15 世紀。", "不要期待軟 gingerbread；掰小塊慢慢吃，更能接受硬脆口感。", "Old Town food hall／伴手禮", "一片可多人分嘗。", "含蜂蜜和麩質；通常不適合嚴格 vegan。", "https://www.zuerich.com/en/zurcher-tirggel"),
        food("Wiedikerli", "城市香腸", "Wiedikerli Zurich sausage", "Swiss grilled bratwurst", "源自 Wiedikon 的 cult bratwurst，以豬肉、炒洋蔥、蒜與 parsley 調味，也有 fennel 和 chili 版本。", "先試 original；與 Sternen Grill 的 St. Galler bratwurst 是不同城市脈絡。", "Zürich West／Wiedikon 延伸", "一根可作 quick meal。", "豬肉；配方與麵包過敏原另問。", "https://www.zuerich.com/en/wiedikerli"),
        food("Straumann Hüppen", "威化甜點", "Swiss Hueppen wafer rolls", "chocolate wafer rolls", "細長脆威化卷包裹巧克力奶油，是比 praline 更輕、更方便攜帶的 Zürich 周邊傳統甜點。", "配咖啡吃，一次一根；開封後注意防潮。", "department store／food shop 伴手禮", "適合小量分享。", "含奶、麩質，可能含堅果。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Stadtjäger", "咸味手信", "Stadtjaeger Zurich sausage", "Swiss dried sausage", "完全在 Zürich 市內製作與風乾的生香腸，是不想只買甜食時的城市型伴手禮。", "切薄片配麵包或 picnic；跨境與入境攜帶肉製品前檢查規定。", "Urban food store／野餐補給", "一條適合多人分食。", "肉製品、高鹽；攜帶與保存遵從包裝。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Cheese Fondue", "瑞士經典", "Cheese fondue Switzerland", "Swiss cheese fondue bread", "融化 cheese、white wine 與少量 kirsch 組成共食鍋，用長叉蘸 bread；在 Zürich 很常見，但不是本城獨有。", "慢慢吃並保持鍋底溫熱；可先問是否提供 non-alcoholic 版本。", "Swiss Chuchi／Le Dézaley 晚餐", "兩人共享一鍋並加 salad 較舒服。", "含奶、酒精和麩質；不愛濃 cheese 可跳過。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional/raclette-and-fondue"),
        food("Raclette", "瑞士經典", "Raclette cheese potatoes", "Swiss raclette meal", "把加熱的 cheese 刮到 boiled potato、pickled onion、gherkin 與蔬菜上；比 fondue 更容易控制每一口的 cheese 份量。", "趁熱吃，一次先取少量；與 fondue 二選一即可。", "Swiss Chuchi／傳統 Swiss restaurant", "兩人可共享，避免同時再點重奶油主菜。", "含奶；配菜與醃菜過敏原另問。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional/raclette-and-fondue"),
        food("Älplermagronen", "瑞士經典", "Aelplermagronen Swiss", "Swiss alpine macaroni", "macaroni、potato、cream、cheese 與 fried onion 組成的 Alpine comfort food，常搭配 apple sauce 平衡咸香。", "apple sauce 與面一起交替吃；不要把它當甜點。", "Swiss Chuchi／雨天熱食", "一份通常很飽，兩人試味可共享。", "含蛋、奶和麩質；通常可做無肉版本。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Capuns", "區域經典", "Capuns Switzerland", "Swiss chard rolls capuns", "Graubünden 山區菜：將 flour dough、herbs 與肉類或蔬菜包入 Swiss chard，再以 milk／cream 湯汁烹煮。", "先確認內餡版本；草本味溫和，適合想避開炸物時嘗試。", "Swiss Chuchi／區域菜餐廳", "一份可作主菜；與同行者交換品嘗更合適。", "可能含豬肉、奶、蛋與麩質。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("St. Galler Bratwurst", "區域經典", "St Galler bratwurst", "Swiss veal sausage", "以 veal 為主、質地細緻、香料溫和的 St. Gallen 香腸；在 Zürich 容易吃到，但來源屬於 St. Gallen。", "可配 bread roll 或 potato salad；mustard 按個人口味。", "Sternen Grill／Bellevue 快速補給", "一根就是一頓輕食，不必訂位。", "含肉；麵包、mustard 與配方過敏原另問。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Teuscher Champagne Truffle", "酒心巧克力", "Teuscher Champagne Truffle", "champagne chocolate truffles", "Teuscher 的招牌 champagne truffle 以 champagne butter cream、dark filling 與 chocolate shell 組成，是 Zürich 老牌 chocolatier 最有辨識度的成人向選擇。", "酒香和甜度都明顯，先買 1–2 粒試味，不必直接買大盒。", "8/15 Old Town／Bahnhofstrasse 一帶", "一人 1–2 粒即可。", "含酒精、奶，可能含堅果與大豆。", "https://www.teuscher.com/"),
        food("Sprüngli Pralines & Truffles", "經典巧克力", "Spruengli pralines truffles", "Swiss chocolate pralines", "除 Luxemburgerli 外，Sprüngli 的 pralines、truffles 與 Grand Cru chocolate 也是最容易在市中心購買的 Zürich 經典手信。", "現場自選幾粒不同內餡，比預包裝大盒更適合第一次比較。", "Paradeplatz；星期日改 Zürich HB", "每人 2–3 粒，或買一小盒分享。", "留意奶、堅果、大豆與酒心口味。", "https://www.spruengli.ch/en/"),
        food("laflor Bean-to-Bar", "新派巧克力", "dark chocolate bar", "chocolate bar cocoa", "Zürich 製作的 bean-to-bar chocolate，強調 cacao 產地與小批次製作；酸香、果味和烘焙感會比一般 milk chocolate 更清楚。", "喜歡 dark chocolate 可從 single-origin 小片開始，不要只按 cacao 百分比判斷。", "Hohlstrasse manufactory／specialty store", "買一片多人比較即可。", "配方依口味而異；留意奶、堅果與大豆。", "https://laflor.ch/en/"),
        food("Taucherli Drinking Chocolate", "飲用巧克力", "Taucherli drinking chocolate", "hot chocolate on a stick", "把 ganache praline on a stick 放進熱 milk 攪拌，就會成為濃厚 hot chocolate；品牌也製作 chocolate bars 與 fondue。", "想現場喝就選一杯；想作手信則買未衝泡的產品，更容易保存。", "specialty shop／非必經補給", "一杯或一支就是一次體驗。", "通常含奶；不同 chocolate 另看堅果與大豆標示。", "https://taucherli.com/"),
      ],
      routePlan: [
        { checkpoint: "8/15 午餐｜Old Town", suggestion: "優先 Züri Gschnätzlets + Rösti；若航班延誤，就改用不需訂位的快速簡餐。" },
        { checkpoint: "City Walk 小食", suggestion: "在 Bahnhofstrasse／Old Town 選 Luxemburgerli、少量 pralines 或 Tirggel，三者不必全部買。" },
        { checkpoint: "8/15 晚餐｜Niederdorf", suggestion: "主餐與 fondue／raclette 二選一；同餐不要再疊加重奶油主菜。" },
        { checkpoint: "8/16 早餐｜Langstrasse", suggestion: "Hillsong 主方案有時間慢慢吃 Birchermüesli、麵包與咖啡；不必先繞去 Old Town。" },
        { checkpoint: "手信｜Zürich HB", suggestion: "離開前選 Sprüngli 小盒或一片 laflor 多人比較，避免在夏日背包放太久。" },
      ],
      marketLabel: "Zürich 與全瑞士要分開看",
      marketNote: "Fondue、raclette 與 St. Galler bratwurst 在 Zürich 很容易吃到，但不是 Zürich 獨有。若時間有限，優先 Züri Gschnätzlets、Birchermüesli、Luxemburgerli；Tirggel 與 Wiedikerli 則適合已經吃過瑞士經典的人。",
      sources: [
        source("Typical & traditional Zürich", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        source("Zürcher Geschnetzeltes", "https://www.zuerich.com/en/zurcher-geschnetzeltes"),
        source("Zürcher Tirggel", "https://www.zuerich.com/en/zurcher-tirggel"),
        source("Wiedikerli", "https://www.zuerich.com/en/wiedikerli"),
      ],
    },
  };

  const safe = (value) => String(value ?? "")
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const externalLink = (url, label) => `<a href="${safe(url)}" target="_blank" rel="noopener noreferrer">${safe(label)} <span aria-hidden="true">↗</span></a>`;

  function traditionalize(value) {
    const replacements = [
      ["當地", "當地"], ["從", "從"], ["與", "與"], ["圖片", "圖片"], ["暫", "暫"],
      ["怎麼", "怎麼"], ["路線", "路線"], ["哪裡", "哪裡"], ["選擇", "選擇"], ["資料", "資料"],
      ["核對", "核對"], ["傳統", "傳統"], ["經典", "經典"], ["區域", "區域"], ["飲", "飲"],
      ["時", "時"], ["為", "為"], ["會", "會"], ["買", "買"], ["還", "還"], ["發", "發"],
      ["個", "個"], ["輕", "輕"], ["過", "過"], ["這", "這"], ["種", "種"], ["線", "線"],
      ["現", "現"], ["見", "見"], ["應", "應"], ["內", "內"], ["較", "較"], ["東", "東"],
      ["將", "將"], ["夾", "夾"], ["體", "體"], ["別", "別"], ["說", "說"], ["識", "識"],
      ["軟", "軟"], ["開", "開"], ["進", "進"], ["場", "場"], ["風", "風"], ["補", "補"],
      ["對", "對"], ["點", "點"], ["學", "學"], ["類", "類"], ["劑", "劑"], ["後", "後"],
      ["顧", "顧"], ["達", "達"], ["衝", "沖"], ["濃", "濃"], ["塊", "塊"], ["儲", "儲"],
      ["鹽", "鹽"], ["淨", "淨"], ["樹", "樹"], ["顯", "顯"], ["寫", "寫"], ["屬", "屬"],
      ["藝", "藝"], ["館", "館"], ["區", "區"], ["壓", "壓"], ["標", "標"], ["層", "層"],
      ["選", "選"], ["廳", "廳"], ["趕", "趕"], ["穩", "穩"], ["優", "優"], ["換", "換"],
      ["餅乾", "餅乾"], ["歷史", "歷史"], ["記錄", "記錄"], ["世紀", "世紀"], ["細", "細"],
      ["攜帶", "攜帶"], ["周邊", "周邊"], ["肉製品", "肉製品"], ["規定", "規定"], ["檢查", "檢查"],
      ["包裝", "包裝"], ["趁熱", "趁熱"], ["麵包", "麵包"], ["面一起", "麵一起"], ["當", "當"],
      ["幾", "幾"], ["餡", "餡"], ["預", "預"], ["適", "適"], ["強", "強"], ["調", "調"],
      ["則", "則"], ["產", "產"], ["製作", "製作"], ["產品", "產品"], ["給", "給"],
      ["圖", "圖"], ["並", "並"], ["鍋", "鍋"], ["溫", "溫"], ["問", "問"], ["熱", "熱"],
      ["帶", "帶"], ["攪", "攪"]
    ];
    return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), String(value ?? ""));
  }

  function renderGuide(root, guide) {
    const local = (value) => safe(guide.traditional ? traditionalize(value) : value);
    const specialtyCards = `<div class="food-specialty-grid">${guide.specialties.map((item) => `<article class="food-specialty-card">
        <div class="food-photo" data-image-query="${safe(item.imageQuery)}" data-image-fallback="${safe(item.imageFallback)}"><span>${local(item.category)}</span><em>${guide.traditional ? "圖片暫不可用" : "圖片暫不可用"}</em></div>
        <div class="food-specialty-body"><span class="food-category">${local(item.category)}</span><h3>${local(item.name)}</h3><p class="food-summary">${local(item.summary)}</p>
          <dl><div><dt>${guide.traditional ? "怎麼吃" : "怎麼吃"}</dt><dd>${local(item.taste)}</dd></div><div><dt>${guide.traditional ? "放在路線哪裡" : "放在路線哪裡"}</dt><dd>${local(item.timing)}</dd></div>
            <div><dt>${guide.traditional ? "份量判斷" : "份量判斷"}</dt><dd>${local(item.portion)}</dd></div><div><dt>${guide.traditional ? "飲食注意" : "飲食注意"}</dt><dd>${local(item.diet)}</dd></div></dl>
          ${externalLink(item.officialUrl, guide.traditional ? "瞭解這種當地味道" : "瞭解這種當地味道")}</div></article>`).join("")}</div>`;
    const routePlan = `<div class="food-route-plan"><div class="food-route-heading"><p class="eyebrow">EAT ALONG THE WALK</p><h3>${guide.traditional ? "這次行程怎麼吃" : "沿 City Walk 怎麼安排"}</h3><p>${guide.traditional ? "先照時間段選擇；兩種小食加一頓主餐已經足夠。" : "不用一次吃齊；選擇兩種小食加一頓主餐即可。"}</p></div>
        <ol>${guide.routePlan.map((item) => `<li><strong>${local(item.checkpoint)}</strong><span>${local(item.suggestion)}</span></li>`).join("")}</ol></div>`;
    root.classList.add("local-food-guide");
    root.innerHTML = `<p class="eyebrow section-eyebrow">${local(guide.eyebrow)}</p>
      <h2>${local(guide.title)}</h2><p class="section-intro">${local(guide.intro)}</p>
      ${guide.compactLibrary ? routePlan : specialtyCards}
      <aside class="market-note"><strong>${local(guide.marketLabel)}</strong><p>${local(guide.marketNote)}</p></aside>
      ${guide.compactLibrary ? `<details class="food-library"><summary><span><small>FOOD REFERENCE</small><strong>${local(guide.libraryTitle || "完整當地食物資料庫")}</strong></span><em>${guide.specialties.length} 種食物</em></summary><div class="food-library-body">${specialtyCards}</div></details>` : routePlan}
      <div class="food-guide-sources"><strong>${guide.traditional ? "官方美食資料｜核對" : "官方美食資料｜核對"} ${VERIFIED_ON}</strong>${guide.sources.map((item) => externalLink(item.url, item.label)).join("")}</div>`;
  }

  async function wikipediaImage(query, size = 760) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=5&prop=pageimages&piprop=thumbnail&pithumbsize=${size}&format=json&origin=*`;
    try {
      const response = await fetch(endpoint, { signal: controller.signal });
      if (!response.ok) throw new Error("image request failed");
      const data = await response.json();
      return Object.values(data.query?.pages || {}).filter((page) => page.thumbnail)
        .sort((a, b) => (a.index || 999) - (b.index || 999))[0]?.thumbnail?.source;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function loadImages(root, cityName) {
    const targets = [...root.querySelectorAll("[data-image-query]")];
    await Promise.allSettled(targets.map(async (target, index) => {
      try {
        let imageUrl = await wikipediaImage(target.dataset.imageQuery).catch(() => null);
        if (!imageUrl && target.dataset.imageFallback) {
          imageUrl = await wikipediaImage(target.dataset.imageFallback).catch(() => null);
        }
        if (!imageUrl) throw new Error("image unavailable");
        const image = new Image();
        image.loading = index < 4 ? "eager" : "lazy";
        image.decoding = "async";
        image.alt = `${cityName}｜${target.dataset.imageQuery}`;
        const imageTimeout = window.setTimeout(() => {
          image.remove();
          target.classList.add("image-unavailable");
        }, 5000);
        image.addEventListener("load", () => {
          window.clearTimeout(imageTimeout);
          target.classList.add("has-image");
        }, { once: true });
        image.addEventListener("error", () => {
          window.clearTimeout(imageTimeout);
          image.remove();
          target.classList.add("image-unavailable");
        }, { once: true });
        image.src = imageUrl;
        target.prepend(image);
      } catch {
        target.classList.add("image-unavailable");
      }
    }));
  }

  document.querySelectorAll("[data-city-food-guide]").forEach((root) => {
    const cityKey = root.dataset.cityFoodGuide;
    const guide = guides[cityKey];
    if (!guide) {
      root.innerHTML = "<p class=\"small\">美食資料暫不可用。</p>";
      return;
    }
    renderGuide(root, guide);
    loadImages(root, guide.title.split(" ")[0]);
  });
})();

(function () {
  "use strict";

  const VERIFIED_ON = "2026-08-11";
  const food = (name, category, imageQuery, imageFallback, summary, taste, timing, portion, diet, officialUrl) => ({
    name, category, imageQuery, imageFallback, summary, taste, timing, portion, diet, officialUrl,
  });
  const source = (label, url) => ({ label, url });

  const guides = {
    freiburg: {
      eyebrow: "TASTE FREIBURG",
      title: "Freiburg 当地美食：从 Münster 市集吃到 Baden 葡萄酒",
      intro: "Freiburg 的味道来自三个空间：Münsterplatz 的市集小吃、Old Town 的 Baden 家常菜，以及 Black Forest 与葡萄园带来的甜点、啤酒和葡萄酒。抵达日最实用的安排是一咸一甜；完整 City Walk 后再选啤酒花园或 Baden 晚餐。",
      specialties: [
        food("Lange Rote", "市集小吃", "Lange Rote Freiburg", "German long red sausage", "约 35 厘米长、无肠衣的 Freiburg 烤猪肉香肠；外层焦香，传统搭配炒洋葱，面包只负责托住香肠。", "第一次可点 mit Zwiebeln；想照当地传统就不要为了塞进面包而切短。", "Münsterplatz／Minster checkpoint", "一根足够当轻午餐；两人可先分享，再去吃甜点。", "猪肉；素食版并非每个摊位都有。", "https://visit.freiburg.de/en/discover/culinary/sausage-lange-rote"),
        food("Stefans Käsekuchen", "市集甜点", "Stefans Käsekuchen Freiburg", "German cheesecake slice", "Freiburg 市集代表性的 quark cheesecake；使用少量蛋、cream 与 quark，口感轻柔，带一点柠檬酸香。", "买一片现吃；比 Black Forest cake 更轻，适合步行中段。", "Münsterplatz，与 Lange Rote 前后搭配", "两人分一片即可继续走路。", "含奶、蛋和麸质。", "https://visit.freiburg.de/en/discover/culinary/stefans-cheesecake"),
        food("Bibeleskäs mit Brägele", "Baden 家常菜", "Bibeleskaes Braegele", "herb quark fried potatoes", "香草 quark 鲜奶酪配煎马铃薯，是南 Baden 啤酒花园常见的清爽组合。", "先吃原味，再按需要加盐、胡椒或洋葱；比肉类主菜更适合夏天。", "Schwabentor 后的午餐／啤酒花园", "可作一人轻主餐，也适合两人共享配沙拉。", "奶制品；通常为素食，仍应确认煎薯用油。", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        food("Badischer Flammkuchen", "薄饼／共享", "Flammkuchen Baden", "German tarte flambee", "薄脆面饼抹 crème fraîche，经典版本加洋葱和培根；靠近 Alsace 的 Freiburg 很常见。", "趁热分食，边缘应脆而不是厚软；可找 vegetarian 版本。", "Old Town 晚餐或 Schlossberg 观景休息", "一张适合两人共享，再加 salad。", "含奶和麸质；经典版含猪肉。", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        food("Schwarzwälder Kirschtorte", "Black Forest 甜点", "Black Forest gateau slice", "Schwarzwaelder Kirschtorte", "巧克力蛋糕、鲜奶油、樱桃与 Kirsch 樱桃酒组成的 Black Forest cake；重点是酒香与酸甜平衡。", "在 café 点单片并配黑咖啡，不要在高温下长时间携带。", "下午茶，或 Black Forest day trip 再吃", "奶油厚重，两人分享一片较舒服。", "含奶、蛋、麸质与酒精。", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        food("Freiburg Bier", "本地饮品", "Freiburg beer Ganter Feierling", "German beer garden", "Freiburg 有 Ganter、Feierling 及 craft breweries；Feierling 的自然浑浊 Inselhopf 是 Old Town 很容易体验的一杯。", "先点小杯判断风格；酒后不要接陡坡或需要精确转乘的行程。", "Schwabentor／Schneckenvorstadt 晚餐段", "一杯配 Bibeleskäs 或 pretzel 即可。", "含酒精和通常含麸质；可问 alcohol-free beer。", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        food("Badischer Wein", "葡萄酒文化", "Baden wine Freiburg vineyards", "Baden white wine", "Freiburg 周围交会 Breisgau、Markgräflerland 与 Tuniberg 产区；Gutedel、Pinot Gris 与 Pinot Noir 都比笼统点“德国白酒”更有地方性。", "夏天先试一杯干型 Gutedel 或 Pinot Gris；不必为了品酒一次点多款。", "Münsterplatz Alte Wache，或正式晚餐", "一杯即可；若当天跨城或上坡则选无酒精饮料。", "含酒精与 sulfites。", "https://visit.freiburg.de/en/discover/culinary/freiburg-wine"),
      ],
      routePlan: [
        { checkpoint: "Hbf → Martinstor", suggestion: "抵达后先放行李；此段只补水，不急着在车站吃完整正餐。" },
        { checkpoint: "Münsterplatz", suggestion: "市集开放时选 Lange Rote + 一片 Käsekuchen；两人共享就是高效率的 Freiburg tasting。" },
        { checkpoint: "Konviktstraße → Schwabentor", suggestion: "想坐下休息，可选 Bibeleskäs mit Brägele 或 Flammkuchen，避免同时再点厚重肉菜。" },
        { checkpoint: "Schlossberg／晚餐", suggestion: "体力与天气允许再选一杯 Freiburg beer 或 Baden wine；饮酒后不走湿滑山径。" },
      ],
      marketLabel: "遇到 Münstermarkt 时",
      marketNote: "Münstermarkt 通常每周一至六围绕 Freiburg Minster 营业，摊位与节假日安排会调整。Lange Rote 与 Käsekuchen 应优先放在市集时段；星期日抵达则改用 café、bakery 或 Old Town restaurant。",
      sources: [
        source("Freiburg culinary highlights", "https://visit.freiburg.de/en/discover/culinary/culinary-highlights"),
        source("Lange Rote", "https://visit.freiburg.de/en/discover/culinary/sausage-lange-rote"),
        source("Freiburg beer", "https://visit.freiburg.de/en/discover/culinary/beer-gardens-and-beer"),
        source("Baden wine", "https://visit.freiburg.de/en/discover/culinary/freiburg-wine"),
      ],
    },
    heidelberg: {
      eyebrow: "TASTE HEIDELBERG",
      title: "Heidelberg 与 Kurpfalz 的味道：大学城甜点、家常菜与 Neckar 酒",
      intro: "Heidelberg 真正独有的识别点是 Studentenkuss；正餐则来自 Baden 与 Kurpfalz 两侧的区域传统。不要把所有德国南部食物都说成 Heidelberg 特产：最稳妥的组合是 Studentenkuss、一道区域主菜，再配当地葡萄酒或啤酒。",
      specialties: [
        food("Heidelberger Studentenkuss", "城市甜点／手信", "Heidelberger Studentenkuss", "chocolate wafer confection", "Café Knösel 的巧克力糖点：nougat cream 夹在 wafer 上，再包覆巧克力。19 世纪时被包装成学生向心上人表达爱意的体面礼物。", "先买一个原味现场吃，再决定是否买盒装；夏天避免放在晒热的背包里。", "Heiliggeistkirche → Old Bridge 之间的 Haspelgasse", "一人一个刚好，不会影响晚餐。", "含坚果、奶、麸质／wafer；逐项看包装。", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        food("Badischer Sauerbraten mit Spätzle", "区域主菜", "Sauerbraten Spaetzle", "German pot roast noodles", "酸味腌制后慢炖的肉配 Spätzle，是 Heidelberg 官方美食资料明确提到的 Baden 风格组合。", "把酸香肉汁与蛋面一起吃；适合想尝传统炖肉、又不想点炸物的人。", "Old Town 完整晚餐", "一人主菜通常很饱；两人另加 salad 即可。", "含肉、蛋与麸质；酱汁可能含酒。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Kurpfälzer Schlachtplatte", "Palatinate 重菜", "Palatinate Schlachtplatte", "German sausage platter sauerkraut", "血肠、肝肠等肉食配酸菜或马铃薯的传统拼盘，代表 Kurpfalz 的厚重家常方向。", "把它当共享型文化体验，不要在爬 Castle 或 Philosophenweg 前吃。", "Full City Walk 后的晚餐", "很重，建议两人分享或先确认份量。", "猪肉、内脏与高盐；不适合素食者。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Kurpfälzer Saumagen", "区域肉食", "Pfälzer Saumagen", "Palatinate pork potato dish", "猪肉、马铃薯与香料填制后切片煎香，是 Palatinate 区域菜；在 Heidelberg 餐厅常与 sauerkraut 或 gravy 一起出现。", "第一次可点小份或与同行者交换品尝；口感比名称听起来更像紧实肉糕。", "Old Town 午／晚餐", "一人主菜偏饱，避免再点 Schlachtplatte。", "猪肉；配方可能含蛋、麸质或 mustard。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Käsespätzle", "无肉热食", "Kaesespaetzle", "German cheese noodles", "蛋面与融化奶酪、焦香洋葱组成的南德舒适食物；并非 Heidelberg 独有，但在区域餐厅是可靠的无肉选择。", "趁热吃并配 salad；奶酪香很浓，不需要再加奶油甜点。", "天气转凉或雨天午餐", "一份通常足够两人试味或一人主餐。", "通常为素食；含蛋、奶和麸质。", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        food("Heidelberger Herrenberg Wein", "城市葡萄酒", "Heidelberg Herrenberg wine", "Baden Pinot Noir rose", "Heidelberg 山坡有自己的葡萄种植传统；官方资料特别以 Herrenberg wine 说明这座城市不只有啤酒和学生酒馆。", "八月底可先试当地 rosé、Pinot 或干白；问清楚是否真来自 Heidelberg vineyard。", "晚餐、wine bar 或 Castle day 收尾", "一杯即可；山坡日与跨城日不安排品酒。", "含酒精与 sulfites。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        food("Zwiebelkuchen + Neuer Wein", "晚夏季节味", "Zwiebelkuchen Federweisser", "German onion tart", "洋葱咸派常与刚发酵的新酒搭配，是葡萄酒区晚夏到秋季的季节组合；八月底是否已经供应要看当年采收与店家。", "看到菜单再点，不把它当保证项目；新酒甜但仍有酒精。", "wine bar／Old Town 晚餐 Optional", "两人分享一块，再吃正餐。", "含麸质、奶、蛋；传统版本可能含培根。", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
      ],
      routePlan: [
        { checkpoint: "Bismarckplatz → Hauptstraße", suggestion: "抵达日先吃轻食；不要一到 Old Town 就点 Schlachtplatte，避免剩余路线变得疲累。" },
        { checkpoint: "Universitätsplatz", suggestion: "把咖啡或学生区小食放在这里，保留甜点额度给真正属于 Heidelberg 的 Studentenkuss。" },
        { checkpoint: "Heiliggeistkirche → Haspelgasse", suggestion: "绕进 Café Knösel 买 Studentenkuss；这是最值得固定在 City Walk 的 tasting checkpoint。" },
        { checkpoint: "Old Bridge／路线结束", suggestion: "再选 Sauerbraten、Saumagen 或 Käsespätzle其中一道；只在不再上山时配一杯 Heidelberg wine。" },
      ],
      marketLabel: "区域菜怎么判断",
      marketNote: "菜单出现 badisch、kurpfälzisch 或 pfälzisch，表示区域背景不同但都可能在 Heidelberg 出现。Studentenkuss 是最明确的城市特产；Sauerbraten、Saumagen、Spätzle 和 wine 应标作 Heidelberg 周边传统，而不是宣称全部起源于本城。",
      sources: [
        source("Culinary Heidelberg", "https://www.visit.heidelberg.de/en/discover/culinary-heidelberg"),
        source("City of Heidelberg dining guide", "https://www.heidelberg.de/english/Home/Visit/Eating%20out.html"),
        source("Café Knösel／Studentenkuss city listing", "https://www.heidelberg.de/hd,Lde/HD/Erleben/Gastronomie.html"),
      ],
    },
    frankfurt: {
      eyebrow: "TASTE FRANKFURT",
      title: "Frankfurt 七种代表味道：市场午餐、绿色酱与 Apfelwein 文化",
      intro: "Frankfurt 的地方味道非常集中：Kleinmarkthalle 适合白天小吃，Sachsenhausen 适合晚上的 Apfelwein tavern。七种官方代表食物不必全部吃齐；最好的组合是一份冷食／小吃、一份主菜和一种甜点。",
      specialties: [
        food("Apfelwein / Ebbelwei", "城市饮品", "Frankfurt Apfelwein Bembel", "German apple wine jug", "偏酸、清爽的发酵苹果酒，传统从灰蓝色 Bembel 陶壶倒进有菱格纹的 Geripptes 玻璃杯。", "先点一杯纯饮；怕酸可选加矿泉水的 Sauergespritzter。", "Sachsenhausen 晚餐段", "一杯体验即可；返程日不喝酒。", "含酒精与可能含 sulfites。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Grüne Soße", "冷酱／轻主餐", "Frankfurter Gruene Sosse eggs potatoes", "green sauce boiled eggs potatoes", "由七种香草制成、冷食的绿色酱，经典搭配水煮蛋和马铃薯，也会配 schnitzel 或鱼。", "第一次选 egg + potato 版本，最能吃出香草本身。", "Kleinmarkthalle／Old Town 午餐", "比 Rippchen 轻，适合 City Walk 中段。", "蛋奶配方依店家；基础版本通常可素食。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Handkäs mit Musik", "酒馆冷食", "Handkaes mit Musik", "German sour milk cheese onions", "低脂酸奶酪以醋、油、洋葱和香料腌制；“mit Musik”幽默地指洋葱之后的生理效果。", "用叉子配面包吃；气味和酸味明显，先点一份共享。", "Apfelwein tavern 前菜", "两人分食最合适。", "奶制品；腌汁与面包成分另问。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Würstchen", "快速小吃", "Frankfurter Wuerstchen mustard bread", "Frankfurt sausage", "细长、轻烟熏的猪肉香肠，传统以热水加热而不是大火煎烤，配面包和 mustard。", "把它当市场小吃，不需要为了“正宗”点成复杂套餐。", "Kleinmarkthalle／City Walk 中段", "一对可当轻午餐，两人也可共享试味。", "猪肉；mustard 与面包过敏者留意。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Rippchen mit Kraut", "传统重菜", "Frankfurter Rippchen sauerkraut", "German pork ribs sauerkraut potatoes", "腌制猪排配酸菜和马铃薯，是比 sausage 更完整、更厚重的 Frankfurt 酒馆主菜。", "留给 City Walk 结束后；配 Apfelwein 时减少其他肉食。", "Sachsenhausen 晚餐", "一人份很饱，先确认是否适合分享。", "猪肉、高盐；不适合返程前轻食。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Frankfurter Kranz", "蛋糕／下午茶", "Frankfurter Kranz cake", "German crown cake", "环形 sponge cake 夹 buttercream 与果酱，外层裹脆果仁，外观象征 Frankfurt 的“皇冠”。", "点单片配咖啡；奶油怕热，不适合装进夏季行李。", "Old Town café 下午茶", "两人分享一片较舒服。", "含奶、蛋、麸质和坚果。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
        food("Bethmännchen", "甜点／手信", "Bethmaennchen marzipan", "German marzipan cookies almonds", "小型杏仁膏烘焙甜点，外侧以杏仁装饰，与 Frankfurt 的 Bethmann family 故事相连。", "先买两三颗试味；比奶油蛋糕更适合带往机场。", "Kleinmarkthalle、bakery 或返程伴手礼", "体积小但甜度高，一次一颗。", "含杏仁、蛋；配方可能含 gluten。", "https://www.visitfrankfurt.travel/en/experience/cuisine/frankfurt-specialities"),
      ],
      routePlan: [
        { checkpoint: "Kleinmarkthalle", suggestion: "星期六先吃 Grüne Soße、Frankfurter Würstchen 或小份市场食物；不要一开始就吃 Rippchen。" },
        { checkpoint: "New Old Town → Römer", suggestion: "途中安排 Bethmännchen 或一片 Frankfurter Kranz；奶油蛋糕现场吃，不放行李。" },
        { checkpoint: "Eiserner Steg → Sachsenhausen", suggestion: "想体验酒馆文化，点一杯 Apfelwein + 一份 Handkäs；对酸味没把握就两人共享。" },
        { checkpoint: "City Walk 结束／机场日", suggestion: "Rippchen 只放在星期六晚餐；星期日返程保留轻食，并用 Bethmännchen 作可携带手信。" },
      ],
      marketLabel: "本行程的星期规则",
      marketNote: "Kleinmarkthalle 星期六适合作为路线开场，星期日休息。Museumsuferfest 周末的桥梁、河岸和 Sachsenhausen 会拥挤，想吃 Apfelwein tavern 应预留排队与过桥时间；返程日不以排队名店为目标。",
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
      intro: "先看這次兩天行程實際怎麼吃，再按興趣展開完整食物資料庫。類別標籤會區分 Zürich 味道、瑞士經典與城市巧克力，不把所有 Swiss food 都說成 Zürich 特產。",
      specialties: [
        food("Züri Gschnätzlets + Rösti", "城市主菜", "Zuercher Geschnetzeltes Roesti", "veal cream sauce rosti", "薄切小牛肉以白酒、cream 和 mushroom sauce 烹调，配酥脆 Rösti，是最明确的 Zürich 主菜。", "酱汁和 Rösti 一起吃；若不吃 veal，不必用普通奶油鸡肉版本冒充体验。", "Old Town 午餐／City Walk 后晚餐", "一份偏饱；同餐不再点 fondue。", "含小牛肉、奶与可能含酒、麸质。", "https://www.zuerich.com/en/zurcher-geschnetzeltes"),
        food("Birchermüesli", "早餐", "Bircher muesli", "Swiss muesli apple oats", "由 Zürich 医生 Maximilian Bircher-Benner 推广的燕麦、水果与坚果组合；比酒店冷切更适合转移日早餐。", "选苹果味明显、不过度加糖的版本，配咖啡即可。", "酒店／Zürich HB，前往 Bern 前", "一碗是一顿轻早餐。", "含燕麦、坚果和通常含奶；可问 vegan 版本。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Luxemburgerli", "甜点／手信", "Luxemburgerli Spruengli", "Swiss mini macarons", "Sprüngli 的迷你夹心 macaron，体积比普通 macaron 小，口味多、适合买少量现场比较。", "先选 3–4 种，冷藏口味不要在夏日背包久放。", "Paradeplatz 或 Zürich HB", "一人两三颗即可。", "含蛋、坚果与奶；口味配方不同。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Zürcher Tirggel", "历史饼干", "Zuercher Tirggel", "Swiss honey cookie embossed", "薄而硬脆的蜂蜜香料饼干，表面压有 Zürich 历史图案；文字记录可追溯至 15 世纪。", "不要期待软 gingerbread；掰小块慢慢吃，更能接受硬脆口感。", "Old Town food hall／伴手礼", "一片可多人分尝。", "含蜂蜜和麸质；通常不适合严格 vegan。", "https://www.zuerich.com/en/zurcher-tirggel"),
        food("Wiedikerli", "城市香肠", "Wiedikerli Zurich sausage", "Swiss grilled bratwurst", "源自 Wiedikon 的 cult bratwurst，以猪肉、炒洋葱、蒜与 parsley 调味，也有 fennel 和 chili 版本。", "先试 original；与 Sternen Grill 的 St. Galler bratwurst 是不同城市脉络。", "Zürich West／Wiedikon 延伸", "一根可作 quick meal。", "猪肉；配方与面包过敏原另问。", "https://www.zuerich.com/en/wiedikerli"),
        food("Straumann Hüppen", "威化甜点", "Swiss Hueppen wafer rolls", "chocolate wafer rolls", "细长脆威化卷包裹巧克力奶油，是比 praline 更轻、更方便携带的 Zürich 周边传统甜点。", "配咖啡吃，一次一根；开封后注意防潮。", "department store／food shop 伴手礼", "适合小量分享。", "含奶、麸质，可能含坚果。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Stadtjäger", "咸味手信", "Stadtjaeger Zurich sausage", "Swiss dried sausage", "完全在 Zürich 市内制作与风干的生香肠，是不想只买甜食时的城市型伴手礼。", "切薄片配面包或 picnic；跨境与入境携带肉制品前检查规定。", "Urban food store／野餐补给", "一条适合多人分食。", "肉制品、高盐；携带与保存遵从包装。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Cheese Fondue", "瑞士经典", "Cheese fondue Switzerland", "Swiss cheese fondue bread", "融化 cheese、white wine 与少量 kirsch 组成共食锅，用长叉蘸 bread；在 Zürich 很常见，但不是本城独有。", "慢慢吃并保持锅底温热；可先问是否提供 non-alcoholic 版本。", "Swiss Chuchi／Le Dézaley 晚餐", "两人共享一锅并加 salad 较舒服。", "含奶、酒精和麸质；不爱浓 cheese 可跳过。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional/raclette-and-fondue"),
        food("Raclette", "瑞士经典", "Raclette cheese potatoes", "Swiss raclette meal", "把加热的 cheese 刮到 boiled potato、pickled onion、gherkin 与蔬菜上；比 fondue 更容易控制每一口的 cheese 份量。", "趁热吃，一次先取少量；与 fondue 二选一即可。", "Swiss Chuchi／传统 Swiss restaurant", "两人可共享，避免同时再点重奶油主菜。", "含奶；配菜与腌菜过敏原另问。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional/raclette-and-fondue"),
        food("Älplermagronen", "瑞士经典", "Aelplermagronen Swiss", "Swiss alpine macaroni", "macaroni、potato、cream、cheese 与 fried onion 组成的 Alpine comfort food，常搭配 apple sauce 平衡咸香。", "apple sauce 与面一起交替吃；不要把它当甜点。", "Swiss Chuchi／雨天热食", "一份通常很饱，两人试味可共享。", "含蛋、奶和麸质；通常可做无肉版本。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Capuns", "区域经典", "Capuns Switzerland", "Swiss chard rolls capuns", "Graubünden 山区菜：将 flour dough、herbs 与肉类或蔬菜包入 Swiss chard，再以 milk／cream 汤汁烹煮。", "先确认内馅版本；草本味温和，适合想避开炸物时尝试。", "Swiss Chuchi／区域菜餐厅", "一份可作主菜；与同行者交换品尝更合适。", "可能含猪肉、奶、蛋与麸质。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("St. Galler Bratwurst", "区域经典", "St Galler bratwurst", "Swiss veal sausage", "以 veal 为主、质地细致、香料温和的 St. Gallen 香肠；在 Zürich 容易吃到，但来源属于 St. Gallen。", "可配 bread roll 或 potato salad；mustard 按个人口味。", "Sternen Grill／Bellevue 快速补给", "一根就是一顿轻食，不必订位。", "含肉；面包、mustard 与配方过敏原另问。", "https://www.zuerich.com/en/eat-drink/typical-and-traditional"),
        food("Teuscher Champagne Truffle", "酒心巧克力", "Teuscher Champagne Truffle", "champagne chocolate truffles", "Teuscher 的招牌 champagne truffle 以 champagne butter cream、dark filling 与 chocolate shell 组成，是 Zürich 老牌 chocolatier 最有辨识度的成人向选择。", "酒香和甜度都明显，先买 1–2 粒试味，不必直接买大盒。", "8/15 Old Town／Bahnhofstrasse 一带", "一人 1–2 粒即可。", "含酒精、奶，可能含坚果与大豆。", "https://www.teuscher.com/"),
        food("Sprüngli Pralines & Truffles", "经典巧克力", "Spruengli pralines truffles", "Swiss chocolate pralines", "除 Luxemburgerli 外，Sprüngli 的 pralines、truffles 与 Grand Cru chocolate 也是最容易在市中心购买的 Zürich 经典手信。", "现场自选几粒不同内馅，比预包装大盒更适合第一次比较。", "Paradeplatz；星期日改 Zürich HB", "每人 2–3 粒，或买一小盒分享。", "留意奶、坚果、大豆与酒心口味。", "https://www.spruengli.ch/en/"),
        food("laflor Bean-to-Bar", "新派巧克力", "dark chocolate bar", "chocolate bar cocoa", "Zürich 制作的 bean-to-bar chocolate，强调 cacao 产地与小批次制作；酸香、果味和烘焙感会比一般 milk chocolate 更清楚。", "喜欢 dark chocolate 可从 single-origin 小片开始，不要只按 cacao 百分比判断。", "Hohlstrasse manufactory／specialty store", "买一片多人比较即可。", "配方依口味而异；留意奶、坚果与大豆。", "https://laflor.ch/en/"),
        food("Taucherli Drinking Chocolate", "饮用巧克力", "Taucherli drinking chocolate", "hot chocolate on a stick", "把 ganache praline on a stick 放进热 milk 搅拌，就会成为浓厚 hot chocolate；品牌也制作 chocolate bars 与 fondue。", "想现场喝就选一杯；想作手信则买未冲泡的产品，更容易保存。", "specialty shop／非必经补给", "一杯或一支就是一次体验。", "通常含奶；不同 chocolate 另看坚果与大豆标示。", "https://taucherli.com/"),
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
      ["当地", "當地"], ["从", "從"], ["与", "與"], ["图片", "圖片"], ["暂", "暫"],
      ["怎么", "怎麼"], ["路线", "路線"], ["哪里", "哪裡"], ["选择", "選擇"], ["资料", "資料"],
      ["核对", "核對"], ["传统", "傳統"], ["经典", "經典"], ["区域", "區域"], ["饮", "飲"],
      ["时", "時"], ["为", "為"], ["会", "會"], ["买", "買"], ["还", "還"], ["发", "發"],
      ["个", "個"], ["轻", "輕"], ["过", "過"], ["这", "這"], ["种", "種"], ["线", "線"],
      ["现", "現"], ["见", "見"], ["应", "應"], ["内", "內"], ["较", "較"], ["东", "東"],
      ["将", "將"], ["夹", "夾"], ["体", "體"], ["别", "別"], ["说", "說"], ["识", "識"],
      ["软", "軟"], ["开", "開"], ["进", "進"], ["场", "場"], ["风", "風"], ["补", "補"],
      ["对", "對"], ["点", "點"], ["学", "學"], ["类", "類"], ["剂", "劑"], ["后", "後"],
      ["顾", "顧"], ["达", "達"], ["冲", "沖"], ["浓", "濃"], ["块", "塊"], ["储", "儲"],
      ["盐", "鹽"], ["净", "淨"], ["树", "樹"], ["显", "顯"], ["写", "寫"], ["属", "屬"],
      ["艺", "藝"], ["馆", "館"], ["区", "區"], ["压", "壓"], ["标", "標"], ["层", "層"],
      ["选", "選"], ["厅", "廳"], ["赶", "趕"], ["稳", "穩"], ["优", "優"], ["换", "換"],
      ["饼干", "餅乾"], ["历史", "歷史"], ["记录", "記錄"], ["世纪", "世紀"], ["细", "細"],
      ["携带", "攜帶"], ["周边", "周邊"], ["肉制品", "肉製品"], ["规定", "規定"], ["检查", "檢查"],
      ["包装", "包裝"], ["趁热", "趁熱"], ["面包", "麵包"], ["面一起", "麵一起"], ["当", "當"],
      ["几", "幾"], ["馅", "餡"], ["预", "預"], ["适", "適"], ["强", "強"], ["调", "調"],
      ["则", "則"], ["产", "產"], ["制作", "製作"], ["产品", "產品"], ["给", "給"],
      ["图", "圖"], ["并", "並"], ["锅", "鍋"], ["温", "溫"], ["问", "問"], ["热", "熱"],
      ["带", "帶"], ["搅", "攪"]
    ];
    return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), String(value ?? ""));
  }

  function renderGuide(root, guide) {
    const local = (value) => safe(guide.traditional ? traditionalize(value) : value);
    const specialtyCards = `<div class="food-specialty-grid">${guide.specialties.map((item) => `<article class="food-specialty-card">
        <div class="food-photo" data-image-query="${safe(item.imageQuery)}" data-image-fallback="${safe(item.imageFallback)}"><span>${local(item.category)}</span><em>${guide.traditional ? "圖片暫不可用" : "图片暂不可用"}</em></div>
        <div class="food-specialty-body"><span class="food-category">${local(item.category)}</span><h3>${local(item.name)}</h3><p class="food-summary">${local(item.summary)}</p>
          <dl><div><dt>${guide.traditional ? "怎麼吃" : "怎么吃"}</dt><dd>${local(item.taste)}</dd></div><div><dt>${guide.traditional ? "放在路線哪裡" : "放在路线哪里"}</dt><dd>${local(item.timing)}</dd></div>
            <div><dt>${guide.traditional ? "份量判斷" : "份量判断"}</dt><dd>${local(item.portion)}</dd></div><div><dt>${guide.traditional ? "飲食注意" : "饮食注意"}</dt><dd>${local(item.diet)}</dd></div></dl>
          ${externalLink(item.officialUrl, guide.traditional ? "了解這種當地味道" : "了解这种当地味道")}</div></article>`).join("")}</div>`;
    const routePlan = `<div class="food-route-plan"><div class="food-route-heading"><p class="eyebrow">EAT ALONG THE WALK</p><h3>${guide.traditional ? "這次行程怎麼吃" : "沿 City Walk 怎么安排"}</h3><p>${guide.traditional ? "先照時間段選擇；兩種小食加一頓主餐已經足夠。" : "不用一次吃齐；选择两种小食加一顿主餐即可。"}</p></div>
        <ol>${guide.routePlan.map((item) => `<li><strong>${local(item.checkpoint)}</strong><span>${local(item.suggestion)}</span></li>`).join("")}</ol></div>`;
    root.classList.add("local-food-guide");
    root.innerHTML = `<p class="eyebrow section-eyebrow">${local(guide.eyebrow)}</p>
      <h2>${local(guide.title)}</h2><p class="section-intro">${local(guide.intro)}</p>
      ${guide.compactLibrary ? routePlan : specialtyCards}
      ${guide.compactLibrary ? `<details class="food-library"><summary><span><small>FOOD REFERENCE</small><strong>完整當地食物資料庫</strong></span><em>${guide.specialties.length} 種食物</em></summary><div class="food-library-body">${specialtyCards}</div></details>` : routePlan}
      <aside class="market-note"><strong>${local(guide.marketLabel)}</strong><p>${local(guide.marketNote)}</p></aside>
      <div class="food-guide-sources"><strong>${guide.traditional ? "官方美食資料｜核對" : "官方美食资料｜核对"} ${VERIFIED_ON}</strong>${guide.sources.map((item) => externalLink(item.url, item.label)).join("")}</div>`;
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
      root.innerHTML = "<p class=\"small\">美食资料暂不可用。</p>";
      return;
    }
    renderGuide(root, guide);
    loadImages(root, guide.title.split(" ")[0]);
  });
})();

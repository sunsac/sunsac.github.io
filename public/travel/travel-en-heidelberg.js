(() => {
  "use strict";

  window.travelEnglish = window.travelEnglish || { exact: {}, phrases: {} };

  Object.assign(window.travelEnglish.exact, {
    "Heidelberg 基地指南｜Switzerland–Germany 旅程": "Heidelberg Base Guide | Switzerland–Germany Trip",
    "先完成河谷城市主線；其餘五天按天氣、體力與交通挑選一個獨立模組。": "Complete the river-valley city route first, then choose one independent module on each of the remaining five days according to weather, energy, and transport.",
    "固定住宿基地": "Fixed overnight base",
    "公共交通": "Public transport",
    "五個彈性日": "Five flexible days",
    "先選今天的主題，再打開完整路線": "Choose today’s theme first, then open the full route",
    "抵達日只走 Old Town 短版；8/24–28 每天只選一個主模組，不為了「完成清單」把兩側山坡或兩座城市疊在一起。": "On arrival day, use only the short Old Town route. From August 24–28, choose one main module per day; do not combine both hillsides or two cities merely to complete a checklist.",
    "8/23 · 今天": "Aug 23 · Today",
    "抵達、放行李、Old Town 短版": "Arrive, drop off luggage, then take the short Old Town walk",
    "Freiburg → Heidelberg → Bismarckplatz → University → Marktplatz → Old Bridge；不安排 Castle。": "Freiburg → Heidelberg → Bismarckplatz → University → Marktplatz → Old Bridge; skip the Castle today.",
    "查看抵達日日程 →": "View the arrival-day schedule →",
    "第一個穩定晴天": "First reliably clear day",
    "Castle＋Old Bridge": "Castle + Old Bridge",
    "搭下段 Bergbahn 上城堡，保留庭院、大酒桶、藥學博物館與河谷全景；Philosophenweg 不同日再選。": "Take the lower funicular to the Castle for the courtyard, Great Barrel, Pharmacy Museum, and valley views. Save the Philosopher’s Walk for another day.",
    "打開城堡模組 →": "Open the Castle module →",
    "城市文化日": "City culture day",
    "完整 City Walk · 約 5.5–6.5 公里": "Full city walk · about 5.5–6.5 km",
    "Old Town、大學、教堂、Old Bridge、Neckar 北岸與 Neckarwiese 形成不重複閉環。": "Old Town, the university, churches, Old Bridge, the north bank, and Neckarwiese form a loop without backtracking.",
    "打開互動路線 →": "Open the interactive route →",
    "雨天／恢復日": "Rainy / recovery day",
    "University combo＋Museum": "University combo + museum",
    "Student Prison、University Museum、Kurpfälzisches Museum 與 café；依星期與預約時段刪減。": "Student Prison, University Museum, Kurpfälzisches Museum, and a café; trim the plan according to the day of the week and reserved time slots.",
    "查看停止條件 →": "Review the stop rules →",
    "快速前往": "Quick links",
    "交通票券": "Transport & tickets",
    "Heidelberg 模組": "Heidelberg modules",
    "周邊地圖": "Area map",
    "周邊模組": "Day-trip modules",
    "背景": "Background",
    "Freiburg → Heidelberg｜把搬運日和觀光日分開": "Freiburg → Heidelberg | Keep the transfer day separate from sightseeing",
    "典型鐵路約 1 小時 35 分至 2 小時｜先放兩件大型行李，再進 Old Town": "Typical rail journey: about 1 hr 35 min–2 hr | Drop off both large bags before entering the Old Town",
    "上午–13:00": "Morning–13:00",
    "Freiburg (Breisgau) Hbf → Heidelberg Hbf；在 DB Navigator 選直達 ICE 或最少轉乘方案，不安排中途下車。": "Freiburg (Breisgau) Hbf → Heidelberg Hbf. In DB Navigator, choose a direct ICE or the option with the fewest changes; do not schedule a stop en route.",
    "到住宿放行李、午餐與休息。Hbf → Bismarckplatz 搭 tram／bus 約 10 分鐘，不拖行李走 Hauptstraße 石板路。": "Drop off luggage at the accommodation, have lunch, and rest. Take a tram or bus from Hbf to Bismarckplatz in about 10 minutes; do not drag luggage over the Hauptstraße cobbles.",
    "在下方地圖套用「抵達日短版」：Bismarckplatz → Hauptstraße → Universitätsplatz → Heiliggeistkirche → Marktplatz → Old Bridge。": "Apply the “Arrival-day short route” on the map below: Bismarckplatz → Hauptstraße → Universitätsplatz → Church of the Holy Spirit → Marktplatz → Old Bridge.",
    "18:00 之後": "After 18:00",
    "在 Old Town 吃一頓區域菜，或由 Neckarmünzplatz 搭車回住宿；不再加入 Castle、Philosophenweg 或 Königstuhl。": "Have a regional dinner in the Old Town or return to your accommodation from Neckarmünzplatz. Do not add the Castle, Philosopher’s Walk, or Königstuhl.",
    "延誤底線：": "Delay cut-off:",
    "16:30 後才開始時，只保留 Marktplatz、Heiliggeistkirche 外觀、Studentenkuss 與 Old Bridge；任何室內參觀改到 8/24–28。": "If you start after 16:30, keep only Marktplatz, the exterior of the Church of the Holy Spirit, a Studentenkuss, and Old Bridge. Move all indoor visits to August 24–28.",
    "正在比較 Freiburg 與 Heidelberg 天氣…": "Comparing Freiburg and Heidelberg weather…",
    "先決定「只步行、城市交通，還是景點套票」": "Decide first: walking only, city transport, or a sightseeing pass",
    "只走 Old Town": "Old Town only",
    "單程票／步行": "Single ticket / walking",
    "預設選擇": "Default choice",
    "Hbf → Bismarckplatz 搭一次 tram／bus，之後主要步行；不要為了只有一兩程市內車先買 HeidelbergCARD。": "Take one tram or bus from Hbf to Bismarckplatz, then walk. Do not buy a HeidelbergCARD for only one or two city rides.",
    "同日 Castle＋University": "Castle + University on the same day",
    "比較 HeidelbergCARD": "Compare the HeidelbergCARD",
    "1／2／4 日 €25／36／40": "1 / 2 / 4 days: €25 / €36 / €40",
    "含 VRN、Castle＋下段 Bergbahn、University combo 與多館入場；只有真的會在有效期內使用這些項目才值得。": "Includes VRN transport, the Castle and lower funicular, the University combo, and several museums. It pays off only if you will actually use these benefits during the validity period.",
    "周邊城市日": "Regional day trip",
    "DB／VRN 另行比較": "Compare DB / VRN separately",
    "不要假設套票全包": "Do not assume one pass covers everything",
    "Speyer、Mannheim、Schwetzingen 先比較區域票；Strasbourg、Colmar、Cologne 各自按跨境或長途車次購票。": "For Speyer, Mannheim, and Schwetzingen, compare regional tickets first. Buy Strasbourg, Colmar, and Cologne tickets according to their specific cross-border or long-distance services.",
    "Hbf → Old Town": "Hbf → Old Town",
    "在 DB Navigator／VRN 搜尋 Heidelberg Hbf → Bismarckplatz。抵達後先放行李；Bismarckplatz 是步行主線起點，也是疲累時最可靠的返回節點。": "Search Heidelberg Hbf → Bismarckplatz in DB Navigator or VRN. Drop off luggage first. Bismarckplatz is both the start of the main walk and the most reliable return point when tired.",
    "Castle 與 Bergbahn": "Castle and funicular",
    "由 Kornmarkt 搭下段 Bergbahn 到 Schloss／Molkenkur。2026 Castle ticket 成人 €11，含往返下段 Bergbahn、courtyard、Great Barrel 與 German Pharmacy Museum。": "Take the lower funicular from Kornmarkt to Schloss/Molkenkur. In 2026, the adult Castle ticket costs €11 and includes a return trip on the lower funicular, the courtyard, Great Barrel, and German Pharmacy Museum.",
    "2026 施工提醒": "2026 construction notice",
    "Graimbergweg 預計封閉至 2026 年底，bus 30 部分班次可能不經 Peterskirche、Sternwarte、Molkenkur 或 Schloss。Castle 日以 Bergbahn 為主，當天再查 rnv。": "Graimbergweg is expected to remain closed through the end of 2026. Some bus 30 services may skip Peterskirche, Sternwarte, Molkenkur, or Schloss. Use the funicular on Castle day and recheck rnv that morning.",
    "Heidelberg 河谷、Old Town 與 Neckar City Walk": "Heidelberg River Valley, Old Town, and Neckar City Walk",
    "完整主線由 Bismarckplatz 進入大學與 Old Town，經 Kornmarkt、Old Bridge 跨到北岸，再沿 Neckarwiese 和 Theodor-Heuss-Brücke 回到起點。Castle、Student Prison 與 Philosophenweg 保留為可加入的 Optional。": "The full route enters the university quarter and Old Town from Bismarckplatz, crosses to the north bank via Kornmarkt and Old Bridge, then returns along Neckarwiese and Theodor-Heuss Bridge. The Castle, Student Prison, and Philosopher’s Walk remain optional additions.",
    "標準距離": "Standard distance",
    "約 5.5–6.5 公里": "About 5.5–6.5 km",
    "淨步行": "Walking only",
    "約 1.5–2 小時": "About 1.5–2 hr",
    "含參觀": "Including visits",
    "約 4.5–5.5 小時": "About 4.5–5.5 hr",
    "主要坡度": "Main-route gradient",
    "主線低；延伸高": "Low on the main route; high on extensions",
    "藍線按 OSM walking route 沿道路與步道計算，而非景點間直線。地圖或路線服務離線時，所有 checkpoint 文字仍可使用；不會用直線冒充步行導航。完成地圖對比後，可在下方用快捷組合替換路線，再自由增減和排序。": "The blue line follows streets and paths using OSM walking routes rather than straight lines between sights. If map tiles or routing are offline, every checkpoint remains available in text and no straight line is shown as walking guidance. After comparing the map, use the presets below, then add, remove, or reorder stops freely.",
    "主線 checkpoint": "Main-route checkpoint",
    "Optional 景點": "Optional sights",
    "Optional 美食": "Optional food",
    "2026 年 8 月需要先看時間的三件事": "Three time-sensitive details for August 2026",
    "每日 09:00–18:00，最後入場 17:30；German Pharmacy Museum 10:00–18:00。室內房間只可隨導覽進入；英文團夏季通常每小時一場，另加 €6。": "Open daily 09:00–18:00, last admission 17:30; the German Pharmacy Museum is open 10:00–18:00. Interior rooms are accessible only on a guided tour; English tours usually run hourly in summer and cost an additional €6.",
    "Castle 官方資料 →": "Official Castle information →",
    "University Museum＋Student Prison": "University Museum + Student Prison",
    "6–9 月 Tue–Sun 10:00–18:00，13:45–14:15 暫停入場，最後入場 17:15；combo ticket 成人 €7.50。Student Prison 容量有限，建議先預約時段。": "From June to September, open Tue–Sun 10:00–18:00, with an admission pause from 13:45–14:15 and last admission at 17:15. The adult combo ticket is €7.50. Student Prison capacity is limited, so reserve a time slot.",
    "University 官方資料 →": "Official University information →",
    "2026 票價為 1／2／4 日 €25／36／40，必須個人化並連續使用；Castle 紙票仍需在指定地點領取。購買後不可改名、改期或取消。": "In 2026, 1-, 2-, and 4-day cards cost €25, €36, and €40. Cards must be personalized and used on consecutive days; the paper Castle ticket must still be collected at a designated point. Purchases cannot be renamed, rescheduled, or cancelled.",
    "HeidelbergCARD 官方資料 →": "Official HeidelbergCARD information →",
    "Heidelberg 本地完整日": "Full days in Heidelberg",
    "三者彼此獨立；Old Town 可在抵達日做短版，Castle 與高地只在天氣和體力合適時加入。": "These three modules are independent. Use the short Old Town route on arrival day; add the Castle or high ground only when weather and energy allow.",
    "城市文化": "City culture",
    "Old Town＋University": "Old Town + University",
    "完整 City Walk、大學歷史、教堂、Student Prison Optional 與 Neckar 河岸。": "A full city walk with university history, churches, an optional Student Prison visit, and the Neckar riverfront.",
    "城堡／觀景": "Castle / viewpoints",
    "城堡、Bergbahn、大酒桶、藥學博物館與 Old Bridge；Philosophenweg 只作天氣穩定時的延伸。": "Castle, funicular, Great Barrel, Pharmacy Museum, and Old Bridge. Add the Philosopher’s Walk only in stable weather.",
    "自然／高地": "Nature / high ground",
    "Neckar＋Heiligenberg／Königstuhl": "Neckar + Heiligenberg / Königstuhl",
    "兩個高地只選一側；雷雨、濕滑或能見度差時改 Neckarwiese 與室內文化。": "Choose only one side of the high ground. In thunderstorms, slippery conditions, or poor visibility, switch to Neckarwiese and indoor culture.",
    "從 Heidelberg 出發的位置關係": "Where the day trips sit relative to Heidelberg",
    "地圖只解釋方向與距離，不代表鐵路路線。8/24–28 每天從下方挑一個主模組；跨境與 Cologne 不再疊加第二座城市。": "The map shows direction and distance, not rail routes. From August 24–28, choose one main module per day; do not add a second city to cross-border or Cologne days.",
    "Heidelberg base": "Heidelberg base",
    "城市文化": "City culture",
    "花園／Wellness": "Gardens / wellness",
    "跨境": "Cross-border",
    "長途": "Long-distance",
    "周邊城市與恢復日": "Regional cities and recovery days",
    "優先 Speyer、Schwetzingen 或 Mannheim；Strasbourg、Colmar、Cologne 與 Baden-Baden 只在交通、天氣和興趣都吻合時選一個。": "Prioritize Speyer, Schwetzingen, or Mannheim. Choose Strasbourg, Colmar, Cologne, or Baden-Baden only when transport, weather, and interest all align.",
    "當天決定的底線": "Non-negotiable same-day rules",
    "山坡停止條件": "Hillside stop conditions",
    "雷雨、強風、高溫、石階濕滑或能見度差時，不走 Philosophenweg／Heiligenberg；Castle 只用 Bergbahn 上下，或整體改室內日。": "Skip the Philosopher’s Walk and Heiligenberg in thunderstorms, strong wind, heat, slippery stone steps, or poor visibility. Use the funicular both ways for the Castle, or switch to an indoor day.",
    "星期與預約": "Opening days and reservations",
    "University Museum／Student Prison 的夏季常規是 Tue–Sun；Student Prison 建議預約。不要因為 HeidelbergCARD 已購買就忽略休館或容量限制。": "The University Museum and Student Prison normally open Tue–Sun in summer; reserve the Student Prison. A purchased HeidelbergCARD does not override closures or capacity limits.",
    "8/29 前往 Frankfurt": "Aug 29 transfer to Frankfurt",
    "上午只做住宿附近短線，保留取行李與 DB 異常緩衝；不安排 Cologne、Strasbourg、Colmar 或任何需要預約的長活動。": "Keep the morning close to your accommodation and protect time to collect luggage plus a DB disruption buffer. Do not schedule Cologne, Strasbourg, Colmar, or any long reserved activity.",
    "河谷、城堡與大學如何組成 Heidelberg": "How the river valley, Castle, and university shape Heidelberg",
    "Heidelberg 的核心不是一張 Castle 明信片，而是一條被 Neckar 與兩側山坡限制的狹長城市：大學、Hauptstraße 和公共廣場沿南岸展開；Castle 位於 Königstuhl 北坡，Philosophenweg／Heiligenberg 位於河對岸。City Walk 先走平坦河谷，再決定是否把體力交給其中一側高地。": "Heidelberg is more than a Castle postcard. It is a narrow city constrained by the Neckar and the slopes on both sides: the university, Hauptstraße, and public squares extend along the south bank; the Castle sits on Königstuhl’s northern slope, while the Philosopher’s Walk and Heiligenberg rise opposite. Walk the flat valley first, then decide whether to spend your energy on one hillside.",
    "現代交通入口；大型行李與 Old Town 步行在此分流。": "The modern transport gateway, where luggage handling separates from the Old Town walk.",
    "University／Old Town": "University / Old Town",
    "1386 年創立的大學、教堂、市場與學生生活共享同一條河谷主軸。": "The university founded in 1386, churches, markets, and student life share one river-valley axis.",
    "Castle Ridge": "Castle ridge",
    "選帝侯權力、戰爭廢墟與 Romanticism 觀看方式疊在南側山坡。": "Electoral power, wartime ruins, and the Romantic gaze overlap on the southern slope.",
    "Neckar／North Bank": "Neckar / north bank",
    "Old Bridge 把歷史城市與日常河岸連在一起，也是判讀兩側高地的最佳位置。": "Old Bridge links the historic city with the everyday riverfront and offers the clearest reading of the hills on both sides.",
    "官方資料與核對日期": "Official sources and verification date",
    "行前再確認": "Recheck before departure",
    "城市施工資訊": "City construction updates",
    "前一站：": "Previous stop:",
    "住宿基地：Heidelberg｜下一站：": "Overnight base: Heidelberg | Next stop:"
    ,"約 5.5–6.5 公里、4.5–5.5 小時；由 Bismarckplatz 穿過大學與 Old Town，經 Old Bridge 到 Neckar 北岸，再由 Theodor-Heuss-Brücke 回到起點。": "About 5.5–6.5 km and 4.5–5.5 hours. Walk from Bismarckplatz through the university quarter and Old Town, cross Old Bridge to the north bank, and return via Theodor-Heuss Bridge."
    ,"Bismarckplatz → Hauptstraße → Universitätsplatz → Heiliggeistkirche → Marktplatz → Old Bridge；約 2–2.5 小時，不加 Castle 山坡。": "Bismarckplatz → Hauptstraße → Universitätsplatz → Church of the Holy Spirit → Marktplatz → Old Bridge; about 2–2.5 hours, without the Castle hillside."
    ,"Old Town → Kornmarkt → Heidelberg Castle → Old Bridge → Neckarwiese；使用 Bergbahn 減少上坡，不再加入 Philosophenweg。": "Old Town → Kornmarkt → Heidelberg Castle → Old Bridge → Neckarwiese. Use the funicular to reduce climbing and do not add the Philosopher’s Walk."
    ,"Kurpfälzisches Museum → Universitätsplatz → Student Prison／University Museum → Jesuitenkirche → Heiliggeistkirche → café；按星期刪減。": "Kurpfälzisches Museum → Universitätsplatz → Student Prison / University Museum → Jesuit Church → Church of the Holy Spirit → café; trim according to opening days."
    ,"Heidelberg 公共交通與城市生活的西側節點；先由 Hbf 搭 tram／bus 到這裡，再開始真正的 City Walk。": "The western hub for Heidelberg public transport and city life. Take a tram or bus here from Hbf before beginning the actual city walk."
    ,"交通／起點：先放大型行李；同時記下由 Bismarckplatz 或 Neckarmünzplatz 返回住宿的車線。": "Transport / start: drop off large luggage first and note the routes back to your accommodation from Bismarckplatz or Neckarmünzplatz."
    ,"沿 Old Town 的東西主軸前進，從現代商業段逐步轉入歷史建築、大學生活和較細密的街巷。": "Follow the Old Town’s east–west axis as modern retail gradually gives way to historic buildings, university life, and finer-grained lanes."
    ,"公共步行街、免費；不必逐店停留。週日零售較少，但街道、廣場與餐飲仍可使用。": "Public pedestrian street, free. There is no need to stop at every shop. Retail is limited on Sundays, but the streets, squares, and restaurants remain usable."
    ,"德國最古老大學的歷史核心之一；Old University、廣場與周邊學生空間把 1386 年傳統帶入今天的城市生活。": "One of the historic cores of Germany’s oldest university. The Old University, square, and surrounding student spaces carry the 1386 tradition into contemporary city life."
    ,"公共廣場免費；University Museum／Student Prison 是獨立 Optional，先看時段與預約。": "The public square is free. Treat the University Museum and Student Prison as separate options and check hours and reservations first."
    ,"巴洛克 Jesuit Church 與較樸素的學院街區形成對比，也補足 Heidelberg 在 Reformation 後的天主教歷史。": "The Baroque Jesuit Church contrasts with the restrained university quarter and adds Heidelberg’s post-Reformation Catholic history to the route."
    ,"教堂開放受禮拜、活動和現場公告影響；只在大門開放且不妨礙宗教活動時入內。": "Church access depends on services, events, and posted notices. Enter only when the doors are open and worship is not being disturbed."
    ,"Marktplatz 的城市核心教堂；Bibliotheca Palatina、選帝侯歷史，以及曾被牆分隔的 Catholic／Protestant 空間都集中在這裡。": "The central church on Marktplatz, bringing together the Bibliotheca Palatina, Electoral Palatinate history, and a space once divided between Catholic and Protestant worship."
    ,"宗教活動優先；開放可能調整。無法入內時仍可由外部閱讀教堂、商業攤位與廣場關係。": "Worship takes priority and access may change. If the interior is closed, use the exterior to read the relationship between church, market stalls, and square."
    ,"Rathaus、Heiliggeistkirche、噴泉與 café 共同構成 Old Town 的市民中心，從廣場亦可抬頭定位 Castle 山坡。": "The town hall, Church of the Holy Spirit, fountain, and cafés form the Old Town’s civic centre; the square also gives a clear visual fix on the Castle hillside."
    ,"公共廣場免費；不要把這裡和 Kornmarkt 混為同一站，兩者提供不同的 Castle 視角。": "The public square is free. Keep this separate from Kornmarkt: the two stops offer different views toward the Castle."
    ,"由 Old Town 平地轉入 Castle Ridge 的門戶；Madonna、城堡視線與 Kornmarkt Bergbahn station 共同構成垂直交通節點。": "The gateway from the flat Old Town to the Castle ridge, where the Madonna, Castle sightline, and Kornmarkt funicular station form a vertical transport node."
    ,"不登 Castle 時只停 15–25 分鐘；登城堡則從這裡切換成獨立半日並檢查 Bergbahn。": "Stop for only 15–25 minutes if you are not visiting the Castle. If you are, switch here to the separate half-day module and check the funicular."
    ,"1786–88 年建成的紅砂岩 Carl-Theodor-Brücke，把 Old Town、Castle、Neckar 水位與北岸山坡放進同一視野。": "The red-sandstone Carl Theodor Bridge, built in 1786–88, brings the Old Town, Castle, Neckar, and north-bank slopes into one view."
    ,"公共橋樑、免費；拍照靠邊並留意單車／人流。過橋後再決定走平坦河岸或陡峭 Schlangenweg。": "Public bridge, free. Keep to the side for photos and watch for bicycles and pedestrians. After crossing, choose between the flat riverbank and steep Schlangenweg."
    ,"北岸草地是 Heidelberg 日常休閒空間；由這裡回望 Old Town 和 Castle，可把明信片景觀轉成完整的河谷剖面。": "This north-bank lawn is Heidelberg’s everyday recreation space. Looking back at the Old Town and Castle turns the postcard view into a complete cross-section of the valley."
    ,"公共河岸、免費；夏季補水、防曬。高水位或雷雨時不靠近岸緣，改走城市側街道。": "Public riverbank, free. Carry water and sun protection in summer. Stay away from the water’s edge during high water or thunderstorms and use city-side streets instead."
    ,"由北岸跨回城市西端，沿途比較現代橋樑、河流交通和 Old Bridge 的歷史景觀。": "Cross from the north bank back to the city’s western end while comparing a modern bridge, river traffic, and the historic Old Bridge view."
    ,"公共橋樑、免費；此處是完整閉環最後一段，體力不足可提前在北岸搭 bus。": "Public bridge, free. This is the final leg of the full loop; if tired, take a bus from the north bank before reaching it."
    ,"回到可靠的 tram／bus 樞紐，完成不重複折返的 Old Town—Neckar 閉環。": "Return to the reliable tram and bus hub, completing the Old Town–Neckar loop without retracing your steps."
    ,"至少保留 15 分鐘查車與回住宿；已經完成主線時，不再臨時加 Castle 或高地。": "Keep at least 15 minutes to check transport and return to your accommodation. Once the main route is complete, do not add the Castle or high ground at the last minute."
    ,"城堡庭院、Altan、大酒桶與 German Pharmacy Museum。2026 每日 09:00–18:00、最後入場 17:30；成人 €11 含 Kornmarkt–Schloss–Molkenkur 下段 Bergbahn 往返。至少留 2.5–3 小時，不放進抵達日晚段。": "Castle courtyard, Altan terrace, Great Barrel, and German Pharmacy Museum. In 2026, open daily 09:00–18:00 with last admission at 17:30; the €11 adult ticket includes a return ride on the lower Kornmarkt–Schloss–Molkenkur funicular. Allow at least 2.5–3 hours and never place it late on arrival day."
    ,"由 Schlangenweg 登上北岸山坡的經典觀景段；可回望 Old Town、Castle 與 Neckar。上坡、石階和曝曬明顯，與 Castle 通常分日，雷雨或濕滑時取消。": "The classic north-bank viewpoint reached via Schlangenweg, overlooking the Old Town, Castle, and Neckar. The climb, steps, and sun exposure are substantial; normally schedule it on a different day from the Castle and cancel in thunderstorms or slippery conditions."
    ,"藝術、考古與 Heidelberg／Kurpfalz 城市史的室內選擇，位於 Hauptstraße 主線旁；作為雨天核心前，先查當日展覽、休館與最後入場。": "An indoor option for art, archaeology, and Heidelberg/Kurpfalz city history, directly beside the Hauptstraße route. Before making it the centre of a rainy-day plan, check current exhibitions, closure days, and last admission."
    ,"6–9 月 Tue–Sun 10:00–18:00，13:45–14:15 暫停入場、最後入場 17:15；combo 成人 €7.50。Student Prison 容量小、樓梯多，建議預約並準備 locker 的 €1 coin。": "From June to September, open Tue–Sun 10:00–18:00, with an admission pause from 13:45–14:15 and last admission at 17:15. The adult combo costs €7.50. Student Prison capacity is limited and there are many stairs; reserve ahead and carry a €1 coin for the locker."
    ,"Heidelberg 567 m local mountain，可由歷史上段 Bergbahn 抵達。晴天看 Rhine plain；與 Heiligenberg 二選一，雷雨、強風或低能見度時取消。": "Heidelberg’s 567 m local mountain, reached by the historic upper funicular. On clear days it overlooks the Rhine plain. Choose this or Heiligenberg, not both, and cancel in thunderstorms, strong wind, or poor visibility."
    ,"由 Neckarstaden 一帶出發的季節性遊船；只在班次與 City Walk 節奏吻合時加入。水位、天氣與 operator 可能改班，不能當作固定回程交通。": "A seasonal cruise departing near Neckarstaden. Add it only when the timetable fits the city walk. Water level, weather, and the operator may alter sailings, so never rely on it as fixed return transport."
    ,"Haspelgasse 20｜Heidelberg 最老的 café 之一，也是 Studentenkuss 的代表停靠點。現行官網列每日 09:00 起、廚房至 17:00；買一顆 Studentenkuss 或短暫 coffee break 即可。": "Haspelgasse 20 | One of Heidelberg’s oldest cafés and the signature Studentenkuss stop. The current official listing opens daily from 09:00, with the kitchen until 17:00. One Studentenkuss or a short coffee break is enough."
    ,"Steingasse 7、Old Bridge 路段｜Maultaschen、Saumagen、Spätzle 與區域菜。現行廚房 Sun–Thu 至 21:30、Fri–Sat 至 22:00；主餐建議訂位。": "Steingasse 7, on the Old Bridge leg | Maultaschen, Saumagen, Spätzle, and regional dishes. The kitchen currently runs until 21:30 Sun–Thu and 22:00 Fri–Sat; reserve for a main meal."
    ,"Bauamtsgasse 7、University／Old Town 路段｜Saumagen、Leberknödel、Schnitzel、Käsespätzle。2026 Mon–Fri 17:00–22:00、Sat–Sun 12:00–22:00，廚房至 21:00。": "Bauamtsgasse 7, on the University/Old Town leg | Saumagen, Leberknödel, schnitzel, and Käsespätzle. In 2026, open Mon–Fri 17:00–22:00 and Sat–Sun 12:00–22:00, with the kitchen until 21:00."
    ,"Steingasse 9、Heiliggeistkirche → Old Bridge｜自釀啤酒與德國／區域菜。Sun–Thu 11:30–24:00、Fri–Sat 至 01:00；室內可訂位，Biergarten 以 walk-in 為主。": "Steingasse 9, between the Church of the Holy Spirit and Old Bridge | House-brewed beer and German/regional food. Open Sun–Thu 11:30–24:00 and Fri–Sat until 01:00; indoor tables can be reserved, while the beer garden is mainly walk-in."
    ,"市內": "Within Heidelberg"
    ,"Rhine 城市": "Rhine city"
    ,"Romanesque Cathedral、Maximilianstraße、歷史博物館與 Rhine 河岸，交通壓力最低。": "Romanesque Cathedral, Maximilianstraße, the historical museum, and the Rhine riverfront, with the least transport pressure."
    ,"花園／恢復": "Gardens / recovery"
    ,"Palace Gardens、Mosque 與 Baroque 軸線；適合 Castle 或跨境日後降低強度。": "Palace Gardens, the Mosque, and Baroque axes; an easy recovery choice after a Castle or cross-border day."
    ,"城市／雨天": "City / rainy day"
    ,"Palace、Quadrate、Kunsthalle 與 Water Tower；短交通、室內選擇較多。": "Palace, the Quadrate grid, Kunsthalle, and Water Tower; a short journey with plenty of indoor options."
    ,"Cathedral、Petite France 與 Barrage Vauban；先鎖定跨境去回程，不加 Colmar。": "Cathedral, Petite France, and Barrage Vauban. Secure the cross-border outbound and return journeys first; do not add Colmar."
    ,"Alsace 小城": "Alsace town"
    ,"Old Town、Petite Venise 與 Unterlinden Museum；作為 Strasbourg 的替代而非同日組合。": "Old Town, Petite Venise, and the Unterlinden Museum; use this as an alternative to Strasbourg, not a same-day combination."
    ,"長途城市": "Long-distance city"
    ,"Cathedral、Old Town 與 Rhine 河岸；只在票價和直達車次合理時採用。": "Cathedral, Old Town, and the Rhine riverfront; choose this only when fares and direct services are reasonable."
    ,"Kurhaus、Lichtentaler Allee 與 Spa；雨天或旅程後段的恢復型選擇。": "Kurhaus, Lichtentaler Allee, and a spa; a recovery option for rainy weather or the later part of the trip."
    ,"完整 City Walk（推薦）": "Full City Walk (recommended)"
    ,"Castle 城堡版": "Castle route"
    ,"Old Bridge 一帶選 Hackteufel 或 Vetter’s；兩者都在路線後段，同一餐只選一家。": "Near Old Bridge, choose either Hackteufel or Vetter’s. Both are late in the route, so use only one for the same meal."
    ,"咖啡／Studentenkuss": "Coffee / Studentenkuss"
    ,"Café Knösel 位於 Heiliggeistkirche → Old Bridge 之間，適合 20–40 分鐘甜點停留。": "Café Knösel sits between the Church of the Holy Spirit and Old Bridge and works well for a 20–40 minute dessert stop."
    ,"晚餐／區域菜": "Dinner / regional food"
    ,"University 一帶選 Schnitzelbank；Old Bridge 一帶選 Hackteufel 或 Vetter’s。山坡行程結束後再吃重菜。": "Choose Schnitzelbank near the University, or Hackteufel or Vetter’s near Old Bridge. Save heavier dishes until after any hillside walking."
    ,"廣場／城堡交通": "Square / Castle transport"
    ,"河岸／城市生活": "Riverbank / city life"
    ,"橋樑／路線返回": "Bridge / return leg"
    ,"博物館／大學文化": "Museum / university culture"
    ,"遊船／河谷觀景": "Cruise / valley views"
    ,"餐廳／Brauhaus": "Restaurant / brewery"
    ,"模組不存在｜Heidelberg": "Module not found | Heidelberg"
    ,"模組不存在": "Module not found"
    ,"這個 Heidelberg 行程模組不存在或網址已過期。": "This Heidelberg itinerary module does not exist or the URL has expired."
    ,"找不到指定模組": "The requested module could not be found"
    ,"請返回 Heidelberg 目錄，重新選擇本地或周邊行程。": "Return to the Heidelberg directory and choose a local or regional itinerary again."
    ,"返回 Heidelberg 模組目錄": "Return to the Heidelberg module directory"
    ,"交通節點": "Transport node"
    ,"正在沿道路與步道計算參考步行線；若服務離線，文字時間軸與所有標記仍可使用。": "Calculating a reference walking route along streets and paths. If the service is offline, the written timeline and all markers remain available."
    ,"步行路線服務暫時無法載入；地圖仍保留景點、交通與餐飲位置，請依時間軸及現場導航移動，不以直線代替步行路線。": "The walking-route service is temporarily unavailable. The map still shows sights, transport, and dining locations; follow the timeline and live navigation, with no straight line substituted for a walking route."
  });

  Object.assign(window.travelEnglish.phrases, {
    "查看完整模組": "View full module",
    "查看模組": "View module",
    "交通": "Transport",
    "預算": "Budget",
    "強度": "Intensity",
    "天氣": "Weather",
    "市內＋Bergbahn": "City transport + funicular",
    "市內＋山區": "City transport + mountain service",
    "低至中": "Low to medium",
    "中至高": "Medium to high",
    "中等": "Medium",
    "小時": "hr",
    "正在比較": "Comparing",
    "上午出發": "Morning departure",
    "下午抵達": "Afternoon arrival",
    "換城日": "Transfer day",
    "基地城市預報": "Base-city forecast",
    "最高／最低": "High / low",
    "體感溫度": "Feels like",
    "降雨機率": "Rain chance",
    "預計降水": "Expected precipitation",
    "當地時間": "local time"
    ,"在 DB Navigator／VRN 搜尋": "Search in DB Navigator / VRN for"
    ,"。抵達後先放行李；Bismarckplatz 是步行主線起點，也是疲累時最可靠的返回節點。": ". Drop off luggage first; Bismarckplatz is the start of the main walk and the most reliable return point when tired."
    ,"住宿基地：Heidelberg": "Overnight base: Heidelberg"
    ,"下一站：": "Next stop:"
    ,"藍線為沿道路／步道計算的參考步行線，約 ": "The blue line is a reference walking route calculated along streets and paths, about "
    ," 公里；橙色交通節點只顯示位置，不以直線連接。": " km. Orange transport nodes show locations only and are not joined by straight lines."
  });
})();

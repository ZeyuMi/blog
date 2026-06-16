const STORE_KEY = "cuttingTracker.v9";
const BACKUP_STORE_KEY = "cuttingTracker.backup.v9";
const LEGACY_STORE_KEYS = ["cuttingTracker.v8", "cuttingTracker.v7", "cuttingTracker.v6", "cuttingTracker.v5", "cuttingTracker.v4", "cuttingTracker.v3", "cuttingTracker.v2", "cuttingTracker.v1"];
const OLD_STORE_KEY = "cuttingTracker.v1";
const THEME_KEY = "cuttingTracker.theme";
const THEMES = ["forest", "night", "mist", "ocean"];
const USER_PROFILE = { sex: "male", age: 34, heightCm: 180, referenceWeightKg: 72, dailyActivityFactor: 1.34 };
const CALORIE_RULES = { normalDeficit: 500, saturdayOver: 1000 };
const MACRO_RULES = { trainingProteinPerKg: 2.2, restProteinPerKg: 2.0, normalFatPerKg: 0.7, saturdayFatPerKg: 1.0 };
const FAT_RANGE_RULES = { normalMinPerKg: 0.6, normalMaxPerKg: 0.85, saturdayMinPerKg: 0.8, saturdayMaxPerKg: 1.2 };
const FUTURE_FOOD_SYNC_DAYS = 370;

const FOOD_LIBRARY = {
  "香蕉": { unit: "g", kcal: 89, p: 1.1, c: 22.8, f: 0.3 },
  "水煮鸡蛋": { unit: "g", kcal: 143, p: 12.6, c: 1.1, f: 9.5 },
  "分离乳清蛋白粉": { unit: "g", kcal: 373, p: 88, c: 2.8, f: 0.4 },
  "熟鸡胸肉": { unit: "g", kcal: 165, p: 31, c: 0, f: 3.6 },
  "盒马即食炙烤鸡胸肉条": { unit: "g", kcal: 129, p: 24, c: 3, f: 2.5 },
  "熟米饭": { unit: "g", kcal: 116, p: 2.6, c: 26, f: 0.3 },
  "沙拉蔬菜": { unit: "g", kcal: 25, p: 1.3, c: 4.5, f: 0.2, note: "默认一份200g" },
  "混合坚果": { unit: "颗", kcal: 9, p: 0.3, c: 0.3, f: 0.8, perUnit: true, note: "按每颗约1.5g估算" },
  "卤牛肉": { unit: "g", kcal: 164, p: 26, c: 2, f: 6 },
  "即食燕麦": { unit: "g", kcal: 380, p: 13, c: 66, f: 7 },
  "有机燕麦": { unit: "g", kcal: 379, p: 13.2, c: 61.8, f: 6.9 },
  "三文鱼": { unit: "g", kcal: 208, p: 20, c: 0, f: 13 },
  "西兰花/绿叶菜": { unit: "g", kcal: 26, p: 2, c: 4, f: 0.3 },
  "玉米": { unit: "g", kcal: 112, p: 4, c: 22, f: 1.2 },
  "金枪鱼罐头(水浸)": { unit: "g", kcal: 116, p: 25, c: 0, f: 1 },
  "饭团": { unit: "g", kcal: 180, p: 4, c: 36, f: 2, note: "按便利店普通饭团估算" },
  "盒马糙米饭团": { unit: "g", kcal: 165, p: 4.5, c: 34, f: 1.5, note: "按包装饭团均值估算" },
  "便利店饭团": { unit: "g", kcal: 180, p: 4, c: 36, f: 2, note: "不同馅料差异较大" },
  "即食玉米": { unit: "g", kcal: 112, p: 4, c: 22, f: 1.2 },
  "全麦面包": { unit: "g", kcal: 250, p: 9, c: 45, f: 4 },
  "超级碗果木鸡胸": { unit: "g", kcal: 165, p: 31, c: 0, f: 3.6 },
  "超级碗谷物饭半份": { unit: "份", kcal: 140, p: 4, c: 28, f: 2, perUnit: true, note: "按半份谷物饭估算" },
  "超级碗沙拉半份": { unit: "份", kcal: 50, p: 2.6, c: 9, f: 0.4, perUnit: true, note: "按200g沙拉估算" },
  "熟菠菜": { unit: "份", kcal: 35, p: 3, c: 5, f: 0.5, perUnit: true, note: "按一小份熟菠菜估算" },
  "熟鸡蛋": { unit: "个", kcal: 72, p: 6.3, c: 0.6, f: 4.8, perUnit: true },
  "熟虾": { unit: "个", kcal: 9, p: 2, c: 0, f: 0.05, perUnit: true },
  "威士忌": { unit: "ml", kcal: 222, p: 0, c: 0, f: 0, note: "按40度、每100ml约222kcal估算" },
  "盒马烤蔬牛肉三色糙米能量碗": { unit: "g", kcal: 138, p: 7.9, c: 16.1, f: 4.3, note: "按整盒280g约386kcal估算" },
  "盒马无糖无脂酸奶": { unit: "g", kcal: 56, p: 4, c: 9.5, f: 0.2, note: "无糖但含乳糖，按常见无脂酸奶估算" },
  "麦当劳薯角": { unit: "份", kcal: 280, p: 4, c: 38, f: 13, perUnit: true, note: "按中等份估算" },
  "麦当劳鸡米花": { unit: "份", kcal: 320, p: 17, c: 22, f: 19, perUnit: true, note: "按一份估算" },
  "阿根廷红虾": { unit: "g", kcal: 95, p: 20, c: 0, f: 1.5 },
  "甜虾刺身": { unit: "g", kcal: 90, p: 20, c: 0, f: 1, note: "按刺身虾估算" },
  "北极贝刺身": { unit: "g", kcal: 80, p: 14, c: 3, f: 1, note: "按贝类刺身估算" },
  "紫薯土豆泥蔬菜沙拉": { unit: "g", kcal: 95, p: 3, c: 16, f: 2.5, note: "紫薯/土豆泥/玉米/豆类/蔬菜组合估算" },
  "鸡丝大拌菜": { unit: "g", kcal: 115, p: 8, c: 9, f: 5, note: "按190g约219kcal估算" },
  "鸡丝凉面": { unit: "g", kcal: 170, p: 7, c: 24, f: 5, note: "按370g约629kcal估算" },
  "象大厨麻酱凉皮": { unit: "g", kcal: 190, p: 6, c: 25, f: 8, note: "麻酱类油脂较高，按400g约760kcal估算" },
  "象大厨麻酱凉皮牛筋面双拼": { unit: "g", kcal: 200, p: 7, c: 26, f: 8, note: "按378g约756kcal估算" },
  "放纵餐肉类": { unit: "g", kcal: 250, p: 20, c: 2, f: 18 },
  "放纵餐主食": { unit: "g", kcal: 160, p: 4, c: 32, f: 1 },
  "放纵餐蔬菜": { unit: "g", kcal: 35, p: 1.5, c: 6, f: 0.5 },
  "放纵餐酱料/油脂": { unit: "g", kcal: 600, p: 3, c: 20, f: 55 },
  "甜品/小吃": { unit: "g", kcal: 300, p: 4, c: 40, f: 13 },
};

const FOOD_KIND_OVERRIDES = {
  "分离乳清蛋白粉": 0,
  "沙拉蔬菜": 5,
  "混合坚果": 3,
  "饭团": 2,
  "盒马糙米饭团": 2,
  "便利店饭团": 2,
  "全麦面包": 2,
  "超级碗谷物饭半份": 3,
  "超级碗沙拉半份": 5,
  "盒马烤蔬牛肉三色糙米能量碗": 10,
  "麦当劳薯角": 2,
  "麦当劳鸡米花": 2,
  "紫薯土豆泥蔬菜沙拉": 9,
  "鸡丝大拌菜": 5,
  "鸡丝凉面": 4,
  "象大厨麻酱凉皮": 3,
  "象大厨麻酱凉皮牛筋面双拼": 4,
  "放纵餐肉类": 1,
  "放纵餐主食": 1,
  "放纵餐蔬菜": 4,
  "放纵餐酱料/油脂": 1,
  "甜品/小吃": 2,
  "威士忌": 0,
};

const DEFAULT_CHOICE_AMOUNTS = {
  "盒马无糖无脂酸奶": 100,
  "有机燕麦": 30,
  "香蕉": 120,
  "水煮鸡蛋": 50,
  "分离乳清蛋白粉": 30,
  "盒马烤蔬牛肉三色糙米能量碗": 280,
  "盒马即食炙烤鸡胸肉条": 120,
  "鸡丝大拌菜": 190,
  "鸡丝凉面": 370,
  "紫薯土豆泥蔬菜沙拉": 300,
  "卤牛肉": 150,
  "象大厨麻酱凉皮": 400,
  "象大厨麻酱凉皮牛筋面双拼": 378,
  "甜虾刺身": 60,
  "北极贝刺身": 60,
  "混合坚果": 6,
  "三文鱼": 100,
  "阿根廷红虾": 150,
  "威士忌": 150,
  "麦当劳薯角": 1,
  "麦当劳鸡米花": 1,
};

const WEEK_TEMPLATE = [
  {
    title: "胸 + 有氧",
    base: 2250,
    exerciseKcal: 445,
    waterTarget: 3100,
    exercises: [
      ["卧推 空杆", "1组 x 10", 8],
      ["卧推 +20kg", "1组 x 10", 10],
      ["卧推 +30kg", "1组 x 10", 12],
      ["卧推 +40kg", "1组 x 10", 15],
      ["卧推 +50kg", "4组 x 10", 115],
      ["卧推 +60kg", "1组 x 5", 25],
      ["坐姿夹胸 30kg", "4组", 60],
      ["有氧", "30分钟，6%坡度，4配速", 200],
    ],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["超级碗果木鸡胸", 120], ["超级碗谷物饭半份", 1], ["沙拉蔬菜", 200], ["熟菠菜", 1], ["熟鸡蛋", 1], ["熟虾", 6]]],
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["有机燕麦", 30], ["即食玉米", 150]]],
      ["晚餐", [["三文鱼", 100], ["盒马糙米饭团", 120], ["便利店饭团", 100], ["沙拉蔬菜", 200], ["混合坚果", 6]]],
    ],
  },
  {
    title: "肩 + 有氧",
    base: 2250,
    exerciseKcal: 450,
    waterTarget: 3100,
    exercises: [
      ["坐姿哑铃推肩", "6组", 85],
      ["器械坐姿推肩", "4组", 60],
      ["绳索侧平举", "4组", 35],
      ["哑铃侧平举", "4组", 35],
      ["坐姿反向飞鸟", "4组", 35],
      ["有氧", "30分钟，6%坡度，4配速", 200],
    ],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["超级碗果木鸡胸", 120], ["超级碗谷物饭半份", 1], ["沙拉蔬菜", 200], ["熟菠菜", 1], ["熟鸡蛋", 1], ["熟虾", 6]]],
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["有机燕麦", 25], ["盒马无糖无脂酸奶", 100]]],
      ["晚餐", [["盒马烤蔬牛肉三色糙米能量碗", 280], ["即食玉米", 150], ["盒马糙米饭团", 100], ["沙拉蔬菜", 200], ["混合坚果", 4]]],
    ],
  },
  {
    title: "休息",
    base: 2250,
    exerciseKcal: 0,
    waterTarget: 2500,
    exercises: [["休息", "不安排力量和有氧", 0]],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["超级碗果木鸡胸", 120], ["超级碗谷物饭半份", 1], ["沙拉蔬菜", 200], ["熟菠菜", 1], ["熟鸡蛋", 1], ["熟虾", 6]]],
      ["加餐", [["卤牛肉", 80], ["盒马无糖无脂酸奶", 100], ["有机燕麦", 25]]],
      ["晚餐", [["卤牛肉", 120], ["盒马糙米饭团", 120], ["沙拉蔬菜", 200], ["混合坚果", 6]]],
    ],
  },
  {
    title: "背",
    base: 2250,
    exerciseKcal: 260,
    waterTarget: 2800,
    exercises: [["引体向上", "3组", 55], ["辅助引体向上", "3组", 45], ["高位下拉", "5组", 70], ["坐姿器械划船", "4组", 50], ["单手器械划船", "4组", 40]],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["超级碗果木鸡胸", 120], ["超级碗谷物饭半份", 1], ["沙拉蔬菜", 200], ["熟菠菜", 1], ["熟鸡蛋", 1], ["熟虾", 6]]],
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["便利店饭团", 120], ["混合坚果", 6]]],
      ["晚餐", [["金枪鱼罐头(水浸)", 100], ["全麦面包", 80], ["即食玉米", 150], ["沙拉蔬菜", 200], ["盒马无糖无脂酸奶", 100]]],
    ],
  },
  {
    title: "手臂 + 有氧",
    base: 2250,
    exerciseKcal: 410,
    waterTarget: 3100,
    exercises: [["三头肌绳索下拉", "4组", 40], ["杠铃弯举", "4组", 45], ["绳索单臂下拉", "4组", 35], ["过顶绳索臂屈伸", "4组", 40], ["牧师凳弯举", "4组", 50], ["有氧", "30分钟，6%坡度，4配速", 200]],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["超级碗果木鸡胸", 120], ["超级碗谷物饭半份", 1], ["沙拉蔬菜", 200], ["熟菠菜", 1], ["熟鸡蛋", 1], ["熟虾", 6]]],
      ["加餐", [["卤牛肉", 100], ["有机燕麦", 30], ["盒马无糖无脂酸奶", 100], ["即食玉米", 150]]],
      ["晚餐", [["三文鱼", 100], ["便利店饭团", 120], ["盒马糙米饭团", 80], ["沙拉蔬菜", 200], ["混合坚果", 4]]],
    ],
  },
  {
    title: "休息 + 放纵/喝酒",
    base: 2250,
    exerciseKcal: 0,
    waterTarget: 3000,
    exercises: [["休息", "白天控制，晚上记录酒量", 0]],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["盒马烤蔬牛肉三色糙米能量碗", 280], ["沙拉蔬菜", 200], ["盒马即食炙烤鸡胸肉条", 120]]],
      ["加餐", [["盒马无糖无脂酸奶", 100], ["有机燕麦", 25], ["香蕉", 100]]],
      ["晚餐/放纵", [["威士忌", 150], ["麦当劳薯角", 1], ["麦当劳鸡米花", 1], ["三文鱼", 200], ["阿根廷红虾", 150]]],
    ],
  },
  {
    title: "腿 + 有氧",
    base: 2250,
    exerciseKcal: 540,
    waterTarget: 3100,
    exercises: [["哈克深蹲", "6组", 145], ["倒蹬机", "4组", 105], ["器械坐姿腿屈伸", "4组", 90], ["有氧", "30分钟，6%坡度，4配速", 200]],
    meals: [
      ["早餐", [["香蕉", 120], ["水煮鸡蛋", 50], ["分离乳清蛋白粉", 30], ["盒马无糖无脂酸奶", 100]]],
      ["午餐", [["盒马烤蔬牛肉三色糙米能量碗", 280], ["沙拉蔬菜", 200], ["盒马即食炙烤鸡胸肉条", 120]]],
      ["加餐", [["卤牛肉", 100], ["有机燕麦", 30], ["盒马无糖无脂酸奶", 100], ["香蕉", 80]]],
      ["晚餐", [["卤牛肉", 150], ["盒马糙米饭团", 120], ["便利店饭团", 80], ["即食玉米", 150], ["沙拉蔬菜", 200]]],
    ],
  },
];

const EXERCISE_LIBRARY = buildExerciseLibrary(WEEK_TEMPLATE);

const STOOL_SHAPES = [
  "1型 硬球状",
  "2型 块状香肠",
  "3型 裂纹香肠",
  "4型 光滑柔软",
  "5型 柔软小块",
  "6型 糊状松散",
  "7型 水样",
];

const state = {
  tab: "today",
  date: initialDate(),
  store: loadStore(),
  theme: loadTheme(),
  centerDateOnRender: true,
  estimateMealId: "",
};

function initialDate() {
  return isoDate(new Date());
}

function loadTheme() {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return THEMES.includes(value) ? value : "forest";
  } catch {
    return "forest";
  }
}

function setTheme(theme) {
  state.theme = THEMES.includes(theme) ? theme : "forest";
  document.body.dataset.theme = state.theme;
  try { localStorage.setItem(THEME_KEY, state.theme); } catch {}
}

function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (saved?.version >= 2) return normalizeStore(saved);
  } catch {}
  try {
    const backup = JSON.parse(localStorage.getItem(BACKUP_STORE_KEY));
    if (backup?.version >= 2) return normalizeStore(backup);
  } catch {}
  for (const key of LEGACY_STORE_KEYS) {
    try {
      const old = JSON.parse(localStorage.getItem(key));
      if (old?.version >= 2) return normalizeStore(old);
      if (old) return normalizeStore({ version: 4, records: old, plans: {}, foods: FOOD_LIBRARY });
    } catch {}
  }
  return normalizeStore({ version: 9, records: {}, plans: {}, foods: FOOD_LIBRARY, deletedFoods: [], exerciseLibrary: EXERCISE_LIBRARY, deletedExercises: [] });
}

function normalizeStore(store) {
  const deletedFoods = Array.isArray(store.deletedFoods) ? store.deletedFoods : [];
  const rawFoods = { ...FOOD_LIBRARY, ...(store.foods || {}) };
  deletedFoods.forEach((name) => delete rawFoods[name]);
  const foods = Object.fromEntries(Object.entries(rawFoods).map(([name, f]) => [name, normalizeFoodDef(name, f)]));
  const deletedExercises = Array.isArray(store.deletedExercises) ? store.deletedExercises : [];
  const exerciseLibrary = { ...EXERCISE_LIBRARY, ...(store.exerciseLibrary || {}) };
  deletedExercises.forEach((name) => delete exerciseLibrary[name]);
  const records = Object.fromEntries(Object.entries(store.records || {}).map(([date, r]) => [date, normalizeRecord(r)]));
  const plans = Object.fromEntries(Object.entries(store.plans || {}).map(([date, savedPlan]) => [date, normalizeSavedPlan(date, savedPlan, foods, exerciseLibrary)]));
  return {
    version: 9,
    records,
    plans,
    foods,
    deletedFoods,
    exerciseLibrary,
    deletedExercises,
  };
}

function normalizeRecord(r = {}) {
  const next = {
    ...emptyRecord(),
    ...r,
    foods: r.foods || {},
    exercises: r.exercises || {},
    waterSlots: r.waterSlots || {},
    waterSlotLogs: r.waterSlotLogs || {},
    waterLogs: Array.isArray(r.waterLogs)
      ? r.waterLogs.map((log) => ({
        id: log.id || uid("water"),
        time: log.time || "--:--",
        amount: Math.max(0, Number(log.amount || 0)),
        label: log.label || "饮水",
      })).filter((log) => log.amount > 0)
      : [],
    body: r.body || {},
    stool: r.stool || {},
  };
  if (next.waterLogs.length) next.waterMl = waterLogTotal(next.waterLogs);
  else next.waterMl = Math.max(0, Number(next.waterMl || 0));
  return next;
}

function normalizeFoodDef(name, f = {}) {
  return { ...f, kinds: foodKindValue(name, f) };
}

function foodKindValue(name, f = {}) {
  const value = f.kinds ?? f.kindCount ?? f.ingredients ?? FOOD_KIND_OVERRIDES[name] ?? 1;
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.round(n * 10) / 10) : 1;
}

function fmtKinds(n) {
  const value = Number(n || 0);
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function normalizeSavedPlan(date, savedPlan, foods, exerciseLibrary) {
  if (!savedPlan?.meals) return savedPlan;
  const p = JSON.parse(JSON.stringify(savedPlan));
  p.exercises = (p.exercises || []).map((ex, i) => normalizeExercise(ex, i, exerciseLibrary));
  p.meals.forEach((meal) => {
    meal.items = (meal.items || []).map((item) => {
      const next = item.food === "超级碗沙拉半份"
        ? { ...item, food: "沙拉蔬菜", amount: 200, unit: "g" }
        : { ...item };
      if (next.custom && !next.baseAmount) next.baseAmount = Number(next.amount || 1);
      if (next.custom && next.kinds === undefined) next.kinds = foodKindValue(next.food || next.name, next);
      next.unit = foods[next.food]?.unit || next.unit || "g";
      return next;
    });
  });
  const weekend = templateIndex(date) >= 5;
  const lunch = p.meals.find((meal) => meal.name === "午餐");
  if (weekend && lunch?.items?.some((item) => String(item.food || "").includes("超级碗"))) {
    lunch.items = templateMealItems(date, "午餐", foods, 1);
  }
  return p;
}

function templateMealItems(date, mealName, foods, mealIndex) {
  const meal = WEEK_TEMPLATE[templateIndex(date)].meals.find(([name]) => name === mealName);
  if (!meal) return [];
  return meal[1].map(([food, amount], itemIndex) => ({
    id: `m${mealIndex}i${itemIndex}`,
    food,
    amount,
    unit: foods[food]?.unit || FOOD_LIBRARY[food]?.unit || "g",
  }));
}

function saveStore() {
  const compact = compactStore(state.store);
  try {
    const previous = localStorage.getItem(STORE_KEY);
    if (previous) localStorage.setItem(BACKUP_STORE_KEY, previous);
    localStorage.setItem(STORE_KEY, JSON.stringify(compact));
    state.store = normalizeStore(compact);
  } catch (err) {
    alert("保存失败：本机浏览器存储空间可能已满。请先导出Excel备份，再清理旧浏览器数据。");
    throw err;
  }
}

function compactStore(store) {
  const records = Object.fromEntries(Object.entries(store.records || {}).filter(([, r]) => hasRecordData(r)));
  return { ...store, version: 9, records };
}

function hasRecordData(r = {}) {
  return Boolean(
    Object.values(r.foods || {}).some(Boolean) ||
    Object.values(r.exercises || {}).some(Boolean) ||
    (r.waterLogs || []).some((log) => Number(log.amount || 0) > 0) ||
    Number(r.waterMl || 0) > 0 ||
    Object.values(r.body || {}).some((v) => String(v || "").trim()) ||
    r.stool?.done || r.stool?.time || r.stool?.shape || r.stool?.note
  );
}

function emptyRecord() {
  return { foods: {}, exercises: {}, waterSlots: {}, waterSlotLogs: {}, waterLogs: [], waterMl: 0, body: {}, stool: {} };
}

function readRecord(date = state.date) {
  return state.store.records[date] || emptyRecord();
}

function foodDef(name) {
  return state.store.foods?.[name] || null;
}

function upsertFood(name, food) {
  const cleanName = String(name || "").trim();
  if (!cleanName) return false;
  state.store.deletedFoods = (state.store.deletedFoods || []).filter((item) => item !== cleanName);
  state.store.foods[cleanName] = normalizeFoodDef(cleanName, food);
  return true;
}

function syncFoodReferences(name) {
  const lib = foodDef(name);
  if (!name || !lib) return 0;
  let changed = 0;
  Object.values(state.store.plans || {}).forEach((p) => {
    (p.meals || []).forEach((meal) => {
      (meal.items || []).forEach((item) => {
        if (item.food !== name || item.custom) return;
        item.name = name;
        item.unit = lib.unit || item.unit || "g";
        delete item.kcal;
        delete item.p;
        delete item.c;
        delete item.f;
        delete item.kinds;
        delete item.baseAmount;
        changed += 1;
      });
    });
  });
  return changed;
}

function futureSyncDates(fromDate = state.date) {
  const today = initialDate();
  const first = fromDate < today ? today : addDays(fromDate, 1);
  return Array.from({ length: FUTURE_FOOD_SYNC_DAYS }, (_, i) => addDays(first, i));
}

function itemMatchesFood(item, food) {
  return !!food && (item.food === food || item.name === food);
}

function foodItemDone(date, item) {
  return !!state.store.records?.[date]?.foods?.[item.id];
}

function cloneFoodForFuture(source) {
  const next = {
    food: source.food || source.name || "",
    name: source.name || source.food || "",
    amount: Number(source.amount || 0),
    unit: source.unit || "g",
  };
  if (source.custom) {
    next.custom = true;
    next.kcal = Number(source.kcal || 0);
    next.p = Number(source.p || 0);
    next.c = Number(source.c || 0);
    next.f = Number(source.f || 0);
    next.baseAmount = Number(source.baseAmount || source.amount || 1);
    next.kinds = foodKindValue(next.food || next.name, source);
    if (source.note) next.note = source.note;
  }
  return next;
}

function applyFoodToFutureItem(target, source) {
  const id = target.id;
  ["food", "name", "amount", "unit", "custom", "kcal", "p", "c", "f", "baseAmount", "kinds", "note"].forEach((key) => delete target[key]);
  Object.assign(target, { id }, source);
}

function syncFutureFoodEdit(originalFood, editedItem, fromDate = state.date) {
  const source = cloneFoodForFuture(editedItem);
  if (!originalFood || !source.food) return 0;
  let changed = 0;
  futureSyncDates(fromDate).forEach((date) => {
    const preview = plan(date);
    if (!(preview.meals || []).some((meal) => (meal.items || []).some((item) => itemMatchesFood(item, originalFood)))) return;
    const p = editablePlan(date);
    (p.meals || []).forEach((meal) => {
      (meal.items || []).forEach((item) => {
        if (!itemMatchesFood(item, originalFood) || foodItemDone(date, item)) return;
        applyFoodToFutureItem(item, source);
        changed += 1;
      });
    });
  });
  return changed;
}

function syncFutureFoodDelete(originalFood, fromDate = state.date) {
  if (!originalFood) return 0;
  let changed = 0;
  futureSyncDates(fromDate).forEach((date) => {
    const preview = plan(date);
    if (!(preview.meals || []).some((meal) => (meal.items || []).some((item) => itemMatchesFood(item, originalFood)))) return;
    const p = editablePlan(date);
    (p.meals || []).forEach((meal) => {
      const before = meal.items.length;
      meal.items = (meal.items || []).filter((item) => !itemMatchesFood(item, originalFood) || foodItemDone(date, item));
      changed += before - meal.items.length;
    });
  });
  return changed;
}

function renameFoodReferences(from, to) {
  if (!from || !to || from === to) return;
  Object.values(state.store.plans || {}).forEach((p) => {
    (p.meals || []).forEach((meal) => {
      (meal.items || []).forEach((item) => {
        if (item.food === from) {
          item.food = to;
          item.name = to;
        }
      });
    });
  });
}

function deleteFoodFromLibrary(name) {
  const lib = foodDef(name);
  Object.values(state.store.plans || {}).forEach((p) => {
    (p.meals || []).forEach((meal) => {
      (meal.items || []).forEach((item) => {
        if (item.food !== name || item.custom || !lib) return;
        const macro = scaleMacro(lib, item.amount);
        item.custom = true;
        item.kcal = macro.kcal;
        item.p = macro.p;
        item.c = macro.c;
        item.f = macro.f;
        item.baseAmount = item.amount || 1;
        item.kinds = foodKindValue(name, lib);
      });
    });
  });
  delete state.store.foods[name];
  if (FOOD_LIBRARY[name]) {
    const deleted = new Set(state.store.deletedFoods || []);
    deleted.add(name);
    state.store.deletedFoods = [...deleted];
  }
}

function buildExerciseLibrary(templates) {
  const map = {};
  templates.forEach((day) => {
    (day.exercises || []).forEach((raw, i) => {
      const ex = normalizeExercise(raw, i, {});
      if (!ex.name || ex.name === "休息") return;
      map[ex.name] = {
        kcalPerSet: ex.kcalPerSet,
        detail: ex.detail || "",
        note: ex.detail || "",
      };
    });
  });
  return map;
}

function exerciseDef(name) {
  return state.store.exerciseLibrary?.[name] || null;
}

function upsertExerciseDef(name, ex) {
  const cleanName = String(name || "").trim();
  if (!cleanName) return false;
  state.store.deletedExercises = (state.store.deletedExercises || []).filter((item) => item !== cleanName);
  state.store.exerciseLibrary[cleanName] = {
    kcalPerSet: Number(ex.kcalPerSet || 0),
    detail: String(ex.detail || ""),
    note: String(ex.note || ""),
  };
  return true;
}

function deleteExerciseDef(name) {
  delete state.store.exerciseLibrary[name];
  if (EXERCISE_LIBRARY[name]) {
    const deleted = new Set(state.store.deletedExercises || []);
    deleted.add(name);
    state.store.deletedExercises = [...deleted];
  }
}

function normalizeExercise(raw, index = 0, library = EXERCISE_LIBRARY) {
  if (Array.isArray(raw)) {
    const [name, detail, kcal] = raw;
    const sets = inferSets(detail, name);
    const cleanDetail = cleanExerciseDetail(detail, sets);
    const perSet = sets > 0 ? Number(kcal || 0) / sets : Number(kcal || 0);
    return {
      id: `ex${index}`,
      name,
      detail: cleanDetail,
      sets,
      kcalPerSet: precise(perSet),
    };
  }
  const lib = library?.[raw.name] || {};
  const sets = Number.isFinite(Number(raw.sets)) ? Number(raw.sets) : inferSets(raw.detail, raw.name);
  const kcalPerSet = raw.kcalPerSet !== undefined
    ? Number(raw.kcalPerSet || 0)
    : sets > 0
      ? Number(raw.kcal || lib.kcalPerSet || 0) / sets
      : Number(raw.kcal || lib.kcalPerSet || 0);
  return {
    ...raw,
    id: raw.id || `ex${index}`,
    name: raw.name || "新动作",
    detail: cleanExerciseDetail(raw.detail || lib.detail || "", sets),
    sets,
    kcalPerSet: precise(kcalPerSet),
  };
}

function inferSets(detail, name) {
  if (String(name || "").includes("休息")) return 0;
  const match = String(detail || "").match(/(\d+(?:\.\d+)?)\s*组/);
  return match ? Number(match[1]) : 1;
}

function cleanExerciseDetail(detail, sets) {
  const text = String(detail || "").trim();
  if (!text) return "";
  const onlySets = text.match(/^\d+(?:\.\d+)?\s*组$/);
  if (onlySets) return "";
  const reps = text.match(/^\d+(?:\.\d+)?\s*组\s*[xX×]\s*(.+)$/);
  if (reps) return /次$/.test(reps[1]) ? reps[1] : `${reps[1]}次`;
  return sets > 0 ? text.replace(/^\d+(?:\.\d+)?\s*组\s*/, "").trim() : text;
}

function exerciseKcal(ex) {
  if (ex.kcal !== undefined && ex.sets === undefined) return Number(ex.kcal || 0);
  return Number(ex.sets || 0) * Number(ex.kcalPerSet || 0);
}

function exerciseNames() {
  return Object.keys(state.store.exerciseLibrary || {}).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function isoDate(date) {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function addDays(date, n) {
  const d = new Date(`${date}T12:00:00`);
  d.setDate(d.getDate() + n);
  return isoDate(d);
}

function mondayOf(date) {
  const d = new Date(`${date}T12:00:00`);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() - day + 1);
  return isoDate(d);
}

function dayName(date) {
  return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][new Date(`${date}T12:00:00`).getDay()];
}

function weekDates(date = state.date) {
  const start = mondayOf(date);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

function uid(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function templateIndex(date) {
  return (new Date(`${date}T12:00:00`).getDay() + 6) % 7;
}

function createPlan(date) {
  const t = WEEK_TEMPLATE[templateIndex(date)];
  return {
    date,
    day: dayName(date),
    title: t.title,
    base: t.base,
    waterTarget: t.waterTarget,
    exercises: t.exercises.map((raw, i) => normalizeExercise(raw, i, state.store?.exerciseLibrary || EXERCISE_LIBRARY)),
    meals: t.meals.map(([name, items], mealIndex) => ({
      id: `meal${mealIndex}`,
      name,
      items: items.map(([food, amount], itemIndex) => ({
        id: `m${mealIndex}i${itemIndex}`,
        food,
        amount,
        unit: foodDef(food)?.unit || "g",
      })),
    })),
  };
}

function exerciseTotal(p = plan()) {
  return p.exercises.reduce((sum, ex) => sum + exerciseKcal(ex), 0);
}

function bodyWeightForDate(date = state.date) {
  const exact = Number(state.store.records?.[date]?.body?.weight || 0);
  if (exact > 0) return exact;
  const prior = Object.entries(state.store.records || {})
    .filter(([d, r]) => d <= date && Number(r.body?.weight || 0) > 0)
    .sort(([a], [b]) => b.localeCompare(a))[0];
  return prior ? Number(prior[1].body.weight) : USER_PROFILE.referenceWeightKg;
}

function bmrForWeight(weightKg = USER_PROFILE.referenceWeightKg) {
  const sexOffset = USER_PROFILE.sex === "male" ? 5 : -161;
  return 10 * weightKg + 6.25 * USER_PROFILE.heightCm - 5 * USER_PROFILE.age + sexOffset;
}

function baseBurn(date = state.date) {
  return bmrForWeight(bodyWeightForDate(date)) * USER_PROFILE.dailyActivityFactor;
}

function dynamicExerciseTotal(p = plan(), date = state.date) {
  return p.exercises.reduce((sum, ex) => sum + dynamicExerciseKcal(ex, date), 0);
}

function dynamicExerciseKcal(ex, date = state.date) {
  const weightScale = bodyWeightForDate(date) / USER_PROFILE.referenceWeightKg;
  return exerciseKcal(ex) * weightScale;
}

function dailyTdee(p = plan(), date = state.date) {
  return baseBurn(date) + dynamicExerciseTotal(p, date);
}

function targetDeficitGoal(date = state.date) {
  return templateIndex(date) === 5 ? -CALORIE_RULES.saturdayOver : CALORIE_RULES.normalDeficit;
}

function calorieTarget(p = plan(), date = state.date) {
  return dailyTdee(p, date) - targetDeficitGoal(date);
}

function targetDeficit(p = plan(), date = state.date) {
  return targetDeficitGoal(date);
}

function nutritionTargets(p = plan(), date = state.date) {
  const kcal = calorieTarget(p, date);
  const weight = bodyWeightForDate(date);
  const trainingDay = dynamicExerciseTotal(p, date) > 0;
  const protein = weight * (trainingDay ? MACRO_RULES.trainingProteinPerKg : MACRO_RULES.restProteinPerKg);
  const fat = weight * (templateIndex(date) === 5 ? MACRO_RULES.saturdayFatPerKg : MACRO_RULES.normalFatPerKg);
  const carbs = Math.max(0, (kcal - protein * 4 - fat * 9) / 4);
  return { kcal, p: protein, c: carbs, f: fat };
}

function macroGuidance(p = plan(), date = state.date) {
  const target = nutritionTargets(p, date);
  const weight = bodyWeightForDate(date);
  const saturday = templateIndex(date) === 5;
  const fatMin = weight * (saturday ? FAT_RANGE_RULES.saturdayMinPerKg : FAT_RANGE_RULES.normalMinPerKg);
  const fatMax = weight * (saturday ? FAT_RANGE_RULES.saturdayMaxPerKg : FAT_RANGE_RULES.normalMaxPerKg);
  return { ...target, proteinMin: target.p, fatMin, fatMax, carbCap: target.c };
}

function plan(date = state.date) {
  return state.store.plans[date] || createPlan(date);
}

function editablePlan(date = state.date) {
  if (!state.store.plans[date]) state.store.plans[date] = structuredClone(createPlan(date));
  return state.store.plans[date];
}

function record(date = state.date) {
  if (!state.store.records[date]) {
    state.store.records[date] = emptyRecord();
  }
  return state.store.records[date];
}

function foodMacro(item) {
  if (item.custom) return customMacro(item);
  const f = foodDef(item.food);
  if (!f) return { kcal: 0, p: 0, c: 0, f: 0 };
  const k = f.perUnit ? Number(item.amount || 0) : Number(item.amount || 0) / 100;
  return { kcal: f.kcal * k, p: f.p * k, c: f.c * k, f: f.f * k };
}

function customMacro(item) {
  const baseAmount = Number(item.baseAmount || 1);
  const k = baseAmount ? Number(item.amount || 0) / baseAmount : 1;
  return {
    kcal: Number(item.kcal || 0) * k,
    p: Number(item.p || 0) * k,
    c: Number(item.c || 0) * k,
    f: Number(item.f || 0) * k,
  };
}

function pickMacro(x) {
  return { kcal: Number(x.kcal || 0), p: Number(x.p || 0), c: Number(x.c || 0), f: Number(x.f || 0) };
}

function amountStep(unit) {
  return ["份", "个", "颗"].includes(unit) ? 0.1 : 10;
}

function cleanAmount(value, unit) {
  const n = Math.max(0, Number(value || 0));
  return ["份", "个", "颗"].includes(unit) ? Math.round(n * 10) / 10 : Math.round(n);
}

function scaleMacro(food, amount) {
  if (!food) return { kcal: 0, p: 0, c: 0, f: 0 };
  const k = food.perUnit ? Number(amount || 0) : Number(amount || 0) / 100;
  return { kcal: Number(food.kcal || 0) * k, p: Number(food.p || 0) * k, c: Number(food.c || 0) * k, f: Number(food.f || 0) * k };
}

function sumMacros(items) {
  return items.reduce((acc, item) => addMacro(acc, foodMacro(item)), { kcal: 0, p: 0, c: 0, f: 0 });
}

function addMacro(a, b) {
  return { kcal: a.kcal + b.kcal, p: a.p + b.p, c: a.c + b.c, f: a.f + b.f };
}

function plannedTotals(p = plan()) {
  return sumMacros(p.meals.flatMap((m) => m.items));
}

function eatenTotals(p = plan(), r = readRecord()) {
  return sumMacros(p.meals.flatMap((m) => m.items.filter((item) => r.foods[item.id])));
}

function weekStats() {
  return weekDates().reduce((acc, date) => {
    const p = plan(date);
    const r = readRecord(date);
    const planned = nutritionTargets(p, date);
    const eaten = eatenTotals(p, r);
    acc.plannedKcal += planned.kcal;
    acc.eatenKcal += eaten.kcal;
    const burn = dailyTdee(p, date);
    acc.burn += burn;
    acc.plannedDeficit += targetDeficit(p, date);
    acc.actualDeficit += burn - eaten.kcal;
    acc.water += waterTotal(r);
    acc.waterTarget += p.waterTarget;
    acc.exerciseDone += Object.values(r.exercises || {}).filter(Boolean).length;
    acc.exerciseTotal += p.exercises.length;
    acc.foodDone += p.meals.flatMap((m) => m.items).filter((item) => r.foods[item.id]).length;
    acc.foodTotal += p.meals.flatMap((m) => m.items).length;
    acc.stool += r.stool?.done ? 1 : 0;
    return acc;
  }, { plannedKcal: 0, eatenKcal: 0, burn: 0, plannedDeficit: 0, actualDeficit: 0, water: 0, waterTarget: 0, exerciseDone: 0, exerciseTotal: 0, foodDone: 0, foodTotal: 0, stool: 0 });
}

function waterLogTotal(logs = []) {
  return logs.reduce((sum, log) => sum + Math.max(0, Number(log.amount || 0)), 0);
}

function waterTotal(r = readRecord()) {
  return r.waterLogs?.length ? waterLogTotal(r.waterLogs) : Math.max(0, Number(r.waterMl || 0));
}

function syncWaterTotal(r) {
  r.waterMl = r.waterLogs?.length ? waterLogTotal(r.waterLogs) : Math.max(0, Number(r.waterMl || 0));
  return r.waterMl;
}

function currentTimeText() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function ensureWaterLogs(r) {
  if (!Array.isArray(r.waterLogs)) r.waterLogs = [];
  if (!r.waterLogs.length && Number(r.waterMl || 0) > 0) {
    r.waterLogs.push({ id: uid("water"), time: "--:--", amount: Number(r.waterMl || 0), label: "旧记录" });
  }
  if (!r.waterSlotLogs) r.waterSlotLogs = {};
  return r.waterLogs;
}

function addWaterLog(r, amount, label = "饮水", time = currentTimeText()) {
  const cleanAmount = Math.max(0, Math.round(Number(amount || 0)));
  if (!cleanAmount) return "";
  const logs = ensureWaterLogs(r);
  const id = uid("water");
  logs.push({ id, time: time || currentTimeText(), amount: cleanAmount, label });
  syncWaterTotal(r);
  return id;
}

function removeWaterLog(r, id) {
  ensureWaterLogs(r);
  r.waterLogs = r.waterLogs.filter((log) => log.id !== id);
  Object.entries(r.waterSlotLogs || {}).forEach(([slot, logId]) => {
    if (logId === id) delete r.waterSlotLogs[slot];
  });
  syncWaterTotal(r);
}

function fmt(n, d = 0) {
  return Number(n || 0).toFixed(d);
}

function pct(value, target) {
  return target ? Math.max(0, Math.min(100, (value / target) * 100)) : 0;
}

function render(options = {}) {
  setTheme(state.theme);
  renderWeekbar();
  renderDates();
  document.querySelectorAll(".tab").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.tab === state.tab));
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) themeSelect.value = state.theme;
  const titles = { today: "概览", training: "训练", meals: "饮食", library: "食物库", water: "饮水", body: "身体" };
  document.getElementById("pageTitle").textContent = `${titles[state.tab]} · ${plan().day}`;
  document.getElementById("dateContext").textContent = dateContextText();
  const view = document.getElementById("view");
  view.innerHTML = "";
  view.append(VIEWS[state.tab]());
  if (state.tab === "body") requestAnimationFrame(drawBodyChart);
  if (options.centerDate || state.centerDateOnRender) {
    state.centerDateOnRender = false;
    requestAnimationFrame(centerActiveDate);
  }
}

function renderWeekbar() {
  const dates = weekDates();
  const currentWeek = dates.includes(initialDate());
  document.getElementById("weekLabel").textContent = `${dates[0].slice(5)} 至 ${dates[6].slice(5)}${currentWeek ? " · 本周" : ""}`;
}

function renderDates() {
  document.getElementById("dateStrip").innerHTML = weekDates().map((date) => {
    const p = plan(date);
    const isSelected = date === state.date;
    const isToday = date === initialDate();
    return `<button class="date-pill ${isSelected ? "is-active" : ""} ${isToday ? "is-today" : ""}" data-date="${date}" type="button">
      <strong>${p.day}</strong><span>${date.slice(5)}</span>${isToday ? "<em>今天</em>" : ""}
    </button>`;
  }).join("");
}

function dateContextText() {
  const today = initialDate();
  if (state.date === today) return `今天 ${today.slice(5)} · ${plan().title}`;
  return `${state.date.slice(5)} · ${plan().title}`;
}

function centerActiveDate() {
  const strip = document.getElementById("dateStrip");
  const active = strip?.querySelector(".date-pill.is-active");
  if (!strip || !active) return;
  active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

function renderPreservingScroll() {
  const y = window.scrollY || 0;
  render();
  requestAnimationFrame(() => window.scrollTo(0, y));
}

const VIEWS = {
  today() {
    const p = plan();
    const r = readRecord();
    const planned = macroGuidance(p);
    const eaten = eatenTotals(p, r);
    const week = weekStats();
    const burn = dailyTdee(p);
    const plannedDeficit = targetDeficit(p);
    const actualDeficit = burn - eaten.kcal;
    const targetRemainingKcal = planned.kcal - eaten.kcal;
    const base = baseBurn();
    const exercise = dynamicExerciseTotal(p);
    const weight = bodyWeightForDate();
    const calorieRuleLabel = plannedDeficit < 0 ? `周六超标 ${fmt(Math.abs(plannedDeficit))} kcal` : `目标缺口 ${fmt(plannedDeficit)} kcal`;
    const foodItems = p.meals.flatMap((m) => m.items);
    const foodDone = foodItems.filter((item) => r.foods[item.id]).length;
    const exerciseDone = p.exercises.filter((ex) => r.exercises[ex.id]).length;
    const waterNow = waterTotal(r);
    const waterDone = waterNow >= p.waterTarget;
    const stoolDone = !!r.stool?.done;
    return html(`<div class="stack">
      <section class="panel">
        <div class="section-title"><h2>本周情况</h2><small>${week.foodDone}/${week.foodTotal} 食物 · ${week.exerciseDone}/${week.exerciseTotal} 训练</small></div>
        <div class="metric-grid">
          ${miniMetric("周计划缺口", `${fmt(week.plannedDeficit)} kcal`, "green")}
          ${miniMetric("周已吃/目标", `${fmt(week.eatenKcal)} / ${fmt(week.plannedKcal)} kcal`, "green")}
          ${miniMetric("周饮水", `${fmt(week.water)} / ${fmt(week.waterTarget)} ml`, "blue")}
          ${miniMetric("排便天数", `${week.stool} / 7`, week.stool >= 5 ? "green" : "amber")}
        </div>
      </section>

      <section class="score-panel">
        <div class="score-main ${targetRemainingKcal >= 0 ? "good" : "bad"}">
          <span>目标剩余可吃</span>
          <strong>${fmt(targetRemainingKcal)}</strong>
          <small>TDEE ${fmt(burn)} kcal · ${calorieRuleLabel}</small>
        </div>
        <div class="score-side">
          <b>${fmt(eaten.kcal)}</b><span>已吃 / 目标 ${fmt(planned.kcal)}</span>
          <b>${fmt(actualDeficit)}</b><span>当前实际缺口</span>
          <b>${fmt(base)} + ${fmt(exercise)}</b><span>日常 + 训练 · ${fmt(weight, 1)}kg</span>
        </div>
      </section>

      ${nutritionOverviewPanel("今日摄入构成", p, r)}

      <section class="panel">
        <div class="section-title"><h2>今日执行</h2><small>${state.date.slice(5)} · ${p.title}</small></div>
        <div class="metric-grid">
          ${miniMetric("饮食打卡", `${foodDone}/${foodItems.length}`, foodDone === foodItems.length ? "green" : "red")}
          ${miniMetric("训练打卡", `${exerciseDone}/${p.exercises.length}`, exerciseDone === p.exercises.length ? "green" : "red")}
          ${miniMetric("饮水", `${fmt(waterNow)} / ${p.waterTarget} ml`, waterDone ? "green" : "blue")}
          ${miniMetric("排便", stoolDone ? "已记录" : "未记录", stoolDone ? "green" : "amber")}
        </div>
      </section>

      <section class="panel">
        <div class="section-title"><h2>宏量目标</h2><small>蛋白达标 · 脂肪区间 · 碳水上限</small></div>
        ${macroLine("热量", eaten.kcal, planned.kcal, "kcal", { note: `TDEE ${fmt(burn)} kcal，目标缺口 ${fmt(targetDeficit(p))} kcal` })}
        ${macroLine("蛋白", eaten.p, planned.p, "g", { targetText: `>= ${fmt(planned.proteinMin, 1)} g`, note: "优先吃够，保肌核心指标" })}
        ${macroLine("脂肪", eaten.f, planned.fatMax, "g", { targetText: `${fmt(planned.fatMin, 1)}-${fmt(planned.fatMax, 1)} g`, note: "建议区间，不用刻意压太低" })}
        ${macroLine("碳水", eaten.c, planned.carbCap, "g", { targetText: `<= ${fmt(planned.carbCap, 1)} g`, note: "剩余热量额度，不是必须吃满" })}
      </section>

      <section class="panel">
        <div class="section-title"><h2>未完成</h2><small>${p.title}</small></div>
        ${unfinishedList(p, r)}
      </section>
    </div>`);
  },

  training() {
    const p = plan();
    const r = readRecord();
    const exerciseOptions = exerciseNames().map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join("");
    return html(`<div class="stack">
      ${trainingOverviewPanel(p, r)}
      <section class="panel">
        <div class="section-title"><h2>${p.title}</h2><small>估算 ${fmt(exerciseTotal(p))} kcal</small></div>
        <div class="task-list">
          ${p.exercises.map((ex) => exerciseRow(ex, r.exercises[ex.id])).join("")}
        </div>
        <form id="addExerciseForm" class="form-grid add-exercise-form">
          <datalist id="exerciseLibraryList">${exerciseOptions}</datalist>
          <label class="field"><span>动作</span><input name="name" list="exerciseLibraryList" placeholder="例如 坐姿划船" autocomplete="off" /></label>
          ${field("sets", "组数", "", "4")}
          ${field("kcalPerSet", "每组 kcal", "", "12")}
          ${field("detail", "备注", "", "重量/次数/时长")}
          <div class="food-preview span-2" id="exercisePreview">输入动作和组数后自动估算</div>
          <button class="primary-button" type="submit">添加动作</button>
        </form>
      </section>
      ${exerciseLibraryEditor()}
    </div>`);
  },

  meals() {
    const p = plan();
    const r = readRecord();
    return html(`<div class="stack">
      ${nutritionOverviewPanel("今日饮食概览", p, r)}
      ${p.meals.map((meal) => mealCard(meal, r)).join("")}
      ${addFoodPanel(p)}
    </div>`);
  },

  library() {
    return html(`<div class="stack">
      ${foodLibraryEditor()}
    </div>`);
  },

  water() {
    const p = plan();
    const r = readRecord();
    const total = waterTotal(r);
    return html(`<div class="stack">
      <section class="score-panel water-score">
        <div class="score-main"><span>今日饮水</span><strong>${fmt(total)}</strong><small>目标 ${p.waterTarget} ml</small></div>
        <div class="score-side"><b>${fmt(pct(total, p.waterTarget))}%</b><span>完成度</span><b>${waterLogDisplayRows(r).length}</b><span>饮水记录</span></div>
      </section>
      <section class="panel">
        <div class="section-title"><h2>快速记录</h2><small>点击后自动记录当前时间</small></div>
        <div class="quick-grid">
          <button class="quick-water" data-water-add="250" type="button">+250</button>
          <button class="quick-water" data-water-add="350" type="button">+350</button>
          <button class="quick-water" data-water-add="500" type="button">+500</button>
          <button class="quick-water danger" data-water-reset="1" type="button">清零</button>
        </div>
      </section>
      <section class="panel">
        <div class="section-title"><h2>手动补录</h2><small>可以改时间和水量</small></div>
        <form id="waterLogForm" class="form-grid">
          <label class="field"><span>时间</span><input name="time" type="time" value="${currentTimeText()}" /></label>
          ${field("amount", "水量 ml", "250", "250")}
          <button class="primary-button span-2" type="submit">记录饮水</button>
        </form>
      </section>
      <section class="panel">
        <div class="section-title"><h2>当天饮水记录</h2><small>${fmt(total)} / ${p.waterTarget} ml</small></div>
        <div class="water-log-list">${waterLogRows(r)}</div>
      </section>
    </div>`);
  },

  body() {
    const r = readRecord();
    const b = r.body || {};
    const s = r.stool || {};
    return html(`<div class="stack">
      <section class="panel">
        <div class="section-title"><h2>身体记录</h2><small>${state.date}</small></div>
        <form id="bodyForm" class="form-grid">
          ${field("weight", "体重 kg", b.weight || "", "72.0")}
          ${field("bodyFat", "体脂 %", b.bodyFat || "", "18.5")}
          ${field("waist", "腰围 cm", b.waist || "", "82")}
          ${field("note", "备注", b.note || "", "睡眠/训练状态", "span-2")}
          <button class="primary-button span-2" type="submit">保存身体记录</button>
        </form>
      </section>
      <section class="panel">
        <div class="section-title"><h2>排便记录</h2><small>${stoolSummary(s)}</small></div>
        <form id="stoolForm" class="form-grid">
          <label class="switch-row span-2"><input name="done" type="checkbox" ${s.done ? "checked" : ""} /> 今天已排便</label>
          ${selectField("time", "时间", ["", "上午", "下午", "晚上"], s.time || "")}
          ${selectField("shape", "形状", ["", ...STOOL_SHAPES], s.shape || "")}
          ${field("stoolNote", "备注", s.note || "", "比如偏干/偏稀", "span-2")}
          <button class="primary-button span-2" type="submit">保存排便记录</button>
        </form>
      </section>
      <section class="panel">
        <div class="section-title"><h2>排便历史</h2><small>最近30天</small></div>
        <div class="library-list">${stoolHistoryRows()}</div>
      </section>
      <section class="panel">
        <div class="section-title"><h2>趋势</h2><small>体重 / 体脂</small></div>
        <div class="chart-wrap"><canvas id="bodyChart" width="640" height="300"></canvas></div>
      </section>
    </div>`);
  },
};

function html(markup) {
  const t = document.createElement("template");
  t.innerHTML = markup.trim();
  return t.content.firstElementChild;
}

function miniMetric(label, value, tone) {
  return `<div class="mini ${tone}"><span>${label}</span><b>${value}</b></div>`;
}

function macroLine(label, actual, target, unit, options = {}) {
  const decimals = unit === "kcal" ? 0 : 1;
  const targetText = options.targetText || `${fmt(target, decimals)} ${unit}`;
  return `<div class="macro-line">
    <div><b>${label}</b><span>${fmt(actual, decimals)} / ${targetText}</span></div>
    <div class="progress"><span class="progress-fill" style="width:${pct(actual, target)}%"></span></div>
    ${options.note ? `<em>${options.note}</em>` : ""}
  </div>`;
}

function eatenItems(p = plan(), r = readRecord()) {
  return p.meals.flatMap((m) => m.items).filter((item) => r.foods[item.id]);
}

function foodKindCount(items) {
  return items.reduce((sum, item) => sum + itemFoodKinds(item), 0);
}

function itemFoodKinds(item) {
  if (item.custom) return foodKindValue(item.food || item.name, item);
  return foodKindValue(item.food, foodDef(item.food) || {});
}

function macroEnergySplit(m) {
  const p = Number(m.p || 0) * 4;
  const c = Number(m.c || 0) * 4;
  const f = Number(m.f || 0) * 9;
  const total = p + c + f;
  return {
    p: total ? (p / total) * 100 : 0,
    c: total ? (c / total) * 100 : 0,
    f: total ? (f / total) * 100 : 0,
  };
}

function nutritionOverviewPanel(title, p = plan(), r = readRecord()) {
  const target = macroGuidance(p);
  const eaten = eatenTotals(p, r);
  const items = eatenItems(p, r);
  const kinds = foodKindCount(items);
  const split = macroEnergySplit(eaten);
  const proteinLeft = Math.max(0, target.proteinMin - eaten.p);
  const carbLeft = Math.max(0, target.carbCap - eaten.c);
  const fatTone = eaten.f >= target.fatMin && eaten.f <= target.fatMax ? "green" : eaten.f > target.fatMax ? "red" : "amber";
  return `<section class="panel overview-panel">
    <div class="section-title"><h2>${title}</h2><small>${items.length} 个食物 · ${fmtKinds(kinds)} 种食材</small></div>
    <div class="overview-grid">
      ${miniMetric("已吃/目标", `${fmt(eaten.kcal)} / ${fmt(target.kcal)} kcal`, eaten.kcal <= target.kcal ? "green" : "red")}
      ${miniMetric("食材种类", `${fmtKinds(kinds)} 种`, kinds >= 6 ? "green" : kinds >= 3 ? "blue" : "amber")}
      ${miniMetric("蛋白还差", `${fmt(proteinLeft, 1)} g`, proteinLeft <= 10 ? "green" : "amber")}
      ${miniMetric("碳水可用", `${fmt(carbLeft, 1)} g`, eaten.c <= target.carbCap ? "blue" : "red")}
      ${miniMetric("脂肪区间", `${fmt(eaten.f, 1)} / ${fmt(target.fatMin, 1)}-${fmt(target.fatMax, 1)} g`, fatTone)}
    </div>
    ${macroSplitBar(split)}
    <div class="macro-ratio-grid">
      <span><b>${fmt(split.c)}%</b> 碳水 · ${fmt(eaten.c, 1)}g</span>
      <span><b>${fmt(split.p)}%</b> 蛋白 · ${fmt(eaten.p, 1)}g</span>
      <span><b>${fmt(split.f)}%</b> 脂肪 · ${fmt(eaten.f, 1)}g</span>
    </div>
  </section>`;
}

function macroSplitBar(split) {
  const c = Math.max(0, split.c);
  const p = Math.max(0, split.p);
  const f = Math.max(0, split.f);
  if (c + p + f <= 0) return `<div class="macro-split empty-split"><span></span></div>`;
  return `<div class="macro-split">
    <span class="carb" style="width:${c}%"></span>
    <span class="protein" style="width:${p}%"></span>
    <span class="fat" style="width:${f}%"></span>
  </div>`;
}

function trainingOverviewPanel(p = plan(), r = readRecord()) {
  const doneExercises = p.exercises.filter((ex) => r.exercises[ex.id]);
  const doneBurn = doneExercises.reduce((sum, ex) => sum + dynamicExerciseKcal(ex), 0);
  const planBurn = dynamicExerciseTotal(p);
  const totalSets = p.exercises.reduce((sum, ex) => sum + Number(ex.sets || 0), 0);
  const doneSets = doneExercises.reduce((sum, ex) => sum + Number(ex.sets || 0), 0);
  const cardio = p.exercises.filter((ex) => ex.name.includes("有氧"));
  const cardioBurn = cardio.reduce((sum, ex) => sum + dynamicExerciseKcal(ex), 0);
  return `<section class="panel overview-panel">
    <div class="section-title"><h2>今日训练概览</h2><small>${p.title} · ${fmt(bodyWeightForDate(), 1)}kg估算</small></div>
    <div class="overview-grid">
      ${miniMetric("已完成消耗", `${fmt(doneBurn)} / ${fmt(planBurn)} kcal`, doneBurn >= planBurn && planBurn > 0 ? "green" : "blue")}
      ${miniMetric("动作完成", `${doneExercises.length} / ${p.exercises.length}`, doneExercises.length === p.exercises.length ? "green" : "red")}
      ${miniMetric("组数完成", `${fmt(doneSets, 1)} / ${fmt(totalSets, 1)} 组`, doneSets >= totalSets && totalSets > 0 ? "green" : "amber")}
      ${miniMetric("有氧估算", `${fmt(cardioBurn)} kcal`, cardioBurn > 0 ? "blue" : "amber")}
    </div>
  </section>`;
}

function unfinishedList(p, r) {
  const exercises = p.exercises.filter((ex) => !r.exercises[ex.id]).slice(0, 3).map((ex) => statusRow(ex.name, `${ex.sets || 0}组 · ${fmt(exerciseKcal(ex))} kcal`, false));
  const foods = p.meals.flatMap((m) => m.items.map((item) => ({ ...item, meal: m.name }))).filter((item) => !r.foods[item.id]).slice(0, 4).map((item) => statusRow(`${item.meal}: ${item.food}`, `${item.amount}${item.unit}`, false));
  const stool = r.stool?.done ? [] : [statusRow("排便", "今天还没记录", false)];
  const rows = [...exercises, ...foods, ...stool];
  return rows.length ? rows.join("") : `<p class="empty">今天目前都完成了。</p>`;
}

function statusRow(title, detail, done) {
  return `<div class="status-row ${done ? "done" : "todo"}"><span></span><div><b>${title}</b><small>${detail}</small></div></div>`;
}

function stoolSummary(s = {}) {
  if (!s.done && !s.time && !s.shape && !s.note) return "未记录";
  return `${s.done ? "已记录" : "已填写"}${s.time ? ` · ${s.time}` : ""}${s.shape ? ` · ${s.shape}` : ""}`;
}

function stoolHistoryRows() {
  const rows = Object.entries(state.store.records || {})
    .filter(([, r]) => r.stool?.done || r.stool?.time || r.stool?.shape || r.stool?.note)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 30)
    .map(([date, r]) => {
      const s = r.stool || {};
      return `<div class="library-row stool-history-row">
        <b>${date} · ${dayName(date)}</b>
        <small>${stoolSummary(s)}${s.note ? ` · ${esc(s.note)}` : ""}</small>
      </div>`;
    });
  return rows.length ? rows.join("") : `<p class="empty compact">还没有排便历史。保存一次后会显示在这里。</p>`;
}

function waterLogDisplayRows(r = readRecord()) {
  if (r.waterLogs?.length) return [...r.waterLogs].sort((a, b) => String(b.time || "").localeCompare(String(a.time || "")));
  if (Number(r.waterMl || 0) > 0) return [{ id: "legacy-water", time: "--:--", amount: Number(r.waterMl || 0), label: "旧记录" }];
  return [];
}

function waterLogRows(r = readRecord()) {
  const rows = waterLogDisplayRows(r);
  if (!rows.length) return `<p class="empty compact">今天还没有饮水记录。点上面的 +250 / +350 / +500 就会自动出现。</p>`;
  return rows.map((log) => `<div class="water-log-row">
    <div><b>${esc(log.time || "--:--")}</b><small>${esc(log.label || "饮水")}</small></div>
    <strong>${fmt(log.amount)} ml</strong>
    ${log.id === "legacy-water" ? "" : `<button data-delete-water-log="${esc(log.id)}" type="button">删除</button>`}
  </div>`).join("");
}

function taskButton(type, id, done, title, detail, badge) {
  return `<button class="task ${done ? "done" : "todo"}" data-check="${type}:${id}" type="button">
    <span class="task-dot"></span><span class="task-text"><b>${title}</b><small>${detail}</small></span><span class="task-badge">${done ? "完成" : badge}</span>
  </button>`;
}

function exerciseRow(ex, done) {
  const sets = Number(ex.sets || 0);
  const kcalPerSet = Number(ex.kcalPerSet || 0);
  const total = exerciseKcal(ex);
  const detail = ex.detail ? ` · ${esc(ex.detail)}` : "";
  return `<div class="exercise-task ${done ? "done" : "todo"}">
    <button class="food-check" data-check="exercise:${ex.id}" type="button"><span class="task-dot"></span></button>
    <div class="food-main"><b>${esc(ex.name)}</b><small>${sets}组 · 每组 ${fmt(kcalPerSet, 1)} kcal · 总 ${fmt(total)} kcal${detail}</small></div>
    <div class="food-actions exercise-actions">
      <button data-adjust-exercise="${ex.id}:-1" type="button">-1组</button>
      <button data-adjust-exercise="${ex.id}:1" type="button">+1组</button>
      <button data-delete-exercise="${ex.id}" type="button">删</button>
    </div>
    <details class="edit-details">
      <summary>编辑</summary>
      <form class="editExerciseForm form-grid">
        <input type="hidden" name="exerciseId" value="${ex.id}" />
        ${field("name", "动作", ex.name, "动作名称")}
        ${field("sets", "组数", sets, "4")}
        ${field("kcalPerSet", "每组 kcal", kcalPerSet, "12")}
        ${field("detail", "备注", ex.detail || "", "重量/次数/时长")}
        <label class="switch-row span-2"><input name="rememberExercise" type="checkbox" checked /> 同步到动作库，以后用这组每组热量</label>
        <button class="primary-button" type="submit">保存</button>
      </form>
    </details>
  </div>`;
}

function mealCard(meal, r) {
  const listed = sumMacros(meal.items);
  const eaten = sumMacros(meal.items.filter((item) => r.foods[item.id]));
  const done = meal.items.filter((item) => r.foods[item.id]).length;
  const estimateOpen = state.estimateMealId === meal.id;
  return `<section class="meal-card">
    <div class="meal-head">
      <div><h3>${meal.name}</h3><small>已吃 ${fmt(eaten.kcal)} kcal · P ${fmt(eaten.p, 1)} / C ${fmt(eaten.c, 1)} / F ${fmt(eaten.f, 1)} · 已列 ${fmt(listed.kcal)} kcal</small></div>
      <div class="meal-actions">
        <button class="estimate-button ${estimateOpen ? "is-active" : ""}" data-estimate-meal="${meal.id}" type="button">+ 估算餐</button>
        <span class="badge ${done === meal.items.length ? "ok" : "warn"}">${done}/${meal.items.length}</span>
      </div>
    </div>
    ${estimateOpen ? estimateMealForm(meal) : ""}
    ${mealChoicePanel(meal)}
    <div class="task-list">
      ${meal.items.map((item) => {
        const m = foodMacro(item);
        const kinds = itemFoodKinds(item);
        const rememberChecked = item.custom ? "" : "checked";
        const step = amountStep(item.unit || "g");
        const baseAmount = Number(item.baseAmount || item.amount || 1);
        return `<div class="food-task ${r.foods[item.id] ? "done" : "todo"}">
          <button class="food-check" data-check="food:${item.id}" type="button"><span class="task-dot"></span></button>
          <div class="food-main"><b>${item.food || item.name}</b><small>${item.amount}${item.unit || ""} · ${fmt(m.kcal)} kcal · P${fmt(m.p, 1)} C${fmt(m.c, 1)} F${fmt(m.f, 1)} · ${fmtKinds(kinds)}种食材</small></div>
          <div class="food-actions">
            <button data-adjust="${meal.id}:${item.id}:${-step}" type="button">-${step}</button>
            <button data-adjust="${meal.id}:${item.id}:${step}" type="button">+${step}</button>
            <button data-delete-food="${meal.id}:${item.id}" type="button">删</button>
          </div>
          <details class="edit-details">
            <summary>编辑</summary>
            <form class="editFoodForm form-grid" data-base-amount="${baseAmount}" data-base-kcal="${fmt(m.kcal, 4)}" data-base-p="${fmt(m.p, 4)}" data-base-c="${fmt(m.c, 4)}" data-base-f="${fmt(m.f, 4)}">
              <input type="hidden" name="mealId" value="${meal.id}" />
              <input type="hidden" name="itemId" value="${item.id}" />
              ${field("name", "名称", item.food || item.name || "", "食物名称")}
              ${field("amount", `数量(${item.unit || "g"})`, item.amount || "", "100")}
              ${field("unit", "单位", item.unit || "g", "g/份/颗/ml")}
              ${field("kcal", "热量 kcal", fmt(m.kcal, 1), "300")}
              ${field("p", "蛋白 g", fmt(m.p, 1), "25")}
              ${field("c", "碳水 g", fmt(m.c, 1), "40")}
              ${field("f", "脂肪 g", fmt(m.f, 1), "10")}
              ${field("kinds", "食材种类数", fmtKinds(kinds), "1")}
              <label class="switch-row span-2"><input name="rememberFood" type="checkbox" ${rememberChecked} /> 同步到食物库，以后都用这组数据</label>
              <button class="primary-button" type="submit">保存</button>
            </form>
          </details>
        </div>`;
      }).join("")}
    </div>
  </section>`;
}

function mealChoicePanel(meal) {
  const choices = mealChoices(meal);
  if (!choices.length) return "";
  return `<details class="choice-panel" data-choice-panel="${meal.id}">
    <summary>可选食物 · 全部食物库</summary>
    <label class="choice-search"><span>搜索</span><input type="search" data-choice-search="${meal.id}" placeholder="输入食物名，比如卤牛肉、沙拉、凉皮" /></label>
    <div class="choice-search-meta"><span data-choice-count="${meal.id}">${choices.length} 个可选</span></div>
    <div class="choice-list">
      ${choices.map(([food, amount]) => choiceRow(meal, food, amount)).join("")}
    </div>
  </details>`;
}

function mealChoices(meal) {
  return foodNames().map((food) => [food, defaultChoiceAmount(food)]);
}

function defaultChoiceAmount(food) {
  const lib = foodDef(food);
  if (DEFAULT_CHOICE_AMOUNTS[food] !== undefined) return DEFAULT_CHOICE_AMOUNTS[food];
  if (lib?.perUnit) return 1;
  if (lib?.unit === "ml") return 100;
  if (lib?.unit === "颗") return 6;
  return 100;
}

function choiceRow(meal, food, amount) {
  const lib = foodDef(food);
  const unit = lib?.unit || "g";
  const macro = scaleMacro(lib, amount);
  const searchText = `${food} ${lib?.note || ""}`.toLowerCase();
  return `<div class="choice-row" data-choice-row="${esc(searchText)}">
    <div><b>${esc(food)}</b><small>${amount}${unit} · ${fmt(macro.kcal)} kcal · P${fmt(macro.p, 1)} C${fmt(macro.c, 1)} F${fmt(macro.f, 1)} · ${fmtKinds(foodKindValue(food, lib || {}))}种食材</small></div>
    <button data-choice-meal="${meal.id}" data-choice-food="${esc(food)}" data-choice-amount="${amount}" type="button">加入</button>
  </div>`;
}

function estimateMealForm(meal) {
  const preview = estimateMealMacros({ portion: "medium", oil: "normal", carb: "medium", protein: "medium" });
  return `<form class="estimateMealForm estimate-panel">
    <input type="hidden" name="mealId" value="${meal.id}" />
    <div class="form-grid">
      ${field("name", "菜名", "", "毛豆米烧鸡 / 蛏子粉丝")}
      <label class="field"><span>份量</span><select name="portion">
        <option value="small">小份</option>
        <option value="medium" selected>中份</option>
        <option value="large">大份</option>
        <option value="feast">聚餐/很大份</option>
      </select></label>
      <label class="field"><span>油量</span><select name="oil">
        <option value="low">少油</option>
        <option value="normal" selected>正常</option>
        <option value="high">油多</option>
        <option value="veryHigh">重油/红烧</option>
      </select></label>
      <label class="field"><span>主食/粉丝/豆类</span><select name="carb">
        <option value="none">没有</option>
        <option value="low">少</option>
        <option value="medium" selected>中等</option>
        <option value="high">多</option>
      </select></label>
      <label class="field"><span>蛋白质</span><select name="protein">
        <option value="low">少</option>
        <option value="medium" selected>中等</option>
        <option value="high">多</option>
      </select></label>
      ${field("kinds", "食材种类数", "3", "比如 3")}
      ${field("note", "备注", "", "比如粉丝多、盘底有油", "span-2")}
    </div>
    <div class="estimate-preview">${estimatePreviewText(preview)}</div>
    <div class="estimate-actions">
      <button class="plain-button" data-estimate-close="1" type="button">收起</button>
      <button class="primary-button" type="submit">加入${meal.name}</button>
    </div>
  </form>`;
}

function addFoodPanel(p) {
  const names = foodNames();
  const foodOptions = names.map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join("");
  const mealOptions = p.meals.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");
  const chips = names.slice(0, 10).map((name) => `<button class="food-chip" data-food-chip="${esc(name)}" type="button">${esc(name)}</button>`).join("");
  return `<section class="panel food-entry-panel">
    <div class="section-title"><h2>记录食物</h2><small>新食物录一次，以后直接搜</small></div>
    <form id="addFoodForm" class="food-entry-form">
      <div class="form-grid">
        <label class="field"><span>餐次</span><select name="mealId">${mealOptions}</select></label>
        <label class="field"><span>食物名</span><input name="food" list="foodLibraryList" placeholder="输入或搜索食物" autocomplete="off" /></label>
        ${field("amount", "本次数量", "", "如 150")}
        <label class="field"><span>单位</span><input name="unit" value="g" placeholder="g/ml/个/颗/份" /></label>
        <label class="field span-2"><span>计算方式</span><select name="mode">
          <option value="per100">按每100g/ml计算</option>
          <option value="perUnit">按每个/颗/份计算</option>
        </select></label>
      </div>
      <datalist id="foodLibraryList">${foodOptions}</datalist>
      <details class="nutrition-details">
        <summary>第一次录入或修正营养</summary>
        <div class="form-grid nutrition-grid">
          ${field("kcal", "热量", "", "每100g或每单位")}
          ${field("p", "蛋白质 g", "", "每100g或每单位")}
          ${field("c", "碳水 g", "", "每100g或每单位")}
          ${field("f", "脂肪 g", "", "每100g或每单位")}
          ${field("kinds", "食材种类数", "1", "比如 1")}
        </div>
      </details>
      <div class="food-preview" id="foodPreview">输入食物和重量后自动计算</div>
      <div class="chip-row">${chips}</div>
      <button class="primary-button full-button" type="submit">加入这顿饭</button>
    </form>
  </section>`;
}

function foodLibraryEditor() {
  const names = foodNames();
  const rows = names.length
    ? names.map((name) => libraryFoodRow(name, foodDef(name))).join("")
    : `<p class="empty compact">食物库目前是空的，可以先添加一个常吃食物。</p>`;
  return `<section class="panel library-editor-panel">
    <div class="section-title"><h2>食物库</h2><small><span data-library-count>${names.length} 个食物</span> · 保存后同步餐单</small></div>
    <label class="choice-search library-search"><span>搜索食物</span><input type="search" data-library-search placeholder="输入食物名，比如沙拉、卤牛肉、凉皮" /></label>
    <details class="nutrition-details add-library-details">
      <summary>添加新食物</summary>
      <form id="addLibraryFoodForm" class="form-grid library-food-form">
        ${libraryFoodFields("", { unit: "g", kcal: "", p: "", c: "", f: "", kinds: 1, note: "", perUnit: false })}
        <button class="primary-button span-2" type="submit">保存到食物库</button>
      </form>
    </details>
    <div class="library-list full-library-list">${rows}</div>
  </section>`;
}

function libraryFoodFields(name, f) {
  return `${field("name", "名称", name, "食物名称")}
    ${field("unit", "单位", f.unit || "g", "g/ml/份/个/颗")}
    <label class="field span-2"><span>计算方式</span><select name="mode">
      <option value="per100" ${f.perUnit ? "" : "selected"}>按每100g/ml计算</option>
      <option value="perUnit" ${f.perUnit ? "selected" : ""}>按每个/颗/份计算</option>
    </select></label>
    ${field("kcal", "热量 kcal", f.kcal ?? "", "每100g或每单位")}
    ${field("p", "蛋白 g", f.p ?? "", "每100g或每单位")}
    ${field("c", "碳水 g", f.c ?? "", "每100g或每单位")}
    ${field("f", "脂肪 g", f.f ?? "", "每100g或每单位")}
    ${field("kinds", "食材种类数", fmtKinds(foodKindValue(name, f)), "比如 1")}
    ${field("note", "备注", f.note || "", "包装来源/估算说明", "span-2")}`;
}

function libraryFoodRow(name, f) {
  if (!f) return "";
  const mode = f.perUnit ? `每${f.unit || "单位"}` : `每100${f.unit || "g"}`;
  const source = FOOD_LIBRARY[name] ? "内置" : "自建";
  const searchText = `${name} ${f.note || ""} ${source}`.toLowerCase();
  return `<details class="library-row" data-library-row="${esc(searchText)}">
    <summary>
      <span><b>${esc(name)}</b><small>${source} · ${mode} · ${fmt(f.kcal)} kcal · P${fmt(f.p, 1)} C${fmt(f.c, 1)} F${fmt(f.f, 1)} · ${fmtKinds(foodKindValue(name, f))}种食材${f.note ? ` · ${esc(f.note)}` : ""}</small></span>
    </summary>
    <form class="editLibraryFoodForm form-grid library-food-form">
      <input type="hidden" name="originalName" value="${esc(name)}" />
      ${libraryFoodFields(name, f)}
      <button class="primary-button" type="submit">保存修改</button>
      <button class="plain-button danger-button" data-delete-library-food="${esc(name)}" type="button">删除食物</button>
    </form>
  </details>`;
}

function exerciseLibraryEditor() {
  const names = exerciseNames();
  const rows = names.length
    ? names.map((name) => exerciseLibraryRow(name, exerciseDef(name))).join("")
    : `<p class="empty compact">动作库目前是空的，可以先添加一个常练动作。</p>`;
  return `<section class="panel library-editor-panel">
    <div class="section-title"><h2>动作库</h2><small><span data-exercise-library-count>${names.length} 个动作</span></small></div>
    <label class="choice-search library-search"><span>搜索动作</span><input type="search" data-exercise-library-search placeholder="输入动作名，比如卧推、划船、深蹲" /></label>
    <details class="nutrition-details add-library-details">
      <summary>添加新动作</summary>
      <form id="addLibraryExerciseForm" class="form-grid library-food-form">
        ${exerciseLibraryFields("", { kcalPerSet: "", detail: "", note: "" })}
        <button class="primary-button span-2" type="submit">保存到动作库</button>
      </form>
    </details>
    <div class="library-list full-library-list">${rows}</div>
  </section>`;
}

function exerciseLibraryFields(name, ex) {
  return `${field("name", "动作", name, "动作名称")}
    ${field("kcalPerSet", "每组 kcal", ex.kcalPerSet ?? "", "12")}
    ${field("detail", "默认备注", ex.detail || "", "重量/次数/时长", "span-2")}
    ${field("note", "说明", ex.note || "", "估算依据", "span-2")}`;
}

function exerciseLibraryRow(name, ex) {
  if (!ex) return "";
  const source = EXERCISE_LIBRARY[name] ? "内置" : "自建";
  const searchText = `${name} ${ex.detail || ""} ${ex.note || ""} ${source}`.toLowerCase();
  return `<details class="library-row" data-exercise-library-row="${esc(searchText)}">
    <summary>
      <span><b>${esc(name)}</b><small>${source} · 每组 ${fmt(ex.kcalPerSet, 1)} kcal${ex.detail ? ` · ${esc(ex.detail)}` : ""}${ex.note ? ` · ${esc(ex.note)}` : ""}</small></span>
    </summary>
    <form class="editLibraryExerciseForm form-grid library-food-form">
      <input type="hidden" name="originalName" value="${esc(name)}" />
      ${exerciseLibraryFields(name, ex)}
      <button class="primary-button" type="submit">保存修改</button>
      <button class="plain-button danger-button" data-delete-library-exercise="${esc(name)}" type="button">删除动作</button>
    </form>
  </details>`;
}

function foodNames() {
  return Object.keys(state.store.foods).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function estimateMealMacros(input) {
  const portion = {
    small: { kcal: 360, p: 24, c: 22, f: 18 },
    medium: { kcal: 600, p: 35, c: 45, f: 28 },
    large: { kcal: 850, p: 45, c: 70, f: 38 },
    feast: { kcal: 1100, p: 55, c: 95, f: 52 },
  }[input.portion || "medium"];
  const oil = {
    low: { kcal: -100, f: -11 },
    normal: { kcal: 0, f: 0 },
    high: { kcal: 220, f: 24 },
    veryHigh: { kcal: 380, f: 42 },
  }[input.oil || "normal"];
  const carb = {
    none: { kcal: -180, c: -45 },
    low: { kcal: -90, c: -22 },
    medium: { kcal: 0, c: 0 },
    high: { kcal: 180, c: 45 },
  }[input.carb || "medium"];
  const protein = {
    low: { kcal: -80, p: -18, f: -2 },
    medium: { kcal: 0, p: 0, f: 0 },
    high: { kcal: 120, p: 28, f: 2 },
  }[input.protein || "medium"];
  return clampMacro({
    kcal: portion.kcal + oil.kcal + carb.kcal + protein.kcal,
    p: portion.p + protein.p,
    c: portion.c + carb.c,
    f: portion.f + oil.f + protein.f,
  });
}

function clampMacro(m) {
  return {
    kcal: Math.max(80, Math.round(m.kcal)),
    p: Math.max(0, Math.round(m.p * 10) / 10),
    c: Math.max(0, Math.round(m.c * 10) / 10),
    f: Math.max(0, Math.round(m.f * 10) / 10),
  };
}

function estimatePreviewText(m) {
  return `估算 ${fmt(m.kcal)} kcal · 蛋白 ${fmt(m.p, 1)}g · 碳水 ${fmt(m.c, 1)}g · 脂肪 ${fmt(m.f, 1)}g`;
}

function field(name, label, value, placeholder, extra = "") {
  return `<label class="field ${extra}"><span>${label}</span><input name="${name}" value="${esc(value)}" inputmode="${name.includes("note") || name === "name" ? "text" : "decimal"}" placeholder="${placeholder}" /></label>`;
}

function selectField(name, label, options, value) {
  return `<label class="field"><span>${label}</span><select name="${name}">${options.map((o) => `<option value="${esc(o)}" ${o === value ? "selected" : ""}>${o || "未选择"}</option>`).join("")}</select></label>`;
}

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function drawBodyChart() {
  const canvas = document.getElementById("bodyChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const dates = Array.from({ length: 30 }, (_, i) => addDays(state.date, i - 29));
  const points = dates.map((date, i) => ({
    i,
    date,
    weight: Number(readRecord(date).body?.weight || 0),
    bodyFat: Number(readRecord(date).body?.bodyFat || 0),
  }));
  const weightPoints = points.filter((p) => p.weight > 0);
  const fatPoints = points.filter((p) => p.bodyFat > 0);
  const plot = { left: 54, right: width - 34, top: 62, bottom: height - 42 };

  ctx.clearRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0, "#ffffff");
  bg.addColorStop(1, "#f3f8f9");
  ctx.fillStyle = bg;
  roundedRect(ctx, 0, 0, width, height, 18);
  ctx.fill();

  ctx.fillStyle = "#172229";
  ctx.font = "700 22px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("最近30天趋势", 22, 32);
  drawLegend(ctx, 410, 21, "#16935f", "体重 kg");
  drawLegend(ctx, 510, 21, "#2878a8", "体脂 %");

  if (!weightPoints.length && !fatPoints.length) {
    ctx.fillStyle = "#667681";
    ctx.font = "600 18px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("保存体重或体脂后显示趋势", 198, 162);
    return;
  }

  drawGrid(ctx, plot);
  drawBodySeries(ctx, points, "weight", "#16935f", plot);
  drawBodySeries(ctx, points, "bodyFat", "#2878a8", plot);

  ctx.fillStyle = "#667681";
  ctx.font = "600 12px -apple-system, BlinkMacSystemFont, sans-serif";
  [0, 7, 14, 21, 29].forEach((idx) => {
    const x = xForIndex(idx, points.length, plot);
    ctx.fillText(points[idx].date.slice(5), x - 15, height - 18);
  });
}

function drawGrid(ctx, plot) {
  ctx.strokeStyle = "#dfe8eb";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = plot.top + ((plot.bottom - plot.top) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(plot.left, y);
    ctx.lineTo(plot.right, y);
    ctx.stroke();
  }
}

function drawBodySeries(ctx, points, key, color, plot) {
  const valid = points.filter((p) => p[key] > 0);
  if (!valid.length) return;
  const values = valid.map((p) => p[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.max((max - min) * 0.18, key === "weight" ? 1 : 0.5);
  const lo = min - pad;
  const hi = max + pad;
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  valid.forEach((p, idx) => {
    const x = xForIndex(p.i, points.length, plot);
    const y = plot.bottom - ((p[key] - lo) / Math.max(0.01, hi - lo)) * (plot.bottom - plot.top);
    if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  valid.forEach((p) => {
    const x = xForIndex(p.i, points.length, plot);
    const y = plot.bottom - ((p[key] - lo) / Math.max(0.01, hi - lo)) * (plot.bottom - plot.top);
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  const last = valid[valid.length - 1];
  const lx = xForIndex(last.i, points.length, plot);
  const ly = plot.bottom - ((last[key] - lo) / Math.max(0.01, hi - lo)) * (plot.bottom - plot.top);
  ctx.fillStyle = color;
  ctx.font = "800 13px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(`${fmt(last[key], 1)}${key === "weight" ? "kg" : "%"}`, Math.min(lx + 8, plot.right - 50), ly - 8);
}

function xForIndex(i, total, plot) {
  return plot.left + (i / Math.max(1, total - 1)) * (plot.right - plot.left);
}

function drawLegend(ctx, x, y, color, label) {
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(x, y - 4, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#667681";
  ctx.font = "700 12px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(label, x + 10, y);
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

document.addEventListener("click", async (e) => {
  const dateBtn = e.target.closest("[data-date]");
  if (dateBtn) { state.date = dateBtn.dataset.date; render({ centerDate: true }); return; }
  const tabBtn = e.target.closest("[data-tab]");
  if (tabBtn) { state.tab = tabBtn.dataset.tab; render(); return; }
  if (e.target.closest("#prevWeek")) { state.date = addDays(state.date, -7); render({ centerDate: true }); return; }
  if (e.target.closest("#nextWeek")) { state.date = addDays(state.date, 7); render({ centerDate: true }); return; }
  if (e.target.closest("#weekLabel")) { state.date = initialDate(); render({ centerDate: true }); return; }
  if (e.target.closest("#importBtn")) { document.getElementById("importFile").click(); return; }
  const chip = e.target.closest("[data-food-chip]");
  if (chip) {
    const form = document.getElementById("addFoodForm");
    if (form) {
      form.elements.food.value = chip.dataset.foodChip;
      syncFoodForm(form, true);
    }
    return;
  }
  const estimateBtn = e.target.closest("[data-estimate-meal]");
  if (estimateBtn) {
    state.estimateMealId = state.estimateMealId === estimateBtn.dataset.estimateMeal ? "" : estimateBtn.dataset.estimateMeal;
    renderPreservingScroll();
    return;
  }
  const choiceBtn = e.target.closest("[data-choice-food]");
  if (choiceBtn) {
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === choiceBtn.dataset.choiceMeal);
    const food = choiceBtn.dataset.choiceFood;
    if (meal && food) {
      meal.items.push({
        id: uid("food"),
        food,
        amount: Number(choiceBtn.dataset.choiceAmount || 0),
        unit: foodDef(food)?.unit || "g",
      });
      saveStore();
      renderPreservingScroll();
    }
    return;
  }
  if (e.target.closest("[data-estimate-close]")) {
    state.estimateMealId = "";
    renderPreservingScroll();
    return;
  }
  const check = e.target.closest("[data-check]");
  if (check) {
    const r = record();
    const [type, id] = check.dataset.check.split(":");
    if (type === "exercise") r.exercises[id] = !r.exercises[id];
    if (type === "food") r.foods[id] = !r.foods[id];
    saveStore(); renderPreservingScroll(); return;
  }
  const addWater = e.target.closest("[data-water-add]");
  if (addWater) { const r = record(); addWaterLog(r, Number(addWater.dataset.waterAdd), "快速记录"); saveStore(); renderPreservingScroll(); return; }
  if (e.target.closest("[data-water-reset]")) { const r = record(); r.waterMl = 0; r.waterSlots = {}; r.waterSlotLogs = {}; r.waterLogs = []; saveStore(); renderPreservingScroll(); return; }
  const deleteWaterLog = e.target.closest("[data-delete-water-log]");
  if (deleteWaterLog) { const r = record(); removeWaterLog(r, deleteWaterLog.dataset.deleteWaterLog); saveStore(); renderPreservingScroll(); return; }
  const adjust = e.target.closest("[data-adjust]");
  if (adjust) {
    const [mealId, itemId, delta] = adjust.dataset.adjust.split(":");
    const p = editablePlan();
    const item = p.meals.find((m) => m.id === mealId)?.items.find((x) => x.id === itemId);
    if (item) {
      const originalFood = item.food || item.name;
      item.amount = cleanAmount(Number(item.amount || 0) + Number(delta), item.unit || "g");
      syncFutureFoodEdit(originalFood, item);
    }
    saveStore(); renderPreservingScroll(); return;
  }
  const adjustExercise = e.target.closest("[data-adjust-exercise]");
  if (adjustExercise) {
    const [exerciseId, delta] = adjustExercise.dataset.adjustExercise.split(":");
    const p = editablePlan();
    const ex = p.exercises.find((x) => x.id === exerciseId);
    if (ex) ex.sets = Math.max(0, Math.round((Number(ex.sets || 0) + Number(delta)) * 10) / 10);
    saveStore(); renderPreservingScroll(); return;
  }
  const deleteExercise = e.target.closest("[data-delete-exercise]");
  if (deleteExercise) {
    const p = editablePlan();
    p.exercises = p.exercises.filter((x) => x.id !== deleteExercise.dataset.deleteExercise);
    delete record().exercises[deleteExercise.dataset.deleteExercise];
    saveStore(); renderPreservingScroll(); return;
  }
  const del = e.target.closest("[data-delete-food]");
  if (del) {
    const [mealId, itemId] = del.dataset.deleteFood.split(":");
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === mealId);
    const item = meal?.items.find((x) => x.id === itemId);
    if (item) syncFutureFoodDelete(item.food || item.name);
    if (meal) meal.items = meal.items.filter((x) => x.id !== itemId);
    delete record().foods[itemId];
    saveStore(); renderPreservingScroll(); return;
  }
  const libraryDelete = e.target.closest("[data-delete-library-food]");
  if (libraryDelete) {
    const name = libraryDelete.dataset.deleteLibraryFood;
    if (!name) return;
    if (!confirm(`删除“${name}”？已经加到饮食里的记录会保留当时的营养数据。`)) return;
    deleteFoodFromLibrary(name);
    saveStore();
    renderPreservingScroll();
    return;
  }
  const exerciseLibraryDelete = e.target.closest("[data-delete-library-exercise]");
  if (exerciseLibraryDelete) {
    const name = exerciseLibraryDelete.dataset.deleteLibraryExercise;
    if (!name) return;
    if (!confirm(`删除动作“${name}”？已经加到训练计划里的动作会保留。`)) return;
    deleteExerciseDef(name);
    saveStore();
    renderPreservingScroll();
    return;
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if (e.target.id === "bodyForm") {
    record().body = { weight: data.get("weight") || "", bodyFat: data.get("bodyFat") || "", waist: data.get("waist") || "", note: data.get("note") || "" };
  }
  if (e.target.id === "stoolForm") {
    const time = data.get("time") || "";
    const shape = data.get("shape") || "";
    const note = data.get("stoolNote") || "";
    record().stool = { done: data.get("done") === "on" || !!time || !!shape || !!note, time, shape, note };
  }
  if (e.target.id === "waterLogForm") {
    const r = record();
    addWaterLog(r, Number(data.get("amount") || 0), "手动补录", data.get("time") || currentTimeText());
  }
  if (e.target.id === "addFoodForm") {
    const p = editablePlan();
    const food = String(data.get("food") || "").trim();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    const amount = Number(data.get("amount") || 0);
    const manual = ["kcal", "p", "c", "f"].some((key) => String(data.get(key) || "").trim() !== "");
    if (meal && food) {
      if (!foodDef(food) || manual) {
        const nextFood = foodFromForm(data);
        if (!nextFood) {
          alert("这个食物还没在食物库里。请先展开“第一次录入或修正营养”，填每100g或每单位的营养。");
          return;
        }
        upsertFood(food, nextFood);
        syncFoodReferences(food);
      }
      meal.items.push({ id: uid("food"), food, amount, unit: foodDef(food)?.unit || data.get("unit") || "g" });
    }
  }
  if (e.target.id === "addLibraryFoodForm") {
    const name = String(data.get("name") || "").trim();
    const nextFood = foodFromForm(data);
    if (!name || !nextFood) {
      alert("请填写食物名称，以及至少一项有效的热量或宏量营养。");
      return;
    }
    upsertFood(name, nextFood);
    syncFoodReferences(name);
  }
  if (e.target.id === "addLibraryExerciseForm") {
    const name = String(data.get("name") || "").trim();
    const kcalPerSet = Number(data.get("kcalPerSet") || 0);
    if (!name || !Number.isFinite(kcalPerSet)) {
      alert("请填写动作名称和每组热量。");
      return;
    }
    upsertExerciseDef(name, { kcalPerSet, detail: data.get("detail") || "", note: data.get("note") || "" });
  }
  if (e.target.classList.contains("editLibraryFoodForm")) {
    const originalName = String(data.get("originalName") || "").trim();
    const name = String(data.get("name") || "").trim();
    const nextFood = foodFromForm(data);
    if (!name || !nextFood) {
      alert("请填写食物名称，以及至少一项有效的热量或宏量营养。");
      return;
    }
    if (originalName && originalName !== name) {
      renameFoodReferences(originalName, name);
      deleteFoodFromLibrary(originalName);
    }
    upsertFood(name, nextFood);
    syncFoodReferences(name);
  }
  if (e.target.classList.contains("editLibraryExerciseForm")) {
    const originalName = String(data.get("originalName") || "").trim();
    const name = String(data.get("name") || "").trim();
    const kcalPerSet = Number(data.get("kcalPerSet") || 0);
    if (!name || !Number.isFinite(kcalPerSet)) {
      alert("请填写动作名称和每组热量。");
      return;
    }
    if (originalName && originalName !== name) deleteExerciseDef(originalName);
    upsertExerciseDef(name, { kcalPerSet, detail: data.get("detail") || "", note: data.get("note") || "" });
  }
  if (e.target.id === "customFoodForm") {
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    if (meal) meal.items.push({ id: uid("custom"), custom: true, food: data.get("name") || "自定义食物", name: data.get("name") || "自定义食物", amount: 1, unit: "份", kcal: Number(data.get("kcal") || 0), p: Number(data.get("p") || 0), c: Number(data.get("c") || 0), f: Number(data.get("f") || 0), kinds: foodKindValue(data.get("name") || "自定义食物", { kinds: data.get("kinds") }) });
  }
  if (e.target.classList.contains("estimateMealForm")) {
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    const macro = estimateMealMacros({
      portion: data.get("portion"),
      oil: data.get("oil"),
      carb: data.get("carb"),
      protein: data.get("protein"),
    });
    if (meal) {
      const name = String(data.get("name") || "").trim() || "估算餐";
      meal.items.push({
        id: uid("estimate"),
        custom: true,
        food: name,
        name,
        amount: 1,
        unit: "份",
        kcal: macro.kcal,
        p: macro.p,
        c: macro.c,
        f: macro.f,
        kinds: foodKindValue(name, { kinds: data.get("kinds") || 3 }),
        note: data.get("note") || "",
      });
      state.estimateMealId = "";
    }
  }
  if (e.target.classList.contains("editFoodForm")) {
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    const item = meal?.items.find((x) => x.id === data.get("itemId"));
    if (item) {
      const originalFood = item.food || item.name;
      const name = String(data.get("name") || item.food || "自定义食物").trim();
      const amount = Number(data.get("amount") || 0);
      const unit = String(data.get("unit") || "g").trim() || "g";
      const macro = { kcal: Number(data.get("kcal") || 0), p: Number(data.get("p") || 0), c: Number(data.get("c") || 0), f: Number(data.get("f") || 0) };
      const kinds = foodKindValue(name, { kinds: data.get("kinds") });
      if (data.get("rememberFood") === "on") {
        const perUnit = ["份", "个", "颗"].includes(unit);
        const factor = perUnit ? Math.max(0.01, amount || 1) : Math.max(0.01, amount / 100);
        upsertFood(name, {
          unit,
          kcal: rnd(macro.kcal / factor),
          p: rnd(macro.p / factor),
          c: rnd(macro.c / factor),
          f: rnd(macro.f / factor),
          kinds,
          perUnit,
        });
        syncFoodReferences(name);
        item.custom = false;
        delete item.kcal; delete item.p; delete item.c; delete item.f; delete item.kinds;
      } else {
        item.custom = true;
        item.kcal = macro.kcal;
        item.p = macro.p;
        item.c = macro.c;
        item.f = macro.f;
        item.baseAmount = amount || 1;
        item.kinds = kinds;
      }
      item.food = name;
      item.name = name;
      item.amount = amount;
      item.unit = unit;
      syncFutureFoodEdit(originalFood, item);
    }
  }
  if (e.target.classList.contains("editExerciseForm")) {
    const p = editablePlan();
    const ex = p.exercises.find((x) => x.id === data.get("exerciseId"));
    if (ex) {
      ex.name = String(data.get("name") || ex.name).trim();
      ex.detail = data.get("detail") || "";
      ex.sets = Math.max(0, Number(data.get("sets") || 0));
      ex.kcalPerSet = Math.max(0, Number(data.get("kcalPerSet") || 0));
      delete ex.kcal;
      if (data.get("rememberExercise") === "on") {
        upsertExerciseDef(ex.name, { kcalPerSet: ex.kcalPerSet, detail: ex.detail, note: "" });
      }
    }
  }
  if (e.target.id === "addExerciseForm") {
    const p = editablePlan();
    const name = String(data.get("name") || "新动作").trim();
    const lib = exerciseDef(name);
    const sets = Math.max(0, Number(data.get("sets") || 1));
    const kcalPerSet = Number(data.get("kcalPerSet") || lib?.kcalPerSet || 0);
    const detail = String(data.get("detail") || lib?.detail || "").trim();
    if (name && !exerciseDef(name)) upsertExerciseDef(name, { kcalPerSet, detail, note: "" });
    p.exercises.push({
      id: uid("ex"),
      name,
      detail,
      sets,
      kcalPerSet,
    });
  }
  saveStore();
  renderPreservingScroll();
});

document.addEventListener("input", (e) => {
  const form = e.target.closest("#addFoodForm");
  if (form) syncFoodForm(form, e.target.name === "food");
  const estimateForm = e.target.closest(".estimateMealForm");
  if (estimateForm) syncEstimateForm(estimateForm);
  const editFoodForm = e.target.closest(".editFoodForm");
  if (editFoodForm) syncEditFoodForm(editFoodForm, e.target.name);
  const choiceSearch = e.target.closest("[data-choice-search]");
  if (choiceSearch) syncChoiceSearch(choiceSearch);
  const librarySearch = e.target.closest("[data-library-search]");
  if (librarySearch) syncLibrarySearch(librarySearch);
  const exerciseLibrarySearch = e.target.closest("[data-exercise-library-search]");
  if (exerciseLibrarySearch) syncExerciseLibrarySearch(exerciseLibrarySearch);
  const addExerciseForm = e.target.closest("#addExerciseForm");
  if (addExerciseForm) syncExerciseForm(addExerciseForm, e.target.name === "name");
});

document.addEventListener("change", (e) => {
  if (e.target.closest("#themeSelect")) {
    setTheme(e.target.value);
    return;
  }
  const form = e.target.closest("#addFoodForm");
  if (form) syncFoodForm(form, e.target.name === "food");
  const estimateForm = e.target.closest(".estimateMealForm");
  if (estimateForm) syncEstimateForm(estimateForm);
  const editFoodForm = e.target.closest(".editFoodForm");
  if (editFoodForm) syncEditFoodForm(editFoodForm, e.target.name);
  const choiceSearch = e.target.closest("[data-choice-search]");
  if (choiceSearch) syncChoiceSearch(choiceSearch);
  const librarySearch = e.target.closest("[data-library-search]");
  if (librarySearch) syncLibrarySearch(librarySearch);
  const exerciseLibrarySearch = e.target.closest("[data-exercise-library-search]");
  if (exerciseLibrarySearch) syncExerciseLibrarySearch(exerciseLibrarySearch);
  const addExerciseForm = e.target.closest("#addExerciseForm");
  if (addExerciseForm) syncExerciseForm(addExerciseForm, e.target.name === "name");
});

["keyup", "search", "compositionend"].forEach((eventName) => {
  document.addEventListener(eventName, (e) => {
    const choiceSearch = e.target.closest?.("[data-choice-search]");
    if (choiceSearch) syncChoiceSearch(choiceSearch);
    const librarySearch = e.target.closest?.("[data-library-search]");
    if (librarySearch) syncLibrarySearch(librarySearch);
    const exerciseLibrarySearch = e.target.closest?.("[data-exercise-library-search]");
    if (exerciseLibrarySearch) syncExerciseLibrarySearch(exerciseLibrarySearch);
  });
});

function foodFromForm(data) {
  const unit = String(data.get("unit") || "g").trim() || "g";
  const values = {
    unit,
    kcal: Number(data.get("kcal") || 0),
    p: Number(data.get("p") || 0),
    c: Number(data.get("c") || 0),
    f: Number(data.get("f") || 0),
    kinds: foodKindValue(String(data.get("name") || data.get("food") || ""), { kinds: data.get("kinds") }),
    perUnit: data.get("mode") === "perUnit",
    note: String(data.get("note") || "").trim(),
  };
  if (![values.kcal, values.p, values.c, values.f].some((n) => Number.isFinite(n) && n > 0)) return null;
  return values;
}

function syncFoodForm(form, fillFromLibrary = false) {
  const foodName = String(form.elements.food?.value || "").trim();
  const saved = foodDef(foodName);
  if (saved && fillFromLibrary) {
    form.elements.unit.value = saved.unit || "g";
    form.elements.mode.value = saved.perUnit ? "perUnit" : "per100";
    form.elements.kcal.value = saved.kcal ?? "";
    form.elements.p.value = saved.p ?? "";
    form.elements.c.value = saved.c ?? "";
    form.elements.f.value = saved.f ?? "";
    if (form.elements.kinds) form.elements.kinds.value = fmtKinds(foodKindValue(foodName, saved));
  }
  const candidate = foodFromForm(new FormData(form)) || saved;
  const amount = Number(form.elements.amount?.value || 0);
  const preview = document.getElementById("foodPreview");
  if (!preview) return;
  if (!foodName) {
    preview.textContent = "输入食物和重量后自动计算";
    preview.className = "food-preview";
    return;
  }
  if (!candidate) {
    preview.textContent = "新食物：展开营养区，按包装或食物库填一次营养，以后会自动记住";
    preview.className = "food-preview warn";
    return;
  }
  const macro = scaleMacro(candidate, amount);
  preview.textContent = `${amount || 0}${candidate.unit || ""} ≈ ${fmt(macro.kcal)} kcal · 蛋白 ${fmt(macro.p, 1)}g · 碳水 ${fmt(macro.c, 1)}g · 脂肪 ${fmt(macro.f, 1)}g · ${fmtKinds(foodKindValue(foodName, candidate))}种食材`;
  preview.className = saved ? "food-preview ok" : "food-preview";
}

function syncEstimateForm(form) {
  const data = new FormData(form);
  const preview = form.querySelector(".estimate-preview");
  if (!preview) return;
  const macro = estimateMealMacros({
    portion: data.get("portion"),
    oil: data.get("oil"),
    carb: data.get("carb"),
    protein: data.get("protein"),
  });
  preview.textContent = estimatePreviewText(macro);
}

function syncEditFoodForm(form, changedName) {
  if (changedName !== "amount") return;
  const amount = Number(form.elements.amount?.value || 0);
  const baseAmount = Number(form.dataset.baseAmount || 1);
  const k = baseAmount ? amount / baseAmount : 1;
  ["kcal", "p", "c", "f"].forEach((key) => {
    const input = form.elements[key];
    const base = Number(form.dataset[`base${key[0].toUpperCase()}${key.slice(1)}`] || 0);
    if (input) input.value = fmt(base * k, key === "kcal" ? 1 : 1);
  });
}

function syncChoiceSearch(input) {
  const panel = input.closest(".choice-panel");
  const q = input.value.trim().toLowerCase();
  if (!panel) return;
  const rows = panel.querySelectorAll(".choice-row");
  let shown = 0;
  rows.forEach((row) => {
    const match = !q || String(row.dataset.choiceRow || "").includes(q);
    row.classList.toggle("is-hidden", !match);
    if (match) shown += 1;
  });
  const count = panel.querySelector("[data-choice-count]");
  if (count) count.textContent = q ? `${shown} / ${rows.length} 个匹配` : `${rows.length} 个可选`;
}

function syncLibrarySearch(input) {
  const panel = input.closest(".library-editor-panel");
  const q = input.value.trim().toLowerCase();
  if (!panel) return;
  const rows = panel.querySelectorAll("[data-library-row]");
  let shown = 0;
  rows.forEach((row) => {
    const match = !q || String(row.dataset.libraryRow || "").includes(q);
    row.classList.toggle("is-hidden", !match);
    if (match) shown += 1;
  });
  const count = panel.querySelector("[data-library-count]");
  if (count) count.textContent = q ? `${shown} / ${rows.length} 个匹配` : `${rows.length} 个食物`;
}

function syncExerciseLibrarySearch(input) {
  const panel = input.closest(".library-editor-panel");
  const q = input.value.trim().toLowerCase();
  if (!panel) return;
  const rows = panel.querySelectorAll("[data-exercise-library-row]");
  let shown = 0;
  rows.forEach((row) => {
    const match = !q || String(row.dataset.exerciseLibraryRow || "").includes(q);
    row.classList.toggle("is-hidden", !match);
    if (match) shown += 1;
  });
  const count = panel.querySelector("[data-exercise-library-count]");
  if (count) count.textContent = q ? `${shown} / ${rows.length} 个匹配` : `${rows.length} 个动作`;
}

function syncExerciseForm(form, fillFromLibrary = false) {
  const name = String(form.elements.name?.value || "").trim();
  const lib = exerciseDef(name);
  if (lib && fillFromLibrary) {
    form.elements.kcalPerSet.value = lib.kcalPerSet ?? "";
    if (!form.elements.detail.value) form.elements.detail.value = lib.detail || "";
    if (!form.elements.sets.value) form.elements.sets.value = 4;
  }
  const sets = Number(form.elements.sets?.value || 0);
  const kcalPerSet = Number(form.elements.kcalPerSet?.value || lib?.kcalPerSet || 0);
  const preview = document.getElementById("exercisePreview");
  if (!preview) return;
  if (!name) {
    preview.textContent = "输入动作和组数后自动估算";
    preview.className = "food-preview span-2";
    return;
  }
  preview.textContent = `${sets || 0}组 × ${fmt(kcalPerSet, 1)} kcal = ${fmt(sets * kcalPerSet)} kcal`;
  preview.className = lib ? "food-preview ok span-2" : "food-preview span-2";
}

document.getElementById("exportBtn").addEventListener("click", async () => {
  const blob = await buildXlsx(exportRows(), JSON.stringify(state.store));
  downloadBlob(blob, `cutting-tracker-${state.date}.xlsx`);
});

document.getElementById("importFile").addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    const imported = file.name.endsWith(".json")
      ? JSON.parse(await file.text())
      : await importStoreFromXlsx(await file.arrayBuffer());
    state.store = normalizeStore(imported);
    saveStore();
    render();
    alert("导入完成");
  } catch (err) {
    alert(`导入失败：${err.message || err}`);
  } finally {
    e.target.value = "";
  }
});

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportRows() {
  const dates = Object.keys({ ...Object.fromEntries(weekDates().map((d) => [d, true])), ...state.store.records, ...state.store.plans }).sort();
  const summary = [["日期", "星期", "训练", "目标摄入", "已吃", "总消耗", "计划缺口", "实际缺口", "饮水", "饮水目标", "排便", "体重", "体脂", "腰围"]];
  const foodRows = [["日期", "餐次", "食物", "数量", "单位", "热量", "蛋白", "碳水", "脂肪", "食材种类数", "完成"]];
  const trainRows = [["日期", "训练", "动作", "组数", "每组热量", "总热量", "备注", "完成"]];
  const bodyRows = [["日期", "体重", "体脂", "腰围", "备注"]];
  const stoolRows = [["日期", "是否排便", "时间", "形状", "备注"]];
  const waterRows = [["日期", "时间", "饮水ml", "来源", "目标ml"]];
  for (const date of dates) {
    const p = plan(date);
    const r = readRecord(date);
    const planned = nutritionTargets(p, date);
    const eaten = eatenTotals(p, r);
    const burn = dailyTdee(p, date);
    summary.push([date, p.day, p.title, rnd(planned.kcal), rnd(eaten.kcal), burn, rnd(targetDeficit(p, date)), rnd(burn - eaten.kcal), waterTotal(r), p.waterTarget, r.stool?.done ? "是" : "否", r.body?.weight || "", r.body?.bodyFat || "", r.body?.waist || ""]);
    p.meals.forEach((m) => m.items.forEach((item) => {
      const macro = foodMacro(item);
      foodRows.push([date, m.name, item.food || item.name, item.amount, item.unit || "", rnd(macro.kcal), rnd(macro.p), rnd(macro.c), rnd(macro.f), itemFoodKinds(item), r.foods[item.id] ? "是" : "否"]);
    }));
    p.exercises.forEach((ex) => trainRows.push([date, p.title, ex.name, ex.sets || 0, rnd(ex.kcalPerSet || 0), rnd(exerciseKcal(ex)), ex.detail || "", r.exercises[ex.id] ? "是" : "否"]));
    bodyRows.push([date, r.body?.weight || "", r.body?.bodyFat || "", r.body?.waist || "", r.body?.note || ""]);
    stoolRows.push([date, r.stool?.done ? "是" : "否", r.stool?.time || "", r.stool?.shape || "", r.stool?.note || ""]);
    const logs = waterLogDisplayRows(r);
    if (logs.length) logs.forEach((log) => waterRows.push([date, log.time || "", log.amount || 0, log.label || "", p.waterTarget]));
    else waterRows.push([date, "", 0, "", p.waterTarget]);
  }
  const foodLib = [["食物", "单位", "热量", "蛋白", "碳水", "脂肪", "食材种类数", "计算方式", "备注"], ...Object.entries(state.store.foods).map(([name, f]) => [name, f.unit, f.kcal, f.p, f.c, f.f, foodKindValue(name, f), f.perUnit ? "每单位" : "每100g/ml", f.note || ""])];
  const exerciseLib = [["动作", "每组热量", "默认备注", "说明"], ...Object.entries(state.store.exerciseLibrary || {}).map(([name, ex]) => [name, ex.kcalPerSet || 0, ex.detail || "", ex.note || ""])];
  return { "概览": summary, "饮食记录": foodRows, "训练记录": trainRows, "饮水记录": waterRows, "身体记录": bodyRows, "排便记录": stoolRows, "食物库": foodLib, "动作库": exerciseLib };
}

function rnd(n) {
  return Math.round(Number(n || 0) * 10) / 10;
}

function precise(n, d = 4) {
  const x = Number(n || 0);
  return Number.isFinite(x) ? Number(x.toFixed(d)) : 0;
}

async function buildXlsx(sheets, storeJson) {
  const appData = btoa(unescape(encodeURIComponent(storeJson))).match(/.{1,30000}/g) || [""];
  sheets["AppData"] = [["CUTTING_TRACKER_EXPORT_V2"], ...appData.map((x) => [x])];
  const names = Object.keys(sheets);
  const files = {
    "[Content_Types].xml": contentTypes(names.length),
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`,
    "xl/workbook.xml": workbookXml(names),
    "xl/_rels/workbook.xml.rels": workbookRels(names.length),
  };
  names.forEach((name, i) => { files[`xl/worksheets/sheet${i + 1}.xml`] = sheetXml(sheets[name]); });
  return new Blob([zipStore(files)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

function contentTypes(count) {
  return `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${Array.from({ length: count }, (_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`;
}

function workbookXml(names) {
  return `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${names.map((n, i) => `<sheet name="${xml(n)}" sheetId="${i + 1}" r:id="rId${i + 1}"${n === "AppData" ? ' state="hidden"' : ""}/>`).join("")}</sheets></workbook>`;
}

function workbookRels(count) {
  return `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${Array.from({ length: count }, (_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")}</Relationships>`;
}

function sheetXml(rows) {
  return `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rows.map((row, r) => `<row r="${r + 1}">${row.map((v, c) => cellXml(v, r + 1, c + 1)).join("")}</row>`).join("")}</sheetData></worksheet>`;
}

function cellXml(v, r, c) {
  const ref = `${col(c)}${r}`;
  if (typeof v === "number" && Number.isFinite(v)) return `<c r="${ref}"><v>${v}</v></c>`;
  return `<c r="${ref}" t="inlineStr"><is><t>${xml(v ?? "")}</t></is></c>`;
}

function col(n) {
  let s = "";
  while (n) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - m) / 26); }
  return s;
}

function xml(v) {
  return String(v).replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
}

function zipStore(files) {
  const enc = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;
  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = enc.encode(name);
    const data = enc.encode(content);
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true); lv.setUint16(4, 20, true); lv.setUint16(8, 0, true); lv.setUint32(14, crc, true); lv.setUint32(18, data.length, true); lv.setUint32(22, data.length, true); lv.setUint16(26, nameBytes.length, true);
    local.set(nameBytes, 30);
    chunks.push(local, data);
    const cen = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(cen.buffer);
    cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint32(16, crc, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, nameBytes.length, true); cv.setUint32(42, offset, true);
    cen.set(nameBytes, 46); central.push(cen);
    offset += local.length + data.length;
  });
  const centralSize = central.reduce((a, b) => a + b.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, central.length, true); ev.setUint16(10, central.length, true); ev.setUint32(12, centralSize, true); ev.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, end]);
}

function crc32(bytes) {
  let c = -1;
  for (let i = 0; i < bytes.length; i++) {
    c ^= bytes[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return (c ^ -1) >>> 0;
}

async function importStoreFromXlsx(buffer) {
  const files = await unzip(buffer);
  const app = files["xl/worksheets/sheet" + appDataSheetNumber(files["xl/workbook.xml"]) + ".xml"];
  if (!app) throw new Error("没有找到AppData工作表");
  const rows = parseSheetTexts(app);
  if (rows[0]?.[0] !== "CUTTING_TRACKER_EXPORT_V2") throw new Error("不是本App导出的Excel");
  const json = decodeURIComponent(escape(atob(rows.slice(1).map((r) => r[0] || "").join(""))));
  return JSON.parse(json);
}

function appDataSheetNumber(workbook) {
  const match = workbook.match(/<sheet[^>]*name="AppData"[^>]*sheetId="(\d+)"/);
  if (!match) throw new Error("没有找到AppData");
  return match[1];
}

function parseSheetTexts(xmlText) {
  const rows = [];
  for (const row of xmlText.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
    const cells = [];
    for (const c of row[1].matchAll(/<c[^>]*>([\s\S]*?)<\/c>/g)) {
      const t = c[1].match(/<t[^>]*>([\s\S]*?)<\/t>/)?.[1] || c[1].match(/<v>([\s\S]*?)<\/v>/)?.[1] || "";
      cells.push(t.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"));
    }
    rows.push(cells);
  }
  return rows;
}

async function unzip(buffer) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  const dec = new TextDecoder();
  const files = {};
  for (let i = 0; i < bytes.length - 4; i++) {
    if (view.getUint32(i, true) !== 0x04034b50) continue;
    const method = view.getUint16(i + 8, true);
    const compSize = view.getUint32(i + 18, true);
    const nameLen = view.getUint16(i + 26, true);
    const extraLen = view.getUint16(i + 28, true);
    const name = dec.decode(bytes.slice(i + 30, i + 30 + nameLen));
    const start = i + 30 + nameLen + extraLen;
    const data = bytes.slice(start, start + compSize);
    if (method === 0) files[name] = dec.decode(data);
    else if (method === 8 && "DecompressionStream" in window) {
      const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
      files[name] = await new Response(stream).text();
    }
    i = start + compSize - 1;
  }
  return files;
}

window.CuttingTrackerDebug = { exportRows, buildXlsx, importStoreFromXlsx, getStore: () => state.store };

render();

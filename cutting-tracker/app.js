const STORE_KEY = "cuttingTracker.v7";
const LEGACY_STORE_KEYS = ["cuttingTracker.v6", "cuttingTracker.v5", "cuttingTracker.v4", "cuttingTracker.v3", "cuttingTracker.v2", "cuttingTracker.v1"];
const OLD_STORE_KEY = "cuttingTracker.v1";

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
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["有机燕麦", 30]]],
      ["晚餐", [["三文鱼", 100], ["盒马糙米饭团", 120], ["沙拉蔬菜", 200], ["混合坚果", 6]]],
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
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["有机燕麦", 25]]],
      ["晚餐", [["盒马烤蔬牛肉三色糙米能量碗", 280], ["沙拉蔬菜", 200], ["混合坚果", 4]]],
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
      ["加餐", [["盒马即食炙烤鸡胸肉条", 120], ["便利店饭团", 120]]],
      ["晚餐", [["金枪鱼罐头(水浸)", 100], ["全麦面包", 80], ["即食玉米", 150], ["沙拉蔬菜", 200]]],
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
      ["加餐", [["卤牛肉", 100], ["有机燕麦", 30], ["盒马无糖无脂酸奶", 100]]],
      ["晚餐", [["三文鱼", 100], ["便利店饭团", 120], ["沙拉蔬菜", 200], ["混合坚果", 4]]],
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
      ["加餐", [["卤牛肉", 100], ["有机燕麦", 30], ["盒马无糖无脂酸奶", 100]]],
      ["晚餐", [["卤牛肉", 150], ["盒马糙米饭团", 120], ["即食玉米", 150], ["沙拉蔬菜", 200]]],
    ],
  },
];

const WATER_SLOTS = {
  trainCardio: [["起床后", 400], ["训练前", 300], ["训练中", 600], ["午餐前后", 600], ["下午", 700], ["晚餐后", 500]],
  train: [["起床后", 400], ["训练前", 300], ["训练中", 400], ["午餐前后", 600], ["下午", 700], ["晚餐后", 400]],
  rest: [["起床后", 400], ["上午", 500], ["午餐前后", 600], ["下午", 600], ["晚餐前后", 300], ["睡前2小时前", 100]],
  alcohol: [["起床后", 400], ["上午", 500], ["午餐前后", 600], ["下午", 600], ["晚餐/喝酒期间", 500], ["睡前", 400]],
};

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
  centerDateOnRender: true,
  estimateMealId: "",
};

function initialDate() {
  return isoDate(new Date());
}

function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (saved?.version >= 2) return normalizeStore(saved);
  } catch {}
  for (const key of LEGACY_STORE_KEYS) {
    try {
      const old = JSON.parse(localStorage.getItem(key));
      if (old?.version >= 2) return normalizeStore(old);
      if (old) return normalizeStore({ version: 4, records: old, plans: {}, foods: FOOD_LIBRARY });
    } catch {}
  }
  return normalizeStore({ version: 7, records: {}, plans: {}, foods: FOOD_LIBRARY });
}

function normalizeStore(store) {
  const foods = { ...(store.foods || {}), ...FOOD_LIBRARY };
  const plans = Object.fromEntries(Object.entries(store.plans || {}).map(([date, savedPlan]) => [date, normalizeSavedPlan(date, savedPlan, foods)]));
  return {
    version: 7,
    records: store.records || {},
    plans,
    foods,
  };
}

function normalizeSavedPlan(date, savedPlan, foods) {
  if (!savedPlan?.meals) return savedPlan;
  const p = JSON.parse(JSON.stringify(savedPlan));
  p.meals.forEach((meal) => {
    meal.items = (meal.items || []).map((item) => {
      const next = item.food === "超级碗沙拉半份"
        ? { ...item, food: "沙拉蔬菜", amount: 200, unit: "g" }
        : { ...item };
      if (next.custom && !next.baseAmount) next.baseAmount = Number(next.amount || 1);
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
  localStorage.setItem(STORE_KEY, JSON.stringify(state.store));
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
    exercises: t.exercises.map(([name, detail, kcal], i) => ({ id: `ex${i}`, name, detail, kcal: Number(kcal || 0) })),
    meals: t.meals.map(([name, items], mealIndex) => ({
      id: `meal${mealIndex}`,
      name,
      items: items.map(([food, amount], itemIndex) => ({
        id: `m${mealIndex}i${itemIndex}`,
        food,
        amount,
        unit: state.store?.foods?.[food]?.unit || FOOD_LIBRARY[food]?.unit || "g",
      })),
    })),
  };
}

function exerciseTotal(p = plan()) {
  return p.exercises.reduce((sum, ex) => sum + Number(ex.kcal || 0), 0);
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
    state.store.records[date] = { foods: {}, exercises: {}, waterSlots: {}, waterMl: 0, body: {}, stool: {} };
  }
  return state.store.records[date];
}

function foodMacro(item) {
  if (item.custom) return customMacro(item);
  const f = state.store.foods[item.food] || FOOD_LIBRARY[item.food];
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

function eatenTotals(p = plan(), r = record()) {
  return sumMacros(p.meals.flatMap((m) => m.items.filter((item) => r.foods[item.id])));
}

function weekStats() {
  return weekDates().reduce((acc, date) => {
    const p = plan(date);
    const r = record(date);
    const planned = plannedTotals(p);
    const eaten = eatenTotals(p, r);
    acc.plannedKcal += planned.kcal;
    acc.eatenKcal += eaten.kcal;
    const exercise = exerciseTotal(p);
    acc.burn += p.base + exercise;
    acc.plannedDeficit += p.base + exercise - planned.kcal;
    acc.actualDeficit += p.base + exercise - eaten.kcal;
    acc.water += r.waterMl || 0;
    acc.waterTarget += p.waterTarget;
    acc.exerciseDone += Object.values(r.exercises || {}).filter(Boolean).length;
    acc.exerciseTotal += p.exercises.length;
    acc.foodDone += p.meals.flatMap((m) => m.items).filter((item) => r.foods[item.id]).length;
    acc.foodTotal += p.meals.flatMap((m) => m.items).length;
    acc.stool += r.stool?.done ? 1 : 0;
    return acc;
  }, { plannedKcal: 0, eatenKcal: 0, burn: 0, plannedDeficit: 0, actualDeficit: 0, water: 0, waterTarget: 0, exerciseDone: 0, exerciseTotal: 0, foodDone: 0, foodTotal: 0, stool: 0 });
}

function fmt(n, d = 0) {
  return Number(n || 0).toFixed(d);
}

function pct(value, target) {
  return target ? Math.max(0, Math.min(100, (value / target) * 100)) : 0;
}

function render(options = {}) {
  renderWeekbar();
  renderDates();
  document.querySelectorAll(".tab").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.tab === state.tab));
  const titles = { today: "概览", training: "训练", meals: "饮食", water: "饮水", body: "身体" };
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
    const r = record();
    const planned = plannedTotals(p);
    const eaten = eatenTotals(p, r);
    const week = weekStats();
    const burn = p.base + exerciseTotal(p);
    const plannedDeficit = burn - planned.kcal;
    const remainingKcal = burn - eaten.kcal;
    const foodItems = p.meals.flatMap((m) => m.items);
    const foodDone = foodItems.filter((item) => r.foods[item.id]).length;
    const exerciseDone = p.exercises.filter((ex) => r.exercises[ex.id]).length;
    const waterDone = r.waterMl >= p.waterTarget;
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
        <div class="score-main ${remainingKcal >= 0 ? "good" : "bad"}">
          <span>当前热量余量</span>
          <strong>${fmt(remainingKcal)}</strong>
          <small>计划缺口 ${fmt(plannedDeficit)} kcal</small>
        </div>
        <div class="score-side">
          <b>${fmt(eaten.kcal)}</b><span>已吃 / 目标 ${fmt(planned.kcal)}</span>
          <b>${fmt(r.waterMl)}</b><span>饮水 / 目标 ${p.waterTarget}ml</span>
        </div>
      </section>

      <section class="panel">
        <div class="section-title"><h2>今日执行</h2><small>${state.date.slice(5)} · ${p.title}</small></div>
        <div class="metric-grid">
          ${miniMetric("饮食打卡", `${foodDone}/${foodItems.length}`, foodDone === foodItems.length ? "green" : "red")}
          ${miniMetric("训练打卡", `${exerciseDone}/${p.exercises.length}`, exerciseDone === p.exercises.length ? "green" : "red")}
          ${miniMetric("饮水", `${fmt(r.waterMl)} / ${p.waterTarget} ml`, waterDone ? "green" : "blue")}
          ${miniMetric("排便", stoolDone ? "已记录" : "未记录", stoolDone ? "green" : "amber")}
        </div>
      </section>

      <section class="panel">
        <div class="section-title"><h2>宏量目标</h2><small>已吃 / 计划</small></div>
        ${macroLine("热量", eaten.kcal, planned.kcal, "kcal")}
        ${macroLine("蛋白", eaten.p, planned.p, "g")}
        ${macroLine("碳水", eaten.c, planned.c, "g")}
        ${macroLine("脂肪", eaten.f, planned.f, "g")}
      </section>

      <section class="panel">
        <div class="section-title"><h2>未完成</h2><small>${p.title}</small></div>
        ${unfinishedList(p, r)}
      </section>
    </div>`);
  },

  training() {
    const p = plan();
    const r = record();
    return html(`<section class="panel">
      <div class="section-title"><h2>${p.title}</h2><small>估算 ${exerciseTotal(p)} kcal</small></div>
      <div class="task-list">
        ${p.exercises.map((ex) => exerciseRow(ex, r.exercises[ex.id])).join("")}
      </div>
      <form id="addExerciseForm" class="form-grid add-exercise-form">
        ${field("name", "动作", "", "例如 坐姿划船")}
        ${field("detail", "内容", "", "4组 x 10")}
        ${field("kcal", "估算热量 kcal", "", "40")}
        <button class="primary-button" type="submit">添加动作</button>
      </form>
    </section>`);
  },

  meals() {
    const p = plan();
    const r = record();
    return html(`<div class="stack">
      ${p.meals.map((meal) => mealCard(meal, r)).join("")}
      ${addFoodPanel(p)}
      ${foodLibraryPanel()}
    </div>`);
  },

  water() {
    const p = plan();
    const r = record();
    const slots = waterSlotsFor(p);
    return html(`<div class="stack">
      <section class="score-panel water-score">
        <div class="score-main"><span>今日饮水</span><strong>${fmt(r.waterMl)}</strong><small>目标 ${p.waterTarget} ml</small></div>
        <div class="score-side"><b>${fmt(pct(r.waterMl, p.waterTarget))}%</b><span>完成度</span></div>
      </section>
      <section class="panel">
        <div class="quick-grid">
          <button class="quick-water" data-water-add="250" type="button">+250</button>
          <button class="quick-water" data-water-add="350" type="button">+350</button>
          <button class="quick-water" data-water-add="500" type="button">+500</button>
          <button class="quick-water danger" data-water-reset="1" type="button">清零</button>
        </div>
      </section>
      <section class="panel">
        <div class="section-title"><h2>时段打卡</h2><small>未完成红色，完成绿色</small></div>
        <div class="task-list">${slots.map((s, i) => taskButton("waterSlot", `${i}:${s[1]}`, r.waterSlots[i], s[0], `${s[1]} ml`, "水")).join("")}</div>
      </section>
    </div>`);
  },

  body() {
    const r = record();
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
        <div class="section-title"><h2>排便记录</h2><small>可每天一次</small></div>
        <form id="stoolForm" class="form-grid">
          <label class="switch-row span-2"><input name="done" type="checkbox" ${s.done ? "checked" : ""} /> 今天已排便</label>
          ${selectField("time", "时间", ["", "上午", "下午", "晚上"], s.time || "")}
          ${selectField("shape", "形状", ["", ...STOOL_SHAPES], s.shape || "")}
          ${field("stoolNote", "备注", s.note || "", "比如偏干/偏稀", "span-2")}
          <button class="primary-button span-2" type="submit">保存排便记录</button>
        </form>
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

function macroLine(label, actual, target, unit) {
  return `<div class="macro-line">
    <div><b>${label}</b><span>${fmt(actual, unit === "kcal" ? 0 : 1)} / ${fmt(target, unit === "kcal" ? 0 : 1)} ${unit}</span></div>
    <div class="progress"><span class="progress-fill" style="width:${pct(actual, target)}%"></span></div>
  </div>`;
}

function unfinishedList(p, r) {
  const exercises = p.exercises.filter((ex) => !r.exercises[ex.id]).slice(0, 3).map((ex) => statusRow(ex.name, ex.detail, false));
  const foods = p.meals.flatMap((m) => m.items.map((item) => ({ ...item, meal: m.name }))).filter((item) => !r.foods[item.id]).slice(0, 4).map((item) => statusRow(`${item.meal}: ${item.food}`, `${item.amount}${item.unit}`, false));
  const water = r.waterMl >= p.waterTarget ? [] : [statusRow("饮水", `还差 ${fmt(p.waterTarget - (r.waterMl || 0))} ml`, false)];
  const stool = r.stool?.done ? [] : [statusRow("排便", "今天还没记录", false)];
  const rows = [...exercises, ...foods, ...water, ...stool];
  return rows.length ? rows.join("") : `<p class="empty">今天目前都完成了。</p>`;
}

function statusRow(title, detail, done) {
  return `<div class="status-row ${done ? "done" : "todo"}"><span></span><div><b>${title}</b><small>${detail}</small></div></div>`;
}

function taskButton(type, id, done, title, detail, badge) {
  return `<button class="task ${done ? "done" : "todo"}" data-check="${type}:${id}" type="button">
    <span class="task-dot"></span><span class="task-text"><b>${title}</b><small>${detail}</small></span><span class="task-badge">${done ? "完成" : badge}</span>
  </button>`;
}

function exerciseRow(ex, done) {
  return `<div class="exercise-task ${done ? "done" : "todo"}">
    <button class="food-check" data-check="exercise:${ex.id}" type="button"><span class="task-dot"></span></button>
    <div class="food-main"><b>${ex.name}</b><small>${ex.detail} · ${fmt(ex.kcal)} kcal</small></div>
    <details class="edit-details">
      <summary>编辑</summary>
      <form class="editExerciseForm form-grid">
        <input type="hidden" name="exerciseId" value="${ex.id}" />
        ${field("name", "动作", ex.name, "动作名称")}
        ${field("detail", "内容", ex.detail, "4组 x 10")}
        ${field("kcal", "估算热量 kcal", ex.kcal || 0, "40")}
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
        const rememberChecked = item.custom ? "" : "checked";
        const step = amountStep(item.unit || "g");
        const baseAmount = Number(item.baseAmount || item.amount || 1);
        return `<div class="food-task ${r.foods[item.id] ? "done" : "todo"}">
          <button class="food-check" data-check="food:${item.id}" type="button"><span class="task-dot"></span></button>
          <div class="food-main"><b>${item.food || item.name}</b><small>${item.amount}${item.unit || ""} · ${fmt(m.kcal)} kcal · P${fmt(m.p, 1)} C${fmt(m.c, 1)} F${fmt(m.f, 1)}</small></div>
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
    <label class="choice-search"><span>搜索</span><input data-choice-search="${meal.id}" placeholder="输入食物名，比如卤牛肉、凉皮、虾" /></label>
    <div class="choice-list">
      ${choices.map(([food, amount]) => choiceRow(meal, food, amount)).join("")}
    </div>
  </details>`;
}

function mealChoices(meal) {
  return foodNames().map((food) => [food, defaultChoiceAmount(food)]);
}

function defaultChoiceAmount(food) {
  const lib = state.store.foods[food] || FOOD_LIBRARY[food];
  if (DEFAULT_CHOICE_AMOUNTS[food] !== undefined) return DEFAULT_CHOICE_AMOUNTS[food];
  if (lib?.perUnit) return 1;
  if (lib?.unit === "ml") return 100;
  if (lib?.unit === "颗") return 6;
  return 100;
}

function choiceRow(meal, food, amount) {
  const lib = state.store.foods[food] || FOOD_LIBRARY[food];
  const unit = lib?.unit || "g";
  const macro = scaleMacro(lib, amount);
  return `<div class="choice-row" data-choice-row="${esc(food.toLowerCase())}">
    <div><b>${esc(food)}</b><small>${amount}${unit} · ${fmt(macro.kcal)} kcal · P${fmt(macro.p, 1)} C${fmt(macro.c, 1)} F${fmt(macro.f, 1)}</small></div>
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
        </div>
      </details>
      <div class="food-preview" id="foodPreview">输入食物和重量后自动计算</div>
      <div class="chip-row">${chips}</div>
      <button class="primary-button full-button" type="submit">加入这顿饭</button>
    </form>
  </section>`;
}

function foodLibraryPanel() {
  const custom = foodNames().filter((name) => !FOOD_LIBRARY[name]).slice(0, 12);
  const rows = custom.length
    ? custom.map((name) => {
        const f = state.store.foods[name];
        return `<div class="library-row"><b>${esc(name)}</b><small>${f.perUnit ? "每单位" : "每100g"} · ${fmt(f.kcal)} kcal · P${fmt(f.p, 1)} C${fmt(f.c, 1)} F${fmt(f.f, 1)}</small></div>`;
      }).join("")
    : `<p class="empty compact">你第一次录入的新食物会出现在这里。</p>`;
  return `<section class="panel soft">
    <div class="section-title"><h2>我的食物库</h2><small>${Object.keys(state.store.foods).length} 个食物</small></div>
    <div class="library-list">${rows}</div>
  </section>`;
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

function waterSlotsFor(p) {
  if (p.title.includes("喝酒")) return WATER_SLOTS.alcohol;
  if (p.title.includes("有氧")) return WATER_SLOTS.trainCardio;
  if (exerciseTotal(p) > 0) return WATER_SLOTS.train;
  return WATER_SLOTS.rest;
}

function drawBodyChart() {
  const canvas = document.getElementById("bodyChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dates = weekDates();
  const points = dates.map((date, i) => ({ i, date, weight: Number(record(date).body?.weight || 0), bodyFat: Number(record(date).body?.bodyFat || 0) }));
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fffdfa";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ded8cc";
  for (let i = 0; i < 5; i++) {
    const y = 35 + i * 48;
    ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(615, y); ctx.stroke();
  }
  drawSeries(ctx, points, "weight", "#245b4f", 65, 75);
  drawSeries(ctx, points, "bodyFat", "#c77b22", 14, 24);
  ctx.font = "19px -apple-system, sans-serif";
  ctx.fillStyle = "#59666d";
  dates.forEach((d, i) => ctx.fillText(dayName(d).replace("周", ""), 52 + i * 82, 282));
}

function drawSeries(ctx, points, key, color, min, max) {
  const valid = points.filter((p) => p[key]);
  if (!valid.length) {
    ctx.fillStyle = "#6f7579";
    ctx.font = "22px -apple-system, sans-serif";
    ctx.fillText("保存身体记录后显示趋势", 190, 150);
    return;
  }
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  valid.forEach((p, idx) => {
    const x = 55 + p.i * 82;
    const y = 250 - ((p[key] - min) / (max - min)) * 205;
    if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();
  valid.forEach((p) => {
    const x = 55 + p.i * 82;
    const y = 250 - ((p[key] - min) / (max - min)) * 205;
    ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
  });
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
        unit: state.store.foods[food]?.unit || FOOD_LIBRARY[food]?.unit || "g",
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
    const [type, id, amount] = check.dataset.check.split(":");
    if (type === "exercise") r.exercises[id] = !r.exercises[id];
    if (type === "food") r.foods[id] = !r.foods[id];
    if (type === "waterSlot") {
      r.waterSlots[id] = !r.waterSlots[id];
      r.waterMl = Math.max(0, (r.waterMl || 0) + (r.waterSlots[id] ? Number(amount) : -Number(amount)));
    }
    saveStore(); renderPreservingScroll(); return;
  }
  const addWater = e.target.closest("[data-water-add]");
  if (addWater) { const r = record(); r.waterMl = (r.waterMl || 0) + Number(addWater.dataset.waterAdd); saveStore(); renderPreservingScroll(); return; }
  if (e.target.closest("[data-water-reset]")) { const r = record(); r.waterMl = 0; r.waterSlots = {}; saveStore(); renderPreservingScroll(); return; }
  const adjust = e.target.closest("[data-adjust]");
  if (adjust) {
    const [mealId, itemId, delta] = adjust.dataset.adjust.split(":");
    const p = editablePlan();
    const item = p.meals.find((m) => m.id === mealId)?.items.find((x) => x.id === itemId);
    if (item) item.amount = cleanAmount(Number(item.amount || 0) + Number(delta), item.unit || "g");
    saveStore(); renderPreservingScroll(); return;
  }
  const del = e.target.closest("[data-delete-food]");
  if (del) {
    const [mealId, itemId] = del.dataset.deleteFood.split(":");
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === mealId);
    if (meal) meal.items = meal.items.filter((x) => x.id !== itemId);
    delete record().foods[itemId];
    saveStore(); renderPreservingScroll(); return;
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if (e.target.id === "bodyForm") {
    record().body = { weight: data.get("weight") || "", bodyFat: data.get("bodyFat") || "", waist: data.get("waist") || "", note: data.get("note") || "" };
  }
  if (e.target.id === "stoolForm") {
    record().stool = { done: data.get("done") === "on", time: data.get("time") || "", shape: data.get("shape") || "", note: data.get("stoolNote") || "" };
  }
  if (e.target.id === "addFoodForm") {
    const p = editablePlan();
    const food = String(data.get("food") || "").trim();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    const amount = Number(data.get("amount") || 0);
    const manual = ["kcal", "p", "c", "f"].some((key) => String(data.get(key) || "").trim() !== "");
    if (meal && food) {
      if (!state.store.foods[food] || manual) {
        const nextFood = foodFromForm(data);
        if (!nextFood) {
          alert("这个食物还没在食物库里。请先展开“第一次录入或修正营养”，填每100g或每单位的营养。");
          return;
        }
        state.store.foods[food] = nextFood;
      }
      meal.items.push({ id: uid("food"), food, amount, unit: state.store.foods[food]?.unit || data.get("unit") || "g" });
    }
  }
  if (e.target.id === "customFoodForm") {
    const p = editablePlan();
    const meal = p.meals.find((m) => m.id === data.get("mealId"));
    if (meal) meal.items.push({ id: uid("custom"), custom: true, food: data.get("name") || "自定义食物", name: data.get("name") || "自定义食物", amount: 1, unit: "份", kcal: Number(data.get("kcal") || 0), p: Number(data.get("p") || 0), c: Number(data.get("c") || 0), f: Number(data.get("f") || 0) });
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
      const name = String(data.get("name") || item.food || "自定义食物").trim();
      const amount = Number(data.get("amount") || 0);
      const unit = String(data.get("unit") || "g").trim() || "g";
      const macro = { kcal: Number(data.get("kcal") || 0), p: Number(data.get("p") || 0), c: Number(data.get("c") || 0), f: Number(data.get("f") || 0) };
      if (data.get("rememberFood") === "on") {
        const perUnit = ["份", "个", "颗"].includes(unit);
        const factor = perUnit ? Math.max(0.01, amount || 1) : Math.max(0.01, amount / 100);
        state.store.foods[name] = {
          unit,
          kcal: rnd(macro.kcal / factor),
          p: rnd(macro.p / factor),
          c: rnd(macro.c / factor),
          f: rnd(macro.f / factor),
          perUnit,
        };
        item.custom = false;
        delete item.kcal; delete item.p; delete item.c; delete item.f;
      } else {
        item.custom = true;
        item.kcal = macro.kcal;
        item.p = macro.p;
        item.c = macro.c;
        item.f = macro.f;
        item.baseAmount = amount || 1;
      }
      item.food = name;
      item.name = name;
      item.amount = amount;
      item.unit = unit;
    }
  }
  if (e.target.classList.contains("editExerciseForm")) {
    const p = editablePlan();
    const ex = p.exercises.find((x) => x.id === data.get("exerciseId"));
    if (ex) {
      ex.name = data.get("name") || ex.name;
      ex.detail = data.get("detail") || "";
      ex.kcal = Number(data.get("kcal") || 0);
    }
  }
  if (e.target.id === "addExerciseForm") {
    const p = editablePlan();
    p.exercises.push({
      id: uid("ex"),
      name: data.get("name") || "新动作",
      detail: data.get("detail") || "",
      kcal: Number(data.get("kcal") || 0),
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
});

document.addEventListener("change", (e) => {
  const form = e.target.closest("#addFoodForm");
  if (form) syncFoodForm(form, e.target.name === "food");
  const estimateForm = e.target.closest(".estimateMealForm");
  if (estimateForm) syncEstimateForm(estimateForm);
  const editFoodForm = e.target.closest(".editFoodForm");
  if (editFoodForm) syncEditFoodForm(editFoodForm, e.target.name);
  const choiceSearch = e.target.closest("[data-choice-search]");
  if (choiceSearch) syncChoiceSearch(choiceSearch);
});

function foodFromForm(data) {
  const unit = String(data.get("unit") || "g").trim() || "g";
  const values = {
    unit,
    kcal: Number(data.get("kcal") || 0),
    p: Number(data.get("p") || 0),
    c: Number(data.get("c") || 0),
    f: Number(data.get("f") || 0),
    perUnit: data.get("mode") === "perUnit",
  };
  if (![values.kcal, values.p, values.c, values.f].some((n) => Number.isFinite(n) && n > 0)) return null;
  return values;
}

function syncFoodForm(form, fillFromLibrary = false) {
  const foodName = String(form.elements.food?.value || "").trim();
  const saved = state.store.foods[foodName];
  if (saved && fillFromLibrary) {
    form.elements.unit.value = saved.unit || "g";
    form.elements.mode.value = saved.perUnit ? "perUnit" : "per100";
    form.elements.kcal.value = saved.kcal ?? "";
    form.elements.p.value = saved.p ?? "";
    form.elements.c.value = saved.c ?? "";
    form.elements.f.value = saved.f ?? "";
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
  preview.textContent = `${amount || 0}${candidate.unit || ""} ≈ ${fmt(macro.kcal)} kcal · 蛋白 ${fmt(macro.p, 1)}g · 碳水 ${fmt(macro.c, 1)}g · 脂肪 ${fmt(macro.f, 1)}g`;
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
  panel?.querySelectorAll(".choice-row").forEach((row) => {
    row.hidden = q && !String(row.dataset.choiceRow || "").includes(q);
  });
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
  const summary = [["日期", "星期", "训练", "计划摄入", "已吃", "总消耗", "计划缺口", "实际缺口", "饮水", "饮水目标", "排便", "体重", "体脂", "腰围"]];
  const foodRows = [["日期", "餐次", "食物", "数量", "单位", "热量", "蛋白", "碳水", "脂肪", "完成"]];
  const trainRows = [["日期", "训练", "动作", "内容", "估算热量", "完成"]];
  const bodyRows = [["日期", "体重", "体脂", "腰围", "备注"]];
  const stoolRows = [["日期", "是否排便", "时间", "形状", "备注"]];
  const waterRows = [["日期", "饮水ml", "目标ml"]];
  for (const date of dates) {
    const p = plan(date);
    const r = record(date);
    const planned = plannedTotals(p);
    const eaten = eatenTotals(p, r);
    const burn = p.base + exerciseTotal(p);
    summary.push([date, p.day, p.title, rnd(planned.kcal), rnd(eaten.kcal), burn, rnd(burn - planned.kcal), rnd(burn - eaten.kcal), r.waterMl || 0, p.waterTarget, r.stool?.done ? "是" : "否", r.body?.weight || "", r.body?.bodyFat || "", r.body?.waist || ""]);
    p.meals.forEach((m) => m.items.forEach((item) => {
      const macro = foodMacro(item);
      foodRows.push([date, m.name, item.food || item.name, item.amount, item.unit || "", rnd(macro.kcal), rnd(macro.p), rnd(macro.c), rnd(macro.f), r.foods[item.id] ? "是" : "否"]);
    }));
    p.exercises.forEach((ex) => trainRows.push([date, p.title, ex.name, ex.detail, ex.kcal || 0, r.exercises[ex.id] ? "是" : "否"]));
    bodyRows.push([date, r.body?.weight || "", r.body?.bodyFat || "", r.body?.waist || "", r.body?.note || ""]);
    stoolRows.push([date, r.stool?.done ? "是" : "否", r.stool?.time || "", r.stool?.shape || "", r.stool?.note || ""]);
    waterRows.push([date, r.waterMl || 0, p.waterTarget]);
  }
  const foodLib = [["食物", "单位", "热量", "蛋白", "碳水", "脂肪", "按个数"], ...Object.entries(state.store.foods).map(([name, f]) => [name, f.unit, f.kcal, f.p, f.c, f.f, f.perUnit ? "是" : "否"])];
  return { "概览": summary, "饮食记录": foodRows, "训练记录": trainRows, "饮水记录": waterRows, "身体记录": bodyRows, "排便记录": stoolRows, "食物库": foodLib };
}

function rnd(n) {
  return Math.round(Number(n || 0) * 10) / 10;
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

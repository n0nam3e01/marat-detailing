/* =========================================================
   MARAT DETAILING — логика сайта
   ▼▼▼  ВСЕ НАСТРОЙКИ ЗДЕСЬ — заполните и сохраните  ▼▼▼
   ========================================================= */
const CONFIG = {
  // Instagram уже заполнен:
  instagram: "https://www.instagram.com/marat_detailing/",

  // WhatsApp: номер в международном формате, только цифры (без + и пробелов).
  // Пример: "77001234567". Пусто = кнопка станет неактивной.
  whatsapp: "",

  // Телефон для звонка. Пример: "+7 700 123 45 67". Пусто = кнопка неактивна.
  phone: "",

  // TikTok: полная ссылка. Пример: "https://www.tiktok.com/@marat_detailing".
  tiktok: "",

  // 2ГИС: полная ссылка на карточку студии. Пример: "https://2gis.kz/astana/firm/...".
  twogis: "",

  // Точный адрес студии. Пример: "Астана, ул. Кабанбай батыра, 00".
  // Пусто = карта показывает город целиком.
  address: "",

  // Что показывать на карте, если точного адреса ещё нет:
  mapQuery: "Астана, Казахстан",
};
/* ▲▲▲  КОНЕЦ НАСТРОЕК  ▲▲▲ */

// Текущий язык (используется формой заявки для текста сообщения).
let currentLang = "ru";

/* =============== ПЕРЕВОДЫ RU / ҚАЗ =============== */
const I18N = {
  ru: {
    "nav.services": "Услуги", "nav.process": "Как работаем", "nav.works": "Работы",
    "nav.about": "Студия", "nav.contacts": "Контакты", "cta.book": "Записаться",
    "hero.eyebrow": "Детейлинг-студия · Астана",
    "hero.title": "Блеск, который держится.<br />Защита, которую видно.",
    "hero.lead": "Детейлинг, бронеплёнка, керамика и шумоизоляция. Возвращаем автомобилю заводской вид и защищаем его от дороги, реагентов и времени.",
    "hero.cta1": "Записаться на приём", "hero.cta2": "Смотреть работы",
    "hero.stat1": "лет опыта", "hero.stat2": "авто в год", "hero.stat3": "оригинальные материалы",
    "services.title": "Услуги студии",
    "services.desc": "Полный цикл ухода и защиты: от экспресс-детейлинга до полной оклейки бронеплёнкой.",
    "svc.detailing.t": "Детейлинг-мойка",
    "svc.detailing.d": "Бесконтактная мойка, глубокая чистка кузова, дисков и подкапотного пространства.",
    "svc.ppf.t": "Бронеплёнка (PPF)",
    "svc.ppf.d": "Полная и локальная оклейка полиуретаном. Защита от сколов, царапин и реагентов.",
    "svc.noise.t": "Шумоизоляция",
    "svc.noise.d": "Тише в салоне, плотнее звук дверей. Обработка от вибраций и дорожного гула.",
    "svc.polish.t": "Полировка кузова",
    "svc.polish.d": "Удаление рисок и голограмм, восстановление глубины цвета и зеркального блеска.",
    "svc.ceramic.t": "Керамика",
    "svc.ceramic.d": "Керамическое покрытие: гидрофобный эффект, стойкий блеск и лёгкая мойка.",
    "svc.interior.t": "Химчистка салона",
    "svc.interior.d": "Глубокая чистка кожи, ткани и пластика. Удаление запахов, антибактериальная обработка.",
    "process.title": "Как проходит работа",
    "process.desc": "Прозрачный процесс без сюрпризов, от записи до выдачи автомобиля.",
    "step1.t": "Запись и приёмка",
    "step1.d": "Обсуждаем задачу, осматриваем авто, фиксируем состояние и согласуем смету.",
    "step2.t": "Работа в студии",
    "step2.d": "Подготовка, мойка, работы по кузову и салону. Только оригинальные материалы.",
    "step3.t": "Приёмка и гарантия",
    "step3.d": "Показываем результат при ярком свете, даём рекомендации по уходу и гарантию.",
    "works.title": "Наши работы",
    "works.desc": "Несколько проектов из студии. Полная лента в Instagram.",
    "work.1": "Оклейка PPF · чёрный кузов", "work.2": "Керамика · глубокий блеск",
    "work.3": "Полировка · до / после", "work.4": "Химчистка салона", "work.5": "Детейлинг дисков",
    "works.more": "Больше работ в Instagram",
    "about.title": "Студия MARAT DETAILING",
    "about.p1": "Мы — детейлинг-студия в Астане. Работаем аккуратно и по технологии: чистый бокс, правильный свет, проверенные материалы и внимание к деталям, которые видно на результате.",
    "about.p2": "Беремся как за экспресс-уход, так и за сложные проекты: полную оклейку бронеплёнкой, керамику и комплексную шумоизоляцию. На каждую работу даём гарантию.",
    "about.pt1": "Оригинальные плёнки и составы", "about.pt2": "Чистый отапливаемый бокс",
    "about.pt3": "Фотоотчёт по этапам", "about.pt4": "Гарантия на работы",
    "about.quote": "«Делаем так, как сделали бы для своей машины».",
    "about.by": "— команда MARAT DETAILING",
    "contacts.title": "Контакты и запись",
    "contacts.desc": "Напишите или позвоните, подберём время и рассчитаем стоимость.",
    "contacts.address": "Адрес", "contacts.city": "Астана, Казахстан",
    "contacts.hours": "Часы работы", "contacts.hoursValue": "Ежедневно · 10:00 – 20:00",
    "contacts.call": "Позвонить", "contacts.map2gis": "2ГИС",
    "contacts.note": "Кнопки без ссылки появятся, когда вы добавите номер/ссылку в script.js.",
    "contacts.openMap": "Открыть в картах ↗",
    "footer.tag": "Детейлинг · Бронеплёнка · Керамика · Шумоизоляция · Астана",
    "footer.made": "Сделано с вниманием к деталям",
    "nav.lead": "Заявка",
    "lead.title": "Оставьте заявку",
    "lead.desc": "Оставьте имя и телефон, свяжемся в WhatsApp, ответим на вопросы и подберём удобное время.",
    "lead.pt1": "Ответим в течение рабочего дня",
    "lead.pt2": "Бесплатная консультация и расчёт стоимости",
    "lead.pt3": "Без спама и звонков роботов",
    "lead.name": "Ваше имя",
    "lead.namePh": "Например, Айдос",
    "lead.phone": "Телефон",
    "lead.service": "Услуга (необязательно)",
    "lead.serviceAny": "Не выбрано",
    "lead.submit": "Отправить в WhatsApp",
    "lead.consent": "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    "lead.ok": "Открываем WhatsApp с вашей заявкой…",
    "lead.errName": "Пожалуйста, укажите имя.",
    "lead.errPhone": "Введите корректный номер телефона.",
    "lead.errNoWa": "Добавьте номер WhatsApp в script.js (CONFIG.whatsapp), чтобы заявки уходили в WhatsApp.",
    "lead.msgIntro": "Здравствуйте! Заявка с сайта MARAT DETAILING.",
    "lead.msgName": "Имя:",
    "lead.msgPhone": "Телефон:",
    "lead.msgService": "Услуга:",
    "faq.title": "Частые вопросы",
    "faq.desc": "Коротко о том, что чаще всего спрашивают.",
    "faq.q1": "Сколько времени занимает оклейка бронеплёнкой?",
    "faq.a1": "Полная оклейка кузова обычно занимает от 3 до 7 дней в зависимости от объёма и модели. Локальные зоны делаем за день. Точные сроки назовём после осмотра.",
    "faq.q2": "Даёте ли гарантию на работы?",
    "faq.a2": "Да. На бронеплёнку и керамику действует гарантия производителя и студии. Условия зависят от материала, всё расскажем при записи.",
    "faq.q3": "Нужно ли записываться заранее?",
    "faq.a3": "Желательно. Так мы подготовим бокс и материалы к вашему приезду и не заставим ждать. Оставьте заявку, подберём удобное время.",
    "faq.q4": "Можно ли оклеить только часть авто?",
    "faq.a4": "Конечно. Часто защищают зоны риска: капот, бампер, зеркала, пороги и фары. Это дешевле полной оклейки и бережёт самые уязвимые места.",
    "faq.q5": "Сколько держится керамика?",
    "faq.a5": "В среднем от 1 до 3 лет в зависимости от состава и ухода. Гидрофобный эффект и блеск сохраняются весь срок, а мойка становится проще.",
  },
  kz: {
    "nav.services": "Қызметтер", "nav.process": "Қалай жұмыс істейміз", "nav.works": "Жұмыстар",
    "nav.about": "Студия", "nav.contacts": "Байланыс", "cta.book": "Жазылу",
    "hero.eyebrow": "Детейлинг-студия · Астана",
    "hero.title": "Ұзаққа сақталатын жылтыр.<br />Көзге көрінетін қорғаныс.",
    "hero.lead": "Детейлинг, қорғаныш пленка, керамика және шуылдан оқшаулау. Автокөлікке зауыттық көрінісін қайтарып, оны жолдан, реагенттерден әрі уақыттан қорғаймыз.",
    "hero.cta1": "Қабылдауға жазылу", "hero.cta2": "Жұмыстарды көру",
    "hero.stat1": "жыл тәжірибе", "hero.stat2": "жылына көлік", "hero.stat3": "түпнұсқа материалдар",
    "services.title": "Студия қызметтері",
    "services.desc": "Толық күтім мен қорғаныс: экспресс-детейлингтен толық қорғаныш пленка жапсыруға дейін.",
    "svc.detailing.t": "Детейлинг жуу",
    "svc.detailing.d": "Контактісіз жуу, шанақты, дискілерді және қозғалтқыш бөлігін тереңдетіп тазалау.",
    "svc.ppf.t": "Қорғаныш пленка (PPF)",
    "svc.ppf.d": "Толық және жергілікті полиуретан жапсыру. Соққылардан, сызаттардан және реагенттерден қорғау.",
    "svc.noise.t": "Шуылдан оқшаулау",
    "svc.noise.d": "Салонда тыныш, есік дыбысы тығыз. Дірілден және жол гуілінен өңдеу.",
    "svc.polish.t": "Шанақты жылтырату",
    "svc.polish.d": "Сызаттар мен голограммаларды жою, түс тереңдігі мен айналы жылтырды қалпына келтіру.",
    "svc.ceramic.t": "Керамика",
    "svc.ceramic.d": "Керамикалық жабын: гидрофобты әсер, тұрақты жылтыр және жеңіл жуу.",
    "svc.interior.t": "Салонды химиялық тазалау",
    "svc.interior.d": "Тері, мата және пластикті тереңдетіп тазалау. Иістерді жою, бактерияға қарсы өңдеу.",
    "process.title": "Жұмыс қалай жүреді",
    "process.desc": "Тосын сыйсыз ашық процесс, жазылудан көлікті тапсыруға дейін.",
    "step1.t": "Жазылу және қабылдау",
    "step1.d": "Мәселені талқылап, көлікті қарап, жағдайын тіркеп, сметаны келісеміз.",
    "step2.t": "Студиядағы жұмыс",
    "step2.d": "Дайындық, жуу, шанақ пен салон жұмыстары. Тек түпнұсқа материалдар.",
    "step3.t": "Тапсыру және кепілдік",
    "step3.d": "Нәтижені жарық жерде көрсетіп, күтім бойынша кеңес пен кепілдік береміз.",
    "works.title": "Біздің жұмыстар",
    "works.desc": "Студиядан бірнеше жоба. Толық лента Instagram-да.",
    "work.1": "PPF жапсыру · қара шанақ", "work.2": "Керамика · терең жылтыр",
    "work.3": "Жылтырату · дейін / кейін", "work.4": "Салонды тазалау", "work.5": "Дискілер детейлингі",
    "works.more": "Instagram-да көбірек жұмыс",
    "about.title": "MARAT DETAILING студиясы",
    "about.p1": "Біз — Астанадағы детейлинг-студиясымыз. Ұқыпты әрі технология бойынша жұмыс істейміз: таза бокс, дұрыс жарық, тексерілген материалдар және нәтижеде көрінетін ұсақ-түйекке мұқияттылық.",
    "about.p2": "Экспресс-күтімді де, күрделі жобаларды да орындаймыз: толық қорғаныш пленка жапсыру, керамика және кешенді шуылдан оқшаулау. Әр жұмысқа кепілдік береміз.",
    "about.pt1": "Түпнұсқа пленкалар мен құрамдар", "about.pt2": "Таза жылытылатын бокс",
    "about.pt3": "Кезеңдер бойынша фотоесеп", "about.pt4": "Жұмыстарға кепілдік",
    "about.quote": "«Өз көлігімізге істейтіндей істейміз».",
    "about.by": "— MARAT DETAILING командасы",
    "contacts.title": "Байланыс және жазылу",
    "contacts.desc": "Жазыңыз немесе қоңырау шалыңыз, уақыт таңдап, бағасын есептейміз.",
    "contacts.address": "Мекенжай", "contacts.city": "Астана, Қазақстан",
    "contacts.hours": "Жұмыс уақыты", "contacts.hoursValue": "Күн сайын · 10:00 – 20:00",
    "contacts.call": "Қоңырау шалу", "contacts.map2gis": "2ГИС",
    "contacts.note": "Сілтемесіз батырмалар script.js-ке нөмір/сілтеме қосқанда белсенді болады.",
    "contacts.openMap": "Картадан ашу ↗",
    "footer.tag": "Детейлинг · Қорғаныш пленка · Керамика · Шуылдан оқшаулау · Астана",
    "footer.made": "Ұсақ-түйекке мұқият жасалған",
    "nav.lead": "Өтінім",
    "lead.title": "Өтінім қалдырыңыз",
    "lead.desc": "Атыңыз бен телефоныңызды қалдырыңыз, WhatsApp арқылы хабарласып, сұрақтарға жауап беріп, ыңғайлы уақыт таңдаймыз.",
    "lead.pt1": "Жұмыс күні ішінде жауап береміз",
    "lead.pt2": "Тегін кеңес және баға есебі",
    "lead.pt3": "Спам мен робот қоңыраулары жоқ",
    "lead.name": "Атыңыз",
    "lead.namePh": "Мысалы, Айдос",
    "lead.phone": "Телефон",
    "lead.service": "Қызмет (міндетті емес)",
    "lead.serviceAny": "Таңдалмаған",
    "lead.submit": "WhatsApp-қа жіберу",
    "lead.consent": "Батырманы басу арқылы дербес деректерді өңдеуге келісесіз.",
    "lead.ok": "Өтінішіңізбен WhatsApp ашылып жатыр…",
    "lead.errName": "Атыңызды көрсетіңіз.",
    "lead.errPhone": "Дұрыс телефон нөмірін енгізіңіз.",
    "lead.errNoWa": "Өтінімдер WhatsApp-қа кетуі үшін script.js файлына нөмір қосыңыз (CONFIG.whatsapp).",
    "lead.msgIntro": "Сәлеметсіз бе! MARAT DETAILING сайтынан өтінім.",
    "lead.msgName": "Аты:",
    "lead.msgPhone": "Телефон:",
    "lead.msgService": "Қызмет:",
    "faq.title": "Жиі қойылатын сұрақтар",
    "faq.desc": "Жиі сұралатын нәрселер туралы қысқаша.",
    "faq.q1": "Қорғаныш пленка жапсыру қанша уақыт алады?",
    "faq.a1": "Толық жапсыру әдетте көлемі мен үлгісіне қарай 3–7 күн алады. Жергілікті аймақтарды бір күнде жасаймыз. Нақты мерзімді қараудан кейін айтамыз.",
    "faq.q2": "Жұмысқа кепілдік бересіздер ме?",
    "faq.a2": "Иә. Қорғаныш пленка мен керамикаға өндіруші мен студияның кепілдігі бар. Шарттар материалға байланысты, жазылу кезінде түсіндіреміз.",
    "faq.q3": "Алдын ала жазылу керек пе?",
    "faq.a3": "Жөн болады. Сонда боксты және материалдарды келуіңізге дайындап, күттірмейміз. Өтінім қалдырыңыз, ыңғайлы уақыт таңдаймыз.",
    "faq.q4": "Көліктің бір бөлігін ғана жапсыруға бола ма?",
    "faq.a4": "Әрине. Көбіне қауіп аймақтарын қорғайды: капот, бампер, айналар, табалдырықтар мен фаралар. Бұл толық жапсырудан арзан әрі осал жерлерді сақтайды.",
    "faq.q5": "Керамика қанша уақыт тұрады?",
    "faq.a5": "Орта есеппен құрамы мен күтіміне қарай 1–3 жыл. Гидрофобты әсер мен жылтыр бүкіл мерзім бойы сақталады, ал жуу оңайлайды.",
  },
};

/* =============== ЯЗЫК =============== */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.ru;
  currentLang = I18N[lang] ? lang : "ru";
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key] != null ? dict[key] : I18N.ru[key];
    if (val == null) return;
    if (val.indexOf("<") !== -1) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    const val = dict[key] != null ? dict[key] : I18N.ru[key];
    if (val != null) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.classList.toggle("is-active", b.getAttribute("data-lang") === lang)
  );
  try { localStorage.setItem("md-lang", lang); } catch (e) {}
}

/* =============== КОНТАКТЫ =============== */
function wireContacts() {
  const digits = (s) => (s || "").replace(/[^\d+]/g, "");
  const wa = digits(CONFIG.whatsapp).replace(/\+/g, "");
  const links = {
    instagram: CONFIG.instagram || "",
    whatsapp: wa ? "https://wa.me/" + wa : "",
    phone: CONFIG.phone ? "tel:" + digits(CONFIG.phone) : "",
    tiktok: CONFIG.tiktok || "",
    twogis: CONFIG.twogis || "",
  };
  let anyPending = false;

  document.querySelectorAll("[data-contact]").forEach((el) => {
    const key = el.getAttribute("data-contact");
    const url = links[key];
    const isBtn = el.classList.contains("contact-btn");
    if (url) {
      el.setAttribute("href", url);
      if (key !== "phone") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    } else if (isBtn) {
      el.classList.add("pending");
      el.setAttribute("href", "#");
      el.setAttribute("title", "Укажите ссылку/номер в script.js → CONFIG");
      el.addEventListener("click", (e) => e.preventDefault());
      anyPending = true;
    } else {
      // CTA-кнопки без настроенного контакта ведут к форме заявки
      el.setAttribute("href", "#lead");
    }
  });

  if (anyPending) {
    const note = document.querySelector("[data-contact-note]");
    if (note) note.hidden = false;
  }
}

/* =============== ФОРМА ЗАЯВКИ → WHATSAPP =============== */
function wireLeadForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;
  const nameEl = document.getElementById("leadName");
  const phoneEl = document.getElementById("leadPhone");
  const serviceEl = document.getElementById("leadService");
  const status = document.getElementById("leadStatus");

  const t = (key) => {
    const d = I18N[currentLang] || I18N.ru;
    return d[key] != null ? d[key] : I18N.ru[key];
  };
  const setStatus = (kind, key) => {
    status.hidden = false;
    status.textContent = t(key);
    status.className = "lead-status " + (kind === "ok" ? "is-ok" : "is-err");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.length < 2) { setStatus("err", "lead.errName"); nameEl.focus(); return; }
    if (phoneDigits.length < 10) { setStatus("err", "lead.errPhone"); phoneEl.focus(); return; }

    const wa = (CONFIG.whatsapp || "").replace(/[^\d]/g, "");
    if (!wa) { setStatus("err", "lead.errNoWa"); return; }

    const service = serviceEl.value ? serviceEl.options[serviceEl.selectedIndex].text : "";
    let msg = t("lead.msgIntro") + "\n" + t("lead.msgName") + " " + name + "\n" + t("lead.msgPhone") + " " + phone;
    if (service) msg += "\n" + t("lead.msgService") + " " + service;

    window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    setStatus("ok", "lead.ok");
    form.reset();
  });
}

/* =============== КАРТА =============== */
function wireMap() {
  const hasAddress = CONFIG.address && CONFIG.address.trim();
  const query = hasAddress ? CONFIG.address : CONFIG.mapQuery;
  const frame = document.getElementById("mapFrame");
  if (frame) {
    // Грузим карту уже после загрузки страницы, чтобы тяжёлый iframe
    // не блокировал первую отрисовку и анимации.
    const src =
      "https://www.google.com/maps?q=" +
      encodeURIComponent(query) +
      "&z=" + (hasAddress ? 15 : 11) +
      "&output=embed";
    const load = () => { frame.src = src; };
    if (document.readyState === "complete") setTimeout(load, 200);
    else window.addEventListener("load", () => setTimeout(load, 200));
  }
  const open = document.getElementById("mapOpen");
  if (open) {
    open.href =
      CONFIG.twogis ||
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }
  if (hasAddress) {
    const av = document.getElementById("addressValue");
    if (av) {
      av.textContent = CONFIG.address;
      av.removeAttribute("data-i18n"); // чтобы переключатель языка не затирал адрес
    }
  }
}

/* =============== АНИМАЦИИ ПОЯВЛЕНИЯ =============== */
function wireReveal() {
  const groups = document.querySelectorAll(
    ".hero-inner, .services-grid, .process-list, .works-grid, .contacts-grid, .about-inner, .section-head"
  );
  groups.forEach((group) => {
    const items = group.matches(".reveal") ? [group] : group.querySelectorAll(".reveal");
    items.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 70, 350) + "ms";
    });
  });

  const reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = (el) => el.classList.add("in");

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          show(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
  );
  reveals.forEach((el) => io.observe(el));

  // Быстро показываем то, что уже во вьюпорте (на случай троттлинга IO).
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          show(el);
          io.unobserve(el);
        }
      });
    })
  );

  // Жёсткий фейл-сейф: контент никогда не остаётся скрытым
  // (фоновая вкладка, headless-рендер, «мёртвый» IntersectionObserver).
  setTimeout(() => {
    reveals.forEach((el) => { show(el); io.unobserve(el); });
  }, 2600);
}

/* =============== ХЕДЕР + МЕНЮ =============== */
function wireChrome() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const setMenu = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
  };
  toggle.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true")
  );
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.getAttribute("data-lang")))
  );
}

/* =============== СТАРТ =============== */
document.addEventListener("DOMContentLoaded", () => {
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  let saved = "ru";
  try { saved = localStorage.getItem("md-lang") || "ru"; } catch (e) {}
  applyLang(saved);

  wireContacts();
  wireLeadForm();
  wireMap();
  wireReveal();
  wireChrome();
});

/* UI behavior and translations. Business settings live in config.js. */
(() => {
  "use strict";
  const config = window.MARAT_CONFIG;
  const links = window.MaratLinks;
  if (!config || !links) return;

  const kk = {
    skip: "Мазмұнға өту",
    "nav.label": "Негізгі навигация",
    "nav.mobile": "Мобильді навигация",
    "nav.services": "Қызметтер",
    "nav.works": "Жұмыстар",
    "nav.about": "Студия",
    "nav.contacts": "Байланыс",
    "nav.process": "Жұмыс тәртібі",
    "nav.lead": "Өтінім",
    "lang.label": "Сайт тілі",
    "menu.open": "Мәзірді ашу",
    "menu.close": "Мәзірді жабу",
    "cta.calculate": "Бағасын білу",
    "cta.whatsapp": "WhatsApp-та талқылау",
    "cta.services": "Қызметті таңдау",
    "cta.ask": "Толығырақ білу",
    "cta.instagram": "Instagram-ды көру",
    "cta.consultation": "Кеңес алу",
    "hero.location": "Астанадағы детейлинг-студия",
    "hero.title1": "Сіздің көлігіңіз.",
    "hero.title2": "Біздің қамқорлық.",
    "hero.description":
      "Кузовты қорғау, таза салон және әр сапардағы жайлылық. Мараттың жеке көзқарасымен.",
    "services.title1": "Әр бөлшекке",
    "services.title2": "қамқорлық.",
    "services.description":
      "Зауыттық бояуды сақтау, жылтырды қайтару немесе салонды тазалау. Көлігіңізге сәйкес шешімді таңдаймыз.",
    "services.note":
      "Баға көліктің түріне, күйіне және жұмыс көлеміне байланысты. Нақты бағаны жұмыс басталғанға дейін келісеміз.",
    "service.ppf.title": "Қорғаныш пленкасы",
    "service.ppf.description":
      "Тас соққысы мен ұсақ сызаттардан қорғау. Осал аймақтарға немесе бүкіл кузовқа мөлдір PPF пленкасын жапсыру.",
    "service.ppf.alt": "Кузовқа мөлдір қорғаныш пленкасын орнату",
    "service.polish.title": "Жылтырату және кузов күтімі",
    "service.polish.description":
      "Лактың ұсақ ақауларын жойып, түсін қалпына келтіреміз. Қорғаныш жабындысын көлікті қарап таңдауға болады.",
    "service.polish.alt": "Қара кузовты жылтырату машинасымен өңдеу",
    "service.clean.title": "Салонды химиялық тазалау",
    "service.clean.description":
      "Орындықтар, төбе, еден және пластикті терең тазалау. Салон материалдарына ұқыпты күтім.",
    "service.clean.alt": "Көлік орындығын экстрактормен тазалау",
    "service.sound.title": "Шуды оқшаулау",
    "service.sound.description":
      "Есіктерді, еденді және басқа аймақтарды өңдеу. Сізге қандай шу кедергі келтіретінін талқылаймыз.",
    "service.sound.alt": "Көлік есігінің ішіне шу оқшаулағыш орнату",
    "service.sale.title": "Көлігіңізді сатуға дайындайсыз ба?",
    "service.sale.description":
      "Кузов, салон және сатып алушы байқайтын бөлшектерді кешенді дайындауды талқылаймыз.",
    "service.wash.title": "Күнделікті күтім",
    "service.wash.description":
      "Детейлинг-жуу, әйнек пен фараларға күтім. Сәйкес нұсқаны Мараттан сұраңыз.",
    "works.title1": "Нәтиже",
    "works.title2": "бөлшектерде.",
    "works.description":
      "Біздің шеберхананың нақты жарияланымдары. Жұмыс барысы мен басқа жобаларды Instagram-нан көріңіз.",
    "works.bmw": "Химиялық тазалау: дейін және кейін",
    "works.bmw.alt":
      "MARAT DETAILING: BMW 850i химиялық тазалауға дейін және кейін",
    "works.getz": "Сатуға дайындаудың басы",
    "works.getz.alt": "Hyundai Getz химиялық тазалау алдында шеберханада",
    "works.instagramTitle": "Шеберханадан.\nСүзгісіз.",
    "works.instagramDescription":
      "Алғашқы тексеруден дайын нәтижеге дейін көлікпен не істейтінімізді көрсетеміз.",
    "about.eyebrow": "Танысыңыз, Марат",
    "about.title1": "Сіздің жеке",
    "about.title2": "детейлеріңіз.",
    "about.lead": "«Мен Маратпын, сіздің жеке детейлеріңіз»",
    "about.description":
      "Instagram-да осылай танысамын. Мұнда студияның жұмыстарымен танысып, қызметті таңдап, маған тікелей жаза аласыз.",
    "about.description2":
      "Көлігіңізде нені жақсартқыңыз келетінін айтыңыз. Кузов пен салонның күйін талқылап, лайықты күтімді таңдаймыз.",
    "about.alt": "Марат шеберханада жылтырату машинасымен жұмыс істеуде",
    "process.title": "Әр кезең түсінікті.",
    "process.one": "Міндетті талқылаймыз",
    "process.oneDescription":
      "Көлік моделін, қалауыңызды және фотосын жібересіз. Марат қызметті таңдауға көмектеседі.",
    "process.two": "Жұмысты келісеміз",
    "process.twoDescription":
      "Тексеруден кейін көлем, материал, баға және уақытты нақтылаймыз. Барлығы жұмыс басталғанға дейін.",
    "process.three": "Нәтижені көрсетеміз",
    "process.threeDescription":
      "Көлікті алған кезде қарап, кейінгі күтім бойынша ұсыныстар аласыз.",
    "faq.title": "Жиі қойылатын сұрақтар",
    "faq.price": "Бағасын қалай білуге болады?",
    "faq.priceAnswer":
      "Маркасы, моделі және керек қызметті жазыңыз. Фото алдын ала бағалауға көмектеседі. Соңғы баға көлікті тексергеннен кейін анықталады.",
    "faq.book": "Қалай жазылуға болады?",
    "faq.bookAnswer":
      "Маратқа WhatsApp-та жазыңыз немесе қоңырау шалыңыз. Ыңғайлы уақытты келісеміз. Келмес бұрын жазылуды нақтылаңыз.",
    "faq.time": "Жұмыс қанша уақыт алады?",
    "faq.timeAnswer":
      "Бұл қызметке, көліктің күйіне және жұмыс көлеміне байланысты. Мерзімін жазылғанда келісіп, тексеруден кейін нақтылаймыз.",
    "faq.film": "Пленка ма, қорғаныш жабындысы ма?",
    "faq.filmAnswer":
      "Пленка кузовты тас соққысынан қорғауға көмектеседі. Жабынды күтімді жеңілдетіп, жылтыр береді. Таңдау пайдалану жағдайы мен мақсатыңызға байланысты.",
    "lead.title1": "Көлігіңізден",
    "lead.title2": "бастайық.",
    "lead.description":
      "Марат лайықты шешім ұсынуы үшін бірнеше мәлімет қажет. Әңгімені WhatsApp-та жалғастырамыз.",
    "form.name": "Атыңыз",
    "form.namePlaceholder": "Сізге қалай хабарласуға болады?",
    "form.phone": "Телефон (міндетті емес)",
    "form.service": "Қай қызмет қызықтырады?",
    "form.car": "Көліктің маркасы мен моделі",
    "form.carPlaceholder": "Мысалы, Toyota Camry 2022",
    "form.message": "Қалауыңыз (міндетті емес)",
    "form.messagePlaceholder": "Көлігіңізде нені жақсартқыңыз келеді?",
    "form.consent":
      "Кеңес алу үшін енгізілген деректерді WhatsApp-қа беруге келісемін және таныстым:",
    "form.privacy": "құпиялық саясаты",
    "form.submit": "WhatsApp-та жалғастыру",
    "form.hint": "Дайын хабарламасы бар чат ашылады. Оны өзіңіз жібересіз.",
    "option.consultation": "Кеңес қажет",
    "option.sale": "Сатуға дайындау",
    "option.wash": "Детейлинг-жуу",
    "option.ceramic": "Керамикалық жабынды",
    "option.lights": "Фараларды жылтырату және әйнек күтімі",
    "contacts.title": "Сізбен байланыстамыз",
    "contacts.name": "Марат · кеңес және жазылу",
    "contacts.visit": "Студияға келіңіз",
    "contacts.booking":
      "Алдын ала жазылу бойынша. Келетін уақытты Маратпен келісіңіз.",
    "contacts.route": "Google Maps-та маршрут",
    "contacts.twogis": "2ГИС-те ашу",
    "contacts.mapNote":
      "Карта жүктелмесе, маршрутты немесе 2ГИС сілтемесін ашыңыз.",
    "map.title": "Google Maps: MARAT DETAILING орналасқан жер",
    "footer.line": "Көзге көрінетін қамқорлық.",
    "footer.top": "Жоғарыға",
    "footer.privacy": "Құпиялық",
    "footer.city": "Астана, Қазақстан",
    "whatsapp.label": "Мараттан WhatsApp-та кеңес алу",
  };
  const textNodes = [...document.querySelectorAll("[data-i18n]")].map(
    (element) => ({
      element,
      key: element.dataset.i18n,
      ru: element.innerText,
    }),
  );
  const attributeNodes = ["aria", "alt", "placeholder", "title"].flatMap(
    (attribute) =>
      [...document.querySelectorAll(`[data-i18n-${attribute}]`)].map(
        (element) => ({
          element,
          attribute: attribute === "aria" ? "aria-label" : attribute,
          key: element.getAttribute(`data-i18n-${attribute}`),
          ru: element.getAttribute(
            attribute === "aria" ? "aria-label" : attribute,
          ),
        }),
      ),
  );
  let language = "ru";
  const serviceNames = {
    ru: {
      consultation: "Консультация",
      ppf: "Бронеплёнка",
      polish: "Полировка и уход за кузовом",
      clean: "Химчистка салона",
      sound: "Шумоизоляция",
      sale: "Предпродажная подготовка",
      wash: "Детейлинг-мойка",
      ceramic: "Керамическое покрытие",
      lights: "Полировка фар и уход за стёклами",
    },
    kk: {
      consultation: "Кеңес алу",
      ppf: "Қорғаныш пленкасы",
      polish: "Жылтырату және кузов күтімі",
      clean: "Салонды химиялық тазалау",
      sound: "Шуды оқшаулау",
      sale: "Сатуға дайындау",
      wash: "Детейлинг-жуу",
      ceramic: "Керамикалық жабынды",
      lights: "Фараларды жылтырату және әйнек күтімі",
    },
  };
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  function setMenu(open, restoreFocus = false) {
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    menuToggle.setAttribute(
      "aria-label",
      language === "kk"
        ? kk[open ? "menu.close" : "menu.open"]
        : open
          ? "Закрыть меню"
          : "Открыть меню",
    );
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener("click", () => setMenu(mobileMenu.hidden));
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileMenu.hidden) setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!mobileMenu.hidden && !event.target.closest(".site-header"))
      setMenu(false);
  });
  matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  function consultationMessage(service = "") {
    const greeting =
      language === "kk"
        ? "Сәлеметсіз бе, Марат! Сайттан жазып отырмын. Көлігіме күтім жасау бойынша кеңес алғым келеді."
        : "Здравствуйте, Марат! Пишу с сайта MARAT DETAILING. Хочу консультацию по уходу за автомобилем.";
    return service && serviceNames[language][service]
      ? `${greeting}\n${language === "kk" ? "Қызмет" : "Интересует услуга"}: ${serviceNames[language][service]}.`
      : greeting;
  }
  function updateContacts() {
    document.querySelectorAll("[data-phone]").forEach((element) => {
      element.href = `tel:${config.phone}`;
      element.textContent = config.phoneDisplay;
    });
    document.querySelectorAll("[data-whatsapp]").forEach((element) => {
      element.href = links.whatsappUrl(
        config.whatsapp,
        consultationMessage(element.dataset.whatsapp),
      );
    });
    document.querySelectorAll("[data-instagram]").forEach((element) => {
      element.href = config.instagram;
    });
    document.querySelectorAll("[data-twogis]").forEach((element) => {
      element.href = config.twogis;
    });
    document.querySelectorAll("[data-address]").forEach((element) => {
      element.textContent = config.address[language];
    });
    const maps = links.mapUrls(config, language);
    const mapFrame = document.getElementById("mapFrame");
    if (mapFrame.src !== maps.embed) mapFrame.src = maps.embed;
    document.getElementById("googleRoute").href = maps.route;
  }
  function setLanguage(value) {
    language = value === "kk" || value === "kz" ? "kk" : "ru";
    document.documentElement.lang = language;
    textNodes.forEach(({ element, key, ru }) => {
      element.textContent = language === "kk" ? kk[key] || ru : ru;
    });
    attributeNodes.forEach(({ element, attribute, key, ru }) => {
      element.setAttribute(attribute, language === "kk" ? kk[key] || ru : ru);
    });
    document
      .querySelectorAll("[data-lang]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.lang === language),
        ),
      );
    document.title =
      language === "kk"
        ? "MARAT DETAILING | Астанадағы детейлинг, қорғаныш пленкасы және химиялық тазалау"
        : "MARAT DETAILING | Детейлинг, бронеплёнка и химчистка в Астане";
    document.querySelector('meta[name="description"]').content =
      language === "kk"
        ? "Астанадағы MARAT DETAILING: кузовты қорғау, жылтырату, салонды химиялық тазалау және шуды оқшаулау. Марат: +7 707 858 25 19. Дулатұлы, 180/1в."
        : "MARAT DETAILING в Астане: бронеплёнка, полировка, химчистка, шумоизоляция и подготовка авто к продаже. Марат: +7 707 858 25 19. Дулатова, 180/1в.";
    try {
      localStorage.setItem("marat-language", language);
    } catch {
      /* Storage may be blocked; the page still works. */
    }
    updateContacts();
    setMenu(false);
    document.getElementById("formStatus").textContent = "";
    clearPhoneError();
  }
  document
    .querySelectorAll("[data-lang]")
    .forEach((button) =>
      button.addEventListener("click", () => setLanguage(button.dataset.lang)),
    );
  let savedLanguage = "ru";
  try {
    savedLanguage =
      localStorage.getItem("marat-language") ||
      localStorage.getItem("lang") ||
      "ru";
  } catch {
    /* Private browsers may not allow storage. */
  }

  const form = document.getElementById("leadForm");
  const phoneInput = document.getElementById("phone");
  function clearPhoneError() {
    phoneInput.removeAttribute("aria-invalid");
    phoneInput.setCustomValidity("");
    document.getElementById("phoneError").textContent = "";
  }
  phoneInput.addEventListener("input", clearPhoneError);
  ["name", "car"].forEach((id) =>
    document
      .getElementById(id)
      .addEventListener("input", (event) => event.target.setCustomValidity("")),
  );
  document.querySelectorAll("[data-select-service]").forEach((link) =>
    link.addEventListener("click", () => {
      document.getElementById("service").value = link.dataset.selectService;
      document.getElementById("formStatus").textContent =
        language === "kk"
          ? `Таңдалған қызмет: ${serviceNames.kk[link.dataset.selectService]}`
          : `Выбрана услуга: ${serviceNames.ru[link.dataset.selectService]}`;
    }),
  );
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    for (const id of ["name", "car"]) {
      if (!String(data.get(id) || "").trim()) {
        const input = document.getElementById(id);
        input.setCustomValidity(
          language === "kk" ? "Бұл өрісті толтырыңыз." : "Заполните это поле.",
        );
        input.reportValidity();
        return;
      }
    }
    const phone = String(data.get("phone") || "").trim();
    if (
      phone &&
      (!/^[+\d\s()-]+$/.test(phone) ||
        !/^\d{10,15}$/.test(phone.replace(/\D/g, "")))
    ) {
      const error =
        language === "kk"
          ? "10–15 цифрдан тұратын телефон нөмірін енгізіңіз."
          : "Введите номер телефона из 10–15 цифр.";
      phoneInput.setAttribute("aria-invalid", "true");
      phoneInput.setCustomValidity(error);
      document.getElementById("phoneError").textContent = error;
      phoneInput.reportValidity();
      return;
    }
    if (!form.reportValidity()) return;
    const service =
      serviceNames[language][data.get("service")] ||
      serviceNames[language].consultation;
    const labels =
      language === "kk"
        ? ["Атым", "Көлік", "Қызмет", "Телефон", "Қалауым"]
        : ["Меня зовут", "Автомобиль", "Услуга", "Телефон", "Пожелания"];
    const message = [
      consultationMessage(),
      `${labels[0]}: ${String(data.get("name")).trim()}`,
      `${labels[1]}: ${String(data.get("car")).trim()}`,
      `${labels[2]}: ${service}`,
      phone ? `${labels[3]}: ${phone}` : "",
      data.get("message")?.trim()
        ? `${labels[4]}: ${data.get("message").trim()}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      const url = links.whatsappUrl(config.whatsapp, message);
      document.getElementById("formStatus").textContent =
        language === "kk"
          ? "WhatsApp ашылуда. Хабарламаны чатта жіберіңіз."
          : "Открываем WhatsApp. Отправьте сообщение в чате.";
      window.location.assign(url);
    } catch {
      document.getElementById("formStatus").textContent =
        language === "kk"
          ? "Чатты ашу мүмкін болмады. Маратқа қоңырау шалыңыз."
          : "Не удалось открыть чат. Позвоните Марату по номеру в контактах.";
    }
  });
  setLanguage(savedLanguage);
  form.querySelector('[type="submit"]').disabled = false;
  document.getElementById("year").textContent = new Date().getFullYear();
  if ("IntersectionObserver" in window) {
    const navLinks = [...document.querySelectorAll(".desktop-nav a")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              if (link.hash === `#${entry.target.id}`)
                link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("#services, #works, #about, #contacts")
      .forEach((section) => observer.observe(section));
  }
})();

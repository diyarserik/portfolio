/* =========================================================
   ВСЁ, ЧТО НУЖНО МЕНЯТЬ, — ЗДЕСЬ
   Языки: en (по умолчанию), kz, ru.
   Любой текст можно задать как { kz: "...", en: "...", ru: "..." }
   или одной строкой, если он одинаковый на всех языках.

   Видео: можно просто вставить ссылку целиком:
     "https://youtu.be/F420ODzQZgo"  или  "https://vimeo.com/76979871"
   или коротко: "youtube:ID" / "vimeo:ID"
     vimeo.com/76979871              → "vimeo:76979871"
     youtube.com/watch?v=aqz-KE-bpKQ → "youtube:aqz-KE-bpKQ"
   thumb   — обложка (необязательно: без неё возьмётся превью с YouTube/Vimeo)
   preview — немой mp4 на 3–6 секунд, играет при наведении (необязательно)
   tone    — цвет заглушки, пока обложки нет

   КАК НЕ ПОКАЗЫВАТЬ ПОЛНУЮ ВЕРСИЮ
   full: false  — работа помечается как тизер, в плеере пишется
                  «Полная версия по запросу», ссылки на Vimeo/YouTube нет.
   video        — что играет: ссылка на короткий тизер ("vimeo:ID"),
                  или свой файл из репозитория: "assets/project-1-teaser.mp4".
   start / end  — (необязательно) секунды: показать только кусок ролика.
                  YouTube понимает start и end, Vimeo — только start.
                  Это не защита: зритель может перемотать. Надёжнее —
                  загрузить отдельный короткий тизер.
   ========================================================= */

const DEFAULT_LANG = "en";
const SHOWREEL = "youtube:p1L0u-ibDrQ";
const EMAIL = "diyar.sky7777@gmail.com";

// Заглушки — замени на реальных клиентов
const CLIENTS = ["Comic-Con Astana", "INSIDER Kazakhstan", "Kunzharyq", "Orda", "Kezen", "Madi Rymbaeyv", "ALPHA", "Almaz Merzhakypov"];

const PROJECTS = [
  {
    title: { kz: "Backstage for ALPHA", en: "Backstage for ALPHA", ru: "Backstage for ALPHA" },
    type: { kz: "Music video backstage", en: "Music video backstage", ru: "Music video backstage" },
    client: { kz: "ALPHA", en: "ALPHA", ru: "ALPHA" },
    year: 2026,
    video: "youtube:https://youtu.be/B82OR6r9dBk",
    full: true,              // false — только тизер + «Полная версия по запросу»
    thumb: "",               // "images/project-1.jpg"
    preview: "",             // "assets/project-1.mp4"
    tone: "#1c2c52",
    roles: { kz: "Режиссёр, оператор, монтаж, түс түзету", en: "Director, DP, edit, color", ru: "Режиссёр, оператор, монтаж, цвет" },
    
    stills: []               // ["images/p1-1.jpg", "images/p1-2.jpg"]
  },
  {
    title: { kz: "salseri yandex studio", en: "salseri yandex studio", ru: "salseri yandex studio" },
    type: { kz: "Жарнама", en: "Commercial", ru: "Реклама" },
    client: { kz: "SALSERI", en: "SALSERI", ru: "SALSERI" },
    year: 2026,
    video: "youtube:https://youtube.com/shorts/ZYG1uvJKExE",
    full: true,              // false — только тизер + «Полная версия по запросу»
    thumb: "",
    preview: "",
    tone: "#6a2f1c",
    roles: { kz: "Оператор, монтаж", en: "DP, edit", ru: "Оператор, монтаж" },
   
    },
    stills: []
  },
  {
    title: { kz: "ORDA concert", en: "ORDA concert", ru: "ORDA concert" },
    type: { kz: "Backstage", en: "Backstage", ru: "Backstage" },
    client: { kz: "SOLDOUT concerts", en: "SOLDOUT concerts", ru: "SOLDOUT concerts" },
    year: 2025,
    video: "youtube:dGX0NZis3_Y",
    full: true,              // false — только тизер + «Полная версия по запросу»
    thumb: "",
    preview: "",
    tone: "#2d3b2f",
    roles: { kz: "Идея, түсірілім, монтаж, түс түзету", en: "Concept, camera, edit, color", ru: "Идея, съёмка, монтаж, цвет" },
    stills: []
  }
];

const SERVICES = [
  {
    name: { kz: "Идея", en: "Concept", ru: "Идея" },
    text: {
      kz: "Брендіңізді қалай бейнелеуді ойластырамын: концепция, сценарий, раскадровка, референстер.",
      en: "I work out how to tell your story: concept, script, storyboard, references.",
      ru: "Придумываю, как рассказать о вас: концепция, сценарий, раскадровка, референсы."
    }
  },
  {
    name: { kz: "Түсірілім", en: "Production", ru: "Съёмка" },
    text: {
      kz: "Брендке арналған бейне мен фото: клиптер, жарнама, іс-шаралар, сұхбаттар. Жарық пен стабилизатор өзімде бар.",
      en: "Video and photo for brands: music videos, ads, events, interviews. My own lights and stabilizers.",
      ru: "Видео и фото для бренда: клипы, реклама, ивенты, интервью. Свой свет и стабилизация."
    }
  },
  {
    name: { kz: "Постпродакшн", en: "Post-production", ru: "Постпродакшн" },
    text: {
      kz: "Монтаж, түс түзету, саунд-дизайн және графика. Әр кадрды мұқият дайындаймын.",
      en: "Editing, color grading, sound design and graphics. Every frame gets finished.",
      ru: "Монтаж, цветокоррекция, саунд-дизайн и графика. Довожу каждый кадр."
    }
  },
  {
    name: { kz: "Promotion", en: "Promotion", ru: "Продвижение" },
    text: {
      kz: "Бейнеңізді көбірек адам көруі үшінReels пен TikTok үшін қысқа нұсқалар, мұқабалар және жариялау жоспары",
      en: "Cut-downs for Reels and TikTok, covers and a posting plan, so the videos get watched.",
      ru: "Нарезки под Reels и TikTok, обложки и план публикаций, чтобы видео смотрели."
    }
  }
];

// Тексты страницы
const TEXT = {
  name:        { kz: "Дияр Серік", en: "Diyar Serik", ru: "Дияр Серік" },
  pageTitle:   { kz: "Дияр Серік — видеограф", en: "Diyar Serik — videographer", ru: "Дияр Серік — видеограф" },
  pageDesc:    { kz: "Алматыда бейне түсіру және әлеуметтік желілерге контент жасау: идея, түсірілім, монтаж, жылжыту.",
                 en: "Video production and social media content in Almaty: concept, production, post, promotion.",
                 ru: "Видеопродакшн и контент для соцсетей в Алматы: идея, съёмка, постпродакшн, продвижение." },
  navWork:     { kz: "Жұмыстар", en: "Work", ru: "Работы" },
  navServices: { kz: "Қызметтер", en: "Services", ru: "Услуги" },
  navAbout:    { kz: "Мен туралы", en: "About", ru: "Обо мне" },
  navContact:  { kz: "Байланыс", en: "Contact", ru: "Связаться" },
  city:        { kz: "Алматы, KZ", en: "Almaty, KZ", ru: "Алматы, KZ" },
  tags:        { kz: "Бейне / Фото / Әлеуметтік желілер", en: "Video / Photo / Social", ru: "Видео / Фото / Соцсети" },
  hero1:       { kz: "Бейне өндірісі", en: "Video production", ru: "Видеопродакшн" },
  hero2:       { kz: "және әлеуметтік", en: "and social media", ru: "и контент для" },
  hero3:       { kz: "желі контенті", en: "content", ru: "соцсетей" },
  reel:        { kz: "Соңғы жұмысты көру", en: "Watch latest work", ru: "Смотреть последнюю работу" },
  scroll:      { kz: "Төмен", en: "Scroll", ru: "Листай" },
  clients:     { kz: "Бірге жұмыс істегендер", en: "Worked with", ru: "Со мной работали" },
  valuesLabel: { kz: "Жұмысымның негізінде", en: "At the core of my work", ru: "В основе моей работы" },
  values:      { kz: "Эмпатия, дәлдік және батылдық. Адамдар мен брендтерді көрермен бейнені соңына дейін көретіндей етіп түсіремін.",
                 en: "Empathy, precision and courage. I film people and brands so the video gets watched to the end.",
                 ru: "Эмпатия, точность и смелость. Я снимаю людей и бренды так, чтобы видео досматривали до конца." },
  valuesBtn:   { kz: "Жұмыстарды көру", en: "See the work", ru: "Смотреть работы" },
  workH:       { kz: "Таңдаулы жұмыстар", en: "Selected work", ru: "Избранные работы" },
  svcH:        { kz: "Не істеймін", en: "What I do", ru: "Что я делаю" },
  svcSub:      { kz: "Идеядан жариялауға дейін", en: "From idea to publishing", ru: "От идеи до публикации" },
  portrait:    { kz: "Портрет", en: "Portrait", ru: "Портрет" },
  aboutH:      { kz: "Сәлем, менің есімім Дияр", en: "Hi, I'm Diyar", ru: "Привет, я Дияр" },
  aboutLead:   { kz: "Алматыда тұратын видеографпын. Музыкант достарыма клип түсіруден бастадым, қазір брендтер мен әртістерге жарнама мен клип түсіріп, контент жасаймын.",
                 en: "Videographer based in Almaty. I started out shooting music videos for musician friends; now I make ads, music videos and content for brands and artists.",
                 ru: "Видеограф из Алматы. Начинал с клипов для друзей-музыкантов, сейчас снимаю рекламу, клипы и контент для брендов и артистов." },
  aboutP:      { kz: "Табиғи жарықты, үзіліссіз ұзақ кадрларды және камераға үйренбеген адамдарды ұнатамын. Жобаны идеядан бастап соңғы түс түзетуге дейін өзім жүргіземін, ал ірі түсірілімдерге команда жинаймын.",
                 en: "I love natural light, long takes and people who aren't used to the camera. I run projects myself from idea to final grade, and bring in a crew for bigger shoots.",
                 ru: "Люблю живой свет, длинные планы и людей, которые не привыкли к камере. Веду проект сам от идеи до финального цвета, а на больших съёмках собираю команду." },
  specCam:     { kz: "Камера", en: "Camera", ru: "Камера" },
  specStab:    { kz: "Стаб.", en: "Stab.", ru: "Стаб." },
  specPost:    { kz: "Монтаж", en: "Post", ru: "Пост" },
  specLang:    { kz: "Тілдер", en: "Languages", ru: "Языки" },
  specLangV:   { kz: "қазақ, ағылшын, орыс тілдері", en: "Kazakh, English, Russian", ru: "казахский, английский, русский" },
  cta:         { kz: "Жаңа жоба бар ма?", en: "New project?", ru: "Новый проект?" },
  magnet:      { kz: "Талқылайық", en: "Let's talk", ru: "Давай обсудим" },
  copy:        { kz: "Мекенжайды көшіру", en: "Copy email", ru: "Скопировать почту" },
  copied:      { kz: "Мекенжай көшірілді", en: "Email copied", ru: "Почта скопирована" },
  selected:    { kz: "Белгіленді, көшіріп алыңыз", en: "Selected, copy it", ru: "Выделено, скопируй" },
  now:         { kz: "Алматыда қазір", en: "Almaty, now", ru: "Алматы, сейчас" },
  toTop:       { kz: "Жоғарыға ↑", en: "Back to top ↑", ru: "Наверх ↑" },
  close:       { kz: "Жабу", en: "Close", ru: "Закрыть" },
  watch:       { kz: "Көру", en: "Watch", ru: "Смотреть" },
  showreel:    { kz: "Шоурил 2026", en: "Showreel 2026", ru: "Шоурил 2026" },
  notLoading:  { kz: "Ашылмай тұр ма?", en: "Not loading?", ru: "Не грузится?" },
  teaser:      { kz: "Тизер", en: "Teaser", ru: "Тизер" },
  onRequest:   { kz: "Толық нұсқасы сұраныс бойынша", en: "Full version on request", ru: "Полная версия по запросу" },
  askFull:     { kz: "Сұрау жіберу", en: "Ask for it", ru: "Запросить" },
  openOn:      { kz: "{site} сайтында ашу", en: "Open on {site}", ru: "Открыть на {site}" },
  projects:    { kz: ["жоба"], en: ["project", "projects"], ru: ["проект", "проекта", "проектов"] }
};

/* ========== дальше можно не трогать ========== */

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const parse = v => {
  const s = String(v ?? "").trim();
  let m;
  if ((m = s.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/))) return { host: "youtube", id: m[1] };
  if ((m = s.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([\da-f]+))?/i))) return { host: "vimeo", id: m[1], hash: m[2] };
  const [host, id] = s.split(":");
  return { host, id };
};
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

const LANGS = ["en", "kz", "ru"];
const HTML_LANG = { kz: "kk", en: "en", ru: "ru" };
let lang = DEFAULT_LANG;
try { const saved = localStorage.getItem("lang"); if (LANGS.includes(saved)) lang = saved; } catch {}

const L = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.en ?? Object.values(v)[0]) : v;
const t = key => L(TEXT[key]) ?? key;

function countLabel(n) {
  const f = TEXT.projects[lang];
  if (lang === "ru") return n % 10 === 1 && n % 100 !== 11 ? f[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? f[1] : f[2];
  if (lang === "en") return n === 1 ? f[0] : f[1];
  return f[0];
}

const isFile = v => /\.(mp4|webm|mov)(\?.*)?$/i.test(String(v));
const embedUrl = (v, p = {}) => {
  const { host, id, hash } = parse(v);
  const st = +p.start || 0, en = +p.end || 0;
  return host === "youtube"
    ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1${st ? `&start=${st}` : ""}${en ? `&end=${en}` : ""}`
    : `https://player.vimeo.com/video/${id}?${hash ? `h=${hash}&` : ""}autoplay=1&title=0&byline=0&portrait=0&dnt=1${st ? `#t=${st}s` : ""}`;
};
const pageUrl = v => { const { host, id, hash } = parse(v); return host === "youtube" ? `https://youtu.be/${id}` : `https://vimeo.com/${id}${hash ? "/" + hash : ""}`; };
const thumbUrl = p => {
  if (p.thumb) return p.thumb;
  if (isFile(p.video)) return "";
  const { host, id } = parse(p.video);
  return host === "youtube" ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : `https://vumbnail.com/${id}.jpg`;
};

PROJECTS.concat([{ video: SHOWREEL }]).forEach(p => {
  const { host, id } = parse(p.video);
  if (host === "youtube" && !/^[\w-]{11}$/.test(id || "")) console.warn("Неверный YouTube ID:", p.video, "— вставь ссылку на видео целиком");
});

/* ---------- Клиенты (одинаковые на всех языках) ---------- */
const clientsHtml = CLIENTS.map(c => `<span>${esc(c)}</span>`).join("");
$("#clients").innerHTML = clientsHtml + clientsHtml.replace(/<span>/g, '<span aria-hidden="true">');

/* ---------- Отрисовка текстов на выбранном языке ---------- */
const values = $("#values");
let words = [];

function render() {
  document.documentElement.lang = HTML_LANG[lang];
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("pageDesc"));

  $$("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    el.textContent = v;
    if (el.hasAttribute("data-scramble")) el.dataset.final = v;
  });
  $("#portraitImg")?.setAttribute("alt", t("portrait"));
  $$("#lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  values.innerHTML = esc(t("values")).split(/(\s+)/).map(w => w.trim() ? `<span class="w">${w}</span>` : w).join("");
  words = $$("#values .w");
  if (calm) words.forEach(w => w.classList.add("on")); else fillValues();

  $("#projects").innerHTML = PROJECTS.map((p, i) => `
    <button class="card${i === 0 ? " wide" : ""}" type="button" data-i="${i}" data-cursor="${esc(t("watch"))}">
      <div class="card-media" style="--tone:${esc(p.tone || "#222")};--lx:${25 + i * 22}%">
        <div class="tone"></div>
        <img src="${esc(thumbUrl(p))}" alt="" loading="lazy" onerror="this.remove()">
        ${p.preview ? `<video src="${esc(p.preview)}" muted loop playsinline preload="none"></video>` : ""}
        <div class="card-hud mono"><span class="rec">Play</span><span>${[p.full === false ? esc(t("teaser")) : "", p.duration ? esc(p.duration) + ":00" : ""].filter(Boolean).join(" / ")}</span></div>
      </div>
      <div class="card-body">
        <div>
          <span class="card-title">${esc(L(p.title))}</span>
          <p class="card-sub">${esc(L(p.type))}, ${esc(L(p.client))}</p>
        </div>
        <p class="card-meta mono">${esc(p.year)}<br>${esc(String(L(p.roles)).split(",")[0])}</p>
      </div>
    </button>`).join("");
  bindPreviews();
  $("#workCount").textContent = `${String(PROJECTS.length).padStart(2, "0")} ${countLabel(PROJECTS.length)}`;

  $("#svc").innerHTML = SERVICES.map((s, i) => `
    <li><div class="svc-row">
      <span class="svc-n mono">${String(i + 1).padStart(2, "0")} / ${String(SERVICES.length).padStart(2, "0")}</span>
      <span class="svc-name">${esc(L(s.name))}</span>
      <span class="svc-d">${esc(L(s.text))}</span>
    </div></li>`).join("");

  fitAll();
}

function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return;
  lang = next;
  try { localStorage.setItem("lang", lang); } catch {}
  render();
  $$("[data-scramble]").forEach(scramble);
}
$("#lang").addEventListener("click", e => {
  const b = e.target.closest("[data-lang]");
  if (b) setLang(b.dataset.lang);
});

/* ---------- Строки на всю ширину ---------- */
function fitAll() {
  $$(".fit").forEach(el => {
    const box = el.closest("h1, h2");
    const w = box.clientWidth;
    el.style.fontSize = "100px";
    el.style.fontSize = Math.min(100 * w / el.getBoundingClientRect().width * .97, 420) + "px";
  });
}
document.fonts?.ready.then(fitAll);
addEventListener("resize", fitAll);

/* ---------- Расшифровка текста ---------- */
const GLYPHS = {
  en: "█▓▒░<>/\\_=+*#01ABCDEFGHKLMNPRSTXZ",
  kz: "█▓▒░<>/\\_=+*#01ӘҒҚҢӨҰҮІБЖЗКЛМНП",
  ru: "█▓▒░<>/\\_=+*#01АБВГДЕЖЗКЛМНОПРСТ"
};
function scramble(el) {
  if (calm) return;
  const final = el.dataset.final ?? (el.dataset.final = el.textContent);
  let f = 0; const total = 16;
  clearInterval(el._t);
  el._t = setInterval(() => {
    f++;
    el.textContent = [...final].map((ch, i) =>
      ch === " " || i < (f / total) * final.length ? ch : GLYPHS[lang][(Math.random() * GLYPHS[lang].length) | 0]
    ).join("");
    if (f >= total) { clearInterval(el._t); el.textContent = final; }
  }, 34);
}

/* ---------- Заливка текста при прокрутке ---------- */
function fillValues() {
  if (!words.length) return;
  const r = values.getBoundingClientRect();
  const p = Math.min(Math.max((innerHeight * .85 - r.top) / (r.height + innerHeight * .35), 0), 1);
  const n = Math.round(p * words.length);
  words.forEach((w, i) => w.classList.toggle("on", i < n));
}

/* ---------- Превью при наведении ---------- */
function bindPreviews() {
  $$(".card").forEach(c => {
    const v = c.querySelector("video");
    if (!v) return;
    v.addEventListener("canplay", () => v.classList.add("ok"));
    c.addEventListener("mouseenter", () => { v.preload = "auto"; v.play().catch(() => {}); });
    c.addEventListener("mouseleave", () => v.pause());
  });
}

render();

$$("[data-scramble]").forEach((el, i) => {
  setTimeout(() => scramble(el), 250 + i * 60);
  el.addEventListener("mouseenter", () => scramble(el));
});

/* ---------- Появление героя ---------- */
requestAnimationFrame(() => {
  document.body.classList.add("ready");
  setTimeout(() => document.body.classList.add("settled"), calm ? 0 : 1500);
});

/* ---------- Шапка прячется при прокрутке вниз ---------- */
let lastY = 0;
function onScroll() {
  const y = scrollY;
  $("#top").classList.toggle("hide", y > 400 && y > lastY);
  lastY = y;
  if (!calm) fillValues();
}
addEventListener("scroll", onScroll, { passive: true });

/* ---------- Плавная прокрутка ---------- */
if (window.Lenis && !calm) {
  const lenis = new Lenis({ lerp: .1 });
  const raf = time => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    e.preventDefault();
    lenis.scrollTo(id === "#" ? 0 : id, { offset: 0 });
  }));
}

/* ---------- Курсор ---------- */
const cursor = $("#cursor"), label = $("#cursorLabel");
let mx = -100, my = -100, cx = -100, cy = -100;
if (finePointer) {
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    const el = e.target.closest("[data-cursor]");
    cursor.classList.toggle("big", !!el);
    if (el) label.textContent = el.dataset.cursor;
  });
  (function loop() {
    cx += (mx - cx) * (calm ? 1 : .2); cy += (my - cy) * (calm ? 1 : .2);
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- Магнитная кнопка ---------- */
const magnet = $("#magnet");
if (finePointer && !calm) {
  magnet.addEventListener("pointermove", e => {
    const r = magnet.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
    magnet.style.transform = `translate(${x * .3}px, ${y * .3}px)`;
    magnet.firstElementChild.style.transform = `translate(${x * .15}px, ${y * .15}px)`;
  });
  magnet.addEventListener("pointerleave", () => { magnet.style.transform = ""; magnet.firstElementChild.style.transform = ""; });
}

/* ---------- Плеер ---------- */
const dialog = $("#player"), frame = $("#playerFrame"), fileVideo = $("#playerVideo");
function openVideo(p) {
  const video = p ? p.video : SHOWREEL;
  const site = parse(video).host === "youtube" ? "YouTube" : "Vimeo";
  const local = isFile(video);
  frame.hidden = local; fileVideo.hidden = !local;
  if (local) {
    fileVideo.src = video;
    if (p?.start) fileVideo.currentTime = +p.start;
    fileVideo.play().catch(() => {});
  } else frame.src = embedUrl(video, p || {});
  const extra = p && p.full === false
    ? `<p class="ext">${esc(t("onRequest"))}. <a href="#contact" data-request>${esc(t("askFull"))}</a></p>`
    : local ? "" : `<p class="ext">${esc(t("notLoading"))} <a href="${pageUrl(video)}" target="_blank" rel="noopener">${esc(t("openOn").replace("{site}", site))}</a></p>`;
  $("#playerTitle").textContent = p ? L(p.title) : t("showreel");
  $("#playerInfo").innerHTML = (p ? `
      ${p.description ? `<p>${esc(L(p.description))}</p>` : ""}
      <p class="credits">${esc(L(p.type))}, ${esc(L(p.client))}, ${esc(p.year)}<br>${esc(L(p.roles))}</p>
      ${p.stills?.length ? `<div class="stills">${p.stills.map(s => `<img src="${esc(s)}" alt="" loading="lazy">`).join("")}</div>` : ""}` : "")
    + extra;
  cursor.classList.remove("big");
  dialog.showModal();
}
dialog.addEventListener("close", () => { frame.src = ""; fileVideo.pause(); fileVideo.removeAttribute("src"); fileVideo.load(); });
$("#playerInfo").addEventListener("click", e => {
  if (!e.target.closest("[data-request]")) return;
  e.preventDefault();
  dialog.close();
  $("#contact").scrollIntoView({ behavior: calm ? "auto" : "smooth" });
});
// Полная длина локального тизера: остановить на end
fileVideo.addEventListener("timeupdate", () => {
  const p = PROJECTS.find(x => x.video && fileVideo.src.endsWith(x.video));
  if (p?.end && fileVideo.currentTime >= +p.end) fileVideo.pause();
});
$("#closePlayer").addEventListener("click", () => dialog.close());
$("#reelBtn").addEventListener("click", () => openVideo(null));
$("#projects").addEventListener("click", e => {
  const c = e.target.closest(".card");
  if (c) openVideo(PROJECTS[c.dataset.i]);
});

/* ---------- WebGL-фон героя ---------- */
(function heroGL() {
  const canvas = $("#gl");
  const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
  if (!gl) { canvas.style.background = "radial-gradient(ellipse at 30% 40%, #3a1250, #06040c 70%)"; return; }

  const vs = `attribute vec2 p; varying vec2 uv; void main(){ uv = p*.5+.5; gl_Position = vec4(p,0.,1.); }`;
  const fs = `
    precision highp float;
    varying vec2 uv;
    uniform float t; uniform vec2 res; uniform vec2 mouse; uniform float hover;
    uniform sampler2D tex; uniform float hasTex; uniform vec2 texRes;

    float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
    float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
    float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v+=a*n(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return v; }

    float field(vec2 q){
      q.x += .25*sin(q.y*1.8 + t*.15);
      float w = fbm(q*1.3 + vec2(t*.04, -t*.03));
      float r = sin((q.y*1.2 + q.x*.35 + w*2.4)*5. - t*.35);
      return smoothstep(.2, 1., r)*w*1.6 + w*w*.5;
    }
    vec3 ramp(float v){
      vec3 c = mix(vec3(.02,.01,.05), vec3(.16,.05,.42), smoothstep(.05,.45,v));
      c = mix(c, vec3(1.,.18,.32), smoothstep(.45,.85,v));
      c = mix(c, vec3(1.,.85,.75), smoothstep(.9,1.2,v));
      return c;
    }
    vec2 coverUV(vec2 u){
      float rs = res.x/res.y, rt = texRes.x/texRes.y;
      vec2 s = rs > rt ? vec2(1., rt/rs) : vec2(rs/rt, 1.);
      return (u-.5)*s + .5;
    }
    void main(){
      vec2 a = vec2(res.x/res.y, 1.);
      vec2 q = uv*a;
      float d = distance(q, mouse*a);
      float push = smoothstep(.55, 0., d) * (.35 + .65*hover);
      vec2 dir = normalize(q - mouse*a + 1e-4);
      float glitch = step(.985, h(vec2(floor(uv.y*40.), floor(t*6.)))) * .03;
      vec2 off = dir*push*.035 + vec2(glitch, 0.);

      vec3 col;
      if (hasTex > .5) {
        vec2 u = coverUV(uv + dir*push*.02); u.y = 1.-u.y;
        col.r = texture2D(tex, u + off*.8 + vec2(.004,0.)).r;
        col.g = texture2D(tex, u).g;
        col.b = texture2D(tex, u - off*.8 - vec2(.004,0.)).b;
      } else {
        vec2 qq = q*1.4 + dir*push*.25;
        col.r = ramp(field(qq + off*6.)).r;
        col.g = ramp(field(qq)).g;
        col.b = ramp(field(qq - off*6.)).b;
        col += vec3(0.,.85,1.)*pow(smoothstep(.3,0.,d),3.)*.12*hover;
      }
      col *= .9 + .1*sin(uv.y*res.y*1.4 + t*8.);
      col += (h(uv*res + t) - .5)*.06;
      gl_FragColor = vec4(col, 1.);
    }`;

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.background = "radial-gradient(ellipse at 30% 40%, #3a1250, #06040c 70%)"; return; }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const U = name => gl.getUniformLocation(prog, name);
  const uT = U("t"), uRes = U("res"), uMouse = U("mouse"), uHover = U("hover"), uHas = U("hasTex"), uTexRes = U("texRes");

  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  const video = $("#heroVideo");
  let videoBroken = false;
  // видео могло начать играть ещё до запуска скрипта, поэтому проверяем состояние каждый кадр
  const videoReady = () => !videoBroken && video.isConnected && video.readyState >= 2 && video.videoWidth > 0;
  video.addEventListener("error", () => { videoBroken = true; video.remove(); });
  video.muted = true;
  const tryPlay = () => video.play?.().catch(() => {});
  tryPlay();
  addEventListener("pointerdown", tryPlay, { once: true });   // iOS в режиме энергосбережения запускает видео только после касания

  const hero = $("#hero");
  let tmx = .7, tmy = .5, smx = .7, smy = .5, hv = 0, thv = 0;
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    tmx = (e.clientX - r.left) / r.width; tmy = 1 - (e.clientY - r.top) / r.height; thv = 1;
  });
  hero.addEventListener("pointerleave", () => { thv = 0; });

  const scale = Math.min(devicePixelRatio || 1, 1.5) * .6;
  function size() {
    canvas.width = Math.round(canvas.clientWidth * scale);
    canvas.height = Math.round(canvas.clientHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  size(); addEventListener("resize", size);

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(hero);

  const t0 = performance.now();
  function draw(now) {
    if (visible) {
      smx += (tmx - smx) * .06; smy += (tmy - smy) * .06; hv += (thv - hv) * .05;
      if (videoReady()) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        try {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
          gl.uniform1f(uHas, 1); gl.uniform2f(uTexRes, video.videoWidth, video.videoHeight);
        } catch { videoBroken = true; gl.uniform1f(uHas, 0); }
      } else gl.uniform1f(uHas, 0);
      gl.uniform1f(uT, calm ? 12 : (now - t0) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, smx, smy);
      gl.uniform1f(uHover, hv);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

/* ---------- Таймкод, время, почта ---------- */
const tc = $("#tc"), start = performance.now(), pad = n => String(n).padStart(2, "0");
(function tick(now) {
  const f = Math.floor(((now || start) - start) / 40);
  tc.textContent = `${pad(Math.floor(f / 90000) % 24)}:${pad(Math.floor(f / 1500) % 60)}:${pad(Math.floor(f / 25) % 60)}:${pad(f % 25)}`;
  if (!calm) requestAnimationFrame(tick);
})();

const clock = $("#clock");
const tfmt = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Almaty" });
const clockTick = () => { clock.textContent = tfmt.format(new Date()); };
clockTick(); setInterval(clockTick, 30000);
$("#year").textContent = new Date().getFullYear();

$("#mail").textContent = EMAIL;
$("#copyMail").addEventListener("click", async e => {
  const btn = e.currentTarget;
  try { await navigator.clipboard.writeText(EMAIL); btn.textContent = t("copied"); }
  catch { getSelection().selectAllChildren($("#mail")); btn.textContent = t("selected"); }
  setTimeout(() => { btn.textContent = t("copy"); }, 2400);
});

// ---------- language switcher ----------
const translations = {
  it: {
    "meta.title": "Samuel Scarabottolo — Full Stack Developer",
    skip: "Salta al contenuto",
    "nav.menuAria": "Apri il menu",
    "nav.about": "Chi sono",
    "nav.experience": "Esperienza",
    "nav.skills": "Competenze",
    "nav.education": "Percorso",
    "nav.contact": "Contattami",
    "theme.cartaAria": "Tema Carta (chiaro)",
    "theme.inchiostroAria": "Tema Inchiostro (scuro)",
    "theme.pergamenaAria": "Tema Pergamena (seppia)",
    "hero.h1":
      "Costruisco assistenti che leggono i documenti pubblici al posto delle persone.",
    "hero.lede":
      "Full-stack developer con oltre due anni di esperienza: backend in Python e FastAPI, frontend in Angular, e sistemi RAG usati ogni giorno da enti pubblici italiani.",
    "hero.btnProjects": "Guarda i progetti",
    "hero.btnContact": "Scrivimi",
    "hero.scroll": "Scorri per saperne di più",
    "pipeline.aria":
      "Diagramma: un documento viene estratto, indicizzato e trasformato in una risposta",
    "pipeline.doc": "Documento",
    "pipeline.extract": "Estrazione",
    "pipeline.index": "Indice",
    "pipeline.answer": "Risposta",
    "about.eyebrow": "Presentazione",
    "about.h2":
      "Dal documento alla risposta, senza far perdere tempo a nessuno",
    "about.p1":
      "Sviluppo applicazioni web full-stack da oltre due anni, con <strong>backend in Python (FastAPI)</strong> e <strong>frontend in Angular</strong>. La maggior parte del mio lavoro riguarda assistenti virtuali basati su sistemi RAG per la pubblica amministrazione: mi occupo di estrazione, indicizzazione e recupero dei documenti che quegli assistenti usano per rispondere.",
    "about.p2":
      "Conosco anche Java e i fondamenti di progettazione delle API REST. Mi interessano in particolare l'AI generativa e la scrittura di codice pulito e manutenibile.",
    "stamp.aria": "Attestato: Angular Certified Developer, giugno 2024",
    "stamp.date": "Giugno 2024",
    "stamp.caption":
      'Angular Basic &amp; Angular Developer, conseguite durante il progetto IVA4PA. <a href="https://certificates.dev/angular/certificates/aeb66e9d-3460-4774-acb8-2bf7eb431d42" target="_blank" rel="noopener">Vedi il certificato</a>',
    "exp.eyebrow": "Esperienza lavorativa",
    "exp.h2": "Due anni, cinque tappe, un filo conduttore",
    "exp.p":
      "Sempre in Akera S.r.l., con una parentesi di tirocinio in Siav S.p.A. durante la tesi di laurea.",
    "exp.status": "In corso",
    "exp.item1.role": "Full Stack Developer — Appalti",
    "exp.item1.company":
      "Akera S.r.l · Progetto per il cliente Gruppo Maggioli",
    "exp.item1.li1":
      "<strong>Appalti (e-procurement):</strong> collaborazione sulla piattaforma di e-procurement del Gruppo Maggioli per gli appalti pubblici, lavorando all'interno del loro codebase Java/Maven con build ospitate su Google Cloud Artifact Registry.",
    "exp.item2.role": "Full Stack Developer — NRC",
    "exp.item2.company": "Akera S.r.l · Progetto per il Comune di Bologna",
    "exp.item2.li1":
      "<strong>MyIntranet, pubblica amministrazione:</strong> gestito l'onboarding di oltre 30 clienti comunali, risolto ticket di assistenza e sviluppato funzionalità personalizzate richieste da enti pubblici di vari comuni italiani.",
    "exp.item2.li2":
      "<strong>Versionamento e collaborazione:</strong> utilizzo di Git con feature branch, pull request e revisione del codice in un flusso di lavoro di team.",
    "exp.item3.role": "Full Stack Developer — IVA4PA",
    "exp.item3.company": "Akera S.r.l · Progetto per il Comune di Padova",
    "exp.item3.li1":
      "<strong>Virtual Assistant:</strong> chatbot RAG in produzione basato su documenti amministrativi, per ridurre le richieste manuali degli utenti.",
    "exp.item3.li2":
      "<strong>Pipeline di dati:</strong> estrazione automatizzata da Pentaho e crawling di oltre 50 portali comunali (MyPortal / Regione Veneto) con Scrapy e Selenium.",
    "exp.item3.li3":
      "<strong>API di indicizzazione:</strong> progettazione e deploy di API FastAPI per l'ingestione e il recupero dei documenti, con storage su bucket AWS S3.",
    "exp.item3.li4":
      "<strong>Front-end Angular:</strong> widget riutilizzabile per integrare l'assistente virtuale sui siti comunali di terze parti.",
    "exp.item4.role": "Formazione aziendale",
    "exp.item4.li1":
      "Formazione iniziale sullo stack aziendale: <strong>Python, FastAPI, Angular, Spring Boot</strong>, workflow Git e fondamenti di metodologia Agile/SCRUM.",
    "exp.item4.li2":
      "Conseguite le certificazioni Angular Basic e Angular Developer.",
    "exp.item5.role": "Assistant Research Engineer",
    "exp.item5.company": "Siav S.p.A · Tirocinio tesi di laurea",
    "exp.item5.li1":
      "<strong>Localstore API:</strong> piattaforma di gestione della knowledge base per workflow di ricerca generativa.",
    "exp.item5.li2":
      "Autenticazione, gestione utenti, upload dei documenti, condivisione della knowledge base ed endpoint di interrogazione.",
    "exp.item5.li3":
      "<strong>Stack:</strong> Python, FastAPI (RESTful), SQLAlchemy ORM.",
    "skills.eyebrow": "Competenze",
    "skills.h2": "Gli strumenti che uso ogni giorno",
    "skills.tabFrontend": "Frontend",
    "skills.tabBackend": "Backend",
    "skills.tabSystems": "Sistemi &amp; dati",
    "skills.tabMethod": "Metodo",
    "edu.eyebrow": "Formazione",
    "edu.h2": "Percorso di studi",
    "edu.item1.degree": "Laurea triennale in Informatica",
    "edu.item2.degree": "Diploma in Informatica",
    "langs.eyebrow": "Lingue",
    "langs.native": "Madrelingua",
    "cefr.listening": "Ascolto B2",
    "cefr.reading": "Lettura B2",
    "cefr.spokenInteraction": "Interazione orale B2",
    "cefr.spokenProduction": "Produzione orale B2",
    "cefr.writing": "Scrittura B2",
    "contact.h2": "Hai un problema che assomiglia a un mucchio di documenti?",
    "contact.p":
      "Sono a Padova e lavoro volentieri su progetti che uniscono backend Python, frontend Angular e AI generativa. Scrivimi, o guarda il mio profilo.",
    "contact.btn": "Scrivimi una mail",
    "contact.location": "Villafranca Padovana, Padova",
    "footer.role": "Full Stack Developer",
  },
};

const langBtns = document.querySelectorAll(".lang-btn");
const metaDescription = document.querySelector('meta[name="description"]');
const originalDescription = metaDescription
  ? metaDescription.getAttribute("content")
  : "";
const i18nEls = document.querySelectorAll("[data-i18n]");
// for elements marked data-i18n-attr, only that ATTRIBUTE is translated (aria-label,
// title...) and the element's real content (an svg diagram, an icon) is left untouched.
// everything else gets its innerHTML swapped.
const originalValue = new Map();
i18nEls.forEach((el) => {
  const attrOnly = el.getAttribute("data-i18n-attr");
  originalValue.set(el, attrOnly ? el.getAttribute(attrOnly) : el.innerHTML);
});
const tabEls = document.querySelectorAll("[data-i18n-tab]");
const originalTab = new Map();
tabEls.forEach((el) => originalTab.set(el, el.getAttribute("data-tab")));

function setLanguage(lang) {
  document.documentElement.lang = lang;
  langBtns.forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"),
  );

  i18nEls.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attrOnly = el.getAttribute("data-i18n-attr");
    const value =
      lang === "en"
        ? originalValue.get(el)
        : translations[lang] && translations[lang][key];
    if (value === undefined) return;
    if (attrOnly) {
      el.setAttribute(attrOnly, value.replace(/&amp;/g, "&"));
    } else {
      el.innerHTML = value;
    }
  });

  tabEls.forEach((el) => {
    const key = el.getAttribute("data-i18n-tab");
    if (lang === "en") {
      el.setAttribute("data-tab", originalTab.get(el));
    } else if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute(
        "data-tab",
        translations[lang][key].replace(/&amp;/g, "&"),
      );
    }
  });

  const titleEl = document.querySelector("title");
  if (titleEl) document.title = titleEl.textContent;

  if (metaDescription) {
    if (lang === "en") {
      metaDescription.setAttribute("content", originalDescription);
    } else {
      metaDescription.setAttribute(
        "content",
        "Portfolio di Samuel Scarabottolo, full-stack developer specializzato in backend Python/FastAPI, frontend Angular e assistenti RAG per la pubblica amministrazione.",
      );
    }
  }
}

langBtns.forEach((b) =>
  b.addEventListener("click", () => setLanguage(b.dataset.lang)),
);

// ---------- theme switcher ----------
const themeBtns = document.querySelectorAll(".theme-btn");
const root = document.documentElement;
function setTheme(name) {
  root.setAttribute("data-theme", name);
  themeBtns.forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.t === name ? "true" : "false"),
  );
}
themeBtns.forEach((b) =>
  b.addEventListener("click", () => setTheme(b.dataset.t)),
);
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setTheme("inchiostro");
}

// ---------- mobile nav ----------
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("primaryNav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }),
);

// ---------- active nav link on scroll ----------
const links = document.querySelectorAll("[data-nav]");
const targets = Array.from(links).map((a) =>
  document.querySelector(a.getAttribute("href")),
);
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const match = document.querySelector(
          `[data-nav][href="#${entry.target.id}"]`,
        );
        if (match) match.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
targets.forEach((t) => t && io.observe(t));

// ---------- cursor position: drives the glow + the canvas repulsion ----------
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  active: false,
};

if (!reduceMotion) {
  window.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
    document.body.classList.add("pointer-active");
    root.style.setProperty("--mx", pointer.x + "px");
    root.style.setProperty("--my", pointer.y + "px");
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
    document.body.classList.remove("pointer-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget && !e.toElement) {
      pointer.active = false;
      document.body.classList.remove("pointer-active");
    }
  });
}

// ---------- animated background: a document network that reacts to the cursor ----------
const canvas = document.getElementById("bgCanvas");
if (canvas && !reduceMotion) {
  const ctx = canvas.getContext("2d");
  let w,
    h,
    dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  const COUNT = 46;
  const LINK_DIST = 130;
  const CURSOR_LINK_DIST = 170;
  const REPEL_DIST = 110;
  const REPEL_FORCE = 0.028;
  const MAX_SPEED = 0.9;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function makeNodes() {
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
    }));
  }
  resize();
  makeNodes();
  window.addEventListener("resize", () => {
    resize();
  });

  function colors() {
    const cs = getComputedStyle(root);
    return {
      dot: cs.getPropertyValue("--teal").trim(),
      line: cs.getPropertyValue("--line").trim(),
      cursorLine: cs.getPropertyValue("--carmine").trim(),
    };
  }

  function frame() {
    const c = colors();
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      // gentle push away from the cursor, like documents sliding aside
      if (pointer.active) {
        const dx = n.x - pointer.x,
          dy = n.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < REPEL_DIST) {
          const force = (1 - dist / REPEL_DIST) * REPEL_FORCE;
          n.vx += (dx / dist) * force;
          n.vy += (dy / dist) * force;
        }
      }
      // gentle drift back toward a calm speed
      const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      if (speed > MAX_SPEED) {
        n.vx *= MAX_SPEED / speed;
        n.vy *= MAX_SPEED / speed;
      }
      n.vx *= 0.985;
      n.vy *= 0.985;
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i],
          b = nodes[j];
        const dx = a.x - b.x,
          dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = c.line;
          ctx.globalAlpha = 1 - dist / LINK_DIST;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // the cursor itself joins the network, linking to whatever is nearby
    if (pointer.active) {
      for (const n of nodes) {
        const dx = n.x - pointer.x,
          dy = n.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_LINK_DIST) {
          ctx.strokeStyle = c.cursorLine;
          ctx.globalAlpha = (1 - dist / CURSOR_LINK_DIST) * 0.65;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = c.cursorLine;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 0.9;
    ctx.fillStyle = c.dot;
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

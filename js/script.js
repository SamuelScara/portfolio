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

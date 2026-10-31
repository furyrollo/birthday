/* ============================================================
   THE BIRTHDAY FEAST — script.js
   ALL customizable text lives in CONFIG below. Edit freely!
============================================================ */

"use strict";

/* ============================================================
   ★★★  CONFIG — EDIT EVERYTHING HERE  ★★★
============================================================ */
const CONFIG = {

  // Her name as shown on the page (nickname only — keep it private!)
  name: "Pamcake",

  // ---- Countdown gate ----
  // The feast unlocks at this exact moment (ISO format with timezone offset).
  // "2026-10-31T00:00:00-05:00" = midnight Oct 31 in US Central (CDT ends Nov 1).
  // Change the offset for her timezone, e.g. +01:00 (CET), +00:00 (UK), -04:00 (US East).
  unlockDate: "2026-10-31T00:00:00-05:00",

  // ---- Stop 2: The Letter ----
  letter: {
    salutation: "Hi Miss Pamcake,",
    paragraphs: [
      "Hogwarts School of Witchcraft and Wizardry is delighted to inform you that you have been accepted into another year of being awesome.",
      "Your new term begins immediately. Please proceed to the Great Hall and join the magical feast of your most beloved delicacies and an unreasonable amount of confetti to celebrate this momentous day, all arranged in your honour today.",
      ],
    signedBy: "The Ministry of Birthdays 🪄"
  },

  // ---- Stop 3: The Feast ----
  // Edit names/descriptions. Add or remove cards freely.
  foods: [
    { emoji: "🍕", name: "Polyjuice Pizza",            tag: "shapeshifts into whatever topping you crave", desc: "One slice of this magical pizza will make you a 10% bigger kheitu. Two slices will grant you unspeakable powers that can't be measured with worldly scales." },
    { emoji: "🍜", name: "Cauldron of Endless Noodles", tag: "stirred counterclockwise at midnight",        desc: "Brewed in the deepest dungeon kitchen. Side effects include warmth and happiness, and no this one won't make you sick." },
    { emoji: "🌮", name: "Tricks-or-Tacos",             tag: "every third one is extra spicy. good luck",   desc: "A little bit of magic wrapped in a tortilla. These tacos are sure to cast a spell on your taste buds." },
    { emoji: "🥪", name: "Enchanted Lasagna",               tag: "rise again, golden, from the fryer's flames", desc: "Even Dumbledore would need a moment to figure out how something this delicious could exist!" },
    { emoji: "🍔", name: "Hagrid's Hearty Burgers",                  tag: "a mighty stack of juicy goodness",             desc: "A feast fit for a half-giant, and guaranteed to satisfy even the hungriest wizards! You might need two." },
    { emoji: "🍗", name: "Hedwig's Wings",             tag: "no owls were harmed while making this",                 desc: "One taste and you'll be flying straight back for more!" },
    { emoji: "🥘", name: "Wizardly Buckbeak Biryani",                tag: "a certain chosen one's favourite",            desc: "A feast worthy of the Hogwarts dining table. Every bite is pure magic!" },
    { emoji: "🍝", name: "Crimson Pasta",    tag: "almost as good as yours. almost.",               desc: "Fear not! The black pepper flavour was banished from this hall by decree. A little mystery, a lot of magic, and a whole lot of goodness in every forkful!" }
  ],

  // ---- Stop 4: Trophy Room — reasons I appreciate her ----
  // rarity: "common" | "rare" | "legendary"
  reasons: [
    { emoji: "😇", title: "Master of the Warm Heart", rarity: "legendary", text: "You are genuinely one of the kindest and most thoughtful people I know. You have such a warm, caring energy about you, and it really shines through even in random conversations." },
    { emoji: "🕸️", title: "Patron Saint of Spooky Season", rarity: "rare",     text: "You love Halloween so much that October genuinely feels like YOUR month. Being born on the 31st wasn't a coincidence, it was destiny." },
    { emoji: "🍴", title: "Grand Sorceress of Snacks", rarity: "rare",          text: "Your food opinions are strong, correct, and delivered with the confidence of a Michelin star chef. I trust your recommendations more than most official reviews." },
    { emoji: "💄", title: "Artist of the Arcane Palette", rarity: "common",       text: "What you do with makeup is genuinely art. You could blend eyeshadow with both eyes closed, during a storm, on a moving car. One day you will own your own makeup brand" },
    { emoji: "👑", title: "The Truly Authentic Soul", rarity: "rare",        text: "There is zero pretense with you, and that’s one of my favorite things about you. You're so comfortable in your own skin that you're always genuine, honest, and real. Even if you don't know something you'll just say so instead of pretending. Incredibly rare quality." },
    { emoji: "👏", title: "The Heart of Appreciation", rarity: "legendary",              text: "One of my favourite things about you is how you find a way to make even the smallest gestures of others feel so big. You have such a lovely way of making people feel valued and appreciated. It's a wonderful quality, and I hope you know how special it is." },
    { emoji: "🌙", title: "Finder of Small Magic", rarity: "rare",            text: "You notice and appreciate the little things that life has to offer. I love how you remind the people around you that life is often made special by the little things we might otherwise overlook." }
  ],

  // ---- Stop 5: Finale ----
  finale: {
    heading: "Happy Birthday, Pamcake!",
    // Set to true AFTER you add a "voice-note.mp3" file next to index.html
    voiceNote: false,
    paragraphs: [
 // 👇 YOUR FINAL MESSAGE — edit these:
      "The candles are lit, it's foggy and gloomy outside, the rain is just around the corner, and somewhere, a cauldron is bubbling away with a birthday song.",
      "I hope this next year of yours is filled with perfect happy days, lots of your favourite food, plenty of good scary movies, and all the little things you love, from makeup to all the other girly stuff you've been wanting to buy. (But like without fazool kharchi and guilt hehe.)",
      "Thank you for being exactly who you are. The world is a weirder, warmer, and a better place with you in it. Happy Halloween, and happiest of birthdays. 🎃"
    ]
  },

  // ---- Easter egg messages ----
  eggs: {
    moon:    "🌙 The moon says: it's told every star about your birthday. They're all showing up tonight.",
    owl:     "🦉 The owl hoots: “Special delivery — one (1) entire wonderful year, addressed to you.”",
    pumpkin: "🎃 The pumpkin whispers: you're its favourite human. Don't tell the other pumpkins.",
    cat:     "🐈‍⬛ The black cat crossed your path on purpose. For you, it's GOOD luck. Forever."
  }
};

/* ============================================================
   Utilities
============================================================ */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}

/* ============================================================
   STOP 0 — Countdown gate  (bypass with ?preview=1)
============================================================ */
(function initGate() {
  const gate = $("#gate");
  const journey = $("#journey");
  const unlockTime = new Date(CONFIG.unlockDate).getTime();
  const preview = new URLSearchParams(location.search).has("preview");

  function openGate() {
    gate.remove();
    journey.hidden = false;
    showStop(0, false);
  }

  if (preview || Date.now() >= unlockTime) {
    openGate();
    return;
  }

  const ids = { days: "#cd-days", hours: "#cd-hours", mins: "#cd-mins", secs: "#cd-secs" };
  const nodes = Object.fromEntries(Object.entries(ids).map(([k, s]) => [k, $(s)]));

  function tick() {
    const diff = unlockTime - Date.now();
    if (diff <= 0) { clearInterval(timer); openGate(); return; }
    const s = Math.floor(diff / 1000);
    nodes.days.textContent  = Math.floor(s / 86400);
    nodes.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
    nodes.mins.textContent  = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    nodes.secs.textContent  = String(s % 60).padStart(2, "0");
  }
  tick();
  const timer = setInterval(tick, 1000);
})();

/* ============================================================
   Guided journey — reveal stops one at a time + smooth scroll
============================================================ */
function stops() { return $$(".stop[data-stop]"); }

function showStop(index, scroll = true) {
  const target = stops().find(s => +s.dataset.stop === index);
  if (!target) return;
  const firstReveal = !target.hasAttribute("data-visible");
  target.hidden = false;
  target.setAttribute("data-visible", "");
  if (scroll) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    });
  }
  if (target.id === "stop-feast") observeFoodCards();
  if (firstReveal && target.id === "stop-finale") finaleEntrance();
}

/* Wire all "Next" buttons */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-next]");
  if (!btn) return;
  const current = btn.closest(".stop");
  showStop(+current.dataset.stop + 1);
});

/* ============================================================
   STOP 1 — The scroll
============================================================ */
(function initScroll() {
  const scroll = $("#door-scroll");
  scroll.addEventListener("click", () => {
    if (scroll.classList.contains("open")) return;
    scroll.classList.add("open");
    scroll.setAttribute("aria-label", "The seal is broken and the scroll is unrolling.");
    $("#scroll-hint").textContent = "The seal is broken… ✨";
    burstSparkles(scroll.getBoundingClientRect());
    setTimeout(() => showStop(1), reducedMotion ? 300 : 1700);
  });
})();

/* ============================================================
   STOP 2 — The letter (render from CONFIG)
============================================================ */
(function renderLetter() {
  const body = $("#letter-body");
  body.appendChild(el("p", "salutation", CONFIG.letter.salutation));
  CONFIG.letter.paragraphs.forEach(p => body.appendChild(el("p", "", p)));
  $("#letter-signature").textContent = CONFIG.letter.signedBy;
})();

/* ============================================================
   STOP 3 — The feast
============================================================ */
(function renderFeast() {
  const grid = $("#food-grid");
  CONFIG.foods.forEach((f, i) => {
    const card = el("button", "food-card");
    card.style.transitionDelay = `${(i % 4) * 60}ms`;
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `${f.name}. Tap to read the menu note.`);
    card.innerHTML = `
      <div class="food-card-inner">
        <div class="food-face food-front">
          <span class="food-emoji" aria-hidden="true">${f.emoji}</span>
          <h3>${f.name}</h3>
          <small>${f.tag}</small>
        </div>
        <div class="food-face food-back"><p>${f.desc}</p></div>
      </div>`;
    card.addEventListener("click", () => {
      card.setAttribute("aria-pressed", String(card.classList.toggle("flipped")));
    });
    grid.appendChild(card);
  });
})();

/* Food cards float in on scroll */
let foodObserved = false;
function observeFoodCards() {
  if (foodObserved) return;
  foodObserved = true;
  const cards = $$(".food-card");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("float-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("float-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0, rootMargin: "100px 0px" });
  cards.forEach(c => io.observe(c));
}

/* ============================================================
   STOP 4 — Trophy room
============================================================ */
(function renderTrophies() {
  const grid = $("#trophy-grid");
  CONFIG.reasons.forEach((r, i) => {
    const card = el("button", "trophy-card");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `Collectible card: ${r.title}, ${r.rarity}. Tap to flip and read.`);
    card.innerHTML = `
      <div class="trophy-inner">
        <div class="trophy-face trophy-front">
          <span class="trophy-emoji" aria-hidden="true">${r.emoji}</span>
          <h3>${r.title}</h3>
          <span class="rarity ${r.rarity}">${r.rarity}</span>
        </div>
        <div class="trophy-face trophy-back">
          <span class="trophy-no">CARD No. ${String(i + 1).padStart(2, "0")} / ${String(CONFIG.reasons.length).padStart(2, "0")}</span>
          <p>${r.text}</p>
        </div>
      </div>`;
    card.addEventListener("click", () => {
      // Read geometry before changing styles to avoid synchronous layout on a tap.
      const rect = !reducedMotion && !card.classList.contains("flipped")
        ? card.getBoundingClientRect() : null;
      card.setAttribute("aria-pressed", String(card.classList.toggle("flipped")));
      if (rect) burstSparkles(rect, 6);
    });
    grid.appendChild(card);
  });
})();

/* ============================================================
   STOP 5 — Finale
============================================================ */
(function renderFinale() {
  $("#finale-title").textContent = CONFIG.finale.heading;
  const msg = $("#finale-message");
  CONFIG.finale.paragraphs.forEach((p, idx) => {
    msg.appendChild(el("p", idx === 0 ? "finale-scene" : "", p));
  });

  // Voice note: shown only when CONFIG.finale.voiceNote is true
  // (add voice-note.mp3 next to index.html, then flip the flag)
  const audio = $("#voice-audio");
  const voiceWrap = $("#voice-note");
  const voiceBtn = $("#voice-btn");
  if (CONFIG.finale.voiceNote) voiceWrap.hidden = false;
  voiceBtn.addEventListener("click", () => {
    if (audio.paused) { audio.play(); voiceBtn.textContent = "⏸️ Pause"; }
    else { audio.pause(); voiceBtn.textContent = "▶️ Play my voice note"; }
  });
  audio.addEventListener("ended", () => voiceBtn.textContent = "▶️ Play it again");

  $("#confetti-btn").addEventListener("click", () => launchConfetti(80));
})();

function finaleEntrance() {
  if (!reducedMotion) setTimeout(() => launchConfetti(70), 600);
}

/* Confetti of bats, pumpkins and stars */
function launchConfetti(count = 60) {
  if (reducedMotion) count = Math.min(count, 15);
  const pieces = ["🦇", "🎃", "⭐", "✨", "🦇", "🌟", "🎃", "🍂"];
  for (let i = 0; i < count; i++) {
    const p = el("span", "confetti-piece", pieces[Math.floor(Math.random() * pieces.length)]);
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--size", 14 + Math.random() * 18 + "px");
    p.style.setProperty("--dur", 3 + Math.random() * 3.5 + "s");
    p.style.setProperty("--spin", (Math.random() > .5 ? "" : "-") + (180 + Math.random() * 540) + "deg");
    p.style.animationDelay = Math.random() * 1.2 + "s";
    if (!queueEffect(p)) break;
  }
}

/* ============================================================
   Easter eggs
============================================================ */
(function initEggs() {
  const toast = $("#egg-toast");
  let toastTimer;
  function reveal(btn, msg, fx) {
    if (!reducedMotion) {
      // Restart feedback without forcing a layout flush.
      btn.getAnimations().filter(a => a.id === "egg-feedback").forEach(a => a.cancel());
      const feedback = btn.animate([
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(-16deg) scale(1.25)", offset: 0.25 },
        { transform: "rotate(14deg) scale(1.2)", offset: 0.6 },
        { transform: "rotate(0) scale(1)" }
      ], { duration: 700, easing: "ease" });
      feedback.id = "egg-feedback";
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 4500);
    if (fx) fx();
  }
  $("#egg-moon").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.moon, () => burstSparkles(this.getBoundingClientRect(), 10, "⭐"));
  });
  $("#egg-owl").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.owl, () => burstSparkles(this.getBoundingClientRect(), 8, "💌"));
  });
  $("#egg-pumpkin").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.pumpkin, () => launchConfetti(18));
  });
  $("#egg-cat").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.cat, () => burstSparkles(this.getBoundingClientRect(), 10, "🐾"));
  });
})();

/* ============================================================
   Ambient music toggle (off by default)
============================================================ */
(function initMusic() {
  const btn = $("#music-toggle");
  const audio = $("#ambient-audio");
  audio.volume = 0.35;
  btn.addEventListener("click", async () => {
    const on = btn.getAttribute("aria-pressed") === "true";
    if (on) {
      audio.pause();
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = "🔇";
    } else {
      try {
        await audio.play();
        btn.setAttribute("aria-pressed", "true");
        btn.textContent = "🎵";
      } catch {
        // No ambient.mp3 present — gentle feedback instead of silence
        btn.textContent = "🚫";
        setTimeout(() => (btn.textContent = "🔇"), 1200);
      }
    }
  });
})();

/* ============================================================
   Sparkles — wand cursor trail (desktop) & tap bursts (mobile)
============================================================ */
const sparkleLayer = $("#sparkle-layer");
const SPARKLE_CHARS = ["✦", "✧", "⋆", "✨"];
const MAX_EFFECTS = 100;
const pendingEffects = [];
let effectFrame = 0;

function queueEffect(node) {
  // Bound both pending and live particles, even when confetti is tapped repeatedly.
  if (document.hidden || sparkleLayer.childElementCount + pendingEffects.length >= MAX_EFFECTS) return false;
  pendingEffects.push(node);
  if (!effectFrame) effectFrame = requestAnimationFrame(() => {
    effectFrame = 0;
    const fragment = document.createDocumentFragment();
    for (const effect of pendingEffects.splice(0)) fragment.appendChild(effect);
    sparkleLayer.appendChild(fragment);
  });
  return true;
}

sparkleLayer.addEventListener("animationend", e => {
  if (e.target.parentNode === sparkleLayer) e.target.remove();
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) return;
  cancelAnimationFrame(effectFrame);
  effectFrame = 0;
  pendingEffects.length = 0;
  sparkleLayer.replaceChildren();
});

function spawnSparkle(x, y, char) {
  if (document.hidden || sparkleLayer.childElementCount + pendingEffects.length >= MAX_EFFECTS) return;
  const s = el("span", "sparkle", char || SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)]);
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.color = Math.random() > 0.5 ? "#ecd28a" : "#f08a3e";
  s.style.setProperty("--size", 10 + Math.random() * 10 + "px");
  s.style.setProperty("--dx", (Math.random() - 0.5) * 50 + "px");
  s.style.setProperty("--dy", 10 + Math.random() * 35 + "px");
  queueEffect(s);
}

function burstSparkles(rect, n = 12, char) {
  if (reducedMotion) return;
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < n; i++) {
    spawnSparkle(cx + (Math.random() - 0.5) * rect.width * 0.8,
                 cy + (Math.random() - 0.5) * rect.height * 0.8, char);
  }
}

if (!reducedMotion) {
  // Desktop: trail behind the wand cursor (throttled)
  let lastTrail = 0;
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const now = performance.now();
    if (now - lastTrail < 70) return;
    lastTrail = now;
    spawnSparkle(e.clientX + 6, e.clientY + 6);
  }, { passive: true });

  // Wait for a completed tap: starting a swipe must not create DOM work.
  let tap = null;
  window.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" && e.isPrimary) {
      tap = { id: e.pointerId, x: e.clientX, y: e.clientY };
    } else tap = null;
  }, { passive: true });
  window.addEventListener("pointermove", e => {
    if (tap && e.pointerId === tap.id && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > 10) tap = null;
  }, { passive: true });
  window.addEventListener("pointercancel", () => { tap = null; }, { passive: true });
  window.addEventListener("pointerup", e => {
    const isTap = tap && e.pointerId === tap.id && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) <= 10;
    tap = null;
    if (!isTap) return;
    for (let i = 0; i < 5; i++) {
      spawnSparkle(e.clientX + (Math.random() - 0.5) * 36,
                   e.clientY + (Math.random() - 0.5) * 36);
    }
  }, { passive: true });
}

/* ============================================================
   Canvas particles — starfield, falling leaves, drifting bats
============================================================ */
(function initParticles() {
  if (reducedMotion) return;
  const canvas = $("#particle-canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let W, H, dpr;
  let sizeDirty = true;
  const pixelRatioLimit = window.matchMedia("(pointer: coarse)").matches ? 1.5 : 2;

  function resize() {
    sizeDirty = false;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, pixelRatioLimit);
    // Mobile browser chrome can fire resize throughout a scroll. Do not clear
    // or reallocate an unchanged canvas (its CSS height uses the stable viewport).
    if (width === W && height === H && ratio === dpr) return;
    W = width;
    H = height;
    dpr = ratio;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", () => { sizeDirty = true; }, { passive: true });

  const rnd = (a, b) => a + Math.random() * (b - a);

  // Stars (twinkling dots)
  const stars = Array.from({ length: 60 }, () => ({
    x: Math.random(), y: Math.random() * 0.75,
    r: rnd(0.4, 1.4), tw: rnd(0.5, 2.5), ph: rnd(0, Math.PI * 2)
  }));

  // Leaves (drawn as small rotated ellipses in autumn colours)
  const LEAF_COLORS = ["#d9692a", "#c9a24b", "#a84a1e", "#8d6b2f"];
  const leaves = Array.from({ length: 14 }, () => spawnLeaf(true));
  function spawnLeaf(anywhere) {
    return {
      x: rnd(0, 1), y: anywhere ? rnd(0, 1) : -0.05,
      size: rnd(5, 10), vy: rnd(0.0003, 0.0008),
      sway: rnd(0.3, 1), swaySpd: rnd(0.5, 1.4),
      rot: rnd(0, Math.PI * 2), rotSpd: rnd(-0.02, 0.02),
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      ph: rnd(0, Math.PI * 2)
    };
  }

  // Bats (drawn as simple flapping wing shapes)
  const bats = Array.from({ length: 4 }, () => ({
    x: rnd(0, 1), y: rnd(0.05, 0.45),
    vx: rnd(0.0004, 0.001) * (Math.random() > 0.5 ? 1 : -1),
    size: rnd(7, 13), ph: rnd(0, Math.PI * 2), flap: rnd(4, 7)
  }));

  function drawBat(b, t) {
    const x = b.x * W, y = b.y * H + Math.sin(t * 1.5 + b.ph) * 12;
    const flap = Math.sin(t * b.flap + b.ph) * 0.7;
    const s = b.size;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(b.vx > 0 ? 1 : -1, 1);
    ctx.fillStyle = "rgba(14, 8, 18, 0.9)";
    ctx.beginPath();
    // body
    ctx.ellipse(0, 0, s * 0.32, s * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // wings
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-s * 1.4, -s * (0.8 + flap), -s * 2.1, flap * s * 0.5);
    ctx.quadraticCurveTo(-s * 1.1, s * 0.25, 0, s * 0.3);
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(s * 1.4, -s * (0.8 + flap), s * 2.1, flap * s * 0.5);
    ctx.quadraticCurveTo(s * 1.1, s * 0.25, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  let frameId = 0;
  let lastPaint = 0;
  let previousTime = 0;
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
    previousTime = lastPaint = 0;
    if (!document.hidden) frameId = requestAnimationFrame(frame);
  });

  function frame(ts) {
    frameId = 0;
    if (document.hidden) return;
    frameId = requestAnimationFrame(frame);
    // Ambient scenery needs only 30fps; leave frame time for scrolling and flips.
    if (ts - lastPaint < 1000 / 30 - 1) return;
    const step = previousTime ? Math.min(ts - previousTime, 50) / (1000 / 60) : 1;
    previousTime = lastPaint = ts;
    if (sizeDirty) resize();
    const t = ts / 1000;
    ctx.clearRect(0, 0, W, H);

    // stars
    for (const s of stars) {
      const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * s.tw + s.ph));
      ctx.fillStyle = `rgba(243, 230, 200, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // leaves
    for (let i = 0; i < leaves.length; i++) {
      const l = leaves[i];
      l.y += l.vy * step;
      l.rot += l.rotSpd * step;
      if (l.y > 1.05) leaves[i] = spawnLeaf(false);
      const x = l.x * W + Math.sin(t * l.swaySpd + l.ph) * 36 * l.sway;
      ctx.save();
      ctx.translate(x, l.y * H);
      ctx.rotate(l.rot);
      ctx.fillStyle = l.color;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.ellipse(0, 0, l.size, l.size * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      // stem
      ctx.strokeStyle = l.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(l.size, 0);
      ctx.lineTo(l.size + 3, 0);
      ctx.stroke();
      ctx.restore();
    }

    // bats
    for (const b of bats) {
      b.x += b.vx * step;
      if (b.x > 1.1) b.x = -0.1;
      if (b.x < -0.1) b.x = 1.1;
      drawBat(b, t);
    }

  }
  if (!document.hidden) frameId = requestAnimationFrame(frame);
})();

// Pause repeating CSS effects outside the viewport and when the tab is hidden.
(function initAnimationVisibility() {
  const syncVisibility = () => document.documentElement.classList.toggle("page-hidden", document.hidden);
  syncVisibility();
  document.addEventListener("visibilitychange", syncVisibility);
  if (!("IntersectionObserver" in window)) {
    $$(".stop, .trophy-card").forEach(node => node.classList.add("is-in-viewport"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle("is-in-viewport", entry.isIntersecting && entry.intersectionRatio >= 0.01));
  }, { threshold: [0, 0.01] });
  $$(".stop, .trophy-card").forEach(node => observer.observe(node));
})();

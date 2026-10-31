# 🎃 The Birthday Feast

A private, mobile-first, single-page birthday surprise — a Halloween feast in a
candlelit great hall. Vanilla HTML + CSS + JS, no frameworks, no backend, no tracking.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure (all 6 stops + easter eggs) |
| `style.css` | Theme, animations, mobile-first layout |
| `script.js` | **`CONFIG` object at the top = everything editable** + all logic |

Optional files you can drop next to `index.html`:
- `ambient.mp3` — royalty-free ambient loop for the music toggle (off by default)
- `voice-note.mp3` — your voice note for the finale (then set `CONFIG.finale.voiceNote = true`)

## The experience flow

0. **Countdown gate** — locked until midnight Oct 31. Live countdown.
1. **The Door** — wax-sealed scroll, tap to break the seal and unroll it.
2. **The Letter** — Hogwarts-style acceptance letter.
3. **The Feast** — pun-named food cards that float in as you scroll; flip for descriptions.
4. **The Trophy Room** — chocolate-frog style flip cards (reasons you appreciate her) with rarity labels and gold-foil shimmer.
5. **The Midnight Balcony** — big gold "Happy Birthday", bat/pumpkin/star confetti, final message, optional voice note.

Plus: wand cursor with sparkle trail (desktop), tap sparkles (mobile), falling
leaves, drifting bats, starfield, floating candles, and **4 tappable easter
eggs** (moon 🌙 top-left, owl 🦉 right side, pumpkin 🎃 bottom-left, black cat 🐈‍⬛ bottom-right).

## 🔧 Testing & previewing

The site is gated by the countdown. To bypass it while testing, add
**`?preview=1`** to the URL:

```
https://your-site.pages.dev/?preview=1
```

## ✏️ Editing the content

Open `script.js`. Everything lives in the `CONFIG` object at the very top:

- `name` — her nickname (never use full names; the page is noindexed).
- `unlockDate` — ISO datetime **with timezone offset**, e.g.
  `"2026-10-31T00:00:00-05:00"` (US Central), `"+00:00"` (UK), `"+01:00"` (CET).
- `letter.paragraphs` — the acceptance letter; the last paragraph is your personal message.
- `foods` — add/remove/edit cards freely (emoji + name + tag + desc).
- `reasons` — the collectible cards; `rarity` is `common` | `rare` | `legendary`.
- `finale.paragraphs` — your closing message; `finale.voiceNote` — set `true`
  after adding `voice-note.mp3`.
- `eggs` — the four easter-egg secret messages.

No build step — save, refresh, done.

## 🚀 Deploying

### Cloudflare Pages (recommended)
1. Push this repo to GitHub (already done if you're reading this there).
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages →
   Connect to Git** → pick this repo.
3. Build settings: framework preset **None**, build command **empty**,
   output directory **`/`** (root). Deploy.
4. You get a private-ish URL like `https://something.pages.dev`.
   Only people with the link can find it (the page carries
   `noindex, nofollow`, and there are no analytics or external calls except Google Fonts).

Alternatively, drag-and-drop: **Pages → Upload assets** and drop
`index.html`, `style.css`, `script.js` (+ optional mp3s).

### GitHub Pages
Repo → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`,
folder `/ (root)` → Save. Site appears at `https://<user>.github.io/<repo>/`.
(Note: GitHub Pages URLs on a public repo are guessable — a private repo +
Cloudflare Pages keeps it more discreet.)

## Privacy & credits

- `<meta name="robots" content="noindex, nofollow">`, no analytics, no tracking.
- Only external request: Google Fonts (works fine offline-cached after first load).
- All visuals are CSS/canvas/emoji — no copyrighted Harry Potter assets.
- Respects `prefers-reduced-motion`.

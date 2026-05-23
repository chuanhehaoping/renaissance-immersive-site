# Deploy

> Manual fallback steps for GitHub + Vercel. Use them when the local automation (gh CLI / vercel CLI) is unavailable or unauthenticated.

---

## 0. Local verification (do this first)

```bash
npm install
npm run lint
npm run build
npm run dev    # http://localhost:3000
```

The build must succeed before any push. Hero, the WebGL canvas, all 8 sections, and the hidden interaction should render correctly with placeholders (no generated images required).

---

## 1. GitHub repository

### Option A — `gh` CLI (logged in)

```bash
gh auth status
# create the repo and push in one step
gh repo create renaissance-immersive-site --public --source=. --remote=origin --push
```

If the name is taken:

```bash
gh repo create renaissance-immersive-site-v2 --public --source=. --remote=origin --push
```

### Option B — Manual (no gh, or `gh` not authenticated)

1. Create a new empty repository at <https://github.com/new>. Suggested name: `renaissance-immersive-site` (or `renaissance-immersive-site-v2` if collision). Do **not** initialize with README / .gitignore / license — the local repo already has them.
2. From the project root:
   ```bash
   git remote add origin https://github.com/<your-account>/renaissance-immersive-site.git
   git branch -M main
   git push -u origin main
   ```

### .gitignore safety

The repository ships with a `.gitignore` that excludes `node_modules`, `.next`, `.env*` (except `.env.example` if added), `*.log`, `.vercel`, OS noise files, and editor metadata. Never commit `.env.local` or any file containing secrets.

---

## 2. Vercel project

### Option A — `vercel` CLI (logged in)

```bash
vercel login
vercel link            # create / link project
vercel                 # preview deployment
vercel --prod          # production deployment
```

### Option B — Manual (no vercel CLI)

1. Sign in at <https://vercel.com> with the GitHub account that owns the repo.
2. Click **Add New → Project**, select the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: leave as `./`.
5. Build command: `next build` (default).
6. Output directory: `.next` (default; Vercel handles this).
7. Click **Deploy**.

Pull requests trigger preview deployments. Pushes to `main` trigger production.

---

## 3. Environment variables

The MVP has no required runtime secrets. Add through the Vercel dashboard (Project → Settings → Environment Variables) if you later introduce any. Mirror them locally in `.env.local` (never commit).

Example placeholder (not used by the MVP):

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
```

---

## 4. Asset & performance notes for Vercel

- Put generated images under `public/images/generated/` as listed in [image-prompts.md](image-prompts.md). They will be served from the static CDN automatically.
- Heavy 3D `.glb` / `.gltf` assets, if added, go under `public/models/`. Consider serving very large models from an external CDN to keep Vercel's deploy size manageable.
- The WebGL scene auto-downgrades on `prefers-reduced-motion` and on narrow viewports so mobile Lighthouse scores stay healthy.
- Keep total `public/` payload reasonable — Vercel's default function payload limits do not affect static assets, but a giant repo slows deploys.
- The build does **not** require any private credentials; both Preview and Production environments work with zero env vars.

---

## 5. Production checklist before announcing

- [ ] `npm run lint` clean
- [ ] `npm run build` clean
- [ ] Preview deployment renders all 8 sections
- [ ] Hero WebGL canvas mounts (or static fallback shows)
- [ ] Hidden clickable triggers its modal
- [ ] Reduced-motion respected (test via OS setting or DevTools rendering tab)
- [ ] Mobile viewport (375×667) checked — no horizontal scroll, type readable
- [ ] No console errors / unhandled promise rejections
- [ ] OpenGraph metadata reviewed (`src/app/layout.tsx`)
- [ ] No `.env*` or secrets in the diff (`git log -p` quick scan)

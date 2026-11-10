# CodeStack — Work Delivery Report

**Project:** CodeStack SEO Dashboard & Website  
**Client delivery document**  
**Date:** 26 September 2026  
**Platform:** codestackintl.com  

---

## 1. Summary

This delivery improves CodeStack’s SEO dashboard performance and Domain Overview (closer to an Ahrefs-style view), fixes domain search UX, and restores LinkedIn link preview (feature image) when sharing the website.

---

## 2. What Was Delivered

### A. Faster Domain Overview & Dashboard Features

**Problem:** Domain Overview and related tools (organic search, backlinks, keyword research) felt slow — often waiting a long time for results.

**Solution:**
- Removed the slow OnPage health crawl from Domain Overview first load
- Added short-term server caching (≈10 minutes) for Domain Overview, Organic, Backlinks, and Keyword Research
- Reduced heavy API payloads (smaller GSC and table limits)
- Auto-load results when a project domain is ready (no extra click for first view)
- Cached results load near-instantly on repeat visits

**Result:** First load still needs live SEO data (a few seconds). Reloads and revisits are much faster.

---

### B. Ahrefs-Style Domain Overview (Traffic + Keywords)

**Problem:** Organic traffic and keyword counts showed as empty (“—”). The panel did not clearly show which keywords drive traffic (unlike Ahrefs).

**Root cause:** Domain Rank Overview metrics were read from the wrong place in the DataForSEO response, so traffic/keyword values never populated.

**Solution:**
- Fixed DataForSEO Labs parsing so **organic traffic**, **keyword counts**, and **traffic value ($)** display correctly
- Redesigned overview into:
  - **Backlink profile** — Domain Rating, Backlinks, Referring domains  
  - **Search** — Organic keywords (with Top 3), Organic traffic + Value  
  - **Top keywords by traffic** — keyword, estimated traffic, volume, rank, page  
- Country breakdown with **flags** + keyword count + traffic  
- If the selected country has little data, fall back to the strongest market (e.g. US) and show a market badge  
- Label estimates as **DataForSEO ETV** (not identical to Ahrefs)

**Note on numbers vs Ahrefs:** Ahrefs and DataForSEO use different databases and CTR models. Figures will not match 1:1. Synonym deduplication (`ignore_synonyms`) was enabled to reduce inflated traffic estimates.

---

### C. Domain Field Fix (Edit / Search Another Domain)

**Problem:** Typing a new domain in Domain Overview did not work — the field kept resetting to the project domain, and input was locked while loading.

**Solution:**
- Stopped auto-load effects from overwriting the input on every keystroke  
- Domain field stays editable during search  
- Same pattern applied to Organic Search and Backlinks  

**How to use:** Type any domain → click **Search**.

---

### D. UI Cleanup

- Removed the `*.domain/*` wildcard scope chip from Domain Overview  
- Show a clean hostname under the site title instead  
- Keywords by country: flag + country code + keywords + traffic  

---

### E. LinkedIn Feature Image (Link Preview)

**Problem:** Pasting `https://codestackintl.com/` on LinkedIn did not show the feature / Open Graph image.

**Cause:** Social tags pointed at **WebP** images. LinkedIn often ignores WebP for link previews.

**Solution:**
- Added JPEG feature images (`og-image.jpg`, `twitter-card.jpg`, etc.)  
- Pointed Open Graph / Twitter meta tags to absolute JPEG URLs  
- Use a **single landscape** `og:image` (1200×630) — LinkedIn can fail when a square second image is present  
- Allow LinkedInBot in `robots` and skip Auth cookies for social crawlers  

**Client action required (one time after deploy):**
1. Open [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)  
2. Paste: `https://codestackintl.com/`  
3. Click **Inspect** (repeat once if needed)  
4. Create a **new** LinkedIn post with the URL  

Old drafts keep the old blank preview until cache is refreshed.

---

## 3. Technical Stack (Reference)

| Area | Technology |
|------|------------|
| App | Next.js (App Router) |
| SEO data | DataForSEO Labs / Backlinks APIs |
| Auth | Auth.js (NextAuth) |
| Hosting | Vercel |
| Social images | Static JPEG Open Graph assets |

---

## 4. How to Verify (Checklist)

- [ ] **Domain Overview** opens and loads metrics without a long blank wait  
- [ ] **Organic traffic** and **organic keywords** show numbers (not only “—”)  
- [ ] **Top keywords by traffic** table lists keywords with traffic / rank / page  
- [ ] **Keywords by country** shows flags and traffic  
- [ ] You can **type another domain** and Search successfully  
- [ ] Soft reload of the same domain feels fast (cache)  
- [ ] After Post Inspector: LinkedIn preview shows CodeStack feature image  

---

## 5. Commits Pushed (Main Branch)

Key production commits related to this work include:

| Commit | Description |
|--------|-------------|
| `4ab74eb` | Speed up Labs features + Ahrefs-style traffic overview |
| `208cd73` | Fix domain input resetting while typing |
| `36a1ed9` | Synonym dedupe for less inflated traffic estimates |
| `0dae7ca` | Country flags + remove wildcard scope labels |
| `1b2f8f8` | LinkedIn-safe JPEG feature images |
| `e21a26f` | LinkedIn scrape hardening (single OG image, crawler path) |

Repository: production `main` on codestackintl.com (Vercel).

---

## 6. Known Limitations (Transparent)

1. **Traffic ≠ Ahrefs exact numbers** — DataForSEO ETV vs Ahrefs Organic Traffic use different models.  
2. **GSC “Total visitors”** needs Google Search Console connected for real click data.  
3. **Health Score** on overview may stay empty by design (skipped for speed; site audit tools can cover crawl health separately).  
4. **LinkedIn cache** — must use Post Inspector after image/meta changes.  

---

## 7. Deliverables Included

1. Faster Domain Overview / Organic / Backlinks / Keyword Research paths  
2. Working organic traffic + top traffic keywords UI  
3. Domain search UX fixed  
4. Country flags + traffic correspondence  
5. LinkedIn-compatible feature image (JPEG + meta)  
6. Code pushed to production branch  

---

## 8. Support Notes for the Buyer

If LinkedIn still shows no image after deploy:

1. Confirm deploy finished on Vercel  
2. Open `https://codestackintl.com/og-image.jpg` in a browser — you should see the CodeStack banner  
3. Run LinkedIn Post Inspector again on `https://codestackintl.com/`  
4. Share in a **new** post (not an old draft)  

---

**Prepared for Fiverr delivery**  
CodeStack — Web Development & SEO Dashboard improvements  
*End of document*

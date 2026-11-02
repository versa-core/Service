# VERSACORE — POP & Interior Solutions

A responsive, static GitHub Pages landing website for VERSACORE.

## Included
- `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `llms.txt`, `.nojekyll`
- Original supplied SVG logo, brand mark, favicons, hero images, banner and profile image copied from `versacore-brand-kit.zip`
- Generated WebP interior visuals for the services and 14 portfolio entries
- Vanilla HTML, CSS and JavaScript; no build step, server, paid API or runtime dependency
- Responsive hero art direction, gallery filters, accessible project detail modal, WhatsApp enquiry form and email fallback

## Deploy to GitHub Pages
1. Open `https://github.com/versa-core/Service`.
2. Push the contents of this ZIP to the repository's `main` branch, repository root (not inside an extra wrapper folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**, then Save.
6. Wait for the Pages deployment to finish. The site URL is currently `https://versa-core.github.io/Service/`.

## Site URL configuration
The one JavaScript source-of-truth constant is `siteUrl` in `assets/js/config.js`. The canonical link, Open Graph URL and JSON-LD schema are set from that value at runtime. Because GitHub Pages serves static XML and text files without a build step, if you change the domain or project path, also update the absolute URL in `sitemap.xml` and the `Sitemap:` line in `robots.txt`. Update `SITE_URL` in this README as well. Relative asset paths are used throughout the HTML, CSS, manifest and scripts so the site works from `/Service/` and can move to a custom domain.

## Search Console and Bing Webmaster
1. Add the site property in Google Search Console (URL-prefix property is suitable for the GitHub Pages URL).
2. Verify ownership using one of the methods offered by Search Console.
3. Submit `https://versa-core.github.io/Service/sitemap.xml`.
4. Inspect the home URL and request indexing after the first deployment.
5. Add the site in Bing Webmaster Tools; import from Search Console or verify ownership, then submit the sitemap.
6. Recheck indexing, crawl errors and structured data after the site is live.

## Google Business Profile checklist
- Claim or create the VERSACORE profile using the exact business name and address used on this site.
- Select the most accurate primary category available for POP / interior contracting; add relevant secondary categories only when accurate.
- Use the supplied `assets/images/profile-square.webp` as a profile image if it represents the real business branding and meets Google's image requirements.
- Add the same phone number, address and website URL; keep NAP identical across directories.
- Add real project photographs from completed sites as they become available. Do not use generated illustrative visuals as proof of completed work.
- Add actual business hours only after the owner confirms them; none are invented on this site.
- Verify the profile and respond to genuine customer reviews.

## Local SEO and citations
After launch, keep business name, address and phone identical on Google Business Profile, Justdial, Sulekha, IndiaMART and relevant local directories. Seek relevant local supplier, association and project-partner citations. Ask real customers for honest reviews without incentives or scripted wording.

## Accuracy notes
- The supplied project list contains the spelling **Enjanbowli**. Confirm with the owner before changing it.
- The portfolio gallery names 14 completed project entries. Generated images are explicitly labelled illustrative and are not represented as actual project photographs.
- `foundingDate` is represented as **2014 (approximate)** in structured data and this README, based on 12 years subtracted from 2026. Confirm the exact commencement date before treating it as a precise legal fact.
- No business hours, latitude/longitude, prices, reviews, ratings or client testimonials were invented. Map directions are based on the supplied address.
- Udyam and GSTIN are displayed as supplied; verify the identifiers before publishing if they have not already been checked.

## Performance and accessibility notes
- Hero image uses high fetch priority; below-the-fold images are lazy loaded with explicit dimensions.
- Responsive image sources are provided for hero and portfolio card images.
- CSS respects `prefers-reduced-motion`; keyboard focus, skip link, labels, semantic landmarks and accessible modal controls are included.
- External Google Fonts are loaded with `display=swap` behaviour via the provider's stylesheet. For strict offline/self-hosted performance, replace with licensed local font files.
- No Lighthouse score is claimed because a real browser audit against the deployed URL has not been run. Run Lighthouse on mobile and desktop after deployment.


## Pre-build market and search research
A review of publicly visible Hyderabad contractor and interior pages informed the structure:
- **Dhamu Interiors** presents distinct service scopes, a clear delivery process, project examples and direct FAQs; VERSACORE adopts the clear service/process/FAQ pattern without copying its claims.
- **AZ Interiors** exposes a detailed service catalogue around POP, gypsum, PVC panels and partitions; this supports using individual, anchor-linked service sections rather than one generic services paragraph.
- **Apple Interiors** and **Esteem Interior** use categorized project portfolios with locality context; VERSACORE uses a filterable residential/commercial gallery and area names.
- **RA Contractor** combines a prominent contact path, local service-area coverage, process explanation and project imagery; VERSACORE follows the useful local-contact and project-clarity approach, without inventing testimonials or ratings.

Search-intent phrases prioritized (not represented as measured search-volume data):
- English: `POP ceiling Hyderabad`, `POP false ceiling Hyderabad`, `false ceiling contractor Hyderabad`, `wall panelling Hyderabad`, `die work Hyderabad`, `PVC ceiling Hyderabad`, `interior contractor Chandrayangutta`, `false ceiling contractor Old City`.
- Hindi/Urdu transliterations: `POP ka kaam Hyderabad`, `false ceiling ka contractor Hyderabad`, `wall panel ka kaam Hyderabad`, `PVC panel Hyderabad`.
- Telugu transliterations: `POP ceiling pani Hyderabad`, `false ceiling pani Hyderabad`, `interior works Hyderabad`, `wall panelling pani Hyderabad`.
- Local intent modifiers: `Chandrayangutta`, `Hafez Baba Nagar`, `Old City`, `Moin Bagh`, `Gachibowli`, `Tellapur`, `Narsingi`, `Musheerabad`, `Golconda`, `Kanchanbagh`, `KCR Nagar`.

Google's current guidance emphasizes useful, original, people-first information and accurate structured data that matches visible content. Google also states there is no special `llms.txt` or schema markup required for generative AI visibility; `llms.txt` is included as a plain information file for systems that choose to use it, not as a ranking guarantee. FAQ structured data is retained for semantic clarity, but Google discontinued FAQ rich results in May 2026. See:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://dhamu.co.in/
- https://www.azinteriors.co.in/
- https://appleinteriors.in/portfolio
- https://esteeminterior.com/portfolio
- https://racontractor.in/

## Keyword focus
Primary: POP ceiling Hyderabad, false ceiling contractor Hyderabad, POP interior Hyderabad.
Supporting: wall panelling Hyderabad, die work Hyderabad, PVC work Hyderabad, interior contractor Chandrayangutta, false ceiling contractor Old City, cabinet work Hyderabad.
Natural locality mentions: Chandrayangutta, Hafez Baba Nagar, Old City, Moin Bagh, Gachibowli, Tellapur, Narsingi, Musheerabad, Golconda, Kanchanbagh and KCR Nagar.

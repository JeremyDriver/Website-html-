# Energy Choice Program LLC — Company Website

Static, five-page marketing site for Energy Choice Program LLC, an independent
commercial energy consultant focused on Pennsylvania and Ohio (electricity and natural gas),
New Hampshire (electricity), and Florida (commercial natural gas transportation).

No build step, framework, or database — plain HTML/CSS/JS that can be hosted anywhere.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — positioning, services overview, process, FAQ |
| `commercial-energy.html` | Commercial Energy — electricity, natural gas, contract review, markets served |
| `markets.html` | Markets — PA, OH, NH, and Florida gas, with the utilities covered in each |
| `how-it-works.html` | How It Works — bill explainer, 6-step process, FAQ |
| `about.html` | About Us — mission, principles, leadership |
| `contact.html` | Contact — lead form, emails, phone, hours |
| `404.html` | Not-found page |

Also included: `robots.txt`, `sitemap.xml`, `favicon.svg`, `CNAME`, and Organization
structured data (JSON-LD) on the home page so Google can connect the site to the company.

## Before going live — replace placeholders

1. **Phone number** — `(555) 555-0123` / `+15555550123` appears in the footer of every
   page, on `contact.html`, and in the JSON-LD on `index.html`. Search and replace it.
2. **Contact form** — create a free form at <https://formspree.io>, then in `contact.html`
   replace `YOUR_FORM_ID` in the form's `action` with your form ID. Until then, the form
   opens the visitor's email app addressed to `jeremy@energychoiceprogram.org`.
3. **Domain** — the site is configured for `www.energychoiceprogram.org`
   (canonical URLs, `sitemap.xml`, `robots.txt`, `CNAME`).
4. **Founder bio** — review the "Leadership" section on `about.html` and add real
   background/experience details and a headshot.
5. **Social profiles** — add LinkedIn / Google Business Profile URLs to the `sameAs`
   list in the JSON-LD on `index.html`.
6. **Licensing / registration** — confirm and add your numbers to the footer:
   - **Pennsylvania** — PA PUC license as an electric generation supplier (EGS) broker/marketer,
     plus a natural gas supplier (NGS) broker/marketer license for gas.
   - **Ohio** — PUCO certification as a CRES broker/aggregator (electric) and a
     CRNGS broker/aggregator (gas).
   - **New Hampshire** — registration with the NH PUC as an aggregator.
   - **Florida** — no state broker license for gas transportation today, but each gas
     utility has its own marketer/agent rules. Confirm with each utility.
   Have the disclaimer language reviewed as well.

## Domain + professional email (step 1)

1. Register the domain (Cloudflare, Namecheap, Google/Squarespace Domains, GoDaddy).
2. Email is `jeremy@energychoiceprogram.org`, and the site lists only this address. If you later
   add `sales@` or `support@` aliases, update the footer and `contact.html`.
3. Add the email provider's MX, SPF, DKIM, and DMARC DNS records so mail isn't flagged as spam.

## Hosting (pick one — all free for a site like this)

**GitHub Pages:** repo Settings → Pages → deploy from this branch, root folder. The `CNAME`
file sets the custom domain. At your DNS provider, point `www` (CNAME) to
`<github-username>.github.io` and the apex domain (A records) to GitHub Pages' IPs, then
enable "Enforce HTTPS".

**Netlify / Cloudflare Pages:** connect the repo, leave the build command empty, publish
directory `/`. Add the custom domain in their dashboard. (The `CNAME` file is ignored.)

## After launch

- Submit `sitemap.xml` in Google Search Console and verify the domain.
- Create a Google Business Profile and a LinkedIn company page that link to the site.
- Use the same company name, phone, and website everywhere (Sunbiz, Google, LinkedIn).

## Editing

Header and footer are repeated in each HTML file — if you change navigation or footer
content, update every page. Styles live in `assets/css/styles.css`; scripts (mobile menu,
form handling) in `assets/js/main.js`.

# Energy Choice Program LLC — Company Website

Static, five-page marketing site for Energy Choice Program LLC, an independent
commercial energy consultant (electricity and natural gas supply in deregulated markets).

No build step, framework, or database — plain HTML/CSS/JS that can be hosted anywhere.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — positioning, services overview, process, FAQ |
| `commercial-energy.html` | Commercial Energy — electricity, natural gas, contract review, markets served |
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
   opens the visitor's email app addressed to `sales@energychoiceprogram.com`.
3. **Domain** — if you register a different domain than `energychoiceprogram.com`,
   search and replace it everywhere (HTML, `sitemap.xml`, `robots.txt`, `CNAME`).
4. **Founder bio** — review the "Leadership" section on `about.html` and add real
   background/experience details and a headshot.
5. **Social profiles** — add LinkedIn / Google Business Profile URLs to the `sameAs`
   list in the JSON-LD on `index.html`.
6. **Compliance** — some states require energy brokers/consultants to be licensed or
   registered (e.g. TX, PA, OH, IL, NJ, MD). Add license numbers to the footer as you obtain
   them, and have the disclaimer language reviewed.

## Domain + professional email (step 1)

1. Register the domain (Cloudflare, Namecheap, Google/Squarespace Domains, GoDaddy).
2. Set up email with Google Workspace or Microsoft 365 and create:
   `jeremy@`, `sales@` (can be an alias/group), and `support@` (alias/group).
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

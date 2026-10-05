# eliweiss-home

The projects hub at **https://eliweiss.me**. A static page that links to each project, every one of which lives on its own subdomain of `eliweiss.me`.

No build step, no dependencies: plain HTML, CSS and JavaScript (ES modules).

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Page shell: heading, empty project list, footer |
| `css/styles.css` | Design tokens at the top, then layout and the project cards |
| `js/projects.js` | **The list of projects.** The only file you edit to add one |
| `js/main.js` | Builds a card for each project, plus the "Next project" slot |
| `netlify.toml` | Netlify publishes the repo root |

## Add a project

1. Create its repo and Netlify site, and point a subdomain at it (a `CNAME` at GoDaddy).
2. Append an entry to `js/projects.js` with a name, kind, URL, description and three preview colours.
3. Commit and push.

## Run locally

ES modules need HTTP, not `file://`:

```bash
python -m http.server 3100
```

Then open http://localhost:3100.

## Deployment

Netlify deploys the repo root from `main` on every push. Develop on `dev` and merge to `main` when ready.

`eliweiss.me` is registered at GoDaddy, which also hosts its DNS. The root `A` record points to Netlify, and each project subdomain is a `CNAME` to its own Netlify site.

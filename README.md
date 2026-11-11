# Abdaltwab Okasha Elsheikh — Portfolio

A bilingual, responsive personal portfolio built with React, Vite, and Tailwind CSS. Its static production output is copied to the repository root so the existing root-based GitHub Pages setup can continue serving the site without a new deployment workflow.

## Develop

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

Vite first builds into the ignored `src/dist/` directory, then copies the production `index.html` and bundled files to the repository root. The application source remains in `src/`; the build does not clear other root files or the existing project screenshots. The relative asset base also supports the `/Portifolio/` GitHub Pages project URL.

To inspect a production build locally, run `npm run preview`.

## Project structure

```text
src/
  components/       # Navbar, hero, project cards, content sections, and footer
  data/             # Project, service, skill, and translation content
  App.jsx           # Page composition and language/theme state
  index.css         # Tailwind layers, design tokens, and responsive styles
  index.html        # Vite HTML entry
assets/             # Existing portrait, mark, and project screenshots
index.html          # Generated production entry for GitHub Pages
tailwind.config.js  # Tailwind source paths and custom color tokens
vite.config.js      # Root-relative build output for GitHub Pages
```

Project descriptions and destinations use the existing portfolio information. Nahed was a team Telegram-bot project; my contribution was Login, Registration, and Assignment features implemented in Java. The Pokémon Fetcher card uses an explicitly illustrative visual rather than implying it is a screenshot.

Contact email, phone, and social links remain unchanged. The footer poem is preserved in Arabic.

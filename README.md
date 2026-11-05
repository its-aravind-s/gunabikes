# Guna Bikes – Website

Static website for **Guna Bikes (குணா பைக்ஸ்)**, a multi-brand new & used two-wheeler showroom in Madurantakam with finance. Plain HTML/CSS/JS, so it needs no build step.

## Structure
- `index.html` holds all page content. English text lives here.
- `css/style.css` holds the styles. Brand colours are at the top (`--red`, `--navy`).
- `js/main.js` holds the Tamil translations (`TA` object), the language toggle, the mobile menu and the gallery lightbox.
- `assets/logo.webp`, `assets/logo.png` are the logo files.
- `assets/gallery/` holds the showroom photos (resized to 1600px).

## Common edits
- **Phone / WhatsApp**: search `index.html` for `8144408797` and `9865798797`.
- **Text**: change the English in `index.html`. Change the Tamil under the matching `data-i18n` key in `js/main.js`.
- **Exact map pin**: on Google Maps, open the shop, then Share → *Embed a map*, and paste the `src` URL into the `<iframe>` in the Contact section.
- **Photos**: add a `<button class="g-item">` with an `<img>` in the Gallery section. Resize first, for example `sips -Z 1600 photo.jpg`.

## Run locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

## Publish on GitHub Pages
1. Push to `main`.
2. In the repo, go to **Settings → Pages → Build and deployment**: Source *Deploy from a branch*, Branch `main`, folder `/ (root)`.
3. The site goes live at `https://its-aravind-s.github.io/gunabikes/`.

# Art By Sister's — Static Website

This website is plain HTML, CSS and JavaScript. No backend, database or build system is required.

## Folder structure
- `index.html` — all page content and section structure.
- `styles.css` — colors, spacing, typography, responsive layout.
- `script.js` — mobile menu and gallery lightbox.
- `assets/` — the logo, professional photo, artwork images and achievement certificates extracted from the supplied document.

## How to make changes
### Change text
Open `index.html` in a text editor (VS Code, Notepad++, etc.), search for the text you want to change, edit it, and save.

### Change phone number
Search for `8485005076` in `index.html` and replace both the visible number and the `tel:+918485005076` links with the new number.

### Change Instagram
Search for `artbysisters_official` in `index.html` and replace the Instagram URL/handle.

### Replace an image
Put the new image inside `assets/` and update the matching `src="assets/..."` in `index.html`. Keep the same filename if you want the easiest replacement.

### Change colors
Open `styles.css`. The main pastel colors are at the top inside `:root`:
- `--rose` / `--rose-deep` — pink/rose accents
- `--sage` — soft green accent
- `--soft` — pale background
- `--ink` — text/dark buttons

### Add/remove gallery images
Gallery images are the `.gallery-item` buttons in the `#gallery` section of `index.html`. Each image is also included in the `images` list automatically by `script.js`, so no JavaScript edit is needed when adding another `.gallery-item`.

## Run locally
You can simply double-click `index.html` in most browsers. For a more reliable local preview, open the folder in VS Code and use a simple Live Server extension.

## Deploy
Upload the whole folder to any static hosting service or web server. Keep the `assets` folder next to `index.html`.

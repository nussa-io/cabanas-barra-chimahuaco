# Cabañas Barra

Website for Cabañas Barra — family-run rooms, surfboard rentals, surf lessons and surf trips in Barra de la Cruz, Oaxaca, Mexico.

Plain HTML, CSS and JavaScript. No frameworks, no build step.

## Structure

```
index.html          Sends visitors to /es/ or /en/ (Spanish is the default)
es/                 Spanish:  index, surf, nosotros, preguntas
en/                 English:  index, surf, about, faq
css/styles.css      All styles. Colors live only in the :root block at the top.
js/illustrations.js Hand-drawn illustrations and icons (SVG), shared by every page
js/main.js          Phone menu, remembered language, footer year
assets/images/      Put photos here
```

Every Spanish page has an English twin. When you change text on one, change the other too.
The ES/EN button on each page links to its twin.

## Adding photos

Photos are currently dashed placeholder boxes like:

```html
<div class="ph" role="img" aria-label="..."><span>Foto: habitación</span></div>
```

Save the photo in `assets/images/` (JPG, ideally under 300 KB and about 1600px wide), then replace the box with:

```html
<img class="photo" src="../assets/images/habitacion.jpg" alt="Habitación con dos camas matrimoniales" loading="lazy">
```

## Contact details used

- Rooms WhatsApp: +52 958 174 2264
- Surf WhatsApp: +52 958 122 6791
- Instagram: @cabins_barrasurf
- Google Maps: https://share.google/MvIOrOZv8lbcAxRlX

## Exact map pin

The embedded map shows Barra de la Cruz. To show the exact house:
Google Maps → your place → Share → Embed a map → copy the `src="..."` link,
and paste it into the `<iframe>` in `es/index.html` and `en/index.html`.

## Preview locally

Double-click `es/index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publishing (free)

GitHub → repository Settings → Pages → Source: "Deploy from a branch" → `main` / root.
The site will be at https://nussa-io.github.io/cabanas-barra-chimahuaco/

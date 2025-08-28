# Meme Generator

Create and customize memes right in your browser. Upload an image via click or drag-and-drop, add top/bottom text, tweak font, colors, stroke, and download your creation as a PNG. All processing happens client‑side.

## Features

- Upload image by click or drag-and-drop (PNG, JPG, GIF)
- Live canvas preview of your meme
- Top and bottom text fields (auto UPPERCASE like classic memes)
- Appearance controls:
  - Font size slider (20–80 px)
  - Text color picker
  - Stroke color picker
  - Stroke width slider (0–8 px)
- Download as PNG
- Reset all controls
- Privacy-friendly: images are processed locally in your browser

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4 for styling
- HTML5 Canvas for rendering meme text onto images

## Getting Started

1) Install dependencies

```
npm install
```

2) Run the development server

```
npm run dev
```

Open http://localhost:3000 in your browser.

## Usage

1) Click the upload area (or drag and drop an image) to load your background image.
2) Enter Top Text and Bottom Text.
3) Adjust Font Size, Text Color, Stroke Color, and Stroke Width to your liking.
4) Click "Download Meme" to save a PNG.
5) Use "Reset All" to clear the canvas and controls.

## Build

```
npm run build
npm start
```

## Lint

```
npm run lint
```

## Project Structure (key files)

- Main page and UI logic: <mcfile name="page.js" path="app/page.js"></mcfile>
- Global styles: <mcfile name="globals.css" path="app/globals.css"></mcfile>
- App layout: <mcfile name="layout.js" path="app/layout.js"></mcfile>

## License

This project is licensed under the MIT License. See the <mcfile name="LICENSE" path="LICENSE"></mcfile> file for details.

# Farah & Trevor Wedding Website

A wedding celebration website for Farah and Trevor, built with React and Vite. It shares event details for their June 12, 2027 celebration in Denver, plus hotel suggestions, local recommendations, FAQs, and an RSVP link.

## Requirements

- Node.js (current LTS recommended)
- npm

## Getting started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173`.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally

## Project structure

```text
public/       Photos, decorative images, and video served as static assets
src/          React application and styles
index.html    Vite page entry point
```

Wedding details and page content are in `src/App.jsx`; visual styles are in `src/styles.css`. Static media lives in `public/` and is referenced from the app by paths such as `/images/couple.jpg`.

## Updating the site

Edit the content in `src/App.jsx` and styles in `src/styles.css`. The RSVP form URL is set by the `RSVP_URL` constant near the top of `src/App.jsx`. Keep referenced images and videos in `public/` so Vite can serve them at the existing paths.

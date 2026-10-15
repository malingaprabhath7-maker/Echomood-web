# Echomood — Sound & Feeling

**Live:** https://malingaprabhath7-maker.github.io/Echomood-web/ · English and සිංහල

*හැඟුමන් දෝංකාර දෙන තැන...* — Echomood is a Sinhala content page that shares short reels of nature, sunsets and quiet moods, each with a few words for the heart. This is version 2 of its website.

## Features

- **Hero video** with the neon Echomood logo
- **“How do you feel right now?”**: pick a mood (sad, nature, sunset, hope) and get a matching reflection and reel
- **Reels gallery** with mood filters, a muted preview on hover, and a full-screen player with sound, next/previous (buttons, arrow keys or swipe) and a share link that opens the same reel (`#reel=golden-sea`)
- **Daily reflections**: 12 Sinhala quotes with English translations, copy with one tap
- **Wallpaper maker**: turn a reflection, or your own words, into a 1080×1920 phone wallpaper or a 1080×1080 post. Pick a gradient or a frame from a reel, set the text size and download a PNG, all in the browser
- **Store** preview (coming soon) and an About section
- English and Sinhala pages, keyboard-friendly, reduced-motion support

## What changed from version 1

| Version 1 | Version 2 |
| --- | --- |
| One HTML page, Sinhala only | Astro 5 site in English and Sinhala |
| 4 tabs, 2 pointed at videos that did not exist | 5 working reels with filters and a full-screen player |
| 3 post images that were missing | 12 reflections and a wallpaper maker |
| 42 MB of video | 14 MB (re-encoded H.264, posters for fast loading) |
| An old CV file inside the repo | Removed |

The original version is kept on the [`v1-original`](https://github.com/malingaprabhath7-maker/Echomood-web/tree/v1-original) branch.

## Run it yourself

```bash
npm install
npm run dev      # http://localhost:4321/Echomood-web/
npm run build    # static site in dist/
```

Every push to `main` builds the site and publishes it to the `gh-pages` branch.

## Structure

```
src/data/content.ts        reels, reflections, moods and all text in English and Sinhala
src/components/Home.astro   hero, mood picker, reels and player, reflections, store, about
src/components/Wallpaper.astro  canvas wallpaper maker
public/media/              compressed reels and poster frames
```

---

Follow Echomood on [Facebook](https://www.facebook.com/share/1BYnTvPcCb/) · Website by **Malinga Prabhath** · [portfolio](https://malingaprabhath7-maker.github.io/malinga-portfolio/)

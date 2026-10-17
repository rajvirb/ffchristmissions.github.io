# Fishers for Christ Missions website

The website for Fishers for Christ Missions, published with GitHub Pages at
<https://rajvirb.github.io/ffchristmissions.github.io/>.

The site's address is not hard-coded: GitHub Pages supplies it when it builds
the site, so it keeps working if the repository is renamed, moved, or given a
custom domain.

It is a small [Jekyll](https://jekyllrb.com) site that GitHub Pages builds
automatically. There is no separate build step, database or server.

## Editing content

| What | Where |
| --- | --- |
| Home page | `index.html` |
| About, Missions, Testimonies, Contact and 404 pages | `pages/` |
| Missions (shown on the Missions page; the first is featured on the home page) | `_data/missions.yml` |
| Main navigation | `_data/navigation.yml` |
| Site title, description, contact form ID, YouTube channel and featured video | `_config.yml` |
| Header, footer and reusable pieces | `_includes/` |
| Styles | `assets/css/main.css` (plain CSS; colours and spacing are tokens at the top) |
| Scripts (mobile menu, video, contact form) | `assets/js/site.js` |

To add a mission, copy the existing entry in `_data/missions.yml` and change it.

## Images

Original, full-size photos are kept in `_source_images/` (not published).
Optimised versions live in `assets/images/` as `<name>-<width>.webp` plus a
`.jpg` fallback, and are added to pages with `_includes/image.html`.
To add a photo, for example at 640px wide (requires ImageMagick):

```sh
convert _source_images/photo.jpg -strip -resize 640x -quality 72 assets/images/photo-640.webp
convert _source_images/photo.jpg -strip -resize 640x -quality 74 -interlace JPEG assets/images/photo-640.jpg
```

## Contact form

The form posts to [Formspree](https://formspree.io) (form ID `mqkoeaqb` in
`_config.yml`). Messages arrive at the email address registered with that
Formspree form.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The `github-pages` gem keeps the local
build identical to GitHub's.

## Credits

- Fonts: [Fraunces](https://github.com/undercasetype/Fraunces) and
  [Source Sans 3](https://github.com/adobe-fonts/source-sans), self-hosted
  under the SIL Open Font License (see `assets/fonts/`).
- The previous "Feeling Responsive" theme files are kept, unpublished, in
  `_archive/` for reference and can be deleted once no longer needed.

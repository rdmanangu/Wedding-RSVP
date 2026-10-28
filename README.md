# John & Celina Wedding Website

The wedding invitation and RSVP website for **John & Celina**, celebrating on
**December 26, 2026**.

## Technology

This is a dependency-free static website built with:

- HTML (`index.html`)
- CSS (`style.css`)
- Vanilla JavaScript (`script.js`)
- Local image and audio assets

It does not use React, Vite, Next.js, Astro, or another build framework. There
is no package manager dependency required to run the website.

## Project structure

```text
index.html                 Main invitation page
style.css                  Burgundy, ivory, and champagne-gold styling
script.js                  Wedding configuration and site interactions
audio/                     Wedding music used by the music player
images/                    Runtime images, gallery WebP files, and thumbnails
originals/                 Local source JPGs for future photo processing
tools/prepare-photos.js    Optional photo preparation utility
```

The optimized files in `images/` and the music file in `audio/` are the assets
used by the live website. `originals/` is intentionally kept locally and
ignored by Git because those source JPGs are not required at runtime.

## Prerequisites

- A modern browser
- Python 3, or another local static-file server, for local testing
- Git, if uploading the project to GitHub

No `npm install` is needed for the website itself.

## Run locally

From the project directory, start a local server:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000> in a browser. Serving the files over HTTP is
recommended instead of double-clicking `index.html`, because it more closely
matches production behavior.

## Build

There is no build step. The deployable output is the project root itself.
Vercel serves `index.html` and its relative assets directly.

The optional photo utility is separate from the website runtime. It requires
Node.js and the `sharp` package only when preparing new photos:

```powershell
npm install sharp
node tools/prepare-photos.js
```

Do not run this unless you are adding or regenerating gallery images.

## Configure the invitation

Edit the `weddingConfig` object near the top of `script.js`:

- Wedding date and display text
- Ceremony and reception details, map URLs, and coordinates
- RSVP Google Form URL at `weddingConfig.rsvp.url`
- Music URL at `weddingConfig.musicUrl`
- Hero image and gallery image paths
- Countdown and optional wedding-day content

The current RSVP form and venue map links are already configured. Keep the
relative paths under `images/` and `audio/` when using local assets. A remote
HTTPS audio URL can be used if the music is hosted elsewhere.

There are currently no required environment variables and no secrets should
be added to this static site.

## GitHub: first upload from VS Code

The project is not currently a Git repository and does not have a remote.
Create a new **empty** repository on GitHub first:

1. Sign in to GitHub.
2. Select **New repository**.
3. Choose a repository name, such as `john-celina-wedding`.
4. Choose the visibility you want.
5. Leave README, `.gitignore`, and license initialization unchecked because
   this project already contains its own files.
6. Create the repository and copy its HTTPS or SSH URL.

In the VS Code terminal, from `C:\Users\Red\Desktop\RSVP`, run:

```powershell
git init
git add .
git commit -m "Prepare wedding website for deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL copied from GitHub, for
example:

```text
https://github.com/YOUR-USERNAME/john-celina-wedding.git
```

The `.gitignore` excludes `originals/`, local environment files, editor
temporary files, logs, and generated Vercel metadata. It does not exclude the
runtime images, thumbnails, audio, HTML, CSS, or JavaScript.

For authentication, use the GitHub sign-in prompts in VS Code, configure an
SSH key, or install and run `gh auth login`. Never put a GitHub password or
personal access token in this README or share it in chat.

For future changes:

```powershell
git add .
git commit -m "Update wedding website"
git push
```

## Deploy to Vercel

Vercel can deploy this repository as a static site without a build command.

1. Sign in at <https://vercel.com/>.
2. Select **Add New Project** and import the GitHub repository.
3. Select the **Other** framework preset if Vercel asks for one.
4. Leave **Build Command** empty.
5. Leave **Output Directory** empty so Vercel serves the repository root.
6. Do not add environment variables; this project does not require any.
7. Select **Deploy**.

No `vercel.json` is necessary, and no SPA rewrite should be added because this
is a single-document static site rather than a client-side routed application.

After deployment, test the generated Vercel URL on desktop and mobile:

- Open and skip the invitation intro, including keyboard activation.
- Confirm the envelope animation, invitation card, and reduced-motion behavior.
- Confirm the countdown, hero slideshow, falling rose petals, gallery lightbox,
  FAQ, and responsive layout.
- Confirm the RSVP Google Form opens.
- Confirm ceremony and reception map embeds and links.
- Tap the music control and confirm the audio file or configured remote URL
  loads. Browsers generally require a user gesture before audio can play.

Future pushes to the connected GitHub branch automatically create a new Vercel
deployment. Vercel keeps the previous deployment available if a later change
needs to be reviewed or rolled back.

## Asset hosting note

The current MP3 is approximately 3 MB and is suitable for this repository.
If the audio becomes substantially larger, host it on a suitable public HTTPS
asset/CDN service and set `weddingConfig.musicUrl` to that URL instead of
committing a large binary file. Do not use a private URL or commit credentials.

## Important preservation notes

The project intentionally keeps the existing invitation animation, RSVP form,
maps, music setup, countdown, slideshow, gallery, FAQ, and other wedding
sections. The removed calendar-download and extra map-button features are not
added by the deployment preparation.

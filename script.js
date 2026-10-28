/* ==========================================================
   JOHN & CELINA WEDDING INVITATION: script.js

   EDIT ONLY THE weddingConfig BLOCK BELOW.
   Everything else is template logic.

   Rules this template follows:
   - Confirmed details are filled in. Unconfirmed ones are left EMPTY ("")
     and the website hides them or shows "to follow".
   - Nothing is invented. When you get a real detail, type it in here.
   ========================================================== */

const weddingConfig = {
  // ---------- Couple + date (confirmed) ----------
  coupleNames: "John & Celina",
  initials: "J & C",
  displayDate: "December 26, 2026",
  envelope: {
    envelopeColor: "var(--burgundy)", // Main envelope face color.
    sealInitials: "J & C", // Initials displayed on the wax seal.
    sealColor: "var(--gold)", // Champagne-gold seal accent color.
    backgroundColor: "var(--ivory)", // Ivory opening-screen background.
    cardLines: [ // Invitation-card text, shown in this exact order.
      "TOGETHER WITH OUR FAMILIES",
      "TWO HEARTS, ONE BEAUTIFUL BEGINNING",
      "John & Celina",
      "REQUEST THE PLEASURE OF YOUR COMPANY",
      "DECEMBER 26, 2026"
    ],
    durationScale: 1, // Scales every opening-animation delay and transition.
    envelopeWidth: "min(86vw, 520px, 84dvh)", // Responsive maximum envelope width.
    cardWidth: "min(90vw, 520px)", // Responsive final invitation-card width.
    decorationImages: [], // Optional decoration image paths; empty uses existing SVG art.
    skipEnabled: true // Whether the Skip Animation control is available.
  },
  hashtag: "#FromMananguToMallari",
  timezone: "Asia/Manila",

  // The countdown and Google Calendar target: ceremony start, 2:00 PM Philippine time.
  // "+08:00" is the Asia/Manila offset, so every guest sees the same moment.
  weddingDateTime: "2026-12-26T14:00:00+08:00",

  // Duration used for the Google Calendar ceremony event; it is not shown as
  // an announced end time.
  calendarDurationMinutes: 120,

  // ---------- Ceremony (confirmed) ----------
  ceremony: {
    name: "Nuestra Señora de la Merced Parish Church",
    time: "2:00 PM",
    address: "Barangay Bahay Pare, Candaba, Pampanga",
    // Official Google Maps place URL: powers "View Location" and map fallbacks.
    placeUrl: "https://www.google.com/maps/place/2VJJ%2B5R2+Our+Lady+of+Mercy+Parish+Church,+Candaba+-+Baliuag+Rd,+Candaba,+2013+Pampanga/data=!4m2!3m1!1s0x3396fe0fd0ed4ecf:0x963db98b08af8bf2?sa=X&ved=1t:242&ictx=111",
    // Exact pin (latitude,longitude) used for the embedded preview and directions.
    // Nuestra Señora de la Merced Parish Church, Bahay Pare, Candaba, Pampanga.
    coords: "15.03042,120.8821",
    // Plus code (Open Location Code) for the same pin, shown small under the map
    // and included in "Copy Address".
    plusCode: "2VJJ+5R2",
    // Official Google Maps embed URL. In Google Maps, open the venue's place
    // page -> Share (or Menu > "Share or embed map") > Embed a map -> copy the
    // src="..." URL it gives you and paste it between the quotes. Leave "" to
    // fall back to the exact-pin embed built from coords above.
    mapEmbedUrl: "",
    // Optional photo at the top of the card (images/ folder), with its alt text.
    // FILL IN ONLY A CONFIRMED DETAIL. Leave "" to show nothing (no placeholder).
    photo: "",
    photoAlt: "",
    // Optional plain-language address or landmark, shown under the address.
    // FILL IN ONLY A CONFIRMED DETAIL. Leave "" to keep it hidden.
    landmark: ""
  },

  // ---------- Reception (venue confirmed, schedule NOT yet provided) ----------
  reception: {
    name: "The Chapters",
    details: "The Chapters, MDSF Social Hall",
    address: "Tangos Baliwag, Bulacan",
    // Official Google Maps place URL: powers "View Location" and map fallbacks.
    placeUrl: "https://www.google.com/maps/place/The+Chapters,+MDSF+Social+Hall/@14.9687965,120.8917808,17z/data=!3m1!4b1!4m6!3m5!1s0x3396ff0602c40db5:0x228f4ba65c3e98a8!8m2!3d14.9687913!4d120.8943557!16s%2Fg%2F11sshkbyr2?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    // Exact pin (latitude,longitude) used for the embedded preview and directions.
    // The Chapters, MDSF Social Hall, Baliwag, Bulacan.
    coords: "14.9687913,120.8943557",
    // Plus code (Open Location Code) for the same pin, shown small under the map
    // and included in "Copy Address".
    plusCode: "XV9V+CFC",
    // Official Google Maps embed URL (Share > Embed a map > copy the src URL).
    // See the note under ceremony.mapEmbedUrl. Leave "" to use the pin fallback.
    mapEmbedUrl: "",
    // Optional photo at the top of the card (images/ folder), with its alt text.
    // FILL IN ONLY A CONFIRMED DETAIL. Leave "" to show nothing (no placeholder).
    photo: "",
    photoAlt: "",
    startTime: "5:00 PM",   // e.g. "5:00 PM". Leave "" until confirmed.
    endTime: "10:00 PM",     // e.g. "10:00 PM". Leave "" until confirmed.
    // Optional plain-language address or landmark, shown under the address.
    // FILL IN ONLY A CONFIRMED DETAIL. Leave "" to keep it hidden.
    landmark: ""
  },

  // ---------- RSVP ----------
  rsvp: {
    url: "https://forms.gle/ZQGyfWB2T3SoHjm86",
    deadline: "",    // "YYYY-MM-DD". Leave "" to hide. Do not guess a date.
    contact: ""      // Optional organizer contact shown in the FAQ and after the deadline.
  },

  // ---------- Wedding-day schedule ----------
  // An entry only appears if its "time" is filled in, and entries are listed in
  // time order. The reception adds itself automatically as soon as
  // reception.startTime is set, so it does not belong in this list.
  schedule: [
    { time: "",        title: "Guest Arrival",         detail: "" },
    { time: "2:00 PM", title: "Wedding Ceremony",      detail: "Nuestra Señora de la Merced Parish Church" },
    { time: "",        title: "Ceremony Concludes",    detail: "" },
    { time: "",        title: "Travel to Reception",   detail: "" },
    { time: "",        title: "Reception Program",     detail: "" },
    { time: "",        title: "Dinner",                detail: "" },
    { time: "",        title: "Celebration",           detail: "" }
  ],

  // ---------- Dress code / attire guide ----------
  // Principal sponsors have a set attire; guests are asked to follow the
  // earthy-neutral palette. Edit all wording and swatches here.
  dressCode: {
    sponsorLabel: "Dress Code for Principal Sponsors",
    gentlemen: { title: "Gentlemen", attire: "Black suit with burgundy necktie" },
    ladies:    { title: "Ladies",    attire: "Floor-length taupe gown" },
    guestLabel: "Guest Attire",
    guestTitle: "Earthy neutrals in formal or semi-formal attire",
    guestDescription: "We invite our guests to wear formal or semi-formal attire in earthy, neutral tones.",
    guestNote: "While our celebration is styled in burgundy and champagne gold, we kindly ask guests to dress in the earthy-neutral palette below.",
    colors: [
      { name: "Deep Olive Brown",  color: "rgb(91, 77, 50)" },
      { name: "Warm Beige",        color: "rgb(216, 167, 131)" },
      { name: "Terracotta",        color: "rgb(147, 75, 60)" },
      { name: "Champagne Beige",   color: "rgb(235, 211, 159)" },
      { name: "Muted Olive Green", color: "rgb(137, 132, 92)" }
    ]
  },

  // ---------- Love story (personal story NOT yet provided) ----------
  // A milestone only appears if it has "text" or an "image"; empty ones are
  // hidden, and the whole section hides when none remain. No "coming soon"
  // cards are ever shown. Photos load from the images/ folder.
  story: [
    { date: "", title: "How We Met",             text: "", image: "" },
    { date: "", title: "Our First Date",         text: "", image: "" },
    { date: "", title: "The Proposal",           text: "", image: "" },
    { date: "", title: "The Beginning of Forever", text: "", image: "" }
  ],

  // ---------- A note from the couple ----------
  // Separate paragraphs with a blank line.
  noteText: "Having you share this special moment with us would make our celebration even more meaningful. Thank you for being part of our journey and for sharing in the joy of our beginning.",

  // ---------- Gifts (hidden until you write a message) ----------
  giftMessage: "Your presence is the greatest gift we could ask for. However, should you wish to give, a monetary gift would be sincerely appreciated.",

  // ---------- Optional FAQ answers (hidden when empty) ----------
  parkingInfo: "",
  extraFaq: [],      // e.g. [{ q: "Can I bring a guest?", a: "Your answer." }]

  // ---------- Images (in the images/ folder) ----------
  // Run node tools/prepare-photos.js to rebuild gallery WebP files from the
  // untouched originals/ photos. Add a matching gallery entry for each photo.
  heroImage: "images/hero.jpg",
  allWeddingPhotos: [
    { src: "images/gallery/Celina John-8432.webp", thumb: "images/gallery/thumbnails/Celina John-8432.webp", alt: "John and Celina walking together along a garden path." },
    { src: "images/gallery/Celina John-8453.webp", thumb: "images/gallery/thumbnails/Celina John-8453.webp", alt: "John and Celina seated together on broad stone steps." },
    { src: "images/gallery/Celina John-8456.webp", thumb: "images/gallery/thumbnails/Celina John-8456.webp", alt: "A close portrait of John and Celina smiling together outdoors." },
    { src: "images/gallery/Celina John-8474.webp", thumb: "images/gallery/thumbnails/Celina John-8474.webp", alt: "John and Celina sharing a quiet moment on the garden steps." },
    { src: "images/gallery/Celina John-8481.webp", thumb: "images/gallery/thumbnails/Celina John-8481.webp", alt: "Celina seated beside John beneath the trees." },
    { src: "images/gallery/Celina John-8524.webp", thumb: "images/gallery/thumbnails/Celina John-8524.webp", alt: "John and Celina laughing together in the garden." },
    { src: "images/gallery/Celina John-8546.webp", thumb: "images/gallery/thumbnails/Celina John-8546.webp", alt: "John and Celina dancing together outdoors." },
    { src: "images/gallery/Celina John-8621.webp", thumb: "images/gallery/thumbnails/Celina John-8621.webp", alt: "John and Celina embracing beneath leafy trees." },
    { src: "images/gallery/Celina John-8662.webp", thumb: "images/gallery/thumbnails/Celina John-8662.webp", alt: "John and Celina strolling together through the trees." },
    { src: "images/gallery/Celina John-8690.webp", thumb: "images/gallery/thumbnails/Celina John-8690.webp", alt: "John and Celina sharing a picnic outdoors." },
    { src: "images/gallery/Celina John-8697.webp", thumb: "images/gallery/thumbnails/Celina John-8697.webp", alt: "John and Celina sitting together at their picnic." },
    { src: "images/gallery/Celina John-8713.webp", thumb: "images/gallery/thumbnails/Celina John-8713.webp", alt: "John and Celina enjoying a picnic in the sunshine." },
    { src: "images/gallery/Celina John-8785.webp", thumb: "images/gallery/thumbnails/Celina John-8785.webp", alt: "John and Celina relaxing together on a picnic blanket." },
    { src: "images/gallery/Celina John-8824.webp", thumb: "images/gallery/thumbnails/Celina John-8824.webp", alt: "John and Celina sitting close together on the grass." },
    { src: "images/gallery/Celina John-8837.webp", thumb: "images/gallery/thumbnails/Celina John-8837.webp", alt: "John and Celina sharing a playful moment on their blanket." },
    { src: "images/gallery/Celina John-9059.webp", thumb: "images/gallery/thumbnails/Celina John-9059.webp", alt: "Celina and John playing basketball together." },
    { src: "images/gallery/Celina John-9071.webp", thumb: "images/gallery/thumbnails/Celina John-9071.webp", alt: "John and Celina posing together on the basketball court." },
    { src: "images/gallery/Celina John-9085.webp", thumb: "images/gallery/thumbnails/Celina John-9085.webp", alt: "John and Celina sitting together on the court." },
    { src: "images/gallery/Celina John-9146.webp", thumb: "images/gallery/thumbnails/Celina John-9146.webp", alt: "John and Celina silhouetted together inside a circular arch." },
    { src: "images/gallery/Celina John-9170.webp", thumb: "images/gallery/thumbnails/Celina John-9170.webp", alt: "John and Celina facing each other in the afternoon light." },
    { src: "images/gallery/Celina John-9176.webp", thumb: "images/gallery/thumbnails/Celina John-9176.webp", alt: "John and Celina sharing a tender moment together." },
    { src: "images/gallery/Celina John-9182.webp", thumb: "images/gallery/thumbnails/Celina John-9182.webp", alt: "John and Celina standing together in their wedding attire." },
    { src: "images/gallery/Celina John-9188.webp", thumb: "images/gallery/thumbnails/Celina John-9188.webp", alt: "John and Celina walking side by side outdoors." },
    { src: "images/gallery/Celina John-9205.webp", thumb: "images/gallery/thumbnails/Celina John-9205.webp", alt: "John and Celina celebrating together in a joyful pose." },
    { src: "images/gallery/Celina John-9219.webp", thumb: "images/gallery/thumbnails/Celina John-9219.webp", alt: "A close wedding portrait of John and Celina smiling together." },
    { src: "images/gallery/Celina John-9272.webp", thumb: "images/gallery/thumbnails/Celina John-9272.webp", alt: "John and Celina framed together in the round archway." },
    { src: "images/gallery/Celina John-9273.webp", thumb: "images/gallery/thumbnails/Celina John-9273.webp", alt: "John and Celina silhouetted in the warm evening light." },
    { src: "images/gallery/Celina John-9283.webp", thumb: "images/gallery/thumbnails/Celina John-9283.webp", alt: "John and Celina posing together beside the white arch." },
    { src: "images/gallery/Celina John-9338.webp", thumb: "images/gallery/thumbnails/Celina John-9338.webp", alt: "John and Celina sharing a joyful dance together." },
    { src: "images/gallery/Celina John-9341.webp", thumb: "images/gallery/thumbnails/Celina John-9341.webp", alt: "John lifting Celina as they celebrate together." },
    { src: "images/gallery/Celina John-9349.webp", thumb: "images/gallery/thumbnails/Celina John-9349.webp", alt: "John and Celina standing close together beneath the trees." },
    { src: "images/gallery/Celina John-9366.webp", thumb: "images/gallery/thumbnails/Celina John-9366.webp", alt: "John and Celina walking together in their wedding attire." },
    { src: "images/gallery/Celina John-9371.webp", thumb: "images/gallery/thumbnails/Celina John-9371.webp", alt: "John and Celina holding each other close outdoors." },
    { src: "images/gallery/Celina John-9378.webp", thumb: "images/gallery/thumbnails/Celina John-9378.webp", alt: "John and Celina sharing a quiet moment at sunset." },
    { src: "images/gallery/Celina John-9420.webp", thumb: "images/gallery/thumbnails/Celina John-9420.webp", alt: "Celina standing beside John along the stone garden wall." },
    { src: "images/gallery/Celina John-9427.webp", thumb: "images/gallery/thumbnails/Celina John-9427.webp", alt: "John and Celina posing together beside the stone wall." },
    { src: "images/gallery/Celina John-9437.webp", thumb: "images/gallery/thumbnails/Celina John-9437.webp", alt: "John and Celina walking together in the garden." },
    { src: "images/gallery/Celina John-9443.webp", thumb: "images/gallery/thumbnails/Celina John-9443.webp", alt: "John and Celina standing together in the evening light." },
    { src: "images/gallery/Celina John-9460.webp", thumb: "images/gallery/thumbnails/Celina John-9460.webp", alt: "A close portrait of John and Celina together beneath an arch." },
    { src: "images/gallery/Celina John-9497.webp", thumb: "images/gallery/thumbnails/Celina John-9497.webp", alt: "John and Celina sharing a quiet moment in the soft light." },
    { src: "images/gallery/Celina John-9498.webp", thumb: "images/gallery/thumbnails/Celina John-9498.webp", alt: "John and Celina sitting together beside the bright arch." },
    { src: "images/gallery/Celina John-9503.webp", thumb: "images/gallery/thumbnails/Celina John-9503.webp", alt: "John and Celina walking together beneath the garden trees." },
    { src: "images/gallery/Celina John-9521.webp", thumb: "images/gallery/thumbnails/Celina John-9521.webp", alt: "John and Celina sharing a wedding portrait outdoors." },
    { src: "images/gallery/Celina John-9530.webp", thumb: "images/gallery/thumbnails/Celina John-9530.webp", alt: "A close portrait of John and Celina embracing." },
    { src: "images/gallery/Celina John-9545.webp", thumb: "images/gallery/thumbnails/Celina John-9545.webp", alt: "John and Celina smiling together in a close portrait." },
    { src: "images/gallery/Celina John-9547.webp", thumb: "images/gallery/thumbnails/Celina John-9547.webp", alt: "John and Celina embracing beneath the trees." },
    { src: "images/gallery/Celina John-9596.webp", thumb: "images/gallery/thumbnails/Celina John-9596.webp", alt: "John and Celina standing together on the stone bridge." },
    { src: "images/gallery/Celina John-9607.webp", thumb: "images/gallery/thumbnails/Celina John-9607.webp", alt: "John and Celina sharing a portrait on the garden bridge." },
    { src: "images/gallery/Celina John-9613.webp", thumb: "images/gallery/thumbnails/Celina John-9613.webp", alt: "John and Celina together on the stone bridge." }
  ],
  heroSlideshowPhotos: [
    { src: "images/gallery/Celina John-9219.webp", thumb: "images/gallery/thumbnails/Celina John-9219.webp", alt: "A close wedding portrait of John and Celina smiling together.", position: "center 40%", caption: "" },
    { src: "images/gallery/Celina John-9176.webp", thumb: "images/gallery/thumbnails/Celina John-9176.webp", alt: "John and Celina sharing a tender moment together.", position: "center 45%", caption: "" },
    { src: "images/gallery/Celina John-9205.webp", thumb: "images/gallery/thumbnails/Celina John-9205.webp", alt: "John and Celina celebrating together in a joyful pose.", position: "center 40%", caption: "" },
    { src: "images/gallery/Celina John-9146.webp", thumb: "images/gallery/thumbnails/Celina John-9146.webp", alt: "John and Celina silhouetted together inside a circular arch.", position: "center 52%", caption: "" },
    { src: "images/gallery/Celina John-9272.webp", thumb: "images/gallery/thumbnails/Celina John-9272.webp", alt: "John and Celina framed together in the round archway.", position: "center 50%", caption: "" },
    { src: "images/gallery/Celina John-9283.webp", thumb: "images/gallery/thumbnails/Celina John-9283.webp", alt: "John and Celina posing together beside the white arch.", position: "center 45%", caption: "" },
    { src: "images/gallery/Celina John-9338.webp", thumb: "images/gallery/thumbnails/Celina John-9338.webp", alt: "John and Celina sharing a joyful dance together.", position: "center 42%", caption: "" },
    { src: "images/gallery/Celina John-9378.webp", thumb: "images/gallery/thumbnails/Celina John-9378.webp", alt: "John and Celina sharing a quiet moment at sunset.", position: "center 48%", caption: "" },
    { src: "images/gallery/Celina John-9460.webp", thumb: "images/gallery/thumbnails/Celina John-9460.webp", alt: "A close portrait of John and Celina together beneath an arch.", position: "center 42%", caption: "" },
    { src: "images/gallery/Celina John-9596.webp", thumb: "images/gallery/thumbnails/Celina John-9596.webp", alt: "John and Celina standing together on the stone bridge.", position: "center 45%", caption: "" }
  ],
  capturedMomentsPhotos: [
    { src: "images/gallery/Celina John-8432.webp", thumb: "images/gallery/thumbnails/Celina John-8432.webp", alt: "John and Celina walking together along a garden path.", position: "center 50%", caption: "" },
    { src: "images/gallery/Celina John-8456.webp", thumb: "images/gallery/thumbnails/Celina John-8456.webp", alt: "A close portrait of John and Celina smiling together outdoors.", position: "center 42%", caption: "" },
    { src: "images/gallery/Celina John-8524.webp", thumb: "images/gallery/thumbnails/Celina John-8524.webp", alt: "John and Celina laughing together in the garden.", position: "center 44%", caption: "" },
    { src: "images/gallery/Celina John-8621.webp", thumb: "images/gallery/thumbnails/Celina John-8621.webp", alt: "John and Celina embracing beneath leafy trees.", position: "center 45%", caption: "" },
    { src: "images/gallery/Celina John-8690.webp", thumb: "images/gallery/thumbnails/Celina John-8690.webp", alt: "John and Celina sharing a picnic outdoors.", position: "center 48%", caption: "" },
    { src: "images/gallery/Celina John-8785.webp", thumb: "images/gallery/thumbnails/Celina John-8785.webp", alt: "John and Celina relaxing together on a picnic blanket.", position: "center 45%", caption: "" },
    { src: "images/gallery/Celina John-8837.webp", thumb: "images/gallery/thumbnails/Celina John-8837.webp", alt: "John and Celina sharing a playful moment on their blanket.", position: "center 45%", caption: "" },
    { src: "images/gallery/Celina John-9085.webp", thumb: "images/gallery/thumbnails/Celina John-9085.webp", alt: "John and Celina sitting together on the basketball court.", position: "center 44%", caption: "" },
    { src: "images/gallery/Celina John-9188.webp", thumb: "images/gallery/thumbnails/Celina John-9188.webp", alt: "John and Celina walking side by side outdoors in their wedding attire.", position: "center 48%", caption: "" },
    { src: "images/gallery/Celina John-9349.webp", thumb: "images/gallery/thumbnails/Celina John-9349.webp", alt: "John and Celina standing close together beneath the trees.", position: "center 44%", caption: "" },
    { src: "images/gallery/Celina John-9503.webp", thumb: "images/gallery/thumbnails/Celina John-9503.webp", alt: "John and Celina walking together beneath the garden trees.", position: "center 48%", caption: "" },
    { src: "images/gallery/Celina John-9530.webp", thumb: "images/gallery/thumbnails/Celina John-9530.webp", alt: "A close portrait of John and Celina embracing.", position: "center 44%", caption: "" }
  ],

  // ---------- Music (optional, never autoplays) ----------
  // Only use a track you own, or a royalty-free / properly licensed track.
  // Put a file in the audio/ folder and point soundtrackUrl at it, or use a
  // direct .mp3/.ogg/.wav URL. Do NOT use a normal YouTube watch-page link.
  // Playback is attempted when the guest taps "Open Invitation".
  soundtrackUrl: "audio/saksi-ang-langit-violin.mp3",
  musicEnabled: true,
  musicLoop: true,
  musicVolume: 0.35,  // 0 to 1. Guest changes are kept for the visit.

  // ---------- Falling rose petals (decorative, on by default) ----------
  petalsEnabled: true,
  petalDensity: "medium",   // "low" | "medium" | "high"
  petalMinDuration: 7,      // seconds a petal takes to fall (min)
  petalMaxDuration: 14      // seconds a petal takes to fall (max)
};

/* ==========================================================
   TEMPLATE LOGIC (you normally don't edit below this line)
   ========================================================== */

(function () {
  "use strict";

  // Cover stays hidden unless this class is added, so the site is reachable
  // even if JavaScript fails to load.
  document.documentElement.classList.add("js-ready");

  const cfg = weddingConfig;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = motionPreference.matches;
  const has = (v) => typeof v === "string" && v.trim() !== "";
  const getPath = (o, p) => p.split(".").reduce((a, k) => (a == null ? a : a[k]), o);
  const make = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const enc = encodeURIComponent;

  const dateFmt = new Intl.DateTimeFormat("en-PH", { dateStyle: "long", timeZone: cfg.timezone });
  const longDateFmt = new Intl.DateTimeFormat("en-PH", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: cfg.timezone });

  /* ---------- Text bindings: <el data-cfg="ceremony.name"> ---------- */
  function applyText() {
    $$("[data-cfg]").forEach((el) => {
      const v = getPath(cfg, el.dataset.cfg);
      el.textContent = v == null ? "" : v;
    });
    const wd = new Date(cfg.weddingDateTime);
    if (!Number.isNaN(wd.getTime())) {
      const long = longDateFmt.format(wd);
      $$("[data-date-long]").forEach((el) => (el.textContent = long));
    }
    document.title = cfg.coupleNames + " | Wedding Invitation | " + cfg.displayDate;
  }

  /* ---------- RSVP (every button uses cfg.rsvp.url) ---------- */
  function setupRsvp() {
    $$("[data-rsvp]").forEach((a) => {
      a.href = cfg.rsvp.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", "Confirm your attendance (opens our Google Form in a new tab)");
    });

    const out = $("#rsvpDeadline");
    if (!has(cfg.rsvp.deadline)) return; // no real deadline yet: stay hidden
    const end = new Date(cfg.rsvp.deadline + "T23:59:59+08:00");
    if (Number.isNaN(end.getTime())) return;
    out.hidden = false;
    if (Date.now() > end.getTime()) {
      out.textContent = "The RSVP deadline has passed. Please contact the wedding organizer for assistance." +
        (has(cfg.rsvp.contact) ? " " + cfg.rsvp.contact : "");
    } else {
      out.textContent = "Kindly reply by " + dateFmt.format(end) + ".";
    }
  }

  /* ---------- Maps, directions, copy address ---------- */
  function mapLinks(venue) {
    const q = enc(venue.coords);
    return {
      view: has(venue.placeUrl) ? venue.placeUrl : "https://www.google.com/maps?q=" + q,
      dir: "https://www.google.com/maps/dir/?api=1&destination=" + q,
      embed: has(venue.mapEmbedUrl) ? venue.mapEmbedUrl
        : "https://www.google.com/maps?q=" + q + "&z=15&output=embed"
    };
  }

  function setupMaps() {
    if (cfg.ceremony.coords === cfg.reception.coords) {
      console.warn("Ceremony and reception map coordinates are identical. Check weddingConfig.");
    }
    ["ceremony", "reception"].forEach((key) => {
      const v = cfg[key];
      const links = mapLinks(v);
      const venueTitle = (key === "ceremony" ? v.name : (has(v.details) ? v.details : v.name));
      const kind = key === "ceremony" ? "wedding ceremony" : "wedding reception";
      $$('[data-map-embed="' + key + '"]').forEach((f) => {
        f.src = links.embed;
        f.title = "Map of " + venueTitle + ", the " + kind + " venue";
      });
      $$('[data-map-view="' + key + '"]').forEach((a) => {
        a.href = links.view;
        a.setAttribute("aria-label", "View the location of " + venueTitle + " on Google Maps");
      });
      $$('[data-map-dir="' + key + '"]').forEach((a) => {
        a.href = links.dir;
        a.setAttribute("aria-label", "Get directions to " + venueTitle + ", the " + kind + " venue");
      });
    });

    const t = $("#receptionTime");
    const r = cfg.reception;
    if (has(r.startTime)) {
      t.textContent = "Starts at " + r.startTime + (has(r.endTime) ? " · Ends at " + r.endTime : "");
    } else {
      t.textContent = "Reception schedule to follow.";
    }
  }

  /* ---------- Venue cards: plus code, landmark, name dedupe ---------- */
  function setupVenueMeta() {
    ["ceremony", "reception"].forEach((key) => {
      const v = cfg[key];
      const plusEl = $('[data-plus="' + key + '"]');
      const placeEl = $('[data-place="' + key + '"]');
      if (plusEl) {
        if (has(v.plusCode)) { plusEl.textContent = "Plus code " + v.plusCode; plusEl.hidden = false; }
        else plusEl.hidden = true;
      }
      if (placeEl) {
        if (has(v.landmark)) { placeEl.textContent = v.landmark; placeEl.hidden = false; }
        else placeEl.hidden = true;
      }

      // Optional photo at the top of the card. Nothing is rendered (no
      // placeholder box) when the config field is empty or the file is missing.
      const photoEl = $('[data-photo="' + key + '"]');
      if (photoEl && has(v.photo)) {
        photoEl.addEventListener("error", () => { photoEl.hidden = true; photoEl.removeAttribute("src"); });
        photoEl.alt = has(v.photoAlt) ? v.photoAlt : "Photo of " + (has(v.details) ? v.details : v.name);
        photoEl.src = v.photo;
      }
    });

    // Reception subtitle: drop the leading venue name so it never repeats.
    const sub = $("#receptionSub");
    if (sub) {
      const r = cfg.reception;
      let text = r.details || "";
      if (text.indexOf(r.name) === 0) text = text.slice(r.name.length).replace(/^[\s,·\-–—]+/, "");
      if (has(text)) sub.textContent = text;
      else sub.hidden = true;
    }
  }

  function setupVenue() {
    setupVenueMeta();
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
      const ta = make("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy") ? resolve() : reject(); } catch (e) { reject(e); }
      ta.remove();
    });
  }

  function flash(btn, statusEl, done, msg) {
    const old = btn ? btn.textContent : "";
    if (statusEl) statusEl.textContent = msg;
    if (btn) { btn.textContent = done; btn.classList.add("copied"); }
    setTimeout(() => {
      if (btn) { btn.textContent = old; btn.classList.remove("copied"); }
      if (statusEl) statusEl.textContent = "";
    }, 2200);
  }

  function setupCopy() {
    const status = $("#copyStatus");
    $$("[data-copy]").forEach((btn) => {
      const v = cfg[btn.dataset.copy];
      if (v && has(v.name)) btn.setAttribute("aria-label", "Copy the venue details of " + v.name);
      btn.addEventListener("click", () => {
        // Venue name, address, plus code, and the official Maps link when set.
        const lines = [btn.dataset.copy === "ceremony" ? v.name : (has(v.details) ? v.details : v.name), v.address];
        if (has(v.plusCode)) lines.push("Plus code " + v.plusCode);
        if (has(v.placeUrl)) lines.push(v.placeUrl);
        copyToClipboard(lines.join("\n"))
          .then(() => flash(btn, status, "Copied!", "Venue details copied to your clipboard."))
          .catch(() => flash(btn, status, "Press Ctrl+C", "Copy failed. Please select the address text manually."));
      });
    });
  }

  /* ---------- After the wedding (24h past the ceremony start) ---------- */
  function isAfterCelebration() {
    const target = new Date(cfg.weddingDateTime).getTime();
    return !Number.isNaN(target) && Date.now() > target + 86400000; // 86400000ms = 24h
  }
  function hideRsvpButtons() {
    $$("[data-rsvp]").forEach((el) => { el.hidden = true; });
    const note = $(".rsvp-note"); // it only describes the RSVP button
    if (note) note.hidden = true;
  }
  function setupAfterWedding() {
    if (isAfterCelebration()) hideRsvpButtons();
  }

  /* ---------- Countdown (Asia/Manila instant, never negative) ---------- */
  function setupCountdown() {
    const target = new Date(cfg.weddingDateTime).getTime();
    if (Number.isNaN(target)) return;
    const grid = $("#countdownGrid");
    const done = $("#countdownDone");
    const el = { d: $("#cd-days"), h: $("#cd-hours"), m: $("#cd-minutes"), s: $("#cd-seconds") };
    const pad = (n) => String(n).padStart(2, "0");
    let timer;

    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) { // arrived or has passed
        grid.hidden = true;
        if (isAfterCelebration()) { // the day itself keeps its own line
          done.textContent = "Thank you for celebrating with us";
          hideRsvpButtons();
        }
        done.hidden = false;
        clearInterval(timer);
        return;
      }
      const s = Math.floor(diff / 1000);
      el.d.textContent = Math.floor(s / 86400);
      el.h.textContent = pad(Math.floor((s % 86400) / 3600));
      el.m.textContent = pad(Math.floor((s % 3600) / 60));
      el.s.textContent = pad(s % 60);
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  /* ---------- Love story ---------- */
  function setupStory() {
    const list = $("#timeline");
    // A milestone shows only when it actually has content; empty ones never
    // render (no "coming soon" cards). The section hides when none remain.
    const items = cfg.story.filter((m) => has(m.text) || has(m.image));
    if (!items.length) { $("#story").hidden = true; return; }

    items.forEach((m) => {
      const li = make("li", "t-item reveal");
      const card = make("article", "t-card");
      if (has(m.image)) {
        const img = make("img", "t-photo");
        img.src = m.image;
        img.alt = has(m.title) ? m.title + " photo" : "Love story photo";
        img.loading = "lazy";
        img.addEventListener("error", () => img.remove()); // optional photo: just skip it
        card.appendChild(img);
      }
      const body = make("div", "t-body");
      if (has(m.date)) body.appendChild(make("p", "t-date", m.date));
      if (has(m.title)) body.appendChild(make("h3", "", m.title));
      if (has(m.text)) body.appendChild(make("p", "", m.text));
      card.appendChild(body);
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  /* ---------- Schedule ---------- */
  // "5:00 PM" -> 17*60, so the day can be listed in time order.
  function timeToMinutes(t) {
    const m = /^(\d{1,2}):(\d{2})\s*([AaPp])\.?\s*M\.?$/.exec(String(t).trim());
    if (!m) return null;
    let h = Number(m[1]) % 12;
    if (/p/i.test(m[3])) h += 12;
    return h * 60 + Number(m[2]);
  }

  function setupSchedule() {
    const list = $("#scheduleList");
    const r = cfg.reception;
    const entries = cfg.schedule
      .filter((s) => has(s.time))
      .map((s) => ({ time: s.time, title: s.title, detail: s.detail }));

    // The reception adds itself as soon as reception.startTime is confirmed.
    if (has(r.startTime)) {
      entries.push({
        time: r.startTime,
        title: has(r.name) ? "Reception at " + r.name : "Reception",
        detail: has(r.endTime) ? "Ends at " + r.endTime : ""
      });
    }

    // List the day chronologically (2:00 PM before 5:00 PM).
    entries.sort((a, b) => {
      const A = timeToMinutes(a.time), B = timeToMinutes(b.time);
      if (A == null && B == null) return 0;
      if (A == null) return 1;
      if (B == null) return -1;
      return A - B;
    });

    entries.forEach((s) => {
      const li = make("li");
      li.appendChild(make("span", "sch-time", s.time));
      const box = make("div");
      box.appendChild(make("span", "sch-title", s.title));
      if (has(s.detail)) box.appendChild(make("span", "sch-detail", s.detail));
      li.appendChild(box);
      list.appendChild(li);
    });

    const note = $("#scheduleNote");
    if (has(r.startTime)) note.hidden = true;
    else note.textContent = "Reception schedule to follow.";

    // ---- Add to Google Calendar ----
    const start = new Date(cfg.weddingDateTime);
    if (Number.isNaN(start.getTime())) { $(".cal-actions").hidden = true; return; }
    const end = new Date(start.getTime() + (Number(cfg.calendarDurationMinutes) || 60) * 60000);
    const stamp = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const title = "Wedding of " + cfg.coupleNames;
    const where = cfg.ceremony.name + ", " + cfg.ceremony.address;
    const recvWhere = (has(r.details) ? r.details : r.name) + ", " + r.address;
    const recvWhen = has(r.startTime) ? r.startTime + (has(r.endTime) ? " to " + r.endTime : "") : "";
    const desc = "Ceremony: " + cfg.ceremony.name + " at " + cfg.ceremony.time + ", " + cfg.ceremony.address + "." +
      (has(r.startTime)
        ? "\nReception: " + recvWhere + ", " + recvWhen + "."
        : "\nReception: " + recvWhere + ". Reception schedule to follow.");
    // Google Calendar's link creates one ceremony event; its description also
    // includes the reception details for guests.
    $("#gcalBtn").href = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + enc(title) + "&dates=" + stamp(start) + "/" + stamp(end) +
      "&details=" + enc(desc) + "&location=" + enc(where) + "&ctz=" + enc(cfg.timezone);
  }

  /* ---------- Dress code, note, gifts ---------- */
  function setupDressCode() {
    const ul = $("#attireSwatches");
    const d = cfg.dressCode || {};
    if (!ul) return;
    const colors = Array.isArray(d.colors) ? d.colors.filter((c) => has(c.name) && has(c.color)) : [];
    colors.forEach((c) => {
      const li = make("li");
      const sw = make("span", "attire-swatch");
      sw.style.setProperty("--c", c.color);
      sw.setAttribute("aria-hidden", "true"); // the visible label carries the name
      li.appendChild(sw);
      li.appendChild(make("span", "attire-swatch-label", c.name));
      ul.appendChild(li);
    });
  }

  function setupNote() {
    const box = $("#noteBody");
    if (!has(cfg.noteText)) {
      box.appendChild(make("p", "placeholder-text", "A personal note from John & Celina will be shared here soon."));
      return;
    }
    cfg.noteText.split(/\n\s*\n/).forEach((p) => box.appendChild(make("p", "", p.trim())));
  }

  function setupGifts() {
    if (!has(cfg.giftMessage)) return; // section stays hidden
    $("#giftBody").textContent = cfg.giftMessage;
    $("#gifts").hidden = false;
  }

  /* ---------- FAQ (answers built only from confirmed config) ---------- */
  function dressFaqAnswer(d) {
    if (!d) return "Dress code details to follow.";
    const parts = [];
    if (d.gentlemen && has(d.gentlemen.attire)) parts.push("Gentlemen (principal sponsors): " + d.gentlemen.attire + ".");
    if (d.ladies && has(d.ladies.attire)) parts.push("Ladies (principal sponsors): " + d.ladies.attire + ".");
    if (has(d.guestDescription)) parts.push(d.guestDescription);
    return parts.length ? parts.join(" ") : "Dress code details to follow.";
  }

  function setupFaq() {
    const r = cfg.reception;
    const c = cfg.ceremony;
    const d = cfg.dressCode;
    const items = [
      { q: "How do I RSVP?", a: "Tap “Confirm Your Attendance” anywhere on this page. It opens our Google Form in a new tab, where you can share your response." },
      { q: "Where and when is the ceremony?", a: c.name + ", " + c.address + ". " + cfg.displayDate + " at " + c.time + "." },
      { q: "Where is the reception?", a: r.details + ", " + r.address + ". " +
          (has(r.startTime) ? "It starts at " + r.startTime + "." : "Reception schedule to follow.") },
      { q: "Is there a dress code?", a: dressFaqAnswer(d) },
      has(cfg.rsvp.deadline) && { q: "When is the RSVP deadline?", a: dateFmt.format(new Date(cfg.rsvp.deadline + "T12:00:00+08:00")) + "." },
      has(cfg.parkingInfo) && { q: "Is there parking?", a: cfg.parkingInfo },
      has(cfg.giftMessage) && { q: "Do you have a gift preference?", a: cfg.giftMessage },
      has(cfg.rsvp.contact) && { q: "Who can I contact with questions?", a: cfg.rsvp.contact }
    ].filter(Boolean).concat((cfg.extraFaq || []).filter((f) => has(f.q) && has(f.a)));

    const wrap = $("#faqList");
    items.forEach((f) => {
      const det = make("details");
      det.appendChild(make("summary", "", f.q));
      det.appendChild(make("p", "", f.a));
      wrap.appendChild(det);
    });
  }

  /* ---------- Hero photo slideshow ---------- */
  function setupHero() {
    const stage = $("#heroSlideshow");
    const images = [$("#heroImg"), $("#heroImgNext")];
    const photos = cfg.heroSlideshowPhotos;
    if (!stage || !images[0] || !images[1]) return;

    const fallback = () => {
      const box = make("div", "photo-fallback", cfg.initials);
      box.setAttribute("role", "img");
      box.setAttribute("aria-label", cfg.coupleNames + " monogram (photo coming soon)");
      stage.replaceWith(box);
    };
    if (!photos || !photos.length) {
      if (!has(cfg.heroImage)) return fallback();
      images[0].alt = cfg.coupleNames + " wedding portrait";
      images[0].src = cfg.heroImage;
      return;
    }

    let activeIndex = 0;
    let activeLayer = 0;
    let transitioning = false;
    let timer = 0;
    let transitionTimer = 0;
    let failedPhotos = 0;
    let destroyed = false;

    function clearTimer() {
      window.clearTimeout(timer);
      timer = 0;
    }

    function preloadNext(index) {
      const photo = photos[(index + 1) % photos.length];
      if (!photo) return;
      const preload = new Image();
      preload.decoding = "async";
      preload.fetchPriority = "low";
      preload.src = photo.src;
    }

    function scheduleNext() {
      clearTimer();
      if (destroyed || document.hidden || reducedMotion || transitioning || photos.length < 2) return;
      timer = window.setTimeout(() => changePhoto(1), 4500);
    }

    function changePhoto(offset) {
      if (destroyed || transitioning || photos.length < 2) return;
      clearTimer();
      const nextIndex = (activeIndex + offset + photos.length) % photos.length;
      const incomingLayer = 1 - activeLayer;
      const incoming = images[incomingLayer];
      const outgoing = images[activeLayer];
      const photo = photos[nextIndex];
      transitioning = true;
      incoming.classList.remove("is-active");
      incoming.alt = photo.alt;
      incoming.style.objectPosition = photo.position || "center";
      incoming.setAttribute("aria-hidden", "true");
      incoming.fetchPriority = "low";
      incoming.decoding = "async";

      function imageReady() {
        incoming.removeEventListener("load", imageReady);
        incoming.onerror = null;
        incoming.classList.add("is-preparing");
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (destroyed) return;
          incoming.classList.remove("is-preparing");
          incoming.classList.add("is-active");
          outgoing.classList.remove("is-active");

          let complete = false;
          function finish(event) {
            if (complete || (event && event.propertyName !== "opacity")) return;
            complete = true;
            window.clearTimeout(transitionTimer);
            incoming.removeEventListener("transitionend", finish);
            outgoing.alt = "";
            outgoing.removeAttribute("src");
            outgoing.setAttribute("aria-hidden", "true");
            incoming.removeAttribute("aria-hidden");
            activeLayer = incomingLayer;
            activeIndex = nextIndex;
            transitioning = false;
            failedPhotos = 0;
            preloadNext(activeIndex);
            scheduleNext();
          }

          if (reducedMotion) {
            finish();
          } else {
            incoming.addEventListener("transitionend", finish);
            transitionTimer = window.setTimeout(() => finish(), 1200);
          }
        }));
      }

      incoming.addEventListener("load", imageReady);
      incoming.onerror = () => {
        incoming.removeEventListener("load", imageReady);
        incoming.onerror = null;
        incoming.removeAttribute("src");
        transitioning = false;
        failedPhotos++;
        console.error("Hero slideshow photo failed to load:", photo.src);
        if (failedPhotos >= photos.length) {
          destroyed = true;
          clearTimer();
          fallback();
          return;
        }
        changePhoto(offset < 0 ? -1 : 1);
      };
      incoming.src = photo.src;
      if (incoming.complete && incoming.naturalWidth) imageReady();
    }

    const first = photos[0];
    images[0].alt = first.alt;
    images[0].style.objectPosition = first.position || "center";
    images[0].onload = () => {
      images[0].onload = null;
      preloadNext(activeIndex);
      scheduleNext();
    };
    images[0].onerror = () => {
      images[0].onerror = null;
      console.error("Hero slideshow photo failed to load:", first.src);
      if (photos.length > 1) {
        failedPhotos++;
        changePhoto(1);
      } else {
        fallback();
      }
    };
    images[0].src = first.src;
    if (images[0].complete && images[0].naturalWidth) scheduleNext();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearTimer();
      } else {
        scheduleNext();
      }
    });
    const handleMotionChange = (event) => {
      if (event.matches) clearTimer();
      else scheduleNext();
    };
    if (motionPreference.addEventListener) {
      motionPreference.addEventListener("change", handleMotionChange);
    } else {
      motionPreference.addListener(handleMotionChange);
    }
  }

  function setupGallery() {
    const grid = $("#galleryGrid");
    const empty = $("#galleryEmpty");
    const status = $("#galleryStatus");
    const heroPhotos = cfg.heroSlideshowPhotos || [];
    const selectedPhotos = cfg.capturedMomentsPhotos || [];
    const keyFor = (path) => {
      try {
        const pathname = decodeURIComponent(new URL(path, document.baseURI).pathname).replace(/\\/g, "/").toLowerCase();
        const filename = pathname.slice(pathname.lastIndexOf("/") + 1).replace(/\.[^.]+$/, "");
        return [pathname, filename];
      } catch (error) {
        console.error("Invalid gallery image path:", path, error);
        return ["", ""];
      }
    };
    const keysFor = (photo) => [photo.src, photo.thumb].filter(Boolean).flatMap(keyFor).filter(Boolean);
    const heroKeys = new Set(heroPhotos.flatMap(keysFor));
    const usedGalleryKeys = new Set();
    const photos = [];
    let excluded = 0;

    selectedPhotos.forEach((photo) => {
      if (photos.length >= 12) return;
      const keys = keysFor(photo);
      if (!photo.src || !photo.alt || !keys.length ||
          keys.some((key) => heroKeys.has(key) || usedGalleryKeys.has(key))) {
        excluded++;
        console.error("Excluded duplicate or invalid Captured Moments photo:", photo.src);
        return;
      }
      keys.forEach((key) => usedGalleryKeys.add(key));
      photos.push(photo);
    });

    if (selectedPhotos.length > 12) {
      console.warn("Captured Moments is limited to 12 photos; extra entries were not rendered.");
    }
    status.textContent = excluded
      ? excluded + " duplicate or invalid photo(s) were excluded to keep the gallery unique."
      : "";
    if (!photos.length) { empty.hidden = false; return; }
    empty.hidden = true;

    photos.forEach((photo, index) => {
      const button = make("button", "g-item reveal");
      button.type = "button";
      button.setAttribute("aria-label", "View gallery photo " + (index + 1) + " of " + photos.length + ": " + photo.alt);
      const image = make("img");
      image.alt = photo.alt;
      image.width = 1200;
      image.height = 900;
      image.loading = "lazy";
      image.decoding = "async";
      image.style.objectPosition = photo.position || "center";
      image.addEventListener("error", () => {
        if (photo.thumb && image.src !== new URL(photo.src, document.baseURI).href) {
          image.src = photo.src;
          return;
        }
        button.disabled = true;
        button.classList.add("image-unavailable");
        image.alt = photo.alt + " (image unavailable)";
        status.textContent = "A selected gallery photo could not be loaded.";
        console.error("Captured Moments photo failed to load:", photo.src);
      });
      image.src = photo.thumb || photo.src;
      button.appendChild(image);
      button.addEventListener("click", () => openGalleryLightbox(index, button));
      grid.appendChild(button);
    });
    grid.setAttribute("aria-label", "Captured Moments, " + photos.length + " photos");

    let lightboxIndex = 0;
    let lastFocusedButton = null;
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lbImg");

    function showLightboxPhoto(index) {
      lightboxIndex = (index + photos.length) % photos.length;
      const photo = photos[lightboxIndex];
      lightboxImage.alt = photo.alt;
      lightboxImage.style.objectPosition = photo.position || "center";
      $("#lbCounter").textContent = (lightboxIndex + 1) + " of " + photos.length;
      lightboxImage.onerror = () => {
        status.textContent = "The selected full-size gallery photo could not be loaded.";
        console.error("Captured Moments full-size photo failed to load:", photo.src);
      };
      lightboxImage.src = photo.src;
    }

    function openGalleryLightbox(index, button) {
      lastFocusedButton = button;
      showLightboxPhoto(index);
      lightbox.hidden = false;
      $("#main").inert = true;
      document.body.classList.add("locked");
      $("#lbClose").focus();
    }

    function closeGalleryLightbox() {
      lightbox.hidden = true;
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
      document.body.classList.remove("locked");
      $("#main").inert = !$("#cover").hidden;
      if (lastFocusedButton) lastFocusedButton.focus();
    }

    $("#lbClose").addEventListener("click", closeGalleryLightbox);
    $("#lbPrev").addEventListener("click", () => showLightboxPhoto(lightboxIndex - 1));
    $("#lbNext").addEventListener("click", () => showLightboxPhoto(lightboxIndex + 1));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeGalleryLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (lightbox.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeGalleryLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showLightboxPhoto(lightboxIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showLightboxPhoto(lightboxIndex + 1);
      } else if (event.key === "Tab") {
        const controls = [$("#lbClose"), $("#lbPrev"), $("#lbNext")];
        const current = controls.indexOf(document.activeElement);
        if (current === -1) {
          event.preventDefault();
          controls[0].focus();
        } else if (event.shiftKey && current === 0) {
          event.preventDefault();
          controls[controls.length - 1].focus();
        } else if (!event.shiftKey && current === controls.length - 1) {
          event.preventDefault();
          controls[0].focus();
        }
      }
    });
  }

  /* ---------- Closing: tap the hashtag to copy it ---------- */
  function setupHashtag() {
    const status = $("#hashtagStatus");
    $$("[data-copy-hashtag]").forEach((btn) => {
      if (!has(cfg.hashtag)) return;
      btn.setAttribute("aria-label", "Copy " + cfg.hashtag + " to your clipboard");
      btn.addEventListener("click", () => {
        copyToClipboard(cfg.hashtag)
          .then(() => {
            btn.classList.add("is-copied");
            if (status) status.textContent = "Hashtag copied to your clipboard.";
            setTimeout(() => { btn.classList.remove("is-copied"); if (status) status.textContent = ""; }, 2200);
          })
          .catch(() => { if (status) status.textContent = "Copy failed. Press and hold to select the hashtag."; });
      });
    });
  }

  /* ---------- Music (optional; never autoplays; guest stays in control) ---------- */
  let showMusicPlayer = function () {};
  let musicOnOpen = function () {};

  function setupMusic() {
    const player = $("#musicPlayer");
    if (cfg.musicEnabled === false || !has(cfg.soundtrackUrl)) return; // stays hidden

    const audio = $("#weddingAudio");
    const toggle = $("#musicToggle");
    const muteBtn = $("#musicMute");
    const moreBtn = $("#musicMore");
    const panel = $("#musicPanel");
    const vol = $("#musicVol");
    const status = $("#musicStatus");

    audio.src = cfg.soundtrackUrl;
    audio.loop = cfg.musicLoop !== false;
    const v = typeof cfg.musicVolume === "number" ? Math.min(1, Math.max(0, cfg.musicVolume)) : 0.35;

    // iPhone/iOS Safari ignores volume writes (the getter stays at 1). Detect
    // it: write 0.5 and read it back. If the value didn't stick, the slider
    // would do nothing, so it is hidden and the mute button stays in charge.
    let canSetVolume = true;
    try {
      audio.volume = 0.5;
      canSetVolume = Math.abs(audio.volume - 0.5) < 0.01;
    } catch (e) { canSetVolume = false; }
    if (canSetVolume) {
      audio.volume = v;
      vol.value = String(Math.round(v * 100));
    } else {
      vol.hidden = true;
    }

    let broken = false;
    let pausedByGuest = false;

    function sync() {
      const playing = !broken && !audio.paused && !audio.ended;
      toggle.setAttribute("aria-pressed", String(playing));
      toggle.setAttribute("aria-label", playing ? "Pause wedding music" : "Play wedding music");
      player.classList.toggle("is-playing", playing);
      muteBtn.setAttribute("aria-pressed", String(audio.muted));
      muteBtn.setAttribute("aria-label", audio.muted ? "Unmute music" : "Mute music");
      status.textContent = broken ? "Music unavailable"
        : playing ? "Playing"
        : pausedByGuest ? "Paused"
        : "Tap play to start";
    }

    function tryPlay() {
      if (broken) return;
      const p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(() => { pausedByGuest = false; sync(); })
         .catch(() => sync()); // blocked or failed: honest status, guest can tap play
      } else {
        sync();
      }
    }

    showMusicPlayer = function () { player.hidden = false; sync(); };
    musicOnOpen = tryPlay;

    toggle.addEventListener("click", () => {
      if (broken) return;
      if (audio.paused || audio.ended) tryPlay();
      else { audio.pause(); pausedByGuest = true; sync(); }
    });

    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted; // never auto-unmutes later
      sync();
    });

    moreBtn.addEventListener("click", () => {
      const open = panel.hidden;
      panel.hidden = !open;
      moreBtn.setAttribute("aria-expanded", String(open));
    });

    vol.addEventListener("input", () => {
      if (!canSetVolume) return; // iOS: volume is fixed at the system level
      audio.volume = Number(vol.value) / 100;
      sync();
    });

    ["play", "pause", "ended", "volumechange"].forEach((ev) => audio.addEventListener(ev, sync));

    audio.addEventListener("error", () => {
      broken = true;
      toggle.disabled = true;
      muteBtn.disabled = true;
      vol.disabled = true;
      player.classList.remove("is-playing");
      status.textContent = "Music unavailable";
    });

    sync();
  }

  /* ---------- Decorative falling rose petals ---------- */
  const PETAL_DENSITY = {
    low:    { max: 9,  interval: 1100 },
    medium: { max: 18, interval: 650 },
    high:   { max: 32, interval: 360 }
  };
  const PETAL_COLORS = ["rgb(244, 182, 194)", "rgb(217, 140, 154)", "rgb(248, 220, 226)", "rgb(183, 110, 121)"];

  function setupPetals() {
    if (cfg.petalsEnabled === false || reducedMotion) return; // reduced motion: no falling petals
    const box = $("#petal-container");
    if (!box) return;

    const profile = PETAL_DENSITY[cfg.petalDensity] || PETAL_DENSITY.medium;
    const vw = window.innerWidth || document.documentElement.clientWidth || 0;
    const scale = vw && vw < 640 ? 0.55 : vw < 1024 ? 0.8 : 1; // lighter on small screens
    const maxPetals = Math.max(4, Math.round(profile.max * scale));

    const rand = (a, b) => a + Math.random() * (b - a);
    let minDur = Number(cfg.petalMinDuration);
    let maxDur = Number(cfg.petalMaxDuration);
    if (!isFinite(minDur) || minDur < 1) minDur = 7;   // validate config
    if (!isFinite(maxDur) || maxDur < 1) maxDur = 14;
    if (maxDur < minDur) { const t = minDur; minDur = maxDur; maxDur = t; }

    function spawn(atTop) {
      if (box.childElementCount >= maxPetals) return; // hard cap on live petals

      const dur = rand(minDur, maxDur);
      const size = rand(11, 26);
      const petal = make("span", "petal");
      petal.style.left = rand(0, 100).toFixed(2) + "%";
      petal.style.setProperty("--dur", dur.toFixed(2) + "s");
      // First batch uses a negative delay so petals start scattered mid-air.
      petal.style.setProperty("--delay", atTop ? "0s" : (-Math.random() * dur).toFixed(2) + "s");
      petal.style.setProperty("--drift", rand(18, 78).toFixed(0) + "px");
      petal.style.setProperty("--sway", rand(2.6, 5.2).toFixed(2) + "s");
      petal.style.setProperty("--size", size.toFixed(1) + "px");
      petal.style.setProperty("--opacity", rand(0.24, 0.46).toFixed(2));
      petal.style.setProperty("--color", PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0]);

      const inner = make("span", "petal-inner");
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "petal-shape");
      svg.setAttribute("viewBox", "0 0 24 24");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", "#petal");
      svg.appendChild(use);
      inner.appendChild(svg);
      petal.appendChild(inner);

      // Remove each petal once it has fallen out of view.
      petal.addEventListener("animationend", (e) => {
        if (e.animationName === "petal-fall") petal.remove();
      });
      box.appendChild(petal);
    }

    for (let i = 0; i < maxPetals; i++) spawn(false); // scatter initial batch
    let timer = setInterval(() => spawn(true), profile.interval);

    // Save CPU while the tab is hidden; resume when it is visible again.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { clearInterval(timer); timer = null; }
      else if (!timer) { timer = setInterval(() => spawn(true), profile.interval); }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    const items = $$(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("visible"));
      return;
    }
    document.body.classList.add("js-ready");
    const heroItems = new Set($$(".hero .reveal"));
    heroItems.forEach((item) => item.classList.add("visible"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => { if (!heroItems.has(item)) io.observe(item); });
  }

  /* ---------- Opening invitation ---------- */
  const SEEN_KEY = "jc-invitation-opened";
  const cover = $("#cover");
  const main = $("#main");
  const skipLink = $(".skip-link");
  const envelopeConfig = cfg.envelope || {};
  const envelopeButton = $("#envelope");
  const sealButton = $("#sealBtn");
  const card = $("#invitationCard");
  const cardHint = $("#cardHint");
  const cardClip = $("#envCardClip");
  const envStage = $("#envStage");
  const openButton = $("#openBtn");
  const skipButton = $("#skipBtn");
  const enterButton = $("#enterBtn");
  const animationTimers = [];
  let isOpening = false;
  let isRevealed = false;
  const durationScale = Number.isFinite(Number(envelopeConfig.durationScale))
    ? Math.max(.25, Number(envelopeConfig.durationScale)) : 1;
  const time = (milliseconds) => Math.round(milliseconds * durationScale);

  function remember() { try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) { /* storage blocked: fine */ } }
  function alreadySeen() { try { return sessionStorage.getItem(SEEN_KEY) === "1"; } catch (e) { return false; } }

  function prepareEnvelope() {
    cover.style.setProperty("--envelope-color", envelopeConfig.envelopeColor || "var(--burgundy)");
    cover.style.setProperty("--seal-color", envelopeConfig.sealColor || "var(--gold)");
    cover.style.setProperty("--cover-background", envelopeConfig.backgroundColor || "var(--ivory)");
    if (has(envelopeConfig.envelopeWidth)) cover.style.setProperty("--envelope-width", envelopeConfig.envelopeWidth);
    if (has(envelopeConfig.cardWidth)) cover.style.setProperty("--card-width", envelopeConfig.cardWidth);
    cover.style.setProperty("--seal-duration", time(350) + "ms");
    cover.style.setProperty("--flap-duration", time(900) + "ms");
    cover.style.setProperty("--card-move-duration", time(1100) + "ms");
    cover.style.setProperty("--envelope-fade-duration", time(1000) + "ms");
    cover.style.setProperty("--line-duration", time(320) + "ms");
    cover.style.setProperty("--line-stagger", time(90) + "ms");
    cover.style.setProperty("--enter-duration", time(350) + "ms");
    cover.style.setProperty("--cover-fade-duration", "500ms");
    const initials = envelopeConfig.sealInitials || cfg.initials;
    sealButton.textContent = initials;
    sealButton.setAttribute("aria-label", "Open the wedding invitation sealed with " + initials);

    const lines = Array.isArray(envelopeConfig.cardLines) ? envelopeConfig.cardLines : [];
    lines.forEach((text, index) => {
      const line = make("p", "card-line card-line-" + (index + 1), text);
      if (index === 2) line.classList.add("script");
      $("#cardLines").appendChild(line);
    });

    const decorations = Array.isArray(envelopeConfig.decorationImages) ? envelopeConfig.decorationImages : [];
    $$(".card-corner").forEach((corner, index) => {
      const path = decorations[index];
      if (!has(path)) return;
      corner.style.backgroundImage = 'url("' + path.replace(/["\\\n\r]/g, "") + '")';
      corner.style.backgroundSize = "contain";
      corner.style.backgroundRepeat = "no-repeat";
      const sprig = $("use", corner);
      if (sprig) sprig.setAttribute("opacity", "0");
    });

    if (envelopeConfig.skipEnabled === false) skipButton.hidden = true;
  }

  function detachCard() {
    const rect = card.getBoundingClientRect();
    const offsetX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const offsetY = rect.top + rect.height / 2 - window.innerHeight / 2;
    card.style.setProperty("--card-offset-x", offsetX + "px");
    card.style.setProperty("--card-offset-y", offsetY + "px");
    cardClip.setAttribute("aria-hidden", "true");
    cover.appendChild(card);
    card.classList.add("is-detached");
    card.setAttribute("aria-hidden", "false");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
  }

  function showEnterButton() {
    if (isRevealed) return;
    cover.classList.remove("is-animating");
    cardHint.removeAttribute("aria-hidden");
    cardHint.classList.add("is-visible");
    enterButton.hidden = false;
    enterButton.style.top = "50%";
    requestAnimationFrame(() => {
      const cardRect = card.getBoundingClientRect();
      const hintHeight = cardHint.getBoundingClientRect().height || 18;
      const buttonHeight = enterButton.getBoundingClientRect().height || 54;
      const hintTop = Math.max(6, Math.min(
        cardRect.bottom + 5,
        window.innerHeight - hintHeight - buttonHeight - 24
      ));
      cardHint.style.top = hintTop + "px";
      const enterTop = Math.min(
        hintTop + hintHeight + 6,
        window.innerHeight - buttonHeight - 12
      );
      enterButton.style.top = Math.max(12, enterTop) + "px";
      enterButton.classList.add("is-visible");
      enterButton.focus({ preventScroll: true });
    });
  }

  function makeCardReadable() {
    card.classList.add("is-readable");
    animationTimers.push(setTimeout(showEnterButton, time(800)));
  }

  function revealMain(instant) {
    if (isRevealed) return;
    isRevealed = true;
    animationTimers.forEach(clearTimeout);
    card.setAttribute("aria-hidden", "true");
    card.setAttribute("tabindex", "-1");
    cover.setAttribute("aria-hidden", "true");
    cover.inert = true;
    remember();
    main.classList.remove("is-covered");
    main.inert = false;
    if (skipLink) skipLink.inert = false; // the skip link works again
    document.body.classList.remove("locked");
    window.scrollTo(0, 0);
    showMusicPlayer();
    if (instant) {
      cover.hidden = true;
    } else {
      cover.classList.add("fade-out");
      animationTimers.push(setTimeout(() => { cover.hidden = true; }, 500));
    }
    main.focus({ preventScroll: true });
  }

  function openInvitation() {
    if (isOpening || isRevealed) return;
    isOpening = true;
    musicOnOpen();
    cover.classList.add("is-opening");
    cover.classList.add("is-animating");
    envelopeButton.disabled = true;
    sealButton.disabled = true;
    openButton.disabled = true;

    if (reducedMotion) {
      cover.classList.add("is-settling");
      card.classList.add("is-motion-reveal");
      detachCard();
      requestAnimationFrame(() => card.classList.add("is-settled", "is-readable"));
      animationTimers.push(setTimeout(() => {
        showEnterButton();
      }, 400));
      return;
    }

    sealButton.classList.add("pressed");
    animationTimers.push(setTimeout(() => envStage.classList.add("flap-open"), time(220)));
    animationTimers.push(setTimeout(() => envStage.classList.add("flap-behind"), time(820)));
    animationTimers.push(setTimeout(() => envStage.classList.add("card-rising"), time(900)));
    animationTimers.push(setTimeout(() => {
      cover.classList.add("is-settling");
      detachCard();
      requestAnimationFrame(() => card.classList.add("is-settled"));
    }, time(2000)));
    animationTimers.push(setTimeout(makeCardReadable, time(2600)));
  }

  function skipIntro() {
    if (isRevealed) return;
    isOpening = true;
    musicOnOpen();
    revealMain(false);
  }

  function setupCover() {
    prepareEnvelope();
    if (alreadySeen()) { // don't replay the intro on the same visit
      cover.hidden = true;
      document.body.classList.remove("locked");
      showMusicPlayer();
      return;
    }
    main.classList.add("is-covered");
    cover.hidden = false;
    cover.removeAttribute("aria-hidden");
    cover.inert = false;
    document.body.classList.add("locked");
    main.inert = true; // keep keyboard focus on the cover until it's gone
    if (skipLink) skipLink.inert = true; // its target (#main) is unreachable anyway
    openButton.addEventListener("click", openInvitation);
    envelopeButton.addEventListener("click", openInvitation);
    sealButton.addEventListener("click", openInvitation);
    skipButton.addEventListener("click", skipIntro);
    enterButton.addEventListener("click", () => revealMain(false));
    card.addEventListener("click", () => {
      if (card.classList.contains("is-settled")) revealMain(false);
    });
    card.addEventListener("keydown", (event) => {
      if (!card.classList.contains("is-settled")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        revealMain(false);
      }
    });
  }

  /* ---------- Init (each step isolated so one failure can't block the site) ---------- */
  const steps = [applyText, setupHero, setupRsvp, setupMaps, setupVenue, setupCopy, setupCountdown,
    setupAfterWedding, setupStory, setupSchedule, setupDressCode, setupNote, setupGifts, setupFaq,
    setupGallery, setupHashtag, setupMusic, setupPetals];

  steps.forEach((fn) => { try { fn(); } catch (err) { console.error(fn.name + " failed:", err); } });
  try { setupCover(); } catch (err) {
    console.error("Cover failed, showing site:", err);
    cover.hidden = true;
    main.classList.remove("is-covered");
    main.inert = false;
    if (skipLink) skipLink.inert = false;
    document.body.classList.remove("locked");
  }
  setupReveal();
})();

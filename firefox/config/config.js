const siteConfigs = {
  // showroom === bottom of viewport
  // showroom_panel === search modal
  "songsterr.com": {
    selectors: ["#showroom", "#showroom_panel"],
  },

  // tabs.ultimate-guitar.com:
  // tYMPb, aV0z9 === popup video if adblocker is detected
  // BIfOl === "view offical tab" popup
  // XJpee === popup video
  // CiMr5 === left sidebar

  // ultimate-guitar.com:
  // js-ab-regular === header
  // kCj2L === footer
  "ultimate-guitar.com": {
    selectors: [
      ".tYMPb",
      ".aV0z9",
      ".BIfOl",
      ".XJpee",
      ".CiMr5",
      ".js-ab-regular",
      ".kCj2L",
    ],
  },

  // songsterrAd === bottom of page on tab pages
  // adsbygoogle === all ads
  "bigbasstabs.com": {
    selectors: [".adsbygoogle", ".songsterrAd"],
  },

  // ads_banner === all ads
  // popup-nps-btn === "report bad ads"
  // js-ad-fake-player === "learn to play" on tab pages
  "911tabs.com": {
    selectors: [".ads_banner", ".popup-nps-btn", ".js-ad-fake-player"],
  },

  // d1xpq3pb === all ads on tab pages
  // aniBox === video popup, bottom of viewport on tab pages
  "chordify.net": {
    selectors: [".d1xpq3pb", "#aniBox"],
  },

  // iframe === all ads
  // b-ad-fake-player === "learn to play" on tab pages
  // r_a === "get the note-for-note artist-approved version" popup
  "guitartabs.cc": {
    selectors: ["iframe", ".b-ad-fake-player", "#r_a"],
  },
};

const getSite = (hostname) => {
  const sites = Object.keys(siteConfigs);
  return sites.find((site) => hostname.includes(site)) || null;
};

export const siteConfigs = {
  "songsterr.com": {
    selectors: ["#showroom", "#showroom_panel"],
  },
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
  "bigbasstabs.com": {
    selectors: [".adsbygoogle", ".songsterrAd"],
  },
  "911tabs.com": {
    selectors: [".ads_banner", ".popup-nps-btn", ".js-ad-fake-player"],
  },
  "chordify.net": {
    selectors: [".d1xpq3pb", "#aniBox"],
  },
  "guitartabs.cc": {
    selectors: ["iframe", ".b-ad-fake-player"],
  },
};

export const getSite = (hostname) => {
  const sites = Object.keys(siteConfigs);
  return sites.find((site) => hostname.includes(site)) || null;
};
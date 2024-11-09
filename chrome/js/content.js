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
  "guitartabs.cc": {
    selectors: ["iframe", ".b-ad-fake-player"],
  },
};

let isEnabled = true; // global variable to track toggle state

function getCurrentSite() {
  const hostname = window.location.hostname;
  if (hostname.includes("songsterr.com")) return "songsterr.com";
  if (hostname.includes("ultimate-guitar.com")) return "ultimate-guitar.com";
  if (hostname.includes("bigbasstabs.com")) return "bigbasstabs.com";
  if (hostname.includes("911tabs.com")) return "911tabs.com";
  if (hostname.includes("chordify.net")) return "chordify.net";
  if (hostname.includes("guitartabs.cc")) return "guitartabs.cc";
  return null;
}

function hideElements() {
  const currentSite = getCurrentSite();
  if (!currentSite || !siteConfigs[currentSite]) return;

  const selectorsToHide = siteConfigs[currentSite].selectors;
  selectorsToHide.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (element) {
        element.style.display = "none";
        // element.remove();
      }
    });
  });
}

function showElements() {
  const currentSite = getCurrentSite();
  if (!currentSite || !siteConfigs[currentSite]) return;

  const selectorsToShow = siteConfigs[currentSite].selectors;
  selectorsToShow.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (element) {
        element.style.display = "";
      }
    });
  });
}

// check initial state from localStorage
chrome.storage.local.get("enabled", (result) => {
  isEnabled = result.enabled === undefined ? true : result.enabled;
  if (isEnabled) {
    hideElements();
  } else {
    showElements();
  }
});

// listen for changes to the "enabled" state
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    isEnabled =
      changes.enabled.newValue === undefined || changes.enabled.newValue;
    if (isEnabled) {
      hideElements();
    } else {
      showElements();
    }
  }
});

// mutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  if (isEnabled) {
    // only hide elements if the toggle is enabled
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        hideElements();
      }
    });
  }
});

// observe the entire document
observer.observe(document, { childList: true, subtree: true });

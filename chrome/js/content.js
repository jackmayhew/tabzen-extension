const siteConfigs = {
  "songsterr.com": {
    selectors: ["#showroom", "#showroom_panel"],
  },
  "ultimate-guitar.com": {
    selectors: [".tYMPb", ".BIfOl", ".aV0z9", ".XJpee", ".CiMr5"],
  },
};

let isEnabled = true; // global variable to track toggle state

function getCurrentSite() {
  const hostname = window.location.hostname;
  if (hostname.includes("songsterr.com")) return "songsterr.com";
  if (hostname.includes("ultimate-guitar.com")) return "ultimate-guitar.com";
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
    isEnabled = changes.enabled.newValue === undefined || changes.enabled.newValue;
    if (isEnabled) {
      hideElements();
    } else {
      showElements();
    }
  }
});

// mutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  if (isEnabled) { // only hide elements if the toggle is enabled
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        hideElements();
      }
    });
  }
});

// observe the entire document
observer.observe(document, { childList: true, subtree: true });
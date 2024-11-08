const siteConfigs = {
  "songsterr.com": {
    selectors: ["#showroom", "#showroom_panel"],
  },
  "ultimate-guitar.com": {
    selectors: [".NCQKG", ".BIfOl"],
  },
};

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

// Check initial state from localStorage
chrome.storage.local.get("enabled", (result) => {
  if (result.enabled) {
    hideElements();
  } else {
    showElements();
  }
});

// Listen for changes to the "enabled" state
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    if (changes.enabled.newValue) {
      hideElements();
    } else {
      showElements();
    }
  }
});

function getCurrentSite() {
  return getSite(window.location.hostname);
}

let isEnabled = true; // global variable to track toggle state

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

// check initial state from storage
browser.storage.local.get("enabled")
  .then((result) => {
    isEnabled = result.enabled === undefined ? true : result.enabled;
    if (isEnabled) {
      hideElements();
    } else {
      showElements();
    }
  })
  .catch((error) => {
    console.error('Error accessing storage:', error);
    isEnabled = true; // default to enabled on error
    hideElements();
  });

// listen for changes to the "enabled" state
browser.storage.onChanged.addListener((changes) => {
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
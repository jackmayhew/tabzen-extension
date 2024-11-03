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

hideElements();

const observer = new MutationObserver(() => {
  hideElements();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

window.addEventListener("resize", hideElements);
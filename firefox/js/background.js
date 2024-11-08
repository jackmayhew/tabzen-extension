// Handle initial installation
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    browser.storage.local.set({ enabled: true });
  }
});

browser.action.onClicked.addListener((tab) => {
  browser.storage.local.get("enabled")
    .then((result) => {
      const newEnabledState = !result.enabled;
      return browser.storage.local.set({ enabled: newEnabledState });
    })
    .catch((error) => {
      console.error('Error toggling extension state:', error);
    });
});
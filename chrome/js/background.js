chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get("enabled", (result) => {
    const newEnabledState = !result.enabled;
    chrome.storage.local.set({ enabled: newEnabledState });
  });
});
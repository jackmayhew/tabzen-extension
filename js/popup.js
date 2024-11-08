document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  // get the initial state of the extension from storage
  chrome.storage.local.get("enabled", (data) => {
    // default to enabled (true) if undefined
    toggleSwitch.checked = data.enabled !== false;
  });

  // listen for toggle switch changes
  toggleSwitch.addEventListener("change", () => {
    const newEnabledState = toggleSwitch.checked;
    chrome.storage.local.set({ enabled: newEnabledState });
  });
});
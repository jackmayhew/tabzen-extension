document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");

  // Get the initial state of the extension
  chrome.storage.local.get("enabled", (data) => {
    // Set the button text based on the initial state
    if (data.enabled) {
      toggleBtn.textContent = "Disable";
    } else {
      toggleBtn.textContent = "Enable";
    }
  });

  // Toggle the button text and the extension state when clicked
  toggleBtn.addEventListener("click", () => {
    chrome.storage.local.get("enabled", (data) => {
      const newEnabledState = !data.enabled;
      chrome.storage.local.set({ enabled: newEnabledState });

      // Update the button text based on the new state
      toggleBtn.textContent = newEnabledState ? "Disable" : "Enable";
    });
  });
});

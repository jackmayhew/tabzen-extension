document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  // get the initial state of the extension from storage
  browser.storage.local.get("enabled")
    .then((data) => {
      // default to enabled (true) if undefined
      toggleSwitch.checked = data.enabled !== false;
    })
    .catch((error) => {
      console.error('Error accessing storage:', error);
      toggleSwitch.checked = true; // default to enabled on error
    });

  // listen for toggle switch changes
  toggleSwitch.addEventListener("change", () => {
    const newEnabledState = toggleSwitch.checked;
    browser.storage.local.set({ enabled: newEnabledState })
      .catch((error) => {
        console.error('Error saving state:', error);
      });
  });
});
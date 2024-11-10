# TabZen - Focused Tab Viewing

TabZen is a browser extension that enhances your viewing experience for guitar, bass, and drum tabs & chords by removing intrusive promotional overlays from tab websites.

## Supported Websites
- [Ultimate Guitar](https://www.ultimate-guitar.com/)
- [Songsterr](https://www.songsterr.com/)
- [Big Bass Tabs](https://www.bigbasstabs.com/)
- [911Tabs](https://www.911tabs.com/guitar_tabs/)
- [Chordify](https://chordify.net/)
- [GuitarTabs.cc](https://www.guitartabs.cc/)

## Features
- Automatically removes promotional overlays
- Simple on/off toggle switch
- Enabled by default
- No data collection
- Works seamlessly with both Chrome and Firefox

## Installation

### Chrome
Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tabzen/your-extension-id)

### Firefox
Install from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tabzen)

## Development

The extension is available in both Chrome and Firefox versions, with minimal differences in implementation:

```
tabzen/
├── chrome/      # Chrome version
├── firefox/     # Firefox version
```

Each version maintains the same core functionality but uses browser-specific APIs where necessary.

## Contributing
We welcome contributions! If you’d like to add support for other tab websites or improve the extension, here’s how you can get started:
1. Clone the Repository: Fork and clone the repository to your local machine.
2. Update Selectors: To support additional websites, add the necessary CSS selectors to the siteConfigs object in `config/config.js`.
3. Update `mainifest.json`: In `manifest.json`, add the new site's URL to both the `host_permissions` and `content_scripts` sections. This ensures the extension has permission to modify content on the new site and applies the necessary scripts.
4. Testing: Ensure that the selectors work consistently and don’t interfere with the tab content.
5. Submit a Pull Request: Once your changes are complete and tested, submit a pull request. Please include details on any new sites you’ve added and the functionality tested.

For any questions or ideas, feel free to reach out on GitHub.

## Privacy
TabZen does not collect or store any user data. It only requires permissions to modify content on supported tab websites.

## License
This project is licensed under the MIT License.

## Support
Visit [tabzen.app](https://tabzen.app) for more information.

For issues, suggestions, or feature requests, please use the GitHub Issues tab on the project repository.
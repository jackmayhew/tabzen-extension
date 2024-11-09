# TabZen

TabZen is a browser extension that enhances your viewing experience for guitar, bass, and drum tabs & chords by removing intrusive promotional overlays from tab websites.

## Supported Websites
- Ultimate Guitar (tabs.ultimate-guitar.com)
- Songsterr (songsterr.com)

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

## Privacy
TabZen does not collect or store any user data. It only requires permissions to modify content on supported tab websites.

## License
MIT License

## Support
Visit [tabzen.app](https://tabzen.app) for more information.

For issues or feature requests, please use the GitHub issues tab.
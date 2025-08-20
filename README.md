# Clipboard Cleaner Extension

A browser extension that removes unwanted content injected into the clipboard by websites during copy actions. This includes copyright disclaimers, tracking links, and other non-user-intended text.

## Features

- Automatically cleans clipboard content on copy
- Prevents JavaScript-injected text from polluting copied content
- Supports custom keyword and regex filters
- Options page for configuration
- Compatible with Chrome and Firefox (Manifest V3)

## Installation

### Firefox (AMO)

You can also install Clipboard Cleaner from the Firefox Add-ons site: [Clipboard Cleaner on Firefox AMO](https://addons.mozilla.org/en-US/firefox/addon/clipboard-cleaner/).

### Chrome (Developer Mode)

1. Clone or download this repository
2. Go to `chrome://extensions/`
3. Enable "Developer mode" in the top-right
4. Click "Load unpacked" and select the project directory

### Firefox (Temporary Install)

1. Open `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file from the project directory

## Usage

Once installed:

- Navigate to any webpage
- Select text and copy it
- The extension will intercept the copy event and clean any unwanted additions
- Use the extension popup to access the options page and configure filters

## Development

To modify or build the extension locally:

```
git clone https://github.com/axiomv/clipboard-cleaner.git
cd clipboard-cleaner
```
## License
GPLv3
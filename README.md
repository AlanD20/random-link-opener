# Random Link Opener

Simple Chrome Extension to save links and access them later on. You can set custom shortcuts to open the saved links randomly.

## Features

- Custom keyboard shortcut can be set at `chrome://extensions/shortcuts`. The shortcut must follow [Supported Chrome Keys](https://developer.chrome.com/docs/extensions/reference/commands/#supported-keys).
- Add/Edit/Remove bookmarks.
- By clicking on any saved bookmark, it opens it in a new tab.
- Enabling Sync Storage in the extension settings will sync your configuration and all saved bookmarks to your signed in Google Account.
- Disable/Enable Notification.

## Default Shortcuts

- **Ctrl + Shift + Y**: Opens Extension popup.
- **Ctrl + Shift + Period (.)**: Saves currently opened tab in your bookmark.
- **Ctrl + Shift + Comma (,)**: Opens random saved link in your bookmark list.
- **Ctrl + Shift + L**: Opens latest saved link in your bookmark list.
- **Ctrl + Shift + P** _(Not set by default but suggested if set by user)_: Saves all opened tabs to your bookmark list.

## Build or Production

1. Install the packages wth yarn
```bash
yarn install
```
2. Build the project
```bash
yarn bundle
```
3. That was all :) grab the `bundle.zip` file at the root of the project directory and install the extension.

## Development
1. Install packages wth yarn
```bash
yarn install
```
2. Run prepare script in package.json
```bash
yarn prepare
```
3. Start dev server
```bash
yarn dev
```
4. Load the `dist` directory in your Chrome Extension page `chrome://extensions/`. 
   - Any changes you do in any file of the project, it will reflect instantly without reloading manually.
   - if you change manifest permissions, you must uninstall and reinstall the extension again to your chrome extensions.

## Contribute
Want to add new features? Bug fixes? Typos? Feel free to open a new pull request :)


## License
This repository is under [MIT LICENSE](LICENSE)

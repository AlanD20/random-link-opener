## Random Link Opener

A simple chrome extension to store links and open them randomly or open them later.

### Features

- Custom keyboard shortcut can be set at `chrome://extensions/shortcuts`. The shortcut must follow [Supported Chrome Keys](https://developer.chrome.com/docs/extensions/reference/commands/#supported-keys).
- Edit / Remove saved bookmarks.
- By clicking any saved bookmark, opens saved link in the new tab.
- Configuration / Saved links are synced with your signed in Google Account.

### Default Shortcuts

- **Ctrl + Shift + Y**: Opens Extension popup.
- **Ctrl + Shift + Period (.)**: Saves currently opened tab in your bookmark.
- **Ctrl + Shift + Comma (,)**: Opens random saved link in your bookmark list.
- **Ctrl + Shift + L**: Opens latest saved link in your bookmark list.
- **Ctrl + Shift + P** _(Suggested)_: Saves all opened tabs to your bookmark list.


### Current Bugs

- **Bug**: Switching off Notification & Syncing might not work. 
   - **Temporary Fix**: You have to play with the button until it grays out to turn it off completely.

### Build or Production

1. Install packages wth yarn
```bash
yarn install
```
2. Build the project
```bash
yarn bundle
```
3. That was all :) grab the `bundle.zip` file at the root of the project directory and install the extension.

### Development
1. Install packages wth yarn
```bash
yarn install
```
2. Start dev server
```bash
yarn dev
```
3. Load the `dist` directory in your chrome extension developer. Any changes in the project will reflect without reloading manually.
   - if you change manifest permissions, you must remove and load the extension again to your chrome extension.

## Contribute
Want to add new features? Bug fixes? Typos? Feel free to open a new pull request :)


## License
This repository is under [MIT LICENSE](LICENSE)

# Random Link Opener

Simple Chrome Extension to save links and access them later on. You can set custom shortcuts to open the saved links randomly.

## Features

- Custom keyboard shortcut can be set at `chrome://extensions/shortcuts`. The shortcut must follow [Supported Chrome Keys](https://developer.chrome.com/docs/extensions/reference/commands/#supported-keys).
- Add/Edit/Remove bookmarks.
- By clicking on any saved bookmark, it opens it in a new tab.
- Enabling Sync Storage in the extension settings will sync your configuration and all saved bookmarks to your signed in Google Account.
- Disable/Enable Notification.

## Default Shortcuts (You may have to manually set in settings page)

- **Ctrl + Shift + Y**: Opens Extension popup.
- **Ctrl + Shift + Period (.)**: Saves currently opened tab in your bookmark.
- **Ctrl + Shift + Comma (,)**: Opens random saved link in your bookmark list.
- **Ctrl + Shift + L**: Opens latest saved link in your bookmark list.
- **Ctrl + Shift + P** _(Not set by default but suggested if set by user)_: Saves all opened tabs to your bookmark list.

## Build For Production

1. Install the packages wth yarn
```bash
yarn install
```
2. Build the project
```bash
yarn bundle # If zip available in Terminal
yarn win:bundle # if zip is unavailable in Terminal
```
  - For windows users, please use bash Terminal otherwise, you may have to manually remove `dist` folder and build the project with `yarn build` command. 
3. That was all :) grab the `bundle.zip` file at the root of the project directory. 
   - You may have to extract the `bundle.zip` file in a folder to install the extension.
   - The extracted files must be kept for using the extension.

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
   - Any changes you do in the project files, it will reflect instantly without reloading manually.
   - if you change manifest permissions, you must uninstall and reinstall the extension again to your chrome extensions.

## Contribute
Want to add new features? Bug fixes? Typos? Feel free to open a new pull request :)

- Don't be afraid to contribute, I will try my best to help you with your pull requests.

### Contribution Rules:

- Checkout other files in the folder structure if you want to create a new file and don't know where to put.
- Do not forget to run `yarn prepare` only after when you cloned and installed the packages. Husky warns you if you forget to increment version and formats the codebase.
- **Work on main branch only if the changes are internal and does not benefit extension users, or meets one of the following reasons:**
    1. Fixing a bug that only changes small portion of the codes in the project. Mostly sums up to less than 15 lines of codes. Otherwise, create a new branch.
    3. Typos in the code or documentation.
    4. Adding/Editing/Removing comments for the entire project.
    5. Refactoring the codebase.
- Create a new branch for major and minor features, fixes.
- Do not forget to increment the `package.json` and `manifest.json` version based on [SemVer](https://semver.org/) guideline. Here is a small summary of the versions:
    - **Increment Patch Version:**
      1. Bug fixes that are sums up to 15 lines of codes.
      2. Changing exisiting code.
      3. All types of typos.
      4. Adding/Editing/Removing comments.
      5. Internal/Developer changes for the project.
    - **Increment Minor Version:** features, fixes that does not effect the functionality of the existing codebase.
    - **Increment Major Version:**
      1. Introducting a new big feature that does not exist in the previous versions.
      2. Adding/Changing the extension UI which it effects the project's functionality.
 
- You can always contact me [aland20@pm.me] if anything is unclear.


## License
This repository is under [MIT LICENSE](LICENSE)

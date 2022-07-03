import {
  CURRENT_TAB,
  ALL_TABS,
  RANDOM_TAB,
  LATEST_TAB,
  COMMANDS_LIST,
  CLEAR_BOOKMARK,
} from '@/common/constants';
import { ACTIONS } from './actions';

export interface ContextType {
  id: string;
  title: string;
  contexts: chrome.contextMenus.ContextType[];
}

const CONTEXT_MENU: ContextType = {
  id: 'random-link-opener',
  title: 'Random Link Opener',
  contexts: ['page'],
};

chrome.runtime.onInstalled.addListener(() => {
  const PARENT_ID = chrome.contextMenus.create(CONTEXT_MENU);

  const createSubContextMenu = (id: string, title: string) => {
    chrome.contextMenus.create({
      id,
      title,
      parentId: PARENT_ID,
      contexts: ['page'],
    });
  };

  createSubContextMenu(RANDOM_TAB.id, RANDOM_TAB.title);
  createSubContextMenu(CURRENT_TAB.id, CURRENT_TAB.title);
  createSubContextMenu(ALL_TABS.id, ALL_TABS.title);
  createSubContextMenu(LATEST_TAB.id, LATEST_TAB.title);
  createSubContextMenu(CLEAR_BOOKMARK.id, CLEAR_BOOKMARK.title);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab) return;

  // * Transform COMMAND ID to COMMAND KEY NAME
  const command = info['menuItemId']
    .toString()
    .toUpperCase()
    .replaceAll('-', '_');

  if (Object.keys(COMMANDS_LIST).includes(command)) {
    ACTIONS[command](tab);
  }
});

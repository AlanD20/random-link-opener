import { COMMANDS_LIST } from '@/common/constants';
import { ACTIONS } from './actions';

chrome.commands.onCommand.addListener(async (command) => {
  if (Object.keys(COMMANDS_LIST).includes(command)) {
    ACTIONS[command]();
  }
});

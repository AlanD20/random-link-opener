import { ACTIONS } from './actions';
import { COMMANDS_LIST } from '@/common/constants';

chrome.commands.onCommand.addListener(async (command) => {
  if (Object.keys(COMMANDS_LIST).includes(command)) {
    ACTIONS[command]();
  }
});

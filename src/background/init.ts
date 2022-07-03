import './contextMenu';
import './commands';
import { getUserPref } from '@/common/userPref';

// Initalize default user preference
(async () => void (await getUserPref()))();

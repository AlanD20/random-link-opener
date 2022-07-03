import { getNotificationStatus } from './userPref';

export const createNotify = async (
  id: string,
  title: string,
  message: string
) => {
  const status = await getNotificationStatus();
  if (!status) return;
  chrome.notifications.create(id, {
    title,
    message,
    type: 'basic',
    iconUrl: 'src/assets/icons/icons8-96.png',
  });
};

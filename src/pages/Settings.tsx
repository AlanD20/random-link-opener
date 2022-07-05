import { useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import ToggleInput from '@/components/ToggleInput';
import AlertStatus from '@/components/ui/AlertStatus';
import { useChromeStorage } from '@/hooks/useChromeStorage';
import { useAppDispatch, useAppSelector } from '@/common/store';
import {
  clearUserPref,
  getNotificationStatus,
  getStorageAreaStatus,
  setNotificationStatus,
  setStorageAreaStatus,
} from '@/common/userPref';
import {
  resetDefault,
  setNotification,
  setStorageArea,
} from '@/features/settingsSlice';

const Settings = () => {
  const { clearBookmark } = useChromeStorage();

  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  const handleClearUserPref = async () => {
    dispatch(resetDefault());
    await clearUserPref();
    window.location.reload();
  };

  const handleToggleNotification = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await setNotificationStatus(e.target.checked);
    dispatch(setNotification({ notifications: e.target.checked }));
  };

  const handleToggleStorageSync = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setStorageArea({ storageArea: e.target.checked }));
    await setStorageAreaStatus(e.target.checked);
    window.location.reload();
  };

  const handleShortcutBtn = async () => {
    await chrome.tabs.create({
      url: 'chrome://extensions/shortcuts',
    });
  };

  useEffect(() => {
    getNotificationStatus().then(
      (status: boolean) =>
        void dispatch(setNotification({ notifications: status }))
    );
    getStorageAreaStatus().then(
      (status: boolean) =>
        void dispatch(setStorageArea({ storageArea: status }))
    );
  }, []);

  return (
    <div className="page prose prose-sm">
      <AlertStatus />

      <h2 className="text-gray-700">Settings</h2>

      <div className="mb-8 flex flex-col text-xl gap-4 w-full">
        <ToggleInput
          className={settings.notifications ? 'bg-red-400' : 'bg-gray-500'}
          name="notification"
          value={settings.notifications}
          label="Notification"
          onClick={handleToggleNotification}
        />
        <ToggleInput
          className={settings.storageArea ? 'bg-red-400' : 'bg-gray-500'}
          name="sync-Storage"
          value={settings.storageArea}
          label="Sync Storage"
          onClick={handleToggleStorageSync}
        />
      </div>

      <Navbar>
        <a
          className="btn btn-input mx-8 btn-md text-white"
          onClick={handleShortcutBtn}
        >
          Configure Shortcuts
        </a>
        <ul className="flex items-center justify-between mx-8 pl-0">
          <button
            className="btn btn-error text-white hover:bg-red-500"
            onClick={handleClearUserPref}
          >
            Reset Settings
          </button>
          <button
            className="btn btn-error text-white hover:bg-red-500"
            onClick={async (_) => void (await clearBookmark())}
          >
            Clear Bookmarks
          </button>
        </ul>
      </Navbar>
    </div>
  );
};
export default Settings;

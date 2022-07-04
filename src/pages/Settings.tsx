import { useAppDispatch, useAppSelector } from '@/common/store';
import {
  clearUserPref,
  getNotificationStatus,
  getStorageAreaStatus,
  getUserPref,
  setNotificationStatus,
  setStorageAreaStatus,
} from '@/common/userPref';
import ToggleInput from '@/components/ToggleInput';
import { useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import AlertStatus from '@/components/ui/AlertStatus';
import { useChromeStorage } from '@/hooks/useChromeStorage';
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
    await setStorageAreaStatus(e.target.checked);
    dispatch(setStorageArea({ storageArea: e.target.checked }));
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
      <h2 className="text-gray-700">Settings</h2>

      <AlertStatus />
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
          disabled={true}
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
            className="btn btn-error text-white"
            onClick={handleClearUserPref}
          >
            Clear User Preferences
          </button>
          <button
            className="btn btn-error text-white"
            onClick={async (_) => void (await clearBookmark())}
          >
            Clear All
          </button>
        </ul>
      </Navbar>
    </div>
  );
};
export default Settings;

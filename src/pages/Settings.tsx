import {
  clearUserPref,
  getNotificationStatus,
  getStorageAreaStatus,
  setNotificationStatus,
  setStorageAreaStatus,
} from '@/common/userPref';
import NavItem from '@/components/NavItem';
import ToggleInput from '@/components/ToggleInput';
import AlertStatus from '@/components/ui/AlertStatus';
import Navbar from '@/components/ui/Navbar';
import { useChromeStorage } from '@/hooks/useChromeStorage';
import { ChangeEvent, useEffect, useState } from 'react';

const Settings = () => {
  const { clearBookmark } = useChromeStorage();

  const [notification, setNotification] = useState<boolean | undefined>(
    undefined
  );
  const [storageArea, setStorageArea] = useState<boolean | undefined>(
    undefined
  );

  const handleClearUserPref = async () => {
    await clearUserPref();
    window.location.reload();
  };

  const handleToggleNotification = async (e: ChangeEvent<HTMLInputElement>) => {
    await setNotificationStatus(e.target.checked);
    setNotification(e.target.checked);
  };

  const handleToggleStorageSync = async (e: ChangeEvent<HTMLInputElement>) => {
    await setStorageAreaStatus(e.target.checked);
    setStorageArea(e.target.checked);
  };

  const handleShortcutBtn = async () => {
    await chrome.tabs.create({
      url: 'chrome://extensions/shortcuts',
    });
  };

  useEffect(() => {
    getNotificationStatus().then(
      (status: boolean) => void setNotification(status)
    );
    getStorageAreaStatus().then(
      (status: boolean) => void setStorageArea(status)
    );
  }, []);

  return (
    <div className="page prose prose-sm">
      <h2 className="text-gray-700">Settings</h2>

      <AlertStatus />
      <div className="mb-8 flex flex-col text-xl gap-4 w-full">
        <ToggleInput
          className={notification ? 'bg-red-400' : 'bg-gray-500'}
          name="notification"
          value={notification}
          label="Notification"
          onChange={handleToggleNotification}
        />
        <ToggleInput
          className={storageArea ? 'bg-red-400' : 'bg-gray-500'}
          name="sync-Storage"
          value={storageArea}
          label="Sync Storage"
          onChange={handleToggleStorageSync}
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

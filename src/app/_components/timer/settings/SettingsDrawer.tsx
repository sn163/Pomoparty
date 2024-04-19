import { useState } from "react";
import Image from "next/image";
import TimerSettings from "./TimerSettings";
import NotificationSettings from "./NotificationSettings";
import { useTimerContext } from "../../context/TimerContext";
import {
  updateSettings,
  revertSettings,
  updateSaveAlert,
  toggleActiveTimer,
  resetActiveStep,
} from "@/_utils/actions";

export default function SettingsDrawer() {
  const { timer, dispatch } = useTimerContext();
  const [tempSettings, setTempSettings] = useState(timer.settings);

  const handleClick = (actionType?: "save" | "revert") => {
    if (timer.activeTimer) {
      toggleActiveTimer(dispatch, timer);
    }
    if (actionType === "save") {
      updateSaveAlert(dispatch, timer);
      updateSettings(dispatch, { ...timer, settings: { ...tempSettings } });
      resetActiveStep(dispatch, timer);
    } else {
      revertSettings(dispatch, { ...timer, settings: { ...timer.settings } });
    }
  };

  return (
    <div className="drawer-side">
      <label
        htmlFor="settings-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="flex h-full min-h-full w-full max-w-sm flex-col items-center justify-start bg-base-100 pt-2 text-base-content">
        <h3 className="mb-6 mt-3 flex h-6 select-none text-center text-xl font-bold text-primary">
          POMOPARTY SETTINGS
        </h3>
        <hr className="border-1 h-px w-full bg-gray-200" />
        <div className="mb-4 flex h-full w-full flex-col justify-between">
          <div className="mt-8 flex h-full w-full flex-col items-center space-y-8">
            <TimerSettings
              tempSettings={tempSettings}
              setTempSettings={setTempSettings}
            />
            <hr className="border-1 h-px w-full bg-gray-200" />
            <NotificationSettings />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 px-4">
            <label
              htmlFor="settings-drawer"
              className="btn btn-primary drawer-button btn-block"
              onClick={() => handleClick("save")}
            >
              <Image src="/svg/save.svg" alt="save" height={17} width={17} />
              Save
            </label>
            <label
              htmlFor="settings-drawer"
              className="btn btn-outline btn-secondary btn-block border-primary text-primary shadow-md"
              onClick={() => handleClick("revert")}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

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
} from "@/app/_utils/actions";

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
      <div className="flex h-full min-h-full w-full max-w-sm flex-col items-center justify-start bg-base-100 px-4 pt-24 text-base-content">
        <h3 className="flex h-6 text-lg font-bold text-gray-400">
          POMOPARTY SETTINGS
        </h3>
        <div className="mb-5 flex h-full w-full flex-col justify-between">
          <div className="mt-8 flex h-full w-full flex-col items-center space-y-8">
            <hr className="border-1 h-px w-full bg-gray-200" />
            <TimerSettings
              tempSettings={tempSettings}
              setTempSettings={setTempSettings}
            />
            <hr className="border-1 h-px w-full bg-gray-200" />
            <NotificationSettings />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4">
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

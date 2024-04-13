import SaveSettingsAlert from "./settings/SaveSettingsAlert";
import Image from "next/image";
import SettingsDrawer from "./settings/SettingsDrawer";
import PomodoroTimer from "./PomodoroTimer";
import BreakTimer from "./BreakTimer";
import { Stepper } from "./Stepper";

export default function Timer() {
  return (
    <div className="drawer drawer-end">
      <input id="settings-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex flex-col items-center justify-center space-y-5">
          <SaveSettingsAlert />
          <Stepper />
          <PomodoroTimer />
          {/* <BreakTimer /> */}
        </div>
      </div>
      <label
        htmlFor="settings-drawer"
        className="group btn btn-primary drawer-button m-auto my-4 max-w-32 border-2"
      >
        <Image
          src="/svg/settings.svg"
          className="group-hover:animate-spin"
          alt="settings"
          height={20}
          width={20}
        />
        Settings
      </label>
      <SettingsDrawer />
    </div>
  );
}

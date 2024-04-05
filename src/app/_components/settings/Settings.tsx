import { useState } from "react";
import Image from "next/image";
import TimerSettings from "./TimerSettings";
import NotificationSettings from "./NotificationSettings";
import { useTimerContext } from "../context/TimerContext";
import {
  updateSettings,
  revertSettings,
  updateSaveAlert,
  toggleActiveTimer,
} from "@/app/_utils/actions";

export default function Settings() {
  const { timer, dispatch } = useTimerContext();
  const [isOpen, setIsOpen] = useState(false);
  const [tempSettings, setTempSettings] = useState(timer.settings);

  const toggleModal = (actionType?: "save" | "revert") => {
    const htmlModal = document.getElementById(
      "settings_modal",
    ) as HTMLDialogElement;
    if (timer.activeTimer) {
      toggleActiveTimer(dispatch, timer);
    }
    if (!isOpen) {
      setIsOpen(true);
      htmlModal.showModal();
    } else {
      setIsOpen(false);
      if (actionType === "save") {
        updateSaveAlert(dispatch, timer);
        updateSettings(dispatch, { ...timer, settings: { ...tempSettings } });
      } else {
        revertSettings(dispatch, { ...timer, settings: { ...timer.settings } });
      }
      htmlModal.close();
    }
  };

  return (
    <>
      <button
        className="group btn btn-primary border-2"
        onClick={() => toggleModal()}
      >
        <Image
          src="/svg/settings.svg"
          className="group-hover:animate-spin"
          alt="settings"
          height={20}
          width={20}
        />
        Settings
      </button>
      <dialog
        id="settings_modal"
        className="modal modal-bottom mx-auto flex max-w-md sm:modal-middle"
      >
        <div className="modal-box flex w-full max-w-xs flex-col items-center justify-center  space-y-4 px-0 py-8">
          <h3 className="flex h-6 text-lg font-bold text-gray-400">
            POMOPARTY SETTINGS
          </h3>
          <hr className="border-1 my-6 h-px w-full bg-gray-200" />
          <TimerSettings
            tempSettings={tempSettings}
            setTempSettings={setTempSettings}
          />
          <hr className="border-1 my-6 h-px w-full bg-gray-200" />
          <NotificationSettings />
          <form
            method="dialog"
            className="modal-backdrop mr-6 flex items-center justify-end space-x-3 pt-6"
          >
            <button
              type="button"
              className="btn btn-outline btn-secondary btn-md border-primary text-primary shadow-md"
              onClick={() => toggleModal("revert")}
            >
              Close
            </button>
            <button
              onClick={() => toggleModal("save")}
              className="btn btn-primary"
            >
              <Image src="/svg/save.svg" alt="save" height={17} width={17} />
              Save
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

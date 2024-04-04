import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import TimerSettings from "./TimerSettings";
import NotificationSettings from "./NotificationSettings";

type ModalProps = {
  inputMin: number;
  setInputMin: Dispatch<SetStateAction<number>>;
  setActiveTimer: Dispatch<SetStateAction<boolean>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
};

export default function Settings({ ...props }: ModalProps) {
  const { inputMin, setInputMin, setActiveTimer, setShowAlert } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [sliderData, setSliderData] = useState({
    pomodoro: 25,
    break: 5,
    rounds: 4,
  });

  const toggleModal = (actionType?: "save" | "revert") => {
    const htmlModal = document.getElementById(
      "settings_modal",
    ) as HTMLDialogElement;
    setActiveTimer(false);
    if (!isOpen) {
      setIsOpen(true);
      htmlModal.showModal();
    } else {
      setIsOpen(false);
      if (actionType === "save") {
        setShowAlert(true);
        setInputMin(sliderData.pomodoro);
      } else {
        setSliderData((prevState) => ({
          ...prevState,
          pomodoro: inputMin,
        }));
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
        <div className="modal-box flex w-full max-w-xs flex-col items-center justify-center px-0">
          <h3 className="mx-auto text-center text-lg font-bold text-gray-400">
            POMOPARTY SETTINGS
          </h3>
          <hr className="border-1 my-6 h-px w-full bg-gray-200" />
          <TimerSettings
            sliderData={sliderData}
            setSliderData={setSliderData}
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

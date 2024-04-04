import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

type ModalProps = {
  inputMin: number;
  setInputMin: Dispatch<SetStateAction<number>>;
  setActiveTimer: Dispatch<SetStateAction<boolean>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
};

export default function TimerSettings({ ...props }: ModalProps) {
  const { inputMin, setInputMin, setActiveTimer, setShowAlert } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [minuteValue, setMinuteValue] = useState(25);

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
        setInputMin(minuteValue);
      } else {
        setMinuteValue(inputMin);
      }
      htmlModal.close();
    }
  };

  const handleTimeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMinuteValue(+event.target.value);
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
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box w-full max-w-xl">
          <form
            method="dialog"
            className="modal-backdrop"
            onSubmit={() => toggleModal("save")}
          >
            <h3 className="mx-auto text-center text-lg font-bold text-gray-400">
              POMODORO TIMER
            </h3>
            <hr className="mb-6 mt-2 h-px border-0 bg-gray-200" />
            <div className="flex flex-col items-center justify-center space-y-5">
              <label className="form-control w-full max-w-xs">
                <div className="label justify-start gap-2">
                  <span className="label-text">Time</span>
                  <span className="text-lg text-primary">
                    {minuteValue + " min"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max="60"
                  value={minuteValue}
                  className="range range-primary"
                  onChange={(e) => handleTimeInput(e)}
                />
                <div className="mt-2 flex w-full justify-between text-xs text-primary">
                  <span>1</span>
                  <span>30</span>
                  <span>60</span>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-6">
              <button
                type="button"
                className="btn btn-outline btn-secondary btn-md border-primary text-primary shadow-md"
                onClick={() => toggleModal("revert")}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                <Image src="/svg/save.svg" alt="save" height={17} width={17} />
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

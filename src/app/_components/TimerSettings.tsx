import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type ModalProps = {
  inputHr: number;
  setInputHr: Dispatch<SetStateAction<number>>;
  inputMin: number;
  setInputMin: Dispatch<SetStateAction<number>>;
  inputSec: number;
  setInputSec: Dispatch<SetStateAction<number>>;
  setActiveTimer: Dispatch<SetStateAction<boolean>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
};

export default function TimerSettings({ ...props }: ModalProps) {
  const {
    inputHr,
    setInputHr,
    inputMin,
    setInputMin,
    inputSec,
    setInputSec,
    setActiveTimer,
    setShowAlert,
  } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [timeUnitsInput, setTimeUnitsInput] = useState({
    hours: inputHr,
    minutes: inputMin,
    seconds: inputSec,
  });

  const toggleModal = () => {
    const htmlModal = document.getElementById(
      "settings_modal",
    ) as HTMLDialogElement;
    if (!modalOpen) {
      setActiveTimer(false);
      setModalOpen(true);
      htmlModal.showModal();
    } else {
      applyInputTime("revert");
      htmlModal.close();
    }
  };

  const applyInputTime = (applyType: "save" | "revert") => {
    setActiveTimer(false);
    if (applyType === "save") {
      setShowAlert(true);
      setInputHr(timeUnitsInput.hours);
      setInputMin(timeUnitsInput.minutes);
      setInputSec(timeUnitsInput.seconds);
    } else {
      setActiveTimer(false);
      setTimeUnitsInput({
        hours: inputHr,
        minutes: inputMin,
        seconds: inputSec,
      });
    }
    setModalOpen(false);
  };

  const handleInputs =
    (inputField: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setTimeUnitsInput((prevState) => ({
        ...prevState,
        [inputField]: +value,
      }));
    };

  return (
    <>
      <button
        className="btn btn-primary border-2 text-white shadow-md"
        onClick={toggleModal}
      >
        Timer Settings
      </button>
      <dialog
        id="settings_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box w-full max-w-xl">
          <form
            method="dialog"
            className="modal-backdrop"
            onSubmit={() => applyInputTime("save")}
          >
            <h3 className="mx-auto text-center text-lg font-bold text-gray-400">
              POMODORO TIMER
            </h3>
            <hr className="mb-6 mt-2 h-px border-0 bg-gray-200" />
            <div className="flex">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Hours</span>
                </div>
                <input
                  onChange={handleInputs("hours")}
                  type="number"
                  min={0}
                  max={60}
                  value={timeUnitsInput.hours}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Minutes</span>
                </div>
                <input
                  onChange={handleInputs("minutes")}
                  type="number"
                  min={0}
                  max={60}
                  value={timeUnitsInput.minutes}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Seconds</span>
                </div>
                <input
                  onChange={handleInputs("seconds")}
                  type="number"
                  min={0}
                  max={60}
                  value={timeUnitsInput.seconds}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-6">
              <button
                type="button"
                className="btn btn-outline btn-md border-2 border-primary text-primary shadow-md"
                onClick={toggleModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 2 22 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

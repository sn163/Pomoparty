import { Dispatch, SetStateAction, useState } from "react";

type ModalProps = {
  hr: {
    startHr: number;
    setStartHr: Dispatch<SetStateAction<number>>;
  };
  min: {
    startMin: number;
    setStartMin: Dispatch<SetStateAction<number>>;
  };
  sec: {
    startSec: number;
    setStartSec: Dispatch<SetStateAction<number>>;
  };
};

export default function Modal({ hr, min, sec }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hourValue, setHourValue] = useState(hr.startHr);
  const [minValue, setMinValue] = useState(min.startMin);
  const [secValue, setSecValue] = useState(sec.startSec);

  const toggleModal = () => {
    const htmlModal = document.getElementById(
      "settings_modal",
    ) as HTMLDialogElement;
    if (!modalOpen) {
      htmlModal.showModal();
      setModalOpen(true);
    } else {
      setModalOpen(false);
      htmlModal.close();
    }
  };

  const handleSubmit = () => {
    hr.setStartHr(hourValue);
    min.setStartMin(minValue);
    sec.setStartSec(secValue);
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
            onSubmit={() => handleSubmit()}
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
                  onChange={(e) => setHourValue(+e.target.value)}
                  type="number"
                  min={0}
                  max={60}
                  value={hourValue}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Minutes</span>
                </div>
                <input
                  onChange={(e) => setMinValue(+e.target.value)}
                  type="number"
                  min={0}
                  max={60}
                  value={minValue}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Seconds</span>
                </div>
                <input
                  onChange={(e) => setSecValue(+e.target.value)}
                  type="number"
                  min={0}
                  max={60}
                  value={secValue}
                  className="input input-bordered max-w-24 text-black"
                />
              </label>
            </div>
            <div className="flex items-center justify-end space-x-3 pt-6">
              <button
                className="btn btn-outline btn-md border-2 border-primary text-primary shadow-md"
                onClick={toggleModal}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn-main text-white"
                onClick={toggleModal}
              >
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

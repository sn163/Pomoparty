"use client";
import { useState } from "react";
import { ThemedButton } from "./ui/ThemedButton";

export default function SignInModal() {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
    const modal = document.getElementById(
      "my_modal_3",
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    setOpen(false);
    const modal = document.getElementById(
      "my_modal_3",
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <ThemedButton
        className="no-underline hover:no-underline"
        alt="sign in"
        variant="link"
        size="md"
        onClick={openModal}
      >
        Sign In
      </ThemedButton>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="container">
            <h1 className="text-center text-lg font-bold">
              {" "}
              Welcome to Pomoparty!
            </h1>
            <br />
            <div>
              <label>
                <b> Username: </b>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Username"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
            </div>
            <br />
          </div>
          <div>
            <label>
              <b> Password: </b>
              <input
                type="text"
                name="name"
                placeholder="Enter your Password"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>
        </div>
      </dialog>
    </div>
  );
}

import { useState } from "react";
import SignIn from "./Navbar";

export default function LoginModal() {
  const [modal, setModal] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleOnChange = () => {
    setSignIn(!signIn);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      {/* <div>
        <h1>Username</h1>
        <input type="text" placeholder="Enter Username" />
      </div>
      <div>
        <h1>Password</h1>
        <input type="text" placeholder="Password" />
      </div> */}

      <button type="button" onClick={handleOnChange}>
        openModal
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* <!-- if there is a button in form, it will close the modal --> */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

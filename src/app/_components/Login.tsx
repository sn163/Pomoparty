import { useState } from "react";
import uuid from "react-uuid";

interface LoginInfo {
  id: string;
  username: string;
  password: string;
  isLogin: boolean;
}

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<LoginInfo[]>([]);

  const loginModal = (username: string, password: string) => {
    const loginInfo: LoginInfo = {
      id: uuid(),
      username,
      password,
      isLogin: false,
    };
    setUserInfo([...userInfo, loginInfo]);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundUser = userInfo.find(
      (user) => user.username === username && user.password === password,
    );
    if (foundUser) {
      setLogin(true);
      closeModal();
    }
  };

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      {open && (
        <dialog className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <input type="text" placeholder="Enter your Username">
              Username:
            </input>
            <input type="text" placeholder="Enter your Password">
              Password:
            </input>
            <button type="button" onClick={() => login}>
              Login
            </button>
            <div className="modal-action">
              <form method="dialog">
                {/* <!-- if there is a button in form, it will close the modal --> */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

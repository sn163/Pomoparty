import { useState } from "react";

export default function LoginModal() {
  const [modal, setModal] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div>
        <h1>Username</h1>
        <input type="text" placeholder="Enter Username" />
      </div>
      <div>
        <h1>Password</h1>
        <input type="text" placeholder="Password" />
      </div>
    </div>
  );
}

import { useState } from "react";
import Settings from "./settings/Settings";
import Timer from "./Timer";

export default function Dashboard() {
  const [activeTimer, setActiveTimer] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [inputMin, setInputMin] = useState(25);

  return (
    <>
      <Timer
        {...{
          inputMin,
          activeTimer,
          setActiveTimer,
          showAlert,
          setShowAlert,
        }}
      />
      <Settings
        {...{
          inputMin,
          setInputMin,
          setActiveTimer,
          setShowAlert,
        }}
      />
    </>
  );
}

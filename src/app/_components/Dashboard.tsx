import { useState } from "react";
import TimerSettings from "./TimerSettings";
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
      <TimerSettings
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

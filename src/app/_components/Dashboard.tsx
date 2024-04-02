import { useState } from "react";
import TimerSettings from "./TimerSettings";
import Timer from "./Timer";

export default function Dashboard() {
  const [activeTimer, setActiveTimer] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [inputHr, setInputHr] = useState(0);
  const [inputMin, setInputMin] = useState(25);
  const [inputSec, setInputSec] = useState(0);

  return (
    <>
      <Timer
        {...{
          inputHr,
          inputMin,
          inputSec,
          activeTimer,
          setActiveTimer,
          showAlert,
        }}
      />
      <TimerSettings
        {...{
          inputHr,
          setInputHr,
          inputMin,
          setInputMin,
          inputSec,
          setInputSec,
          setActiveTimer,
          setShowAlert,
        }}
      />
    </>
  );
}

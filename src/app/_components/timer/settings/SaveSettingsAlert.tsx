import { useEffect, useState } from "react";
import { useTimerContext } from "../../context/TimerContext";
import { updateSaveAlert } from "@/_utils/actions";
import Image from "next/image";

export default function SaveSettingsAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const { timer, dispatch } = useTimerContext();

  useEffect(() => {
    if (timer.showAlert) {
      setIsVisible(true);
      // Automatically hide the message after 3 seconds (3000 milliseconds)
      const timeout = setTimeout(() => {
        setIsVisible(false);
        updateSaveAlert(dispatch, timer);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [timer, dispatch]);

  return (
    <div
      role="alert"
      className={`alert max-w-xs bg-white shadow-md transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src="/svg/alert.svg" alt="alert" height={24} width={24} />
      <span>Settings Saved!</span>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useTimerContext } from "../context/TimerContext";
import { updateSaveAlert } from "@/app/_utils/actions";

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
      className={`alert bg-white shadow-md transition duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Settings Saved!</span>
    </div>
  );
}

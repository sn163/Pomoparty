import { Dispatch, SetStateAction, useEffect, useState } from "react";

type SettingsAlertProps = {
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
};

export default function SaveSettingsAlert({
  showAlert,
  setShowAlert,
}: SettingsAlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setIsVisible(true);
      // Automatically hide the message after 3 seconds (3000 milliseconds)
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert, setShowAlert]);

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

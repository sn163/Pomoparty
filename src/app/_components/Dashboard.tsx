import Settings from "./settings/Settings";
import Timer from "./Timer";
import { TimerContextProvider } from "./context/TimerContext";

export default function Dashboard() {
  return (
    <>
      <TimerContextProvider>
        <Timer />
        <Settings />
      </TimerContextProvider>
    </>
  );
}

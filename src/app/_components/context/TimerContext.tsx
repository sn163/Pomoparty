import { TimerType } from "@/app/_utils/types";
import {
  createContext,
  PropsWithChildren,
  Dispatch,
  useReducer,
  useMemo,
} from "react";
import { useContextWrapper } from "./useContextWrapper";

const initialTimer: TimerType = {
  activeTimer: false,
  activeStep: 0,
  showAlert: false,
  settings: {
    pomodoroTime: 25,
    breakTime: 5,
    rounds: 4,
    sound: "Jingle",
  },
};

export enum ActionType {
  toggleActiveTimer = "toggleActiveTimer",
  updateSaveAlert = "updateSaveAlert",
  updateActiveStep = "updateActiveStep",
  resetActiveStep = "resetActiveStep",
  updateSettings = "updateSettings",
  updateSoundSettings = "updateSoundSettings",
  revertSettings = "revertSettings",
}

export type IAction = {
  type: ActionType;
  timer: TimerType;
};

const timerReducer = (
  timer: TimerType,
  action: IAction,
): typeof initialTimer => {
  switch (action.type) {
    case "updateSettings": {
      return {
        ...timer,
        settings: {
          ...action.timer.settings,
        },
      };
    }
    case "updateSoundSettings": {
      return {
        ...timer,
        settings: {
          ...action.timer.settings,
          sound: action.timer.settings.sound,
        },
      };
    }
    case "revertSettings": {
      return {
        ...action.timer,
        settings: {
          ...action.timer.settings,
        },
      };
    }
    case "updateActiveStep": {
      return {
        ...timer,
        activeStep: action.timer.activeStep + 1,
      };
    }
    case "resetActiveStep": {
      return {
        ...timer,
        activeStep: 0,
      };
    }
    case "updateSaveAlert": {
      return {
        ...timer,
        showAlert: action.timer.showAlert ? false : true,
      };
    }
    case "toggleActiveTimer": {
      return {
        ...timer,
        activeTimer: action.timer.activeTimer ? false : true,
      };
    }
    default:
      throw new Error();
  }
};

type TimerContextType = {
  timer: TimerType;
  dispatch: Dispatch<IAction>;
};

const TimerContext = createContext<TimerContextType | null>(null);

export const useTimerContext = () => {
  return useContextWrapper(TimerContext, {
    contextName: useTimerContext.name,
    providerName: TimerContextProvider.name,
  });
};

export const TimerContextProvider = ({ children }: PropsWithChildren) => {
  const [timer, dispatch] = useReducer(timerReducer, initialTimer);
  const value = useMemo(() => ({ timer, dispatch }), [timer]);
  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export type EnvironmentVariables = {
  WEB3_KEY: string;
  ANALYZE: boolean;
};

export type SettingsType = {
  pomodoroTime: number;
  breakTime: number;
  rounds: number;
  sound: "Jingle" | "Retro" | "Digital" | "Off";
};

export type TimerType = {
  activeTimer: boolean;
  activeStep: number;
  showAlert: boolean;
  settings: SettingsType;
};

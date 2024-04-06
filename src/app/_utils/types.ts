export type EnvironmentVariables = {
  WEB3_KEY: string;
};

export type SettingsType = {
  pomodoroTime: number;
  breakTime: number;
  rounds: number;
  sound: "Jingle" | "Retro" | "Digital" | "Off";
};

export type TimerType = {
  activeTimer: boolean;
  showAlert: boolean;
  settings: SettingsType;
};

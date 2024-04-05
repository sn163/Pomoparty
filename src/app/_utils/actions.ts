import { Dispatch } from "react";
import { ActionType, IAction } from "../_components/context/TimerContext";
import { TimerType } from "./types";

export const toggleActiveTimer = (
  dispatch: Dispatch<IAction>,
  timer: TimerType,
) =>
  dispatch({
    type: ActionType.toggleActiveTimer,
    timer: timer,
  });

export const updateSaveAlert = (
  dispatch: Dispatch<IAction>,
  timer: TimerType,
) => dispatch({ type: ActionType.updateSaveAlert, timer: timer });

export const updateSettings = (dispatch: Dispatch<IAction>, timer: TimerType) =>
  dispatch({ type: ActionType.updateSettings, timer: timer });

export const updateSoundSettings = (
  dispatch: Dispatch<IAction>,
  timer: TimerType,
) => dispatch({ type: ActionType.updateSoundSettings, timer: timer });

export const revertSettings = (dispatch: Dispatch<IAction>, timer: TimerType) =>
  dispatch({ type: ActionType.revertSettings, timer: timer });

import { ActionCreater } from ".";
import { Moments } from "../store";

export const HAPPY = "happy";
export const SAD = "sad";
export const DELETE = "delete";

export const happyAction: ActionCreater<Moments> = (
  intensity: number,
  time: string
) => ({
  type: HAPPY,
  payload: { intensity, time },
});
export const sadAction: ActionCreater<Moments> = (
  intensity: number,
  time: string
) => ({
  type: SAD,
  payload: { intensity, time },
});
export const deleteAction = {
  type: DELETE,
};

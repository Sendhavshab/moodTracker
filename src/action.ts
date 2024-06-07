export const HAPPY = "happy";
export  const SAD = "sad"



export const happyAction = (intentsity: number, time: string) => ({
  type: HAPPY,
  payload: { intentsity: intentsity, time: time },
});
export const sadAction = (intentsity: number, time: string) => ({
  type: SAD,
  payload: { intentsity: intentsity, time: time },
});
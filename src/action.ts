export const HAPPY = "happy";
export  const SAD = "sad"



export const happyAction = (count : any ) => ( {
    type : HAPPY ,
    payload: count
})
export const sadAction = (count: number) => ({
  type: SAD,
  payload: count,
});
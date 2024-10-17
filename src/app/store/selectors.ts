import type { RootState } from "./store";

export const selectAnswers = (state: RootState) => state.answers.answers
export const selectCurQuestion = (state: RootState) => state.answers.curQuestion
export const selectQuestions = (state: RootState) => state.answers.questions
export const selectTime = (state: RootState) => state.answers.curQuestion?.time
export const selectIsFailed = (state: RootState) => state.answers.isFailed
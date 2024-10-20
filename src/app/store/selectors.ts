import type { RootState } from "./store";

export const selectAnswers = (state: RootState) => state.test.answers
export const selectCurQuestion = (state: RootState) => state.test.curQuestion
export const selectQuestions = (state: RootState) => state.test.questions.data
export const selectTime = (state: RootState) => state.test.curQuestion?.time
export const selectIsTimeOver = (state: RootState) => state.test.isTimeOver
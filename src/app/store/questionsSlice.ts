import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { IQuestion, IAnswer } from "../../models/models"

interface AnswerState {
  questions: IQuestion[]
  answers: IAnswer[]
  curQuestion: IQuestion | null
}

const initialState: AnswerState = {
  answers: [],
  questions: [],
  curQuestion: null,
}

export const questionsSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload
    },
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.answers.push(action.payload)
    },
    resetAnswers: state => {
      state.answers = []
    },
    setCurrentQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.curQuestion = action.payload
    },
  },
})

export const { addAnswer, setCurrentQuestion, setQuestions, resetAnswers } =
  questionsSlice.actions

export default questionsSlice.reducer

import type { PayloadAction } from "@reduxjs/toolkit"; 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import type { IQuestion, IAnswer } from "../../models/models"; 
import questionsList from "../../db"; 

interface AnswerState { 
  questions: { data: IQuestion[], isLoading: boolean, isError: boolean }; 
  answers: IAnswer[]; 
  curQuestion: IQuestion | null; 
  isTimeOver: boolean;  
} 

const initialState: AnswerState = { 
  answers: [], 
  questions: { data: [], isLoading: false, isError: false }, 
  curQuestion: null, 
  isTimeOver: false 
};

export const fetchData = createAsyncThunk<IQuestion[], void>(
  'test/fetchData', 
  async () => { 
    return new Promise((resolve) => { 
      setTimeout(() => { 
        resolve(questionsList); 
      }, 500); 
    }); 
  }
); 

export const questionsSlice = createSlice({ 
  name: "test", 
  initialState, 
  reducers: { 
    resetState: state => { 
      Object.assign(state, initialState); 
    }, 
    setQuestions: (state, action: PayloadAction<IQuestion[]>) => { 
      state.questions.data = action.payload; 
    }, 
    addAnswer: (state, action: PayloadAction<IAnswer>) => { 
      state.answers.push(action.payload); 
    }, 
    resetAnswers: state => { 
      state.answers = []; 
    }, 
    setCurrentQuestion: (state, action: PayloadAction<IQuestion>) => { 
      state.curQuestion = action.payload; 
    }, 
    setIsTimeOver: (state, action: PayloadAction<boolean>) => { 
      state.isTimeOver = action.payload; 
    }, 
  }, 
  extraReducers: (builder) => { 
    builder 
      .addCase(fetchData.pending, (state) => { 
        state.questions.isLoading = true; 
      }) 
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<IQuestion[]>) => { 
        state.questions.isLoading = false
        state.questions.data = action.payload
        state.curQuestion = action.payload[0]
      }) 
      .addCase(fetchData.rejected, (state) => { 
        state.questions.isLoading = false
        state.questions.isError = true
      }); 
  }, 
}); 

export const { addAnswer, setCurrentQuestion, setQuestions, resetAnswers, setIsTimeOver, resetState } = 
  questionsSlice.actions; 

export default questionsSlice.reducer; 

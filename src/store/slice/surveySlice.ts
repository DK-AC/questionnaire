import { surveySelectors } from '@/store/selectors/surveySelectors'
import { SurveyState } from '@/store/types/SurveyShema'
import { Nullable } from '@/types/nullable'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: SurveyState = {
  answers: [],
  currentStep: 0,
  isAnswerCorrect: false,
  isShowSnackbar: false,
  selectedAnswer: null,
}

const surveySlice = createSlice({
  initialState,
  name: 'survey',
  reducers: {
    changeCurrentStep: state => {
      state.currentStep++
    },
    setAnswers: (state, action: PayloadAction<{ answer: string }>) => {
      state.answers.push(action.payload.answer)
    },
    setIsAnswerCorrect: (state, action: PayloadAction<{ isCorrect: boolean }>) => {
      state.isAnswerCorrect = action.payload.isCorrect
    },
    setIsShowSnackbar: (state, action: PayloadAction<{ isShow: boolean }>) => {
      state.isShowSnackbar = action.payload.isShow
    },
    setSelectedAnswer: (state, action: PayloadAction<{ answer: Nullable<string> }>) => {
      state.selectedAnswer = action.payload.answer
    },
  },
  selectors: surveySelectors,
})

export const {
  changeCurrentStep,
  setAnswers,
  setIsAnswerCorrect,
  setIsShowSnackbar,
  setSelectedAnswer,
} = surveySlice.actions

export const {
  selectAnswer,
  selectAnswers,
  selectCurrentStep,
  selectIsAnswerCorrect,
  selectIsShowSnackbar,
} = surveySlice.selectors

export const { reducer: surveyReducer } = surveySlice

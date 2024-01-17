import { store } from '@/store/store'
import { Nullable } from '@/types/nullable'

export type SurveyState = {
  answers: string[]
  currentStep: number
  isAnswerCorrect: boolean
  isShowSnackbar: boolean
  selectedAnswer: Nullable<string>
}

export type AppDispatch = typeof store.dispatch

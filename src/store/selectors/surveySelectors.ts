import { SurveyState } from '@/store/types/SurveyShema'

export const surveySelectors = {
  selectAnswer: (state: SurveyState) => state.selectedAnswer,
  selectAnswers: (state: SurveyState) => state.answers,
  selectCurrentStep: (state: SurveyState) => state.currentStep,
  selectIsAnswerCorrect: (state: SurveyState) => state.isAnswerCorrect,
  selectIsShowSnackbar: (state: SurveyState) => state.isShowSnackbar,
}

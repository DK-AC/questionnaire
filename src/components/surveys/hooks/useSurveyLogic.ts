import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoutePath } from '@/config/routeConfig'
import { useAppDispatch } from '@/store/hooks/hooks'
import {
  changeCurrentStep,
  resetState,
  selectAnswer,
  selectCurrentStep,
  selectIsAnswerCorrect,
  selectIsShowSnackbar,
  setAnswers,
  setIsAnswerCorrect,
  setIsShowSnackbar,
  setSelectedAnswer,
} from '@/store/slice/surveySlice'

import steps from './../../../../steps.json'

export const useSurveyLogic = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const currentStep = useSelector(selectCurrentStep)
  const selectedAnswer = useSelector(selectAnswer)
  const isShowSnackbar = useSelector(selectIsShowSnackbar)
  const isAnswerCorrect = useSelector(selectIsAnswerCorrect)

  const { correctAnswer, options, question } = steps[currentStep]

  const handleAnswer = (answer: string) => dispatch(setSelectedAnswer({ answer }))

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      dispatch(setAnswers({ answer: selectedAnswer }))
    }

    const isCorrect = selectedAnswer === correctAnswer

    dispatch(setIsAnswerCorrect({ isCorrect }))
    dispatch(setIsShowSnackbar({ isShow: true }))
    dispatch(changeCurrentStep())
    dispatch(setSelectedAnswer({ answer: null }))

    if (currentStep + 1 === 4) {
      navigate(RoutePath.GAME)
      dispatch(resetState())
    }
  }

  const handleSnackbarClose = () => dispatch(setIsShowSnackbar({ isShow: false }))

  return {
    handleAnswer,
    handleSnackbarClose,
    handleSubmit,
    isAnswerCorrect,
    isShowSnackbar,
    options,
    question,
    selectedAnswer,
  }
}

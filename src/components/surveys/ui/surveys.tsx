import { CustomizedSnackbars } from '@/components/errorSnackbar/errorSnackbar'
import { QuestionCard } from '@/components/questionCard/questionCard'
import { useSurveyLogic } from '@/components/surveys/hooks/useSurveyLogic'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

const Surveys = () => {
  const {
    handleAnswer,
    handleSnackbarClose,
    handleSubmit,
    isAnswerCorrect,
    isShowSnackbar,
    options,
    question,
    selectedAnswer,
  } = useSurveyLogic()

  return (
    <QuestionCard
      onOptionChange={handleAnswer}
      options={options}
      question={question}
      selectedAnswer={selectedAnswer}
    >
      <CardActions>
        <Button
          disabled={selectedAnswer === null}
          fullWidth
          onClick={handleSubmit}
          size={'small'}
          type={'submit'}
          variant={'contained'}
        >
          Продолжить
        </Button>
      </CardActions>
      <CustomizedSnackbars
        isAnswerCorrect={isAnswerCorrect}
        onClose={handleSnackbarClose}
        open={isShowSnackbar}
      />
    </QuestionCard>
  )
}

export default Surveys

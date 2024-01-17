import { useNavigate } from 'react-router-dom'

import { RoutePath } from '@/config/routeConfig'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import cls from './result.module.scss'

import questionsData from './../../../../steps.json'

const Result = () => {
  const navigate = useNavigate()

  const handleGoSurvey = () => {
    navigate(RoutePath.SURVEY)
  }

  const handleGoHome = () => {
    navigate(RoutePath.HOME)
  }

  const renderResults = questionsData.map(({ correctAnswer, question }, index) => (
    <Box className={cls.resultItem} key={index}>
      <Typography variant={'h6'}>{`Вопрос ${index + 1}: ${question}`}</Typography>
      <Typography variant={'body1'}>{`Правильный ответ: ${correctAnswer}`}</Typography>
    </Box>
  ))

  return (
    <Box className={cls.result}>
      <Typography className={cls.title} component={'h1'} gutterBottom variant={'h4'}>
        Результаты опроса
      </Typography>
      {renderResults}
      <div className={cls.btnBox}>
        <Button className={cls.button} onClick={handleGoSurvey} variant={'contained'}>
          Пройти опрос заново
        </Button>
        <Button className={cls.button} onClick={handleGoHome} variant={'contained'}>
          Выйти
        </Button>
      </div>
    </Box>
  )
}

export default Result

import { ReactNode } from 'react'

import { AnswerOptions } from '@/components/answerOptions/answerOptions'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import cls from './questionCard.module.scss'

type Props = {
  children: ReactNode
  onOptionChange: (answer: string) => void
  options: string[]
  question: string
  selectedAnswer: null | string
}

export const QuestionCard = (props: Props) => {
  const { children, onOptionChange, options, question, selectedAnswer } = props

  return (
    <Card className={cls.card} variant={'outlined'}>
      <CardContent className={cls.content}>
        <Typography className={cls.title} component={'h5'} variant={'h5'}>
          {question}
        </Typography>
        <AnswerOptions
          onOptionChange={onOptionChange}
          options={options}
          selectedAnswer={selectedAnswer}
        />
      </CardContent>
      {children}
    </Card>
  )
}

import { ChangeEvent } from 'react'

import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'

import { AnswerOption } from './answerOption/answerOption'

type Props = {
  onOptionChange: (answer: string) => void
  options: string[]
  selectedAnswer: null | string
}

export const AnswerOptions = (props: Props) => {
  const { onOptionChange, options, selectedAnswer } = props

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => onOptionChange(e.target.value)

  const mappedOptions = options.map((option, index) => <AnswerOption key={index} option={option} />)

  return (
    <FormControl component={'fieldset'}>
      <RadioGroup
        aria-label={'question'}
        name={'question'}
        onChange={handleOptionChange}
        value={selectedAnswer}
      >
        {mappedOptions}
      </RadioGroup>
    </FormControl>
  )
}

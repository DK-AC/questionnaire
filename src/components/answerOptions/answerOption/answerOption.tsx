import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

type Props = {
  option: string
}

export const AnswerOption = ({ option }: Props) => {
  return <FormControlLabel control={<Radio size={'small'} />} label={option} value={option} />
}

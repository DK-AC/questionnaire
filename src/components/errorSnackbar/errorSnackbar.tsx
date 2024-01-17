import * as React from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'

import cls from './errorSnackbar.module.scss'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant={'filled'} {...props} />
})

type Props = {
  isAnswerCorrect: boolean
  onClose: () => void
  open: boolean
}

export const CustomizedSnackbars = (props: Props) => {
  const { isAnswerCorrect, onClose, open } = props

  const handleClose = (_: Event | React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }

  const alertSeverity = isAnswerCorrect ? 'success' : 'error'
  const alertMessage = isAnswerCorrect ? 'Вы ответили правильно!' : 'Вы ответили неправильно!'

  return (
    <Stack className={cls.stack} spacing={2}>
      <Snackbar autoHideDuration={1000} onClose={handleClose} open={open}>
        <Alert className={cls.alert} onClose={handleClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

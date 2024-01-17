import { Suspense } from 'react'

import { AppRouter } from '@/AppRouter'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import cls from './app.module.scss'

export const App = () => {
  return (
    <Suspense fallback={''}>
      <Container className={cls.box} maxWidth={'sm'}>
        <Box className={cls.box}>
          <AppRouter />
        </Box>
      </Container>
    </Suspense>
  )
}

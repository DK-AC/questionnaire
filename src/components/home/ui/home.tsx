import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { RoutePath } from '@/config/routeConfig'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import cls from './home.module.scss'

const Home = () => {
  const [ready, setReady] = useState(false)

  const handleReady = () => {
    setReady(true)
  }

  if (ready) {
    return <Navigate to={RoutePath.SURVEY} />
  }

  return (
    <Box className={cls.home}>
      <Typography className={cls.title} component={'h1'} gutterBottom variant={'h4'}>
        Готовы пройти опрос?
      </Typography>
      <Button className={cls.button} onClick={handleReady} variant={'contained'}>
        Готов
      </Button>
    </Box>
  )
}

export default Home

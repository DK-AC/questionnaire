import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '@/config/routeConfig'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route
          element={
            <Suspense
              fallback={
                <Box sx={{ width: '100%' }}>
                  <CircularProgress color={'warning'} />
                </Box>
              }
            >
              {element}
            </Suspense>
          }
          key={path}
          path={path}
        />
      ))}
    </Routes>
  )
}

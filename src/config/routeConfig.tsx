import { ReactNode } from 'react'

import { ScratchGame } from '@/components/game'
import { Home } from '@/components/home'
import { Result } from '@/components/result'
import { Surveys } from '@/components/surveys'

export enum RoutePath {
  GAME = '/game',
  HOME = '/',
  NOT_FOUND = '*',
  RESULT = '/result',
  SURVEY = '/survey',
}

type RouteConfigType = {
  element: ReactNode
  path: RoutePath
}

export const routeConfig: RouteConfigType[] = [
  { element: <Home />, path: RoutePath.HOME },
  { element: <Surveys />, path: RoutePath.SURVEY },
  { element: <ScratchGame />, path: RoutePath.GAME },
  { element: <Result />, path: RoutePath.RESULT },
  { element: <div>not found</div>, path: RoutePath.NOT_FOUND },
]

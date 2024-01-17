import { surveyReducer } from '@/store/slice/surveySlice'
import { Tuple, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

export const store = configureStore({
  middleware: () => new Tuple(thunk),
  reducer: {
    survey: surveyReducer,
  },
})

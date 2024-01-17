import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/store/types/SurveyShema'

export const useAppDispatch: () => AppDispatch = useDispatch

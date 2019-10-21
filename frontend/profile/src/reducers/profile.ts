import { createReducer } from '@utils/reducer'
import * as actions from '../constants/profile'

const initialState = {
  firstName: '',
  lastName: '',
}

export default createReducer(initialState, {
  [actions.set]: (state, { profile }) => ({
    ...profile,
  }),
})

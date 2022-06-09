import { combineReducers } from 'redux'
import auth from './authReducer'
import chat from './chatReducer'

const root = combineReducers({
    auth,chat
})
export default root
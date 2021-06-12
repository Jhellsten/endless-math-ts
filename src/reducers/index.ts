import { combineReducers } from 'redux'
import categories from './categories'
import settings from './settings'
import game from './game'
import error from './error'
import user, { userSelector } from './user'

const index = combineReducers({
    game,
    categories,
    settings,
    error,
    user
})

export default index

export { userSelector }

import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import RootNav from '../../navigation/RootNavigator'
import reducerTodo from './../reducers/reducerTodo'

const reduceRouter = createNavigationReducer(RootNav)

const appReducer = combineReducers({
    router: reduceRouter,
    todo: reducerTodo
})

export default appReducer
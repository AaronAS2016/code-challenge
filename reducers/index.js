import { coreData } from './core-data'

import { modal } from './modal'

import { navigation } from './navigation'

import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    coreData,
    modal,
    navigation
})

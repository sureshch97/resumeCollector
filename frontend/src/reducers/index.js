import { combineReducers } from 'redux'
import { profileReducer } from './contact/profilereducer'




export default combineReducers({

    profile: profileReducer,


});
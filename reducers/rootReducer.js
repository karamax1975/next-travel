import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import wiget_SearchTours from './wiget_SearchTours';
import popularOffers from './popularOffers';
import wiget_authorization from './wiget_authorization';
import userTours from './userTours';

export default combineReducers({
    wiget_SearchTours,
    popularOffers,
    wiget_authorization,
    form:formReducer,
    userTours
})
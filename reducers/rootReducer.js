import {combineReducers} from 'redux';

import wiget_SearchTours from './wiget_SearchTours';
import popularOffers from './popularOffers';

export default combineReducers({
    wiget_SearchTours,
    popularOffers
})
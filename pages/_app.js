import '../style/reset.css';
import '../style/bootstrap-grid.min.css';
import '../style/style.scss';
import { Provider } from "react-redux";
import {createStore} from 'redux';

import combineReducers from '../reducers/rootReducer';


const store = createStore(combineReducers);

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
  );
}

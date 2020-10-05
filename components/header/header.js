import Link from "next/link";
import HeaderAccount from "./account";
import Nav from "./nav";
import { useDispatch } from 'react-redux';
import { SET_SEARCH, SET_COUNTRY, SET_TYPE, SET_DATE, SET_ADULTS, SET_CHILD, CLEAR_TAGS } from '../../reducers/actions/action_wigetSearcTour';
import config from './../../config.json';


export function Header({ title }) {

  // const dispatch = useDispatch();

  // function resetAllFilters() {
  //   dispatch(SET_SEARCH(false))
  //   dispatch(SET_ADULTS(config.adults))
  //   dispatch(SET_CHILD(config.child))
  //   dispatch(SET_COUNTRY(null))
  //   dispatch(SET_TYPE(null))
  //   dispatch(CLEAR_TAGS())
  // }

  const Header = () => {
    const classHeader = title=="Index"?"header index":"header"
    return (
      <header className={classHeader}>
        <div className="container">
          <div className="row">
            <div className="header">
              <Link href={"/"}>
                <a >
                  <div className="brandName">
                    <h1>Brand</h1>
                    <h1>Name</h1>
                  </div>
                </a>
              </Link>
              <Nav />
              <div className="userPanel">
                <Link href={"#"}>
                  <a className="actions">Акции</a>
                </Link>
                <HeaderAccount />
              </div>
            </div>
          </div>
        </div>

      </header>
    )
  }


  return (
    <Header/>
  );
}

import Link from "next/link";
import HeaderAccount from "./account";
import Nav from "./nav";
import style from "./header.module.scss";
import { useDispatch } from 'react-redux';
import { SET_SEARCH, SET_COUNTRY, SET_TYPE, SET_DATE, SET_ADULTS, SET_CHILD } from '../../reducers/actions/action_wigetSearcTour'

export function Header({ title }) {

  const dispatch = useDispatch();

  function resetFilters() {
    dispatch(SET_SEARCH(false))
    dispatch(SET_ADULTS(2))
    dispatch(SET_CHILD(0))
    dispatch(SET_COUNTRY(''))
    dispatch(SET_TYPE(''))
    dispatch(SET_DATE(''))
  }

  const IndexHeader = () => {
    const classHeader = title=="Index"?"header index":"header"
    return (
      <header className={classHeader}>
        <div className="container">
          <div className="row">
            <div className={`col ${style.headerIndex}`}>
              <Link href={"/"}>
                <a onClick={resetFilters}>
                  <div className={style.brandName}>
                    <h1>Brand</h1>
                    <h1>Name</h1>
                  </div>
                </a>
              </Link>
              <Nav />
              <div className={style.userPanel}>
                <Link href={"#"}>
                  <a className={style.actions}>Акции</a>
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
    <IndexHeader/>
  );
}

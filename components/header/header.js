import Link from "next/link";
import HeaderAccount from "./account";
import Nav from "./nav";
import style from "./header.module.scss";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className={`col ${style.headerIndex}`}>
            <Link href={"/"}>
              <a>
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
  );
}

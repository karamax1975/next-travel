import Link from "next/link";
import style from './header.module.scss';

export default function HeaderAccount() {
  return (
    <div className={style.headerAccount}>
      <Link href="/about"><a>Личный кабинет</a></Link>
      <img src="/img/index_account-icon.svg" alt="my image" />
    </div>
  );
}

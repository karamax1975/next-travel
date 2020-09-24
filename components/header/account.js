import Link from "next/link";

export default function HeaderAccount() {
  return (
    <div className="headerAccount">
      <Link href="/about"><a>Личный кабинет</a></Link>
      <img src="/img/index_account-icon.svg" alt="my image" />
    </div>
  );
}

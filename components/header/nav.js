import Link from 'next/link';
import style from './header.module.scss';

export default function Nav() {
  return (
    <nav className={style.headerNav}>
      <Link href={"/about"}><a>О нас</a></Link>
      <Link href={"/tours"}><a>Туры</a></Link>
      <Link href={"/about"}><a>Календарь</a></Link>
      <Link href={"/about"}><a>Отели</a></Link>
      <Link href={"/about"}><a>Туристам</a></Link>
      <Link href={"/about"}><a>Агенствам</a></Link>
      <Link href={"/about"}><a>Блог</a></Link>
    </nav>
  );
}

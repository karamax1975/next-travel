import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import style from './header.module.scss';

export default function Nav() {
  const [flagOn, setFlagOn] = useState(false);
  const [headerClass, setHeaderClass] = useState('header-nav');
  const [navLinkClass, setNavLinkClass] = useState('nav_link hidden');
  const navRef = useRef(null);

  useEffect(() => {
    flagOn ? setHeaderClass('header-nav active') : setHeaderClass('header-nav');
    flagOn ? setNavLinkClass('nav_link') : setNavLinkClass('nav_link hidden');
  }, [flagOn])

  useEffect(()=>{
    document.body.addEventListener('click', (e)=>{
      if(navRef.current!==null){
        if (!navRef.current.contains(e.target)) {
          setFlagOn(false)
        }
      }
    })
  }, [navRef])

  function showNavLink() {
    setFlagOn(!flagOn)
  }

  return (
    <nav className={headerClass}
      onClick={showNavLink}
      ref={navRef}
      >
      <div className={navLinkClass}>
        <div className="link_wrapper">
          <Link href={"/about"}><a>О нас</a></Link>
          <Link href={"/tours"}><a>Туры</a></Link>
          <Link href={"/about"}><a>Календарь</a></Link>
          <Link href={"/about"}><a>Отели</a></Link>
          <Link href={"/about"}><a>Туристам</a></Link>
          <Link href={"/about"}><a>Агенствам</a></Link>
          <Link href={"/about"}><a>Блог</a></Link>
        </div>
      </div>
      <button className="nav_hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

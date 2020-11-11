import Link from 'next/link';


export default function ButtonLink({link, name, classN}){

  return (
    <button className={`btn-link ${classN}`}>
      <Link href={`/${link}`}><a><span>{name}</span></a></Link>
    </button>
  )
}
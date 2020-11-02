import Link from 'next/link';


export default function ButtonLink({link, name}){

  return (
    <button>
      <Link href={`/${link}`}><a><span>{name}</span></a></Link>
    </button>
  )
}
export default function ButtonMore({ name, callBack, classN='' }) {


  return (
    <button className={`LoadMore ${classN}`}
      onClick={(e)=>callBack(e)}>{name}
    </button>
  )
}
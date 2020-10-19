export default function ButtonMore({ name, callBack }) {


  return (
    <button className="LoadMore"
      onClick={(e)=>callBack(e)}>{name}
    </button>
  )
}
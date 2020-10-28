

export default function ListUserTours ({ tours }){
  function activeTour(){
    
  }

  const list = tours.map(item => {
    
    return (
      <div className="item_userTour" key={item._id}>
        <div className="item_userTour__activity" _id={item._id}>
          <span>{item.activity ? 'активно' : 'не активно'}</span>
        </div>
        <div className="item_userTour__countru">
          <h5>{item.country}</h5>
        </div>
      </div>
    )
  })

  return (
    <div className="list_userTours">{list}</div>
  )
}
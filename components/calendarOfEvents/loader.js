export default function Loader() {




  const arrItem = new Array(6).fill(0);

  return (
    <div className="CalendarOfEvents-loader row">
      {arrItem.map((item, index) => {
        return (
          <div className='CalendarOfEvents-host__item col-lg-4' key={index} >
            <div className="host-item_event__img"></div>
            <div className="host-item_event__content">
              <div className="host-row"></div>
              <div className="host-row"></div>
            </div>
          </div>
        )
      })}
    </div >
  )
}
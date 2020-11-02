import { useState, useEffect, useRef } from "react";

export default function titleFilter({ plaseholder = 'Заголовок', data = [], action}) {

  const [flag, setFlag] = useState(false);
  const filterRef = useRef(null);

  function selectFilter(element) {
    action(element);

  }

  function outSideClick(e) {
    if (filterRef.current !== null) {
      if (!filterRef.current.contains(e.target)) {
        setFlag(false)
      }
    }

  }

 


  useEffect(() => {
    window.addEventListener('click', (e) => outSideClick(e))
    return () => { window.removeEventListener('click', (e) => outSideClick(e)) }
  }, [])


  return (
    <div className={!flag ? 'titleFilter' : "titleFilter active"} ref={filterRef}>
      <div className="titleFilter_head">
        <div className="titleFilter_head__filter" onClick={() => setFlag(!flag)}>
          <span>{plaseholder}</span>
          <div className="titleFilter_head__icon">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 1L4.5 5L8 1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="titleFilter_dropDown" onClick={() => setFlag(!flag)}>
        <div className="titleFilter_dropDown__list">
          {data.map((item, index) => {
            return (
              <div key={index} className="dropDown__item" onClick={() => selectFilter(item)}>
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}
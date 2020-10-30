import { useState, useEffect, useRef } from "react";

export default function titleFilter({ plaseholder = 'Заголовок', data = [], action, actionReset }) {

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
        <div className="reset-filter" onClick={actionReset}>
          <svg viewBox="0 0 10 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.98789 0.567054C1.59776 0.176131 0.9646 0.175483 0.573676 0.565608C0.182753 0.955733 0.182106 1.5889 0.572231 1.97982L3.58723 5.00099L0.574436 8.01995C0.184311 8.41087 0.184958 9.04404 0.575882 9.43416C0.966805 9.82429 1.59997 9.82364 1.99009 9.43272L5 6.41665L8.00991 9.43272C8.40003 9.82364 9.0332 9.82429 9.42412 9.43416C9.81504 9.04404 9.81569 8.41087 9.42556 8.01995L6.41277 5.00099L9.42777 1.97982C9.81789 1.5889 9.81725 0.955733 9.42632 0.565608C9.0354 0.175483 8.40224 0.176131 8.01211 0.567054L5 3.58533L1.98789 0.567054Z" />
          </svg>
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
import React, { useState, useEffect } from "react";
import getDate from "./date";

export default function calendar({getUserSelect, placeholder }) {


  const [onDropDown, setOnDropDown] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [mount, setMount] = useState(new Date().getMonth());
  const [navClass, setNavClass] = useState("calendar_nav_prev stop");
  const [selected, setSelected]=useState(false);
  let arrMount = getDate(year, mount);

  const dropPanelRef = React.createRef();

  const externalClick=(e)=>{
    if (
      dropPanelRef.current !== null &&
      !dropPanelRef.current.contains(e.target)
    )
      setOnDropDown(false)
  }

  useEffect(() => {
    document.body.addEventListener("click", externalClick);
    return ()=>{
      document.body.removeEventListener('click', externalClick)
    }
  });

  function prevMount() {
    // предыдущий месяц

    setOnDropDown(true);
    setMount(mount - 1);

    if (mount <= 0) {
      setMount(11);
      setYear(year - 1);
    }
    // не дает переключать месяц ниже сегодняшнего месяца
    else if (
      mount <= new Date().getMonth() &&
      year <= new Date().getFullYear()
    ) {
      setMount(new Date().getMonth());
      setNavClass(`calendar_nav_prev stop`);
    }
  }

  function nextMount() {
    setOnDropDown(true);
    setMount(mount + 1);
    setNavClass(`calendar_nav_prev`);
    if (mount > 10) {
      setMount(0);
      setYear(year + 1);
    }
  }
  const key=Object.keys(arrMount.days);
  const arrDay = arrMount.days.map((item, index) => {
    const itemClassName = +item.slice(3, 5) - 1 !== mount?'day gray':'day';
    return <span key={key[index]} className={itemClassName} data-value={item}>{item.slice(0,2)}</span>;
  });


  const userSelectedDay=(e)=>{
    getUserSelect(e);
    setSelected(true);
  }

  if (!onDropDown) {

    const selectedClass =selected?'input selected':'input';
    return (
      <div className="input-wrapper">
        <div className={selectedClass} onClick={()=>setOnDropDown(true)}>
          <span>{placeholder}</span>
          <div className="input_icon">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 1L4.5 5L8 1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="input-wrapper" ref={dropPanelRef}>
        <div className="input">
          <span>{placeholder}</span>
          <div className="input_icon" onClick={()=>setOnDropDown(false)}>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 5L4.5 1L8 5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="calendar" onClick={(e)=> userSelectedDay(e)}>
          <div className="calendar_title">
            <span>
              {arrMount.mount} {arrMount.year}
            </span>
          </div>
          <div className="calendar_nav">
            <div className={navClass} onClick={prevMount}>
              <svg width="58" height="10" viewBox="0 0 58 10" fill="none">
                <path d="M2.04897 5.37025L6.08203 9L5.41307 9.74329L0.413067 5.24329L0.000125885 4.87165L0.413067 4.5L5.41307 0L6.08203 0.743294L2.05208 4.37025H58V5.37025H2.04897Z" />
              </svg>
            </div>
            <div className="calendar_nav_next" onClick={nextMount}>
              <svg width="58" height="10" viewBox="0 0 58 10" fill="none">
                <path d="M55.951 5.37025L51.918 9L52.5869 9.74329L57.5869 5.24329L57.9999 4.87165L57.5869 4.5L52.5869 0L51.918 0.743294L55.9479 4.37025H0V5.37025H55.951Z" />
              </svg>
            </div>
          </div>
          <div className="calendar_week">
            <span>Пн</span>
            <span>Вт</span>
            <span>Ср</span>
            <span>Чт</span>
            <span>Пт</span>
            <span>Сб</span>
            <span>Вс</span>
          </div>
          <div className="calendar_content" onClick={()=>setOnDropDown(false)}>
            {arrDay}
          </div>
        </div>
      </div>
    );
}

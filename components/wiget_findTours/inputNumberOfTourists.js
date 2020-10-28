import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'


import { INC_CHILD, DEC_CHILD, INC_ADULT, DEC_ADULT } from '../../reducers/actions/action_wigetSearcTour'

export default function inputNumberOfTourists({ name, children, adults }) {

  const dispath = useDispatch()

  const [flag, setFlag] = useState(false)



  const myRef = useRef();


  function externalClick(e) {
    if (myRef.current != null)
      if (!myRef.current.contains(e.target)) {
        setFlag(false)
      }
  }


  useEffect(() => {
    document.body.addEventListener('click', externalClick)
    return () => {
      document.body.removeEventListener('click', externalClick)
    }
  }, [flag])



  if (!flag) {
    return (
      <div className="input-wrapper">
        <div className="input selected" onClick={() => setFlag(true)}>
          <span>{name}</span>
          <div className="input_icon">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 1L4.5 5L8 1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="input-wrapper" ref={myRef}>
        <div className="input selected">
          <span>{name}</span>
          <div className="input_icon" onClick={() => setFlag(false)}>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 5L4.5 1L8 5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="select-tourist">
          <div className="tourist">
            <span className="tourist_title">Взрослые</span>
            <div className="tourist_button"
              onClick={() => dispath(DEC_ADULT())}>–
                        </div>
            <span className="tourist_number">{adults}</span>
            <div className="tourist_button"
              onClick={() => dispath(INC_ADULT())}>+
                        </div>
          </div>
          <div className="tourist">
            <span className="tourist_title">Дети до 6 лет</span>
            <div className="tourist_button"
              onClick={() => dispath(DEC_CHILD())}>–
                        </div>
            <span className="tourist_number">{children}</span>
            <div className="tourist_button"
              onClick={() => dispath(INC_CHILD())}>+
                        </div>
          </div>
        </div>
      </div>
    )
  }

}
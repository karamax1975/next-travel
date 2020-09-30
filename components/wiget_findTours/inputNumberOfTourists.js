import React, { useState, useRef, useEffect } from 'react';



export default function inputNumberOfTourists({ name, getUserSelect }) {
    const [state, setState] = useState({
        dropDown: false,
        adult: 2,
        child:0
    })
    

    const myRef = useRef();

    function externalClick(e) {
        if (myRef.current != null)
            if (!myRef.current.contains(e.target)) {
                setState(old => {
                    return {
                        ...old,
                        dropDown: false
                    }
                })
                getUserSelect(state.adult, state.child);
            }
    }
    useEffect(() => {
        document.body.addEventListener('click', externalClick)
        return () => {
            document.body.removeEventListener('click', externalClick)
        }
    }, [myRef, state.adult, state.child])

    function increaseAdult(){
        if(state.adult>1){
            setState(old=>{
                return{
                    ...old,
                    adult:state.adult-1
                }
            })
        }
    }

    function decreaseAdult(){
        if(state.adult<6){
            setState(old=>{
                return{
                    ...old,
                    adult:state.adult+1
                }
            })
        }
    }
    function increaseChild(){
        if(state.child>0){
            setState(old=>{
                return{
                    ...old,
                    child:state.child-1
                }
            })
        }
    }

    function decreaseChild(){
        if(state.child<6){
            setState(old=>{
                return{
                    ...old,
                    child:state.child+1
                }
            })
        }
    }

    function onClickDropDown() {
        onOf();
    }

    function onOf() {
        setState(old => {
            return {
                ...old,
                dropDown: !state.dropDown
            }
        })
    }
    if (!state.dropDown) {
        return (
            <div className="input-wrapper">
                <div className="input selected" onClick={onClickDropDown}>
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
                    <div className="input_icon" onClick={onClickDropDown}>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M1 5L4.5 1L8 5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <div className="select-tourist">
                    <div className="tourist">
                        <span className="tourist_title">Взрослые</span>
                        <div className="tourist_button" 
                            onClick={increaseAdult}>–
                        </div>
                        <span className="tourist_number">{state.adult}</span>
                        <div className="tourist_button"
                            onClick={decreaseAdult}>+
                        </div>
                    </div>
                    <div className="tourist">
                    <span className="tourist_title">Дети до 6 лет</span>
                        <div className="tourist_button" 
                            onClick={increaseChild}>–
                        </div>
                        <span className="tourist_number">{state.child}</span>
                        <div className="tourist_button"
                            onClick={decreaseChild}>+
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
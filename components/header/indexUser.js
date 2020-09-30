import { useEffect, useRef, useState } from 'react';
import resizeContainer from './resizeContainer';


import UserCity from '../header/userCity'
import {Fb_gray, Instagram, Vk} from '../socialIcons/linkSocial_Icons';

export default function indexUser(){
    const [posRight, setPosRight] = useState(0);

    useEffect(() => {
        
        const bodyWidth = document.body.clientWidth;
        setPosRight(Math.round(Number(bodyWidth - resizeContainer(bodyWidth)) / 2 ))
    },[])


    useEffect(()=>{
        window.addEventListener(`resize`, ()=>{    
            const bodyWidth = document.body.clientWidth;
            setPosRight(Math.round(Number(bodyWidth - resizeContainer(bodyWidth)) / 2 ))
        })
    },[posRight])


    return (
        <div className="getUserCity" style={{right:`${posRight}px`}}>
            <div className="contact">
                <UserCity/>
                <div className="contact_phone" >
                    <span>Бесплатная горячая линия:</span>
                    <a href="tel:+788006000001"><h6 >+7 8 800 600 00 01</h6></a>
                </div>
            </div>
            
            <ul className="adressSocial">
                <li><Fb_gray color={'gray'}/></li>
                <li><Instagram color={'gray'}/></li>
                <li><Vk color={'gray'}/></li>
            </ul>
        </div>
    )
}
import { useEffect, useState } from 'react';


export default function indexUser(){
    const [posRight, setPosRight] = useState(0);

    useEffect(() => {
        
        const bodyWidth = document.body.clientWidth;

        // console.log(bodyWidth);
        let container = 1320;
        if (bodyWidth > 1400) {
            container = 1320;
        }
        console.log(container);
        if (bodyWidth > 1200 && bodyWidth < 1400) {
            container = 1140;
        }
        setPosRight(Math.round(Number(document.body.clientWidth - container) / 2 ))
        

    },[])

    return (
        <div className="getUserCity" style={{right:`${posRight}px`}}>
            <div className="selectUserCity">
                fdddfd
            </div>
            <div className="sharingSocial">
                sdssdsds
            </div>
        </div>
    )
}
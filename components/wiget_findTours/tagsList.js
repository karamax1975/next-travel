import { useEffect, useState } from 'react';
import TagItem from './tagItem';

export default function TagsList (){

    const [arrTags, setArrTags]=useState([]);

    useEffect(()=>{
        async function getTags(){
            const response = await fetch('/api/tours');
            return response.json()
        }
        getTags().then(tours=>{
            let str=''
            tours.forEach(element => {
                if(element.tags!=='')
                str+=`${element.tags},`;
            });
            const arr = Array.from(new Set(str.split(','))).filter(item=>item!=='')
            setArrTags(arr)
            
        })
    },[])

    const tagsList= arrTags.map((tag, index)=>{
        return (
            <TagItem key={index} tag={tag}/>
        )
    })

    return (
        <div className="tagsList">
            {tagsList}
        </div>
    )

}
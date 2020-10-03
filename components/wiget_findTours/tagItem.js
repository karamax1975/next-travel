import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {ADD_TAG, DEL_TAG} from './../../reducers/actions/action_wigetSearcTour';

export default function TagItem({ tag }) {
    const [tagActive, setTagActive]=useState(false);
    const dispatch = useDispatch();
    
    function Click(){
        setTagActive(!tagActive);
        if(!tagActive){
           dispatch(ADD_TAG(tag)) 
        }
        else dispatch(DEL_TAG(tag))
        
    }

    return (
        <div className={!tagActive?'tagItem':'tagItem active'} onClick={Click}>{tag}</div>
    )
}
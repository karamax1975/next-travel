export const SET_SEARCH= (payload)=>{
    return {
        type:'SEARCH', payload:payload
    }
}
export const SET_COUNTRY=(payload)=>{
    return{
        type:'SET_COUNTRY', payload:payload
    }
}
export const SET_TYPE=(payload)=>{
    return{
        type:'SET_TYPE', payload:payload
    }
}
export const SET_DATE=(payload)=>{
    return{
        type:'SET_DATE', payload:payload
    }
}
export const SET_ADULTS=(payload)=>{
    return{
        type:'SET_ADULTS', payload:payload
    }
}
export const SET_CHILD=(payload)=>{
    return{
        type:'SET_CHILD', payload:payload
    }
}
export const ADD_TAG=(payload)=>{
    return{
        type:'ADD_TAG', payload:payload
    }
}
export const DEL_TAG=(payload)=>{
    return{
        type:"DEL_TAG", payload:payload
    }
}
export const CLEAR_TAGS=()=>{
    return{
        type:"CLEAR_TAGS"
    }
}
export const INC_CHILD=()=>{
  return {type:'INC_CHILD'}
}
export const DEC_CHILD=()=>{
  return {type:'DEC_CHILD'}
}
export const DEC_ADULT=()=>{
  return {type:'DEC_ADULT'}
}
export const INC_ADULT=()=>{
  return {type:'INC_ADULT'}
}
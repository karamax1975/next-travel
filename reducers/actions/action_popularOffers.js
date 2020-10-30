export const SET_FILTER=(payload)=>{
  return {
    type:'SET_FILTER', payload: payload
  }
}
export const RESET_FILTER=()=>{
  return {
    type:'RESET_FILTER', payload:null
  }
}

export const EVENTS_SET_FILTER=(payload)=>{
  return {
    type:'EVENTS/SET_FILTER', payload: payload
  }
}
export const EVENTS_RESET_FILTER=()=>{
  return {
    type:'EVENTS/RESET_FILTER', payload:null
  }
}

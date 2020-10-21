const initialStore = {
  active:false
}



export default function wigetAuthorization(store=initialStore, action){
  switch(action.type){

    case "ACTIVE_AUTHORIZATION":{
      return{...store, active:action.payload}
    }
    default:
      return store
  }
}
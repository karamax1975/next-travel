const initialStore = {
  logInFalse:false
}

export default function wigetAuthorization(store=initialStore, action){
  switch(action.type){

    case "LOG_IN_FALSE":{
      return{...store, logInFalse:action.payload}
    }
    default:
      return store
  }
}
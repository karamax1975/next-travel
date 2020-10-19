const initialStore ={
  filter:''
}

export default function popularOffers(store=initialStore, action){

  switch(action.type){
    case 'SET_FILTER':{
      return {...store, filter:action.payload}
    }
    case 'RESET_FILTER':{
      return {...store, filter:''}
    }
  
  default:
    return store;
  }
}
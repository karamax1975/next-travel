import config from '../config.json'

const initialStore = {
    search: false,
    country: null,
    type: null,
    date: null,
    adults:config.adults,
    child:config.child,
    tags:[]
}

export default function wiget_SearchTours(store = initialStore, action) {
    switch (action.type) {
        case 'SEARCH': {
            return { ...store, search: action.payload }
        }
        case 'SET_COUNTRY': {
            return { ...store, country: action.payload }
        }
        case 'SET_TYPE': {
            return { ...store, type: action.payload }
        }
        case 'SET_DATE': {
            return { ...store, date: action.payload }
        }
        case 'SET_ADULTS': {
            return {...store, adults:action.payload}
        }
        case 'SET_CHILD': {
            return {...store, child: action.payload}
        }
        case 'INC_ADULT':{
          if(store.adults<6)
          return {...store, adults:store.adults+1}
          else return {...store, adults:store.adults}
        }
        case 'DEC_ADULT':{
          if(store.adults>0)
          return {...store, adults:store.adults-1}
        }
        case "INC_CHILD":{
          if(store.child<6)
          return {...store, child:store.child+1}
          else return {...store, child:store.child}
        }
        case "DEC_CHILD":{
          if(store.child>0)
          return {...store, child:store.child-1}
        }
        case 'ADD_TAG': {
            const arr=store.tags;
            arr.push(action.payload)
            return { ...store, tags: arr }
        }
        case 'DEL_TAG':{
            return {...store, tags:store.tags.filter(item=>item!=action.payload)}
        }
        case 'CLEAR_TAGS':{
            return {...store, tags:[]}
        }


        default:
            return store
    }
}
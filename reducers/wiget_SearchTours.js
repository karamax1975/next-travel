const initialStore={
    search:false,
    country:'',
    type:'',
    date:'',
    tourists:{
        adults:2,
        child: 0
    }
}

export default function wiget_SearchTours(store=initialStore, action){
    switch(action.type){
        case'SEARCH':{
            return{...store, search:action.payload}
        }
        case'SET_COUNTRY':{
            return{...store, country:action.payload}
        }
        case'SET_TYPE':{
            return{...store, type:action.payload}
        }
        case'SET_DATE':{
            return{...store, date:action.payload}
        }
        case'SET_ADULTS':{
            return{...store, adults:action.payload}
        }
        
        default:
            return store
    }
}
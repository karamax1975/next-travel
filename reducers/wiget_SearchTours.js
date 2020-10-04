const initialStore = {
    search: false,
    country: null,
    type: null,
    date: null,
    tourists: {
        adults: 2,
        child: 0
    },
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
            return {
                ...store,
                tourists: {
                    adults:action.payload,
                    child:store.tourists.child
                }
            }
        }
        case 'SET_CHILD': {
            return {
                ...store,
                tourists: {
                    adults:store.tourists.adults,
                    child: action.payload
                }
            }
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
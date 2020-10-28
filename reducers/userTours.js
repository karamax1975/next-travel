const initialStore = {
  arrTours: []

}

export default function userTours(store = initialStore, action) {
  switch (action.type) {
    case 'LOAD_TOURS': {

      return { ...store, arrTours:store.arrTours.concat(action.payload) }
    }

    default: return store
  }

}
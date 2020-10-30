const initialStore = {
  eventsFilter: null,
  plaseholder:'Страна'
}

export default function popularEvents(store = initialStore, action) {
  switch (action.type) {
    case 'EVENTS/SET_FILTER': {
      return {
        ...store,
        eventsFilter: action.payload,
        plaseholder:action.payload
      }
    }
    case 'EVENTS/RESET_FILTER': {
      return { 
        ...store, 
        eventsFilter: null,
        plaseholder:'Страна'
      }
    }
    default:
      return store;
  }

}
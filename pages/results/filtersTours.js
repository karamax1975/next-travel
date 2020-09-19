import moment from 'moment';


export default function filtersTours(tours, arrayFilters) {
    
    function filterStringValue(tours, typeFilter, data) {
        return tours.filter(item => {
            if (data == null) return item;
            else return item[typeFilter] == data
        })

    }


    const filterTypeTours = filterStringValue(tours, 'type', arrayFilters[0])
    const filterCountryTours = filterStringValue(filterTypeTours, 'country', arrayFilters[1])
    const filterDate = filterCountryTours.filter(item=>{
        const dateStart = moment(item.start).format('x');
        const dateEnd = moment(item.end).format('x');
        return dateStart < arrayFilters[2] && dateEnd > arrayFilters[2]
    })
    

    return filterDate
}

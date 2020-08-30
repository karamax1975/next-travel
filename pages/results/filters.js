import moment from 'moment';


export function filterCountry(array, type, string){


    const filtered = array.filter((item)=>{
      if(string=='') return item;
      else return item[type]==string
    })
    return filtered;
}

export function filterDate(array, findDate){
  const dateSearch=moment(findDate, 'DD.MM.YYYY').format('x');
  let result =[]
  
  array.forEach(item=>{
    const dateStart=moment(item.start).format('x')
    const dateEnd=moment(item.end).format('x')
    if(dateSearch>dateStart && dateSearch<dateEnd){
      result.push(item);
    }
    
  })
  return result
}
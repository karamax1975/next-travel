import moment from 'moment';


export function filterCountry(array, type, string){

  
    const filtered = array.filter((item)=>{
      if(string=='') return item;
      else return item[type]==string
    })
    // console.log(filtered);
    return filtered;
}

export function filterDate(array, findDate){
  if(findDate=='') return array
  else{
    return array.filter((item)=>{
      const dateSearch=moment(findDate, 'DD.MM.YYYY').format('x');
      const dateStart=moment(item.start).format('x')
      const dateEnd=moment(item.end).format('x')
  
      return dateStart<dateSearch && dateEnd>dateSearch
    }  )
  }


}
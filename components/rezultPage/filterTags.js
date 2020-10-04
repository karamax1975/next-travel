export default function filterTags (obj, arr){
    const finalArr = []
  
    for (let key of obj) {
      let string = "";
      string += `${key.tags},`;
      finalArr.push(string.split(',').filter(item => item !== ''))
  
    }
    let arrSort = []
    finalArr.forEach((item, index) => {
  
      item.forEach(item => {
  
        arr.forEach(tag => {
          if (tag === item) {
            arrSort[index] = true
          }
        })
      });
  
    });
    return obj.filter((item, index) => {
      if (arrSort[index] !== undefined) {
        return item
      }
  
    })
  }
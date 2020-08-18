const getDate = (year, mount) => {
  const arrMount = {
    year:year,
    mount,
    days:[],
  };

  const lenghtMount = new Date(year, mount + 1, 0).getDate(); // Количество дней в текущем месяце.

  const arrDay = [];
  const emptyDayPrev = [];
  const emptyDayNextMount = [];

  let dayWeekFirstDayMount = new Date(year, mount, 1).getDay();
  let dayWeekLastDayMount = new Date(year, mount+1, 0).getDay();
  if(dayWeekLastDayMount===0) dayWeekLastDayMount=7;
  if (dayWeekFirstDayMount === 0) dayWeekFirstDayMount = 7;

  function getMountString(mount){
    const mountArr = ["Январь", "Февраль", 'Март', "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    return mountArr[mount];
  }

  arrMount.mount=getMountString(mount);

  for(let i=dayWeekFirstDayMount-1; i>0; i-- ){ // находим последние дни предыдущего месяца текущей недели 
    emptyDayPrev.push(new Date(year, mount, 1-i).toLocaleDateString());
  }
  for(let i=0; i<7-dayWeekLastDayMount; i++){ // находим первые дни следующего месяца до конца недели 
    emptyDayNextMount.push(new Date(year, mount+1, 1+i).toLocaleDateString());
  }

  for (let i = 1; i <= lenghtMount; i++) { // массив существующего месяца
    arrDay.push(new Date(year, mount, i).toLocaleDateString());
  }
  arrMount.days= [...emptyDayPrev, ...arrDay, ...emptyDayNextMount];
  return arrMount;
  
};
export default getDate;
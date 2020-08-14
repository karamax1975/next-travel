 export default async function getTours (){
    const response = await fetch("http://localhost:4200/tours");
    const tours = await response.json();
    return {
      tours,
    };
  };
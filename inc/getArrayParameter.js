import getTours from './getTours';

export default function getArrayParameter(type){

    const data = getTours().then(res=>{
        const arrayParameter =[];
        for(const item of res.tours){
            arrayParameter.push(item[type])
        }
        const set = new Set(arrayParameter);
        return [...set].sort();
    })

    
    return data;
}



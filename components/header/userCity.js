import { useEffect, useState } from "react"

export default function UserCity() {

    const [userCity, setUserCity] = useState('');
    useEffect(() => {
        async function getUserCity() {
            const response = await fetch(`http://ip-api.com/json/?lang=ru`);
            return response.json();
        }
        getUserCity().then(data => {
            setUserCity(data.city)
        }).catch(()=>{
            setUserCity("Москва")
        })
    }, [])


    return (
        <div>
            <span className="city-title">Город отправления:</span>
            <div className="city-name">
                <span >{userCity}</span>
            </div>
        </div>
    )
}
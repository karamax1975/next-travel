import { useEffect, useState } from "react";

export default function Account() {

  const [data, setData]=useState('')

  async function LogIn (nameUser, loginUser){
    const req= await fetch('/api/post',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameUser,
        login: loginUser,
      })
    })
    return req
  }



  useEffect(()=>{
    LogIn('Maxi', "dfdsfdsds").then(data=>{
      data.text().then(data=>{
        setData(data);
      });
    })
  }, [])






  return (
    <>
      <h1>{data}</h1>
    </>
  );
}




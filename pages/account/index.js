import { useEffect, useState } from "react";
import { MainLayout } from '../../layout/MainLayout'
import config from '../../config.json'
import Link from 'next/link';
import {reset} from 'redux-form';
import {useDispatch} from 'react-redux'


import FormTextBox from '../../components/inputs/form-textBox';
import LoginInForm from '../../components/forms/login_in';
import ReduxForm from '../../components/forms/ttt'

export default function Account() {

const dispatch = useDispatch()


  // const [data, setData] = useState('')

  // async function LogIn(nameUser, loginUser) {
  //   const req = await fetch('/api/post', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: nameUser,
  //       login: loginUser,
  //     })
  //   })
  //   return req
  // }



  // useEffect(() => {
  //   LogIn('Maxi', "dfdsfdsds")
  //     .then(data => data.text())
  //     .then(data => setData(data));
  // }, [])

  function getDataToForm (formData){
    // console.log(formData);
    // очистка формы
    dispatch(reset('LogInForm'))
  }




  return (
    <MainLayout title={"Authorization"}>
      <section className="Authorization">
        <div className="authorization-body">
          <div className="container">
            <div className="row">
              <h1>Войдите в систему</h1>
              <div className="column col-lg-6">
                <LoginInForm onSubmit={getDataToForm}/>
                <div className="signin-forgotpassword">
                  <Link href={'/'}><a><span>Забыли свой ID или пароль?</span></a></Link>
                  <Link href={'/'}><a><span>Зарегистрироваться</span></a></Link>
                </div>
              </div>
            </div>

            <div className="authorization-support">
              <h6>Нужна дополнительная помощь? Позвоните по номеру <a href={`tel:${config.phone.support}`}>{config.phone.support}</a></h6>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}




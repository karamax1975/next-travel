import { useEffect, useState } from "react";
import Router from 'next/router';
import { MainLayout } from '../../layout/MainLayout'
import config from '../../config.json'
import Link from 'next/link';
import { reset } from 'redux-form';
import { useDispatch } from 'react-redux';



import LoginInForm from '../../components/forms/login_in';
import { LOG_IN_FALSE } from '../../reducers/actions/action_wigetAuthorization'

export default function Account() {

  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(LOG_IN_FALSE(false))
  })


  // запрос в API
  function getDataToForm(formData) {
    async function sendData(data) {
      const request = await fetch('/api/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
      })
      return request;
    }

    sendData(formData).then(data => {
      data.text().then(token => {
        const rezult = token ? true : false;
        if (rezult) {
          // Если true (юзер найден)
          dispatch(reset('LogInForm'))
          dispatch(LOG_IN_FALSE(false))
          // отправляю сгенерированный токен в query

          Router.push({
            pathname:`/user/${token}`,
          })
        }
        else {
          // юзер не найден
          dispatch(LOG_IN_FALSE(true))
        }

      })

    })

  }




  return (
    <MainLayout title={"Authorization"}>
      <section className="Authorization">
        <div className="authorization-body">
          <div className="container">
            <div className="row">
              <h1>Войдите в систему</h1>
              <div className="column col-lg-6">
                <LoginInForm onSubmit={getDataToForm} />
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




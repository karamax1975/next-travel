import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux'
import { validate } from '../../lib/client/validators/validatorInputs'

import FormTextBox from '../inputs/form-textBox';


function LoginInForm(props) {

  const { handleSubmit, onSubmit } = props;


  // если юзер не найден
  const logInFalse = useSelector(store => store.wiget_authorization.logInFalse);

  // предуприждение если юзер не найден
  const AlertText_LoginFalse = () => {
    return (
      <div className="formAuth_loginFalse">
        <p>Указана неверная информация об учетной записи</p>
      </div>
    )
  }

  return (
    <form className="formAuth" onSubmit={handleSubmit(onSubmit)}>
      {logInFalse
        ?<AlertText_LoginFalse/>
        :''
      }
      <Field
        name='login'
        type="email"
        id="InputID"
        placeholder="Введите Ваш ID"
        component={FormTextBox}
      />
      <Field
        name='password'
        type="password"
        id="InputPassword"
        placeholder="Пароль"
        component={FormTextBox}
      />
      <p>Ваш ID - это адрес электронной почты, c которым Вы зарегистрировались в системе.</p>
      <button className="btn-big red" type="submit">
        <span>Вход</span>
      </button>
    </form>
  )
}

export default reduxForm({ form: 'LogInForm', validate })(LoginInForm)

import { Field, reduxForm } from 'redux-form';
import {useSelector} from 'react-redux'
import {validate} from '../../lib/client/validators/validatorInputs'

import FormTextBox from '../inputs/form-textBox';


function LoginInForm(props){
  // console.log(props);
  const {handleSubmit, onSubmit}=props;
  // console.log(useSelector(state => state.form.LogInForm))

  // console.log(reset);

  return (
    <form className="formAuth" onSubmit={handleSubmit(onSubmit)}>
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

export default reduxForm({form: 'LogInForm', validate})(LoginInForm)

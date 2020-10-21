export const validate = values => {
  const errors = {}
  if (!values.login) {
    errors.login = 'Обязательное к заполнению поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
    errors.login = 'Неправильный email адрес'
  }
  if (!values.password) {
    errors.password = 'Обязательное к заполнению поле'
  }else if (values.password.length > 15) {
    errors.password = 'Пароль не более 15 символов'
  }else if (values.password.length < 7) {
    errors.password = 'Пароль должен быть не менее 7 символов'
  }
  
  return errors
}
import { useState, useRef, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

export default function FormTextBox({input, id, placeholder, meta: { touched, error, visited } }) {

  const [className, setClassName] = useState('form-textBox');
  const [alert, setAlert] = useState(false);



  useEffect(()=>{
    if(visited){
      setClassName('form-textBox active')
    }
  }, [visited])



  useEffect(()=>{
    if(touched && error){
      setClassName('form-textBox alert')
      setAlert(true)
    }
    if(touched&&error===undefined) {
      setClassName('form-textBox active')
      setAlert(false)
    }
  },[error, touched])


  const AlertMessage = ({ text }) => {
    return (
      <div className="error-Input">
        <p>{text}</p>
      </div>
    )
  }

  return (
    <div className={className} >
      <input {...input} id={id}/>
      {alert ? <AlertMessage text={error} /> : ''}
      <span className="form-textBox-label">{placeholder}</span>
    </div>
  )
}

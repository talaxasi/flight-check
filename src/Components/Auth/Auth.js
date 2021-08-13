import React, {useEffect, useRef, useState} from 'react';
import './Auth.scss';
import axios from "axios";

const Auth = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const InputBlock = (
      {
        title,
        type,
        errorMessage,
        modifier,
        onChange,
        value,
        onBlur
      }) => {

    return (
        <div className={`input-block ${modifier}`}>
          <p className={"input-block__title"}>{title}</p>
          <input className={"input-block__input"}
                 type={type}
                 onBlur={onBlur}
                 value={value}
                 onChange={onChange}/>
          <p className={"input-block__error-message"}>{errorMessage}</p>
        </div>
    )
  }

  const handleChange = e => {
    const name = e.target.previousElementSibling.innerHTML;
    if (name === 'Логин') setLogin(e.target.value)
    console.log(login)
  }

  const fetchFlightDate = async (month, day) => {
    try {
      return (await axios.get(`http://localhost:3001/flights?date_like=${month}-${day}`)).data;
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.dir(e.target)
  }

  // useEffect(() => {
  //   fetchFlightDate('01', '02').then(data => console.log(data))
  // }, [])

  return (
      <div className={"Auth"}>
        <form className={"form"} onSubmit={handleSubmit}>
          <h2 className={"form__title"}>Simple Flight Check</h2>
          <InputBlock key={1} type={'text'} title={'Логин'} onChange={handleChange} value={login}/>
          <InputBlock type={'password'} title={'Пароль'} onChange={handleChange} value={password}/>
          <input className={"form__submit"}
                 type={'submit'}
                 value={'Войти'}/>
        </form>
      </div>
  )
}

export default Auth;
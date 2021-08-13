import React, {useEffect, useRef, useState} from 'react';
import './Auth.scss';
import axios from "axios";

const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const name = e.target.previousElementSibling.innerHTML;
    if (name === 'Логин:') setLogin(e.target.value);
    if (name === 'Пароль:') setPassword(e.target.value);
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

          <div className={`input-block`}>
            <p className={"input-block__title"}>Логин:</p>
            <input className={"input-block__input"}
                   type={'text'}
                   value={login}
                   onChange={handleChange}/>
            <p className={"input-block__error-message"}>Message error</p>
          </div>

          <div className={`input-block`}>
            <p className={"input-block__title"}>Пароль:</p>
            <input className={"input-block__input"}
                   type={'password'}
                   value={password}
                   onChange={handleChange}/>
            <p className={"input-block__error-message"}>Message error</p>
          </div>

          <input className={"form__submit"}
                 type={'submit'}
                 value={'Войти'}/>
        </form>
      </div>
  )
}

export default Auth;
import React, {useRef, useState} from 'react';
import './Auth.scss';
import {useDispatch} from "react-redux";
import {authRequest} from "../../store/actions";

const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const checkLogin = login => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(String(login).toLowerCase()) ? loginRef.current.classList.remove('input-block_error') :
        loginRef.current.classList.add('input-block_error');
  }

  const checkPassword = password => {
    const withoutCyrillic = !(/[а-яА-ЯёЁ]/.test(String(password).toLowerCase()));
    (withoutCyrillic && password.length >= 8) ? passwordRef.current.classList.remove('input-block_error') :
        passwordRef.current.classList.add('input-block_error');
  }

  const handleSubmit = e => {
    e.preventDefault();
    checkLogin(login);
    checkPassword(password);
    let access = true;
    e.target.childNodes.forEach(el => {
      if (el.className.includes('error')) return access = false;
    })
    if (access) {
      dispatch(authRequest({login, password}));
      setLogin('');
      setPassword('');
    }
  }

  const handleChange = e => {
    const name = e.target.previousElementSibling.innerHTML;
    if (name === 'Логин:') {
      loginRef.current.classList.remove('input-block_error');
      setLogin(e.target.value);
    }
    if (name === 'Пароль:') {
      passwordRef.current.classList.remove('input-block_error');
      setPassword(e.target.value);
    }
  }

  const handleBlur = e => {
    const name = e.target.previousElementSibling.innerHTML;
    if (name === 'Логин:') checkLogin(login);
    if (name === 'Пароль:') checkPassword(password);
  }

  return (
      <div className={"Auth"}>
        <form className={"form"} onSubmit={handleSubmit}>
          <h2 className={"form__title"}>Simple Flight Check</h2>

          <div className={`input-block`} ref={loginRef}>
            <p className={"input-block__title"}>Логин:</p>
            <input className={"input-block__input"}
                   type={'text'}
                   value={login}
                   onBlur={handleBlur}
                   onChange={handleChange}/>
            <p className={"input-block__error-message"}>Некорректный адрес электронной почты</p>
          </div>

          <div className={`input-block`} ref={passwordRef}>
            <p className={"input-block__title"}>Пароль:</p>
            <input className={"input-block__input"}
                   type={'password'}
                   value={password}
                   onBlur={handleBlur}
                   onChange={handleChange}/>
            <p className={"input-block__error-message"}>Пароль не менее 8 символов без кириллицы</p>
          </div>

          <input className={"form__submit"}
                 type={'submit'}
                 value={'Войти'}/>
        </form>
      </div>
  )
}

export default Auth;
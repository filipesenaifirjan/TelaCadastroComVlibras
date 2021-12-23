
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';

import "./login.scss"


function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
   
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      alert("Bem vindo a Tic Social!")
      return history.push('/home');
     
    }

    setError(error);
    setValues(initialState);
  }

  return (

<>


    <div className="loginForm">
    
   <LogImage/>
      <h1>Acessar o Sistema</h1>
     
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >  <p>ENTRAR</p> </button>
      </form>
    </div>
    </>
  );
};

export default UserLogin;
import React, { useState } from 'react'
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import scssAdmin from '../styles/admin.scss'
import etsText from './../images/admin/etsText.png'

const AdminDB = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleLogin = (token) => {
    setToken(token);
};
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://etalontrans.vercel.app/api/login', { username, password });
      const { token } = response.data;
      console.log(response.data)

      localStorage.setItem('token', token);
      handleLogin(token);
      openCompass()
      navigate('/');

    } catch (err) {
      setError('Неверные данные');
    }
  };

  const openCompass = () => {
    const mongoUri = encodeURIComponent('mongodb://localhost:27017/EtalonTrans');
    const newWindow = window.open(`mongodb://localhost:27017/EtalonTrans`, '_blank');
    // Проверяем, что новое окно открыто
    if (newWindow) {
        // Закрываем окно через 5 секунд
        setTimeout(() => {
            newWindow.close();
        }, 5000);
    }    
  };

  setTimeout(scrollBar, 1400)
  function scrollBar() {
    $('body').css('overflow-y', 'auto');
  }
  

  return (
    <>
  <Helmet>
    <title>Вход в MongoDB</title>
    <meta name="description"
    content="Вход в MongoDB"/>
    <meta name="keywords"
      content="Админ MongoDB"/>
      <meta property="og:title" content=""/>
    <meta property="og:type" content="website"/>
    <meta property="og:description"
      content="Вход в MongoDB"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content="" title="" alt=""/>
    <meta property="twitter:title" content="Вход в MongoDB"/>
    <meta property="twitter:description"
    content="Вход в MongoDB"/>
    <meta property="twitter:image" content="" title="" alt=""/>

  </Helmet>
      <link href={scssAdmin} rel="stylesheet" type="text/css" />

    <div className='popup__login'>
      <div className="popup__container__login">
        <h1 className='pageTitle' style={{ color: '#fff', marginBottom: '80px' }}>Авторизация</h1>

        <div className="container">
            <form onSubmit={handleSubmit}>
          <div className="row d-flex">
    <div className="mx-auto">

              <input value={username} className='col-6 col-lg-4 input_background__none' placeholder='Логин' type="text" onChange={(e) => setUsername(e.target.value)} required />
              <input className='input_background__none col-6 col-lg-4' placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
    </div>
              <button type="submit" className='mx-auto col col-lg-2 input_background__none'>Войти</button>
            <div className="col-5 mx-auto">

              {error && <p style={{ borderRadius: '0.75rem', padding: '10px', color: '#fff', backgroundColor: 'red', opacity: '1' }} className='vacancy-card__text vacancy-card__text_description'>{error}</p>}
            </div>
            </form>

        </div>
        <img
          src={etsText}
          alt="логотип"
          className="img-fluid etsText"
        />
      </div>
    </div>
    </>

  )
}

export default AdminDB
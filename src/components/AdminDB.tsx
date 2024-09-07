import React, { useState, FormEvent  } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../styles/admin.scss'
import etsText from './../images/admin/etsText.png'


interface ApiResponse {
  token: string;
}
const AdminDB = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  
  const handleLogin = (token: string) => {
    setToken(token);
};

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<ApiResponse>('/api/getUsers', { username, password });
      const { token } = response.data;
      console.log(response.data)

      localStorage.setItem('token', token);
      handleLogin(token);
      openCompass();
      navigate('/');

    } catch (err) {
      setError('Неверные данные');
    }
  };

  const openCompass = () => {
    const mongoUri = encodeURIComponent('mongodb+srv://vercel-admin-user-66cb7e3b06da0270f9fa6cf3:28zm0CHRS29H2ymz@etalontrans.2324u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const newWindow = window.open(mongoUri, '_blank');
    // Проверяем, что новое окно открыто
    if (newWindow) {
        // Закрываем окно через 5 секунд
        setTimeout(() => {
            newWindow.close();
        }, 5000);
    }    
  };
  

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
    <meta property="og:image" content="" title=""/>
    <meta property="twitter:title" content="Вход в MongoDB"/>
    <meta property="twitter:description"
    content="Вход в MongoDB"/>
    <meta property="twitter:image" content="" title="" />

  </Helmet>

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

export default AdminDB;
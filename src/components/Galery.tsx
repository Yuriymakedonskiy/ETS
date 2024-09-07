import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../styles/galery.scss'


// IMG
import img1 from '../images/galery/5.webp'
import img2 from '../images/galery/STA03640.webp'
import img3 from '../images/galery/STA04057.webp'
import img4 from '../images/galery/STA04083.webp'
import { Helmet } from 'react-helmet-async';

const Galery = () => {
  const handleMouseMove = (ev: React.MouseEvent<HTMLImageElement>) => {
    const target = ev.currentTarget;
    const mouseX = ev.pageX - target.offsetLeft;
    const mouseY = ev.pageY - target.offsetTop;
    const imgX = (mouseX - 300) / 40;
    const imgY = (mouseY - 200) / 40;
    target.style.transform = `translate(${imgX}px, ${imgY}px)`;
  };

  const handleMouseOut = (ev: React.MouseEvent<HTMLImageElement>) => {
    ev.currentTarget.style.transform = 'translate(0px, 0px)';
  };
  return (
    <>
      <Helmet>
        <title>Личная галерея</title>
        <meta
          name="description"
          content="Добро пожаловать в личную галерею ЭталонТрансСервис. Здесь вы найдете уникальные фотографии и впечатления о наших услугах и событиях. Узнайте больше о том, как мы создаем качественные и надежные транспортные решения."
        />
        <meta name="keywords" content="Галерея" />
        <meta property="og:title" content="Личная галерея" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Добро пожаловать в личную галерею ЭталонТрансСервис. Здесь вы найдете уникальные фотографии и впечатления о наших услугах и событиях. Узнайте больше о том, как мы создаем качественные и надежные транспортные решения."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="twitter:title" content="Личная галерея" />
        <meta
          property="twitter:description"
          content="Добро пожаловать в личную галерею ЭталонТрансСервис. Здесь вы найдете уникальные фотографии и впечатления о наших услугах и событиях."
        />
        <meta property="twitter:image" content="" />
      </Helmet>

      <Header />
      <div className="container-fluid plast__two" style={{ marginTop: 0 }}>
        <div className="row">
          <h1 className="liner pageTitle" style={{ color: "#30f", marginTop: 50 }}>
            ГАЛЕРЕЯ
          </h1>
          <br />
        </div>
      </div>
      <div className="containerGalery">
        <div className="cardG">
          <div className="img-container">
            <img
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              className="img img-fluid"
              src={img1}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          <div className="img-container">
            <img
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              className="img img-fluid"
              src={img2}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          <div className="img-container">
            <img
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              className="img img-fluid"
              src={img3}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          <div className="img-container">
            <img
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              className="img img-fluid"
              src={img4}
              alt="street"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Galery
import React from 'react'
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';
import scss from '../styles/galery.scss'


// IMG
import img1 from '../images/galery/5.webp'
import img2 from '../images/galery/STA03640.webp'
import img3 from '../images/galery/STA04057.webp'
import img4 from '../images/galery/STA04083.webp'
import { Helmet } from 'react-helmet-async';

const Galery = () => {
  setTimeout(scrollBar, 10)
  function scrollBar() {
    $('body').css('overflow-y', 'auto');
  }

  function handleMouseMove(ev) {
    var mousex = ev.pageX - $(ev.target).offset().left;
    var mousey = ev.pageY - $(ev.target).offset().top;
    var imgx = (mousex - 300) / 40;
    var imgy = (mousey - 200) / 40;
    $(ev.target).css("transform", "translate(" + imgx + "px," + imgy + "px)");
  }

  function handleMouseOut(ev) {
    $(ev.target).css("transform", "translate(0px,0px)");
  }

  return (
    <>
      <link href={scss} rel="stylesheet" type="text/css" />

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
        <meta property="og:image" content="" title="" alt="" />
        <meta property="twitter:title" content="Личная галерея" />
        <meta
          property="twitter:description"
          content="Добро пожаловать в личную галерею ЭталонТрансСервис. Здесь вы найдете уникальные фотографии и впечатления о наших услугах и событиях. Узнайте больше о том, как мы создаем качественные и надежные транспортные решения."
        />
        <meta property="twitter:image" content="" title="" alt="" />
      </Helmet>

      <Header />
      <div className="container-fluid plast__two" style={{ marginTop: 0 }}>
        <div className="row">
          <h1 className="pageTitle depart__title">
            Галерея<span style={{ color: "#30f" }}>.</span>
          </h1>
          <br />
        </div>
      </div>
      <div className="containerGalery ">
        <div className="cardG">

          <div className="img-container">
            <img onMouseMove={(ev) => handleMouseMove(ev)} onMouseOut={(ev) => handleMouseOut(ev)}
              id="street"
              className="img img-fluid"
              src={img1}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          {/*
  Each "card" has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add a transition for transform the transform property it will apply to both the scaling and the translation, causeing the translation to "lag" because as it updates where the mouse position is.
*/}
          <div className="img-container">
            <img onMouseMove={(ev) => handleMouseMove(ev)} onMouseOut={(ev) => handleMouseOut(ev)}
              id="street"
              className="img img-fluid"
              src={img2}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          {/*
  Each "card" has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add a transition for transform the transform property it will apply to both the scaling and the translation, causeing the translation to "lag" because as it updates where the mouse position is.
*/}
          <div className="img-container">
            <img onMouseMove={(ev) => handleMouseMove(ev)} onMouseOut={(ev) => handleMouseOut(ev)}
              id="street"
              className="img img-fluid"
              src={img3}
              alt="street"
            />
          </div>
        </div>
        <div className="cardG">
          {/*
  Each "card" has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add a transition for transform the transform property it will apply to both the scaling and the translation, causeing the translation to "lag" because as it updates where the mouse position is.
*/}
          <div className="img-container">
            <img onMouseMove={(ev) => handleMouseMove(ev)} onMouseOut={(ev) => handleMouseOut(ev)}
              id="street"
              className="img img-fluid"
              src={img4}
              alt="street"
            />
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Galery
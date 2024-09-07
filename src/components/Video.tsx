import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/video.scss';
import { Helmet } from 'react-helmet-async';

const Video = () => {
  
  return (
    <>

      <Helmet>
      <title>ЭталонТрансСервис — видеоматериалы</title>
  <meta name="robots" content="index-follow" />
  <meta
    name="description"
    content="Изучайте видеоматериалы от ЭталонТрансСервис - вашего надежного партнера в сфере транспортных услуг. Просматривайте полезные обучающие ролики, информативные презентации и другие видеоматериалы, чтобы ознакомиться с нашими услугами и возможностями."
  />
  <meta name="keywords" content="Видеоматериалы" />
  <meta property="og:title" content="ЭталонТрансСервис — видеоматериалы" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Изучайте видеоматериалы от ЭталонТрансСервис - вашего надежного партнера в сфере транспортных услуг. Просматривайте полезные обучающие ролики, информативные презентации и другие видеоматериалы, чтобы ознакомиться с нашими услугами и возможностями."
  />
  <meta property="og:url" content="" />
  <meta property="og:image" content="" title="" />
  <meta property="twitter:title" content="ЭталонТрансСервис — видеоматериалы" />
  <meta
    property="twitter:description"
    content="Изучайте видеоматериалы от ЭталонТрансСервис - вашего надежного партнера в сфере транспортных услуг. Просматривайте полезные обучающие ролики, информативные презентации и другие видеоматериалы, чтобы ознакомиться с нашими услугами и возможностями."
  />
  <meta property="twitter:image" content="" title="" />
  </Helmet>

    <Header/>
  <div className="container-fluid plast__two">
    <h1 className="liner pageTitle " style={{ color: "#30f", marginTop: 50 }}>
      10 ЛЕТ | НА УСЛОВИЯХ СЕВЕРА
    </h1>
  </div>
  <div className="container" style={{ marginTop: 50 }}>
    <div className="row mx-auto">
      <iframe
        className="mx-auto"
        width={420}
        height={415}
        src="https://www.youtube.com/embed/V97y6fNCPSg?si=t3IGzFkkh9ddLKJc"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
  <div className="container-fluid plast__two">
    <h1 className="liner pageTitle " style={{ color: "#30f", marginTop: 100 }}>
      О КОМПАНИИ
    </h1>
  </div>
  <div className="container" style={{ marginTop: 50 }}>
    <div className="row mx-auto">
      <iframe
        className="mx-auto"
        width={420}
        height={415}
        src="https://www.youtube.com/embed/P6J_HO9Hna0?si=WOAwJ6fUb1CeE_Kn"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
  <br />
  <br />
  <br />

    <Footer/>
</>
)}

export default Video;
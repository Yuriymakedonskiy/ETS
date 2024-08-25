import React, {useState,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import $ from 'jquery';
import scss from '../styles/contacts.scss'
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contacts = () => {
  setTimeout(scrollBar, 10)
  function scrollBar() {
      $('body').css('overflow-y', 'auto');
  }

  const [pdfcart, setPdfcart] = useState([]);

  useEffect(() => {
    const fetchPdfcart = async () => {
      try {
        const response = await axios.get('https://etalontrans.vercel.app/api/pdfcart');
        setPdfcart(response.data)
      } catch (error) {
        console.error('Error fetching the pdfcart', error)
      }
    };
    fetchPdfcart();
  }, []);

  const cart__link = React.useCallback(() => {
      $('.cart').css('display', 'block');
  }, [])
  

  
  let [yandexCartText, setYandexCartText] = useState('Найти на карте')

  const YandexCart = React.useCallback(() => {
      if (yandexCartText !== 'Свернуть') {
          setYandexCartText('Свернуть');
          $('.cart').css('display', 'block');
      } else {
          setYandexCartText('Найти на карте');
          $('.cart').css('display', 'none');
      }

  }, [yandexCartText])


  return (
    <>
  <link href={scss} rel="stylesheet" type="text/css" />

  <Helmet>
  <title>ЭталонТрансСервис — контактная информация</title>
  <meta name="robots" content="index-follow" />
  <meta
    name="description"
    content="Мы открыты к предложениям и новым контрактам. Пишите в WhatsApp или на почту: disp2010@etalonts.ru"
  />
  <meta name="keywords" content="WhatsApp, ООО «ЭТС», disp2010@etalonts.ru" />
  <meta
    property="og:title"
    content="ЭталонТрансСервис — контактная информация"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Мы открыты к предложениям и новым контрактам. Пишите в WhatsApp или на почту: disp2010@etalonts.ru"
  />
  <meta property="og:url" content="" />
  <meta property="og:image" content="" title="" alt="" />
  <meta
    property="twitter:title"
    content="ЭталонТрансСервис — контактная информация"
  />
  <meta
    property="twitter:description"
    content="Мы открыты к предложениям и новым контрактам. Пишите в WhatsApp или на почту: disp2010@etalonts.ru"
  />
  <meta property="twitter:image" content="" title="" alt="" />
  </Helmet>

<Header/>
<div className="container-fluid plast__two" style={{ marginBottom: 100 }}>
<div className="row">
  <div className="col-12 offset-0 offset-xl-1">
    <h1 className="pageTitle">
      Контакты<span style={{ color: "#30f" }}>.</span>
    </h1>
    <a
      href="tel:+73463210555"
      style={{ textDecoration: "none", color: "#30f" }}
    >
      <h2 style={{ marginLeft: 0 }} className="pageText pageText_main">
        <span className="telegramId">8-3463-210-555</span>
      </h2>
    </a>
  </div>
</div>
</div>
<div
className="container-fluid plast__two"
style={{ marginTop: "-130px", marginBottom: 90 }}
>
<div className="row">
  <div className="col-11 col-md-5 col-lg-4 offset-0 offset-sm-0 offset-xl-1">
    <h2 className="vacancy-card__title">ООО «ЭталонТрансСервис»</h2>
    <p className="vacancy-card__text vacancy-card__text_description">
      <span>
        628331, Нефтеюганский район,
        <br /> г.п. Пойковский, Промзона стр. 9. <br />{" "}
        <span onClick={YandexCart} className="cart__link">{yandexCartText}</span>{" "}
      </span>
    </p>
    {pdfcart.map((pdf, index) => (

    <Link
      to={`${pdf.file}`} target="_blank" download

      className="contacts__item-text contacts__item-text_link"
      style={{ textDecoration: "none" }}
    >
      Скачать реквизиты в PDF
    </Link>
    ))}
  </div>
  <div className="col-10 col-md-5 col-lg-4 offset-0">
    <a
      href="mailto:disp2010@etalonts.ru"
      style={{ textDecoration: "none", color: "#000" }}
    >
      <h2 className="vacancy-card__title">disp2010@etalonts.ru</h2>
    </a>
    <p className="vacancy-card__text vacancy-card__text_description">
      <span>
        Присылайте свои предложения, технические задания и интересующие
        вопросы. Наша служба ответит в кратчайшие сроки.
      </span>
    </p>
  </div>
  <div className="row cart" style={{ marginTop: 50 }}>
    <iframe
      max-width={1100}
      height={420}
      className="col-10 offset-0 offset-lg-1 Yandex__cart"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac54b69af654a7bd29986ab009e9b97863b853d15cc414dd85d5dca51bbc17cec&source=constructor"
      frameBorder={0}
    />
  </div>
</div>
</div>

<Footer/>
    </>
  )
}

export default Contacts
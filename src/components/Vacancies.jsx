import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';
import scss from '../styles/vacancies.scss'
import axios from 'axios';
import PopupLogo from './UI/popup/PopupLogo'
import { Helmet } from 'react-helmet-async';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await axios.get('/api/getVacancies');
        setVacancies(response.data)
      } catch (error) {
        console.error('Error fetching the vacancies', error)
      }
    };
    fetchVacancies();
  }, []);
 
  setTimeout(scrollBar, 10)
  function scrollBar() {
    $('body').css('overflow-y', 'auto');
  }

  return (
    <>
      <link href={scss} rel="stylesheet" type="text/css" />

      <Helmet>
        <title>ЭталонТрансСервис — есть открытые вакансии</title>
        <meta name="robots" content="index-follow" />
        <meta
          name="description"
          content="Мы всегда в поиске талантливых людей. Посмотрите условия, возможно мы подходим друг другу. Мы не берем людей без опыта, можем только повысить разряд, отправив на очное обучение."
        />
        <meta
          name="keywords"
          content="Работай с нами, открытие вакансии, Забота о сотрудниках"
        />
        <meta
          property="og:title"
          content="ЭталонТрансСервис — есть открытые вакансии"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Мы всегда в поиске талантливых людей. Посмотрите условия, возможно мы подходим друг другу. Мы не берем людей без опыта, можем только повысить разряд, отправив на очное обучение."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" title="" alt="" />
        <meta
          property="twitter:title"
          content="ЭталонТрансСервис — есть открытые вакансии"
        />
        <meta
          property="twitter:description"
          content="Мы всегда в поиске талантливых людей. Посмотрите условия, возможно мы подходим друг другу. Мы не берем людей без опыта, можем только повысить разряд, отправив на очное обучение"
        />
        <meta property="twitter:image" content="" title="" alt="" />
      </Helmet>

      <Header />
      <h1 className="liner pageTitle " style={{ color: "#30f", marginTop: 50 }}>
        КАРЬЕРА
      </h1>
      <div className="container-fluid plast__two">
        <div className="row">
          <div className="col-10 offset-0 offset-lg-1">

            <br />
            <h2 className="page__text">
              <span style={{ color: "#30f", fontSize: 45, fontWeight: 700 }}>
                {/* Число вакансии */}
                {vacancies.length}
              </span>{" "}
              открытие вакансии.
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid plast__two">
        <div className="row">
          {vacancies.map((vacancy) => (

            <div key={vacancy._id} className="col-10 col-lg-4 offset-0 offset-lg-1 offset-xl-1">
              {/* <div key={vacancy._id} className="col-10 col-lg-4 offset-0 offset-lg-1 offset-xl-1"> */}
              <h2 className="vacancy-card__title">{vacancy.title}</h2>
              {/* <div className="col-10 col-lg-4 offset-0 offset-lg-1"> */}
              <p className="vacancy-card__text vacancy-card__text_description">
                {/* <span> */}
                Требуемый опыт работы:
                {/* ОПЫТ ИЗ БД */}
                <span> {vacancy.workExperience}</span>
                <br />{" "}
                <b>
                  {/* ЗП ИЗ БД */}
                  {vacancy.salary}
                </b>
                {/* </span> */}
              </p>
              {/* СДЕЛАТЬ КЛАССНЕЙМ ДЛЯ КАЖДОГО СВОЙ */}
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div
                  className="accordion-button collapsed vacancy-card__button button button_background__blue"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${vacancy._id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${vacancy._id}`}
                >
                  Подробнее
                </div>
                <div
                  id={`flush-collapse${vacancy._id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`#flush-heading${vacancy._id}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <h3 className="vacancy-card__section-title vacancy-card__text vacancy-card__text_bold">
                      Обязанности:
                    </h3>
                    <div className="vacancy-card__section-content vacancy-card__text vacancy-card__text_description">
                      <ul className="ulVacancies">
                        {/* ОБЯЗАННОСТИ ИЗ БД */}
                        {vacancy.requirements}
                      </ul>
                    </div>
                    <h3 className="vacancy-card__section-title vacancy-card__text vacancy-card__text_bold">
                      Требования:
                    </h3>
                    <div className="vacancy-card__text_description vacancy-card__section-content vacancy-card__text">
                      <ul className="ulVacancies">
                        {/* ТРЕБОВАНИЯ ИЗ БД */}

                        {vacancy.responsibilities}
                      </ul>
                    </div>
                    <h3 className="vacancy-card__section-title vacancy-card__text vacancy-card__text_bold">
                      Условия:
                    </h3>
                    <div className="vacancy-card__text_description vacancy-card__section-content vacancy-card__text">
                      <ul className="ulVacancies">
                        {/* УСЛОВИЯ ИЗ БД */}
                        {vacancy.conditions}
                      </ul>
                    </div>
                    <div className="vacancy-card__footer">
                      <a
                        href={`mailto:yurovskayang@etalonts.ru?subject=Резюме на вакансию '${vacancy.title}'&body=Здравствуйте! Отправляю моё резюме.%0D%0A Цель — Хочу устроится на работу по вакансии '${vacancy.title}'.%0D%0A ФИО: %0D%0A Адрес: %0D%0A Номер телефона (включая код города): %0D%0A Опыт работы: %0D%0A Образование: %0D%0A Профессиональные умения и навыки: %0D%0A Дополнительная информация:`}
                        // target="_blank"
                        className="SendResume button "
                      >
                        Отправить резюме
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
      <PopupLogo />
    </>
  )
}

export default Vacancies

import React, { useState } from 'react'
import PopupLogo from './UI/popup/PopupLogo'
import { Toast } from 'bootstrap'
import CountUp from 'react-countup';

import $ from 'jquery';

// IMG
import autopark1 from '../images/glavnaya/5.webp'
import autopark2 from '../images/glavnaya/231132123.webp'
import WorkMoment from '../images/glavnaya/4.webp'
import barrels from '../images/glavnaya/barrels.svg'
import truck from '../images/glavnaya/truck.svg'
import repair from '../images/glavnaya/repair.svg'
import tubing from '../images/glavnaya/tubing2.png'
import gisnslogo from '../images/glavnaya/Gisnslogo1.png'
import schlumberger from '../images/glavnaya/Schlumberger2.png'
import logo_integra from '../images/glavnaya/logo-integra2.png'
import katko from '../images/glavnaya/katko1.png'
import rn_yugan from '../images/glavnaya/rn_yugan2.png'
import mekamineft from '../images/glavnaya/mekamineft1.png'
import svetEnergy from '../images/glavnaya/svetEnergy1.png'
import calfrac from '../images/glavnaya/calfrac1.png'
import departaments from '../images/glavnaya/Департаменты.webp'
import briefing from '../images/glavnaya/STA04049.webp'
import briefing2 from '../images/glavnaya/STA04059.webp'
import briefing3 from '../images/glavnaya/STA04055.webp'
import briefing4 from '../images/glavnaya/STA04100.webp'
import briefing5 from '../images/glavnaya/STA04110.webp'
import peopleProud from '../images/glavnaya/STA03640.webp'
import kondaneft from '../images/glavnaya/kondaneft2.png'
import slavneftMegion from '../images/glavnaya/slavneftMegion1.png'
import sibneft from '../images/glavnaya/sibneft.png'
import lukoil from '../images/glavnaya/lukoil1.png'
import hm from '../images/glavnaya/hm.svg'
import rnYugan from '../images/glavnaya/rn_yugan2.png'
import xmao from '../images/glavnaya/xmao.png'
import bulb from '../images/glavnaya/bulb.svg'
import bolt from '../images/glavnaya/bolt.svg'
import customer from '../images/glavnaya/customer.svg'
import discount from '../images/glavnaya/discount.svg'
import handshake from '../images/glavnaya/handshake.svg'

// SCSS
import scss from '../styles/bodyGlavnaya.scss'
import axios from 'axios';


const Body = () => {
    const [services, setServices] = useState([]);

    React.useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get('/api/getData');
          setServices(response.data)
        } catch (error) {
          console.error('Error fetching the services', error)
        }
      };
      fetchServices();
    }, []);
  

    const numberCopyCall = React.useCallback(() => {
        navigator.clipboard.writeText('+79224054081');
        var toastLiveExample = document.getElementById('liveToast')
        var toast = new Toast(toastLiveExample)
        toast.show()
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



    React.useEffect(() => {
        let ticker = document.getElementById('ticker')
        let list = ticker.querySelector(".ticker__list");
        let clone = list.cloneNode(true);
        ticker.appendChild(clone);

    }, [])
    React.useEffect(() => {
        let ticker2 = document.getElementById('ticker2')
        let list2 = ticker2.querySelector(".ticker__list2");
        let clone = list2.cloneNode(true);
        ticker2.appendChild(clone);

    }, [])

    return (
        <>
        
            <link href={scss} rel="stylesheet" type="text/css" />
            <div className="container-fluid plast__two" style={{ marginTop: 100 }}>
                <div className="row">
                    <div className="col-10 col-lg-10 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main" style={{ marginBottom: 20 }}>
                            Транспортная компания в ХМАО-Югре
                            <span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <p className="pageText pageText_main">
                            <span className="font-color-blue" style={{ color: "#30f" }}>
                            <CountUp end={15}
                                        useEasing={false}
                                         duration={1.1} enableScrollSpy={true} />
                            </span>{" "}
                            лет успешной работы.
                            <span className="font-color-blue above" style={{ color: "#30f", paddingLeft:'5px' }}>
                                <span className='KatkoneftSotr' ><CountUp end={264}
                                        useEasing={false}
                                         duration={1.1} enableScrollSpy={true} /></span> <span style={{ color: "#000" }}>сотрудника.</span>
                                <span className="below">задействовано на объектах КАТКонефть</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid plast__two"
                style={{ marginTop: "-50px", marginBottom: 50 }}>
                <div className="row">
                    <div
                        className="col offset-0 offset-lg-1 Uslugi__text"
                        style={{ float: "left", zIndex: 22, marginTop: 40 }}
                    >
                        <h2 style={{ color: "#30f" }} className="vacancy-card__title">
                            Автотранспортные услуги
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>Итерационная перевозка грузов</span>
                        </p>
                        <div
                            style={{ marginTop: "-43px" }}
                            className="work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                        ></div>
                        <h2 style={{ color: "#30f" }} className="vacancy-card__title">
                            Подготовка
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>
                                Планирование маршрута транспортировки с подбором транспортных
                                средств
                            </span>
                        </p>
                        <div
                            style={{ marginTop: "-43px" }}
                            className="work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                        ></div>
                        <h2 style={{ color: "#30f" }} className="vacancy-card__title">
                            Транспортировка
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>
                                Перевозка оборудования с интерактивным мониторингом текущего
                                нахождения груза
                            </span>
                        </p>
                    </div>
                    <div
                        className="offset-0 offset-lg-1 col-12 col-lg-6 blockImage-powering"
                        style={{ float: "right", marginTop: 30 }}>
                        <img
                            src={autopark2}
                            className=" img-fluid "
                            alt="Отправляемся на работу"
                        />
                        <div className="hrefVacancies-shadow mx-auto"
                            style={{
                                width: 1,
                                height: 1,
                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                boxShadow: "0px -110px 190px 170px rgb(51,0,255,0.6)",
                                borderRadius: 40
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div id='ticker' className="ticker" style={{ marginBottom: 100 }}>
                <div id='ticker__list' className="ticker__list">
                    <div className="ticker__item" style={{ marginLeft: "-10px" }}>
                        <div className="tag">
                            <p>Конкурентный уровень оплаты труда</p>
                        </div>
                    </div>
                    <div className="ticker__item">
                        <div className="tag">
                            <p>Социальный пакет льготы компенсации </p>
                        </div>
                    </div>
                    <div className="ticker__item">
                        <div className="tag">
                            <p>Ежегодная медкомиссия диспансеризация</p>
                        </div>
                    </div>
                    <div className="ticker__item">
                        <div className="tag">
                            <p>Повышение квалификации обучения</p>
                        </div>
                    </div>
                    <div className="ticker__item">
                        <div className="tag">
                            <p>Комфортные условия межсменного отдыха</p>
                        </div>
                    </div>
                    <div className="ticker__item">
                        <div className="tag">
                            <p>Обновлённый автопарк</p>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div
                    className="col-10 col-md-8 plast"
                    style={{ color: "#000", textAlign: "left", marginTop: 150 }}
                >
                    <p className="plast__text">
                        <span>
                            <span style={{ color: "#30f" }}>Мы предлагаем</span> выполнение
                            подготовительно-заключительных работ для обеспечивания гидравлического
                            разрыва пласта
                        </span>
                    </p>
                    <div className="row">
                        <div className="col plast__block">
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    <span className="numbers-big-blue">
                                        1 <br />
                                    </span>
                                    Завоз и вывоз оборудования, монтаж емкостей для ГРП, подвоз
                                    проппанта
                                </span>
                            </p>
                        </div>
                        <div className="col plast__block">
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    <span className="numbers-big-blue">
                                        2 <br />
                                    </span>
                                    Затарка емкостей технологической жидкостью{" "}
                                </span>
                            </p>
                        </div>
                        <div className="col-11 plast__block">
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    <span className="numbers-big-blue">
                                        3 <br />
                                    </span>
                                    Получение подвоз солевого раствора вакуумными машинами,
                                    сопровождение ГРП спецтехникой
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </center>
            <div className="container-fluid Uslugi plast__two" style={{ marginTop: 150 }}>
                <div className="row">
                    <div className="col-10 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main" style={{ marginTop: 50 }}>
                            Услуги<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                    </div>
                    <div
                        style={{ marginTop: 20, marginBottom: 30 }}
                        className="col-12 col-lg-10 offset-0 offset-lg-1"
                    >
                        <div className="col blockImage-powering">
                            <img
                                src={WorkMoment}
                                alt="Работа на месторождении"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-10 offset-0 offset-lg-1">
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>
                                Комплексные логистические решения в области транспортировки грузов,
                                погрузочно-разгрузочные работы, перевозка технологических жидкостей
                                и отходов нефтегазового сектора по средствам специального
                                технического оборудования и собственного автомобильного парка.
                            </span>
                        </p>
                        <br />
                        <br />
                        <div className="row">
                        {services.map((service) => (
                            <div class="col offset-0">

                                <a href={`mailto:disp2010@etalonts.ru?subject=Интерес к услуге '${service.title}' &body=Здравствуйте! Меня заинтересовла услуга '${service.title}'. Расскажите пожалуйста подробнее о условиях и деталях`}
                                // target="_blank"
                                >
                                    <h2 style={{marginTop:'-10px'}} class="vacancy-card__title"><span class="numbers-big-blue">{service.id}.

                                    </span>
                                        <br />
                                        {service.title}.</h2>
                                </a>
                            </div>
                        ))}

                        </div>
                        <div className="work__list-item">
                            <div className="work__list-item-text work__list-item-text_title work__list-item-text_type_line"></div>
                            <div className="work__list-item-text work__list-item-text_desc">
                                <p>
                                    Если вас заинтересовала услуга, кликните на неё и мы с вами всё
                                    обсудим.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid plast__two" style={{ marginTop: 250 }}>
                <div className="row">
                    <div className="col-10 offset-0 offset-lg-1">
                        <h1 className="pageTitle Strong pageTitle_main">
                            Преимущества<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                    </div>
                    <div className="row" style={{ marginTop: 25 }}>
                        <div className="col-12 col-lg-4 offset-0 offset-lg-1">
                            <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                <img
                                    src={barrels}
                                    alt="Современное оборудование"
                                    className="img-fluid"
                                    style={{ width: 50, margin: "10px auto" }}
                                />
                                <br />
                                Современное оборудование
                            </h2>
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    Использование современного оборудования, наличие скоростных
                                    мотопомп, термосных бочек с возможностью работы без ппу в зимнее
                                    время
                                </span>
                            </p>
                            <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                <img
                                    src={truck}
                                    alt="Собственный автомобильный парк."
                                    className="img-fluid"
                                    style={{ width: 50, margin: "10px auto" }}
                                />
                                <br />
                                Собственный автомобильный парк
                            </h2>
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    Ежегодное обновление автомобильного парка, жесткий контроль и
                                    замена каждой единицы техники в течение 5 лет
                                </span>
                            </p>
                            <h2 className="vacancy-card__title " style={{ color: "#30f" }}>
                                <img
                                    src={repair}
                                    alt="Производственная база"
                                    className="img-fluid"
                                    style={{ width: 50, margin: "10px auto" }}
                                />
                                <br />
                                Производственная база
                            </h2>
                            <p className="vacancy-card__text vacancy-card__text_description">
                                <span>
                                    Собственный производственный цех для оказания текущего ремонта
                                    транспортных средств
                                </span>
                            </p>
                        </div>
                        <div
                            className="offset-0 offset-lg-1 col-12 col-lg-6  blockImage-powering"
                            style={{ zIndex: -22, float: "right", marginTop: 30 }}
                        >
                            <img
                                src={autopark1}
                                className="img-fluid"
                                alt="Автопарк"
                                style={{ paddingTop: 0 }}
                            />
                            <div
                                className="hrefVacancies-shadow mx-auto"
                                style={{
                                    width: 1,
                                    height: 1,
                                    backgroundColor: "rgba(71, 69, 204, 0.6)",
                                    boxShadow: "0px -110px 190px 170px rgb(51,0,255,0.6)",
                                    borderRadius: 40
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            


            <div className="container-fluid plast__two" style={{ marginTop: 200 }}>
                <div className="row">
                    <div className="col-12 col-md-7 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main">
                            Выгоды заказчика<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                        <div className="col-10 col-md-7 offset-0 offset-lg-1">
                            <p className="vigodi-text-md  vacancy-card__text vacancy-card__text_description">
                                Эффективная реализация технического задания с учетом нормативных
                                требований и конструктивных пожеланий заказчика
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ marginLeft: "-10px", marginTop: 25 }}
                        className="offset-1 offset-lg-0 col-10 col-md-4 offset-md-0 vigodiText-float-right"
                    >
                        <p className="vigodi-display-none vigodi-text-lg  vacancy-card__text vacancy-card__text_description">
                            Эффективная реализация технического задания с учетом нормативных
                            требований и конструктивных пожеланий заказчика
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-11 col-md-5 col-lg-5 offset-0 offset-lg-1">
                            <div className="row text-767-margin">
                                <div className="col-11 col-sm-10 col-md-5 col-lg-6 offset-0 offset-md-0">
                                    <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                        <img
                                            src={handshake}
                                            alt="Прозрачный бизнес"
                                            className="img-fluid"
                                            style={{ width: 50, margin: "10px auto" }}
                                        />
                                        <br />
                                        Прозрачный бизнес
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>Честность при ведении бизнеса</span>
                                    </p>
                                </div>
                                <div className="col-11 col-sm-10 col-md-5 col-lg-6 offset-lg-0  offset-0 offset-md-2">
                                    <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                        <img
                                            src={discount}
                                            alt="Партнерские скидки"
                                            className="img-fluid"
                                            style={{ width: 50, margin: "10px auto" }}
                                        />
                                        <br />
                                        Партнерские скидки
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Персональные предложения и выгодные условия от объема
                                        </span>
                                    </p>
                                </div>
                                <div className="col-11 col-sm-10 col-md-5 col-lg-6 offset-0 offset-lg-0">
                                    <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                        <img
                                            src={customer}
                                            alt="Индивидуальный подход"
                                            className="img-fluid"
                                            style={{ width: 50, margin: "10px auto" }}
                                        />
                                        <br />
                                        Индивидуальный подход
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Выполнение всех требований и индивидуальных пожеланий
                                            заказчика
                                        </span>
                                    </p>
                                </div>
                                <div className="col-11 col-sm-10 col-md-5 col-lg-6 offset-lg-0  offset-0 offset-md-2">
                                    <h2 className="vacancy-card__title" style={{ color: "#30f" }}>
                                        <span className="">
                                            <img
                                                src={bulb}
                                                alt="Подкованность"
                                                className="img-fluid"
                                                style={{ width: 50, margin: "10px auto" }}
                                            />{" "}
                                            <br />
                                            Подкованность
                                        </span>
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Возможность получения пропусков на всех месторождениях
                                        </span>
                                    </p>
                                    <div
                                        style={{ marginTop: "-23px", maxWidth: "4.1230rem" }}
                                        className="line__podkov work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-11 col-md-5 text-767-margin vigodi-float-right"
                            style={{ textAlign: "left" }}
                        >
                            <div className="row text-767-margin">
                                <div className="col-11 offset-0 col-md-9 offset-md-5">
                                    <h2 className="vacancy-card__title numbers-big-blue">
                                        Квалификация персонала
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Высокий уровень профессиональных компетенций сотрудников
                                        </span>
                                    </p>
                                    <div
                                        style={{ marginTop: "-43px" }}
                                        className="work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                                    ></div>
                                    <h2 className="vacancy-card__title numbers-big-blue">
                                        Сокращение затрат
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Минимизация расходов за счет оперативного выполнения работ и
                                            сокращения количества привлекаемой техники
                                        </span>
                                    </p>
                                    <div
                                        style={{ marginTop: "-43px" }}
                                        className="work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                                    ></div>
                                    <h2 className="vacancy-card__title numbers-big-blue">
                                        Контроль выполнения работ
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Постоянный контроль над выполнением работ, сопровождение и
                                            коммуникации с заказчиком
                                        </span>
                                    </p>
                                    <div
                                        style={{ marginTop: "-43px" }}
                                        className="work__list-item-text work__list-item-text_title work__list-item-text_type_line_opacity_05"
                                    ></div>
                                    <h2 className="vacancy-card__title numbers-big-blue">
                                        Аудит безопасности
                                    </h2>
                                    <p className="vacancy-card__text vacancy-card__text_description">
                                        <span>
                                            Соблюдение требований и нормативов для обеспечения
                                            безопасности и отсутствие взысканий и простоев со стороны
                                            генерального заказчика
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section
                className="py-5 container-fluid WestSiberia plast__two"
                style={{ marginTop: 200 }}
            >
                <div className="row">
                    <div className="col-10 col-md-7 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main">
                            Результаты в Западной Сибири<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                    </div>
                    <div className=" col-11 col-md-3 col-lg-3 offset-0 offset-lg-0 vigodiText-float-right">
                        <p className="dogovor vacancy-card__text vacancy-card__text-float-left vacancy-card__text_description">
                            *По договору КН/149 <br />
                            <span style={{ marginLeft: 9 }}>от 18.02.2019 г</span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <div className="col offset-lg-2">
                                
                                    <span style={{ color: "#30f", fontSize: 80 }} className="Count">
                                    <CountUp end={16}
                                        useEasing={false}
                                        prefix='+' duration={1.1} enableScrollSpy={true} />

                                    {/* <GSAPComponent/> */}
                                    <span className="sup">млн. км</span>
                                        </span>
                               
                            <h5 className="bigNumbers-text">Доставлено КАТКонефть</h5>
                            <br />
                        </div>
                        <br />
                        <div className="col  offset-lg-2">
                        <span style={{ color: "#30f", fontSize: 80 }} className="Count">
                            <CountUp end={367}
                                        useEasing={false}
                                        prefix='+' duration={1.1} enableScrollSpy={true} />
                                    <span className="sup">тыс. тонн</span>
                                </span>
                            <h5 className="bigNumbers-text">Проппанта и хим. реагентов</h5>
                            <br />
                        </div>
                        <br />
                        <div className="col offset-lg-2">
                        <span style={{ color: "#30f", fontSize: 80 }} className="Count">
                        
                        <CountUp end={1471}
                                        useEasing={false}
                                        prefix='+' duration={1.1} enableScrollSpy={true} />

                                    <span className="sup" >
                                        млн. м<sup style={{ marginLeft: 2, fontSize: 15 }}>3</sup>
                                    </span>
                                        </span>
                            <h5 className="bigNumbers-text">Жидкости затарили</h5>
                            <br />
                        </div>
                    </div>
                    <div className="col-12 offset-0  col-lg-6 justify-content-end xmao-item">
                        <img
                            src={xmao}
                            className="rounded img-fluid mx-auto d-block section__img-map"
                            alt="Карта Западной Сибири"
                            style={{ marginTop: "-100px" }}
                        />
                        <div className=" offset-0 d-flex justify-content-end">
                            <div className="block-border-top-blue work__list-item">
                                <div className="work__list-item-text work__list-item-text_title work__list-item-text_type_line"></div>
                                <div className="work__list-item-text work__list-item-text_desc">
                                    <p>
                                        «ЭталонТрансСервис», обладающие богатым опытом и признанием,
                                        накопленным за
                                        {"{"}
                                        {"{"}today.year|slugify|add:"-2010"{"}"}
                                        {"}"} лет работы, сформировала передовое и успешное предприятие,
                                        отвечающее всероссийским принципам и стандартам ведения бизнеса
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </section>
            <div className="container-fluid plast__two" style={{ marginTop: 200 }}>
                <div className="row">
                    <div className="col-10 col-md-7 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main Strong">
                            Профильная аккредитация<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                    </div>
                    <div
                        className=" col-11 col-md-10 col-lg-3 offset-0 offset-lg-0 vigodiText-float-right"
                        style={{ marginTop: 30 }}
                    >
                        <p className="vacancy-card__text vacancy-card__text-float-left vacancy-card__text_description">
                            Репутация качества и уровня оказываемых услуг, подтвержденная
                            многолетним опытом, и наличие профильной аккредитации в отрасли,
                            признанной крупнейшими игроками рынка
                        </p>
                    </div>
                    <div className="col offset-0 offset-lg-1">
                        <div className="row acreditStatic">
                            <div className="col" style={{ marginTop: 70 }}>
                                <a href="https://yung.rosneft.ru/about/Glance/OperationalStructure/Dobicha_i_razrabotka/Zapadnaja_Sibir/yung/">
                                    <img
                                        className="rn-neft"
                                        style={{ marginTop: 15 }}
                                        src={rnYugan}
                                        alt="РН-ЮГАНСКНЕФТЕГАЗ"
                                    />
                                </a>
                            </div>
                            <div className="col " style={{ marginTop: 75 }}>
                                <a href="https://hm.gazprom-neft.ru/">
                                    <img
                                        src={hm}
                                        alt="ГАЗПРОМНЕФТЬ ХАНТОС "
                                    />
                                </a>
                            </div>
                            <div className="col " style={{ marginTop: 70 }}>
                                <a href="https://zs.lukoil.ru/ru">
                                    <img
                                        src={lukoil}
                                        alt="ЛУКОЙЛ"
                                    />
                                </a>
                            </div>
                            <div className="col" style={{ marginTop: 50 }}>
                                <a
                                    className="sibneft"
                                    href="https://sbng.rosneft.ru/about/Glance/OperationalStructure/Dobicha_i_razrabotka/Zapadnaja_Sibir/sbng/"
                                >
                                    <img
                                        src={sibneft}
                                        alt="СИБНЕФТЬ"
                                    />
                                </a>
                            </div>
                            <div className="col" style={{ marginTop: 35 }}>
                                <a href="https://www.slavneft.ru/company/geography/megion-gaz/">
                                    <img
                                        style={{ marginTop: 50 }}
                                        src={slavneftMegion}
                                        alt="СЛАВНЕФТЬ"
                                    />
                                </a>
                            </div>
                            <div className="col" style={{ marginTop: 45 }}>
                                <a
                                    className="konda"
                                    href="https://www.rosneft.ru/about/Glance/OperationalStructure/Dobicha_i_razrabotka/Zapadnaja_Sibir/Kondaneft/"
                                >
                                    <img
                                        style={{ marginTop: 39 }}
                                        src={kondaneft}
                                        alt="АО НК КОНДАНЕФТЬ"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid plast__two" style={{ margin: "200px auto" }}>
                <div className="row">
                    <div className="media col-lg-6 col-12 mx-auto blockImage-powering">
                        <img
                            id="street"
                            className="safetyImg img img-fluid"
                            src={peopleProud}
                            alt="street"
                        />
                    </div>
                    <div className="card-body col-3 col-xs-6">
                        <p className="tagline text-center">СОТРУДНИКУ</p>
                        <h3
                            className="safetyTitle-margin pageTitle text-center pageTitle_main"
                            style={{ marginBottom: 20 }}
                        >
                            Безопасность
                        </h3>
                        <p className="vacancy-card__text vacancy-card__text_description text-center">
                            «ЭталонТрансСервис» гарантирует минимизацию рисков при реализации
                            программы производственной безопасности
                        </p>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item" style={{border:'none'}}>
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed vacancy-card__button button button_background__blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Безопасные условия труда
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div style={{backgroundColor:'#f6f6f6'}} class="accordion-body vacancy-card__text vacancy-card__text_description">
                                        Обеспечение соблюдения производственных процессов и условий
                                        труда сотрудников
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" style={{border:'none'}}>
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed vacancy-card__button button button_background__blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Безопасность на транспорте
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div style={{backgroundColor:'#f6f6f6'}} class="accordion-body vacancy-card__text vacancy-card__text_description">
                                        Обеспечение соблюдения производственных Наличие
                                        сертифицированного инструктора по БДД в штате предприятия{" "}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" style={{border:'none'}}>
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed vacancy-card__button button button_background__blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Обучение сотрудников

                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div style={{backgroundColor:'#f6f6f6'}} class="accordion-body vacancy-card__text vacancy-card__text_description">
                                        Семинары и мастер-классы с персоналом по программе защитного
                                        зимнего вождения у провайдеров ПАО «Газпром»

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" style={{border:'none'}}>
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed vacancy-card__button button button_background__blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Аудит безопасности

                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div style={{backgroundColor:'#f6f6f6'}} class="accordion-body vacancy-card__text vacancy-card__text_description">
                                        Контроль манеры езды, мониторинг скоростного режима и
                                        утомляемости сотрудников

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-fluid plast__two" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-9 col-lg-3 offset-0 offset-lg-1">
                        <h1 className="WhyChooseUs2" style={{ marginTop: 60 }}>
                            Проведение инструктажей
                        </h1>
                        <p
                            style={{ marginTop: 20 }}
                            className="vacancy-card__text vacancy-card__text_description"
                        >
                            Наш специалист по БДД,
                            <a
                                // onClick={() => setNumberCopy(!numberCopy)}
                                onClick={numberCopyCall}
                                id="liveToastBtn"
                                data-toggle="tooltip"
                                title={79224054081}
                                className="_link-bufer"
                                href="tel:+79224054081"
                                style={{ textDecoration: "none" }}
                            >
                                <span className="_link-border"> Балыбердин Олег Павлович, <br /></span>
                            </a>
                            проводит перед каждой вахтой предрейсовый инструктаж

                        </p>
                    </div>
                    <div className="col-12 col-lg-7 offset-0 offset-lg-1">
                        <div className="row">
                            <div
                                id="carouselExampleDark5"
                                className=" col-12  carousel carousel-dark slide"
                            >
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleDark5"
                                        data-bs-slide-to={0}
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleDark5"
                                        data-bs-slide-to={1}
                                        aria-label="Slide 2"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleDark5"
                                        data-bs-slide-to={2}
                                        aria-label="Slide 3"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleDark5"
                                        data-bs-slide-to={3}
                                        aria-label="Slide 4"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleDark5"
                                        data-bs-slide-to={4}
                                        aria-label="Slide 5"
                                    />
                                </div>
                                <div className="carousel-inner">
                                    <div
                                        className="carousel-item active blockImage-powering "
                                        data-bs-interval={2000}
                                    >
                                        <img
                                            src={briefing5}
                                            className="d-block w-100"
                                            alt="Предрейсовый инструктаж"
                                        />
                                        <div
                                            className="hrefVacancies-shadow mx-auto"
                                            style={{
                                                width: 1,
                                                height: 1,
                                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                                boxShadow: "0px -110px 190px 130px rgb(51,0,255,0.6)",
                                                borderRadius: 40
                                            }}
                                        ></div>
                                    </div>
                                    <div className="carousel-item  blockImage-powering ">
                                        <img
                                            src={briefing4}
                                            className="d-block w-100"
                                            alt="Предрейсовый инструктаж"
                                        />
                                        <div
                                            className="hrefVacancies-shadow mx-auto"
                                            style={{
                                                width: 1,
                                                height: 1,
                                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                                boxShadow: "0px -110px 190px 130px rgb(51,0,255,0.6)",
                                                borderRadius: 40
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="carousel-item  blockImage-powering "
                                        data-bs-interval={2000}
                                    >
                                        <img
                                            src={briefing3} className="d-block w-100"
                                            alt="Предрейсовый инструктаж"
                                        />
                                        <div
                                            className="hrefVacancies-shadow mx-auto"
                                            style={{
                                                width: 1,
                                                height: 1,
                                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                                boxShadow: "0px -110px 190px 130px rgb(51,0,255,0.6)",
                                                borderRadius: 40
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="carousel-item  blockImage-powering "
                                        data-bs-interval={2000}
                                    >
                                        <img
                                            src={briefing2}
                                            className="d-block w-100"
                                            alt="Предрейсовый инструктаж"
                                        />
                                        <div
                                            className="hrefVacancies-shadow mx-auto"
                                            style={{
                                                width: 1,
                                                height: 1,
                                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                                boxShadow: "0px -110px 190px 130px rgb(51,0,255,0.6)",
                                                borderRadius: 40
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="carousel-item  blockImage-powering "
                                        data-bs-interval={2000}
                                    >
                                        <img
                                            src={briefing}
                                            className="d-block w-100"
                                            alt="Предрейсовый инструктаж"
                                        />
                                        <div
                                            className="hrefVacancies-shadow mx-auto"
                                            style={{
                                                width: 1,
                                                height: 1,
                                                backgroundColor: "rgba(71, 69, 204, 0.6)",
                                                boxShadow: "0px -110px 190px 130px rgb(51,0,255,0.6)",
                                                borderRadius: 40
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleDark5"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleDark5"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="col-12 col-md-9 mx-auto plast__three"
                style={{ marginTop: 150, marginBottom: 0 }}
            >
                <div
                    className="hrefVacancies-shadow"
                    style={{
                        zIndex: 2,
                        float: "left",
                        width: 1,
                        height: 1,
                        margin: "20px 0 0 20px",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        boxShadow: "0px 0px 70px 70px rgba(255, 255, 255, 0.6)",
                        borderRadius: 40
                    }}
                ></div>
                <div
                    style={{ zIndex: 1 }}
                    className="hrefVacancies hrefVacancies__background-blue"
                >
                    <div className="hrefVacancies__background-blue-svg">
                        <img src={bolt} alt='bolt' style={{ marginBottom: 12 }} />
                    </div>
                    <h2 style={{ fontWeight: 800 }}>
                        Вам Стоит
                        <span style={{ color: "#ffc401", paddingLeft:'7px'}}>Попробовать</span>
                    </h2>
                    <div className="col-12 col-md-8 mx-auto">
                        <p
                            className="hrefVacancies__background-blue_text-min "
                            style={{ fontSize: 22 }}
                        >
                            Мы открыли заявки на 2 вакансий.  Посмотрите, может одна из них вас заинтересует
                        </p>
                    </div>
                    <a href="/vacancies">
                        <button
                            style={{ marginTop: 10, marginBottom: 15 }}
                            className="hrefVacancies__button--blue"
                        >
                            Посмотреть
                        </button>
                    </a>
                </div>
            </div>
            <div className="main-roller  container-fluid">
                <h1 className="pageTitle depart__title pageTitle_main">
                    Департаменты
                    <div className="roller">
                        <span id="rolltext">
                            Диспетчерская служба
                            <br />
                            Специалист по от, тб и бдд
                            <br />
                            Штатные механики
                            <br />
                            Кадровая служба
                            <br />
                            Финансовая служба и бухгалтерия
                            <br />
                        </span>
                    </div>
                </h1>
                <br />
                <div className="container-fluid">
                    <center>
                        <div
                            style={{ marginTop: 25, marginBottom: 20 }}
                            className="col-12 col-lg-10 blockImage-powering "
                        >
                            <img
                                src={departaments}
                                alt="Департаменты"
                                className="img-fluid"
                            />
                        </div>
                    </center>
                </div>
                <br />
                <div className="container">
                    {/* <span
                        style={{ color: "#F1FAEE" }}
                        className="vacancy-card__text pageText"
                    >
                        За годы развития ООО «ЭталонТрансСервис» удалось качественно расширить
                        штат сотрудников и организовать необходимые отделы компании,
                        обеспечивающие оказание первоклассных услуг
                    </span> */}
                    {/* <br /> */}
                </div>
            </div>
            <div className="container-fluid plast__two" style={{ marginTop: 150 }}>
                <div className="row">
                    <div className="col-10 offset-0 offset-lg-1">
                        <h1 className="pageTitle pageTitle_main">
                            Наши партнеры<span style={{ color: "#30f" }}>.</span>
                        </h1>
                        <br />
                    </div>
                </div>
            </div>
            <div className="ticker ticker2" id='ticker2' style={{ marginBottom: 100 }}>
                <div className="ticker__list ticker__list2">
                    <a href="http://www.mecamineft.com/" className="acredit">
                        <div className="ticker__item">
                            <img
                                src={mekamineft}
                                alt="МеКаМинефть"
                            />
                        </div>
                    </a>
                    <a href="https://vk.com/everbrightenergy" className="acredit">
                        <div className="ticker__item">
                            <img
                                src={svetEnergy}
                                alt="Свет Энергия"
                            />
                        </div>
                    </a>
                    <a href="https://calfrac.com/" className="acredit">
                        <div className="ticker__item">
                            <img
                                src={calfrac}
                                alt="Calfrac Well Services"
                            />
                        </div>
                    </a>
                    <a
                        href="https://yung.rosneft.ru/about/Glance/OperationalStructure/Dobicha_i_razrabotka/Zapadnaja_Sibir/yung/"
                        className="acredit"
                    >
                        <div className="ticker__item">
                            <img
                                className="rn-neft"
                                src={rn_yugan}
                                alt="РН-ЮГАНСКНЕФТЕГАЗ"
                            />
                        </div>
                    </a>
                    <a
                        href="https://market.neftegaz.ru/catalog/company/358249-katkoneft/"
                        className="acredit"
                    >
                        <div className="ticker__item">
                            <img
                                src={katko}
                                alt="КаткоНефть"
                            />
                        </div>
                    </a>
                    <a href="https://www.integra.ru/" className="acredit">
                        <div className="ticker__item">
                            <img
                                style={{ marginTop: 10 }}
                                src={logo_integra}
                                alt="Integra"
                            />
                        </div>
                    </a>
                    <a href="https://www.slb.ru/" className="acredit">
                        <div className="ticker__item">
                            <img
                                className="schlumberger"
                                src={schlumberger}
                                alt="Schlumberger"
                            />
                        </div>
                    </a>
                    <a href="https://www.gisns.ru/" className="acredit">
                        <div className="ticker__item">
                            <img
                                className="gisnslogo"
                                src={gisnslogo}
                                alt="ГИС Нефтесервис"
                            />
                        </div>
                    </a>
                    <a href="https://tubingrent.ru/" className="acredit">
                        <div className="ticker__item" style={{ marginTop: 20 }}>
                            <img
                                className="tubingrent"
                                src={tubing}
                                alt="Тюбинг Рент"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div
                className="container-fluid plast__two"
                style={{ marginTop: 200, marginBottom: 100 }}
            >
                <div className="col-10 offset-0 offset-lg-1">
                    <h1 className="pageTitle pageTitle_main" style={{ marginBottom: 25 }}>
                        Офис<span style={{ color: "#30f" }}>.</span>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-10 col-sm-4 col-lg-3 offset-0 offset-lg-1">
                        <h2 className="vacancy-card__title">
                            <span className="numbers-big-blue">Адрес</span>
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>
                                Нефтеюганский район, г.п. Пойковский, Промзона стр. 9. <br />{" "}
                                <span onClick={YandexCart} className="cart__link">{yandexCartText}</span>{" "}
                            </span>
                        </p>
                    </div>
                    <div className="col-10 col-sm-4 col-lg-3 offset-0 offset-lg-1">
                        <h2 className="vacancy-card__title">
                            <span className="numbers-big-blue">График</span>
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>ПН-ПТ, С 8:00 до 17:00</span>
                        </p>
                    </div>
                    <div className=" col-11 col-sm-4  col-lg-4 offset-0 offset-lg-0">
                        <h2 className="vacancy-card__title">
                            <span className="numbers-big-blue">Номер</span>
                        </h2>
                        <p className="vacancy-card__text vacancy-card__text_description">
                            <span>8-3463-210-555</span>
                        </p>
                    </div>
                </div>
                <div className="row cart" style={{ marginTop: 10 }}>
                    <iframe
                        max-width={1100}
                        height={420}
                        className="col-12 col-md-10 offset-0 offset-lg-1 Yandex__cart"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac54b69af654a7bd29986ab009e9b97863b853d15cc414dd85d5dca51bbc17cec&source=constructor"
                        frameBorder={0}
                    />
                </div>
            </div>
            <div
                className="position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 11, width: 260, textAlign: "center" }}
            >
                <div
                    style={{ backgroundColor: "#30f", borderRadius: 20 }}
                    id="liveToast"
                    className="toast"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-body">
                        <span
                            className="vacancy-card__text vacancy-card__text_description"
                            style={{ color: "#fff", opacity: '1'}}
                        >
                            Номер скопирован
                        </span>
                    </div>
                </div>
            </div>
            <PopupLogo />
        </>


    )
}

export default Body

import React, { useState } from 'react';
import logo from '../images/ets.svg'
import $ from 'jquery';
import { Link } from 'react-router-dom';
import scssBase from '../styles/styles.scss'

const Header = () => {
  $(document).on('click', function (e) {
    $('<div class="cursor">')
      .css({
        top: e.clientY,
        left: e.clientX
      })
      .appendTo($(document.body))
      .on('animationend webkitAnimationEnd', function (e) {
        $(this).remove();
      });
  });
  let [clickNum, setclickNum] = useState(false)

  function OpenPopupLogo() {
    console.log(clickNum)
    setclickNum((clickNum) => !clickNum)

    if (clickNum === true) {
      $('.site-header').css('background', '#f6f6f6');
      $('body').css('overflow-y', 'auto');
    } else {
      $('.site-header').css('background', 'white');
      $('body').css('overflow-y', 'hidden');
      $('body').css('display', 'hidden');

    }
  }


  function TopBtnClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const ScrollBtnOpacity = React.useCallback(() => {
    const topBtn = document.querySelector('.top-btn')
    topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;
  }, [])

  window.onscroll = function () {
    ScrollBtnOpacity()
  };


  return (
    <>
      <link href={scssBase} rel="stylesheet" type="text/css" />

      <div className="sticky-top site-header">
        <nav className=" navbar navbar-expand-lg">
          <div className="container">
            <div className="row">
              <div className="">
                <Link to='/' id="logo" className="navbar-brand  col-4 col-sm-7 col-md-4 " style={{ color: "#000" }}>
                  <img
                    src={logo}
                    alt="логотип"
                    className=""
                  />
                </Link>
              </div>
            </div>
            <div
              className="collapse justify-content-end navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item header__menu-item">
                  <Link className="nav-link " to='/contacts'>
                    Контакты
                  </Link>
                </li>
                <li className="nav-item header__menu-item">
                  <Link className="nav-link" to='/vacancies'>
                    Вакансии
                  </Link>
                </li>
                <li className="nav-item header__menu-item">
                  <Link className="nav-link " to='/video'>
                    Видео
                  </Link>
                </li>
                <li className="nav-item header__menu-item">
                  <Link className="nav-link " to='/galery'>
                    Галерея
                  </Link>
                </li>
                <li className="nav-item header__menu-item">
                  <Link className="nav-link " to='/blog'>
                    Блог
                  </Link>
                </li>
              
              </ul>
            </div>

            <span className="nav-item ">
              <a href="mailto:disp2010@etalonts.ru?subject=Письмо с сайта&body=Здравствуйте!" className="contacts__item-text  navbar-collapse-item navbar-collapse-item_mail">
                <i style={{ float: "left", color: "#30f" }} className="gg-mail" />
              </a>
              <a
                href="tel:+79821832640"
                className="contacts__item-text  navbar-collapse-item"
              >
                <i style={{ float: "left", color: "#30f" }} className="gg-phone" />
              </a>
              <button
                className="header__burger_button"
                style={{ border: "none", borderRadius: "62.4375rem" }}
              >
                <div
                  className="navbar-toggler first-button header__burger"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarToggleExternalContent9"
                  aria-controls="navbarToggleExternalContent9"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div className="header__burger-text">
                    <div onClick={OpenPopupLogo}>{clickNum ? 'Закрыть' : 'Меню'}</div>
                  </div>
                </div>
              </button>
            </span>
            <div
              className="accordion-body visible "
              style={{ marginTop: 3, padding: 5 }}
            >
              <a
                href="https://www.youtube.com/watch?v=dujixdTgSuM&t=72s"
                className="contacts__item-text  navbar-collapse-item navbar-collapse-item_mail"
              >
                <i className="gg-mail d-inline" />
              </a>
              <a
                href="tel:+79821832640"
                className="contacts__item-text  navbar-collapse-item"
              >
                <i className="gg-phone d-inline" />
              </a>
            </div>
          </div>
        </nav>

      </div>


      <div className={clickNum ? 'popup' : 'popup visible'}>
        <div className="popup__containerInfo">

          <span className="header__menu-item-collapse">
            <Link className="header__menu-item-collapse" to="/contacts">
              <span className="header__menu-item-collapse">
                <p>Контакты</p>
              </span>
            </Link>
          </span>
          <Link className="header__menu-item-collapse" to="/vacancies">
            <span className="header__menu-item-collapse">
              <p>Вакансии</p>
            </span>
          </Link>
          <Link className="header__menu-item-collapse" to="/galery">
            <span className="header__menu-item-collapse">
              <p>Галерея</p>
            </span>
          </Link>
          <Link className="header__menu-item-collapse" to="/video">
            <span className="header__menu-item-collapse">
              <p>Видео</p>
            </span>
          </Link>
          <Link className="header__menu-item-collapse" to="blog">
            <span className="header__menu-item-collapse">
              <p>Блог</p>
            </span>
          </Link>
        </div>
      </div>

      <button className="top-btn" onClick={TopBtnClick}>
        <a className="link link__arrowed">
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
          >
            <g
              fill="none"
              stroke="#30f"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            >
              <circle className="arrow-icon__circle" cx={16} cy={16} r="15.12" />
              <path
                className="arrow-icon__arrow"
                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
              />
            </g>
          </svg>
        </a>
      </button>

    </>
  )
}

export default Header
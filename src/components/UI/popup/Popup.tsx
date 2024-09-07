import React from 'react'
import { Link } from 'react-router-dom';
interface PopupProps {
  clickNum: boolean;
}
const Popup = ({ clickNum }: PopupProps) => {
  return (
    <>
    <div className={clickNum ? 'popup' : 'popup visible'}>
    <div className="popup__containerInfo">

      <span className="header__menu-item-collapse">
      <Link to="/contacts">
        <p>Контакты</p>
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
    </>
  )
}

export default Popup;
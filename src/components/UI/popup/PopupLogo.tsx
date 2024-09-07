import React from 'react'
import PopLogo from '../../../images/glavnaya/ЭТС-вертикальный.png'

const PopupLogo = () => {
  
  return (
    <div className="popup__logo">
  <div className="popup__container__logo">
    <img
      src={PopLogo}
      alt="логотип"
      className="img-fluid"
    />
  </div>
</div>

  )
}

export default PopupLogo;

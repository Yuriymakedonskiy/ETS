import React from 'react'
import $ from 'jquery';
import scss from '../../../styles/PopupSiberia.scss'

const PopupSiberia = () => {
    setTimeout(scrollBar, 1400)
    function scrollBar() {
      $('body').css('overflow-y', 'auto');
    }

  
  return (
  <>

    <link href={scss} rel="stylesheet" type="text/css" />

    <div className="popup__siberia">
  <div className="popup__container__siberia">
    <h1>Западная Сибирь</h1>
  </div>
</div>
  </>

  )
}

export default PopupSiberia
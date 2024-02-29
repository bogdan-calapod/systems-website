/**
* Systems contact form
*/

import React, { Component } from 'react'

import Main from './components/Main'

class Contact extends Component {
  render () {
    return (
      <div>
        <Main />
        <iframe
          style={{ width: "100%", height : "100%", border: "0", }}
          name="contactMap"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11395.67765989447!2d26.065345296387896!3d44.43481521563508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c5d638d499%3A0xfc9bc5cf6c25e0bc!2sCentrul+PRECIS!5e0!3m2!1sro!2sro!4v1516021178554"
          src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmdQ41sUBskARvOAlbM_Fm_w&key=AIzaSyAWMfQ8ENz8f_88_vX-MlcdCdMM5h4X80E"
          allowFullScreen
        />
      </div>
    )
  }
}

export default Contact

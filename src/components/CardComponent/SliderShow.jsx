import React from 'react'
import imagen1 from '../../img/febrero5.png'
import imagen2 from '../../img/cr6.jpg'
import imagen3 from '../../img/cr7.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const images = [
    imagen1,
    imagen2,
    imagen3
  ];  

export default function SliderShow() {
    return (

        <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="" />)
          }
        </Zoom>
      </div>

    )
}

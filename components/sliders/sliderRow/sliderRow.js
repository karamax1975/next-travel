import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";

import {_getDataFromAPI} from '../../../lib/client/getData';
import config from '../../../config.json'

export default function SliderRow({ titleSection }) {
  const [arraySlide, setArraySlide] = useState([])
  const slideRef = useRef();

  const {sliders}=config;

  useEffect(() => {
    // async function getSlide() {
    //   const response = await fetch('api/sliderRow');
    //   return await response.json()
    // }
    _getDataFromAPI(sliders[0]).then(data => {
      setArraySlide(data);
    })
  }, [])


  const settings = {
    // dots: true,
    className: "slideShowRow",
    touchMove: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 8000,
    speed: 1000,
    autoplay: true,
    infinite: true,
  }


  function PrevArrow() {
    const prev = () => {
      slideRef.current.slickPrev()
    }
    return (
      <div className="nav-slider PrevArrow" onClick={() => prev()}>
        <svg viewBox="0 0 10 14" >
          <path d="M2 1.5L7 7L2 12.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  function NextArrow() {
    const next = () => {
      slideRef.current.slickNext()
    }
    return (
      <div className="nav-slider NextArrow" onClick={() => next()}>
        <svg viewBox="0 0 10 14" >
          <path d="M8 1.5L3 7L8 12.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  const Loader = () => {
    return (
      <div>Loader</div>
    )
  }

  return (
    <div className="SliderRow container">
      <div className="row">
        <div className="col">
          <h5 className="section-title">{titleSection}</h5>
          {arraySlide.length>0
          ?<Slider {...settings} ref={slideRef}>
          {arraySlide.map(item => {
            return (
              <div className="sliderRow-item_wrapper" key={item._id}>
                <div className="sliderRow-item">
                  <div className="sliderRow-item_img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="sliderRow-item_description">
                    <div className="description_title">
                      <Link href={`/tour/[id]`} as={`/tour/${item.link}`}>
                        <a>{item.title}</a>
                      </Link>
                      {/* <span>{item.description}</span> */}
                    </div>
                    <div className="description_prise-info">
                      <span>{item.duration}</span>
                      <p>{item.prise}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
          :<Loader/>
        }
        </div>
      </div>
    </div>
  )
}
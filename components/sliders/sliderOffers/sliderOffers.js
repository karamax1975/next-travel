import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Loader from './loader';
import SlideItem from './sliderItem';


export default function SliderOffers() {

  const [slide, setSlide] = useState([])
  const [numberSlide, setNumverSlide] = useState(6)
  const [activeSlide, setActiveSlide] = useState(null)
  const slideRef = useRef();

  async function getSlide() {
    const request = await fetch('api/type');
    const data = await request.json();
    return data.map(element => element)

  }

  

  useEffect(() => {
    getSlide().then(data => {
      setSlide(data);
    })
  }, [])


  const offerItem = slide.map((offer, index) => {
    const className=index!=activeSlide?"offerItem":"offerItem active";

    return (
      <SlideItem
        item={offer}
        key={offer._id}
        setActive={setActiveSlide}
        indexActive={index}
        className={className}
        />
    )
  })

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

  const settings = {
    // dots: true,
    className: "sliderOffers",
    touchMove: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: numberSlide,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
  }

  return (
    <>
      {slide.length > 0
        ? <Slider {...settings} ref={slideRef}>
          {offerItem}
        </Slider>
        : <Loader />
      }
    </>
  )
}
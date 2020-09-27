import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


export default function IndexSlider() {
    const slideRef = useRef();
    const [arraySlide, setArraySlide] = useState([]);
    const [posLeft, setPosLeft] = useState(0);
    // const [width, setWidth]=useState(0)

    useEffect(() => {
        
        async function getSlideList() {
            const response = await fetch('/api/indexSlider');
            let list = await response.json();
            setArraySlide(list);
        }
        getSlideList()

        // ----------- Устанавливаем левый край container
        const bodyWidth = document.body.clientWidth;
        let container = 1320;
        if (bodyWidth > 1400) {
            container = 1320;
        }
        if (bodyWidth > 1200 && bodyWidth < 1400) {
            container = 1140;
        }
        setPosLeft(Math.round(Number(document.body.clientWidth - container) / 2))

    }, [])

    function SampleNextArrow() {
        const gotoNext = () => {
            slideRef.current.slickNext()
        }
        return (
            <div className="nav-slider NextArrow" onClick={() => gotoNext()}>
                <svg viewBox="0 0 13 36">
                    <path d="M1 30L6.5 35L12 30" />
                    <line x1="1" y1="-1" x2="33" y2="-1" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5.51953 35)" />
                </svg>
            </div >
        );
    }
    function SamplePrevArrow() {
        const gotoPrev = () => {
            slideRef.current.slickPrev()
        }
        return (
            <div className="nav-slider PrevArrow" onClick={() => gotoPrev()}>
                <svg viewBox="0 0 13 36">
                    <path d="M1 7L6.5 2L12 7" />
                    <line x1="6.51953" y1="3" x2="6.51953" y2="35" />
                </svg>
            </div>
        );
    }

    const preLoad = <div className="indexSliderPreloader"></div>

    var settings = {
        dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "index-slider",
        dotsClass: 'nav-slider_dots',
        touchMove:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <ul> {dots} </ul>
        ),
        customPaging: () => (
            <span></span>
        )
    };

    return (
        <div className="indexSlider">
            <Slider {...settings} ref={slideRef}>
                {arraySlide.length > 0
                    ? arraySlide.map(item => {
                        return (
                            <div key={item._id} className="slideItem">
                                <img src={item.imgUrl}></img>
                                <div className="slideItem_textContent" style={{ left: `${posLeft}px` }}>
                                    <h2>{item.title}</h2>
                                    <div className="slideItem_description">
                                        <p>от {item.description}</p>
                                        <Link href={`/tour/[id]`} as={`/tour/${item.link}`}><a>Подробнее</a></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : preLoad}
            </Slider>
        </div>

    );

}


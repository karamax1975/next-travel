import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


export default function IndexSlider() {
    const slideRef = useRef();
    const bodyRef = useRef();
    const [arraySlide, setArraySlide] = useState([]);
    const [bodyWidth, setBodyWidth]=useState(0)

    

    useEffect(() => {
        async function getSlideList() {
            const response = await fetch('/api/indexSlider');
            let list = await response.json();
            setArraySlide(list);
        }
        getSlideList()
        setBodyWidth(document.body.clientWidth);
    }, [])

    console.log(bodyWidth);
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

    var settings = {
        // dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "index-slider",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="indexSlider">
            <Slider {...settings} ref={slideRef}>
                {arraySlide.map(item => {
                    return (
                        <div key={item._id} className="slideItem">
                            <img src={item.imgUrl}></img>
                            <div className="slideItem_textContent">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <Link href={`/tour/[id]`} as={`/tour/${item.link}`}><a>Подробнее</a></Link>
                            </div>
                        </div>
                    )
                })}

            </Slider>
        </div>
    );






}
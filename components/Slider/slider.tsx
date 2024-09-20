import React, { useState } from 'react';
import style from './slider.module.scss';
import Image from "next/image";
import img1 from "@/images/slider/slider1.png";
import img2 from "@/images/slider/slider2.png";
import img3 from "@/images/slider/slider3.png";
import img4 from "@/images/slider/slider4.png";
import img5 from "@/images/slider/slider5.png";
import BtL from "@/images/home/btn1.png"
import BtR from "@/images/home/btn2.png"

const Slider: React.FC = () => {
    const images = [img1, img2, img3, img4, img5];
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((currentImage + 1) % images.length);

        if (count === 5) {
            setCount(1);
          } else {
            setCount(count + 1);
          }
    };

    const prevSlide = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);

        if (count === 1) {
            setCount(5);
        } else {
            setCount(count - 1);
        }
    };
    const [count, setCount] = useState(1);
    



    return (
       
        <div className={style.blockBottom}>
            <div className={style.slider}>
                <Image src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />

                <div className={style.BlockBt}>
                    <div className={style.sliderBts}>
                        <button onClick={prevSlide} className={style.sliderBt}>
                            <Image className={style.sliderImg} src={BtL} />
                        </button>

                        <button onClick={nextSlide} className={style.sliderBt}>
                            <Image className={style.sliderImg} src={BtR} />
                        </button>
                    </div>

                    <div className={style.Number}>
                        <div className={style.Numbers}>
                            <p className={style.Num} id="NumActive">0{count}</p>
                            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H40" stroke="white" />
                            </svg>
                            <p className={style.Num}>05</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Slider;
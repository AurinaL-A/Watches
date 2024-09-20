'use client'
import Image from "next/image";
import style from "./page.module.scss"
import Link from "next/link";
import tic from "@/images/home/tictac.png"
import tictac from "@/images/home/tic.png"
import btn1 from "@/images/home/btn1.png"
import btn2 from "@/images/home/btn2.png"
import React, { useState } from "react"
import slide1 from "@/images/home/slide2.png"
import slide2 from "@/images/home/slide3.png"
import gif from "@/images/home/gif.png"
import new1 from "@/images/home/green.png"
import new2 from "@/images/home/green2.png"
import sale1 from "@/images/sale/image1.png"
import sale2 from "@/images/sale/image2.png"
import sale3 from "@/images/sale/image3.png"
import sale4 from "@/images/sale/image4.png"
import sale5 from "@/images/sale/img.png"
import Card from "@/components/Cards/Card"
import Masive from "./base"
import Slider from "@/components/Slider/slider"






export default function Home() {

  return (
    <main className={style.main}>
      <div className={style.backblack}>
        <div className={style.container}>

          <div className={style.hello}>
            <div className={style.welcome}>
              <h1 className={style.h1__welcom}>Welcome to our collection <br /> of premium watches</h1>
              <p className={style.p__welcom}>Our watches are not just timepieces, but <br /> also an expression of your personality and <br /> lifestyle. From classic designs to modern <br /> ones, we have a watch to suit every taste and occasion.</p>
            </div>
            <div className={style.info}>
              <div  className={style.swiiper}>
                
                  
                    <Slider/>
                  
                
              </div>
              <Image className={style.tictac}  src={tictac} alt="Rocket" />
            </div>

          </div>
        </div>

      </div>
      <div className={style.container}>
        <div className={style.about} >


          
          <div className={style.aboutexts}>
          <h2 id="1" className={style.about__h2}>About us</h2>
            <div className={style.toptext}>
              <p className={style.aboutext}>Welcome to our premium watch collection, where luxury and style
                meet functionality and precision. Our selection of timepieces
                embodies the very best in Swiss craftsmanship and engineering,
                ensuring that you'll always have a reliable and stylish accessory on your wrist.</p>
              <p className={style.aboutext}>At our premium watch collection, we believe that a watch
                is more than just a timekeeping device – it's a statement
                piece that reflects your personality and style. So why
                settle for anything less than the best? Browse our
                collection today and discover the perfect watch for you.</p>
            </div>
          </div>

            <div className={style.imagabout}>
              <Image className={style.img1} src={gif} alt="sd" />
            </div>
          
        </div>
      </div>

      <div className={style.back}>
        <div className={style.container}>
          <div className={style.catalog}>
          <h2 className={style.h2__catalog} id="2">Catalog</h2>

          <div className={style.Cards}>
          {Masive.map((card, i) => <Card img={card.img} title={card.title} price={card.price}   />)}
        </div>
          </div>
        </div>
      </div>


      <div className={style.container}>

        <div className={style.newwatches}>
          <div className={style.watchtext}>
            <p className={style.mininewtext}>New watches</p>
          <h2 className={style.h2new}>Green And Bronze—The <br /> Match Made In Heaven</h2>
          </div>
          
          <div className={style.imagenew}>

            <Image className={style.newimg1} src={new1} alt="sd" />
            <Image className={style.newimg1} src={new2} alt="sd" />
          </div>
        </div>
      </div>
      <div className={style.back}>
        <div className={style.container}>
          <div className={style.sale}>
            <h2 className={style.h2__sale} id="3">Sale</h2>

            <div className={style.filling__sale}>
              <div className={style.imagesales}>
                <div className={style.imagesale}>
                  <Image className={style.saleimg} src={sale1} alt="sd" />
                  <Image className={style.saleimg} src={sale2} alt="sd" />
                  <Image className={style.saleimg} src={sale3} alt="sd" />
                  <Image className={style.saleimg} src={sale4} alt="sd" />
                </div>
                <Image className={style.saleimg5} src={sale5} alt="sd" />
              </div>
              <div className={style.blocktext}>
                <h3 className={style.sale__h3}>Greenlane Watch By Police For MenHT </h3>
                <p className={style.mini_sale_text}>Product tag: PEWJK2227003</p>

                <div className={style.pricesale}>
                  <p className={style.price__text1}>€700</p>
                  <p className={style.price__text2}>€1000</p>
                </div>

                <div className={style.description}>
                  <h3 className={style.description__h3}>Description</h3>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H16" stroke="#141414" />
                  </svg>
                </div>
                <p className={style.mini_sale_text}>Richly detailed with an understated design - the Police <br /> Men’s Greenlane watch features a versatile <br /> multifunction design that fits effortlessly into work <br /> and play. The steel case is adorned with a semi- 
                <br />transparent black dial. The timepiece exhibits a <br /> contrast through a black IP bracelet with matching <br /> crown and pushers.</p>

                <div className={style.description}>
                  <h3 className={style.description__h3}>DETAILS & FEATUREStion</h3>
                  <svg  width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H16" stroke="#141414" />
                  </svg>
                </div>
                <p className={style.mini_sale_text}>Gender: man
                    Size: 46x54.5mm <br />
                    Case Colour: Steel <br />
                    Band Material: Metal <br />
                    Case Material: Metal <br />
                    Features: Multifunction <br />
                    Water Resistant: 5 (ATM) <br />
                    Band Colour: Steel</p>


              </div>

            </div>
          </div>
        </div>
      </div>



    </main>

  );


}




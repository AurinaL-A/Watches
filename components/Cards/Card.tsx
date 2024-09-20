"use client"
import Image from "next/image";
import style from "./Card.module.scss";
import { useState } from "react";
import Link from "@/node_modules/next/link";
import { StaticImageData } from "@/node_modules/next/image";

interface ICard {
    title: string;
    img:StaticImageData;
    price:string;
  }



const Card5 = ({ title, img, price }:ICard) => {
    const [isModal, setmodal] = useState(false)
    return (

        <>
            {isModal &&
                <div className={style.modal}>
                    <div className={style.modal_back}></div>
                    <div className={style.modal_content}>
                        <div className={style.flex}>
                            <div className={style.info}>
                                <div className={style.image}>
                                    <Image src={img} alt="gt" />
                                </div>

                                <div className={style.textdiv}>
                                    <div className={style.text}>
                                        {title}
                                    </div>
                                    <div className={style.text2}>
                                        {price}
                                    </div>
                                </div>
                            </div>

                            <form className={style.conf}>
                                <div className={style.inputs}>
                                    <div className={style.aligh}>
                                        <p>Full name</p>

                                    <button onClick={() => setmodal(!isModal)} className={style.btn_ext}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18" stroke="#141414" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 6L18 18" stroke="#141414" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    </div>
                                    
                                    <input type="text" required placeholder="Enter your full name" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Email</p>
                                    <input type="mail" required placeholder="Enter your email" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Card number</p>
                                    <input type="number" required placeholder=" Enter card" />
                                </div>
                                <div className={style.inputs}>
                                    <p>Comments</p>
                                    <textarea className={style.coment} required placeholder=" Enter your text" />

                                </div>
                                <div className={style.submit}>
                                    <input type="submit" className={style.submit_btn} value="submit" />
                                    <p>By clicking on “Submit” button, you agree to our Privacy Policy,

                                        and allow Promodo to use this information for marketing purposes.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
            <div className={style.Card} onClick={() => setmodal(!isModal)}>
                <div className={style.image}>
                    <Image src={img} alt={title} />
                </div>
                <div className={style.textdivs}>
                    <div className={style.text}>
                        {title}
                    </div>
                    <div className={style.textprice}>
                        {price}
                    </div>

                </div>
            </div>
        </>
    );
}
export default Card5;
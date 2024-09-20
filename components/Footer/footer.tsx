import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from './footer.module.scss'
import logo from "@/images/logo.svg"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__row}>
                <div className={styles.logo}>
                        <Link href={ROUTER.HOME}  className={styles.text}>
                            <Image className={styles.svq} src={logo} alt="sdd"/>
                            </Link>
                    </div>
                    <div className={styles.menu}>
                            <Link href={ROUTER.ABOUT} className={styles.text}>ABOUT US</Link>
                            <Link href={ROUTER.CATALOG} className={styles.text}>CATALOG</Link>
                            <Link href={ROUTER.SALE} className={styles.text}>SALE</Link>
                            
                        </div>
                        <div className={styles.private}>
                            <p className={styles.private__text}>Privacy Policy</p>
                            <p className={styles.private__text}>Terms of Service</p>

                        </div>
                    
                </div>
            </div>
        </footer>
    )

}

export default Footer;
import styles from "./footer.module.css"
import { facebookIcon, tiktokIcon, instagramIcon } from "@assets/icons"

export function Footer(){
    return (
        <>
         <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.info1}>
                        <p className={styles.titluDetaliu}>Adresa</p>
                        <p>str. Mitropolit Varlaam 63</p>
                    </div>
                    <div className={styles.info1}>
                        <p className={styles.titluDetaliu}>Contact</p>
                        <p>022277848</p>
                    </div>
                    <div className={styles.info1}>
                        <p className={styles.titluDetaliu}>Poșta electronică</p>
                        <p>piata.centrala@gmail.com</p>
                    </div>
                    <div className={styles.info1}>
                    <p className={styles.titluDetaliu}>Suport clienți</p>
                    <p>022345654</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.info1}>
                        <p className={styles.titluDetaliu}>Căi de acces</p>
                        <p>➜ strada Armenească</p>
                        <p>➜ strada Tighina</p>
                    </div>
                    <div className={styles.info1}>
                    <p className={styles.titluDetaliu}>Orarul de activitate</p>
                    <p className={styles.zile}>Luni - Vineri</p>
                    <p className={styles.ore}>06:00 - 18:00</p>
                    <p className={styles.zile}>Sâmbătă - Duminică</p>
                    <p className={styles.ore}>07:00 - 16:00</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <p className={styles.titluDetaliu}>Zile nelucrătoare</p>
                    <p>8 martie</p>
                    <p>1 mai</p>
                    <p>9 mai</p>
                    <p>27 august</p>
                    <p>31 august</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.titluDetaliu}>Rețele sociale</p>
                    <div className={styles.socialIcons}>
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={tiktokIcon} alt="TikTok" />
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
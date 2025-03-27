import styles from './cardMagazin.module.css'

export function CardMagazin({magazin}){
    return(
        <>
        <div className={styles.magazin}>
            <img className={styles.imagine} src={magazin.image} alt={magazin.title} />
            <div className={styles.detalii}>
                <p className={styles.location}>{magazin.location}</p>
                <p className={styles.nume}>{magazin.title}</p>
                <p className={styles.orar}>{magazin.openHours}</p>
                <p className={styles.days}>{magazin.openDays}</p>
            </div>
        </div>
        </>
    )
}
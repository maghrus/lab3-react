import styles from './cardZona.module.css'

export function CardZona({zona}){
    return(
        <>
        <div className={styles.zona}>
            <img className={styles.imagine} src={zona.image} alt={zona.title} />
            <div className={styles.detalii}>
                <p className={styles.title}>{zona.title}</p>
                <p className={styles.description}>{zona.description}</p>
            </div>
        </div>
        </>
    )
}
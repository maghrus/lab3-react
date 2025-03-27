import styles from './cardProdus.module.css'

export function CardProdus({produs}){
    return (
        <>
        <div className={styles.produs}>
            <img className={styles.imagine} src={produs.image} alt={produs.title} />
            <h3>{produs.title}</h3>
            <p className={styles.pretVechi}><s>{produs.pretVechi}</s></p>
            <p className={styles.pretReducere}>{produs.pretReducere}</p>
            <p className={styles.zona}>{produs.zona}</p>
        </div>
        </>
    )
}
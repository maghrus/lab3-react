import styles from "./oferteTitle.module.css"

export function OferteTitle(){
    return (
        <>
        <div>
            <h1 className={styles.titlu}>Super Oferte</h1>
            <h3 className={styles.subTitlu}>la produsele tale preferate</h3>
        </div>
        </>
    )
}
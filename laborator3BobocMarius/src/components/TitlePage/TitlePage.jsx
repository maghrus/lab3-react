import styles from "./titlePage.module.css"

export function TitlePage({text}){
    return(
        <>
        <h1 className={styles.text}>{text}</h1>
        </>
    )
}
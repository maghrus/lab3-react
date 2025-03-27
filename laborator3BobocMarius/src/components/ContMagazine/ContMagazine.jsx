import styles from './contMagazine.module.css'
import { CardMagazin } from '@components/Card/CardMagazin'
import magazine from '@data/magazine.json'

export function ContMagazine(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.magazine}>
            {magazine.map((magazin) => (
                <CardMagazin key = {magazin.id} magazin = {magazin}/>
            ))}
            </div>
        </div>
        </>
    )
}
import styles from './Oferte.module.css'
import {CardProdus} from '@components/Card/CardProdus'
import produse from '@data/produse.json'

export function Oferte(){
    return (
        <><div className={styles.container}> 
        <div className={styles.produse}>
            {produse.map((produs) => (
                <CardProdus key={produs.id} produs={produs}/>
            ))}
        </div>
        </div>
        </>
    )
}
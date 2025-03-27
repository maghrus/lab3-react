import styles from "./contZone.module.css"
import {CardZona} from "@components/Card/CardZona"
import zone from "@data/zone.json"

export function ContZone(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.zone}>
                    {zone.map((zona) => (
                        <CardZona key = {zona.id} zona = {zona}/>
                    ))}        
                </div>
            </div>
        </>
    )
}
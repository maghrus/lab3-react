import styles from "./navbar.module.css"
import { logoSVG } from "@assets/icons"
import {Link} from "@components/navigation/Link" 

export function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.logoDiv}>
                <img className={styles.logo} src={logoSVG} alt="logo"/>
            </div>
            <div className={styles.links}> 
                <Link className={styles.link} to="/">
                    Acasă
                </Link>
                <Link className={styles.link} to="/magazine">
                    Magazine
                </Link>
                <Link className={styles.link} to="/zone">
                    Zone
                </Link>
                <Link className={styles.link} to="/">
                    Vânzători
                </Link>
                <Link className={styles.link} to="/">
                    Harta
                </Link>
                <Link className={styles.link} to="/">
                    Parcare
                </Link>
                <Link className={styles.link} to="/">
                    Galerie
                </Link>
                {/* Aici ar trebui să fie toate, dar nu e suficient timp de implementat tot :( */}
                {/* Doar 3 sunt functionale, restul la nivel de concept, poate mai reușesc ceva până sâmbătă  */}
            </div>


        </nav>
        </>
    )
}
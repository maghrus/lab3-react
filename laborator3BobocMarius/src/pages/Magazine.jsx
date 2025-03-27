import { ContMagazine } from "@components/ContMagazine";
import {Navbar} from "@components/Navbar"
import {TitlePage} from "@components/TitlePage"

function Magazine(){
    return(
        <>
        <TitlePage text="Magazine"/>
        <ContMagazine/>
        </>
    );
}

export default Magazine;
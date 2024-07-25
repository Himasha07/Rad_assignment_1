import {AboutItems} from "../components/AboutItems"
import { Link, Outlet } from "react-router-dom";

function AboutNavBar(){
    return(
    <>
    <nav className="aboutItems">
           <ul>
            {AboutItems.map((item,index)=>{
                        return(
                        <li key={index}>
                                
                            <Link className={item.cName} to={item.url}>
                            {item.title}
                            </Link>
                        </li>
                        );
                    })}
            </ul> 
        </nav>
        <Outlet/>
        </>
    )
}
export default AboutNavBar;
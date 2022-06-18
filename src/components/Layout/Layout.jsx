import {NavLink, Outlet, useLocation} from "react-router-dom"

import "./Layout.scss";
import {LocationDisplay} from "../../App";

const Layout = () => {


    return(
        <div>
            <Outlet/>

            <div className={"nav"}>
                <NavLink className={"nav__item"} to={"/"} >
                   <div className={"nav__icon"}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor"
                            className="bi bi-house-fill" viewBox="0 0 16 16">
                           <path fill-rule="evenodd"
                                 d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                           <path fill-rule="evenodd"
                                 d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                       </svg>
                   </div>
                    <div className={"nav__item_name"}> Home </div>
                </NavLink>
                <NavLink className={"nav__item"} to={"/contacts"}>
                    <div className={"nav__icon"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor"
                             className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                        </svg>
                    </div>
                    <div className={"nav__item_name"}> Contacts </div>
                </NavLink>
                <NavLink className={"nav__item"} to={"/about"}>
                    <div className={"nav__icon"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor"
                             className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                    </div>
                    <div className={"nav__item_name"}> About </div>
                </NavLink>
            </div>
            <LocationDisplay />
        </div>
    )

}

export default Layout;
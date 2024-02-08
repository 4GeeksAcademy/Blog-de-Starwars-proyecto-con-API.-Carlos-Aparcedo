import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Login } from "../views/login";
export const Navbar = () => {
    const{store,actions} = useContext (Context)
    return (
        <nav className="navbar bg-black">
            <div className="container-fluid">
                <Link to="/">
                    <a className="navbar-brand"></a>
                    <img className="width-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"></img>
                </Link>
                <Link className="btn btn-success" to="/signin">
                    Login
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            favoritos {store.favoritos.length}
                        </button>
                        <ul className="dropdown-menu">
                            {store.favoritos.map((element)=>{
                                return(
                                    <li><a className="dropdown-item" href="#">{element}</a>
                                    <button className="btn btn-danger" onClick={()=> actions.removeFavorites(element)}>x</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
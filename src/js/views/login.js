import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formulario } from "../component/formulario";
export const Login = (email,password) => {
    const{store,actions} = useContext (Context)
    console.log(email,password);
    return (
        <Formulario/>
    );
};
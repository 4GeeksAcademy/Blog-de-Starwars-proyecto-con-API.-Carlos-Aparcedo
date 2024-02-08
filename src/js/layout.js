import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import {DetailView} from "./views/vistadetallada";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planetas } from "./views/planetas";
import { Vehicles } from "./views/vehicles";
import { Login } from "./views/login";
// import { useParams } from "react-router-dom";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detailview/:elementos/:id" element={<DetailView/>} />
                        <Route path="/planetas/:id" element={<Planetas/>} />
                        <Route path="/vehicles/:id" element={<Vehicles/>} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};
export default injectContext(Layout);
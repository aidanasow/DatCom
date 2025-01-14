import {Footer, Header} from "modules/index";
import {Outlet} from "react-router-dom";
import classes from "./Layout.module.scss";
import { Loader } from "pages/index";
import {ScrollToTop} from "ui/ScrollToTop/ScrollToTop.jsx";
import {Suspense} from "react";

export const Layout = () => {

    return (
        <div className={classes.block}>
            <Header/>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
            <ScrollToTop/>
            <Footer/>
        </div>
);
};

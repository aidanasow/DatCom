import { Footer, Header } from "modules/index";
import { Outlet, useNavigation } from "react-router-dom";
import classes from "./Layout.module.scss";
import { Loader } from "pages/index";

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className={classes.block}>
      <Header />
      <main>{navigation.state === "loading" ? <Loader /> : <Outlet />}</main>
       <Footer />
    </div>
  );
};

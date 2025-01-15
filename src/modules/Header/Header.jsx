import { Container } from "ui/index";
import classes from "./Header.module.scss";
import { DesktopHeader } from "./components/DesktopHeader/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import {useMediaQuery} from "utils/helpers/useMedia.js";

export const Header = () => {
  const isMobile=useMediaQuery("(max-width: 1000px)");



  return (
    <div className={classes.header}>
      <Container>{isMobile ? <MobileHeader /> : <DesktopHeader />}</Container>
    </div>
  );
};

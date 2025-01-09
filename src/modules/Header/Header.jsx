import { Container } from "ui/index";
import classes from "./Header.module.scss";
import { DesktopHeader } from "./components/DesktopHeader/DesktopHeader";
import { useEffect, useState } from "react";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 850px)`);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={classes.header}>
      <Container>{isMobile ? <MobileHeader /> : <DesktopHeader />}</Container>
    </div>
  );
};

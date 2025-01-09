import classes from "./Container.module.scss";

export const Container = ({ children, slide }) => {
  return (
    <div className={`${classes.container} ${slide && classes.slideContainer}`}>
      {children}
    </div>
  );
};

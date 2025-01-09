import { convertNewlinesToBreaks, truncateString } from "utils/helpers/helpers";
import classes from "./Typography.module.scss";

export const Typography = ({
  font = "",
  variant = "body",
  weight = "",
  upp = "",
  children,
  className,
  color = "",
  truncate = 0,
  id,
  onClick,
  pointer = "",
}) => {
  const Tags = {
    h1: "h1",
    h2: "h2",
    body: "p",
    smallBody: "p",
    extraSmallBody: "p",
  };

  const classNameGenerated = [
    classes[variant],
    classes[weight],
    classes[upp],
    classes[color],
    classes[font],
    classes[pointer],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const TagName = Tags[variant] || "p";

  return (
    <TagName id={id} className={classNameGenerated} onClick={onClick}>
      {!truncate
        ? convertNewlinesToBreaks(children)
        : truncateString(children, truncate)}
    </TagName>
  );
};

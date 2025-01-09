import React from "react";

export const truncateString = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export const convertNewlinesToBreaks = (text) => {
  if (typeof text === "string") {
    return text.split("\r\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  } else {
    return text;
  }
};

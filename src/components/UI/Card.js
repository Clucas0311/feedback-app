import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

export default Card;

Card.defaultProp = {
  reverse: false,
};

Card.protoTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

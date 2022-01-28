import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./UI/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, onDelete }) => {
  const handleClick = () => {
    onDelete(item.id);
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={handleClick}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

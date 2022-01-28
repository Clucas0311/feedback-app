import React from "react";
import Feedbackitem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.protoTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

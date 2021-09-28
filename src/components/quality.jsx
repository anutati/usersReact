import React from "react";
import PropTypes from "prop-types";

const Quality = ({ name, color }) => {
  const getBadgeClass = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
  };
  return <span className={getBadgeClass(color)}>{name}</span>;
};

Quality.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
export default Quality;

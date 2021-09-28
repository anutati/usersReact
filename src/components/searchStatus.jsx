import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const getBageclasses = (number) => {
    let classes = "badge bg-";
    classes += number === 0 ? "danger" : "primary";
    return classes;
  };

  const renderPhrase = (number) => {
    let word = "";
    if (number === 1 || number % 10 === 1) {
      word = number + " человек тусанет с тобой сегодня";
    } else if (number > 4 && number < 15) {
      word = number + " человек тусанет с тобой сегодня";
    } else if (
      number === 2 ||
      number === 2 ||
      number === 4 ||
      number % 10 === 2 ||
      number % 10 === 3 ||
      number % 10 === 4
    ) {
      word = number + " человека тусанут с тобой сегодня";
    } else if (number === 0) {
      word = "Никто с тобой не тусанет";
    }
    return word;
  };

  return (
    <span style={{ fontSize: "25px" }} className={getBageclasses(length)}>
      {renderPhrase(length)}
    </span>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number
};

export default SearchStatus;

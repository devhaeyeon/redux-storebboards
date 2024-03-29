import React from "react";
import { changeScore } from "../redux/actions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = ({ changeScore, score, id }) => (
  <div className="counter">
    <button
      className="counter-action decrement"
      onClick={() => changeScore(id, -1)}
    >
      {" "}
      -
    </button>
    <span className="counter-score">{score}</span>
    <button
      className="counter-action increment"
      onClick={() => changeScore(id, 1)}
    >
      {" "}
      +
    </button>
  </div>
);

Counter.propTypes = {
  changeScore: PropTypes.func,
  score: PropTypes.number,
  id: PropTypes.number
};

const mapActionToProps = dispatch => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
});

export default connect(
  null,
  mapActionToProps
)(Counter);

import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

export class Player extends React.Component {
  static propTypes = {
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number
  };

  render() {
    console.log(this.props.name, " redered");
    const { removePlayer, id, name, score, changeScore } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
        </span>
        <span className="player-name">{name}</span>
        <Counter score={score} id={id} changeScore={changeScore} />
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps);
    // 변경될 props를 비교하영 true or false 리턴
    return nextProps.score !== this.props.score;
  }
}

import React from "react";
import { addPlayer } from "../redux/actions";
import { connect } from "react-redux";

class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = e => {
    // 기본 이벤트 (새로고침) 막기
    e.preventDefault();
    // e.stopPropagation(); 이벤트 버블링 막기
    // this.textInput.current = document.getElementById('id)
    this.props.addPlayer(this.textInput.current.value);
    // reset
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter a player's name"
          ref={this.textInput}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
const mapActionToProps = dispatch => ({
  addPlayer: name => dispatch(addPlayer(name))
});
// 스토어에서 내려 받은 액션을 디스패치하는 콜백펑션으로 바뀜. 액션을 디스패치. 스토어에 리듀스 실행.
export default connect(
  null,
  mapActionToProps
)(AddPlayerForm);

import React from 'react';

export class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = (e) => {
    // 기본 이벤트 (새로고침) 막기
    e.preventDefault();
    // e.stopPropagation(); 이벤트 버블링 막기
    // this.textInput.current = document.getElementById('id)
    this.props.addPlayer(this.textInput.current.value);
    // reset
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name"
          ref={this.textInput}></input>
        <input type="submit" value="Add Player"></input>
      </form>
    );
  }
}

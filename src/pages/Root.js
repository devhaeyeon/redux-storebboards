import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Hero } from "./Hero";
import { Scoreboard } from "./Scoreboard";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <p>공통메뉴</p>
        {/*라우팅 영역*/}
        <Switch />
        <Route exact path="/" component={Home} />
        <Route path="/hero" component={Hero} />
        <Route path="/scoreboard" component={Scoreboard} />
      </BrowserRouter>
    );
  }
}

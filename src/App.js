import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "./actions/auth";
import * as practiceActions from "./actions/practice";
import "./App.css";

class App extends Component {
  render() {
    console.log("posts value", this.props.posts);
    return (
      <div>
        <button onClick={this.props.login}>awesome react app Login</button>
        <button onClick={this.props.logout}>awesome react app Logout</button>
        <input onChange={this.props.practice} />
        {this.props.posts.map(val => {
          return <li key={val.id}> {val.title}</li>;
        })}
      </div>
    );
  }
}

export default connect(
  store => ({
    posts: store.auth.posts
  }),
  { ...authActions, ...practiceActions }
)(App);

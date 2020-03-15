import React, { Component } from "react";
import Posts from "./posts/component/posts";
import UserForm from "./UserForm";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserLog: false
    };
  }
  HandlerUserLog = name => {
    this.setState({
      UserLog: true
    });
  };
  render() {
    const posts = this.state.HandlerUserLog ? (
      <Posts posts={this.props.posts} setPosts={this.props.setPosts} />
    ) : (
      ""
    );
    return (
      <div>
        <UserForm HandlerUserLog={this.HandlerUserLog} />
        {posts}
      </div>
    );
  }
}

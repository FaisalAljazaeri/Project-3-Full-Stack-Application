// import all the requir Component for using
import React, { Component } from "react";
import Posts from "../../posts/component/posts";
import UserForm from "./UserForm";
import { getAllUsers } from "../api";

export default class User extends Component {
  constructor(props) {
    super(props);
    //create state for empty input by false and create an arry for users
    this.state = {
      UserLog: false,
      users: []
    };
  }
  //get all users from API
  componentDidMount() {
    getAllUsers()
      .then(response => {
        this.setState({
          //fetch the data from the arry in response
          users: response.data.users
        });
        console.log("result", response.data.users);
      })
      //if there  any error
      .catch(err => console.log(err));
  }
  //create method login
  UserLog = name => {
    const users = this.state.users;

    // find the selected name that enter by user
    const selectedUsersName = users.find(
      user => user.name.toLowerCase() === name.toLowerCase()
    );
    //check if the names found
    if (selectedUsersName) {
      //create setStete if found return true
      this.setState({
        UserLog: true
      });
    } else {
      //if the name not found return nothing
      this.setState({
        UserLog: false
      });
    }
  };
  render() {
    //Create varible to check the method UserLog if true display else nothing
    const posts = this.state.UserLog ? ( 
      <Posts posts={this.props.posts} setPosts={this.props.setPosts} />
    ) : (
      ""
    );
    return (
      //send the method UserLog to userform and display the post
      <div>
        <UserForm UserLog={this.UserLog} />
        {posts}
      </div>
    );
  }
}

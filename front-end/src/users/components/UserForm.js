import React, { Component } from "react";


export default class UserForm extends Component {
  constructor(props) {
    super(props);
    //create state for empty name
    this.state = {
      name: ""
    };
  }
  //create method to take the input from users
  OnchangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };
  //create method for submit button 
  OnsubmitHandler = e => {
    e.preventDefault();
    // create varible to take the name
    const userName = this.state.name;
    this.setState({
      name: ""
    }) 
    //props the method Userlog from User 
    if ( this.props.UserLog){
    this.props.UserLog(userName);}
    else if (this.props.addnewUser){
    this.props.addnewUser(userName);}
  };
  render() {
    return (
        //create form (lable & input & button)
      <div>
        <form onSubmit={this.OnsubmitHandler}>
          <label>User Name :</label>
          <input
            placeholder="please write your name "
            value={this.state.name}
            onChange={this.OnchangeHandler}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

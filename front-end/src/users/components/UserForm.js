import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name : ""
        }
    }
    OnchangeHandler = e => {
        this.setState({
            name: e.target.value
        });
    };
    OnsubmitHandler = e => {
        e.preventDefault();
  const userName=this.state.name
  console.log("test",userName);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.OnsubmitHandler}>
                    <label >User Name :</label>
                    <input placeholder="please write your name " value={this.state.name} onChange={this.OnchangeHandler} />
                    <button type="submit" >submit</button>
                </form>           
            </div>
        )
    }
}

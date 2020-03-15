import React from 'react';
import './App.css';
import apiURL from './apiConfig';
// import Organization from './organizations/components/Organization';
// import User from './users/components/User';

class App extends React.Component {
    //Creat constructor
    //Definition of an empty array
  constructor(props){
    super(props);
    this.state={
     posts:[]
    };

    console.log('API URL', apiURL);
  }
  ///Creat setPosts 
  setPosts =(posts)=>{
    this.setState({ posts:posts });
  }
 
  render() {
    return(
      <div className ="App">
        {/* <Organization posts={this.state.posts} setPosts={this.setPosts}/> */}
        {/* <User posts={this.state.posts} setPosts={this.setPosts}/> */}

      </div>
        );
      }
      }
      
export default App;
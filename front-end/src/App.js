import React from 'react';
import './App.css';
import Posts from './posts/component/posts';
import apiURL from './apiConfig';
//Creat class App 
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
     {/* //for pass state.posts and setPosts to Posts */}
      <Posts posts={this.state.posts}
      setPosts ={this.setPosts} />
      </div>
        );
      }
      }
      
export default App;
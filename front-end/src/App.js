import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import apiURL from './apiConfig';
import Organization from './organizations/components/Organization';
import User from './users/components/User';

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
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/Organization">Organization</Link>
      </nav>

      <div>
        <Route
          path="/User"
          render={() => (
            <User
            posts={this.state.posts} setPosts={this.setPosts}
            />
          )}
        />

        <Route
          path="/Organization"
          render={() => (
            <Organization
            posts={this.state.posts} setPosts={this.setPosts}
            />
          )}
        />
      </div>
    </Router>
  );
}
}
      
      // <div className ="App">
      //   <Organization posts={this.state.posts} setPosts={this.setPosts}/>
      //   {/* <User posts={this.state.posts} setPosts={this.setPosts}/> */}

      // </div>
      //   );
     
      
export default App;
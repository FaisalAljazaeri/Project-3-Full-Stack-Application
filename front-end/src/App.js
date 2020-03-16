import React from 'react';
// import React Route
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
import { addNewUser } from './users/api';
import UserForm from './users/components/UserForm';
import  OrganizationForm from './organizations/components/OrganizationForm';
import {addNewOrganization} from './organizations/api'
class App extends React.Component {
    //Creat constructor
    //Definition of an empty array
  constructor(props){
    super(props);
    this.state={
     posts:[],
     users:[]
    };

    console.log('API URL', apiURL);
  }
  ///Creat setPosts 
  setPosts =(posts)=>{
    this.setState({ posts:posts });
  }
   
  
  render() {
    return(
      <div>
      {/* //Link Route by Uses Router */}
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
    <UserForm  />
    <OrganizationForm/>
    </div>
  );
}
}
    
      
export default App;
// import all the requir Component for using
import React, { Component } from "react";
import Posts from "../../posts/component/posts";
import UserForm from "./UserForm";
import { getAllUsers, deleteUserById } from "../api";

export default class User extends Component {
    constructor(props) {
        super(props);
        //create state for empty input by false and create an arry for users
        this.state = {
            UserLog: false,
            userLogged: "",
            users: [],
            registeredPosts: [],
            unregisteredPosts: [],
            showRegisteredPosts: false
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

    checkPostRegisteration = (post, username) => {
        return post.users.find(
            user => username.toLowerCase() === user.name.toLowerCase()
        );
    };

    toggleShowPosts = e => {
        this.setState({
            showRegisteredPosts: !this.state.showRegisteredPosts
        });
    };

    //create method login
    UserLog = name => {
        const users = this.state.users;

        // find the selected name that enter by user
        const selectedUsersName = users.find(
            user => user.name.toLowerCase() === name.toLowerCase()
        );
        //check if the names found
        if (selectedUsersName) {
            const registeredPosts = [];
            const unregisteredPosts = [];

            this.props.posts.forEach(post => {
                if (this.checkPostRegisteration(post, name)) {
                    registeredPosts.push(post);
                } else {
                    unregisteredPosts.push(post);
                }
            });

            //create setStete if found return true
            this.setState({
                UserLog: true,
                registeredPosts,
                unregisteredPosts,
                userLogged: selectedUsersName._id
            });
        } else {
            //if the name not found return nothing
            this.setState({
                UserLog: false
            });
        }
    };

    // Create Delete Method for user
    deleteUser = () => {
        console.log('ID to Delete');
        deleteUserById(this.state.userLogged)
            .then(response => {
                console.log('Delete it..');
                this.setState({
                    UserLog: false,
                })
                console.log('Done Delete')
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
        }


    render() {
        const SelectedPosts = this.state.showRegisteredPosts ? (
            <>
                <h1>Registred Posts: </h1>
                {/* Create Button For Delete User */}
                <button onClick={this.deleteUser}>Delete</button>
                <Posts
                    posts={this.state.registeredPosts}
                    setPosts={this.props.setPosts}
                />
            </>
        ) : (
            <>
                <h1>Unregistered Posts: </h1>
                <Posts
                    posts={this.state.unregisteredPosts}
                    setPosts={this.props.setPosts}
                />
            </>
        );

        const btnText = this.state.showRegisteredPosts
            ? "Show Unregistered Posts"
            : "Show Registered Posts";

        return (
            //send the method UserLog to userform and display the post
            <div>
                <UserForm UserLog={this.UserLog} />
                <button onClick={this.toggleShowPosts}>{btnText}</button>
                {SelectedPosts}
            </div>
        );
    }
}

import React from "react";
import "./post.css";
import PostForm from "./PostForm";
//Creat class Post
class Post extends React.Component {
  constructor(props) {
    super(props);
    // To pass preprty editFormActive for button to be by defulte  false
    this.state = {
      editFormActive: false
    };
  }

  // Call parent method to delete post by ID
  deletePost = () => {
    this.props.deletePost(this.props.id);
  };
  //add method to update and write condition to switch either false or true
  updatePost = e => {
    this.setState({
      editFormActive: !this.state.editFormActive
    });
  };

  render() {
    // Delete button that appears if the organization that made the post
    // is logged in
    // add the method to Edit button
    const buttons = this.props.organizationLogged ? (
      <div>
        <button onClick={this.updatePost}>Edit Post</button>
        <button onClick={this.deletePost}>Delete Post</button>
      </div>
    ) : (
      ""
    );

    //Definition allUsers To show all users through it
    const allUsers = this.props.users.map((user, index) => (
      <p key={index}>{user.name}</p>
    ));
    return (
      <div className="post">
        {/* Title & Photo & Description & Place & Organization.name*/}
        <h2>{this.props.title}</h2>
        <p className="icon">{this.props.photo}</p>
        <p>
          <strong>Description: </strong>
          {this.props.description}
        </p>
        <p>
          <strong>Place: </strong>
          {this.props.place}
        </p>
        <p>{this.props.organization.name}</p>

        <strong>Users:</strong>
        {allUsers}

        {buttons}
        {this.state.editFormActive ? <PostForm /> : ""}
      </div>
    );
  }
}

export default Post;

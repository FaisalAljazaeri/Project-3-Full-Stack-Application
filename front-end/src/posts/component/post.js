import React from "react";
import './post.css';
//Creat class Post
class Post extends React.Component {

    // Call parent method to delete post by ID
    deletePost = () => {
        this.props.deletePost(this.props.id)
    }

    render() {
        // Delete button that appears if the organization that made the post
        // is logged in 
        const deleteButton = this.props.organizationLogged ? (
            <button onClick={this.deletePost}>Delete Post</button>
        ) : "";

        //Definition allUsers To show all users through it
        const allUsers = this.props.users.map((user, index) => (
            <p key={index}>{user.name}</p>
        ));
        return (
            <div className="post">
                  {/* Title & Photo & Description & Place & Organization.name*/}
                <h2>{this.props.title}</h2>
                <p className="icon">{this.props.photo}</p>
                <p><strong>Description: </strong>{this.props.description}</p>
                <p><strong>Place: </strong>{this.props.place}</p>
                <p>{this.props.organization.name}</p>

                <strong>Users:</strong>
                {allUsers}
                
                {deleteButton}
            </div>
        );
    }
}

export default Post;
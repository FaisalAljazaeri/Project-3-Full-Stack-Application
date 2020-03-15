import React from "react";
import './post.css';
//Creat class Post
class Post extends React.Component {
    render() {
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
            </div>
        );
    }
}

export default Post;
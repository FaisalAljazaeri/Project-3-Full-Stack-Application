import React from "react";
class Post extends React.Component {
    render() {
        const allUsers = this.props.users.map((user, index) => (
            <p key={index}>{user.name}</p>
        ));
        return (
            <div className="post">
                <p>{this.props.title}</p>
                <p>{this.props.photo}</p>
                <p>{this.props.description}</p>
                <p>{this.props.place}</p>
                <p>{this.props.organization.name}</p>
                {allUsers}
            </div>
        );
    }
}

export default Post;

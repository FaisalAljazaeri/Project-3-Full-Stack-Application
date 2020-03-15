//import React from react
import React from "react";
//import Post from ./post
import Post from "./post";
//import getAllPosts from ./api
import { getAllPosts, deletePostById } from "./api";
//Creat class Posts 
class Posts extends React.Component {
    //Creat componentDidMount Inside getAllPosts Show allPosts
    componentDidMount() {
        getAllPosts()
            .then(response => {
                this.props.setPosts(response.data.post);
            })
            .catch(error => {
                console.log("API ERROR:", error);
            });
    }

    // Delete post by ID
    deletePost = id => {
        deletePostById(id)
            .then(res => {
                // Filter posts to execlude the post with the passed id
                const newPosts = this.props.posts.filter(post => post._id !== id);

                // Set the value of the new organization's posts array
                this.props.setOrganizationPosts(newPosts);
            })
            .catch(err => console.log(err));
    }

    render() {
        let allposts = <h4>No setPosts!</h4>;
        if (this.props.posts.length > 0) {
              // pass on every posts 
            allposts = this.props.posts.map((post, index) => {
                return (
                    
                    <Post
                        title={post.title}
                        photo={<img src={post.photo} alt={post.title}></img>}
                        description={post.description}
                        place={post.place}
                        organization={post.organization}
                        users={post.users}
                        id={post._id}
                        key={index}
                        organizationLogged={this.props.organizationLogged}
                        deletePost={this.deletePost}
                    />
                );
            });
        }
        return (
            <>
                <h3>All post</h3>
                {allposts}
            </>
        );
    }
}

export default Posts;
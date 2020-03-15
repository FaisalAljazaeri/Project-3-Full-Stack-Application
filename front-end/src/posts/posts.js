//import React from react
import React from "react";
//import Post from ./post
import Post from "./post";
//import getAllPosts from ./api
import { getAllPosts } from "./api";
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
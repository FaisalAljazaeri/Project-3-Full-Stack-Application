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
  //edit method by id
  editPost = (id, post) => {
    //find the id in posts array and compare it
    const indexOfPostToUpdate = this.props.posts.findIndex(
      post => post._id === id
    );
    // assign indexOfPostToUpdate to oldPost
    const oldPost = this.props.posts[indexOfPostToUpdate];

    const { title, description, photo, place } = post;
    //make a copy to newAarry
    const newArray = [...this.props.posts];
    // use splice to set the change
    newArray.splice(indexOfPostToUpdate, 1, {
      ...oldPost,
      title,
      place,
      photo,
      description
    });
    //props the method and take parmeter newArray to use
    this.props.setOrganizationPosts(newArray);
  };

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
  };

  render() {
    let allposts = <h4>No setPosts!</h4>;
    if (this.props.posts.length > 0) {
      // pass on every posts
      allposts = this.props.posts.map((post, index) => {
        return (
          <Post
            title={post.title}
            photo={post.photo}
            description={post.description}
            place={post.place}
            organization={post.organization}
            users={post.users}
            id={post._id}
            key={index}
            organizationLogged={this.props.organizationLogged}
            deletePost={this.deletePost}
            editPost={this.editPost}
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

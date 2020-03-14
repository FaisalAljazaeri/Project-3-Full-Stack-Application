
import React from 'react';
import Post from './post';
import { getAllPosts } from './api';

class Posts extends React.Component {
  componentDidMount() {
    getAllPosts()
      .then((response) => {
        this.props.setPosts(response.data.post);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }
  render() {
    let allposts = <h4>No setPosts!</h4>;

    if (this.props.posts.length > 0) {
        allposts = this.props.posts.map((post, index) => {
        return <Post title={post.title}
        photo={ <img src={post.photo}></img>}
        description={post.description}
        place={post.place}
        organization={post.organization}
        users={post.users}

                        id={post._id}
                        key={index} />;
      });
    }
    return(
      <>
        <h3>All post</h3>
        {allposts}
      </>
    );
  }
}

export default Posts;
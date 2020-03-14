
import React from 'react';
class Post extends React.Component {
  render() {
    return (
      <div className="post">
<p>{this.props.title}</p>
<p>{this.props.photo}</p>
<p>{this.props.description}</p>
<p>{this.props.place}</p>
<p>{this.props.organization}</p>
<p>{this.props.users}</p>
      </div>
    );
  }
}

export default Post;
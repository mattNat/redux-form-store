import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // provided by react-router
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  // helperFunction() {
  //   this.props.posts[this.props.match.params.id];
  // }

  render() {
    // this.props === ownProps
    // posts[this.props.match.params.id]; // post we want to show

    // this.props.match.params.id;

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// destructuring...just give me the list of posts
function mapStateToProps({ posts }, ownProps) {
  // return { posts };
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
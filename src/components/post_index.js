import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

// when are we going to call reaction creator
// react lifecycle method

class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(null, { fetchPosts })(PostsIndex);

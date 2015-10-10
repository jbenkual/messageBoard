import React from "react";

import Post from "./Post";
import Form from "./Form";
import PostActions from "../Actions/PostActions";
import PostStore from "../stores/PostStore";

import {Link} from "react-router"

let readState = () => {
  return { posts: PostStore.getAll()}
};

export default React.createClass({
  getInitialState() {
    return readState();
  },
  addNewPost(postToAdd) {
    PostActions.create(postToAdd);
  },
  componentDidMount() {
    PostActions.startFetchAll();
    PostStore.addChangeListener(this.onChange);
  },
  componentWillUnmount() {
    PostStore.removeChangeListener();
  },
  onChange () {
    this.setState(readState());
  },
  render() {
    console.log(this.state.posts)
    let posts = this.state.posts.map(function(post, idx) {
      return <Post key={idx} postData={post} />
    });
    
    let answer = 23;
    return(
      <div className="row">
        <Link to="/about">About Page</Link>
        {posts}
        <Form addPost={this.addNewPost}/>
      </div>
    )
  }
});
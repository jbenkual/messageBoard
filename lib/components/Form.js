import React from "react";

export default React.createClass({
  componentDidMount() {
  },
  handleSubmit(event) {
    event.preventDefault();
    let newPost = {date: Date.now()};
    Object.keys(this.refs).forEach(key => newPost[key] = this.refs[key].value);
    console.log("newPost", newPost)
    this.props.addPost(newPost);
  },
  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTitle" placeholder="Title" ref="title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputBody" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputBody" placeholder="Body" ref="body"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Add Post</button>
          </div>
        </div>
      </form>
    );
  }
});
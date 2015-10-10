import React from "react";
import PostActions from "../Actions/PostActions";

export default React.createClass({
  // getInitialState() {
  //   return {
  //     expand: false
  //   }
  // },
  expandClick () {
    console.log(this.props.postData.id)
    PostActions.expand(this.props.postData.id);
    /*var newState = !this.state.expand;
    this.setState({expand: newState}, function() {
      console.log(this.state.expand)
    });*/
  },
  render() {
    var content = "";
    var buttonClass = "btn btn-default";
    var showButton = this.props.postData.body.length > this.props.postData.preview.length
    var author = <a href="#" className ="author"> By Writer McStuffypants{this.props.postData.author}</a>;
    if(this.props.postData.expand) {
      content = this.props.postData.body;
      buttonClass += " glyphicon glyphicon-minus"
    }
    else {
      content = this.props.postData.preview;
      buttonClass += " glyphicon glyphicon-plus"
    }

    var button = <button className={buttonClass} onClick={this.expandClick}></button>;
    return(
      <div className="row postBody panel">
        <div className="col-md-12">
          <div className="col-md-10 title">
            <h2>{this.props.postData.title} {author}</h2>  
          </div>
          <div className="col-md-2 date">
            <h4>{this.props.postData.date}</h4>
          </div>
        </div>
        
        <div className="col-md-10 col-md-offset-1">
          <h4>{content} {showButton ? button : ""} </h4>
        </div>
        
      </div>
    )
  }
});
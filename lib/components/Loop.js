import React from "react";

export default React.createClass({
  render() {
    var loadingImage = <span className="glyphicon glyphicon-refresh spinning"></span>
    var image = <img className="loop" src={this.props.image}/>
    var loaded = this.props.image && this.props.image.length > 1;
    return (
      <div>
        {loaded ? image : loadingImage}
      </div>
    );
  }
});
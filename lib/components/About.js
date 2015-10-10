import React from "react";
import {Link} from "react-router";
import Loop from "./Loop"

export default React.createClass({
  getInitialState() {
    return { loops: ["https://i.imgur.com/8klNsJq.jpg", "", ""] }
  },
  componentDidMount() {
    var url = "https://www.reddit.com/r/perfectloops.json"
    var self = this;
    $.getJSON(url, function(result){
      var list = result.data.children.slice(2);
      console.log(list);
      var loopList = list.map(function(post){
        var postUrl = post.data.url;
        postUrl = postUrl.replace(/\.gifv$/i, ".gif");
        if(postUrl.match(/\.[a-z]+$/i) === null) {
          postUrl += ".gif";
        }
        
        return postUrl;
      })
      loopList = loopList.filter(function(item) {
        if(item.match(/reddit/gi) !== null) {
          return false;
        }
        return true;
      })
      console.log(loopList);
      // if(postUrl.match(/gfycat\.com/i) !== null) {
      //     var gifName = postUrl.replace(/\.[a-z]+$/i, "");
      //     gifName = gifName.replace(/^.*gfycat\.com\//i, "");
      //     $.getJSON('http://http://gfycat.com/cajax/get/' + gifName, function(gfyData) {
      //       console.log(gfyData);
      //     })
      //   }
      self.setState({loops: loopList});
    });
  },
  render() {
    var loopElements = this.state.loops.map(function(url, idx) {
      

      return ( 
        <div key={idx} className="col-sm-4">
          <Loop image={url}/>
        </div>
      );
    });
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>About World</h1>
        <div className="row">
          {loopElements}
        </div>
        
      </div>
    );
  }
});
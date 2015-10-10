import DataActions from "./actions/DataActions";

export default {
  fetchPosts() {
    var PostObject = Parse.Object.extend("PostObject");
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        DataActions.receivedPosts(results);
        console.log(results);
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  },
  createPost(post) {
    return;
    var TestObject = Parse.Object.extend("PostObject");
    var testObject = new TestObject();
    testObject.save(post).then(function(object) {
      DataActions.newPost(post)
    });
  }
};
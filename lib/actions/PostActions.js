import API from "../API";
import DataActions from "./DataActions";

export default {
  startFetchAll() {
    API.fetchPosts();
  },
  create(post) {
    API.createPost(post);
  },
  expand(id) {
    
    DataActions.expandPost(id);
  }
};
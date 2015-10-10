import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

export default {
  receivedPosts(results) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      data: results
    });
  },
  newPost(results) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.NEW_POST,
      data: results
    });
  },
  expandPost(id) {
        console.log("id", id)
    AppDispatcher.dispatch({
      actionType: ActionTypes.EXPAND_POST,
      data: id
    });
  }
};
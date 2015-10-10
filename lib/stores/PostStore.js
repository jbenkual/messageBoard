import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

import {EventEmitter} from "events"


let _posts = [];
let preparePost = (attributes, object, idx) => {
  let post = Object.assign({}, attributes);
  if(!attributes) {
    post = object;
  }
  post.id = object.id;
  post.expand = false;

  post.preview = post.body.slice(0,140);
  return post;
};
const CHANGE_EVENT = "CHANGE";

class PostEmitter extends EventEmitter {
  getAll() {
    return _posts;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let PostStore = new PostEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_POSTS:
      _posts = action.data.reverse().map((po,idx) => preparePost(po.attributes, po, idx));
      PostStore.emitChange();
      break;
    case ActionTypes.NEW_POST:
    console.log(action.data)
      _posts.push(preparePost(action.data.attributes, action.data, _posts.length));
      PostStore.emitChange();
      break;
    case ActionTypes.EXPAND_POST:
      _posts.forEach(function(post) {
        if(post.id === action.data) {
          post.expand = !post.expand;
        }
      })
      PostStore.emitChange();
      break;
    default:
      // do nothing
  }
});


export default PostStore;
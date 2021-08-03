// reducer composition
// only the one we are dealing
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // Add a comment to the nested state
      return [...state, { user: action.author, text: action.comment }];
    case 'REMOVE_COMMENT':
      return [
        // everything before this post
        ...state.slice(0, action.index),
        // everything after this post
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}
// it will handle the entire comment state
function comments(state = [], action) {
  if (typeof action.photoId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // Offload the nested state to a subreducer
      // overwrite this wiht new one
      [action.photoId]: postComments(state[action.photoId], action),
    };
  }
  return state;
}

export default comments;

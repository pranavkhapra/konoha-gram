export default function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        // everything before this post
        ...state.slice(0, action.index),
        // create a new object, spread the old one, change the likes
        { ...state[action.index], likes: state[action.index].likes + 1 },
        // everything after this post
        ...state.slice(action.index + 1),
      ];
    // Return the modified state!
    default:
      // Don't do anything!
      return state;
  }
}

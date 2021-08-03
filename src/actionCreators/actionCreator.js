// adding of the comment
export function addComment(postId, comment, author) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
  };
}
// removing of the comment
export function removeComment(index, postId) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId,
  };
}
// Like of a post
export function addLike(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

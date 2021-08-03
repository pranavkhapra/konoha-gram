// adding of the comment
export default function addComment(photoId, comment, author) {
  return {
    type: 'ADD_COMMENT',
    photoId,
    author,
    comment,
  };
}

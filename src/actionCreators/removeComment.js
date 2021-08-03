// removing of the comment
export default function removeComment(index, photoId) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    photoId,
  };
}

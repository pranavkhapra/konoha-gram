// Like of a post
export default function addLike(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Photo from './Photo';

import Comments from './Comments';

const SinglePost = (props) => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);

  // Get the matching posted photo
  //   console.log(posts);
  //   //   console.log(postSingle);/
  //   console.log(props);
  const index = posts.findIndex(
    (post) => post.code === props.match.params.photoId
  );
  const postSingle = posts[index];
  //   // Get the matching comments
  const postComments = comments[props.match.params.photoId] || [];

  return (
    <div className="single-photo">
      <Photo key={index} index={index} post={postSingle} />
      <Comments {...props} postComments={postComments} />
    </div>
  );
};
export default SinglePost;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addComment from '../actionCreators/addComment';
import removeComment from '../actionCreators/removeComment';

function Comments(props) {
  const authorInput = useRef(null);
  const commentInput = useRef(null);
  const commentForm = useRef(null);
  const dispatch = useDispatch();
  // const comments = useSelector((state) => state.comments);
  // console.log(props);
  const handleDelete = (index) => {
    dispatch(removeComment(index, props.match.params.photoId));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = authorInput.value;
    const comment = commentInput.value;
    dispatch(addComment(props.match.params.photoId, comment, author));
    commentForm.reset();
  };
  return (
    <div className="comments">
      <div className="comment">
        {props.postComments.map((comment, index) => (
          <div className="comment" key={index}>
            <p>
              <strong>{comment.user}</strong>
              {comment.text}
              <button
                type="button"
                className="remove-comment"
                onClick={() => handleDelete(index)}
              >
                &times;
              </button>
            </p>
          </div>
        ))}
        <form
          className="comment-form"
          ref={commentForm}
          onSubmit={handleSubmit}
        >
          <input type="text" ref={authorInput} placeholder="author" required />
          <input
            type="text"
            ref={commentInput}
            placeholder="comment"
            required
          />
          <input type="submit" hidden />
        </form>
      </div>
    </div>
  );
}

export default Comments;

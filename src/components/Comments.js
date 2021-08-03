/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addComment from '../actionCreators/addComment';
import removeComment from '../actionCreators/removeComment';

function Comments(props) {
  const [values, setValues] = useState({
    author: '',
    comment: '',
  });
  const dispatch = useDispatch();
  // const comments = useSelector((state) => state.comments);
  // console.log(props);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleDelete = (index) => {
    dispatch(removeComment(index, props.match.params.photoId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addComment(props.match.params.photoId, values.comment, values.author)
    );
    values.comment = '';
    values.author = '';
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
          // ref={commentForm}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="author"
            value={values.author}
            onChange={handleChange('author')}
            placeholder="author"
            required
          />
          <input
            type="text"
            onChange={handleChange('comment')}
            value={values.comment}
            name="comment"
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

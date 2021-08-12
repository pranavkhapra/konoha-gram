/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import addLike from '../actionCreators/addLike';

function Photo({ post, index }) {
  const comments = useSelector((state) => state.comments);
  // const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // console.log(comments[post.code]);
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />
        </Link>
        <CSSTransitionGroup
          transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span key={post.likes} className="likes-heart">
            {post.likes}
          </span>
        </CSSTransitionGroup>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <div className="control-buttons">
          <button
            type="button"
            onClick={() => dispatch(addLike(index))}
            className="likes"
          >
            ❤ {post.likes}
          </button>
          <Link className="button" to={`/view/${post.code}`}>
            <span className="comment-count">
              <span className="speech-bubble" />
              {comments[post.code] ? ` ${comments[post.code].length}` : ` ${0}`}
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

export default Photo;

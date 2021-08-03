/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  return (
    <div>
      <h1>
        {/* <Link to="/">Konoha-gram</Link> */}
        {posts.map((post) => (
          <div>{post}</div>
        ))}
        {/* <div className="photo-grid">{posts}</div> */}
      </h1>
    </div>
  );
};

export default NavBar;

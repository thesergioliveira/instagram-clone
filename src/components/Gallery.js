import React, { Component, Fragment } from "react";
const Gallery = (props) => {
  const userPosts = props.Data.map(
    ({ id, title, location, text, likes, comments, img }) => (
      <div key={id} className="post-wrapper">
        <div className="post-header">
          <h3 className="title">{title}</h3>
          <p className="location">{location}</p>
          <p className="text">{text}</p>
        </div>
        <div className="image-wrapper">
          <img src={img} alt={title}></img>
        </div>
        <div className="post-footer">
          <i>👍</i>
          <span className="likes">{likes}</span>
          <i>📬</i>
          <span className="comments">{comments}</span>
        </div>
      </div>
    )
  );
  return (
    <Fragment>
      <div className="gallery-container">
        <div className="gallery-menu">
          <nav>
            <div>
              <a href="#">POSTS</a>
            </div>
            <div>
              <a href="#">REELS</a>
            </div>
            <div>
              <a href="#">IGTV</a>
            </div>
            <div>
              <a href="#">TAGGED</a>
            </div>
          </nav>
        </div>
        <div className="gallery">{userPosts}</div>
      </div>
    </Fragment>
  );
};

export default Gallery;

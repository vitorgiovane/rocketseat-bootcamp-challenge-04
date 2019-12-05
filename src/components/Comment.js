import React from "react"

const Comment = ({ data }) => (
  <div className="post__comment">
    <a className="post__comment-author-avatar" href="#">
      <img height="50" src={data.author.avatar} />
    </a>
    <div className="post__comment-baloon">
      <span className="post__comment-author">{data.author.name}</span>
      <span className="post__comment-content">{data.content}</span>
    </div>
  </div>
)

export default Comment

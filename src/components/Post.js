import React from "react"
import "../assets/Post/Post.css"
import Comment from "./Comment"

const Post = ({ data }) => (
  <li className="post">
    <div className="post__header" href="#">
      <a href="#">
        <img height="50" src={data.author.avatar} />
      </a>
      <div className="post__header-right">
        <a href="#" className="post__user-name">
          {data.author.name}
        </a>
        <span className="post__published-date">{data.publishedDate}</span>
      </div>
    </div>
    <div className="post__content">{data.content}</div>
    <div className="post__comments">
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  </li>
)

export default Post

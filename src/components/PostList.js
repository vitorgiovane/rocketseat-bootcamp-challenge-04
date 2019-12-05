import React, { Component } from "react"
import Post from "./Post"
import "../assets/PostList/PostList.css"

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Walter White",
          avatar:
            "https://emotioncard.com.br/wp-content/uploads/2017/08/BB-S5B-Walt-590.jpg.webp"
        },
        publishedDate: "05 Dec 2019",
        content: "Say my name!",
        comments: [
          {
            id: 1,
            author: {
              name: "Gustavo Fring",
              avatar:
                "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQ-zZDGfPf99GKcBYfsVj8AEyw6gN2gt9Q8Znk881RpBpBm-LIj%26s&sp=998940964b1f0e9c1e5388f1bf759382&anticache=982697"
            },
            content:
              "If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son. I will kill your infant daughter."
          },
          {
            id: 2,
            author: {
              name: "Mike Ehrmantraut",
              avatar:
                "https://vignette.wikia.nocookie.net/breakingbad/images/9/9f/Season_4_-_Mike.jpg/revision/latest/scale-to-width-down/180?cb=20110620221523"
            },
            content:
              "Just because you shot Jesse James don’t make you Jesse James."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Mike Ehrmantraut",
          avatar:
            "https://vignette.wikia.nocookie.net/breakingbad/images/9/9f/Season_4_-_Mike.jpg/revision/latest/scale-to-width-down/180?cb=20110620221523"
        },
        publishedDate: "05 Dec 2019",
        content:
          "You are not the guy. You're not capable of being the guy. I had a guy, but now I don't. You are not the guy.",
        comments: [
          {
            id: 3,
            author: {
              name: "Walter White",
              avatar:
                "https://emotioncard.com.br/wp-content/uploads/2017/08/BB-S5B-Walt-590.jpg.webp"
            },
            content: "Say my name!"
          },
          {
            id: 4,
            author: {
              name: "Mike Ehrmantraut",
              avatar:
                "https://vignette.wikia.nocookie.net/breakingbad/images/9/9f/Season_4_-_Mike.jpg/revision/latest/scale-to-width-down/180?cb=20110620221523"
            },
            content:
              "The moral of the story is: I chose a half-measure when I should have gone all the way. I'll never make that mistake again. No more half-measures, Walter."
          }
        ]
      }
    ]
  }

  render() {
    return (
      <ul className="posts">
        {this.state.posts.map((post, key) => (
          <Post key={key} data={post} />
        ))}
      </ul>
    )
  }
}

export default PostList

import React from 'react'
import "./newpost.css";
import { newPost } from '../data';

const NewPost = () => {
  return (
    <div className="newpost_container">
        <div className="newpost_main">
            {newPost.map(posts => (
                <div className="newpost_card" key={posts.id}>
                    <div className="newpost_box">
                        <img src={posts.icon} alt={posts.title} />
                        <p>{posts.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewPost;
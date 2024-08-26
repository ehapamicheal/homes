import React from 'react';
import "./home.css";
import NewPost from '../../components/NewPost';
import Claim from '../../components/Claim';
import Wishlist from '../../components/Wishlist';
import Gray from '../../components/Gray';

const Home = () => {
  return (
   <>
    <div className="home_container">
      <NewPost />
      <Claim />
      <Wishlist />
      <Gray />
    </div>
   </>
  )
}

export default Home;
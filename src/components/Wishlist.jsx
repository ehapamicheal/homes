import React from 'react'
import { wishlist } from '../data';
import "./wishlist.css";

const Wishlist = () => {
  return (
    <div className="wishlist_container">
        <div className="wishlist_main container1">
            {wishlist.map(wishlists => (
                <div className="wishlist_card" key={wishlists.id}>
                    <div className="wishlist_box">
                        <img src={wishlists.icon} alt={wishlists.title} />
                        <p>{wishlists.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Wishlist;
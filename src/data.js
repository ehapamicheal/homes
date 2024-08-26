// NEW POST SECTION
import postIcon from "./svg/newpost.svg";
import questionIcon from "./svg/question.svg";
import kiwiIcon from "./svg/kiwi.svg";
import randsIcon from "./svg/rands.svg";


// WISHLIST SECTION
import owambe1 from "./svg/wishlist.svg";
import owambe2 from "./svg/diary.svg";
import owambe3 from "./svg/owambe.svg";
import owambe4 from "./svg/streak.svg";

// FOOTER SECTION
import footer1 from "./svg/home-icon.svg";
import footer2 from "./svg/message.svg";
import footer3 from "./svg/newpost.svg";
import footer4 from "./svg/user.svg";



// NEW POST SECTION
export const newPost = [
   {
        id: 1,
        title: "New Post",
        icon: postIcon
   },
   {
        id: 2,
        title: "QnAs",
        icon: questionIcon
   },
   {
        id: 3,
        title: "Kiwi",
        icon: kiwiIcon
   },
   {
        id: 4,
        title: "Rands",
        icon: randsIcon
    }  
]

// WISHLIST SECTION
export const wishlist = [
    {
         id: 1,
         title: "Whishlist",
         icon: owambe1
    },
    {
         id: 2,
         title: "Dailyroom",
         icon: owambe2
    },
    {
         id: 3,
         title: "Owambe",
         icon: owambe3
    },
    {
         id: 4,
         title: "Streaks",
         icon: owambe4
    }  
]

// FOOTER SECTION
export const footers = [
    {
         id: 1,
         name: "Home",
         path: '/',
         icon: footer1
    },
    {
         id: 2,
         name: "Messages",
         path: '/messages',
         icon: footer2
    },
    {
         id: 3,
         name: "Create",
         path: '/create',
         icon: footer3
    },
    {
         id: 4,
         name: "Profile",
         path: '/profile',
         icon: footer4
    }  
]
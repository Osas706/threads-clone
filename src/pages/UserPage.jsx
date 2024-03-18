import React from 'react';
import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={120} replies={31} postImg='/public/post1.jpg' postTitle='Xup' />
      <UserPost likes={90} replies={78} postImg='/public/post2.jpg' postTitle='Views' />
      <UserPost likes={72} replies={45} postImg='/public/post3.jpg' postTitle='Sky' />
      <UserPost likes={140} replies={61}  postTitle='My first post' />
    </>
  )
}

export default UserPage

import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const {users} = useSelector(state => state.loginPage)

  const usersName = users.map((user, index) => 
      <h1 key={index}>{user.userName}</h1>
    )

  return (
    <div>
      {usersName}
    </div>
  );
}

export default Profile;

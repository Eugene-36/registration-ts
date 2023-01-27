import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';

const User = () => {
  const currentUser = useAppSelector((state) => state.user);

  return (
    <h1 className='loginContainer'>
      {currentUser.length ? currentUser[0]?.login : 'Waiting for your Login'}
    </h1>
  );
};

export default User;

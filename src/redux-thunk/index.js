
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, addUser, removeUser, getListUser, deleteUserById } from './userSlide';

function User({ user, onDelete }) {

  const onClick = (event) => {
    event.preventDefault();
    onDelete(user.id);
  };

  return (
    <li>
      <span className='user-name'>{user?.name}</span>
      <a href="#" onClick={() => onClick()}>Delete</a>
    </li>
  );
}

export default function UserManagement() {
  const dispatch = useDispatch();
  const  { users}  = useSelector(state => state.userSlide);
  const [curUser, setCurUser] = useState({ id: 1, name: '' });

  const initListUser = useCallback(() => dispatch(getListUser()),[dispatch]);

  useEffect(() => {
    initListUser();
  }, [initListUser]);

  const onChange = (event) => {
    const { value } = event.target;
    setCurUser({ ...curUser, name: value });
  };

  const onClick = () => {
    dispatch(addUser(curUser));
    setCurUser({ id: curUser.id + 1, name: '' });
  };

  const onDelete = (id) => {
    dispatch(deleteUserById({ id }));
  };


  return (
    <div className='container'>
      <input type="text" onChange={onChange} value={curUser.name} />
      <button onClick={() => onClick()}>Add user</button>
      <ul>
        {users?.map((user, index) => (
          <User key={index} user={user} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
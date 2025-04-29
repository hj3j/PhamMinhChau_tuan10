import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/Async_Thunk_Slice';

function Async_Thunk() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.asyncThunk);



  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('users:', users);

  return (
    <div className='async_Thunk'>
      {status === 'loading' && <h2  className='loading'>Đang load...</h2>}
      {status === 'failed' && <h2 className='error'>Error: {error}</h2>}
      {status === 'succeeded' && <div>
            <h2 className='succeeded'>Thành công...</h2>
            <h3>Danh sách người dùng:</h3>
            {users.map(user=>{
                return <li key ={user.id}>{user.id} <br/> Name: {user.name} <br/> Email: {user.email}</li>
            })}

        </div>}
    </div>
  );
}

export default Async_Thunk;

import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function UserLayout() {
    const {state} = useLocation();
    const item = state;

  return (
    <div>
      <div className="flex justify-center">
        <div className="text-center w-[300px]">
            <img src={item.avatar}/>
            <p>{item.name}</p>
            <p>{item.role}</p>
            <p>{item.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserLayout

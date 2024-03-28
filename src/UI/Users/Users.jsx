import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../Toast/Toast';
import { Link } from 'react-router-dom';

function Users() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetchUsers()
      },[])
    
      const fetchUsers=async()=>{
        try {
          const response = await axios.get("https://api.escuelajs.co/api/v1/users")
           console.log(response,"....");    
          setUsers(response.data)      
        } catch (error) {
          errorToast(error.message || 'error')
        }
      }

  return (
    <>
    <div className="m-5 flex flex-wrap gap-10 justify-center">
        {
            users.map((item)=>{
                return(
                    <>
                    <div className="">
                    <Link to={`/user/${item.id}`} state={item} >
                      <img src={item.avatar} alt="Loading..." style={{width:"150px", height:"150px"}} />
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                    </Link>
                    </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Users

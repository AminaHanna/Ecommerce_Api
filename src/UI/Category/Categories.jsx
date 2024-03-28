import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorToast } from "../Toast/Toast";

function Categories() {
  const [ categories,setCategories ] = useState([]);

  useEffect(()=>{
    fetchAPI()
  },[])


  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories')
        console.log(response,"res");
  
        setCategories(response.data)
      } catch (error) {
        errorToast(error.message)
      }
}


  return (
    <>
    <div className="bg-slate-100 p-5">
        <p className="text-2xl p-3">Categories</p>
      <div className="category">
        {categories?.map((item) => {
            return (
              <>
                <Link to={`/shopping/${item.id}`}>
                  <p>{item.name}</p>
                  <img src={item.image} style={{width:"50px"}}/>
                </Link>
              </>
            );
          })}
      </div>
      </div>
    </>
  );
}

export default Categories;

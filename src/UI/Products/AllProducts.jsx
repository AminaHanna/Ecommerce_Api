import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AllProducts() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetchdata()
      },[])
  
  
      const fetchdata = async ()=>{
          try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products")
            console.log(response,"response");
            setData(response.data)
          } catch (error) {
              console.log(error,"error");
          }
      }

  return (
    <>
    <div className="">
        <div className="cardsmain">
            {
                data?.map((item)=>{
                    return(
                        <>
                        <div className="cards">
                        <Link to={`/product/${item.id}`} state={item} >
                            <img src={item.images} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <button className='addcart'>Add to Cart</button>
                        </Link>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default AllProducts;

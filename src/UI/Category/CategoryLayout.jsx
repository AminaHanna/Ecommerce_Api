import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { errorToast, successToast } from "../Toast/Toast";

function CategoriesLayout() {
  const { page } = useParams();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${page}/products`);
      console.log(response, "categories");

      setProducts(response.data);
    } catch (error) {
      errorToast(error.message);
    }
  };


  return (
    <>
      {/* {page} */}
      <div className="flex flex-wrap justify-center m-5">
      {products?.map((item) => {
        return (
          <>
            <div className="w-[300px] m-5 p-3 justify-center rounded-md border border-black flex flex-col items-center">
              <Link to={`/product/${item.id}`} state={item}>
                <div className="flex justify-center">
                    <img className="w-32 rounded-md" src={item.images} alt="Loading..." />            
                </div>
                <div className="">
                  <p className="">{item.title}</p>
                  <p className="">{item.description}</p>
                  <p className="">{item.price}</p>
                </div>
              </Link>
              <div className="">
                <button type='button' className=" bg-slate-200 p-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )
      })}
      </div>
    </>
  );
}

export default CategoriesLayout;

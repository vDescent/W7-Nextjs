'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
        const data = await response.json();
        
        setProducts(data);
      } catch(error){
        console.log(`Error Fetch:`, error);
      }
    }
    fetchData();
  },[])

  function clicked(){
    console.log(`Click test`);
  }

  // console.log(products);

  return(
    <div className="flex flex-col justify-center items-center p-20">
      <div className="flex flex-row bg-white w-full p-5 fixed top-0 left-0 justify-center gap-20">
        <p className="text-black p-2">Home</p>
        <p className="text-black p-2">Favorites</p>
      </div>
      <h1 className="text-2xl m-5 font-bold">FakeStore Products</h1>
      <table className="border-s-white border-2">
        <thead className="border-s-white border-2">
          <tr>
            <th className="border-s-white border-2 p-5">No</th>
            <th className="border-s-white border-2 p-5">Products Name</th>
            <th className="border-s-white border-2 p-5">Image</th>
            {/* <th className="border-s-white border-2 p-5">Category</th> */}
            {/* <th className="border-s-white border-2 p-5">Description</th> */}
            {/* <th className="border-s-white border-2 p-5">Price</th> */}
            <th className="border-s-white border-2 p-5">Actions</th>
            <th className="border-s-white border-2 p-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item)=>(
          <tr key={item.id}>
            <th className="border-s-white border-2 p-5">{item.id}</th> 
            <th className="border-s-white border-2 p-5">{item.title}</th> 
            <th className="border-s-white border-2 p-5"><img src={item.image} alt="Product Image"/></th> 
            {/* <th className="border-s-white border-2 p-5"><Image src={item.image} alt="Product Image" /></th>  */}
            {/* <th className="border-s-white border-2 p-5">{item.category}</th> */}
            {/* <th className="border-s-white border-2 p-5">{item.description}</th>  */}
            {/* <th className="border-s-white border-2 p-5 underline">${item.price}</th>  */}
            <th className="border-s-white border-2 p-5"><button onClick={clicked} className="bg-white text-black rounded-xl p-3 hover:cursor-pointer hover:bg-gray-500 hover:text-white">View Details</button></th>
            <th className="border-s-white border-2 p-5"><button onClick={clicked} className="bg-white text-black rounded-xl p-3 hover:cursor-pointer hover:bg-gray-500 hover:text-white">Add to favorites</button></th>
          </tr>

          ))}
        </tbody>
      </table>
      {/* {products.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))} */}
    </div>
  );
}
'use client'

import { useEffect, useState } from "react";

export default function Home(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        
        setProducts(data);
      } catch(error){
        console.log(`Error Fetch:`, error);
      }
    }
    fetchData();
  },[])

  // console.log(products);

  return(
    <div className="flex flex-col justify-center items-center">
      <p>testing</p>
      {products.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
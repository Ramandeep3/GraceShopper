import React, { useState, useEffect } from "react";
import { getAllPlants } from "../../api";
import ProductCard from "./PlantsCard";
import "./Plants.css";
const Plants=({cart,setCart})=>{
    const [grabbedProducts, setGrabbedProducts] = useState();
    const getAllProducts = async () => {
        try {
          const products = await getAllPlants();
          setGrabbedProducts(products);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getAllProducts();
      }, []);

return (
    <div>
      <h1 className="Title">Enjoy all the Plants:</h1>
      <div className="productCards">
        {grabbedProducts?.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              index={index}
              product={product}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Plants;
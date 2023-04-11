import React, { useEffect,useMemo,useState } from "react";
import { useProductsStore }  from "../../store/useProductsStore";

import Product from "../product/Product";
import "./productList.css";

const ProductList = ({ activeFilter }) => {
  const { products, getProducts } = useProductsStore();
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const filtered = useMemo(() => {
    return products.filter(product => activeFilter === 'all' ? products : product.category === activeFilter);
  }, [activeFilter, products]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [activeFilter, products]);

  const elements = filteredProducts.map(product => {
    return (
      <Product key={product.id} img={product.image} id={product.id} name={product.title} title={product.title} price={product.price} 
      description={product.description} category={product.category}/>
    )
  });

  return (
    <div className="product-list">
      {elements}
    </div>
  )
};

export default ProductList;
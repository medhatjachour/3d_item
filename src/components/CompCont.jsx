import React, { useState, useEffect } from "react";
import ProductCard from "../parts/ProductCard";
import ButtonsGroup from "../parts/ButtonsGroup";
import Skeleton from "react-loading-skeleton";
//import axios from 'axios';
//import {NavLink} from 'react-router-dom'

import pdata from "../fakeProdycts.json";

const Compcont = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = () => {
      setloading(true);
      if (componentMounted) {
        setData(pdata);
        setfilter(pdata);
        setloading(false);
      }
      return () => (componentMounted = true);
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <p>asdsadsad</p>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setfilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <ButtonsGroup 
           
            />
        {console.log(filter)}
        {console.log("this filter 1W")}
        {console.log(filter[1]) }
        {filter.map((prodcut) => {
          return (
            <ProductCard
            key ={prodcut.id}
            img={prodcut.image}
            title={prodcut.title}
            price={prodcut.price}
            id={prodcut.id}/>
            );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              latest producsts
              <hr />{" "}
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Compcont;

/* <>
        
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button
              className="btn btn-outline-dark me-2 "
              onClick={() => setfilter(data)}
            >
              all
            </button>
            <button className="btn btn-outline-dark me-2"
            onClick={()=> filterProduct("men's clothing")}>
              Women's clothing
            </button>
            <button className="btn btn-outline-dark me-2"
            onClick={()=> filterProduct("women's clothing")}>
              women's clothing
            </button>
            <button className="btn btn-outline-dark me-2"
            onClick={()=> filterProduct("jewelery clothing")}>
              jewelery
            </button>
          </div>
        </>*/

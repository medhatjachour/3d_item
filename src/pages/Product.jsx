import React, { useState, useEffect } from "react";
import ReactImageZoom from "react-image-zoom";

import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import pdata from "../fakeProdycts.json";
import store from "../redux/store";

const Product = () => {
  const { id } = useParams();
  console.log("id" + id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // reducer add to cart
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    console.log(store)
  };

  useEffect(() => {
    const getProduct = () => {
      setLoading(true);
      //const response = await fetch(`http://localhost:3000/fakeProdycts.json/products/${id}`)

      setProduct(pdata[id]);
      setLoading(false);
    };
    getProduct();
  });

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={75} width={250} />
        </div>
      </>
    );
  };
  const propszoom = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: product.image,
  };
  const ShowProducts = () => {

    return (
      <>
        <div className="col-md-6">
          {/*<ReactImageZoom {...propszoom} /> */}
          <img
            src={product.image}
            alt={product.title}
            height="480px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h3 className="display-5">{product.title}</h3>
          <h6 className="text-uppercase text-black-50">{product.category}</h6>{/* brand */}
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa-star fa"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            to="/cart"
            className="btn-outline-dark btn px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>{" "}
          {/*here we gonna add functrions for ading to thje cart and so */}
          <NavLink to="/cart" className="btn-dark btn ms-2 px-3 py-2">
            Buy now
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Product;

import React from "react";
import { NavLink } from "react-router-dom";

console.log("here");

const headingStyle = {
  width: "18rem",
};

const ProductCard = (props) => {
  return (

    
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-4" style={headingStyle}  key={props.id}>
        <img
          src={props.img}
          className="card-img-top"
          alt={props.title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{props.title.substring(0, 12)}</h5>
          <p className="card-text lead fw-bold">${props.price}</p>
          <NavLink
            to={`/product/${props.id}`}
            className="btn btn-outline-dark"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

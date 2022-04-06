import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Welcomeslider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/1.jpg"
            alt="First slide"
            height={400}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/4.jpg"
            alt="Second slide"
            height={400}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/5.jpg"
            alt="Third slide"
            height={400}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Welcomeslider;
/*
   <div>
  <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/1.jpg" className="d-block w-100" alt="..." height={600} />
          </div>
          <div className="carousel-item">
            <img src="/assets/2.jpg" className="d-block w-100" alt="..."  height={600}/>
          </div>
          <div className="carousel-item">
            <img src="/assets/3.jpg" className="d-block w-100" alt="..." height={600} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
*/

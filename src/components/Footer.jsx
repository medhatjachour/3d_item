import React from "react";
import './css/Footer.css'
const Footer = () => {
  return (
    <>
      <footer className="footer-03">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Men</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a to="#" className="py-1 d-block">
                        Jeans
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Jumpers
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Leather
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Shorts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Boots
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Watches
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Women</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a to="#" className="py-1 d-block">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Jumpsuits
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        T-shirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Swearshirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Jackets
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Coats
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">Kids</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a to="#" className="py-1 d-block">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        T-shirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Polos
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Sweaters
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Jackets
                      </a>
                    </li>
                    <li>
                      <a to="#" className="py-1 d-block">
                        Watches
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-end">
                <div className="col-md-12 col-lg-11 mb-md-0 mb-4">
                  <h2 className="footer-heading">Follow Us</h2>
                  <ul className="ftco-footer-social p-0">
                    <li className="ftco-animate">
                      <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Twitter"
                      >
                        <span className="ion-logo-twitter"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <span className="ion-logo-facebook"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Instagram"
                      >
                        <span className="ion-logo-instagram"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Linkedin"
                      >
                        <span className="ion-logo-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                  <h2 className="footer-heading mt-5">Subscribe Us</h2>
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control rounded-left"
                        placeholder="Enter email address0"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="form-control submit px-3 rounded-right"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-4 border-top">
            <div className="col-md-6 col-lg-8">
              <p className="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="ion-ios-heart" aria-hidden="true"></i> by{" "}
                <a to="https://colorlib.com" target="_blank">
                  Colorlib.com
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <p className="mb-0 list-unstyled">
                <a className="mr-md-3" to="#">
                  Terms &amp; Conditions
                </a>
                <a className="mr-md-3" to="#">
                  Privacy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

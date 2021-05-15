import "./App.css";

import "./fonts/icomoon/style.css";
import "./css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/jquery-ui.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/aos.css";
import "./css/style.css";

import React from "react";
import MedicineTable from "./components/MedicineTable.js";
import LocationTable from "./components/LocationTable.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
      <div class="site-wrap">
        <div class="site-navbar py-2">
          <div class="search-wrap">
            <div class="container">
              <a href="#" class="search-close js-search-close">
                <span class="icon-close2"></span>
              </a>
              <form action="#" method="post">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search keyword and hit enter..."
                />
              </form>
            </div>
          </div>

          <div class="container">
            <div class="d-flex align-items-center justify-content-between">
              <div class="logo">
                <div class="site-logo">
                  <a href="index.html" class="js-logo-clone">
                    Asclepie
                  </a>
                </div>
              </div>
              <div class="main-nav d-none d-lg-block">
                <nav
                  class="site-navigation text-right text-md-center"
                  role="navigation"
                >
                  <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li class="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <Link to="/medicine">Medicine</Link>
                    </li>
                    <li>
                      <Link to="/location">Location</Link>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="icons">
                <a href="#" class="icons-btn d-inline-block js-search-open">
                  <span class="icon-search"></span>
                </a>
                <a href="cart.html" class="icons-btn d-inline-block bag">
                  <span class="icon-shopping-bag"></span>
                  <span class="number">2</span>
                </a>
                <a
                  href="#"
                  class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
                >
                  <span class="icon-menu"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="site-blocks-cover image_hero1">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 mx-auto order-lg-2 align-self-center">
                <div class="site-block-cover-content text-center">
                  <h2 class="sub-title">
                    Effective Medicine, New Medicine Everyday
                  </h2>
                  <h1>Welcome To Asclepie</h1>
                  <p>
                    <a href="#" class="btn btn-primary px-5 py-3">
                      Shop Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section">
          <div class="container">
            <div class="row align-items-stretch section-overlap">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="banner-wrap bg-primary h-100">
                  <a href="#" class="h-100">
                    <h5>
                      Free <br /> Shipping
                    </h5>
                    <p>
                      Amet sit amet dolor
                      <strong>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                      </strong>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="banner-wrap h-100">
                  <a href="#" class="h-100">
                    <h5>
                      Season <br /> Sale 50% Off
                    </h5>
                    <p>
                      Amet sit amet dolor
                      <strong>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                      </strong>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div class="banner-wrap bg-warning h-100">
                  <a href="#" class="h-100">
                    <h5>
                      Buy <br /> A Gift Card
                    </h5>
                    <p>
                      Amet sit amet dolor
                      <strong>
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                      </strong>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section">
          <div class="container">
            <div className="App">
              <section>
                <Switch>
                  <Route path="/medicine">
                    <div class="row">
                      <div class="title-section text-center col-12">
                        <h2 class="text-uppercase">Popular Products</h2>
                      </div>
                    </div>
                    <MedicineTable />
                  </Route>

                  <Route path="/location">
                    <LocationTable />
                  </Route>
                </Switch>
              </section>
            </div>
          </div>
        </div>

        <div class="site-section bg-secondary bg-image image_bg2">
          <div class="container">
            <div class="row align-items-stretch">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <a href="#" class="banner-1 h-100 d-flex image_bg1">
                  <div class="banner-1-inner align-self-center">
                    <h2>Asclepie Products</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae ex ad minus rem odio voluptatem.
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 mb-5 mb-lg-0">
                <a href="#" class="banner-1 h-100 d-flex image_bg2">
                  <div class="banner-1-inner ml-auto  align-self-center">
                    <h2>Rated by Experts</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae ex ad minus rem odio voluptatem.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div class="block-7">
                  <h3 class="footer-heading mb-4">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius quae reiciendis distinctio voluptates sed dolorum
                    excepturi iure eaque, aut unde.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
                <h3 class="footer-heading mb-4">Quick Links</h3>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Supplements</a>
                  </li>
                  <li>
                    <a href="#">Vitamins</a>
                  </li>
                  <li>
                    <a href="#">Diet &amp; Nutrition</a>
                  </li>
                  <li>
                    <a href="#">Tea &amp; Coffee</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-6 col-lg-3">
                <div class="block-5 mb-5">
                  <h3 class="footer-heading mb-4">Contact Info</h3>
                  <ul class="list-unstyled">
                    <li class="address">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </li>
                    <li class="phone">
                      <a href="tel://23923929210">+2 392 3929 210</a>
                    </li>
                    <li class="email">emailaddress@domain.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="icon-heart" aria-hidden="true"></i> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    class="text-primary"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/jquery-ui.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/main.js"></script>
    </Router>
  );
}

export default App;

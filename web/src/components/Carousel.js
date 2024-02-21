import React from "react";
import im1 from "../assets/cr-5.jpg";
import im2 from "../assets/cr-4.jpg";
import im3 from "../assets/cr-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active c-item">
            <img src={im1} class="d-block w-100 c-img" alt="..." />
            <div class="carousel-caption d-none d-md-block c-text-head-1 top-0 mt-5">
              <h1 class="display-2 fw-bolder">From Dialing to Driving</h1>
              <h5 class="display-6 c-text-body">
                The App That Ends Repair Center Calls
              </h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src={im2} class="d-block w-100 c-img" alt="..." />
            <div class="carousel-caption d-none d-md-block top-0 mt-5">
              <h1 class="display-4 fw-bolder"> Rapid Access</h1>
              <h5 class="display-6 c-text-body">
                {" "}
                Connecting You with Automotive Experts Instantly
              </h5>

              <br />
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src={im3} class="d-block w-100 c-img" alt="..." />
            <div class="carousel-caption d-none d-md-block c-text-head-3  mt-5">
              <h1 class="display-4 fw-bolder"> Service Excellence</h1>
              <h5 class="display-6 c-text-body">
                {" "}
                Elevating Satisfaction with Quality Automotive Care
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

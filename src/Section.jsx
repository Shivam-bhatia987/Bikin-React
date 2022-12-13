import { Component } from "react";
import "./style.css";

class SectionData extends Component {
  render() {
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container d-flex flex-column align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <h1>Build Better Websites With Bikin</h1>
            <h2>
              We are team of talented designers making websites with Bootstrap
            </h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>

            <img
              src="/assets/img/hero-img.png"
              class="img-fluid hero-img"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="150"
            />
          </div>
        </section>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae? Voluptas exercitationem animi iste dolorem temporibus inventore adipisci reiciendis modi officia laudantium quae ipsum, molestiae ea voluptatum sint, maxime pariatur?</p>
      </>
    );
  }
}
export default SectionData;

import React from "react";
import "./home_page.scss";
import RoundedBtn from "../../components/rounded_btn/rounded_btn";
import ServicesCardComponent from "../../components/services_card_component/services_card_component";
import FooterComponent from "../../components/footer_component/footer_component";

function HomePage() {
  // linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),

  return (
    <div className="homePage">
      {/* Starting of landing section */}
      <section id="landingSection">
        <div className="row m-auto">
          <div className="col-xl-5">
            <div className="landingContent">
              <h1 className="display-3 text-secondary">DATASMART</h1>
              {/* <p className="text-secondary">GET DATA SMART...</p> */}
              <p className="text-secondary">We help you get "datasmart" !</p>
              <p className="text-secondary">
                “Data is any organization's most valuable asset!” <br />{" "}
                Cliché?? or fact…
              </p>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="sideImg mr-xl-5">
              {/* <img src="images/svg_bg.svg" alt="" /> */}
              <img className="" src="images/new_landing_img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Ending of landing section */}

      {/* Starting of expertise section */}
      <section id="expertiseSection">
        <div className="content container text-center text-white">
          <h1 className="display-5 font-weight-bold">OUR EXPERTISE</h1>
          <p>
            There are several fields where we can offer you our help, our
            experience & our expertise...
          </p>

          <div className="row expertiseRow d-flex align-items-start mt-5">
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
              <div className="imgContainer">
                <img
                  src="images/data_engineering.svg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <h4>Data Engineering</h4>
              <p>Turn-key to Excel automation</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
              <div className="imgContainer">
                <img
                  src="images/machine_learning.svg"
                  className="rounded-circle"
                  alt=""
                />
              </div>

              <h4>Machine Learning</h4>
              <p>Patterns to Insights</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
              <div className="imgContainer">
                <img
                  src="images/consulting.svg"
                  className="rounded-circle"
                  alt=""
                />
              </div>

              <h4>Consulting</h4>
              <p>Business, Industry, Technology</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
              <div className="imgContainer">
                <img
                  src="images/custom_application.svg"
                  className="rounded-circle"
                  alt=""
                />
              </div>

              <h4>Custom Applications</h4>
              <p>Bespoke, enhancements & re-design</p>
            </div>
          </div>
        </div>
      </section>
      {/* Ending of expertise section */}

      {/* Starting of who are we section */}
      <section id="whoAreWeSection">
        <div className="container text-center text-dark">
          <div className="contentContainer">
            <div className="content">
              <h1 className="font-weight-bold">WHO ARE WE</h1>
              <p>
                Industry leaders and experts with several years of experience,
                passionate about data and its limitless capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ending of who are we section */}

      {/* Starting of check products section */}
      <section id="checkProductSection">
        <div className="container">
          <div className="row d-flex flex-lg-row flex-column-reverse">
            <div className="col-lg-6 text-center text-lg-left">
              <h5 className="display-4 my-4">
                Solutions that will accelerate your digital
                transformation journey...
              </h5>
              <RoundedBtn
                title="Our Products"
                color="#1492e6"
                id="ourProductsBtnButtom"
                destination="/productsPage"
              />
            </div>
            <div className="col-lg-6">
              <ServicesCardComponent />
            </div>
          </div>
        </div>
      </section>
      {/* Ending of check products section */}

      {/* Starting of footer */}
      <FooterComponent />
      {/* Ending of footer */}

      <div className="nets"></div>
    </div>
  );
}

export default HomePage;

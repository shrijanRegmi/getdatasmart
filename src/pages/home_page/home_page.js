import React from "react";
import "./home_page.scss";
import RoundedBtn from "../../components/rounded_btn/rounded_btn";
import ServicesCardComponent from "../../components/services_card_component/services_card_component";
import FooterComponent from "../../components/footer_component/footer_component";
import { Component } from "react";
import LoaderComponent from "../../components/loader_component/loader_component";

class HomePage extends Component {
  state = {
    imgLoaded: false,
  };

  changeImgState = () => {
    this.setState({
      imgLoaded: true,
    });
  };

  render() {
    return (
      <div className="homePage">
        {/* Starting of landing section */}
        {/* <div className="loaderComponent">
          <div className="content">
            <h2>DATASMART</h2>
            <p>Loading...</p>
          </div>
        </div> */}
        <section
          id="landingSection"
          className="d-block d-sm-flex flex-column justify-content-center"
        >
          <div className="container">
            <div className="row m-auto mb-5">
              <div className="col-xl-5">
                <div className="landingContent">
                  <h1 className="display-3">DATASMART</h1>
                  <p>We help you get "datasmart" !</p>
                  <p className="text-secondary font-weight-normal">
                    “Data is any organization's most valuable asset!” <br />
                    Cliché?? or fact…
                  </p>
                </div>
              </div>
              <div className="col-xl-7 d-flex justify-content-end">
                <div className="sideImg">
                  {/* <img
                    className="user_centric img-fluid"
                    src="images/working.svg"
                    alt=""
                    onLoad={this.changeImgState}
                  /> */}
                  <img
                    className="user_centric img-fluid"
                    src="images/saga_img_lg.jpg"
                    alt=""
                    onLoad={this.changeImgState}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bgImg"></div> */}
        </section>
        {/* Ending of landing section */}

        {/* <section id="sagaSection">
          <div className="sagaContent container mt-5">
            <div className="headingContainer text-center mb-5">
              <h1>Quick and Easy Approach</h1>
              <p className="headerContent mx-auto mt-3">
                We help you take the stress out of your data management
                initiatives allowing you to focus on your business. We take the{" "}
                <b>S. A. G. A.</b> approach to help you focus on the “A”ction.
              </p>
            </div>
            <div className="imgContainer-lg d-flex justify-content-center">
              <img src="images/saga_img_lg.jpg" className="img-fluid" alt="" />
            </div>
            <div className="imgContainer-sm d-flex justify-content-center">
              <img src="images/saga_img_sm.jpg" alt="" />
            </div>
          </div>
        </section> */}

        {/* Starting of expertise section */}
        <section id="expertiseSection">
          <div className="content container text-center text-white">
            <h1 className="display-5 font-weight-bold">OUR EXPERTISE</h1>
            <p>
              There are several fields where we can offer you our help, our
              experience & our expertise...
            </p>
            <p>
              At DataSmart, we use data analytics (DA) and machine learning (ML)
              to explore and uncover hidden patterns, correlations, anomalies,
              and other insights in the data. Exploratory data analysis (EDA) is
              used to summarize the main characteristics of the dataset by using
              visual methods. Then, we use visual storytelling to communicate to
              general audiences the story behind the data through visual
              components. At DataSmart , we have extensive experience in
              conducting DA, ML, and EDA studies of raw data. We can also help
              you create powerful bespoke visualizations and interactive
              dashboards for visual storytelling. By using proprietary or
              open-source technology, we can collect, analyze, and visualize
              your data (small or large datasets), to help you improve
              decision-making, uncover patterns, find anomalies, predict future
              outcomes, or help you get a competitive advantage over your
              competitors by using business intelligence. We have worked with
              data obtained from a wide variety of fields, spanning from; social
              sciences, econometrics, marketing, healthcare, optimization
              studies, to the social web.
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
                <p>
                  At DataSmart we use cloud based proprietary and open-source
                  technologies to help you lay the foundations that will enable
                  collect, collate and curate data from internal and external
                  sources of data.
                </p>
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
                <p>
                  We use machine learning (ML) to help test hypotheses, explore
                  and uncover hidden patterns, correlations, anomalies and
                  insights in your data.
                </p>
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
                <p>
                  We provide consulting services to help you improve
                  decision-making, using tools and techniques to help you get a
                  competitive advantage over your competitors. Our expertise
                  spans across a wide variety of fields, spanning from; CPG,
                  pharma, healthcare, marketing, to the social web.
                </p>
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
                <p>
                  Using visual storytelling we empower you to communicate to
                  general audiences the story behind the data through visual
                  components. We can also help you create powerful bespoke
                  visualizations and interactive dashboards.
                </p>
              </div>
            </div>

            {/* <div className="row expertiseRow d-flex align-items-start mt-5">
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
                <div className="imgContainer">
                  <img
                    src="images/data_engineering.svg"
                    className="rounded-circle"
                    alt=""
                  />
                </div>
                <h4>Data Engineering</h4>
                <p>
                  At DataSmart we use cloud based proprietary and open-source
                  technologies to help you lay the foundations that will enable
                  collect, collate and curate data from internal and external
                  sources of data.
                </p>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
                <div className="imgContainer">
                  <img
                    src="images/machine_learning.svg"
                    className="rounded-circle"
                    alt=""
                  />
                </div>

                <h4>Machine Learning</h4>
                <p>
                  We use machine learning (ML) to help test hypotheses, explore
                  and uncover hidden patterns, correlations, anomalies and
                  insights in your data.
                </p>
              </div>
            </div>

            <div className="row expertiseRow d-flex align-items-start mt-5">
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
                <div className="imgContainer">
                  <img
                    src="images/consulting.svg"
                    className="rounded-circle"
                    alt=""
                  />
                </div>

                <h4>Consulting</h4>
                <p>
                  We provide consulting services to help you improve
                  decision-making, using tools and techniques to help you get a
                  competitive advantage over your competitors. Our expertise
                  spans across a wide variety of fields, spanning from; CPG,
                  pharma, healthcare, marketing, to the social web.
                </p>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mb-5 mb-lg-0">
                <div className="imgContainer">
                  <img
                    src="images/custom_application.svg"
                    className="rounded-circle"
                    alt=""
                  />
                </div>
                <h4>Custom Applications</h4>
                <p>
                  Using visual storytelling we empower you to communicate to
                  general audiences the story behind the data through visual
                  components. We can also help you create powerful bespoke
                  visualizations and interactive dashboards.
                </p>
              </div>
            </div> */}
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
        <section id="checkProductSection" className="d-flex flex-column">
          <div className="container text-center mb-5">
            <h5 className="display-4 my-4">
              Solutions that will accelerate your digital transformation
              journey...
            </h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur explicabo iste adipisci hic itaque laborum soluta,
              dolores nemo sequi. Eveniet!
            </p>
            <RoundedBtn
              title="Our Products"
              color="#1492e6"
              id="ourProductsBtnButtom"
              destination="/productsPage"
            />
          </div>
          <div className="text-center vw-100">
            {/* <ServicesCardComponent /> */}
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
}

export default HomePage;

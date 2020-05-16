import React from "react";
import "./products_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";

function ProductsPage() {
  const products = [
    {
      id: 1,
      img: "images/pharma_img.svg",
      title: "Image to Structured Data Extraction",
      keyPoints: [
        {
          id: 1,
          img: "images/use_cases.svg",
          title: "Use Cases",
          details:
            "Leading Pharma, CPG and banking organizations need automated tools and processes to convert images into tabulated data sets for record retention and effectivity analysis.",
        },
        {
          id: 2,
          img: "images/our_solution.svg",
          title: "Our Solution",
          details:
            "Build capabilities to automatically extract data using cloud technologies to reduce the need for manual effort. Built in Machine Learning algorithms to convert the data into JSON format. Configuration and assistance capability to enable business users to get to the data quickly and progressively train the model comfortably without the intervention of specialized IT resources.",
        },
        {
          id: 3,
          img: "images/business_benefits.svg",
          title: "Business Benefits",
          details:
            "Significant reduction in time and labour costs. Quick time to analytics. Very high adoption and user experience.",
        },
      ],
    },
    {
      id: 2,
      img: "images/pharma_img.svg",
      title: "Robotic Process Automation:",
      keyPoints: [
        {
          id: 1,
          img: "images/use_cases.svg",
          title: "Use Cases",
          details:
            "Banking and Non-Banking Financial Corporations needed a capability to classify document images such as national identity, tax identifiers and financial instruments with feature extraction.",
        },
        {
          id: 2,
          img: "images/our_solution.svg",
          title: "Our Solution",
          details:
            "Using Machine Learning features such as facial recognition and pattern-matching we indexed individual components as distinct artefacts and linked them to the individual’s identity.",
        },
        {
          id: 3,
          img: "images/business_benefits.svg",
          title: "Business Benefits",
          details:
            "One click processing of key document verification and retention delivering 12X output.",
        },
      ],
    },
  ];

  const productList = products.map((f) => {
    if (f.id % 2 === 0) {
      return (
        <div className="contents" key={f.id}>
          <h2 className="text-center mb-5">{f.title}</h2>
          <div className="row mainRow d-flex flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              {f.keyPoints.map((fn) => {
                return (
                  <div className="contentContainer mb-5" key={fn.id} F>
                    <div className="heading d-flex">
                      <div className="img">
                        <img src={fn.img} alt="" />
                      </div>
                      <div className="productDetail">
                        <h3>{fn.title}</h3>
                        <p className="text-secondary">{fn.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <img className="img-fluid" src={f.img} alt="" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="contents" key={f.id}>
          <h2 className="text-center mb-5">{f.title}</h2>
          <div className="row mainRow">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <img className="img-fluid" src={f.img} alt="" />
            </div>
            <div className="col-lg-6">
              {f.keyPoints.map((fn) => {
                return (
                  <div className="contentContainer mb-5" key={fn.id} F>
                    <div className="heading d-flex">
                      <div className="img">
                        <img src={fn.img} alt="" />
                      </div>
                      <div className="productDetail">
                        <h3>{fn.title}</h3>
                        <p className="text-secondary">{fn.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="productsPage">
      {/* Starting of landing section */}
      <section id="landingSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 colContent d-flex align-items-center">
              <div className="content">
                <h1 className="display-3">Products and Frameworks</h1>
              </div>
            </div>
            <div className="col-lg-6 colImg d-flex justify-content-center">
              <img
                className="img-fluid"
                src="images/products_main.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bgImg"></div>
      </section>
      {/* Ending of landing section */}

      {/* Starting of products section */}
      <section id="productSection">{productList}</section>
      {/* Ending of products section */}

      {/* Starting of footer */}
      <FooterComponent />
      {/* Ending of footer */}
    </div>
  );
}

export default ProductsPage;

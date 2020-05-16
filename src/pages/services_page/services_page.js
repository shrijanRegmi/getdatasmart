import React from "react";
import "./services_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Data Engineering and Visualization",
      img: "images/data_engineering_services.svg",
      keywords: [
        {
          id: 1,
          keyword: "Modeling and Architecture",
        },
        {
          id: 2,
          keyword: "Engineering and Automation",
        },
        {
          id: 3,
          keyword: "Governance",
        },
        {
          id: 4,
          keyword: "Security",
        },
        {
          id: 5,
          keyword: "Compliance",
        },
      ],
    },
    {
      id: 2,
      title: "Machine Learning",
      img: "images/machine_learning_services.svg",
      keywords: [
        {
          id: 1,
          keyword: "Test and Learn to Scale",
        },
        {
          id: 2,
          keyword: "MLaaS",
        },
      ],
    },
    {
      id: 3,
      title: "Consulting",

      img: "images/consulting_services.svg",
      keywords: [
        {
          id: 1,
          keyword: "Digital Roadmap",
        },
        {
          id: 2,
          keyword: "Operating Model",
        },
        {
          id: 3,
          keyword: "Design - Thinking Workshops",
        },
        {
          id: 4,
          keyword: "Business Problem Definition",
        },
      ],
    },
    {
      id: 4,
      title: "Custom Applications",

      img: "images/custom_application_services.svg",
      keywords: [
        {
          id: 1,
          keyword: "Cloud - Azure, AWS, GCP",
        },
        {
          id: 2,
          keyword: "ERP (SAP,JDE, ERP Next)",
        },
        {
          id: 3,
          keyword: "MEAN Stack",
        },
        {
          id: 4,
          keyword: "Mobile Applications",
        },
      ],
    },
  ];

  const servicesList = services.map((f) => {
    return f.id % 2 !== 0 ? (
      <div className="row d-flex flex-lg-row flex-column-reverse" key={f.id}>
        <div className="col-lg-6 text-right d-flex flex-column justify-content-center mt-4 mt-lg-0">
          <h3 className="font-weight-bold">{f.title}</h3>
          <div className="keyWords d-flex justify-content-end flex-wrap">
            {f.keywords.map((keyWord) => {
              return <span key={keyWord.id}>{keyWord.keyword}</span>;
            })}
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <img className="img-fluid" src={f.img} alt="" />
        </div>
      </div>
    ) : (
      <div className="row" key={f.id}>
        <div className="col-lg-6 p-0">
          <img className="img-fluid" src={f.img} alt="" />
        </div>
        <div className="col-lg-6 text-left d-flex flex-column justify-content-center mt-4 mt-lg-0">
          <h3 className="font-weight-bold">{f.title}</h3>
          <div className="keyWords  d-flex flex-wrap">
            {f.keywords.map((keyWord) => {
              return <span key={keyWord.id}>{keyWord.keyword}</span>;
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="servicesPage">
      {/* Starting of landing section */}
      <section id="landingSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="content">
                <h1 className="display-3">Services we offer.</h1>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="img-fluid"
                src="images/services_main.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bgImg"></div>
      </section>
      {/* Ending of landing section */}

      {/* Starting of services section */}
      <section id="servicesSection">{servicesList}</section>
      {/* Ending of services section */}

      {/* Starting of how we work section */}
      <section id="howWeWorkSection" className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-3 text-center">How We Work</h1>
        <img className="img-fluid w-50" src="images/how_we_work.jpg" />
      </section>
      {/* Ending of how we work section */}

      {/* Starting of footer */}
      <FooterComponent />
      {/* Ending of footer */}
    </div>
  );
}

export default ServicesPage;

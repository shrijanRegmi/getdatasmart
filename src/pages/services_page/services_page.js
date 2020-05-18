import React from "react";
import "./services_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Data and Data Engineering",
      img: "images/data_engineering_services.svg",
      details:
        "Data Engineering refers to transforming data into a useful format for analysis. We involve ourselves in managing the source, structure, quality, storage, and accessibility of the data so that it can be queried and analyzed by other analysts.",
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
      title: "Data Visualization and Presentation",
      img: "images/data_visualization_services.svg",
      details:
        "Being able to present data in a visually appealing way has become part of almost every business analyst and data scientist role. Our main responsibility includes creating BI solutions for teams and customers based on specific business requirements and use cases. In other instances, it can be more graphic design oriented.",
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
      title: "Machine Learning",
      img: "images/machine_learning_services.svg",
      details:
        "This is what most people associate with DataSmart do: “making robots”. This is a larger, more complex version of data mining and statistical analysis which our team can obtain in a single step. Our team focus more on getting all the input you need to feed the model; building data pipelines, convenient data sources, A/B testing and bench marking infrastructure.",
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
      id: 4,
      title: "Consulting",
      img: "images/consulting_services.svg",
      details:
        "We provide strategic consulting for decision support, organisational improvement and operative execution. Effective development and execution of large and complex capital investments requires a broad understanding of the digital roadmap, operating model, Business Problem Definition and legal processes involved in different types of projects in different types of industries.",
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
      id: 5,
      title: "Custom Applications",
      img: "images/custom_application_services.svg",
      details:
        "Our custom application developers are experts with Microsoft .NET, JavaScript, SQL, PHP, & the mobile and web application technologies that you need to power your business applications. For over a decade, we’ve been delivering high quality custom application development services, custom software development, mobile apps, and web applications to mid-market clients across many industries.",
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
    return f.id % 2 === 0 ? (
      <div className="row d-flex flex-lg-row flex-column-reverse" key={f.id}>
        <div className="col-lg-6 text-right d-flex flex-column justify-content-center mt-4 mt-lg-0">
          <h3 className="font-weight-bold">{f.title}</h3>
          <p className="text-secondary">{f.details}</p>
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
          <p className="text-secondary">{f.details}</p>
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
                <p className="font-weight-bold text-dark">We got what you need...</p>
                <p className="text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi hic, sed tempora, necessitatibus velit illum libero
                  porro quam, ab assumenda repellat laudantium autem vitae.
                </p>
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
      <section
        id="howWeWorkSection"
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center">
          <h1 className="display-3 text-center">How We Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque
            dolor minima placeat inventore earum fugiat repellat quod.
            Voluptate, incidunt id blanditiis quos temporibus velit!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            quo beatae ratione mollitia ea non autem tempore animi temporibus
            delectus quis officiis minus perferendis voluptatem amet vel
            possimus nesciunt fugiat, quas accusantium obcaecati, cum
            consequuntur necessitatibus quaerat! Architecto, voluptatem non
            ipsam, sunt blanditiis nam libero obcaecati accusamus velit ratione
            minus quibusdam tempore, eos officiis animi ipsa quidem ipsum
            quisquam deleniti? Sapiente vero delectus commodi saepe consequuntur
            ratione mollitia eaque et, quos explicabo? Officiis cumque omnis,
            maiores molestiae laudantium assumenda necessitatibus, reiciendis
            expedita totam velit laboriosam deserunt. Odio fuga iusto, rerum
            consectetur exercitationem minima saepe esse expedita sed inventore
            asperiores cumque?
          </p>
        </div>
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

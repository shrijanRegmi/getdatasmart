import React from "react";
import ServicesSummaryComponent from "../services_summary_component/services_summary_component";

function ServicesListComponent() {
  const state = {
    services: [
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
    ],
  };

  const servicesList = state.services.map((service) => {
    return <ServicesSummaryComponent service={service} key={service.id} />;
  });

  return <div className="servicesListComponent">{servicesList}</div>;
}

export default ServicesListComponent;

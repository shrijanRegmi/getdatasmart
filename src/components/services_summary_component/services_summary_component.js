import React from "react";
import "./services_summary_component.scss";

function ServicesSummaryComponent({ service }) {
  return (
    <div className="serviceSummaryComponent">
      {service.id % 2 === 0 ? (
        <div
          className="row d-flex flex-lg-row flex-column-reverse"
        >
          <div className="col-lg-6 text-right d-flex flex-column justify-content-center mt-4 mt-lg-0">
            <h3 className="font-weight-bold">{service.title}</h3>
            <p className="text-secondary">{service.details}</p>
            <div className="keyWords d-flex justify-content-end flex-wrap">
              {service.keywords.map((keyWord) => {
                return <span key={keyWord.id}>{keyWord.keyword}</span>;
              })}
            </div>
          </div>
          <div className="col-lg-6 p-0 d-flex justify-content-end">
            <img className="img-fluid" src={service.img} alt="" />
          </div>
        </div>
      ) : (
        <div className="row" key={service.id}>
          <div className="col-lg-6 p-0">
            <img className="img-fluid" src={service.img} alt="" />
          </div>
          <div className="col-lg-6 text-left d-flex flex-column justify-content-center mt-4 mt-lg-0">
            <h3 className="font-weight-bold">{service.title}</h3>
            <p className="text-secondary">{service.details}</p>
            <div className="keyWords  d-flex flex-wrap">
              {service.keywords.map((keyWord) => {
                return <span key={keyWord.id}>{keyWord.keyword}</span>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesSummaryComponent;

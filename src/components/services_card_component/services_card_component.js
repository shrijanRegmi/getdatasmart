import React from "react";
import "./services_card_component.scss";

function ServicesCardComponent() {
  const datas = [
    {
      id: 1,
      img: "fas fa-database",
    },
    {
      id: 2,
      img: "fas fa-headphones-alt",
    },
    {
      id: 3,
      img: "fas fa-satellite-dish",
    },
    {
      id: 4,
      img: "fas fa-code",
    },
    {
      id: 5,
      img: "fas fa-archway",
    },
    {
      id: 6,
      img: "fas fa-laptop-house",
    },
  ];

  const listOfData = datas.map((f) => {
    return (
      <div className="col-3 text-center" key={f.id}>
        <i className={f.img}></i>
      </div>
    );
  });

  return (
    <div className="servicesCardComponent">
      <div className="row">{listOfData}</div>
    </div>
  );
}

export default ServicesCardComponent;

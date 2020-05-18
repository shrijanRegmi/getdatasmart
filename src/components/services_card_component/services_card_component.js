import React from "react";
import "./services_card_component.scss";

function ServicesCardComponent() {
  const datas = [
    {
      id: 1,
      img: "fas fa-database",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
    {
      id: 2,
      img: "fas fa-headphones-alt",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
    {
      id: 3,
      img: "fas fa-satellite-dish",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
    {
      id: 4,
      img: "fas fa-code",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
    {
      id: 5,
      img: "fas fa-archway",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
    {
      id: 6,
      img: "fas fa-laptop-house",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates non, exercitationem incidunt ipsum officia iste libero architecto doloribus quam magni?",
    },
  ];

  const listOfData = datas.map((f) => {
    return (
      <div className="col-3 text-center" key={f.id}>
        <i className={f.img}></i>
        <p className="mt-3 text-secondary">{f.details}</p>
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

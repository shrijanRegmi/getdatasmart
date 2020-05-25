import React from "react";
import "./services_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";
import ServicesListComponent from "../../components/services_list_component/services_list_component";

function ServicesPage() {
  return (
    <div className="servicesPage">
      {/* Starting of landing section */}
      <section id="landingSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="content">
                <h1 className="display-4">Services we offer.</h1>
                <p className="font-weight-bold text-dark">
                  We got what you need...
                </p>
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
                src="images/services_main_new.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bgImg"></div>
      </section>
      {/* Ending of landing section */}

      {/* Starting of services section */}
      <section id="servicesSection">
        <ServicesListComponent />
      </section>
      {/* Ending of services section */}

      {/* Starting of how we work section */}
      <section
        id="howWeWorkSection"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center">
          <h1 className="display-3 text-center">How We Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque
            dolor minima placeat inventore earum fugiat repellat quod.
            Voluptate, incidunt id blanditiis quos temporibus velit!
          </p>
          <img src="images/working.svg" className="img-fluid" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            quo beatae ratione mollitia ea non autem tempore animi temporibus
            delectus quis officiis minus perferendis voluptatem amet vel
            possimus nesciunt fugiat, quas accusantium obcaecati, cum
            consequuntur necessitatibus quaerat! Architecto, voluptatem non
            ipsam.
          </p>
          <img className="img-fluid w-50" src="images/how_we_work.jpg" alt="" />
        </div>
      </section>
      {/* Ending of how we work section */}

      {/* Starting of footer */}
      <FooterComponent />
      {/* Ending of footer */}
    </div>
  );
}

export default ServicesPage;

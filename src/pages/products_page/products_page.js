import React from "react";
import "./products_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";
import ProductsListComponent from "../../components/products_list_component/products_list_component";

function ProductsPage() {
  return (
    <div className="productsPage">
      {/* Starting of landing section */}
      <section id="landingSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 colContent d-flex align-items-center">
              <div className="content">
                <h1 className="display-3">Products and Frameworks</h1>
                <p className="font-weight-bold text-dark">
                  Powerful products beautifully served...
                </p>
                <p className="text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi hic, sed tempora, necessitatibus velit illum libero
                  porro quam, ab assumenda repellat laudantium autem vitae.
                </p>
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
      <section id="productSection">
        <ProductsListComponent />
      </section>
      {/* Ending of products section */}

      {/* Starting of footer */}
      <FooterComponent />
      {/* Ending of footer */}
    </div>
  );
}

export default ProductsPage;

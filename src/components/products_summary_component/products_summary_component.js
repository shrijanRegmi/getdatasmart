import React from "react";
import "./products_summary_component.scss";

function ProductsSummaryComponent({ product }) {
  return (
    <div className="productSummaryComponent">
      {product.id % 2 === 0 ? (
        <div className="contents">
          <h2 className="text-center mb-5">{product.title}</h2>
          <div className="row mainRow d-flex flex-column-reverse flex-lg-row">
            <div className="col-lg-12">
              {product.keyPoints.map((fn) => {
                return (
                  <div className="contentContainer mb-5" key={fn.id}>
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
            {/* <div className="col-lg-6 d-flex flex-column align-items-center">
              <img className="img-fluid" src={product.img} alt="" />
            </div> */}
          </div>
        </div>
      ) : (
        <div className="contents" key={product.id}>
          <h2 className="text-center mb-5">{product.title}</h2>
          <div className="row mainRow">
            {/* <div className="col-lg-6 d-flex flex-column align-items-center">
              <img className="img-fluid" src={product.img} alt="" />
            </div> */}
            <div className="col-lg-12">
              {product.keyPoints.map((fn) => {
                return (
                  <div className="contentContainer mb-5" key={fn.id}>
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
      )}
    </div>
  );
}

export default ProductsSummaryComponent;

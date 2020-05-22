import React from "react";
import ProductsSummaryComponent from "../products_summary_component/products_summary_component";

function ProductsListComponent() {
  const state = {
    products: [
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
    ],
  };

  const productsList = state.products.map((product) => {
    return <ProductsSummaryComponent product={product} key={product.id} />;
  });

  return (
    <div className="productsListComponent">
      <div className="container">{productsList}</div>
    </div>
  );
}

export default ProductsListComponent;

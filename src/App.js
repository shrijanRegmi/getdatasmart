import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar_component/navbar_component";
import HomePage from "./pages/home_page/home_page";
import "./App.scss";
import ProductsPage from "./pages/products_page/products_page";
import ServicesPage from "./pages/services_page/services_page";
import ContactPage from "./pages/contact_page/contact_page";
import FooterComponent from "./components/footer_component/footer_component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productsPage" component={ProductsPage} />
          <Route exact path="/servicesPage" component={ServicesPage} />
          <Route exact path="/contactPage" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./contact_page.scss";
import FooterComponent from "../../components/footer_component/footer_component";
import FormSuccessful from "../../components/form_submitted_component/form_successful";
var nodemailer = require("nodemailer");

class ContactPage extends Component {
  transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ilyyhs9@gmail.com",
      pass: "ilmfasf42",
    },
  });

  mailOptions = {
    from: "shrijanregmi9@gmail.com",
    to: "ilyyhs9@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  state = {
    name: "",
    email: "",
    subject: "",
    query: "",
    isNameEmpty: false,
    isEmailEmpty: false,
    isSubjectEmpty: false,
    isQueryEmpty: false,
    successful: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async handleFormSubmit(e) {
    e.preventDefault();
    console.log("sent");

    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.query !== "" &&
      this.state.subject !== ""
    ) {
      this.setState({
        isNameEmpty: false,
        isEmailEmpty: false,
        isSubjectEmpty: false,
        isQueryEmpty: false,
      });
      const templateId = "contact_form12354";
      this.sendFeedback(templateId, {
        message_html: this.state.query,
        from_name: this.state.name,
        reply_to: this.state.email,
      });
    } else {
      if (this.state.name === "") {
        this.setState({
          isNameEmpty: true,
        });
      }

      if (this.state.email === "") {
        this.setState({
          isEmailEmpty: true,
        });
      }

      if (this.state.subject === "") {
        this.setState({
          isSubjectEmpty: true,
        });
      }

      if (this.state.query === "") {
        this.setState({
          isQueryEmpty: true,
        });
      }
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.handleContactState(true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        window.alert(
          "There was a problem sending the query !!! Please try again later !!!"
        )
      );
  }

  handleContactState = (contactState) => {
    console.log("Called", contactState);
    this.setState({
      successful: contactState,
    });
  };

  render() {
    return this.state.successful ? (
      <FormSuccessful onClickContinue={this.handleContactState} />
    ) : (
      <div className="contactPage">
        <div className="container">
          {/* Starting of header */}
          <header id="header" className="text-center">
            <h1 className="display-3">Contact Us</h1>
            <p className="w-50 m-auto">
              For any questions, suggestions & remarks, you can contact us via
              the contact form below or via{" "}
              <a href="contact@datasmarter.com">contact@datasmarter.com</a>
            </p>
            <div className="divider"></div>
            <h1 className="w-50 m-auto">
              Fill out this form, we'll quickly get back to you.
            </h1>
          </header>
          {/* Ending of header */}

          {/* Starting of form section */}

          <section id="formSection" className="text-center mt-5">
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="inputContainer name d-flex flex-column mb-3">
                    <div className="label text-left">
                      <label>Name</label>
                      <span className="text-danger"> *</span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="nameInputField"
                      placeholder="Type your name here..."
                      onChange={(e) => this.handleChange(e)}
                    />
                    {this.state.isNameEmpty && (
                      <p className="text-danger text-left">
                        This field cannot be empty
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inputContainer email d-flex flex-column mb-3">
                    <div className="label text-left">
                      <label>Email</label>
                      <span className="text-danger"> *</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="emailInputField"
                      placeholder="Type your email here..."
                      onChange={(e) => this.handleChange(e)}
                    />
                    {this.state.isEmailEmpty && (
                      <p className="text-danger text-left">
                        This field cannot be empty
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="inputContainer subject d-flex flex-column mb-3">
                <div className="label text-left">
                  <label>Subject</label>
                  <span className="text-danger"> *</span>
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subjectInputField"
                  placeholder="Type your subject here..."
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.isSubjectEmpty && (
                  <p className="text-danger text-left">
                    This field cannot be empty
                  </p>
                )}
              </div>
              <div className="inputContainer message d-flex flex-column mb-3">
                <div className="label text-left">
                  <label>Your Query Details</label>
                  <span className="text-danger"> *</span>
                </div>
                <textarea
                  type="text"
                  name="query"
                  id="messageInputField"
                  placeholder="Type your query here..."
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.isQueryEmpty && (
                  <p className="text-danger text-left">
                    This field cannot be empty
                  </p>
                )}
              </div>
              <div className="sizedBox"></div>
              <button className="btn btn-outline-success">Submit</button>
              {/* <RoundedBtn id="sendBtn" color="rgb(223, 104, 91)" title="Send" /> */}
            </form>
          </section>

          {/* Ending of form section */}
        </div>
        {/* Starting of footer */}
        <FooterComponent />
        {/* Ending of footer */}
      </div>
    );
  }
}

export default ContactPage;

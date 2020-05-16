import React from "react";
import "./form_successful.scss";

function FormSuccessful({ onClickContinue }) {
  return (
    <div className="formSuccessful d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="card text-center p-5">
          <h1 className="display-3 text-success">SUCCESS</h1>
          <h1>Thank you for contacting us</h1>
          <p>We have received you query, we'll get back to you soon.</p>
          <button
            className="btn btn-success mt-5"
            onClick={() => {
              onClickContinue(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSuccessful;

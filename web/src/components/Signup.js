import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <form validate>
      <div className="container">
        <div className="field-container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="John Doe"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3" style={{ width: "60%" }}>
            <label for="addressLine1" class="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="addressLine1"
              placeholder="Line-1"
              required
            />
          </div>
          <div class="mb-3" style={{ width: "60%" }}>
            <input
              type="text"
              className="form-control"
              id="addressLine2"
              placeholder="Line-2"
              required
            />
          </div>

          <div class="mb-3" style={{ width: "60%" }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                required
              />
            </div>
          </div>

          <div class="mb-3" style={{ width: "60%" }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                className="form-control"
                id="PostalCode"
                placeholder="Postal Code"
                required
              />
            </div>
          </div>

          <div class="mb-3" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Birthday
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
            <p>**This will be your username.</p>
          </div>
          <div class="mb-3" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              required
            />
          </div>
          <div class="mb-3" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Confirm Password
            </label>
            <input
              type="confirm-password"
              class="form-control"
              id="exampleFormControlInput1"
              required
            />
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      I have read and accept the terms and conditions.
                    </label>
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body ">
                  <p>
                    Vehicle Breakdown System License Agreement: This agreement
                    governs the use of the Vehicle Breakdown System provided by
                    Wrench it. By accessing or using this system, you agree to
                    be bound by the terms and conditions outlined herein.
                  </p>
                  <ul>
                    <li>
                      <strong>License Grant:</strong> You are granted a license
                      to use the Vehicle Breakdown System for managing breakdown
                      services.
                    </li>
                    <li>
                      <strong>Permitted Use:</strong> Authorized use of the
                      software in compliance with laws and regulations.
                    </li>
                    <li>
                      <strong>Restrictions:</strong> Prohibited actions
                      including modification, reverse engineering, or
                      transferring the Software.
                    </li>
                    <li>
                      <strong>Ownership:</strong> The Software and its rights
                      remain the exclusive property of Wrench it.
                    </li>
                    <li>
                      <strong>Support and Maintenance:</strong> Wrench it
                      provides reasonable technical support for the Software.
                    </li>
                    <li>
                      <strong>Fees:</strong> Agreement to pay specified fees as
                      per an invoice or separate agreement.
                    </li>
                    <li>
                      <strong>Termination:</strong> This agreement remains in
                      effect until terminated; Wrench it reserves the right to
                      terminate access in case of violations.
                    </li>
                    <li>
                      <strong>Confidentiality:</strong> Agreement to maintain
                      confidentiality of proprietary information.
                    </li>
                    <li>
                      <strong>Limitation of Liability:</strong> Wrench it is not
                      liable for indirect or consequential damages arising from
                      software use.
                    </li>
                    <li>
                      <strong>Governing Law:</strong> This agreement is governed
                      by the laws of [Jurisdiction].
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <input type="submit" value="Register" class="button" />
        </div>
      </div>
    </form>
  );
};

export default Signup;

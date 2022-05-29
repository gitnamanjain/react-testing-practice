import React, { Component } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let isFormValid = true;

    if (!fields["firstName"]) {
      isFormValid = false;
      errors["firstName"] = "Can't be Empty";
    } else {
      let len = fields["firstName"].length;
      if (len < 8) {
        isFormValid = false;
        errors["firstName"] = "Minimum Length Must be 8 character";
      }
    }

    if (!fields["lastName"]) {
      isFormValid = false;
      errors["lastName"] = "Can't be Empty";
    } else {
      let len = fields["lastName"].length;
      if (len < 8) {
        isFormValid = false;
        errors["lastName"] = "Minimum Length Must be 8 character";
      }
    }

    if (!fields["address1"]) {
      isFormValid = false;
      errors["address1"] = "Can't be Empty";
    } else {
      let len = fields["address1"].length;
      if (len < 32) {
        isFormValid = false;
        errors["address1"] = "Minimum Length Must be 32 character";
      }
    }

    if (!fields["city"]) {
      isFormValid = false;
      errors["city"] = "Can't be Empty";
    }

    if (!fields["zip"]) {
      isFormValid = false;
      errors["zip"] = "Can't be Empty";
    } else {
      let len = fields["zip"].length;
      if (len !== 6) {
        isFormValid = false;
        errors["zip"] = "Must be 6 Characters";
      }
    }

    if (!fields["country"]) {
      isFormValid = false;
      errors["country"] = "Can't be Empty";
    }

    this.setState({ errors: errors });
    return isFormValid;
  }

  contactSubmit(e) {
    if (this.handleValidation() === false) {
      e.preventDefault();
      alert("Form has Errors");
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log(fields);
  }
  render() {
    return (
      <div>
        <form>
          <div className="div1">
            <input
              className="form-control"
              placeholder="First name *"
              name="firstName"
              onChange={this.handleChange.bind(this, "firstName")}
              value={this.state.fields["firstName"]}
            />
            <span className="error">{this.state.errors["firstName"]}</span>
          </div>

          <div className="div2">
            <input
              className="form-control"
              placeholder="Last name *"
              name="lastName"
              onChange={this.handleChange.bind(this, "lastName")}
              value={this.state.fields["lastName"]}
            />
            <span className="error">{this.state.errors["lastName"]}</span>
          </div>

          <div className="div3">
            <input
              className="form-control"
              placeholder="Address line 1 *"
              name="address1"
              onChange={this.handleChange.bind(this, "address1")}
              value={this.state.fields["address1"]}
            />
            <span className="error">{this.state.errors["address1"]}</span>
          </div>

          <div className="div4">
            <input
              className="form-control"
              placeholder="Address line 2"
              name="address2"
              onChange={this.handleChange.bind(this, "address2")}
              value={this.state.fields["address2"]}
            />
          </div>

          <div className="div5">
            <input
              className="form-control"
              placeholder="City *"
              name="city"
              onChange={this.handleChange.bind(this, "city")}
              value={this.state.fields["city"]}
            />
            <span className="error">{this.state.errors["city"]}</span>
          </div>

          <div className="div6">
            <input
              className="form-control"
              placeholder="State/ Province/ Region"
              name="state"
              onChange={this.handleChange.bind(this, "state")}
              value={this.state.fields["state"]}
            />
          </div>

          <div className="div7">
            <input
              className="form-control"
              placeholder="Zip/ Postal code *"
              name="zip"
              onChange={this.handleChange.bind(this, "zip")}
              value={this.state.fields["zip"]}
            />
            <span className="error">{this.state.errors["zip"]}</span>
          </div>

          <div className="div8">
            <input
              className="form-control"
              placeholder="Country *"
              name="country"
              onChange={this.handleChange.bind(this, "country")}
              value={this.state.fields["country"]}
            />
            <span className="error">{this.state.errors["country"]}</span>
          </div>

          <div className="div9">
            <Checkbox defaultChecked />
            Use this address for payment details
          </div>

          <div className="div10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.contactSubmit.bind(this)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;

import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import "./register.styles.css";
import CustomSelect from "../customSelect/custom-select-input";
import { stateCategory, examCategory } from "./state.data";

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      state: "Select State",
      exam: "select exam category",
      stateCategory,
      examCategory,
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSelect = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const {
      firstname,
      lastname,
      phone,
      email,
      password,
      confirmPassword,
      exam,
      state,
    } = this.state;
    
    if (password !== confirmPassword) {
      swal("Error!", "Password does not match!", "error");
      return;
    }

    axios
      .post("user/register", {
        firstname,
        lastname,
        phone,
        email,
        password,
        exam,
        state,
      })
      .then((res) => {
        if (res.data.success) {
          this.setState({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            state: "Select State",
            exam: "select exam category",
          });
          swal("Success!", "Registration successful!", "success");
          this.props.history.push("/");
        } else {
          swal("Faild!", "please ensure to fill all form", "error");
        }
      });
  };

  render() {
    const {
      firstname,
      lastname,
      phone,
      email,
      password,
      confirmPassword,
      exam,
      state,
    } = this.state;

    return (
      <div className="sign-up">
        <img
          src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
          width="100px"
          alt="logo"
        />
        <span>Don't have an account --> Register </span>

        <form>
          <div className="double-col">
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            label="Firstname"
            handleChange={this.handleChange}
            required
            id="reg-col-input"
          />
          <FormInput
            type="text"
            name="lastname"
            value={lastname}
            label="Lastname"
            handleChange={this.handleChange}
            required
          />
          </div>
          <div className="double-col">
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          
          <FormInput
            type="text"
            name="phone"
            value={phone}
            label="Phone"
            handleChange={this.handleChange}
            required
            id="reg-col-input"
          />
          </div>
          <div className="double-col">
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
            id="reg-col-input"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          </div>
          <CustomSelect
            defaultText={exam}
            optionsList={this.state.examCategory}
            handleSelect={this.handleSelect}
            name="exam"
          />
          <CustomSelect
            defaultText={state}
            optionsList={this.state.stateCategory}
            handleSelect={this.handleSelect}
            name="state"
          />

          <div className="login-btns">
            <Button
              onClick={this.handleSubmit}
              className="btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Register
            </Button>
            <div className="create-n-reset">
              <Link to="login">Login</Link>
              <Link>Reset</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterComponent);

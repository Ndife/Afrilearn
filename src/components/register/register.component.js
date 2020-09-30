import React from "react";
import FormInput from "../form-input/form-input.component";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import "./register.styles.css";
import CustomSelect from "../customSelect/custom-select-input";

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
      defaultStateText: "Select State",
      defaultExamText: "select exam category",
      examCategory: [
        { id: 1, name: "OLevel" },
        { id: 2, name: "Primary" },
        { id: 3, name: "Professional" },
        { id: 4, name: "University" },
      ]
    };
  }

  handleChange = (e) => {
    const value = 
    e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({ ...this.state, [e.target.name]: value });
    console.log(e.data.name)
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    // const { firstname, lastname, phone, email, password, confirmPassword, defaultExamText, defaultStateText } = this.state;
    // if (password !== confirmPassword) {
    //   alert("Password do not match ");
    //   return;
    // }

    console.log(this.state.state)
  };

  render() {
    const { firstname, lastname, phone, email, password, confirmPassword, defaultExamText, defaultStateText } = this.state;

    return (
      <div className="sign-up">
        <img src="https://myafrilearn.com/assets/img/afrilearn_logo.png" width="100px" alt="logo" />
        <span>Don't have an account --> Register </span>

        <form className="sign-up-form" >
          <FormInput
            type="text"
            name="firstname"
            value={firstname}
            label="Firstname"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="lastname"
            value={lastname}
            label="Lastname"
            handleChange={this.handleChange}
            required
          />
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
            label="phone"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <CustomSelect defaultText={defaultExamText}
            optionsList={this.state.examCategory} onClick={this.handleChange} />

          <CustomSelect defaultText={defaultStateText}
            optionsList={this.state.examCategory}  onClick={this.handleChange} />

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

export default RegisterComponent;

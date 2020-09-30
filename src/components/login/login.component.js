import React from "react";
import "./login.styles.css";
import FormInput from "../form-input/form-input.component";
import { Button } from "../Button";
import { Link } from "react-router-dom";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

  };

  render() {
    return (
      <div className="sign-in">
        <img src="https://myafrilearn.com/assets/img/afrilearn_logo.png" width="100px" alt="logo" />
        <span>Login with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
          />

          <div className="login-btns">
            <Button
              className="btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              link="sign-up"
            >
              Login
            </Button>
           <div className="create-n-reset">
              <Link to="register">Create Account</Link>
              <Link>Reset</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;

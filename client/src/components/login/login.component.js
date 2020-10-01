import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import "./login.styles.css";
import FormInput from "../form-input/form-input.component";
import { Button } from "../Button";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      islogin: null,
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    axios.post("user/login", { email, password }).then((res) => {
      if (res.data.success) {
        this.setState({ islogin: res.data.token, email: "", password: "" });
        swal("Success!", "login successful!", "success");
        this.props.history.push("/");
      } else {
        swal("Login Faild!", JSON.stringify(res.data.message), "error");
      }
    });
  };

  render() {
    return (
      <div className="sign-in">
        <img
          src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
          width="100px"
          alt="logo"
        />
        <span>Login with your email and password</span>
        <form>
          <FormInput
            type="email"
            name="email"
            required
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            autocomplete="off"
          />

          <FormInput
            type="password"
            name="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            autocomplete="off"
          />

          <div className="login-btns">
            <Button
              type="submit"
              className="btn"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={this.handleSubmit}
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

export default withRouter(LoginComponent);

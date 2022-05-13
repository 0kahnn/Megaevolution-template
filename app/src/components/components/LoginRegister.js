/* login.jsx */
import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import GoogleIcon from "../../assets/icons/google-icons.png";
import EmailVerificationModal from "./Auth/EmailVerificationModal";
import ThankYouModal from "./Auth/ThankYouModal";
export class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: "",
      password: "",
      verifyPassword: "",
      errorMessage: "",
    };
  }

  validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(password);
  }

  responseGoogle = async (googleData) => {
    console.log(googleData);
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // store returned user somehow
  };

  verifyEmail = () => {
    if (!this.validateEmail(this.state.email)) {
      this.setState({ errorMessage: "Please provide a valid email" });
      return;
    }
  };

  render() {
    return (
      <div className="form-container" id="auth-form-container">
        {this.state.isLogin && (
          <div className="form">
            <form className="w-100">
              <div className="form-section">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>

                <div class="forgot-password d-flex justify-content-end">
                  <a href="#">Forgot Password?</a>
                </div>

                <div className="login-buttons">
                  <button
                    type="submit"
                    id="send_message"
                    class="login border-0"
                  >
                    Login
                  </button>
                  <span>Or</span>
                  <GoogleLogin
                    className="google-btn login border-0"
                    clientId="883463370678-151evus568cf408i6ofip9ujsasccdvh.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>

                <div className="create-link">
                  <span>
                    Dont't have an account yet?{" "}
                    <a
                      href="#"
                      onClick={() => this.setState({ isLogin: false })}
                    >
                      Create an account
                    </a>
                  </span>
                </div>
                <div>
                  <p className="error-message">{this.state.errorMessage}</p>
                </div>
              </div>
            </form>
          </div>
        )}
        <EmailVerificationModal />
        <ThankYouModal />

        {!this.state.isLogin && (
          <div>
            <div className="form">
              <form className="w-100">
                <div className="form-section">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={(event) =>
                        this.setState({ verifyPassword: event.target.value })
                      }
                    />
                  </div>

                  <div className="login-buttons">
                    <button
                      type="submit"
                      id="send_message"
                      class="login border-0"
                    >
                      Sign Up
                    </button>
                    <span>Or</span>
                    <GoogleLogin
                      className="google-btn login border-0"
                      clientId="883463370678-151evus568cf408i6ofip9ujsasccdvh.apps.googleusercontent.com"
                      buttonText="Login With Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>

                  <div className="create-link">
                    <span>
                      <a
                        href="#"
                        onClick={() => this.setState({ isLogin: true })}
                      >
                        Go Back To Login
                      </a>
                    </span>
                  </div>
                  <div>
                    <p className="error-message">{this.state.errorMessage}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginRegister;

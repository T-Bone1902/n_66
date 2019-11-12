import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";

//IMAGE SVG
import { ReactComponent as Logo } from "./images/logo.svg";
//CSS
import "./Login.css";

class LoginNew extends React.Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    // req.body
    console.log(this.props);
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (!data.loggedIn) {
          const state = { ...this.state };
          state.msg = data.msg;
          console.log(data.msg);
          this.setState(state);
        } else {
          const { token: jwt } = data;
          localStorage.setItem("token", jwt);
          const state = { ...this.state };
          state.msg = "登入成功!";
          this.setState(state);
          // this.props.history.push("/account");
          // window.location = "/account";
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleSignUpSubmit = e => {
    e.preventDefault();
    // req.body
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(this.state);
        if (data.success) {
          const state = { ...this.state };
          state.msg = "註冊成功!";
          this.setState(state);
          console.log(this.state);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    // JS DOM control
    let wantSignUp = false;

    let windowWidth = window.innerWidth;

    let signIn = document.querySelector(".signIn");
    let registered = document.querySelector(".registered");
    let mountainBg = document.querySelector(".mountainBg");
    let titleUp = document.querySelector("#titleUp");
    let titleIn = document.querySelector("#titleIn");

    let signInForm = document.querySelector(".sign-in");
    let signUpForm = document.querySelector(".sign-up");
    let signUpBtn = document.querySelector(".__btn");
    let mUp = document.querySelector("#mUp");
    let mIn = document.querySelector("#mIn");

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;

      if (windowWidth > 981 && wantSignUp == true) {
        signIn.style.transition = " transform 0s";
        registered.style.transition = " transform 0s";
        mountainBg.style.transition = "opacity 0s";

        registered.style.transform = "translate(-610px, 0)";
        mountainBg.style.transform = "translate(610px, 0)";
        mountainBg.style.opacity = "1";
        signIn.style.transform = "translate(350px, 0)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      }

      if (windowWidth < 981 && wantSignUp == true) {
        signIn.style.transition = " transform 0s";
        registered.style.transition = " transform 0s";
        mountainBg.style.transition = "opacity 0s";

        registered.style.transform = "translate(0, -550px)";
        mountainBg.style.transform = "translate(0, 0)";
        mountainBg.style.opacity = "0";
        signIn.style.transform = "translate(0, 550px)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      }
    });

    function horizonMove() {
      wantSignUp = !wantSignUp;

      if (wantSignUp) {
        registered.style.transform = "translate(-610px, 0)";
        mountainBg.style.transform = "translate(610px, 0)";
        signIn.style.transform = "translate(350px, 0)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      } else {
        registered.style.transform = "translate(0, 0)";
        mountainBg.style.transform = "translate(0, 0)";
        signIn.style.transform = "translate(0, 0)";
        signInForm.style.opacity = "1";
        signUpForm.style.top = "200%";
        signUpForm.style.opacity = "0";
        titleUp.style.transform = "translate(0, 0)";
        titleIn.style.transform = "translate(0, 0)";
        mUp.style.transform = "translate(0, 0px)";
        mIn.style.transform = "translate(0, -50px)";
      }
    }

    function verticalMove() {
      wantSignUp = !wantSignUp;

      if (wantSignUp) {
        registered.style.transform = "translate(0, -550px)";
        mountainBg.style.opacity = "0";
        signIn.style.transform = "translate(0, 550px)";
        signInForm.style.opacity = "0";
        signUpForm.style.top = "0";
        signUpForm.style.opacity = "1";
        titleUp.style.transform = "translate(0, -100px)";
        titleIn.style.transform = "translate(0, -100px)";
        mUp.style.transform = "translate(0, 50px)";
        mIn.style.transform = "translate(0, 0px)";
      } else {
        registered.style.transform = "translate(0, 0)";
        mountainBg.style.opacity = "1";
        signIn.style.transform = "translate(0, 0)";
        signInForm.style.opacity = "1";
        signUpForm.style.top = "200%";
        signUpForm.style.opacity = "0";
        titleUp.style.transform = "translate(0, 0)";
        titleIn.style.transform = "translate(0, 0)";
        mUp.style.transform = "translate(0, 0px)";
        mIn.style.transform = "translate(0, -50px)";
      }
    }

    signUpBtn.addEventListener("click", () => {
      signIn.style.transition = "transform 1.2s ease-in-out";
      registered.style.transition = "transform 1.2s ease-in-out";
      mountainBg.style.transition =
        "transform 1.2s ease-in-out, opacity 0.8s ease-in-out";

      if (windowWidth > 981) {
        horizonMove();
      } else {
        verticalMove();
      }
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <Container className="cont">
          <Row className="loginRow">
            <div className="signIn">
              <div className="logo">
                <Logo height="20" width="20" />
              </div>
              <div className="position-relative">
                <form
                  className="form sign-in"
                  onSubmit={this.handleLoginSubmit}
                  method="POST"
                >
                  <h2>會員登入</h2>
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="電子信箱"
                      onChange={this.logChange}
                    />
                  </label>
                  <label>
                    <input
                      type="password"
                      name="password"
                      placeholder="密碼"
                      onChange={this.logChange}
                    />
                  </label>
                  <a href="#6" className="forgot-pass">
                    忘記密碼?
                  </a>
                  <div className="feedback">{this.state.msg}</div>
                  <button type="submit" className="submit">
                    登入
                  </button>
                </form>

                <form
                  className="form sign-up"
                  onSubmit={this.handleSignUpSubmit}
                  method="POST"
                >
                  <div className=" ">
                    <h2>會員註冊</h2>
                    <label>
                      <input
                        type="email"
                        name="email"
                        placeholder="電子信箱"
                        onChange={this.logChange}
                      />
                    </label>
                    <label>
                      <input
                        type="password"
                        name="password"
                        placeholder="密碼"
                        onChange={this.logChange}
                      />
                    </label>
                    <label>
                      <input type="password" placeholder="確認密碼" />
                    </label>
                    <button type="submit" className="submit register">
                      註冊
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="registered">
              <div className="mountainBg"></div>
              <div className="sub-cont">
                <div className="img">
                  <div className="inner">
                    <div
                      id="titleUp"
                      className="__text m--up"
                      style={{ transition: "1.2s ease-in-out" }}
                    >
                      <h2>加入</h2>
                      <p>探索更多旅程</p>
                    </div>
                    <div
                      id="titleIn"
                      className="__text m--in"
                      style={{ transition: "1.2s ease-in-out" }}
                    >
                      <h2>發現</h2>
                      <p>獨一無二的冒險</p>
                    </div>
                  </div>

                  <div className="__btn">
                    <a id="mUp" href="#2" role="button" className="m--up">
                      註冊
                    </a>
                    <a id="mIn" href="#3" role="button" className="m--in">
                      登入
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default LoginNew;

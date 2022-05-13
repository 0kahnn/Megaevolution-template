import React, { useEffect, useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import { header } from "react-bootstrap";
import { Link, navigate } from "@reach/router";
import useOnclickOutside from "react-cool-onclickoutside";
import Popup from "../components/popup";
import Wallet from "../components/wallet";
import LoginRegister from "../components/LoginRegister.js";

import logo from "../../assets/icons/logo.png";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";
import "../../assets/css/formComponent.css";
setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? "active" : "non-active",
      };
    }}
  />
);

const Header = function () {
  const [openMenu, setOpenMenu] = React.useState(false);
  // const [openMenu1, setOpenMenu1] = React.useState(false);
  // const [openMenu2, setOpenMenu2] = React.useState(false);
  // const [openMenu3, setOpenMenu3] = React.useState(false);

  //popUp state
  const [isOpen, setIsOpen] = useState(false);

  //Toggle PopUp
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // const handleBtnClick = (): void => {
  //   setOpenMenu(!openMenu);
  // };
  // const handleBtnClick1 = (): void => {
  //   setOpenMenu1(!openMenu1);
  // };
  // const handleBtnClick2 = (): void => {
  //   setOpenMenu2(!openMenu2);
  // };
  // const handleBtnClick3 = (): void => {
  //   setOpenMenu3(!openMenu3);
  // };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  // const closeMenu1 = (): void => {
  //   setOpenMenu1(false);
  // };
  // const closeMenu2 = (): void => {
  //   setOpenMenu2(false);
  // };
  // const closeMenu3 = (): void => {
  //   setOpenMenu3(false);
  // };
  // const ref = useOnclickOutside(() => {
  //   closeMenu();
  // });
  // const ref1 = useOnclickOutside(() => {
  //   closeMenu1();
  // });
  // const ref2 = useOnclickOutside(() => {
  //   closeMenu2();
  // });
  // const ref3 = useOnclickOutside(() => {
  //   closeMenu3();
  // });

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <>
      {/* old header */}
      <header id="myHeader" className="navbar">
        <div className="container">
          <div className="row w-100-nav">
            <div className="logo px-0">
              <div className="navbar-title navbar-item">
                <NavLink to="/">
                  <img
                    src="./img/mega-logo.svg"
                    className="img-fluid d-3"
                    width="300px"
                    alt="#"
                  />
                  <img
                    src="./img/mega-logo.svg"
                    className="img-fluid d-none"
                    width="300px"
                    alt="#"
                  />
                </NavLink>
              </div>
            </div>

            <BreakpointProvider>
              <Breakpoint xl>
                <div className="menu">
                  <div className="navbar-item">
                    <NavLink to="/home">
                      Home
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      Events
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      Partners
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      Roadmap
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      Team
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      MEGA Mansion
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="navbar-item">
                    <NavLink to="/">
                      {/* Marketing <em>Home</em> */}
                      Coming Soon
                      <span className="lines"></span>
                    </NavLink>
                  </div>

                  <div className="mainside">
                    <span
                      className="mega-btn-main inline lead"
                      id="wallet-btn"
                      onClick={() => navigate("login")}
                    >
                      My Space
                    </span>
                    {isOpen && (
                      <Popup
                        content={
                          <>
                            <LoginRegister />
                            {/* <Wallet/> */}
                          </>
                        }
                        handleClose={togglePopup}
                      />
                    )}
                  </div>

                  {/* Locales */}
                  <div className="locale-item">
                    {/* Marketing <em>Home</em> */}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/img/buttons/united-states-of-america.png"
                      }
                      alt=""
                    />
                    <span className="lines"></span>
                  </div>

                  <div className="locale-item">
                    {/* Marketing <em>Home</em> */}
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/buttons/south-korea.png"
                      }
                      alt=""
                    />
                    <span className="lines"></span>
                  </div>

                  <div className="locale-item">
                    {/* Marketing <em>Home</em> */}
                    <img
                      src={process.env.PUBLIC_URL + "/img/buttons/japan.png"}
                      alt=""
                    />
                    <span className="lines"></span>
                  </div>
                </div>
              </Breakpoint>
            </BreakpointProvider>
          </div>

          <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
            <div className="menu-line white"></div>
            <div className="menu-line1 white"></div>
            <div className="menu-line2 white"></div>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;

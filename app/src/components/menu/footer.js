import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-1">
                        <img
                            src={process.env.PUBLIC_URL + "/img/mega-logo.svg"}
                            className="img-fluid d-3 mb-3"
                            width="300px"
                            alt="#"
                        />
                        <br/>
                        <span className="col-md-2">Faucibus donec id convallis in eu tempus. Elit ultrices diam malesuada magna molestie a montes, egestas. Lorem mi vestibulum ut viverra nullam blandit. </span>
                    </div>

                    <div className="col-md-2 col-sm-6 col-xs-1" />

                    <div className="col-md-2 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className="footer-title">Community</h5>
                            <ul>
                                <li><Link to="">Mooncraft</Link></li>
                                <li><Link to="">Discord</Link></li>
                                <li><Link to="">Reddit</Link></li>
                                <li><Link to="">Telegram</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className="footer-title">Social</h5>
                            <ul>
                                <li><Link to="">Facebook</Link></li>
                                <li><Link to="">Twitter</Link></li>
                                <li><Link to="">Instagram</Link></li>
                                <li><Link to="">Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className="footer-title">Resources</h5>
                            <ul>
                                <li><Link to="">Branding</Link></li>
                                <li><Link to="">Wallet Tracker</Link></li>
                                <li><Link to="">Contract</Link></li>
                                <li><Link to="">White Paper</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <span className="copy">&copy; Copyright @ 2022 MegaEvolution | All Rights Reserved</span>
                                    </span>
                                </div>
                                {/* <div className="de-flex-col">
                                    <div className="social-icons">
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-facebook fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-twitter fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-linkedin fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-pinterest fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-rss fa-lg"></i></span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;
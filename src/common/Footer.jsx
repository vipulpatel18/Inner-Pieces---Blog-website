import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between px-5">
              <Link className="" to="/"><h2 className="footer-logo" role="button">Inner Pieces</h2></Link>
              <ul className="list-unstyled ">
                <h5>Contact Us</h5>
                <li>123-456-7890</li>
                <li>info@mysite.com</li>
              </ul>
              <ul className="list-inline  align-self-center">
                <h5>Follow Us</h5>
                <li className="list-inline-item">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-md-6">
              <h3>Contact</h3>
              <p>Ask me anything</p>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required=""
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Leave Us a Message...
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="btn btn-outline-light">
                  Submit
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

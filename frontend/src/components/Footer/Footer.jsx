import React from "react";
import "./Footer.scss";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__primary">
            <div className="footer__primary-links">
              <div className="footer__primary-text">Services</div>
              <Link className="footer__primary-link">Customer service</Link>
              <br />
              <Link className="footer__primary-link">Opening hours</Link>
            </div>
            <div className="footer__primary-links">
              <div className="footer__primary-text">Concepts</div>
              <Link className="footer__primary-link">Promotion and offers</Link>
              <br />
              <Link className="footer__primary-link">
                Formulas and concepts
              </Link>
            </div>
            <div className="footer__primary-links">
              <div className="footer__primary-text">Organization</div>
              <Link className="footer__primary-link">About HANOS</Link>
              <br />
              <Link className="footer__primary-link">
                Frequently asked questions
              </Link>
              <br />
              <Link className="footer__primary-link">CSR</Link>
            </div>
            <div className="footer__primary-links">
              <div className="footer__primary-text">Arrange immediately</div>
              <Link className="footer__primary-link">Become a customer</Link>
              <br />
              <Link className="footer__primary-link">Order online</Link>
              <br />

              <Link className="footer__primary-link">Delivery</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__social">
          <img src={assets.facebookIcon} alt="" />
          <img src={assets.youtubeIcon} alt="" />
          <img src={assets.instagramIcon} alt="" />
          <img src={assets.pinterestIcon} alt="" />
          <img src={assets.linkedinIcon} alt="" />
        </div>
      </div>
      <div className="footer__secondary">
        <div className="container">
          <img src={assets.footerLogo} alt="" />
          <br />
          <Link className="footer__secondary-links">Terms and conditions</Link>
          <Link className="footer__secondary-links">Cookies</Link>
          <Link className="footer__secondary-links">Privacy Statement</Link>
          <Link className="footer__secondary-links">Disclaimer</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

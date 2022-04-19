import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">blog of your memories</a>
              </li>
              <li>
                <a href="#">publish and share</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">posting</a>
              </li>
              <li>
                <a href="#">packages</a>
              </li>
              <li>
                <a href="#">package status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">membership</a>
              </li>
              <li>
                <a href="#">free data</a>
              </li>
              <li>
                <a href="#">friendly society</a>
              </li>
              <li>
                <a href="#">sharing a memory</a>
              </li>
              <li>
                <a href="#">popularity</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div style={{ fontSize: "20px" }} class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <div className="footer-telegram-icon">
                <br></br>
                <p>Get In Touch with Admin:</p>
                <a href="https://t.me/laylacommerce_bot">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/telegram.png"
                    alt="telegramIcon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

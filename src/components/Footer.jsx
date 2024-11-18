import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      {/* First Row */}
      <div style={styles.row}>
        <div style={styles.column}>
          <h3>About Us</h3>
          <p>
            Marble & Tiles Co. is a leading provider of premium marble and
            tiles, offering exceptional quality and design solutions for
            residential and commercial spaces.
          </p>
        </div>
        <div style={styles.column}>
          <h3>Contact Us</h3>
          <ul style={styles.list}>
            <li>Email: anvitiles@gmail.com</li>
            <li>Phone: +91 8853545165</li>
            <li> +91 7065268000</li>
            <li>Address: Baghauch Road, Fazilnagar, Kushinagar-274401</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3>Follow Us</h3>
          <ul style={styles.socialList}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div style={styles.copyRight}>
        <p>© 2024 Marble & Tiles Co. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    marginTop: "0px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  column: {
    flex: "1 1 300px",
    margin: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  socialList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  iconLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    marginBottom: "10px",
  },
  copyRight: {
    textAlign: "center",
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
};

export default Footer;

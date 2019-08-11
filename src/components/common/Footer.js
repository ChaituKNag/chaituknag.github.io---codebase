import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        © {new Date().getFullYear()} -- with
        <span style={{ color: "red" }}>❤</span>
        from Naga Chaitanya Konada.
      </footer>
    </div>
  );
};

export default Footer;

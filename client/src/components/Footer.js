import React from 'react';

const Footer = () => {
  return (
    <footer class="navbar fixed-bottom mt-2 p-4 d-flex flex-column footer" >
      <div className="footer-links">
        <a href="https://github.com/N-Zubko/OpenAI-assistant" className="p-1" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/nadezhda-zubko-developer/" className="p-1" target="_blank">LinkedIn</a>
      </div>
      <div className="copyright">
      © {new Date().getFullYear()} Copyright: Nadia Zubko
      </div>
    </footer>
  );
};

export default Footer;

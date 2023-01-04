import React from 'react';

const Footer = () => {
  return (
    <footer class="mt-4 p-1 d-flex flex-column footer" >
      <div className="footer-links">
        <a href="https://github.com/N-Zubko/OpenAI-assistant" className="p-1" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/nadezhda-zubko-developer/" className="p-1" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="copyright">
      © {new Date().getFullYear()} Copyright: Nadia Zubko
      </div>
    </footer>
  );
};

export default Footer;

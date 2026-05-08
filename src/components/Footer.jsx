import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Андрій</p>

      <div className="socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
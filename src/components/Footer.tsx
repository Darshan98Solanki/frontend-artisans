export default function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} Darshan Solanki.
        <a
          href="https://darshan98solanki.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Contact Me
        </a>
      </p>
    </footer>
  );
}

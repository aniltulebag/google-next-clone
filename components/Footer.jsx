const Footer = ({ author }) => {
  return (
    <footer className="footer">
      <p className="footer-text">
        This website is created for learning purposes.
      </p>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} {author}
      </p>
    </footer>
  );
};

export default Footer;

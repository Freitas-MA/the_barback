import './Footer.css'
const Footer = ({ pageData }) => {
  return (
    <footer id="footer">
      <nav>
        <ul>
          {pageData[0].footer.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

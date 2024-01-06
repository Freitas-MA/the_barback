import React from 'react';
import './Navbar.css';

const Navbar = ({ pageData }) => {
  return (
    <nav id='Navbar'>
      <section className='navcontainer'>
          <div className="logo">
            <img src={pageData[0].navbar[0].logo} alt="Logo" />
            <span>{pageData[0].navbar[0].name}</span>
          </div>
          <ul className="nav-links">
            {pageData[0].navbar.slice(1).map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
      </section>
    </nav>
  );
};

export default Navbar;

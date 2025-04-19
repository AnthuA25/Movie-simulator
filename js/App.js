function NavBarComponent() {
    return (
      <nav className="navbar">
        <h1 className="navbar-title">Movie Star</h1>
        <ul className="navitems">
          <li>
            <a href="index.html">Peliculas</a>
          </li>
          <li>
            <a href="contacto.html">Contactanos</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  function FooterComponent() {
    return (
      <footer>
        <p>Av Flora Tristan s/n, La Molina - Peru</p>
        <p>moviestar@gmail.com</p>
        <p>&copy; 2025 Movie Star. Todos los derechos reservados.</p>
      </footer>
    );
  }
  
  ReactDOM.render(
    <NavBarComponent />,
    document.getElementById("navbarcomponent")
  );
  ReactDOM.render(
    <FooterComponent />,
    document.getElementById("footercomponent")
  );
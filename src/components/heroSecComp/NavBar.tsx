import '../style/navbar.css'

import logo from '../../assets/Blacksof_Assets/logo.png'

function NavBar() {

  return(
    <div className="nav-container">

      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="150" height="24" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Software Services</a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-primary px-4 rounded-1">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );

}

export default NavBar;
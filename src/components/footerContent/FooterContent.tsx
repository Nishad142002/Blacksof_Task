import logo from '../../assets/Blacksof_Assets/logo.png'

function FooterContent() {

  return(
    <div className="footer-content">
       <div className='footer-nav d-flex justify-content-between align-items-center'>
        <div>
          <img src={logo} width="170" height="30" />
        </div>
        <div className='footer-navOption'>
          <nav className="nav ">
            <a className="nav-link text-white" href="#">Product</a>
            <a className="nav-link text-white" href="#">Software Services</a>
            <a className="nav-link text-white" href="#">Follow Us</a>
          </nav>
        </div>
       </div>

       <div className='footer-box d-flex align-items-end'>
        <footer className='footer-item d-flex justify-content-between align-items-center'>
          <a className="nav-link text-white" href="#">Privacy Policy</a>|
          <a className="nav-link text-white" href="#">Terms & Conditions</a>|
          <a className="nav-link text-white" href="#">Cookie Policy</a>
        </footer>
       </div>
    </div>
  );

}

export default FooterContent;
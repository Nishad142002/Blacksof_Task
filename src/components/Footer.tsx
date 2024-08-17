import footerImg from '../assets/Blacksof_Assets/Footer.png'
import FooterContent from './footerContent/FooterContent';

import './style/footer.css'

function Footer() {

  return (
    <div className="footer-container">
      <img src={footerImg} alt="Hero" className="footer-img" />

      <FooterContent />
    </div>
    
  );

}

export default Footer;
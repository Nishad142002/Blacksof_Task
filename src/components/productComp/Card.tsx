import image from '../../assets/Blacksof_Assets/smart_light.jpeg'
import icon from '../../assets/Blacksof_Assets/icon_png.png'

function Card() {

  return(
    <div className="pro-card">
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={image} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p className="card-text fs-6">Products 1/5</p>
              <h5 className="card-title fs-3">Centralized Control & Monitoring System</h5>
              <p className="card-text">Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.</p>
              <a className="icon-link icon-link-hover fs-5" href="#">
                Know more <img src={icon} alt="" />
                <svg className="bi" aria-hidden="true"></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Card;
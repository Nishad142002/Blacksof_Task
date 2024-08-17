import './style/advantage.css'
import icon from '../assets/Blacksof_Assets/icon.png'

function Advantage() {

  return(
   <div className="advantage-container d-flex justify-content-center align-items-center">

      <div className='advantage-box'>

        <div className='advan-head fs-2'>
          <p>The platform assits city managers on multiple fronts</p>
        </div>

        <div className='adv-row'>

          <div className='box-one'>
            <img src={icon} alt="Hero" />
            <p>Saves on power consumption & related costs</p>
          </div>

          <div className='box-two'>
            <img src={icon} alt="Hero" />
            <p>Lowers downtimes</p>
          </div>

        </div>

        <div className='adv-row'>

          <div className='box-two'>
            <img src={icon} alt="Hero" />
            <p>Detects power thefts.</p>
          </div>

          <div className='box-one' id='mid-box'>
            <img src={icon} alt="Hero" />
            <p>Ensures smart monitoring and control of the street light infrastructure.</p>
          </div>

        </div>

        <div className='adv-row'>

          <div className='box-one'>
            <img src={icon} alt="Hero" />
            <p>Ensures real-time actionable analytics on power failures, lamp malfunction, voltage failures, etc.</p>
          </div>

          <div className='box-two'>
            <img src={icon} alt="Hero" />
            <p>Ensures security in the neighborhood</p>
          </div>

        </div>
      </div>
    
   </div>
  );

}

export default Advantage;
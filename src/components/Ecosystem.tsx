import './style/ecosystem.css'

import light from '../assets/Blacksof_Assets/street_light_controler.png'
import gateway from '../assets/Blacksof_Assets/gateway_png.png'
import cloud from '../assets/Blacksof_Assets/cloud_based management.png'
import user from '../assets/Blacksof_Assets/users_png.png'
import evaluation from '../assets/Blacksof_Assets/evaluation_png.png'

function Ecosystem() {

  return(
    <div className="eco-container d-flex justify-content-center align-items-center">
      <div className='eco-box'>
        <div className='eco-content'>
          <div className='eco-head'><p>Ecosystem</p></div>

          <h3 className=''>How does a smart street light ecosystem work?</h3>
        </div>
        <div className='eco-flow'>
          <div className='first-row'>

            <div className='node'>
              <div>
                <img src={light} />
                <img src={light} />
              </div>

              <div className='flow-desc'>
                <p className='node-title'>Street Light Controller</p>
                <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
              </div>
              
            </div>

            <div className='node'>
              <img src={gateway} />
              
              <div className='flow-desc'>
                <p className='node-title'>Gateway</p>
                <p>Employed for interfacing between a Controller and the Lighting Management Software</p>
              </div>
            </div>

            <div className='node'>
              <img src={cloud} />

              <div className='flow-desc'>
                <p className='node-title'>Cloud-based Management System</p>
                <p>Collects information from multiple gateways.</p>
              </div>
            </div>
            
          </div>
          
          <div className='second-row d-flex justify-content-center align-items-center'>

            <div className='node'>
              <img src={user} />

              <div className='flow-desc'>
                <p className='node-title'>Users</p>
                <p>Data from the cloud used to monitor and control street lights by the System Managers.</p>
              </div>
            </div>
            
            <div className='node'>
              <img src={evaluation} />

              <div className='flow-desc'>
                <p className='node-title'>Evaluatioon</p>
                <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>
              </div>
            </div>
            
          </div>

          <hr id='line-one' />
          <hr id='line-two' />
          <hr id='line-three' />
          <div id='box-line'></div>
          
        </div>
      </div>
    </div>
  );

};

export default Ecosystem;


import React from 'react'
import { Link } from 'react-router-dom'
 import img1 from '../images/1.png'
 import img2 from '../images/2.png'
 import img3 from '../images/3.png'
 import img4 from '../images/Footer (email icon).png'
 import img5 from '../images/icons8-shopping-cart-promotion-48.png'
 import img6 from '../images/Logo.png'
 import img7 from '../images/menu-bar.png'


function DefaultLayout(props) {
  return (
    <div>
        <div className='header'>
        <div  className='header-item'>
        <div class="dropdown">
  <span><a>
        <img 
        src={img7}
        />
      </a></span>
  <div class="dropdown-content">
    <li><a href="/"><h5>Homepge</h5></a></li>
    <li><a href="/"><h5>Buy/SEllVouchers</h5></a></li>
    <li><a href="/"><h5>Privacy Policy</h5></a></li>
    <li><a href="/"><h5>Terms & conditions</h5></a></li>

  </div>
</div>
        </div>
      
    <div  className='header-item'>
      <a>
        <img 
        src={img6}
        />
      </a>
    </div>
    <div  className='header-item'>
    <a>
        <img
        src={img5}
        />
      </a>
    </div>
        </div>
        <div className='content'>
            {props.children}
        </div>
        <div className="footer text-center">
      <hr />
           <h1>REACH US</h1>
           
           <div className='footer-images'>
             <div className='footer-image'>
             <a>
              <img 
              src={img1}
              />
          </a>
             </div>
         
             <div className='footer-image'>
             <a>
              <img 
              src={img2}
              />
          </a>
             </div>
             <div className='footer-image'>
             <a>
              <img 
              src={img3}
              />
          </a>
             </div>
             <div className='footer-image'>
             <a>
              <img 
              src={img4}
              />
          </a>
             </div>
          </div>
          <h1 className='mt-3'>USEFUL LINKS</h1>
          <div className='footer-texts'>
             <div className='footer-text'>
             <a>
              <h3>About Us|</h3>
          </a>
             </div>
         
             <div className='footer-text'>
             <a>
             <h3>Contact Us |</h3>
          </a>
             </div>
             <div className='footer-text'>
             <a>
             <h3>Blog Articles |</h3>
          </a>
             </div>
             <div className='footer-text'>
             <a>
             <h3>FAQ</h3>
          </a>
             </div>
          </div>
          <div className='footer-texts'>
             <div className='footer-text'>
             <a>
              <h3>privacy policy |</h3>
          </a>
             </div>
         
             <div className='footer-text'>
             <a>
             <h3>Terms & conditions</h3>
          
          </a>
             </div>
          </div>

         

          
      </div>

    </div>
  )
}

export default DefaultLayout
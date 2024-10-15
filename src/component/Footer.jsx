import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='container-fluid p-3'>
        <div className='row'>
          <div className='col-md-4'>
          
            <h3 className='text-warning fs-3'>
              <FontAwesomeIcon icon={faVideo} className='me-3'/>
              Media Player
            </h3>
          <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aperiam dolores quia saepe eos eum laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id tempora voluptates molestias quidem odio commodi </p>
          </div>
          <div className='col-md-2 d-md-flex justify-content-center '>
           <div>
              <h4>Links</h4>
              <Link to={'/'}><p className='mt-4'>Landing Page</p></Link>
              <Link to={'/home'}><p>Home</p></Link>
              <Link to={'/watchHistory'}><p>Watch History </p></Link>
           </div>
          </div>
          <div className='col-md-2 d-md-flex justify-content-center'>
            <div>
              <h4 >Guides</h4>
              <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>bootswatch</p>
            </div>
          </div>
          <div className='col-md-4 px-md-5'>
            <h4>Contact Us</h4>
           <div className='d-flex mt-4'>
              <input type="text" placeholder='Email ID' className='form-control '/>
              <button className='ms-3 btn btn-warning text-light'>subscribe</button>
           </div>
           <div className='d-flex justify-content-between mt-4'>
           <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
           <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
           <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
           <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
           <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
           </div>
          </div>
  
        </div>
      </div>
    </>
  )
}

export default Footer



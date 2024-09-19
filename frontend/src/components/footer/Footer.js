import React from 'react'
// import { BsFacebook } from "react-icons/bs"
// import { RiInstagramFill } from "react-icons/ri"
import "./footer.css";

export const Footer = () => {
    return (
      <>
        <footer className='footer'>
          <div className='container flex'>
            <p>Qureshi || All rights Reserved 🤝</p>
            {/* <div className='social'>
              <BsFacebook className='icon' onClick={() => 
              window.location.href = 'https://www.facebook.com/lebyy'
              } />
              <RiInstagramFill className='icon' />
            </div> */}
          </div>
        </footer>
      </>
    )
  }
  export default Footer;
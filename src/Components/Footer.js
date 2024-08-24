import React,{useEffect}from 'react';
import "./Header.css";
import { logo1, sendIcon, facebookicon, instagram, linkedin } from "../Components/assets";
import { Link,useLocation} from 'react-router-dom';
function Footer() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <footer >
        <div className="footer">
          <div className='footerSection'>
            <h3 className='linkHead'>About Us</h3>
            <p className='aboutusTxt'>Coderiser Technologies is a forward-thinking technology company dedicated to transforming ideas into impactful solutions. We specialize in the development of innovative software applications that revolutionize industries and elevate user experiences.</p>
            <div className="textInput">
              <input
                type="text"
                placeholder="Type your message..."
              // value={message}
              // onChange={handleMessageChange}
              />
              <button
              //   onClick={handleSendClick}
              >
                <i aria-hidden="true">
                  <img src={sendIcon} alt="icon" className='sendIcon' />

                </i>
              </button>

            </div>
          </div>
          <div className='footerSection'>
            <h3 className='linkHead'>Link</h3>
            {/* <ul className='footerList'>
              <li className='footerListTxt'>Home</li>
              <li className='footerListTxt'>About</li>
              <li className='footerListTxt'>Services</li>
              <li className='footerListTxt'>Gallery</li>
              <li className='footerListTxt'>Contact</li>
            </ul> */}

            <ul className='footerList'>
              <li className='footerListTxt'>
                <Link className="footerLink" to="/">Home</Link>
              </li>
              <li className='footerListTxt'>
                <Link className="footerLink" to="/about">About</Link>
              </li>
              <li className='footerListTxt'>
                <Link className="footerLink" to="/services">Services</Link>
              </li>
              <li className='footerListTxt'>
                <Link className="footerLink" to="/gallery">Gallery</Link>
              </li>
              <li className='footerListTxt'>
                <Link className="footerLink" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='linkHead'>Services</h3>
            <ul className='footerList'>
              <li className='footerListTxt'>Mobile Development</li>
              <li className='footerListTxt'>Web Development</li>
              <li className='footerListTxt'>Wordpress Development</li>
              <li className='footerListTxt'>Search Engine Optimization</li>
              <li className='footerListTxt'>QA & Testing </li>
            </ul>
          </div>
        </div>
        <div className='footerContainer'>
          <div className='Container'>
            <img src={logo1} alt="logo" className='footerLogo' />
            <h1 className='footerheadTxt'><font className="codeTxt">Code</font><font className="bottomTxt">riser</font></h1>
          </div>
          <div>
            <h4>Address:-<font className="codeTxt"> Head Office</font><p className='emailFooter' style={{marginTop:5}}>Atul,Near Radhika Gargen, meerpur, Pokhrayan, Kanpur, 209112</p><font className="codeTxt" > Branch Office:</font><p className='emailFooter' style={{marginTop:5}} >75, malviya nagar, Vijay nagar, Indore, 452010</p></h4>
            <h4 style={{marginTop:20}}>Email:-<p className='emailFooter' style={{marginTop:5}}>info@coderisertech.com</p></h4>
          </div>
          <div className='iconContainer'>
            <h4>FOLLOW:</h4>
            {/* <div className='icondiv'>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src={facebookicon} alt="Facebook logo" className='icon' />
              </a>
            </div>
            <div className='icondiv1'>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="logo" className='icon' />
              </a>
            </div> */}
            <div className='icondiv2'>
              <a href="https://www.linkedin.com/company/coderiser-technologies/mycompany/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="logo" className='icon' />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="coderiser-container">
          <p>&copy; {new Date().getFullYear()} Coderiser. All rights reserved.</p>
          <nav>
                    <ul className="coderiser-footer-nav">
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>
                </nav>
        </div> */}

      </footer>

    </>
  );
}

export default Footer;

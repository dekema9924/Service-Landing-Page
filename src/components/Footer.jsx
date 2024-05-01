import x from "../assets/images/x.png";
import linkdln from "../assets/images/lnkdln.png";
import insta from "../assets/images/insta.png";
import fb from "../assets/images/fb.png";
import world from "../assets/images/white-globe.png";
import arrow from  "../assets/images/arrow-down.png"






const Footer = ()=>{
    return(
        <footer>
            <div className="top-footer">
                <h1>Work easy. </h1>
                <h1>Grow further with HireGo</h1>
                <button className="cardBtn">
                        Request a demo
                        <img  src={arrow} alt="" />
                </button>
            </div>
            <hr />
            <div className="bottom-footer">
                <div className="socials">
                    <h1>HireGo</h1>
                    <ul>
                        <li><img src={x} alt="x-logo" /></li>
                        <li><img src={linkdln} alt="lkndln logo" /></li>
                        <li><img src={fb} alt="facebook-logo" /></li>
                        <li><img src={insta} alt="instagram-logo" /></li>
                    </ul>
                 
                </div>
                <div className="section">
                    <p>How it works</p>
                    <ul>
                        <li>Hire Employees</li>
                        <li>Hire Contractors</li>
                        <li>Run Global Payroll</li>
                        <li>App Store</li>
                        <li>Open API</li>
                    </ul>
                </div>
                <div className="section">
                    <p>Solutions</p>
                    <li>Compliance</li>
                    <li>Payments</li>
                    <li>For Finance Teams</li>
                    <li>For Legal Teams</li>
                    <li>For Hiring Managers</li>
                    <li>Startup</li>
                    <li>Enterprise</li>
                </div>
                <div className="section">
                    <p>Resources</p>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Support hub</li>
                    <li>Global Hiring Guide</li>
                    <li>Partner Program</li>
                    <li>Affilates</li>
                    <li>Case Studies</li>
                    <li>Careers</li>
                    <li>Glossry</li>
                    <li>Peers</li>
                    <li>Service Status</li>
                    <li>Worker Community</li>
                </div>
            </div>
            <div className="globe">
                 <img src={world} alt="" />
                 <p>English</p>
            </div>
            <hr className="line-position"/>
            <div className="copyrights">
                <div className="figma">
                  <p>@copyright figma from <a href="https://www.figma.com/@ninoradesign">@ninoradesign</a></p>
                </div>
                <div className="ul_links">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Whistle blower policy</li>
                        <li>Cookie Policy</li>
                        <li>Cookie Setting</li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
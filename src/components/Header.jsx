import logo from "../assets/images/HireGo.png"
import arrow from  "../assets/images/arrow-down.png"
import world from  "../assets/images/world.png"

const Header = () =>{
    return(
        <header>
            <nav className="left-nav">
                <img src={logo} alt="hire-go-logo"/>
                <ul>
                    <li>
                        <p>Products</p>
                       <img src={arrow} alt="down-arrow" />
                    </li>
                    <li>
                        <p>Solutions</p>
                        <img src={arrow} alt="down-arrow" />
                    </li>
                    <li>
                        <p>Why HireGo</p>
                        <img src={arrow} alt="down-arrow" /> 
                    </li>
                    <li>
                        <p>Pricing</p>
                    </li>
                    <li>
                       <p>Reasources</p>
                       <img src={arrow} alt="down-arrow" />
                    </li>
                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li>
                        <img src={world} alt="" />
                        <p>English</p>
                        <img src={arrow} alt="" />

                    </li>
                    <li>Log in</li>
                    <li>Request a demo</li>
                </ul>
            </nav>
            <div className="line">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;
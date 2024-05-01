import img1 from "../assets/images/logo-img/Image [css-ducv57]-1.png"
import img2 from "../assets/images/logo-img/Image [css-ducv57]-2.png"
import img3 from "../assets/images/logo-img/Image [css-ducv57]-3.png"
import img4 from "../assets/images/logo-img/Image [css-ducv57]-4.png"
import img5 from "../assets/images/logo-img/Image [css-ducv57]-5.png"
import img6 from "../assets/images/logo-img/Image [css-ducv57]-6.png"
import img7 from "../assets/images/logo-img/Image [css-ducv57]-7.png"
import img8 from "../assets/images/logo-img/Image [css-ducv57]-8.png"
import img9 from "../assets/images/logo-img/Image [css-ducv57]-9.png"
import img10 from "../assets/images/logo-img/Image [css-ducv57]-10.png"
import img11 from "../assets/images/logo-img/Image [css-ducv57]-11.png"
import img12 from "../assets/images/logo-img/Image [css-ducv57]-12.png"








const Logo = ()=>{
    return(
       <div className="logo-component">
            <div className="title">
                <h1>Trusted by <span>25,000+</span> companies from startups to enterprise</h1>
            </div>
            <div className="company-logos">
                <ul>
                    <li><img src={img1} alt="" /></li>
                    <li><img src={img2} alt="" /></li>
                    <li><img src={img3} alt="" /></li>
                    <li><img src={img4} alt="" /></li>
                    <li><img src={img5} alt="" /></li>
                    <li><img src={img6} alt="" /></li>
                    <li><img src={img7} alt="" /></li>
                    <li><img src={img8} alt="" /></li>
                    <li><img src={img9} alt="" /></li>
                    <li><img src={img10} alt="" /></li>
                    <li><img src={img11} alt="" /></li>
                    <li><img src={img12} alt="" /></li>
                </ul>
            </div>

       </div>

    )
}

export default Logo;
import check from '../assets/images/Check_ring.png'
import arrow from '../assets/images/arrow-down.png'
import hero_img from '../assets/images/hero1.png'
import arrow_right from '../assets/images/right-arrow.png'


const Hero = () =>{
    return(
       <div className="hero-component">
            <section>
                <h1>HireGo is your all-in-one Global People Platform</h1>
                <div className="small-text">
                    <div className="text">
                        <img src={check} alt="check-ring"/>
                        <p>G3's Leader in global employement platforms</p>
                    </div>
                    <div className="text">
                        <img src={check} alt="check-ring"/>
                        <p>90% customer satisfaction rate</p>
                    </div>
                </div>
                <div className="btn">
                    <button>
                        Request a demo
                        <img  src={arrow_right} alt="" />
                    </button>
                </div>
            </section>
            <div className="hero-img">
                <img src={hero_img} alt="" />
                <div className="comments">
                    <div className="left-comment-item before">
                        <p>Immigration Support</p>
                    </div>
                    <div className="left-comment-item before">
                        <p>Pay anyone anywhere in minutes</p>
                    </div>
                    <div className="right-comment-item after">
                        <p>Expand your team and hire globally</p>
                    </div>
                    <div className="right-comment-item comment after">
                        <p>Set yoyr team up</p>
                    </div>
                </div>
            </div>
           
       </div>
    )
}

export default Hero;
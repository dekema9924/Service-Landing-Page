import right_arrow from "../assets/images/arrow-right.png";
import img1 from "../assets/images/hero3.png";
import img2 from "../assets/images/hero4.png";




const Business = ()=>{
    return(
        <div className="business-component">
                <h1>Take your business to the next level</h1>
                <div className="business-section-top">
                    <div className="section-top-text">
                        <h3>Culture and performance It's up and up</h3>
                        <p>Develop feedback loops, set KPIs and design custom performance reviews. Quickly build a positive performance culture for your business — where everyone is aiming for the same goals.</p>
                        <button className="cardBtn">
                            Performance Management
                            <img src={right_arrow} alt="right-arrow" />
                        </button>
                    </div>
                    <div className="top-section-img">
                        <img src={img1} alt="hero3-img" />
                    </div>
                </div>
            <div className="business-section-bottom">
                <div className="bottom-section-img">
                    <img src={img2} alt="hero4-img" />
                </div>
                <div className="section-bottom-text">
                    <h3>It's payroll software just faster.</h3>
                    <p>Save your time, pay your people with automated payroll. Enjoy the benefits of Real Time Information (RTI) and take care of workforce planning - all in one simple place.</p>
                    <button className="cardBtn">
                        Payroll Features
                        <img src={right_arrow} alt="right-arrow" />
                    </button>
                </div>

            </div>
        </div>

    )

}

export default Business;
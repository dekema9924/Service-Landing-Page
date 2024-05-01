import hero2 from "../assets/images/hero2.png"
import right_arrow from "../assets/images/arrow-right.png"

const Service = ()=>{
    return(
        <div className="service-component">
            <div className="service-box">
                <h1>You can do it all. With HireGo.</h1>
               <div className="cards">
                  <div className="international-card">
                        <p className="cardHeading">Hire international talent</p>
                        <p className="cardText">Instead of setting up your own entities, experience the speed of HireGO’s automated global hiring. Create compliant employment agreements and set up payroll and benefits—in a matter of clicks.</p>
                        <button className="cardBtn">
                            Hire International talent
                            <img src={right_arrow} alt="right-arrow" />
                        </button>
                        <img src={hero2} alt="hero2-img" />
                    </div>
                    <div className="contractors-card">
                        <p className="cardHeading">Hire Contractors</p>
                        <p className="cardText">Generate, edit, and sign compliant contracts in minutes and access management tools to streamline paperwork, onboarding, and payments.</p>
                        <button className="cardBtn">
                            Hire contractors
                            <img src={right_arrow} alt="right-arrow" />
                        </button>
                    </div>
                    <div className="convert-card">
                        <p className="cardHeading">Convert contractors to employees</p>
                        <p className="cardText">Assess global worker misclassification risks and compliantly convert contractors to full-timers, all under one platform.</p>
                      <button className="cardBtn">
                            Convert contractors
                            <img src={right_arrow} alt="right-arrow" />
                      </button>
                    </div>
               </div>
            </div>
            <hr />
            <div className="stats">
                <div className="team">
                    <span>5,000+ </span>
                    <p>Loved by 5,000+ Team Members</p>
                </div>
                <div className="team">
                    <span>25,000+ </span>
                    <p>Trusted by 25,000+ customers</p>
                </div>
                <div className="team">
                    <span>48hrs </span>
                    <p>Onboard talent in as little as 48 hours</p>
                </div>
            </div>
        </div>
    )
}

export default Service;
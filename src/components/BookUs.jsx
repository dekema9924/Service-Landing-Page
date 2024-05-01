import hero6 from "../assets/images/hero6.png"
import right_arrow from "../assets/images/arrow-right.png"


const BookUs = ()=>{
    return(
        <div className="book-us-component">
            <h1>Get Started with HireGo in three easy steps.</h1>
            <div className="bookus-cards">
                <div className="bookus-img-card">
                    <img src={hero6} alt="hero6" />
                </div>
                <div className="bookus-card-text">
                    <div className="number-card">
                        <div className="number">
                            <p>1</p>
                        </div>
                        <div className="number-text">
                            <strong>Book a call</strong>
                            <p>Book a call with our global workforce consultants. We willl set you up with a free account ready to suit your teams needs.</p>
                        </div>
                    </div>
                    <div className="number-card">
                        <div className="number">
                            <p>2</p>
                        </div>
                        <div className="number-text">
                            <strong>Add your people</strong>
                            <p>From new hires to your existing workforce, onboard effortlessly with our self-serve platform.</p>
                        </div>
                    </div>
                    <div className="number-card">
                        <div className="number">
                            <p>3</p>
                        </div>
                        <div className="number-text">
                            <strong>Dedicated onboarding</strong>
                            <p className="text">From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.</p>
                            <button className="cardBtn">
                                 Start Now
                                <img src={right_arrow} alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default BookUs;
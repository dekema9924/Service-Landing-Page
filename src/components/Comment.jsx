import hero_5 from "../assets/images/hero5.png"
import css from "../assets/images/css.png"
import right_arrow from "../assets/images/arrow-right.png";



export default function Comment(){
    return(
        <div className="comment-component">
            <h1>We help teams  grow faster acrfoss borders</h1>
                <div className="comment-card">
                    <div className="comment-text">
                       <img src={css} className="css-style" alt="cssStyled-img" />
                       <h2>"Saving time and simplifying the process and saving money. It was triple trifecta."</h2>
                       <span>Ally Fekaiki, CEO.Socho, New York</span>
                       <button className="cardBtn">
                            Learn more
                            <img src={right_arrow} alt="right-arrow" />
                        </button>

                    </div>

                    <div className="img-card">
                        <img src={hero_5} alt="" />
                     </div>

                </div>
        </div>
    )

}
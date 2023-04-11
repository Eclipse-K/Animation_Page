import "./Career.css";
import Box from "../image/box_icon.png";
import Insta from "../image/instagram.png";
import Twitter from "../image/twitter.png";
import Face from "../image/facebook.png";

function Career() {
  return (
    <div className="container">
      <div className="card card0">
        <div className="border">
          <h2>흰둥이</h2>
          <div className="icons">
            <button href="#" aria-hidden="true">
              <img src={Box} alt={Box} />
            </button>
            <button
              className="fa fa-instagram"
              href="https://www.instagram.com"
              aria-hidden="true"
            >
              <img src={Insta} alt={Insta} />
            </button>
            <button
              className="fa fa-twitter"
              href="https://www.twitter.com"
              aria-hidden="true"
            >
              <img src={Twitter} alt={Twitter} />
            </button>
            <button
              className="fa fa-facebook"
              href="https://www.facebook.com"
              aria-hidden="true"
            >
              <img src={Face} alt={Face} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;

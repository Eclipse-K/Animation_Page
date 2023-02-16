import "./style.css";

function Background() {
  return (
    <div>
      <div className="container">
        <div className="block">
          <div className="front">
            <span>?</span>
          </div>
          <div className="back">
            <span></span>
          </div>
          <div className="right">
            <span>?</span>
          </div>
          <div className="left">
            <span>?</span>
          </div>
          <div className="top">
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
          </div>
        </div>

        <div className="coin"></div>
        <div className="oneup">
          <div className="cap">
            <div className="spot"></div>
          </div>
          <div className="face">
            <div className="eye"></div>
            <div className="eye right"></div>
          </div>
        </div>
      </div>

      <audio
        id="coin"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/coin.wav"
      ></audio>
      <audio
        id="oneup"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/1-up.wav"
      ></audio>
    </div>
  );
}

export default Background;

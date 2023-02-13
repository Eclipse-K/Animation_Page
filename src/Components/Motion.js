import "./Motion.css";

function Motion() {
  return (
    <div>
      <div class="container">
        <div class="block">
          <div class="front">
            <span>?</span>
          </div>
          <div class="back">
            <span></span>
          </div>
          <div class="right">
            <span>?</span>
          </div>
          <div class="left">
            <span>?</span>
          </div>
          <div class="top">
            <span></span>
          </div>
          <div class="bottom">
            <span></span>
          </div>
        </div>
        <div class="coin"></div>
        <div class="oneup">
          <div class="cap">
            <div class="spot"></div>
          </div>
          <div class="face">
            <div class="eye"></div>
            <div class="eye right"></div>
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

      <script src="./MotionScript.js"></script>
    </div>
  );
}

export default Motion;

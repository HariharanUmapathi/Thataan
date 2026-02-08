import LeftPinky from "./assets/images/fingers/left_pinky.png";
import LeftRing from "./assets/images/fingers/left_ring.png";
import LeftMiddle from "./assets/images/fingers/left_middle.png";
import LeftIndex from "./assets/images/fingers/left_index.png";
import LeftThumb from "./assets/images/fingers/left_thumb.png";

import RightPinky from "./assets/images/fingers/right_pinky.png";
import RightRing from "./assets/images/fingers/right_ring.png";
import RightMiddle from "./assets/images/fingers/right_middle.png";
import RightIndex from "./assets/images/fingers/right_index.png";
import RightThumb from "./assets/images/fingers/right_thumb.png";

function FingerPositioning(nextCharacter) {
  let ShiftImage = Math.round(Math.random(), 2) == 0 ? LeftPinky : RightPinky;
  let letterImageMap = [
    LeftPinky,
    LeftRing,
    LeftMiddle,
    LeftIndex,
    LeftThumb,
    RightPinky,
    RightRing,
    RightMiddle,
    RightIndex,
    RightThumb,
  ];
  let LetterImage = letterImageMap[Math.round(Math.random() * 10, 2)];
  return (
    <>
      <div
        id="fingering-container"
        style={{ flexBasis: "1", minWidth: "100px" }}
      >
        <span id="finger-position"></span>
        <img src={ShiftImage} style={{ width: "200px", minWidth: "200px" }} />
        <img
          src={LetterImage}
          style={{
            width: "200px",
            minWidth: "200px",
            position: "absolute",
            left: "18px",
          }}
        />
      </div>
    </>
  );
}

export default FingerPositioning;
export { FingerPositioning };

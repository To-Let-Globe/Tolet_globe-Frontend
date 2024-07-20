import { Container } from "react-bootstrap";
// ----------------All the imported css files
import "../../style/background/background-1.css";
import "../../style/background/background-3.css";
import "../../style/background/background-4.css";

// -----------Birds IMG------------
import bird1 from "../../assets/image/birds/bird1.svg";
import bird2 from "../../assets/image/birds/bird2.svg";

// -----------Cloud IMG------------
import cloud1 from "../../assets/image/cloud/cloud1.svg";
import cloud2 from "../../assets/image/cloud/cloud2.svg";
import cloud3 from "../../assets/image/cloud/cloud3.svg";

//------------Hand IMG--------------
import hand from "../../assets/image/hand/hand.svg";

//  ------------Home IMG-------------
import chimney from "../../assets/image/home/chimney.svg";
import wall1 from "../../assets/image/home/wall-1.svg";
import wall2 from "../../assets/image/home/wall-2.svg";
import roof1 from "../../assets/image/home/roof.svg";
import roof3 from "../../assets/image/home/backroof.svg";
import roof2 from "../../assets/image/home/roof-top.svg";
import roof4 from "../../assets/image/home/rooftop1.svg";
import gate from "../../assets/image/home/gate.svg";

// --------------Window IMG--------------
import frontw1 from "../../assets/image/home/window1.svg";
import frontw2 from "../../assets/image/home/window2.svg";
import frontw3 from "../../assets/image/home/window3.svg";
import frontw4 from "../../assets/image/home/window4.svg";
import frontw5 from "../../assets/image/home/window5.svg";
import frontw6 from "../../assets/image/home/window6.svg";

// ---------- Plant Img----------
import plant1 from "../../assets/image/plant/plant1.svg";
import plant2 from "../../assets/image/plant/plant2.svg";

//--------------Sun IMG-------------
import sun from "../../assets/image/sun/sun.svg";

export const TopImages = () => {
  return (
    <Container>
      {/* Top Component */}
      <div className="image-container-1">
        <div className="top-img">
          {/* -----------------Bird Images----------------- */}
          <img src={bird1} alt="Home Img" className="Tbird-1" />
          <img src={bird2} alt="Home Img" className="Tbird-2" />

          {/* -----------Cloud Images---------- */}
          <img src={cloud1} alt="Cloud Img " className="Tcloud-1" />
          <img src={cloud2} alt="Cloud Img" className="Tcloud-2" />
          <img src={cloud3} alt="Cloud Img" className="Tcloud-3" />

          {/*----------Sun Image -------------- */}
          <img src={sun} alt="Home Img" className="Tsun-circle" />

          {/* -----------Plant Imaages----------- */}
          <img src={plant1} alt="Plant Img" className="Tplant-1" />
          <img src={plant2} alt="Plant Img" className="Tplant-2" />

          {/* ----------Home Images------------ */}
          <img src={roof3} alt="Roof Img" className="Troof-3" />
          <img src={wall1} alt="Wall Img" className="Twall-1" />
          <img src={wall2} alt="Wall Img" className="Twall-2" />
          <img src={gate} alt="Gate Img" className="Tgate" />
          {/*------------- Window Images--------- */}
          <img src={frontw1} alt="Windiw Img" className="Twindow-1" />
          <img src={frontw2} alt="Windiw Img" className="Twindow-2" />
          <img src={frontw3} alt="Windiw Img" className="Twindow-3" />
          <img src={frontw4} alt="Windiw Img" className="Twindow-4" />
          <img src={frontw5} alt="Windiw Img" className="Twindow-5" />
          <img src={frontw6} alt="Windiw Img" className="Twindow-6" />
          <img src={roof1} alt="Roof Img" className="Troof-1" />
          <img src={roof4} alt="Roof Img" className="Troof-4" />
          <img src={roof2} alt="Roof Img" className="Troof-2" />
          <img src={chimney} alt="Chimney Img" className="Tchimney" />
          {/* -----------Hand Images----------- */}
          <img src={hand} alt="Hand Img" className="Thand" />
        </div>
      </div>
    </Container>
  );
};

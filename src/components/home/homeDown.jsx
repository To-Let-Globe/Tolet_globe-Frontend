import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, InputGroup, Row, Col } from "react-bootstrap";
import { BottomImages } from "./Bbackground";
import "../../style/home/home-1.css";
import "../../style/home/home-4.css";
import "animate.css";
// import '../../style/home/home-2.css';
// import '../../style/home/home-3.css';

export const HomeDown = () => {
  return (
    <Container fluid className="scrollable-content bottom-home">
      <Row className="justify-content-center align-items-center h-100 mb-5 mt-4 d-flex">
        <Col xs={10} md={8} lg={6}>
          {/*  Heading */}
          <h1 className="tagline2">Welcome to To-Let Globe</h1>
          {/* Sub Headings */}
          <h6 className="headline2 text-center">
            NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
          </h6>
          <div
            className="input-bar mb-5 mt-4 d-flex justify-content-center align-items-center"
            id="inputGroup"
          >
            {/* Search bar for searching PG, Flats and Houses  */}
            <InputGroup className="w-85">
              <Form.Control
                placeholder="Search PG, Flats and Houses"
                aria-label="Search PG, Flats and Houses"
              />
              {/* Search Button */}
              <Button className="btn" onClick={() => console.log("connect")}>
                Search
              </Button>
            </InputGroup>
          </div>
          {/* BottomImages component has all the Bottom side Images */}
          <BottomImages />
        </Col>
      </Row>
    </Container>
  );
};

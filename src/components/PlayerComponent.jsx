import { useState } from 'react';
import { Player } from 'video-react';
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import '../video-react.css';

function PlayerComponent() {
  const [urlLink, setUrlLink] = useState("/video/singapore.mp4");
  const [urlLinkTemp, setUrlLinkTemp] = useState("")

  function onChange(e) {
    const { value } = e.target;
    setUrlLinkTemp(value)
  }

  const handleUpdatedUrl = () => {
    setUrlLink(urlLinkTemp)
  };

  const handleOriginalUrl = () => {
    setUrlLink("/video/singapore.mp4")
  };

  return (
    <>
      <Container>
        <Row className="mt-2 justify-content-md-center text-center">
          <Col md={8}>
            <h3><strong>3 Degress App - Video Rendering</strong></h3>
            {urlLink && urlLink !== "/video/singapore.mp4" ?
              <h5>{ urlLink }</h5>
            :
              !urlLink ? <Alert variant="info">Url Link is empty</Alert> : ""
            }
          </Col>
        </Row>
        <Row className="mt-2 justify-content-md-center">
          <Col md={8}>
            <div>
              <Player
                playsInline
                src={ urlLink }
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-md-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>URL Link</Form.Label>
                <Form.Control
                  name="url"
                  type="text"
                  placeholder="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  onChange={onChange}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleUpdatedUrl}>
                Update Url
              </Button>
              {" "}
              <Button variant="secondary" type="button" onClick={handleOriginalUrl}>
                Original Url
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlayerComponent;

import { Button, Col, Container, Row } from 'react-bootstrap';

const Display = (props) => {
    return (
        <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">Hi, I'M <b><span className="nameset text-dark">M RIZKI</span></b></h1>
                <h1 className="display-3 mt-3"><b>{props.job}</b></h1>
                <p>{props.code}</p>
                    <Button variant="dark mt-3">
                      Hire me
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
      </div>
    )
}

export default Display;
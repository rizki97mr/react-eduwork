import { Button, Col, Container, Row } from 'react-bootstrap';

const Display = () => {
    return (
        <div className="jumbotron">
          <Container className='text-white'>
              <Row>
                <Col id="#display">
                <div className="banner text-center">
                <h1 className="display-1">Raih Profesi idamannmu, kami bantu sampai diterima kerja</h1>
                 <p className="lead mt-3">Tanpa biaya pendaftaran !</p>
                    <Button variant="dark">
                      Download
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
      </div>
    )
}

export default Display;
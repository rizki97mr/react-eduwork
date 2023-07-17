import { Button, Card, Col } from "react-bootstrap"

const ContentNews = (props) => {
    
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.urlToImage} />
                        <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <span className="card-subtitle mb-2 mt-3 text-muted" >{props.publishedAt} {props.author}</span>
                        <Card.Text>{props.description}</Card.Text>
                        <Button variant="primary" href={props.url}>Read more</Button>
                    </Card.Body>
            </Card>
        </Col>
    )
}

export default ContentNews;
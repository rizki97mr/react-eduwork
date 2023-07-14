import React from "react";
import { Button, Card, Col } from "react-bootstrap";
   
class CardNews extends React.Component {
    render () {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.urlToImage} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <span className="card-subtitle mb-2 mt-3 text-muted" >{this.props.publishedAt} {this.props.author}</span>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="primary" href={this.props.url}>Read more</Button>
                    </Card.Body>
                    </Card>
            </Col>
        )
    }
}

export default CardNews;
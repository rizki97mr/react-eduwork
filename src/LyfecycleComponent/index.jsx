import React from "react";
import NavbarNews from "./Component/NavbarNews";
import CardNews from "./Component/CardNews";
import axios from "axios";
import { Form, InputGroup, Row } from "react-bootstrap";

export default class LyfecycleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onEnter=this.onEnter.bind(this)
    }
    state = {
        articles: [
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Teresa Rivas, Jack Denton",
            "title": "Pepsi Stock Jumps After Earnings Beat and Guidance Boost - Barron's",
            "description": "The beverage and snack maker delivers another beat-and-raise quarter, helping Pepsi stock surge. The outlook is great.",
            "url": "https://www.barrons.com/articles/pepsico-earnings-stock-price-ae66817a",
            "urlToImage": "https://images.barrons.com/im-815258/social",
            "publishedAt": "2023-07-13T10:23:00Z",
            "content": null
        }],
    }
    

    getData(keyword='') { 
        axios.get(`https://newsapi.org/v2/top-headlines?apiKey=d0b913f93b5640f591eabce944043908&country=us&q=${keyword}`)
        .then(response => {
            this.setState ({
                articles: response.data.articles
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    onEnter (e) {
        e.preventDefault()
        this.getData(e.target[0].value)
        console.log(e)
    }

    render() {
        return (
            <div>
                <NavbarNews />
                <div className="container-fluid"> 
                <Form onSubmit={this.onEnter}>
                    <InputGroup className="mb-3 mt-4">
                        <Form.Control
                        placeholder="Search News"
                        />
                        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                    </InputGroup>
                </Form>              
             </div>
                <Row> 
                {this.state.articles.map((article, index) => { 
                   return <CardNews key={index} {...article}/> 
                } 
            )}
                </Row>
                
            </div>
        )
    }
}
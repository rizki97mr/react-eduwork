import { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Hook/Components/NavigaationBar';
import { Form, InputGroup, Row } from 'react-bootstrap';
import ContentNews from './Hook/Components/ContentNews';
import axios from 'axios';



function App() {

  const [articles, setArticles] = useState()

    useEffect(() => {
        retrieveArticles()
    }, [])

    const retrieveArticles = async () => {
        try {
            const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=d0b913f93b5640f591eabce944043908&country=us&q=`)
            // console.log(response.data.articles, '<-- Response  Article')
            setArticles(data.articles)
        } catch (error) {
            console.log(error, '<-- error Retrieve article')
        }
    }

  return (
    <div className="myBG">
      <NavigationBar />
        <div className="container-fluid"> 
                      <Form>
                          <InputGroup className="mb-3 mt-4">
                              <Form.Control
                              placeholder="Search News"
                              />
                              <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                          </InputGroup>
                      </Form>                 
        <Row>       
              {articles && articles.map((article, index) => { 
              return <ContentNews key={index} {...article}/> 
              } 
              )}
        </Row>
      </div>
    </div>
  );
}

export default App;
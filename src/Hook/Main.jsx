import { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import NavigationBar from './Components/NavigaationBar';
import ContentNews from './Components/ContentNews';



function Hook() {

  const [articles, setArticles] = useState()
  const [search, setSearch] = useState()
  const [dataSearch, setDataSearch] = useState()

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

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
      try {
        e.preventDefault()

        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=d0b913f93b5640f591eabce944043908&country=us&q=${search}`)
        // console.log(data.articles, 'response handle submit')
        setDataSearch(data.articles)
      } catch (error) {
        console.log(error, 'error handle submit')
      }
    }

  return (
    <div className="myBG">
      <NavigationBar />
        <div className="container-fluid"> 
                      <Form onSubmit={handleSubmit}>
                          <InputGroup onChange={handleChange} className="mb-3 mt-4">
                              <Form.Control
                              placeholder="Search News"
                              />
                              <Button type="submit">Search</Button>
                          </InputGroup>
                      </Form>                 
        <Row>   
             {dataSearch && dataSearch.map((article, index) => { 
              return <ContentNews key={index} {...article}/> 
              } 
              )}    
              {articles && articles.map((article, index) => { 
              return <ContentNews key={index} {...article}/> 
              } 
              )}
        </Row>
      </div>
    </div>
  );
}

export default Hook;
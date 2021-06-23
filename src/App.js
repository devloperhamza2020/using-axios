import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ba26766a74a8448995a2be7e33f20d6b'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [])

  //This is Axios...eta amdr fetch er kajk choto kore dey.
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ba26766a74a8448995a2be7e33f20d6b'
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])

  return (
    <div className="container">
      <h1>Headlines: {articles.length} </h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;

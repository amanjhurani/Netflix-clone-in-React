import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">


      <Nav />
      <Banner />


      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

    </div>
  )
}

export default App;

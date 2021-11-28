
import './App.css';
import Row from './Row';
import requests from './requests';

import Banner from './Banner';

function App() {
  return (
    <div className ="App">
      <Banner/>
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fettchRomanceMovies}  />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;

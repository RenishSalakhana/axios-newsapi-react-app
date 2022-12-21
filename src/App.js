import React, { useState } from "react";
import axios from "axios";
function App() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=e7775d1758ab4e158998744c76d68ee4"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };
  
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a  href={value.url} className="btn btn-primary" >
                      Read More
                    </a>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #react.js
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Renish
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #topNews
                    </span>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
        <a className="btn btn-primary"  onClick={fetchNews}>
          Load More
        </a>
      </div>
      
    </>
  );
}

export default App;

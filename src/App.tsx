import React from "react";
import "./styles/global.scss";

import { useMainController } from "./controllers/mainController";

function App() {
  const { news, selectedArticle, fn } = useMainController();
  console.log("news", news);

  return (
    <div className="mainWrapper">
      <header className="App-header">
        <h1>Great News</h1>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="newsSummary" data-testid="newsSummary">
                {news &&
                  news.map((article) => {
                    return <div onClick={() => fn.selectArticle(`${article.id}`)}>{article.title}</div>;
                  })}
              </div>
            </div>
            <div className="col">
              <h1>Hello {selectedArticle?.title}</h1>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

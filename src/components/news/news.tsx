import { useMainController } from "./newsController";

function News() {
  const { news, selectedArticle, fn } = useMainController();
  console.log("news", news);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="newsSummary" data-testid="newsSummary">
            {news &&
              news.map((article) => {
                return (
                  <div className="articleListContainer" onClick={() => fn.selectArticle(`${article.id}`)} key={article.id}>
                    <div className="articleThumbWrapper">
                      <img className="articleThumb" src={article.urlToImage} alt="article thumbnail" />
                    </div>
                    <div className="articleDetails">
                      <div className="articleTitle">{article.title}</div>
                      <div className="metaDataContainer">
                        <div className="date"></div>
                        <div className="author"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col">
          <div className="newsFullArticle">
            <div className="fullArticleContainer">
              <div className="fullArticleThumbWrapper">
                <img className="fullArticleThumb" src={selectedArticle?.urlToImage} alt="article thumbnail" />
              </div>
              <div className="fullArticleTitle">{selectedArticle.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

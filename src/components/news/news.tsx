import { useMainController } from "./newsController";
import { default as dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function News() {
  const { news, selectedArticle, fn } = useMainController();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="newsSummary" data-testid="newsSummary">
            {news &&
              news.map((article, i: number) => {
                return (
                  <>
                    <div className={`articleListContainer ${article.read && "markedRead"}`} onClick={() => fn.selectArticle(`${article.id}`)} key={article.id} data-testid={`articleSummary${i}`}>
                      <div className="readIconContainer">{article.read && <FontAwesomeIcon className="articleReadIcon" icon={faCheckSquare} />}</div>
                      <div className="articleThumbWrapper">
                        <img className="articleThumb" src={article.urlToImage} alt="article thumbnail" />
                      </div>
                      <div className="articleDetailsContainer">
                        <div className="articleTitle">
                          {article.title} {JSON.stringify(article.read)}
                        </div>
                        <div className="metaDataContainer">
                          <div className="articleDate">{dayjs(article.publishedAt).format("DD/MM/YYYY")}</div>
                          <div className="author">{article.author}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className="col">
          <div className="newsFullArticle">
            {selectedArticle && (
              <>
                <div className="fullArticleContainer">
                  <div className="fullArticleHeaderContainer">
                    <div className="fullArticleThumbWrapper">
                      <img className="fullArticleThumb" src={selectedArticle.urlToImage} alt="article thumbnail" />
                    </div>
                    <div className="fullArticleTitle">
                      <h2>{selectedArticle.title}</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="fullArticleBodyContainer">
                    {selectedArticle.content.replace(/ *\[[^\]]*]/, "")}
                    <span className="readmore">
                      <a onClick={() => fn.handleReadStatus(selectedArticle.id)} title="read more" target="_blank" rel="noreferrer">
                        click me <FontAwesomeIcon className="readmoreIcon" icon={faChevronCircleRight} />
                      </a>
                    </span>
                    <span className="readmore">
                      <a onClick={() => fn.handleReadStatus(selectedArticle.id)} href={selectedArticle.url} title="read more" target="_blank" rel="noreferrer">
                        read more <FontAwesomeIcon className="readmoreIcon" icon={faChevronCircleRight} />
                      </a>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

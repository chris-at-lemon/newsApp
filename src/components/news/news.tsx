import { useMainController } from "./newsController";
import { default as dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faCheckSquare, faBars, faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";

import SearchNews from "../search/searchNews";

function News() {
  const { news, selectedArticle, menuIsActive, cachedNews, paginatedPosts, fn } = useMainController();

  return (
    <div className="container">
      <div className="searchContainer">{news && <SearchNews currentNews={news} cachedNews={cachedNews} setNews={fn.setNews} />}</div>
      <div className="menuBtnWrapper">
        <button onClick={fn.toggleMenu} className="menuBtn" aria-label="toggle menu" data-testid="menuBtn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="row">
        <div className={`col col-articleList ${menuIsActive ? "isActive" : "isInactive"}`}>
          <div className="newsSummary" data-testid="newsSummary">
            {paginatedPosts &&
              paginatedPosts.map((article, i: number) => {
                return (
                  <div
                    className={`articleListContainer ${article.read && "markedRead"}`}
                    onClick={() => {
                      fn.selectArticle(`${article.id}`);
                      fn.toggleMenu();
                    }}
                    key={article.id}
                    data-testid={`articleSummary${i}`}
                  >
                    <div className="readIconContainer">{article.read && <FontAwesomeIcon className="articleReadIcon" icon={faCheckSquare} />}</div>
                    <div className="favIconContainer">{article.fav && <FontAwesomeIcon className="articleFavIcon" icon={faHeart} />}</div>
                    <div className="articleThumbWrapper">
                      <img
                        className="articleThumb"
                        src={article.urlToImage}
                        alt="article thumbnail"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "https://via.placeholder.com/150";
                        }}
                      />
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
                );
              })}
          </div>
          <div>
            <button onClick={fn.handlePrev}>prev</button>
            <button onClick={fn.handleNext}>next</button>
          </div>
        </div>
        <div className="col">
          <div className="newsFullArticle">
            {selectedArticle && (
              <article>
                <div className="fullArticleContainer">
                  <div className="fullArticleHeaderContainer">
                    <div className="fullArticleThumbWrapper">
                      <img className="fullArticleThumb" src={selectedArticle.urlToImage} alt="article thumbnail" />
                    </div>
                    <div className="fullArticleTitle">
                      <h2>{selectedArticle.title}</h2>
                      <span>{selectedArticle.author}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="metaDataContainer">
                    <div className="articleDate">{dayjs(selectedArticle.publishedAt).format("DD/MM/YYYY")}</div>
                    <div className="interactionContainer">
                      <button onClick={() => fn.handleReadStatus(selectedArticle.id)} className="btn btn-mark-read">
                        mark as read <FontAwesomeIcon icon={faCheck} />
                      </button>{" "}
                      |{" "}
                      <button onClick={() => fn.handleFavStatus(selectedArticle.id)} className="btn btn-set-fav">
                        set as favourite <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="fullArticleBodyContainer">
                    {selectedArticle.content.replace(/ *\[[^\]]*]/, "")}
                    <span className="readmore">
                      <a onClick={() => fn.handleReadStatus(selectedArticle.id)} href={selectedArticle.url} title="read more" target="_blank" rel="noreferrer">
                        read more <FontAwesomeIcon className="readmoreIcon" icon={faChevronCircleRight} />
                      </a>
                    </span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

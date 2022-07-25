import { useEffect, useState } from "react";
import { httpGet } from "../../modules/http";
import { nanoid } from "nanoid";
import { INews } from "../../interfaces/news";

export const useMainController = () => {
  // Cached news is the source of truth.
  // This would be the global state, we could use Recoil/Context/state management library in its place
  const [cachedNews, setCachedNews] = useState<INews[]>([]);
  //console.log("cachedNews", cachedNews);

  // News will be mutated to what users filter, search, paginate
  const [news, setNews] = useState<INews[]>([]);
  // console.log("news", news);

  // Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const paginatedPosts = news?.slice(start, end);
  // console.log("paginatedPosts", paginatedPosts);

  // find total pages
  let totalPages = Math.floor(news.length / 5);
  if (totalPages === 0) {
    totalPages = 1;
  }

  // handle previous and next
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
    setStart(start - 5);
    setEnd(end - 5);
  };
  const handleNext = () => {
    if (pageNumber === totalPages) return;
    setPageNumber(pageNumber + 1);
    setStart(start + 5);
    setEnd(end + 5);
  };

  // Reset pagination when news are mutated
  useEffect(() => {
    setStart(0);
    setEnd(5);
    setPageNumber(1);
  }, [news]);

  // Fetch news on component load
  useEffect(() => {
    const getNews = async () => {
      const getNewsItems: any = await httpGet(
        "http://localhost:8000/v1/news?q="
      );
      let newsItems = getNewsItems.response.articles;
      // add unique ID, read and fav status to each news item
      const extendedNewsitems = newsItems.map((article: INews) => {
        return { ...article, id: nanoid(), read: false, fav: false };
      });

      setNews(extendedNewsitems);
      setCachedNews(extendedNewsitems);
    };

    getNews();
  }, []);

  // Select article to read
  const [selectedArticle, setSelectedArticle] = useState<any>();

  const selectArticle = (id: string) => {
    const thisArticle: any = news?.filter((item: any) => item.id === id)[0];
    setSelectedArticle(thisArticle);
  };

  // Set article as read
  const handleReadStatus = (id: string) => {
    // Check whether article list has been mutated by search (or any other potential mutations) after article has loaded into view pane
    const IdFound = news?.some((el) => el.id === id);

    // If news exist and article list has not been mutated:
    if (news && IdFound) {
      // Find article index
      const articleIndex: number = news.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToRead = { ...news[articleIndex], read: true };
      // Slice, insert updated news object
      const updatedNews = [
        ...news.slice(0, articleIndex),
        setToRead,
        ...news.slice(articleIndex + 1),
      ];
      setNews(updatedNews);
      setCachedNews(updatedNews);
    }

    // If article list has been mutated:
    if (news && !IdFound && cachedNews) {
      // Find article index
      const articleIndex: number = cachedNews.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToRead = { ...cachedNews[articleIndex], read: true };
      // Slice, insert updated news object
      const updatedNews = [
        ...cachedNews.slice(0, articleIndex),
        setToRead,
        ...cachedNews.slice(articleIndex + 1),
      ];

      setCachedNews(updatedNews);
    }
  };

  // Set article as fav
  const handleFavStatus = (id: string) => {
    // Check whether article list has been mutated by search (or any other potential mutations) after article has loaded in view pane
    const IdFound = news?.some((el) => el.id === id);

    // If news exist and article list has not been mutated:
    if (news && IdFound) {
      console.log("fount it");
      // Find article index
      const articleIndex: number = news.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToFav = { ...news[articleIndex], fav: true };
      // Slice, insert updated news object
      const updatedNews = [
        ...news.slice(0, articleIndex),
        setToFav,
        ...news.slice(articleIndex + 1),
      ];

      // Update news and cached news
      setNews(updatedNews);
      setCachedNews(updatedNews);
    }
    // If article list has been mutated:
    if (news && !IdFound && cachedNews) {
      // Find article index
      const articleIndex: number = cachedNews.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToFav = { ...cachedNews[articleIndex], fav: true };
      // Slice, insert updated news object
      const updatedNews = [
        ...cachedNews.slice(0, articleIndex),
        setToFav,
        ...cachedNews.slice(articleIndex + 1),
      ];

      //Update only cached
      setCachedNews(updatedNews);
    }
  };

  // Handle article list meny
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  return {
    news,
    selectedArticle,
    menuIsActive,
    cachedNews,
    paginatedPosts,
    pageNumber,
    totalPages,
    fn: {
      selectArticle,
      handleReadStatus,
      handleFavStatus,
      toggleMenu,
      setNews,
      handlePrev,
      handleNext,
    },
  };
};

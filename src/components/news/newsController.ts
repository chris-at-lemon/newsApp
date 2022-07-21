import { useEffect, useState } from "react";
import { httpGet } from "../../modules/http";
import { nanoid } from "nanoid";
import { INews } from "../../interfaces/news";

export const useMainController = () => {
  const [news, setNews] = useState<INews[]>();

  useEffect(() => {
    const getNews = async () => {
      const getNewsItems: any = await httpGet("http://localhost:8000/v1/news?q=");
      let newsItems = getNewsItems.response.articles;
      // add unique ID, read and fav status to each news item
      newsItems.map((article: INews) => {
        return (article.id = nanoid()), (article.read = false), (article.fav = false);
      });
      setNews(newsItems);
    };
    getNews();
  }, []);

  console.log(news);

  // Select article to read
  const [selectedArticle, setSelectedArticle] = useState<any>();

  const selectArticle = (id: string) => {
    const thisArticle: any = news?.filter((item: any) => item.id === id)[0];
    setSelectedArticle(thisArticle);
  };

  // Set article as read
  const handleReadStatus = (id: string) => {
    // Only if news exist
    if (news) {
      // Find article index
      const articleIndex: number = news?.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToRead = { ...news[articleIndex], read: true };
      // Slice, insert updated news object
      const updatedNews = [...news.slice(0, articleIndex), setToRead, ...news.slice(articleIndex + 1)];
      setNews(updatedNews);
    }
  };

  // Set article as read
  const handleFavStatus = (id: string) => {
    // Only if news exist
    if (news) {
      // Find article index
      const articleIndex: number = news?.findIndex((obj) => obj.id === id);
      //Update property at found index
      const setToRead = { ...news[articleIndex], fav: true };
      // Slice, insert updated news object
      const updatedNews = [...news.slice(0, articleIndex), setToRead, ...news.slice(articleIndex + 1)];
      setNews(updatedNews);
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
    fn: {
      selectArticle,
      handleReadStatus,
      handleFavStatus,
      toggleMenu,
    },
  };
};

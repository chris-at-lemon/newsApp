import { useEffect, useState } from "react";
import { httpGet } from "../modules/http";
import { nanoid } from "nanoid";
import { INews } from "../interfaces/news";

export const useMainController = () => {
  const [news, setNews] = useState<INews[]>();

  useEffect(() => {
    const getNews = async () => {
      const getNewsItems: any = await httpGet("http://localhost:8000/v1/news?q=");
      let newsItems = getNewsItems.response.articles;
      // add unique ID to each news item
      newsItems.map((article: INews) => {
        article.id = nanoid();
      });
      setNews(newsItems);
    };
    getNews();
  }, []);

  // Select article to read
  const [selectedArticle, setSelectedArticle] = useState<any>();
  console.log("selectedArticle", selectedArticle);

  const selectArticle = (id: string) => {
    console.log("selected", id);
    const thisArticle: any = news?.filter((item: any) => item.id === id)[0];
    console.log("thisarticle", thisArticle);
    setSelectedArticle(thisArticle);
  };

  return {
    news,
    selectedArticle,
    fn: {
      selectArticle,
    },
  };
};

import { useEffect, useState } from "react";
import { httpGet } from "../modules/http";

export const useMainController = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const getNews = async () => {
      const newsItems = await httpGet("http://localhost:8000/v1/news?q=");
      console.log(newsItems);
    };
    getNews();
  });

  return { news };
};

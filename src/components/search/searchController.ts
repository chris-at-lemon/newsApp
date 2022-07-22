import { useEffect, useState } from "react";
import { ISearchNews, ISetNews, INews } from "../../interfaces/news";

export const useSearchController = (currentNews: any, setNews: any, cachedNews: any) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);

    let thisValue = e.target.value;
    let filtered = currentNews.filter((article: any) => article.title.toLowerCase().includes(thisValue.toLowerCase()));
    if (thisValue === "") {
      setNews(cachedNews);
    } else {
      setNews(filtered);
    }
  };

  const resetNews = () => {
    setNews(cachedNews);
  };

  return {
    inputValue,
    fn: {
      handleQuery,
      setInputValue,
      resetNews,
    },
  };
};

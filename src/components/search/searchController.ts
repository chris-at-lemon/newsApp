import { useState } from "react";
import { INews } from "../../interfaces/news";

export const useSearchController = (
  currentNews: INews[],
  setNews: (arg: INews[]) => void,
  cachedNews: INews[]
) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    let thisValue = e.target.value;
    let filtered = currentNews.filter((article: INews) =>
      article.title.toLowerCase().includes(thisValue.toLowerCase())
    );
    if (thisValue === "") {
      setNews(cachedNews);
    } else {
      setNews(filtered);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleQuery(e);
    }
  };

  const resetNews = () => {
    setNews(cachedNews);
    setInputValue("");
  };

  return {
    inputValue,
    fn: {
      handleQuery,
      setInputValue,
      resetNews,
      handleKeyDown,
    },
  };
};

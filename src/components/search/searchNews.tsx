import { useSearchController } from "./searchController";
import { INews } from "../../interfaces/news";

const SearchNews = ({
  currentNews,
  setNews,
  cachedNews,
}: {
  currentNews: INews[];
  setNews: (arg: INews[]) => void;
  cachedNews: INews[];
}) => {
  const { inputValue, fn } = useSearchController(
    currentNews,
    setNews,
    cachedNews
  );

  return (
    <div className="searchContainer">
      <input
        className="input searchInput"
        type="text"
        onChange={(e) => fn.handleQuery(e)}
        onKeyDown={(e) => fn.handleKeyDown(e)}
        value={inputValue}
        placeholder="enter a search term"
        autoFocus
      />
      <button
        className="btn btn-primary btn-reset"
        onClick={() => fn.resetNews()}
      >
        reset search
      </button>
    </div>
  );
};

export default SearchNews;

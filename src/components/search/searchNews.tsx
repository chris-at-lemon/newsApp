import { ICurrentNews } from "../../interfaces/news";
import { useSearchController } from "./searchController";

const SearchNews = (props: any) => {
  const { inputValue, fn } = useSearchController(props.currentNews, props.setNews, props.cachedNews);

  return (
    <div className="searchContainer">
      <input className="input searchInput" type="text" onChange={(e) => fn.handleQuery(e)} value={inputValue} placeholder="enter a search term" autoFocus />
      <button className="btn btn-reset" onClick={() => fn.resetNews()}>
        reset search
      </button>
    </div>
  );
};

export default SearchNews;

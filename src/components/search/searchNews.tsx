import { useSearchController } from "./searchController";

const SearchNews = (props: any) => {
  const { inputValue, fn } = useSearchController(
    props.currentNews,
    props.setNews,
    props.cachedNews
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

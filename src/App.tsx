import "./styles/global.scss";
import News from "./components/news/news";
import Header from "./components/header/header";

function App() {
  return (
    <div className="mainWrapper">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <News />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

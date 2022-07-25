import "./styles/global.scss";
import News from "./components/news/news";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="mainWrapper">
      <header>
        <Header />
      </header>
      <main>
        <News />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

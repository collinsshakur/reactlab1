import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";
import articles from "./blog";

function App() {
  return (
    <div>
      <Header name="My first Blog" />
      <About aboutText="Welcome to my personal blog where I share my journey." />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
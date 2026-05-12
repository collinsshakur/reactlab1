import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import articles from "./blog";

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About aboutText="This is my blog site" />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
function Article({ article }) {
  return (
    <div>
      <h2>{article.title}</h2>
      <small>{article.date}</small>
      <p>{article.preview}</p>
    </div>
  );
}

export default Article;
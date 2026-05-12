function Article({ article }) {
  const { title, date, preview } = article;

  const displayDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
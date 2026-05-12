function About({ aboutText, image }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c";

  return (
    <aside>
      <img
        src={image || defaultImage}
        alt="blog logo"
      />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
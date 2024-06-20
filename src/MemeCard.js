const MemeCard = ({ data }) => {
  const { url, title, author } = data;

  return (
    <div className="memeContainer">
      <img className="imageClass" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;

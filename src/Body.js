import { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const result = await fetch("https://meme-api.com/gimme/18");
    const data = await result.json();
    setShowShimmer(false);
    setMemes((prev) => [...prev, ...data.memes]);
  };

  console.log(memes);

  return (
    <div className="memeBox">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;

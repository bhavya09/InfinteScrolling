const Shimmer = ({ data }) => {
  return Array(18)
    .fill(0)
    .map((ins) => (
      <div className="memeContainer">
        <div className="shimmerContainer"></div>
      </div>
    ));
};

export default Shimmer;

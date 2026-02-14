export default function Loader() {
  return (
    <div className="loader-overlay">
      <span className="loader-text">Loading...</span>
      <div className="loader-dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
}

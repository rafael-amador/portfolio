export default function Bars({ barOrder }) {
  return (
    <div className="intro-bars">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="bar"
          style={{ animationDelay: `${barOrder.indexOf(i) * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="card-container">
      {/* <h2>Functional Arrow Component</h2> */}

      <Card
        title="Star War"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}></Card>
      <Card title="Avatar"></Card>
      <Card title="The Lion King"></Card>
    </div>
  );
};
export default App;

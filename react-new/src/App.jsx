import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>Like</button>
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

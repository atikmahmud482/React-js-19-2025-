// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
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

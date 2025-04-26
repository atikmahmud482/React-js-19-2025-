import Button from "./Button/Button";
import Card from "./Card";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  const fruits = [
    { key: 1, name: "Apple", calories: 95 },
    { key: 2, name: "Banana", calories: 105 },
    { key: 3, name: "Orange", calories: 62 },
    { key: 4, name: "Mango", calories: 150 },
    { key: 5, name: "Grapes", calories: 67 },
    { key: 6, name: "Pineapple", calories: 82 },
    { key: 7, name: "Strawberry", calories: 4 },
    { key: 8, name: "Watermelon", calories: 86 },
    { key: 9, name: "Blueberry", calories: 57 },
    { key: 10, name: "Papaya", calories: 120 },
  ];
  return (
    <>
      {/* <Header></Header>
      <Food></Food>
      <Footer></Footer> */}
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}
      {/* <Button></Button> */}
      {/*  <Student name="Atik" age={24} isStudent={true}></Student>
      <Student name="Mahmud" age={25} isStudent={false}></Student>
      <Student name="Al" age={23} isStudent={false}></Student>
      <Student name="Md" age={27} isStudent={true}></Student>
      <Student name="Guest" age={34} isStudent={true} /> */}
      {/* <UserGreeting isLoggedIn={false} username="Atik"></UserGreeting> */}
      <List items={fruits} category="Fruits" />
    </>
  );
}
export default App;

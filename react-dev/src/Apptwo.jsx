//Using a component

// function Profile() {
//   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// Write a components

// export default function Congratulations() {
//     return (
//       <h1>Good job!</h1>
//     );
//   }

//Pro-tip: Use a JSX Converter

// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   );
// }

//Passing strings with quotes
// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara"
//     />
//   );
// }

// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

//Familiar props
// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Profile() {
//   return <Avatar />;
// }

// import { getImageUrl } from "./utils.js";

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: "Aklilu Lemma",
//           imageId: "OKS67lh",
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: "Lin Lanying",
//           imageId: "1bX5QH6",
//         }}
//       />
//     </div>
//   );
// }

//How props change over time
// import { useState, useEffect } from "react";
// import Clock from "./Clock.js";

// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }

// export default function App() {
//   const time = useTime();
//   const [color, setColor] = useState("lightcoral");
//   return (
//     <div>
//       <p>
//         Pick a color:{" "}
//         <select value={color} onChange={(e) => setColor(e.target.value)}>
//           <option value="lightcoral">lightcoral</option>
//           <option value="midnightblue">midnightblue</option>
//           <option value="rebeccapurple">rebeccapurple</option>
//         </select>
//       </p>
//       <Clock color={color} time={time.toLocaleTimeString()} />
//     </div>
//   );
// }

// Extract a component

// import { getImageUrl } from "./utils.js";

// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 70,
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li>
//           <b>Profession:</b> {profession}
//         </li>
//         <li>
//           <b>Awards: {awards.length} </b>({awards.join(", ")})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           "Nobel Prize in Physics",
//           "Nobel Prize in Chemistry",
//           "Davy Medal",
//           "Matteucci Medal",
//         ]}
//       />
//       <Profile
//         imageId="YfeOqp2"
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
//       />
//     </div>
//   );
// }

//Passing JSX in a children prop

// function Card({ children, title }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card title="Photo">
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card title="About">
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// Adjust the image size based on a prop

// import { getImageUrl } from "./utils.js";

// const ratio = window.devicePixelRatio;

// function Avatar({ person, size }) {
//   let thumbnailSize = "s";
//   if (size * ratio > 90) {
//     thumbnailSize = "b";
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, thumbnailSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//       <Avatar
//         size={70}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//     </>
//   );
// }

//Familiar props
// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

//passing props to a component
// export default function Profile() {
//   return <Avatar />;
// }

// export default function Profile() {
//   return (
//     <Avatar parson={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
//   );
// }

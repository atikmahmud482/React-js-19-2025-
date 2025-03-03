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
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return <Avatar />;
}

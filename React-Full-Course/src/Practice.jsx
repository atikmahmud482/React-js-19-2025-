// import React from "react";

// function Practice(props) {
//   return (
//     <div>
//       <h1>Hello ,{props.name}</h1>
//     </div>
//   );
// }

// export default Practice;

// import React from "react";

// function Practice() {
//   const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
//   return <Welcome name="Atik" />;
// }

// export default Practice;

// import React from "react";

// function Practice(props) {
//   return <div>{props.title}</div>;
// }

// export default Practice;

// import React from "react";

// function Practice() {
//   return <div>Practice</div>;
// }

// export default Practice;

// import React, { useState } from "react";

// function Practice() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <button className="btn" onClick={() => setCount(count + 1)}>
//         Button
//       </button>
//       Count: {count}
//     </>
//   );
// }

// export default Practice;

import React from "react";

function Practice() {
  const handleClick = () => alert("Clicked!");
  return <button onClick={handleClick}>Click</button>;
}

export default Practice;

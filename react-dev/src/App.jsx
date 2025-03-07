// Displaying Data

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt=""
//         style={{ width: user.imageSize, height: user.imageSize }}
//       />
//     </>
//   );
// }

// Rendering Lists

// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItem = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}>
//       {product.title}
//     </li>
//   ));
//   return <ul>{listItem}</ul>;
// }

// Updating the Screen

// import { useState } from "react";

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

// tic-tac-toe
// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = "Go to move #" + move;
//     } else {
//       description = "Go to game start";
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const currentSquares = history[history.length - 1];

//   function handlePlay(nextSquares) {
//     setHistory([...history, nextSquares]);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{/*TODO*/}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// tic-toc-toe end

// Thinking in React
// import { useState } from "react";

// function FilterableProductTable({ products }) {
//   const [filterText, setFilterText] = useState("");
//   const [inStockOnly, setInStockOnly] = useState(false);

//   return (
//     <div>
//       <SearchBar
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable
//         products={products}
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//       />
//     </div>
//   );
// }

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">{category}</th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   );

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//       return;
//     }
//     if (inStockOnly && !product.stocked) {
//       return;
//     }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       );
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar({
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   onInStockOnlyChange,
// }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />{" "}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }

// UseState()

// type RequestState =
//   | { status: "idle" }
//   | { status: "loading" }
//   | { status: "success", data: any }
//   | { status: "error", error: Error };

// const [requestState, setRequestState] =
//   useState < RequestState > { status: "idle" };

// useReducer

// import App from "./App.tsx";
// export default App;

// useMemo
// const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

// useCallback

// import { useState, useCallback } from "react";

// export default function Form() {
//   const [value, setValue] = useState("Change me");

//   const handleChange =
//     useCallback <
//     React.ChangeEventHandler <
//     HTMLInputElement >>
//       ((event) => {
//         setValue(event.currentTarget.value);
//       },
//       [setValue]);

//   return (
//     <>
//       <input value={value} onChange={handleChange} />
//       <p>Value: {value}</p>
//     </>
//   );
// }

// Dom Events

// import App from "./App.tsx";
// export default App;

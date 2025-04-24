import React from "react";
import Header from "./Header"; // Adjusted import path
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">Welcome to My App</h1>
        {/* Your main content here */}
      </main>
    </div>
  );
}

export default App;

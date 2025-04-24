// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import About from "./pages/About";
// // import Contact from "./pages/Contract"; // Fixed typo in import
// import Footer from "./components/Footer";
// import ErrorBoundary from "./ErrorBoundary";
// import ProductDetails from "./components/ProductDetails";

// const App = () => {
//   return (
//     <ErrorBoundary>
//       <div className="flex flex-col min-h-screen">
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             {/* <Route path="/Contract" element={<Contract />} /> */}
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header /> {/* Only render the Header */}
      </div>
    </BrowserRouter>
  );
};

export default App;

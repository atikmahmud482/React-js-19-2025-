import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Your page content or routes go 
        here */}
        <Banner />
      </main>

      <Footer />
    </div>
  );
};

export default App;

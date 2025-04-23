import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Your page content or routes go here */}
      </main>

      <Footer />
    </div>
  );
};

export default App;

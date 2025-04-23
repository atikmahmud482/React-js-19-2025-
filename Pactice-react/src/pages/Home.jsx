import React from "react";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <>
      <Banner />
      <div>
        <h1 className="text-center mt-10 text-xl font-bold">All Products</h1>
        <CardSection></CardSection>
      </div>
    </>
  );
};

export default Home;

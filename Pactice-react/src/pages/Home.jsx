import React from "react";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <>
      <Banner />
      <div>
        <h2 className="text-center mt-10 text-xl font-bold">
          Welcome to CloudCore!
        </h2>
        <CardSection></CardSection>
      </div>
    </>
  );
};

export default Home;

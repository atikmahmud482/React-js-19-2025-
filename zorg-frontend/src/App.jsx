import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import WorksSection from "./components/WorksSection";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <WorksSection />
      <ServiceSection />
    </div>
  );
}

export default App;

import Hero from "../components/partials/hero";
import MarginBox from "../components/partials/margin";
import Navbar from "../components/partials/navbar";

const App = () => {
  return (
    <main className="font-inter">
      <Navbar />
      <br />
      <MarginBox>
        <Hero />
      </MarginBox>
    </main>
  );
};

export default App;

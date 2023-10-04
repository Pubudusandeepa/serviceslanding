import "./App.css";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import Services from "./container/services/Services";
import Features from "./container/features/Features";
import Web from "./container/web/Web";
import Pricing from "./container/pricing/Pricing";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Features />
      <Web />
      <Pricing />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import Services from "./container/services/Services";
import Features from "./container/features/Features";
import Web from "./container/web/Web";
import Pricing from "./container/pricing/Pricing";
import Team from "./container/team/Team";
import Work from "./container/work/Work";
import Testtimonials from "./container/testimonials/Testtimonials";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Features />
      <Web />
      <Pricing />
      <Team />
      <Work />
      <Testtimonials />
    </div>
  );
}

export default App;

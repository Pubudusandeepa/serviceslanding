import "./App.css";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import Services from "./container/services/Services";
import Features from "./container/features/Features";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Features />
    </div>
  );
}

export default App;

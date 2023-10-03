import "./App.css";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import Services from "./container/services/Services";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
    </div>
  );
}

export default App;

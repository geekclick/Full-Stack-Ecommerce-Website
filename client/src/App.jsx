import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="grid grid-rows-3 gap-10 w-fit">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;

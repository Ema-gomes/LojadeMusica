import Header from "./components/Header";
import Footer from "./components/Footer";
import Highlight from "./components/Highlight";
import Newsletter from "./components/Newsletter";
import './Geral.css';

function App() {
  return (
    <div className="Main">
      <Header />
      <Highlight />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

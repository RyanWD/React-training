import "./App.css";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="card-container">
        <Avatar />
        <div className="card-details">
          <Contact />
          <Bio />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

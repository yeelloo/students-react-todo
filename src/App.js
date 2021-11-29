import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <>
      <Header /> 
      <Todos />
      <Footer />
    </>
  );
}

export default App;

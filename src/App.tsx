import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;

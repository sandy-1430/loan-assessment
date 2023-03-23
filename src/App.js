import AppContext from "./Context/AppContext";
import LoanOffer from "./components/LoanOffer";
import "./styles/styles.scss";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <AppContext>
        <Header />
        <LoanOffer />
      </AppContext>
    </div>
  );
}

export default App;

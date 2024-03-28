import ContextStore from "./Component/ContextStore";
import Navbar from "./Component/Navbar";




function App() {
  return (
    <div className="App">
      <ContextStore>
      <Navbar/>
      </ContextStore>
   
    </div>
  );
}

export default App;

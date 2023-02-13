import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <div className="container">
          <h1 className="text-center mt-3">Todo App</h1>
          <Form />
          <ListGroup />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;

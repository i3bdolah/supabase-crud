import "./App.css";
import Form from "./comps/Form";
import Nav from "./comps/Nav";
import Product from "./comps/Product";

const App = () => {
  return (
    <div className="w-[90%] max-w-[1300px] mx-auto">
      <Nav />
      <Form />
      <Product />
    </div>
  );
};

export default App;

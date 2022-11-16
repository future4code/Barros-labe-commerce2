import React,{useState} from "react";
import data from './data';
import Carrinho from "./components/Carrinho";
import Header from "./components/Header";
import Home from "./components/Home";
import Filtros from "./components/Filtros";

function App() {
  const { produtos } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    console.log(cartItems);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Filtros/>
        <Home products={produtos} onAdd={onAdd}></Home>
        <Carrinho
          cartItems={cartItems}
        ></Carrinho>
      </div>
    </div>
  );
}

export default App;

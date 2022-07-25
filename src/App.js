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
      <Header className="row" countCartItems={cartItems.length}>
      
      </Header>
      <div className="row">
      <div>
      <Filtros className="col-1">

      </Filtros>
        </div>
        <div className="card">
        <Home products={produtos} onAdd={onAdd}></Home>
        </div>
        
        <Carrinho
         cartItems={cartItems}
         onAdd={onAdd}
         onRemove={onRemove}
        ></Carrinho>
      </div>
    </div>
  );
}

export default App;

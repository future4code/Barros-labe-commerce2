import React from 'react';

export default function Carrinho(props) {
  const {cartItems, onRemove} = props;
  
  
  return (
    <aside className="block col-1">
      <h2>Carrinho: </h2>
      <div>
        <ul>
          {cartItems.map((product) => (
            <li>
                {product.qty}x
                Nome:{product.name}
              <button onClick={onRemove.qty}>Remover</button> 
            </li>
          ))}
          
          
        </ul>
        Valor Total:{(parseInt(cartItems.reduce((total, product) => (product.price * product.qty) + total, 0))).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
        <button onClick={() => alert('Compra realizada com sucesso!')}>
                Finalizar Compra
          </button>
      </div>
    </aside>
  );
}

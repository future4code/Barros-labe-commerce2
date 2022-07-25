import React from 'react';

export default function Carrinho(props) {
  const { cartItems, AddCar, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Itens do Carrinho</h2>
      <div>
        {cartItems.length === 0 && <div>Carrinho está vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => AddCar(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Preço Item</div>
              <div className="col-1 text-right">R$ {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Taxas e Impostos</div>
              <div className="col-1 text-right">R$ {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Outros Custos</div>
              <div className="col-1 text-right">
                R$ {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Valor Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R$ {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Compra realizada com sucesso!')}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

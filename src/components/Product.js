import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R$ {product.price},00</div>
      <div>
        <button onClick={() => onAdd(product)}>Adicionar no Carrinho</button>
      </div>
    </div>
  );
}

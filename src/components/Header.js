import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>E-commerce Tuiutineses</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrinho{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Login</a>
      </div>
    </header>
  );
}

     import React from 'react'
     
     export function Filtros(props) {

        
       return(
        <div className="">

      <input
         placeholder="Nome do Produto"
         value={props.query}
         onChange={(ev) => props.setQuery(ev.target.value)}
      />


         <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={(ev) => props.setMinPrice(ev.target.value)}
        />


        <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={(ev) => props.setMaxPrice(ev.target.value)}
        />
        
      
        <select
         value={props.order}
         onChange={(ev) => props.setOrder(ev.target.value)}
      >
         <option value={"asc"}>Crescente</option>
         <option value={"desc"}>Decrescente</option>

      </select>

        </div>
       )    
    };
     
     export default Filtros;
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


export const Mypokemons = (props) => {
    const history = useHistory();
    const pokedex = props.pokedex

      
    const historiBack = () => {
        history.goBack()
    }

    const renderMyListPokemon = pokedex.map((pokemon) => {
        return(
           <div key={pokemon}>
               <p>{pokemon}</p> 
               <button onClick={ () =>props.removePokemon(pokemon)}>remover pokemon</button> 
           </div>
           )
   
    }) 



    return (
        <div>
            <p>MyPokemons</p>
            {renderMyListPokemon}
            <button onClick={historiBack}>Voltar para HomePage</button>
        </div>
    )
}
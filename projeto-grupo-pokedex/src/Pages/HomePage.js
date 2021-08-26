import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { PokeDetails } from "./PokeDetails";


export const HomePage = (props) => {
    const history = useHistory();
    
   


    const goToMypokemons = () => {
        history.push("/mypokemons")
    }

    const goToDetailsPokemon = (name) => {
        history.push(`/detalhes/${name}`)
    }


    const renderListPokemons = props.listPokemons.map((pokemon) => {
        return(
            <div
             key={pokemon.name}>
                <p>{pokemon.name}</p>
                <button onClick={ () => props.addListPokemon(pokemon.name)}>Adicionar Pokemon</button>
                <button onClick={() => goToDetailsPokemon(pokemon.name)}>Detalhes do Pokemon</button>   
                 
            </div>
        )
    })


    return (
        <div>
            <p>HomePage</p>
            {renderListPokemons}
            <button onClick={goToMypokemons}>Meus Pokemons</button>
        </div>
    )
}
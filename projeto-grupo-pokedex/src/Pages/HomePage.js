import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


export const HomePage = (props) => {
    const history = useHistory();
    const [listPokemons, setListPokemons] = useState([])


    const goToMypokemons = () => {
        history.push("/mypokemons")
    }

    const goToDetailsPokemon = (name) => {
        history.push(`/detailspoke/${name}`)
    }


   
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon' ,{})
        .then((res) => {
            console.log(res.data.results)
            setListPokemons(res.data.results)
        }).catch((err) => {
            alert(`Tem algo errrado: ${err}`)
        })
    },[])

    const renderListPokemons = listPokemons.map((pokemon) => {
        return(
            <div key={pokemon.name}>
                <p>{pokemon.name}</p> 
                <button onClick={() => props.addPokemons(pokemon.name)}>Adicionar Pokemon</button>  
                <button onClick={() => {goToDetailsPokemon(pokemon.name)}}>Ver detalhes</button>   
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
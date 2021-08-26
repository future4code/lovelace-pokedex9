import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


export const PokeDetails = (props) => {
    const arrayPoke = props
    

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nomeaqui}` ,{})
        .then((res) => {
            console.log(props)
        }).catch((err) => {
            alert(`Tem algo errrado: ${err}`)
        })
    },[])

    const consolao = (pokemon) => {
        console.log(pokemon.myPokemons)
    }

    return (
        <div>
            <p>Detalhes Pokemon</p>
            <button onClick={consolao(arrayPoke)}>Console teste</button>
        </div>
    )
}
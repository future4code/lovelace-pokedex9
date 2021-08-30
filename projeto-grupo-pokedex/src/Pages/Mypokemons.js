import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


export const Mypokemons = (props) => {
    const history = useHistory();

      
    const historiBack = () => {
        history.goBack()
    }

    

    return (
        <div>
            <p>MyPokemons</p>
            {props.renderMyListPokemon}
            <button onClick={historiBack}>Voltar para HomePage</button>
        </div>
    )
}
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import {Screen} from "./StyledPokeDetails"


export const PokeDetails = () => {
    const history = useHistory();
    
    

    return (
        <Screen>
            <p>Detalhes Pokemon</p>
        </Screen>
    )
}
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Mypokemons } from "../Pages/Mypokemons";
import { PokeDetails } from "../Pages/PokeDetails";

export const Router = () => {

    const [pokedex , setPokedex] = useState([])


    const addListPokemon = (pokemon) => {
        const newPokemon = pokemon
        const isPokemonInPokedex = pokedex.find((pokemonInPokedex) => {
            if(pokemonInPokedex === pokemon){
                return true;
            } else {
                return false;
            }
        })

        if (isPokemonInPokedex) {
            alert('Você ja tem esse pokemom!')
        } else {
            const newListPokemon = [...pokedex, newPokemon]
            setPokedex(newListPokemon)
        }
    }

    const removePokemon = (pokemon) => {
        
        let existPokemon = pokedex.find((pokemonInPokedex) => {
            if(pokemonInPokedex === pokemon) {
                return false
            } else {
                return true
            }
        })

        if(existPokemon) {
            let newListPokemon = pokedex.filter((pokemonInPokedex) => {
                
            })
            return newListPokemon
        }
        setPokedex(newListPokemon)
    }
    

    return (
        <BrowserRouter>
        <Switch>

        <Route exact path={"/"}>
            <HomePage
            addListPokemon={addListPokemon}/>
        </Route>

        <Route exact path={"/mypokemons"}>
            <Mypokemons
            pokedex = {pokedex}
            removePokemon = {removePokemon}
            />
        </Route>

        <Route exact path={"/detailspoke"}>
            <PokeDetails/>
        </Route>
        </Switch>
        
        </BrowserRouter>
    )
}
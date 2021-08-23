import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Mypokemons } from "../Pages/Mypokemons";
import { PokeDetails } from "../Pages/PokeDetails";

export const Router = () => {

    const [myPokemons, setMyPokemons] = useState([])

    const addPokemons = (pokemon) => {
        const existPokemonOrNot = myPokemons.find((pokemonsInCart) => {
            if (pokemonsInCart.name === pokemon.name) {
                return true
            } else {
                return false
            }
        })

        if (existPokemonOrNot) {
            const newListPokemon = myPokemons.map((pokemonsInCart) => {
                if (pokemonsInCart.name === pokemon.name) {
                    const newPokemon = {
                        ...pokemonsInCart,
                        quantity: pokemonsInCart.quantity + 1
                    }
                    return newPokemon
                }
                return pokemonsInCart
            });
            console.log(existPokemonOrNot)
            setMyPokemons(newListPokemon)
        }else {
            const newPokemon = { ...pokemon, quantity: 1}
            const newListPokemon = [...myPokemons, newPokemon]
            setMyPokemons(newListPokemon)
        }

    }


    return (
        <BrowserRouter>
        <Switch>

        <Route exact path={"/"}>
            <HomePage addPokemons={addPokemons}/>
        </Route>

        <Route exact path={"/mypokemons"}>
            <Mypokemons/>
        </Route>

        <Route exact path={"/detailspoke"}>
            <PokeDetails/>
        </Route>
        </Switch>
        
        </BrowserRouter>
    )
}
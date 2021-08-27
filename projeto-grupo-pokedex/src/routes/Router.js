import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Mypokemons } from "../Pages/Mypokemons";
import { PokeDetails } from "../Pages/PokeDetails";

export const Router = () => {

    const [myPokemons , setMyPokemons] = useState([])
    const [listPokemons, setListPokemons] = useState([])


    const addListPokemon = (pokemon) => {
        const newPokemon = pokemon
        
        const isPokemonInPokedex = myPokemons.find((pokemonInPokedex) => {
            if(pokemonInPokedex === pokemon){
                return true;
            } else {
                return false;
            }
        })

        if (isPokemonInPokedex) {
            alert('Você ja tem esse pokemom!')
        } else {
            const newListPokemon = [...myPokemons, newPokemon]
            setMyPokemons(newListPokemon)
            console.log(newListPokemon)
        }
    }

    const removePokemon = (pokemon) => {
        
        const newListPokemon = myPokemons.filter((pokemonInPokedex) => {
            if(pokemon === pokemonInPokedex) {
             return  false
            } else{
                return true
            }
        })
        setMyPokemons(newListPokemon)
    }

    const renderMyListPokemon = myPokemons.map((pokemon) => {
        return(
           <div key={pokemon.name}>
               <p>{pokemon.name}</p> 
               <button onClick={ () =>removePokemon(pokemon)}>remover pokemon</button> 
           </div>
           )
   
    }) 

    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon' ,{})
        .then((res) => {
            console.log(res.data.results)
            setListPokemons(res.data.results)
        }).catch((err) => {
            alert(`Tem algo errrado: ${err}`)
        })
    },[])
    

    return (
        <BrowserRouter>
        <Switch>

        <Route exact path={"/"}>
            <HomePage
            listPokemons = {listPokemons}
            addListPokemon={addListPokemon}/>
        </Route>

        <Route exact path={"/mypokemons"}>
            <Mypokemons
            renderMyListPokemon = {renderMyListPokemon}
            
            removePokemon = {removePokemon}
            />
        </Route>

        <Route exact path={"/detalhes/:nome"}>
            <PokeDetails/>
        </Route>
        </Switch>
        
        </BrowserRouter>
    )
}
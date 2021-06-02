import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CriptoCurrency/* ,Random */,HomePage/* Favorites */ } from '../pages'

export const Router = () => {
    const [cripto, setCripto] = React.useState("");
    /* const [Random, setCriptoRandom] = React.useState(""); */
    /* const [favorites, setFavorites] = React.useState(""); */

    function handleSetCripto(cripto){
        setCripto(cripto);
    }
    
    /* function handleSetCriptoRandom(Random){
        SetCriptoRandom(Random);
    } */

   /*  function handleSetFavorites(criptofavorite){
        setFavorites(criptofavorite);
    } */

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cripto">
                    <CriptoCurrency cripto={cripto}/>
                </Route>
                <Route path="/">
                    <HomePage setCripto={handleSetCripto}/>
                </Route>
                {/* <Route path="/favorites">
                    <Favorites favorites={favorites}/>
                </Route> */}
                {/* { <Route path="/Random">
                    <Random setCripto={handleSetCriptoRandom}/>
                </Route> } */}
            </Switch>
        </BrowserRouter>
    )
}
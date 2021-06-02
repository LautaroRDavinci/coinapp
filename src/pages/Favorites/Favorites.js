/* import React from 'react'
import styled from 'styled-components';
import "../../styles.css";
import {Button} from '../../Button';
import {useHistory} from "react-router";


export const Favorites = ({criptofavorite}) => {
    const [criptoData, setCriptoData] = React.useState("")

    React.useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${criptofavorite}`).then(response => 
        response.json().then((data) => setCriptoData(data))
        );
        }, [criptofavorite]);
        return(
         <>
         {criptoData && (
             <p>{criptoData.symbol} </p>
        )}
        </>
     ); 
}; */
import React from 'react'
import styled from 'styled-components';
import "../../styles.css";
import {Button} from '../../Button';
import {useHistory} from "react-router";


export const HomePage = ({setCripto}) => {
   const [input, setInput] = React.useState()
  
   const history = useHistory()
   
   function handleSearchClick(){
     if(input === null || input === undefined){
      alert("Debe ingresar una cripto para realizar la busqueda")
      history.replace("./")
     }else{
    setCripto(input.toLowerCase());
     history.replace("/cripto")
    }
   }
   function handlefavoriteClick(){
    history.replace("/favorites")
  }
  function handleSetCriptoRandom(){
    setCripto(input);
    history.replace("/Random")
  }
   function handleInputChange(e){
     setInput(e.target.value);
   }
   
   return (
    <Home width='20px'>
      <Wrapper>
        <BitcoinLogo src="https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png"></BitcoinLogo>
        <InputWrapper>
        <Texto>
        <h1 class="coin-app">Busca tu cripto</h1>
        </Texto>
        <SearchBar 
        value={input} 
        onChange={handleInputChange} 
        type="text"
        placeholder='Buscar'
        />
        </InputWrapper>
        <ButtonsWrapper>
         <Button
        onClick={handleSearchClick}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large">
        🔍
         </Button>
       <Button
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
        onClick={handleSetCriptoRandom}
        >
        🔀
       </Button>
       <Button
        onClick={handlefavoriteClick}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large">
        ❤️
       </Button>
      </ButtonsWrapper>
    </Wrapper>
  </Home>
  );
};

const Home = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background-image: url('https://wallpaperaccess.com/full/1267580.jpg')
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 25%;
`

const SearchBar = styled.input`
display: flex;
flex-direction: column;
content-align: center;
align-self: center;
width: 250px;
height: 35px;
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: 135px;
content-align: center;
align-self: center;
`

const BitcoinLogo = styled.img`
width: 150px
display: flex;
flex-direction: column;
`
const Texto = styled.div`
display: flex;
flex-direction: column;
content-align: center;
align-self: center;
`

const ButtonsWrapper = styled.div`

display: flex;
flex-direction: row;
align-self: center;
`

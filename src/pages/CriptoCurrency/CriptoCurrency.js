import React from 'react';
import styled from 'styled-components';
import {Button} from '../../Button';
import {useHistory} from "react-router";
import "../../styles.css"; 


export const CriptoCurrency = ({cripto}) => {
    const [criptoData, setCriptoData] = React.useState("")
    const [status, setStatus] = React.useState("error");
    const history = useHistory();
    
    
    function handleHomeClick(){
      history.replace("/")
    }

    React.useEffect(() => {
      setStatus("Cargando");  
      fetch(`https://api.coingecko.com/api/v3/coins/${cripto}`)
      .then(response => response.json()
      .then((data) =>{
          if(data.error){
            setStatus("error");
          }else{
             setStatus("success"); 
            setCriptoData(data);  
          } 
        })
        )
        .catch((error) => setStatus("error"));
        }, [cripto]);
        if(status === "success"){    
        return(  
         <>
         <CriptoCard> 
             <Wrapper>
             <PhotoCripto>
                    {criptoData && (<img src={criptoData.image.large} alt="Criptomoneda"/>)}
             </PhotoCripto>
                <Details> 
                <h1>{criptoData && (<p class="coin-text">  {criptoData.name}</p>)}</h1>
                <h3>{criptoData && (<p class="coin-text">Simbolo: {criptoData.symbol}</p>)}</h3>
                <h3>{criptoData && (<p class="coin-text">Precio: {criptoData.market_data.current_price.usd} USD</p>)}</h3>
                <h3>{criptoData && (<p class="coin-text">Market Cap: {criptoData.market_data.market_cap.usd} USD</p>)}</h3>
                <h3>{criptoData && (<p class="coin-text">Total supply: {criptoData.market_data.max_supply}</p>)}</h3>
                <h3>{criptoData && (<p class="coin-text">Circulating Supply: {criptoData.market_data.circulating_supply}</p>)}</h3>
                </Details>
                <ButtonsWrapper>
                    <Button
                    type="button"
                    buttonStyle="btn--warning--solid"
                    buttonSize="btn--large"
                    onClick={handleHomeClick}
                    >
                    🔙
                    </Button> 
                    <Button                   
                    type="button"
                    buttonStyle="btn--warning--solid"
                    buttonSize="btn--large"
                    >
                    ❤️
                    </Button> 
                </ButtonsWrapper>
            </Wrapper>
        </CriptoCard>
        </> 
        );
      
    } else if(status === "Cargando"){
      return(  
  <>
  <CriptoCard>
      <PhotoCripto>
         <img src= 'https://blog.advids.co/wp-content/uploads//2018/03/bitcoin.gif' alt= "Cargando"/>
      </PhotoCripto>
  </CriptoCard>
  </>
  )
}else{  
return(
<>
<CriptoCard>
  <Wrapper>
    <PhotoCripto>
      <img src= 'https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=82a1493binifpl6j8r7yssg1icmfbzqxivklx23njsn6xgs6&rid=200w.gif&ct=g' alt= "Cargando"/>
    </PhotoCripto>
    <Texto>
        <h1 class="coin-app">Cripto no encontrada</h1>
        </Texto>
    <ButtonsWrapper>
                    <Button
                    type="button"
                    buttonStyle="btn--warning--solid"
                    buttonSize="btn--large"
                    onClick={handleHomeClick}
                    >
                    🔙
                    </Button> 
                </ButtonsWrapper>
  </Wrapper>
  </CriptoCard>
</>
)
}  
}
     
const PhotoCripto = styled.div`
  grid-area: text; 
  display: column;
  font-size:14px;
  font-weight: 300;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  text-align: left;
  background-image: linear-gradient(
    
  );
`
const Texto = styled.div`
display: flex;
flex-direction: column;
content-align: center;
align-self: center;
`

const CriptoCard = styled.div`
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
  justify-content: center;
  align-items: center;
  width: 100%;
`   
const ButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
align-self: center;
margin-top: 10px;
`
const Details = styled.div`
  grid-area: text; 
  display: column;
  
  font-size:14px;
  font-weight: 300;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: left;
  h1{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
    };
  h3{
      margin-left: 15px;
    }
    background-image: linear-gradient(
    -180deg,
    #f18517 20%,
    #ffff 80%   
  );
  `

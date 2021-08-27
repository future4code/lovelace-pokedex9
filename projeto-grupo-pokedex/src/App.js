import { Router } from "./routes/Router";
import styled from "styled-components";
import { ArrowDown, ArrowLeft, ArrowRigth, ArrowUp, BarButton1, BarButton2, BlueButton, BotCross, ButtonGlass, ButtonGlassGreen, ButtonGlassRed, ButtonGlassYellow, Cross, Curve1Left, Curve1Right, Curve2Left, Curve2Right, CurveLeft1, CurveLeft2, CurveRight1, CurveRight2, Junction, Junction1, Junction2, Left, LeftCross, MidCircle, MidCross, PokedexAll, Rigth, RigthCross, TopCross  } from "./AppStyled";
import {ButtonPicture, ButtonTopPicture1, ButtonTopPicture2, Picture, PictureImg , PictureTop, Screen, ScreenDetails, Speakers, Bar , Stats} from "./Pages/StyledPokeDetails"
import {BlueCard1, BlueCard , MiniButton2 , BarButton3 , BarButton4} from "./Pages/StyledHome"
import { YellowBox1 , MiniButton1, BoxArrow , BoxArrow2 } from "./Pages/StyledMyPokemon";

function App() {
  return (
    // Estilização principal
    <PokedexAll>
      <Left>
          <CurveLeft1/>
          <CurveLeft2/>
        <Curve1Left >
          <ButtonGlass/>
          <ButtonGlassRed/>
          <ButtonGlassYellow/>
          <ButtonGlassGreen/>
        </Curve1Left>
        <Curve2Left>
          <Junction>
            <Junction1/>
            <Junction2/>
          </Junction>
        </Curve2Left>
        <BlueButton/>
        <BarButton1/>
        <BarButton2/>
        <Cross>
          <LeftCross>
            <ArrowLeft/>
          </LeftCross>
          <TopCross>
            <ArrowUp/>
          </TopCross>
          <RigthCross>
            <ArrowRigth/>
          </RigthCross>
          <MidCross>
            <MidCircle/>
          </MidCross>
          <BotCross>
            <ArrowDown/>
          </BotCross>
        
        </Cross>
        {/* PokeDetails */}
        <Screen>
            
              <ButtonTopPicture1/>
              <ButtonTopPicture2/>
            
          <Picture>
            <PictureImg>
              Imagem Pokemon
              </PictureImg>
          </Picture>
          <ButtonPicture/>
          <Speakers>
            <Bar/>
            <Bar/>
            <Bar/>
            <Bar/>
          </Speakers>
        </Screen>
        {/* PokeDetails */}
      </Left>
      <Rigth>
        <CurveRight1/>
        <CurveRight2/>
        <Curve1Right/>
        <Curve2Right/>
        {/* PokeDetails */}
        <Stats>
          Detalhes<br/>
          Nome:<br/>
          Tipo:<br/>
        </Stats>
        {/* PokeDetails */}
        {/* HomePage */}
        
        <BlueCard1>
          <BlueCard> Lista de Pokemons </BlueCard>
          {/* Ao clicar no BlueCard exibir os detalhes desse pokemon */}
          <MiniButton2/>
          {/* MiniButton2 adiciona o pokemon ao 'carrinho' */}
          <BlueCard/>
          <MiniButton2/>
          
          <BlueCard/>
          <MiniButton2/>
         
          <BlueCard/>
          <MiniButton2/>
          
        </BlueCard1>
        <BarButton3/>
        {/* O BarButton3 Volta a lista de pokemons */}
        <BarButton4/>
        {/* O BarButton4 Avança a lista de pokemons */}
        {/* HomePage */}
        {/* Mypokemons */}
        <YellowBox1>
          <p>Pokemon</p>
          <MiniButton1/>
          {/* O Minitton1 remove o pokemons da lista */}
          <p>Pokemon</p>
          <MiniButton1/>
        </YellowBox1>
        <BoxArrow/>
        {/* Volta a lista de adcionados */}
        <BoxArrow2/>
        {/* Avança a lista de adcionados */}
        {/* Mypokemons */}
      </Rigth>
      <Router />
    </PokedexAll>
  );
}

export default App;

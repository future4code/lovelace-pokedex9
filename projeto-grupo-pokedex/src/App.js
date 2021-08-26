import { Router } from "./routes/Router";
import styled from "styled-components";
import { ButtonGlass, ButtonGlassGreen, ButtonGlassRed, ButtonGlassYellow, Curve1Left, Curve2Left, CurveLeft1, CurveLeft2, Junction, Junction1, Junction2, Left, PokedexAll, Rigth } from "./AppStyled";

function App() {
  return (
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
      </Left>
      <Rigth></Rigth>
      <Router />
    </PokedexAll>
  );
}

export default App;

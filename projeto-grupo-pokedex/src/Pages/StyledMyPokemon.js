import styled from "styled-components"

export const MiniButton1 = styled.button`

    width: 15px;
    height: 15px;
    float: left;
    z-index: 1;


    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -o-border-radius: 20px;
    
    background: radial-gradient(#ff9b5b, #fb6505);
    background: -webkit-radial-gradient(#ff9b5b, #fb6505);
    background: -moz-radial-gradient(#ff9b5b, #fb6505);
    background: -o-radial-gradient(#ff9b5b, #fb6505);
`

export const YellowBox1 = styled.div`
    display: flex;
    width: 180px;
    height: 75px;
    z-index: 1;
    background-color: #ffff00;

    position: absolute;
    top: 415px;
    left: 25px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

    box-shadow: 0 0 20px #ff6600 inset;
    -webkit-box-shadow: 0 0 20px #ff6600 inset;
    -moz-box-shadow: 0 0 20px #ff6600 inset;
    -o-box-shadow: 0 0 20px #ff6600 inset;

    p{
        display: flex;

    }
`

export const BoxArrow = styled.div`

    position: absolute;
    top: 440px;
    left: 240px;

    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid #111;
    border-bottom: 10px solid transparent;

    :hover{
        width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid yellow;
    border-bottom: 10px solid transparent;
    }
`

export const BoxArrow2 = styled.div`

    position: absolute;
    top: 440px;
    left: 300px;

    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #111;
    border-bottom: 10px solid transparent;

    :hover{
        width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid yellow;
    border-bottom: 10px solid transparent;
    }
`


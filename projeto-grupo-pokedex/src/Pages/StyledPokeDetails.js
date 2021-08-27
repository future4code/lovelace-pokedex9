import styled from 'styled-components'

export const Screen = styled.div`

    height: 245px;
    width: 260px;
    padding: 0 20px;
    background-color: #b0b0b0;
    float:left;

    position: absolute;
    top: 130px;
    left: 19px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

    :after{
    content: "";
    border-top: 40px solid #b0b0b0;
    border-left: 40px solid #c00d0d;
    height: 0;

    position: absolute;
    bottom: 0;
    left: 0;
    }
    `



export const Picture = styled.div`

    height: 175px;
    width: 254px;
    margin-top: 20px;
    margin-bottom: 9px;
    background-color: #fff;
    border: 3px solid #494949;
    clear: both;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
`

export const PictureImg = styled.div`

    display: block;
    margin: 0 auto;
`

export const PictureTop = styled.div`

		margin: 6px auto;
		width: 40px;
`

export const ButtonTopPicture1 = styled.div`

    height: 8px;
    width: 8px;
    background-color: #c00d0d;
    border: 1px solid #000;
    float: left;
    margin-right: 20px;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

`
export const ButtonTopPicture2 = styled.div`

    height: 8px;
    width: 8px;
    background-color: #c00d0d;
    border: 1px solid #000;
    float: left;

    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;

`
export const ButtonPicture = styled.button`

    height: 26px;
    width: 26px;
    background-color: #c00d0d;
    margin-left: 35px;
    float: left;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;

    box-shadow: -2px 1px #5e0000;
    -webkit-box-shadow: -2px 1px #5e0000;
    -moz-box-shadow: -2px 1px #5e0000;
    -o-box-shadow: -2px 1px #5e0000;

    background: linear-gradient(top, #c00d0d 0%, #8b0000 80%);	
    background: -webkit-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -moz-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -o-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
`

export const Speakers = styled.div`

    float: right;
    width: 75px;
    height: 25px;
    margin-right: 20px;
`

export const Bar = styled.div`
    height: 3px;
    margin-bottom: 5px;
    background-color: #494949;

    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -o-border-radius: 30px;
`


export const Stats = styled.div`
	
		height: 130px;
		width: 280px;
		padding: 10px;
		background-color: #30da0c;
		z-index: 1;
		font-size: 13px;
		font-family: arial, sans-serif;

		position: absolute;
		top: 130px;
		left: 25px;

		border-radius: 15px;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		-o-border-radius: 15px;

		box-shadow: 0 0 20px #003300 inset;
		-webkit-box-shadow: 0 0 20px #003300 inset;
		-moz-box-shadow: 0 0 20px #003300 inset;
		-o-box-shadow: 0 0 20px #003300 inset;
	`
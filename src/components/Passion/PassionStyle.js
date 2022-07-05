import styled from 'styled-components';


export const PassionContainer = styled.div`
    padding:80px 20px 80px;
    background: #141b25;

`
export const PassionRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 768px) {
    display: block;
  }
`


export const InfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`


export const BoxOne= styled.div`
    background: #141b25;
    padding: 26px 28px 13px;
	position:relative;
	transition:.5s;
    height:100%;

`



export const MyDescreption = styled.div`
    color: #eaeaea;
    width:100%;
    padding: 0 15px;

    h2{
        font-weight:700;
        //padding-bottom: 13px;
        margin-bottom: 27px;
        font-size: 30px !important;
    }
    p{
        line-height: 25px;
        margin-top: 0;
        margin-bottom: 1rem;
    }

`

export const BoxContainer = styled.div`
    flex: 0 0 75%;
    max-width: 75%;
    display:flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        max-width: 100%;
  }
    

`

export const PassionArrow = styled.div`

    position: relative;
    top: 135px;
    display: inline-block;
	margin-left:14px;
	font-size:24px;
	transition:.5s;
	background: linear-gradient(to right, #03b8fa, #135ef3);
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    cursor:pointer;
    :hover{
        color:#135ef3;
	    background: #fff;
    }
    &:before{
        color:#fff;
    }

    @media screen and (max-width: 480px) {
        display:none;
  }
    


`


export const CardWrapper = styled.div`
    width:100%;
    height:270px;
    padding: 26px 28px 13px;
    background:#0d1218;
    color:#fff;
    font-size:30px;
    margin: 0 20px;
    display: block;

    cursor:pointer;
    position:relative;

    &:before{
    position:absolute;
	content:"";
	left:0;
	bottom:0;
	height:7px;
	width:0;
	background:linear-gradient(to right, #03b8fa, #135ef3);
	transition:.5s;

    }

    &:hover:before {
    width: 100%;
    }

    @media screen and (max-width: 480px) {
        height:360px;
  }

`

export const BildDiv = styled.div`
    padding-bottom: 9px;
    width:70px;
    height:70px;
`

export const Picture = styled.img`
    width: inherit !important;
`

export const PassionContent = styled.div`
    color: #eaeaea;
    position: relative;
    top:10px;

    h4{
        font-size:24px;
        margin-bottom: 15px;
    }

    p{
        font-size:15px;
        line-height: 22px;
    }

`








/*
export const ArrowRow = styled.div`
    justify-content: center;
    text-align: center;

`


export const StyledArrow = styled.div`
    display: inline-block;
	font-size:20px;
	margin-right:20px;
    margin-left:20px;
	transition:.5s;
	background: linear-gradient(to right, #03b8fa, #135ef3);
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    cursor:pointer;
    &:hover{
        color:#135ef3;
	    background: #fff;
    }

`
*/
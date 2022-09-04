import styled from 'styled-components';
import ExpBack from '../../images/AboutBackground/experience01.png';


export const ExpSection = styled.div`
	width: 100%;
	height: auto;
	min-height: 700px;
	padding: 0;
	overflow: hidden;
    /*background-image: url(${ExpBack});*/
    background-size: cover;
	position: relative;
    padding: 80px 0px 80px;
    
`


export const ExpWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px;
    margin-top: 30px;

    h2{
        color:#d30000;
    }

    @media only screen and (max-width:900px) {
		padding: 30px 50px;
	}

    @media only screen and (max-width:400px) {
		padding: 30px 25px;
	}

`

export const Line = styled.div`
    position: relative;
    top:5px;
    left:35px;
    height:3px;


    &::before{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        box-shadow: 0 0 5px #0381ff38;
        background-color: #0381ff38;
        width: 13rem;
        height: .4rem;
        border-radius: 50px;
    
    }
    &::after{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        background-color: #037FFF;
        width: 9rem;
        height: .4rem;
        border-radius: 50px;
    }

    @media only screen and (max-width:800px) {
		left:-10px;
	}
`


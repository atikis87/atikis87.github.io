import styled from 'styled-components';
import AboutBackgroundX from '../../images/AboutBackground/aboutBackX.png';
import AboutBackgroundSM from '../../images/AboutBackground/aboutBackSM.png';

export const AboutSection = styled.section`
    //background:linear-gradient(90deg, rgba(16,18,27,1) 0%, rgba(27,41,88,1) 50%, rgba(7,0,31,1) 100%);
    background-image: url(${AboutBackgroundX});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media screen and (max-width: 960px){

    }

    @media screen and (max-width: 768px){
        padding-bottom: 350px;
        /*Kell egy image ami mobil és tablet méret */
    }

    @media screen and (max-width: 480px){
        padding-bottom: 350px;
        transition: 0.8s all ease;
        background-image: url(${AboutBackgroundSM});
        /*Kell egy image ami mobil és tablet méret */
    }
`

export const AboutWrapper = styled.div`
    //z-index:1;
    height:860px;
    width:100%;
    max-width:1200px;
    margin-right: auto;
    margin-left: auto;
`

export const RowOne = styled.div`
    display: flex;
    justify-content:center;

`

export const AboutTitle = styled.div`

    text-transform: uppercase;
    font-size: 40px;
    color: #a4acc4;
    letter-spacing: 3px;
`

export const MySpan = styled.span`
    color:#037FFF;
    text-shadow: 0 0 5px #037FFF;
    top:100%;
    left: 0;
    font-size: 2.5rem;
`


export const ProgressLine = styled.div`
    position: relative;
    top:5px;
    left:4px;
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
`



export const InfoRow = styled.div`
    position: relative;
    top:100px;
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
        /*grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'` )};*/
        top:20px;
        grid-auto-columns: minmax(auto,1fr);
        display:block;
    }
`

export const Column1 = styled.div`
    grid-area: col1;
    margin-bottom: 30px;
	z-index:1;
	position:relative;
`

export const Column2 = styled.div`
    text-align:center;
    grid-area: col2;
    margin-bottom: 30px;
	z-index:1;
	position:relative;

`


export const TextWrapper = styled.div`
    margin:0 20px;
    @media screen and (max-width: 768px){
        margin:0 35px;
        text-align: center;
    }

`

export const TopLine = styled.p`
    color: #a4acc4;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    line-height: 18px;
    letter-spacing: 1.5px;
    margin-bottom:18px;
`


export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#03b8fa' : '#010606' )};

`

export const Subtitle = styled.p`
    width: 100%;
    margin-bottom: 60px;
    font-size: 16px;
    line-height:24px;
    color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`


export const BtnWrap = styled.div`
    margin-top:5px;
    display: flex;
    align-items: center;
`

export const BtnLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;
    background: linear-gradient(to right, #03b8fa, #135ef3);
    color: #fff;
    padding: 12px 50px;
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    transition: .5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: 20px;

    @media screen and (max-width: 860px){
        font-size: 14px;
    }

    @media only screen and (min-width: 320px) and (max-width: 599px) {
        float: none !important;
    }

    &:hover{
        color:#135ef3;
    }

    &:before{
        position: absolute;
        content: "";
        top: 0px;
        height: 100%;
        left: -25%;
        width: 0%;
        background: #fff;
        transform: skew(50deg);
        transition-duration: .6s;
        z-index: -1;
        transition: .5s;
    }

    &:hover:before {
    width: 180%;
    
}
`
export const BtnIcon = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    color: #fff;
    background:linear-gradient(to right, #03b8fa, #135ef3);
    height: 36px;
    width: 36px;
    text-align: center;
    line-height: 40px;
    margin: 0 5px;
	position:relative;
	transition:.5s;
	z-index:1;
	overflow:hidden;

    &:hover{
	    color:#135ef3;
    }

    &:before {
        position: absolute;
        content: "";
        top: 0px;
        height: 100%;
        left: -50%;
        width: 0%;
        background: #fff;
        transform: skew(50deg);
        transition-duration: .6s;
        z-index: -1;
    }

    &:hover:before {
        width: 198%;
}

`

export const ImgWrap = styled.div`
    margin: 0 auto;

    @media screen and (max-width: 768px){
        margin:0 35px;
    }


`

export const Img = styled.img`


    @media only screen and (min-width: 280px) and (max-width: 480px) {
        width:100%;
    }
`;
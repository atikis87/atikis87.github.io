import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0d1218;
    margin-top: 30px;
`

export const ProjectsWrapper = styled.div`
    max-width: 1300px;
    height:100%;
    position: relative;
    display: grid;
    grid-gap: 45px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 50px;
    list-style: outside none none;
    margin: 30px 0px 0px;
    padding:5rem 0 2.5rem 0;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));


    @media screen and (max-width: 992px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        margin: 30px 20px 0px 20px; 
    }
`

export const ProLine = styled.div`
    position: relative;
    top:5px;
    left:25px;
    height:3px;


    &::before{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        box-shadow: 0 0 5px #0381ff38;
        background-color: #0381ff38;
        width: 11rem;
        height: .4rem;
        border-radius: 50px;
    
    }
    &::after{
        content: "";
        bottom: 0;
        position: absolute;
        left: 0;
        background-color: #037FFF;
        width: 7rem;
        height: .4rem;
        border-radius: 50px;
    }

`


export const ProjectsCard = styled.div`
    box-shadow: 0 0 10px #0381ff;
    background: #252525;
    border-radius: 5px;
    overflow: hidden;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 992px){
        
    }

    @media screen and (max-width: 768px){

    }
`

export const ProImgContent = styled.div`
    border-bottom: 8px solid #135ef3;
    overflow: hidden;
    max-height:200px;

    img{
        width: 100%;
        display: inline-block;
        transition: all 0.4s ease;
    }
    img:hover{
        transform: scale(1.2);
    }
`


export const ProBtn = styled.div`
    display: flex;
    align-items: flex-end;
    -moz-box-flex: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    list-style: outside none none;
`



export const ItemCont = styled.div`
    padding: 1.5rem;
    text-align:center;

`

export const ProjectsH3 = styled.h3`
    font-weight: 400;
    font-size: 1.4rem;
    color: #64ffda;

`

export const ProjectsP = styled.p`
    font-size: 1.05rem;
    color: #d0d0d0;
    line-height: 1.7;
    padding: 0.6rem 0;

`

export const ViewButton = styled.a`
    border: none;
    margin: 1rem 10px;
    border-radius: 35px;
    background: var(--green);
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background:linear-gradient(to right, #ff729a, #d30000);
    color: #f7ffff;
    transition: .5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: 20px;


    &:hover:before {
        width: 198%;
    }
    
    &:hover{
        color:#d30000;
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

`
export const VisitButton = styled.a`
    
    border: none;
    margin: 1rem 10px;
    border-radius: 35px;
    background: var(--green);
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background:linear-gradient(to right, #ff729a, #d30000);
    color: #f7ffff;
    transition: .5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: 20px;


    &:hover:before {
        width: 198%;
    }
    
    &:hover{
        color:#d30000;
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


`
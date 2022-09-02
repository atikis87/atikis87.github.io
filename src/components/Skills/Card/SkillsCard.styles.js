import styled from 'styled-components';



export const SkillsBox = styled.div`
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
    word-wrap: break-word;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
    }


`

export const AllCards = styled.div`
    display: block;
    flex-flow: row wrap;
    

`

export const CardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around !important;

    @media screen and (max-width: 1600px){
        width: 95vw;
    }

    @media screen and (max-width: 480px){
        width: 88vw;
    }



`

export const CardCol = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex:100%;
    }

`

export const CardInfo = styled.div`
    transition: transform 0.3s;
    position: relative;
    display: block;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    /*background-color: #fff;*/
    background-color: #1a1a1a;
    box-shadow: 0 0 15px #0381ff;
    color:#fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin: .5rem !important;
    max-height:100%;

    @media screen and (max-width: 1024px){
        max-width: 100%;
    }

    &:hover{
        transform: scale(1.05);
    }
`

export const CardBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    width:100%;


`

export const CardTitle = styled.div`
    font-size: 2em;
    font-weight: 700;
    text-align: center !important;
    margin-bottom: .75rem;
    cursor: pointer;

`

export const CardText = styled.div`
    margin-bottom: 0;
    justify-content: flex-start !important;
    /*display: flex !important;*/
    
`

export const SkillsSpan = styled.div`
    padding: .5rem !important;
    background-color:#5e5e5e;

    a{
        text-decoration: none !important;
        color: #fff !important;
    }

`

export const SkillsImage = styled.img`
    width: 3em;
    margin: .25rem !important;
    vertical-align: middle;
    border-style: none;
    color: #fff !important;

`


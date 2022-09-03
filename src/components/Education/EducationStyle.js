import styled from 'styled-components';


export const ExpSection = styled.div`
    width: 90vw;
    padding: 3rem 0 2.5rem 0;
    margin: 0 auto;
`

export const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: auto;
  padding: 30px 40px;
`

export const Block = styled.div`
    width: calc(50% - 20px);
    background-color: #fff;
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 30px;
    position: relative;

    h3{
    font-size: 16px;
    margin: 10px 0;
    }

    p{
    font-size: 15px;
    color: #444;
    }

    :before {
        content: "";
        position: absolute;
        width: 1px;
        height: 112%;
        background-color: #ddd;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
    }

    &:after{
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #03b8fa;
        left: -28px;
        top: 30px;
        border-radius: 50%;
  }




`









/*
export const ExpRow = styled.div`
    padding:80px 20px 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 992px){
            width: 88vw;
    }
    @media screen and (min-width: 1200px){
            width: 85vw;
    }
    @media screen and (max-width: 480px){
            display:block;
    }



`
export const ExpItem = styled.div`
    height:100px;
    background-color: rgb(20, 27, 37);
    transition: transform 0.3s;
    padding: 0 2.5rem;
    margin: 2rem;
    border-left: 1px solid #fff;
    position: relative;
    color: #d0d0d0;
    border: none;
    box-shadow: 0 0.35em 1.5em 0 #03b8fa, 0 0.4em 1.45em 0 #135ef3 !important;

    h2{
        padding: 0.6rem 0;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.2rem;
        
    }

    span{
        background: #252525;
        border-radius: 15px;
        padding: 0.25rem 0.7rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
    }

    p{
        line-height: 1.7;
        font-size: 1rem;
        padding-bottom: 0;
    }

    &:hover{
        transform: scale(1.05);
        cursor:pointer;
    }
    
    @media screen and (max-width: 480px){
        height:200px;
    }

`

export const ExpIcon = styled.div`
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    background: #72b626;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -25px;

`


*/
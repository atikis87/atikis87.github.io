import styled from 'styled-components';


export const ExpSection = styled.div`
    padding: 3rem 0 2.5rem 0;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,27,37,1) 100%);
`

export const TimeLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: auto;
  padding: 30px 40px;
  color: #d0d0d0;

  @media screen and (max-width: 600px){
        padding: 10px 20px;
    }
`

export const Block = styled.div`
    width: calc(50% - 20px);
    background-color: #fff;
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 30px;
    position: relative;
    background: #141b25;

    h3{
    font-size: 16px;
    margin: 10px 0;
    }

    h4{
    font-weight:200;
    }

    p{
    font-size: 15px;
    color: #03b8fa;
    font-weight:bold;
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

    @media screen and (max-width: 980px){
    width: calc(100% - 20px);
    margin-left: auto;
    }
`

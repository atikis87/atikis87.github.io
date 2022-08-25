import styled from 'styled-components';


export const SkillsSection = styled.section`
    padding:80px 20px 80px;
    background: linear-gradient(180deg, rgba(20,27,37,1) 8%, rgba(32,86,167,1) 49%, rgba(5,4,7,1) 92%);

    @media screen and (max-width: 480px){
       
    }

`

export const SkillsWrapper = styled.div`
    max-width: 1140px;
    margin:0 auto;
    height:100%;


`

export const SkillsRow = styled.div`  // row
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top:30px;
  color:#eaeaea;

  @media screen and (max-width: 480px){
    display: block;
    }
`


export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

export const SkillsBox = styled.div` //orange column
    height: 100%;

    h3{
        font-size:30px;
        line-height: 40px;
        text-align:center;
        font-size:400;
        margin-bottom:60px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color:#fff;

    }
`

export const SkillsInner = styled.div`
    font-size:30px;
    line-height: 40px;
    text-align: center;
    font-weight:400;
    margin-bottom:60px;
    color:#fff;
    /*border:2px solid #fff;*/
`






export const ListL = styled.div`
    width: 100%;
    height:100%;
    display: block;
    font-size:15px;
    border-radius: 5px;
    background-color: #1a1a1a;
    border: none;
    box-shadow: 0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);
    
`

export const ListR = styled.div`
    width: 100%;
    height:100%;
    display: block;
    font-size:15px;
    border-radius: 5px;
    border: none;
    
    
`


export const ListInner = styled.div`
    padding: 14px;
    width: 90%;
    height: 100%;
    margin-top: 2%;

`

export const SkillsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h4{
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        width:20px;
        height:20px;
        position: relative;
    }
`


export const ImgBox = styled.div`
    width: 40px;
    height: 40px;
    text-align:center;


    img{
        text-align:center;
        width:100%;
        height:100%
    }

`


// For Progress
export const ProgressWrapper = styled.div`
    background-color: #1b1b1b;
    border:1px solid #037FFF;
	border-radius: 10px;
	position: relative;
    padding: 0 auto;
	margin: 15px 0;
	height: 10px;
	width: 80%;
`

export const ProgressDiv = styled.div`
    background: linear-gradient(to right, #008aff,#00ffe7);
    animation: animate 15s linear infinite;
	border-radius: 20px;
	//color: #fff;
	display: flex;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
@keyframes animate
{
    0%,100%
    {
        filter: hue-rotate(0deg);
    }
    50%
    {
        filter: hue-rotate(360deg);
    }
}
`
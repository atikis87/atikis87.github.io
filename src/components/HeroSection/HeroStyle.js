import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg,rgba(0,0,0,0.2) 0% ,rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  @media (max-width: 960px) {
        padding: 0px 20px;
    }

  @media (max-width: 768px) {
        padding: 0px 20px;
    }

`

export const HeroH2 = styled.h2`
    line-height: 0.9;
    color: #16d4ed;
    margin-top: 10px;
    font-size: clamp(40px, 8vw, 80px);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const HeroName = styled.h1`
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    color: #ed1649;
    line-height: 1.1;
	transform: scale(1);
	animation: pulse 2s infinite;

`

export const HeroH3 = styled.h3`
    text-align: center;
    margin: 0 0 20px 4px;
    color: #16d4ed;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: clamp(20px, 5vw, 16px);
    font-weight: 400;

        @media screen and (max-width: 768px){
            font-size: 18px;
            margin: 0 0 20px 2px;
        }

        @media screen and (max-width: 480px){
            font-size: 18px;
            margin: 0 0 20px 2px;
        }
`

export const HeroP = styled.p`
    margin: 20px 0 0;
    color: #f7ffff;
    font-size: 20px;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

        @media screen and (max-width: 768px){
            font-size: 20px;
        }
        
        @media screen and (max-width: 480px){
            font-size: 18px;
        }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration:none;

    &:hover{
        transform: translateX(3px);
        transition: all 0.1s ease-in-out;
    }
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size:20px;
`

export const Send = styled.a`
    text-decoration:none;
    outline: none;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #010606;
`

export const Arrow = styled.span`
  align-self: end;
  width: 50%;
  height: 10%;
  margin-bottom: 4em;
  position: absolute;
  left:0;
  bottom:0px;
  border-right: 2px solid  #037FFF;
  animation: arrow-animation ease 1.5s;

  &:after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11px 11px 0px 11px;
    border-color: #037FFF transparent transparent transparent;
    right: -0.7em;
    bottom: -2px;

  }

  @keyframes arrow-animation{
  0%{
      bottom: 70px;
      opacity: 0.2;
  }
  100%{
      bottom: 5px;
      opacity: 1;
  }
}
`
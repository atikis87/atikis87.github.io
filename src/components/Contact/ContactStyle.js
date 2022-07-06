import styled from 'styled-components';

export const ContactSection = styled.section`
    position: relative;
`

export const ContactWrapper = styled.div`
    margin: 0 auto;
    padding: 5rem 0 2.5rem 0;
    width: 85vw;
    margin-top:50px;
    
    @media screen and (min-width: 992px){
        width: 88vw;
    }
    @media screen and (min-width: 1200px){
        width: 85vw;
    }
`


export const ContactTitle = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    color: #a4acc4;
    letter-spacing: 3px;
`

export const ContactSpan = styled.span`
    color:#037FFF;
    text-shadow: 0 0 5px #037FFF;
    top:100%;
    left: 0;
    font-size: 30px;
`




export const ProgressL = styled.div`
    position: relative;
    top:10px;
    left:20px;
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

export const ContactRow = styled.div`
    display: grid;

    @media screen and (min-width: 992px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

`

export const RowLeft = styled.div`
    margin: 2rem 0;
    color:#d0d0d0;

    h2{
        text-transform: uppercase;
        padding: 0.6rem 0;
    }
`

export const RowRight = styled.div`
    margin: 2rem 0;
    color:#d0d0d0;

`



export const ContactForm = styled.form`
    display: grid;


    input{
        width: 100%;
        margin: 1rem 0;
        background: #252525;
        border: 2px solid transparent;
        font-size: 1rem;
        padding: 0.8rem 1rem;
        border-radius: 25px;
        outline: 0;
        color: #fff;
    }
`


export const Messagelink = styled.button`
    cursor: pointer;
    border: 2px solid black;
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











export const Area = styled.textarea`
    width: 100%;
    display:flex;
    margin: 1rem 0;
    background: #252525;
    border: 2px solid transparent;
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 25px;
    outline: 0;
    color: #fff;
`




export const TextP = styled.div`
    font-size: 1.05rem;
    color: #d0d0d0;
    line-height: 1.7;
`

export const ContactInfo = styled.div`
    margin: 1rem 0;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;

    h3{
        font-size: 1rem;
        font-weight: 400;
    }

`

export const ContSpan = styled.span`
    font-size: 2.4rem;
    margin-right: 1.2rem;
    color:#037FFF;
`

export const ContText = styled.span`
    text-transform: uppercase;
    color:#d30000;
    font-size: 2.0rem;
`

export const SocialIcon = styled.a`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    color: #fff;
    background:linear-gradient(to right, #03b8fa, #135ef3);
    text-align: center;
    line-height: 57px;
    margin: 1px 10px;
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










export const ContactBg = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const ContactVideo = styled.video`
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
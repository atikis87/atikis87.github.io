import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import ReactPlayer from 'react-player';
//import logo from './logo.jpeg'; //


const Background = styled.aside`
  position:fixed;
  width:100%;
  height:100%;
  display:grid; /* grid volt */
  top: 0;
  left: 0;
  background:rgba(0, 0, 0, 0.685);
  z-index: 4;
  place-items: center;

`

const ModalWrapper = styled.div`

  box-shadow: 0 0.35em 1.5em 0 #03b8fa, 0 0.4em 1.45em 0 #135ef3 !important;
  background: #0d1218;
  color: #fff;
  max-width:1100px;
  width: 90vw;
  height:60vh;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 1fr auto;
  place-items: center;
  position: relative;

  @media screen and (max-width: 1024px){
    height:45vh;
    }

  @media screen and (max-width: 768px){
    height:40vh;
    }
`

const ModalVideo = styled.div`
  width:100%;
  height:100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  outline:none;
  transition: all 0.3s;

`

const ModalContent = styled.div`
  display: grid;
  max-width:200px;
  padding: 20px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  h1 {
    text-align: center;
    text-shadow:2px 4px 15px #03b8fa;
    margin-bottom: 10px;
  }
  p {
    max-width: 340px;
    margin-bottom: 60px;
    font-size: 16px;
    color:#d30000;
    line-height:24px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px){
    display:none; 

  }

`;

const CloseModalButton = styled(MdClose)`
  position: absolute;
  display: block;
  top: 0px;
  width:30px;
  height:30px;
  right: 0px;
  color: #037FFF;
  cursor: pointer;

  &:hover{
    color:#d30000;
  }

`;


const MoreInfo = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );


    return (
        <>
          {showModal ? (
            <Background onClick={closeModal} ref={modalRef}>
              <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                  <ModalVideo>
                    <ReactPlayer
                    playing={true}
                    width='100%'
                    height='100%'
                    controls url='https://www.youtube.com' />
                  </ModalVideo>
                  <ModalContent>
                    <h1>Welcome</h1>
                    <p>Watch my video</p>
                  </ModalContent>
                  <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                  />
                </ModalWrapper>
              </animated.div>
            </Background>
          ) : null}
        </>
      );
}

export default MoreInfo;


/**
 * <ModalImg src={require('../../images/modal.jpg')} alt='camera' />
 */

/**
 * 
 * const ModalWrapper = styled.div`
    width:1200px;
    height:600px;
    margin:0 auto;
    box-shadow: 0px 0px 15px #64ffda;
    background:#fff;
    color:#000;
    display: flex;
    grid-template-columns: 1fr, 1fr;
    position: fixed;
    justify-content: center;
    z-index: auto;
    border-radius:10px;




    width:1200px;
    height:600px;
    margin:0 auto;
    box-shadow: 0px 0px 15px #64ffda;
    background:#03b8fa;
    color:#000;
    display: flex;
    grid-template-columns: 1fr, 1fr;
    position: fixed;
    justify-content: center;
    border-radius:10px;
    position:relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;


      @media screen and (max-width: 960px) {
      height:75%auto;
  	  margin:5% auto;
      width:85%;

      }


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;






`


                  <ModalContent>
                    <h1>Welcome</h1>
                    <p>I'm ready change everything</p>
                    <button>Join Now</button>
                  </ModalContent>





FIXEN VOLT

const Background = styled.aside`
  z-index: 4;
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.685);
  position:fixed;
  display:grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`

const ModalWrapper = styled.div`
  width: 1200px;
  height: 600px;
  box-shadow: 0px 0px 15px #64ffda;
  background: #fff;
  color: #000;
  display: grid;
  margin:0 auto;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  justify-content: center;

  



`

const ModalVideo = styled.div`
    width:100%;
    height:100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    cursor:pointer;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }


`;

const CloseModalButton = styled(MdClose)`
  position: absolute;
  display: block;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;















 */
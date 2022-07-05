import React, {useState} from 'react';
import MoreInfo from './MoreInfo';
import aboutPhoto from '../../images/Outline02x.png';
import {FaTelegram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {AboutSection,
    AboutWrapper,
    RowOne,
    AboutTitle,
    MySpan,
    ProgressLine,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    BtnLink,
    BtnIcon} from './AboutStyle';



const About = (aHomeObject) =>
{

    const [showModal, setShowModal] = useState(false)


    const openModal = () =>{
        setShowModal(prev => !prev)
        console.log("hello")
    }


return (
    <AboutSection id="about">
    <MoreInfo showModal={showModal} setShowModal={setShowModal} />
        <AboutWrapper>
            <RowOne>
                <AboutTitle>About <MySpan>Me</MySpan>
                    <ProgressLine></ProgressLine>
                </AboutTitle>
            </RowOne>

            <InfoRow imgStart={aHomeObject.imgStart}>
                    <Column2>
                        <ImgWrap>
                            <Img src={aboutPhoto} alt={aHomeObject.alt}/>
                        </ImgWrap>
                    </Column2>
                <Column1>
                    <TextWrapper>
                        <TopLine>{aHomeObject.topLine}</TopLine>
                        <Heading lightText={aHomeObject.lightText}>{aHomeObject.headline}
                        </Heading>
                        <Subtitle darkText={aHomeObject.darkText}>{aHomeObject.descreption}
                        </Subtitle>
                            <BtnWrap>
                                <BtnLink onClick={openModal}>Video coming soon</BtnLink>
                                <BtnIcon href="https://www.linkedin.com/in/attila-kiss-2330791b4/"><FaLinkedin/></BtnIcon>
                                <BtnIcon href="https://github.com/atikis87"><FaGithub/></BtnIcon>
                                <BtnIcon href="mailto:ati.radeone@gmail.com"><FaTelegram/></BtnIcon>
                            </BtnWrap>
                    </TextWrapper>
                </Column1>
            </InfoRow>
        </AboutWrapper>
    </AboutSection>
    )
}

export default About;

/*
Modal.setAppElement('#root');

    const [modalIsOpen, setModalIsOpen] = useState(false)

            <BtnLink onClick={() => setModalIsOpen(true)}>More Info</BtnLink>


            <Modal 
            isOpen={modalIsOpen} 
            shouldCloseOnOverlayClick={false} 
            onRequestClose={() => setModalIsOpen(false)}>
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>




*/
import React from 'react';
import {ContactSection, 
        ContactWrapper,
        ContactTitle, 
        ContactSpan, 
        ContactRow, 
        ProgressL, 
        RowLeft, 
        RowRight,
        TextP,
        ContactInfo,
        ContText,
        ContSpan,
        SocialIcon,
        ContactForm,
        Area,
        Messagelink} from './ContactStyle';
import {FaRegEnvelopeOpen,
        FaGithub, 
        FaLinkedin,
        FaTelegram} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import {RowOne,
        BtnWrap} from '../About/AboutStyle';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_2z6lxgv', e.target, 'eSPSydJ50mYcyNoj_')
        .then((result) => {
            console.log(result.text);
            alert("Thank you for your message, I will get back to you in ASAP.")
        }, (error) => {
            console.log(error.text);
            alert("Something wrong, please try again!")
        });
        e.target.reset()
    }

    return (
    <ContactSection id="contact">
        <ContactWrapper>
            <RowOne>
                <ContactTitle>Get in <ContactSpan>Touch</ContactSpan>
                    <ProgressL></ProgressL>
                </ContactTitle>
            </RowOne>
            <ContactRow>
                <RowLeft>
                        <h2>feel free to ask me!</h2>
                        <TextP>Leave your message here. I will get back to you ASAP.</TextP>
                    <ContactInfo>
                        <ContSpan>
                            <FaRegEnvelopeOpen/>
                        </ContSpan>
                        <h3>
                            <ContText>Mail Me</ContText> <br />
                        </h3>
                    </ContactInfo>
                    <BtnWrap>
                        <SocialIcon href="https://github.com/atikis87" target="_blank" aria-label="Github"><FaGithub/></SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/attila-kiss-2330791b4/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIcon>
                        <SocialIcon href="mailto:ati.radeone@gmail.com" target="_blank" aria-label="Mail"><FaTelegram/></SocialIcon>
                    </BtnWrap>
                </RowLeft>
                <RowRight>
                    <ContactForm onSubmit={sendEmail}>
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        <Area id="" rows="5" placeholder="Your message" name="message"></Area>
                        <BtnWrap>
                            <Messagelink type="submit" value="Send Message">Send message</Messagelink>
                        </BtnWrap>
                    </ContactForm>
                </RowRight>
            </ContactRow>
        </ContactWrapper>
    </ContactSection>
    )
}
export default Contact;
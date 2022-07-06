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
        FaYoutube} from 'react-icons/fa';
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
                        <SocialIcon href="/"><FaGithub/></SocialIcon>
                        <SocialIcon href="/"><FaLinkedin/></SocialIcon>
                        <SocialIcon href="/"><FaYoutube/></SocialIcon>
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




/*
                <RowRight onSubmit={sendEmail}>
                        <ContactForm>
                            <input type="text" placeholder="Name" name="name"></input>
                            <input type="email" placeholder="Email" name="email"></input>
                            <input type="text" placeholder="Subject" name="subject"></input>
                        </ContactForm>
                        <Area cols="30" rows="5" placeholder="Your message" name="message"></Area>
                        <BtnWrap>
                            <BtnLink type="submit" value="Send Message">send message</BtnLink>
                        </BtnWrap>
                </RowRight>







*/
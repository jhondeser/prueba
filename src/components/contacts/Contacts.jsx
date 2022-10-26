import React from 'react'
import './Contacts.css'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v7wr7cv', 'template_v4au0jp', form.current, 'HEK6_nOy_cBHseZRh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contacts">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <div className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>Jhonatan.mog2829@gmail.com</h5>
            <a href="mailto:jhonatan.mog2829@gmail.com" target="_blank">Send a Message</a>
          </div>
          <div className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+34 661409658</h5>
            <a href="https://wa.me/34661409658" target="_blank">Send a Message</a>
          </div>
        </div>
        <form ref = {form} onSubmit = {sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder="Your message"></textarea>
          <button type="submit" class="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
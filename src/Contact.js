import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('myService', 'template_3mbcrfk', e.target, 'Gj73Mpv5pgaQD134m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <div className='contact component__space' id='Contact'>
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                    <div className='col__2'></div>
                        <h1 className="hire__text">
                            Lets
                            <span className='green__text'>get</span>
                            in
                            <span className='green__text'>touch</span>    
                        </h1>
                        <p className="hire__text white"> Connect with me via email:</p>
                           <p className="hire__text white"><strong></strong><strong>inbalbu2@gmail.com</strong></p>
                    </div>
                    <form className="input__box" onSubmit={sendEmail}>
                        <input type="text" className='contact name' placeholder='Name:' name='name' />
                        <input type="text" className='contact email' placeholder='Email:' name='email' />
                        <input type="text" className='contact subject' placeholder='Write a Subject:' name='subject' />
                        <textarea  id="message" placeholder="Write Your message" name="message"></textarea>
                        <button className='btn contact pointer' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
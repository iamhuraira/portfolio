import React, { useRef , useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'; 
 
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r0ashvi', 'template_6y0h18y', form.current, 'drxmtVsD-n7h3Ptd7')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
      <div className="contact-form" id='Contact'>
          <div className="w-left">
              <div className="awesome">
                  <span>Get in touch</span>
                  <span>Contact me</span>
                  <div className="blur s-blur1" style={{bacground : '#ABF1FF94'}}></div>
              </div>
          </div>
          <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" placeholder='Name' className='user' id="" />
                  <input type="email" name="user_email" placeholder='Email' className='user' id="" />
                  <textarea name="message" className='user' placeholder='Message'></textarea>
                  <input type="submit" value="Send" className='button' />
                  <span>{done && "Thanks for contacting me! "}</span>
                  <div className="blur c-blur1" style={{ bacground: 'var(--purple)' }}></div>
              </form>
          </div>
    </div>
  )
}

export default Contact
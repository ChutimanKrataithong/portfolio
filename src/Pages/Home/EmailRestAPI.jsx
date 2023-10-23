import axios from 'axios';
import React, { useState } from 'react'

const EmailRestAPI = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_y18g4q5';
    const templateId = 'template_97f6thv';
    const publicKey = 'FL7jZbSCeMvVszCQV';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
        phone: phone,
        subject: subject,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setSubject('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            You can contact me through the channels below or any other channels I have provided.
          </p>
          <br />
          <p className="text-lg">
            Gmail : chutiman.krataithong@gmail.com
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact--form--container">
            <div className="container">
                <label htmlFor="name" className="contact--label">
                    <span className="text-md">Name</span>
                    <input
                        type="text"
                        className="contact--input text-md"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor="last-name" className="contact--label">
                    <span className="text-md">Phone number</span>
                    <input
                        type="number"
                        className="contact--input text-md"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
            </div>
            
            <label htmlFor="email" className="contact--label">
                <span className="text-md">Email</span>
                <textarea
                    type="email"
                    className="contact--input text-md"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>

            <label htmlFor="choode-topic" className="contact--label">
                <span className="text-md">Subject</span>
                <textarea
                    className="contact--input text-md"
                    placeholder='Subject'
                    cols="15"
                    rows="5"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                ></textarea>  
            </label>

            <label htmlFor="choode-topic" className="contact--label">
                <span className="text-md">Message</span>
                <textarea
                    className="contact--input text-md"
                    placeholder='Your message'
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>  
            </label>

            <div>
                <button className="btn btn-primary contact--form--btn">Submit</button>
            </div> 
        </form>
    </section>
  )
}

export default EmailRestAPI
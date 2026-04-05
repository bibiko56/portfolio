import React from 'react'
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const domRef = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p5goper', 
      'template_lzzoufq', 
      form.current, 
      'O3ygxYwJ62R6lStcX'
    )
    .then((result) => {
        alert("Message sent successfully!");
        e.target.reset(); // Clears the form after sending
    }, (error) => {
        alert("Failed to send message, please try again.");
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.15 });

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  return (
    // The main section handles the "Slide Up" animation
        <section className="contact-section">
      <div className="project">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact-box-border">
        {/* CRITICAL: Add the 'ref' and 'name' attributes below */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Emanuel Mosqueda" required />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="reply_to" placeholder="hello@example.com" required />
            </div>
          </div>
          
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Let's build something together..." required></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact
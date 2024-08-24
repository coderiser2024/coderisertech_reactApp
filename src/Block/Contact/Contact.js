import React, { useState } from 'react';
import "./Contact.css";
import Hero from '../../Components/Hero';
import * as  constant from "../../Components/assets"
import Career from '../../Components/Career';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    queryType: 'General', // Default value for queryType
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'Full name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.mobileNumber) {
      formErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Mobile number is invalid';
    }
    if (!formData.queryType) formErrors.queryType = 'Query type is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const templateParams = {
        from_email: formData.email,
        from_name: formData.fullName,
        name: formData.fullName,
        email: formData.email,
        phone: formData.mobileNumber,
        address: formData.address,
        queryType: formData.queryType,
        message: formData.message
      };
      emailjs.send('service_r1917rk', 'template_nmvgdsl', templateParams, 'aERJR3f8ZimX82GEg')
        .then((result) => {
          console.log('Success:', result.text);
          setFormData({ fullName: '', email: '', mobileNumber: '', queryType: 'General', address: '', message: '' }); // Reset form with default values
          alert('Message sent successfully!');
        }, (error) => {
          setFormData({ fullName: '', email: '', mobileNumber: '', queryType: 'General', address: '', message: '' }); // Reset form with default values
          console.log('Error:', error.text);
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="page">
      <Hero
        herosVideo={constant.ContactBg}
        heading={'Get in Touch'}
        subheading={'Get in touch through the form below for any inquiries or to start a project together'}
      />
      <section className="contact-form">
        <div className="container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    placeholder='Full name'
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'error' : ''}
                  />
                  {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input
                    placeholder='Mobile number'
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={errors.mobileNumber ? 'error' : ''}
                  />
                  {errors.mobileNumber && <p className="error-message">{errors.mobileNumber}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    placeholder='Address'
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <p className="error-message">{errors.address}</p>}
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="queryType">Query Type:</label>
                  <select
                    id="queryType"
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className={errors.queryType ? 'error' : ''}
                  >
                    <option value="Select">Select query</option>
                    <option value="General">General</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.queryType && <p className="error-message">{errors.queryType}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    style={{ width: '100%' }} /* Set textarea width to 100% */
                  />
                  {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <section className='career-contaoner'>
        <Career />
      </section>
    </div>
  );
}

export default ContactForm;

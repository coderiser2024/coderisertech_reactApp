import React, { Component } from 'react'
import "./Header.css";
import * as  constant from "../Components/assets";
export class Career extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className='aboutTxtclient'>For Reach out</h2>
                    <p className='aboutTxt'>For any discussion: Reach out to us at mail, and our sales representatives will contact you within 24 hours.</p>
                    <p className='aboutTxt'>With over 5 years of experience, 100+ projects delivered, a 98% client satisfaction rate, and a 100% happy workforce, CoderiserTech is your trusted partner for exceptional tech solutions.</p>
                </div>
                <div className="card-container">
                    <div className='left-card'>
                        <div className="card-section">
                            <img src={constant.CareerIcon} alt="img" className='card-icon' />
                            <div className="card-text">
                                <h3>Career</h3>
                                <p>info@coderisertech.com</p>
                            </div>
                        </div>
                        <div className="card-section">
                            <img src={constant.BusinessIcon} alt="img" className='card-icon' />
                            <div className="card-text">
                                <h3>New Business</h3>
                                <p>contact@coderisertech.com</p>
                            </div>
                        </div>
                        <div class='card-bottom-section' >
                            <div className="card-section1">
                                <img src={constant.ProjectEnquiry} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>Project Enquiries</h3>
                                    <p>contact@coderisertech.com</p>
                                </div>
                            </div>
                            <div className="card-section2">
                                <img src={constant.EnquiryIcon} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>General Enquiries</h3>
                                    <p>info@coderisertech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='left-card'>
                        <div class='card-bottom-section1' >
                            <div className="card-section3">
                                <img src={constant.ProExperience} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>5 +</h3>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            <div className="card-section3">
                                <img src={constant.Delivered} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>100 +</h3>
                                    <p>Project Delivered</p>
                                </div>
                            </div>
                        </div>
                        <div class='card-bottom-section1' >
                            <div className="card-section3">
                                <img src={constant.HouseTalent} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>42 +</h3>
                                    <p>In-House Talent</p>
                                </div>
                            </div>
                            <div className="card-section3">
                                <img src={constant.Satisfaction} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>98 %</h3>
                                    <p>Client satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div class='card-bottom-section1' >
                            <div className="card-section3">
                                <img src={constant.ClientRating} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>5 *</h3>
                                    <p>Customer rating</p>
                                </div>
                            </div>
                            <div className="card-section3">
                                <img src={constant.HappyEmployee} alt="img" className='card-icon' />
                                <div className="card-text">
                                    <h3>100 %</h3>
                                    <p>Happy Employee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Career

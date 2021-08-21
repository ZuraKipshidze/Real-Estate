import React from 'react'
import "./ContactCss.css"
import { Button } from './Button';

const ContactInfo = () => {

    return (

        <div className="contact">
             
                <div className="section-center clearfix">
                    
                    <article className="contact-info">
                        
                        <div className="contact-item">
                            <h3 className="contact-title"><span className="contact-icon"><i className="fas fa-location-arrow"></i>
                            </span>address</h3>
                            <h3 className="contact-text">
                                523 N Fairfav Ave, Los Angeles, CA 90048
                            </h3>
                        </div>
                    
                    
                        <div className="contact-item">
                            <h3 className="contact-title"><span className="contact-icon"><i className="fas fa-envelope"></i>
                                </span>Email</h3>
                            <h3 className="contact-text">
                                email@email.com
                            </h3>
                        </div>
        
                        <div className="contact-item">
                            <h3 className="contact-title"><span className="contact-icon"><i className="fas fa-phone"></i>
                                </span>Phone</h3>
                            <h3 className="contact-text">
                                + 123 456 789
                            </h3>
                        </div>
                 
                    </article>

                    <article className="contact-form">
                        <form className="form-group">
                            <input type="text" name="name" placeholder="name" className="form-control"/>
                            <input type="email" name="email" placeholder="email" className="form-control"/>
                            <textarea name="message" rows="5" className="form-control" placeholder="message"></textarea>
                            <Button primary="true">Send</Button>
                        </form>

                    </article>
                </div>
        </div>
    )
};

export default ContactInfo;

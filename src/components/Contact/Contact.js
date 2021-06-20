import React from "react"
import { Button } from 'react-bootstrap';

const Contact = () => {
    return(
        <div className = "contactSection">
            <div className = "contactTitle" id = "contactID">
                <h2> Get in Touch </h2> 
            </div>
            <hr/>
            <div className = "contactText">
                I'm currently looking for new job opportunities, so if you'd like to discuss something, my inbox is open! 
                Otherwise, if you just want to chat, feel free to reach out as well! 
            </div>
            <a href="mailto:anahuja@ucsc.edu"> <Button id="btnOutlook" className = "contactButton"> Contact Me </Button> </a>
        </div>
    )
}

export default Contact;
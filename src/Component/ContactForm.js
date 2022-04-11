import React, { useState } from 'react'
import mail from '../img/mail.png'
import phone from '../img/phone.png'
import location from '../img/location.png'


function ContactForm() {
    const [name,setName]=useState('')
    const [num,setNum]=useState('')
    const [email,setEmail]=useState('')
    const [msg,setMsg]=useState('')

    const HandleSubmit = (e)=>{
        e.name=[e.value]
            
    }


    return (
        <div>
            <p className="banner2-content-head center"  >Contact Me&nbsp;&nbsp;</p>

            <div className="contact-menu">


                <div className="contact-box-1">
                    <div className="box-1 content1">
                        <h2>Let's Connect</h2>
                    </div>

                    <div className="box-1 content2" >
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta…

                        </p>
                    </div>
                    <div className="box-1 table">
                        <table>
                            <thead>
                                <tr>
                                    <td> <img src={mail} alt="" /> </td>
                                    <td className="table-text">rinkal95@gmail.com</td>
                                </tr>
                            </thead>

                            <thead>
                                <tr>
                                    <td> <img src={phone} alt="" /></td>
                                    <td className="table-text">(91) 844 57 73987</td>
                                </tr>
                            </thead>

                            <thead>
                                <tr>
                                    <td> <img src={location} alt="" /></td>
                                    <td className="table-text"> Etawah,U.P,IN </td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>

                <div className="contact-form">
                    <div className="form-content">
                        <form action="">
                            <div className="form-head">
                                <h2>Send me a message</h2>
                            </div>
                            <label htmlFor="name" className="text-resize"> First & Last Name <span className="star">*</span></label> <br />
                            <input type="text" required name="name" id="name" className="input-area" value={name} placeholder="Enter your complete Name" /><br />

                            <label htmlFor="phone" className="text-resize"> Phone Number <span className="star">*</span></label><br />
                            <input type="number" required name="phone" id="phone" value={num} className="input-area" placeholder="Enter your Number" /><br />

                            <label htmlFor="email" className="text-resize">Email address <span className="star">*</span></label><br />
                            <input type="email" required name="email" id="email" value={email} className="input-area" placeholder="Enter your mail id" /><br />

                            <label htmlFor="message" className="text-resize" >Message <span className="star">*</span></label><br />
                            <textarea name="message" required id="message" cols="37" rows="5" value={msg} placeholder="Your message here"></textarea><br />

                            <input type="submit" id="button" value="Send Message" onChange={HandleSubmit} />

                        </form>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default ContactForm
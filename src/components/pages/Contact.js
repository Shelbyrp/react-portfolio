import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formData;

    const handlePageForm = (e) => {
        e.preventDefault();
        console.log("formdata", formData);
        validateForm(formData);
        
        // setErrorMessage('Thank you for getting in touch. Someone will be in contact shortly.');

        // formData.contact = "";
        // formData.email = "";
        // formData.message = "";

    };

    function handleChange(e) {
        if (e.target.name === "name") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (e.target.name === 'message') {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }


    function validateForm(formData) {
        let formError = []
        if (!formData.name) {
            formError.push("Please add your name. ")
        }
        if (!formData.email) {
            formError.push("Please add a valid email. ")
        }
        if (!formData.message) {
            formError.push("Please add a message. ")
        }
        setErrorMessage(formError);
    }

    return (
        <div className="main-container">
            <section className="bgimage">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5">
                        </div>
                    </div>
                </div>
            </section>
            <div className="container wrapper">
                <form className="col-lg-10 col-md-10 col-sm-10 col-xs-10 mb-5">
                    <h2>Contact Us</h2>
                    <div>
                        <label className="col-sm-2" htmlFor="name">Name:</label>
                        <div className="col-sm-10">
                            <div>
                                <input name="name" className="form-control" type="text" defaultValue={name} id="name" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="col-sm-2">Email Address:</label>
                        <div className="col-sm-10">
                            <div>
                                <input className="form-control" name="email" type="email" id="email" defaultValue={email} onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="col-sm-2" >Message:</label>
                        <div>
                            <textarea className="form-control" name="message" rows="3" defaultValue={message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <div className="form-group pull-right">
                        <label className="col-sm-2 control-label"></label>
                        <div className="col-xs-1">
                            <button type="submit" className="btn btn-primary" onClick={handlePageForm}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

// eslint-disable-next-line no-lone-blocks
{/* <div class="row">
<h1 >Contact Me</h1>
<form>
    <div class="form-group">
        <label>
            Name:
<input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
            Email:
<input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
            Message:
<input type="text" name="message" onChange={handleChange} />
        </label>
        <button onClick={handlePageForm}>Contact Me</button>
    </div>
</form>
</div>  */}


// const handleChange = (e) => {
//     formData[e.target.name] = e.target.value;
//     setFormData(formData)
// }
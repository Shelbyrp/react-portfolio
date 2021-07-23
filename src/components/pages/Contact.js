import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const handlePageForm = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleChange = (e) => {
        formData[e.target.name] = e.target.value;
        setFormData(formData)
    }
    return (
        <div>
            <h1>Contact Me</h1>
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
        </div>
    );
}





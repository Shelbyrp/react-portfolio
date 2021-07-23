import React, { useState } from 'react';
import { checkEmail } from '../../utils/helper';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const handlePageForm = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    function handleChange(e) {

    }
    return (
        <div>
            <div class="container wrapper">
                <form>
                    <h2>Contact Us</h2>
                    <div>
                        <label class="col-sm-2" for="name">Name:</label>
                        <div class="col-sm-10">
                            <div>
                                <input name="name" class="form-control" type="text" id="name" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="col-sm-2">Email Address:</label>
                        <div class="col-sm-10">
                            <div>
                                <input class="form-control" name="Email" type="email" id="email" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="col-sm-2" >Message:</label>
                        <div>
                            <textarea class="form-control" name="message" rows="3" onChange={handleChange}></textarea>
                        </div>
                    </div>
                    {error && (
                        <div>
                            <p className="error-text">{error}</p>
                        </div>
                    )}
                    <div class="form-group pull-right">
                        <label class="col-sm-2 control-label"></label>
                        <div class="col-xs-1">
                            <button type="submit" class="btn btn-primary" onClick={handlePageForm}>Contact Me</button>
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
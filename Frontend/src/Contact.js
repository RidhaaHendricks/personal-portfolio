import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmail = (e) => {
        // e.preventDefault();

        emailjs.sendForm('service_cgo0n5j', 'template_re97vz2', e.target, 'user_6ub5UeT0FbCCRF2NHhNF9')
            .then((result) => {
                console.log(result.text);
                document.getElementsByClassName("form").reset();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contact-info">
            <h1>Email me</h1>
            <div className="contact-form">
                <form onSubmit={handleEmail} className="form">
                    <label>Name: </label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} name="name" />
                    <label>Email: </label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                    <textarea placeholder="Message" className="message" rows="8" value={message} onChange={(e) => setMessage(e.target.value)} name="message">

                    </textarea><br />
                    <button>Send</button>
                    {/* <input type="submit" name="Send"></input>  */}
                </form>
            </div>
        </div>
    );
}

export default Contact;

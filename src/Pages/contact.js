const Contact = () => {

    return (
        <div className="Contact pageWrapper">
            <div className="pageContentRight">
                <h2>Kontakt</h2>
                <div className="contactForm">
                <form className='contact-form' 
                >
               <label htmlFor='name'>
               <input type='text' id='name' name='from_name' placeholder='Name' 
               />
               </label>
               <label htmlFor='mail'>
               <input type='email' id='mail' name='reply_to' placeholder='E-mail' 
               />
               </label>
               <label htmlFor='mess'>
               <textarea placeholder='Your Message' id='mess' name='message' 
               />
               </label>
               <button type='submit'>Send</button>
           </form>
           </div>
            </div>
        </div>
    );
}
 
export default Contact;
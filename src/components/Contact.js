import '../App.css';

export default function Contact () {
    return (
        <form action="https://formsubmit.co/bjimenezp09@gmail.com" method="POST" className="card contact-form mt-5 card-body mx-auto border-0">
            <h3>Contact</h3>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name" placeholder="Name" required/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' id="email" placeholder="example@email.com" required/>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <input type="text" className="form-control" name='message' id="message" placeholder="Enter Message" required/>
            </div>
            <div class="form-contact-email">
                <button className="button btn btn-primary" type="submit" target="_blank">Submit</button>
            </div>
        </form>
    )
}
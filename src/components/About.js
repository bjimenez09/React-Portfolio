import '../App.css';
import logo from ''

export default function About () {
    return (
        <div className="card mt-5 mx-auto mb-5 border-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start" alt="Brandon Jimenez"/>
                </div>
                <div className="dark-background col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">I am a <span>web developer</span> and <span>designer</span> from Austin, Texas.</p>
                        <p className="card-text">About Description.</p>
                        <p className="card-text"><small className="text-muted">Last updated 1/3/2023</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
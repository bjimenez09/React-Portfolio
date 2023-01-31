import '../App.css';
import logo from '../assets/headshot.png'

export default function About () {
    return (
        <div className="card mt-5 mx-auto mb-5 border-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={logo} className="img-fluid rounded-start text-center" alt="Brandon Jimenez"/>
                </div>
                <div className="light-background col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">Native Austinite Web Developer and Apple Certified IT Professional.</p>
                        <p className="card-text"></p>
                        {/* <p className="card-text"><small className="text-muted">Date Modified</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
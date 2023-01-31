import page1 from "../assets/resume/resumeSnip.png";
import resumeDoc from "../assets/resume/BrandonResume.docx";
// import background from "../assets/macbook-pro-scaled.jpeg"

import "../App.css"

export default function Resume () {
    return (
        <section id="resume" className="resume container-fluid mt-4">
                <h2 className="mb-4">Resume</h2>
                <div>
                    <img src={page1} className="img-fluid mb-4" alt="resume"></img>
                </div>
                <div className="download-btn text-center mt-2">
                    <a href={resumeDoc} rel="noreferrer" target="_blank">
                        <button className="button btn btn-primary">
                            Download Resume
                        </button>
                    </a>
                </div>
            
        </section>
    )
}
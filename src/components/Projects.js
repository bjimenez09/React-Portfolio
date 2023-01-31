/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import projectImage1 from "../assets/projects/images/noteAppScreenshot.png";
import projectImage2 from "../assets/projects/images/weird-music-screenshot.png";


export default function Projects () {
    return (
        <div>
            <h2 className="projects-header mt-4 mb-4">Projects</h2>
            <div className="projects row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-auto mx-auto mt-4">
                <div className="col">
                    <div className="card border-0">
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={projectImage1} className="card-img-top" alt="Notes App"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">Notes App</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse1">
                                <div className="card card-body">
                                    Note Taker application that can be used to write and save notes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={projectImage2} className="card-img-top" alt="Project 2"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">Weird Music</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse2">
                                <div className="card card-body">
                                    A local Austin TX music chat app to connect music loving Texans.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )
}
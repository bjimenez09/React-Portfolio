import '../App.css';
// import image1 from "../assets/images/Weather-Dashboard.png";
// import image2 from "../assets/images/The-Book-Club.png";


export default function Projects () {
    return (
        <div>
            <h2 className="projects-header mt-4 mb-4">Projects</h2>
            <div className="projects row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-auto mx-auto mt-4">
                <div className="col">
                    <div className="card border-0">
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={image1} className="card-img-top" alt="Project 1"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">Project 1</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse1">
                                <div className="card card-body">
                                {/* {Project Description} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={image2} className="card-img-top" alt="Project 2"/>
                        </a>
                        <div className="card-body dark-background">
                            <h5 className="card-title dark-background">Project 2</h5>
                            <p>
                                <button className="button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Description
                                </button>
                            </p>
                            <div className="collapse" id="collapse2">
                                <div className="card card-body">
                                {/* {Project Description} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )
}
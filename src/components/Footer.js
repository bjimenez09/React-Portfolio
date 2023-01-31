import '../App.css';

export default function Footer () {

    return (
        <footer className="page-footer fixed-bottom">
            <div class="footer-logos">
				<div class="content">
					<a href="https://github.com/bjimenez09" target="_blank" rel="noopener noreferrer">
						<img src={require("../assets/logos/github-mark.png")} alt="Github"></img>
					</a>
					<a href="https://www.linkedin.com/in/bpjimenez" target="_blank" rel="noopener noreferrer">
						<img src={require("../assets/logos/LI-In-Bug.png")} alt="LinkedIn"></img>
					</a>
				</div>	
				<div className="footer-copyright text-center py-2">
					© 2023 Copyright:
					<a href='https://github.com/bjimenez09/react-portfolio'>
						{" "}
						Brandon Jimenez
					</a>
            	</div>
			</div>
        </footer>
    )
}
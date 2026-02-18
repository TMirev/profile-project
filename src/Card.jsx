import "./App.css";
import profilePic from "./assets/image.jpg";
import Certification from "./components/Certification";
import Skills from "./components/Skills";


function Card({ children }) {
    return (

        <div className="card">

            <div className="image-wrapper">
                <img className="card-image" src={profilePic} alt="profile picture" />
            </div>

            <div className="contacts-summary-box">
                <ul className="contact-list">
                    <h1>Tenko Mirev</h1>
                    <p>Front-End Developer</p>

                    <div className="contact-links">    
                        <h3>Contacts</h3>
                        <a href="mailto:t.d.mirev@gmail.com">t.d.mirev@gmail.com</a>
                        <br />

                        <a
                            href="https://www.linkedin.com/in/tenkomirev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                        <br />

                        <a
                            href="https://github.com/TMirev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Profile
                        </a>
                    </div>
                </ul>
            </div>


            <div className="contacts-summary-box">
                <h2>About me</h2>

                <p>Highly motivated Front-End Developer with around one year of hands-on experience gained through personal projects and small freelance work. Focused on creating reponsive, accesible and visually appealing web interfaces.</p>
                <p>Skilled in HTML, CSS, JavaScript and React with eperience building real projects such as Profile Page, Notes Board, Travel Website and digital Watch project.</p>
                <p>Combines clean code practices with a growing understanding of UI/UX principles to create intuitive user experience. Independent problem-solver, comfortable with modern workflows. Experienced in working with modern tools like React, Vite,Git/GitHub, VsCode and API integration.</p>

                <p>Passionate about improving performance, writing maintainable code, solving problems and building projects that demonstrates real developer thinking.</p>
                <p>Strong attention detail-oriented and commited to ongoing growth in Front-end development with a long-term role of becoming well-rounded software developer.</p>
            </div>


            <div className="contacts-summary-box">
                <Skills />
            </div>

            <div className="contacts-summary-box">
                <Certification />
            </div>


        </div>

    );
}

export default Card;
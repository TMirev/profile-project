import "./App.css";
import profilePic from "./assets/image.jpg";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function Card({ children }) {
    return (

        <div className="card">

            <div className="contacts-summary-box">

                <div className="image-wrapper-box">
                    <img className="card-image" src={profilePic} alt="profile picture" />
                </div>
            </div>

            <div className="contacts-summary-box">
                <div className="contact-list">
                    <h1>Tenko Mirev</h1>
                    <p>Front-End Developer</p>
                    <h3>Contacts</h3>


                    <div className="contact-links">

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
                            GitHub
                        </a>
                    </div>
                </div>
            </div>


            <div className="contacts-summary-box">
                <h2>About me</h2>

                <h3>Summary</h3>
                <p>Motivated Front-End Developer focused on creating reponsive, accesible and visually appealing web interfaces.</p>

                <h3>Technical Skills</h3>
                <p>Skilled in HTML, CSS, JavaScript and React with hands on experience building personal projects such as Profile Page, Notes Board, Travel Website and Digital Watch project</p>

                <h3>Approach and Practice</h3>
                <p>Combines clean code practices with a growing understanding of UI/UX principles to deliver easy to navigate user experience. Comfortable working with modern tools including React, GitHub, VsCode and CSS techniques including Flexbox, Grid and animations.</p>

                <h3>Values and Goals</h3>
                <p>Passionate about improving performance, writing maintainable code and building projects. Detail-oriented, I care about clarity, simplicity and creating interfaces that feel great to use. Commited to ongoing growth in Front-end development with a long-term role of becoming well-rounded software developer.</p>
            </div>

            <div className="contacts-summary-box">
                <Skills />
            </div>

            <div className="contacts-summary-box">
                <Projects />
            </div>

            <div className="contacts-summary-box">
                <Certification />
            </div>


        </div>

    );
}

export default Card;
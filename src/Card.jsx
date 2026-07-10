import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function Card({ children }) {
    return (

        <div className="card">

            <div className="contacts-summary-box">
                <div className="contact-list">
                    <h1>Tenko Mirev</h1>
                    <p>Software Developer</p>
                    <h3>Contacts</h3>


                    <div className="contact-links">

                        <a href="mailto:t.d.mirev@gmail.com">t.d.mirev@gmail.com</a>
                        <br />

                        <a
                            href="https://www.linkedin.com/in/tenkomirev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
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
                <p>- Software Developer with a solid foundation in modern web technologies and hands-on experience, user-focused applications.</p>
                    <p>- Strong foundation in programming, web development, and modern software practices.</p>
                    <p>- Developed multiple technical projects — including interactive web applications, responsive UI designs, and API-driven tools.</p>
                    <p>- JavaScript, HTML, CSS, Python, React, version control with Git/GitHub. Create clean, user-friendly, and visually engaging digital experiences.</p>
                    <p>- Work independently, manage tasks, debug effectively.</p>
                    <p>- Driven, adaptable, and eager to grow.</p>

                <h3>Technical Experience</h3>
                <p>- Building responsive, user-focused web application and websites.</p>
                <p>- Clean structure, components, and accessible semantic markup. Git and GitHub for version control, follow professional branching workflows and debug efifciently.</p>
                <p>- Project ProNotes with dynamic UI updates and localStorage, a multi-section Travel Website with polished responsive design and a Watch UI focused on visual consistency and layout precisions.</p>
                <p>- Attention to details and rely on strong understanding of modern front-end practices.</p>

            </div>

            <div className="contacts-summary-box">
                <Skills />
            </div>

            <div className="contacts-summary-box">
                <Projects />
            </div>

        </div>

    );
}

export default Card;
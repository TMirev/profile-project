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
                <p>Software Developer with a solid foundation in modern web technologies and hands-on experience, user-focused applications.
                    Through my Computer Science studies, I`ve built a strong foundation in programming, web development, and modern software practices.
                    Developed multiple technical projects — including interactive web applications, responsive UI designs, and API-driven tools — which have strengthened my practical skills and problem-solving abilities.
                    I`m capable in JavaScript, HTML, CSS, Python, React and version control with Git/GitHub, and I enjoy applying these skills to create clean, user-friendly, and visually engaging digital experiences.
                    My online technical projects work has taught me how to work independently, manage tasks, debug effectively, and continuously learn new technologies.
                    Driven, adaptable, and eager to grow, I`m now looking for a role where I can contribute to meaningful projects, learn from experienced professionals, and continue developing into a well-rounded software engineer. </p>

                <h3>Technical Experience</h3>
                <p>I have hands-on experience on building responsive, user-focused web application and website using JavaScript, React, HTML5 and CSS, Python. My work emphasis on clean structure, components, and accessible semantic markup. I regularly use Git and GitHub for version control, follow professional branching workflows and debug efifciently.
                    I`ve developed several projects including Notes Board App with dynamic UI updates and localStorage, a multi-section Travel Website with polished responsive design and a Watch UI focused on visual consistency and layout precisions. Across all projects, I pay attention to details and rely on strong understanding of modern front-end practices.` </p>

                <h3>Approach and Practice</h3>
                <p>I approach problems by breaking them into clear, manageable steps, then move forward with clean, maintainable solution. Combines clean code practices with a growing understanding of UI/UX principles to deliver easy to navigate user experience. Comfortable working with modern tools including React, GitHub, VsCode and CSS techniques including Flexbox, Grid and animations. Always curious to explore new tools, as a way to improve performance and refine my workflow.</p>

                <h3>Values and Goals</h3>
                <p>Passionate about solving problems, improving performance, writing maintainable code and building projects. Detail-oriented, I care about clarity, simplicity and creating interfaces that feel great to use. Key points for me are colalboration, clear communication as an integrity guide for how I work in teams and share goals. Commited to ongoing growth in Front-end development with a long-term role of becoming well-rounded software developer.</p>
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